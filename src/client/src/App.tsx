import React, { Component } from 'react';
import './App.css';
import { Type, Language, locationCode, message, enterKeyPress, PathSearchStatus } from './utils/utils';
import { PathResult, Path, MapItem, Vertical, Filter } from './utils/interfaces';
import { filters, facilities, buildings, contents, icons } from './data';

import config from './config';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { getLocationOfBuilding } from './utils/location-utils';
import BuildingPicker from './components/building-picker/BuildingPicker';
import { findRoomById } from './components/search/search-utils';
import { buildPaths } from './components/path/path-utils';
import Search from './components/search/Search';
import MessageBox from './components/message-box/MessageBox';
import LangToggle from './components/language-toggle/LangToggle';
import Map from './components/map/Map';
import VerticalBanner from './components/location-banner/VerticalBanner';
import LocationBanner from './components/location-banner/LocationBanner';
import PathSearchBox from './components/path-search-box/PathSearchBox';
import FloorPicker from './components/floor-picker/FloorPicker';
import SidePanel from './components/side-panel/SidePanel';
import { FIX_ROOM_BANNER_POS } from './utils/map_constants';

interface AppState {
  floor: number;
  building: string;
  location: locationCode;
  language: Language;
  filters: Filter[];
  selectedItem: MapItem | null;
  selectedVertical: Vertical | null;
  paths: Path[] | null;
  pathSearchQuery: { start: MapItem | null; end: MapItem | null };
  pathSearchStatus: PathSearchStatus;
  message: message | null;
  filtersVisible: boolean;
  floorPickerVisible: boolean;
}

class App extends Component<{}, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      floor: config.default.floor,
      building: config.default.building,
      location: config.default.location as locationCode,
      language: config.default.language as Language,
      filters: filters,
      selectedItem: null,
      selectedVertical: null,
      paths: null,
      pathSearchQuery: { start: null, end: null },
      pathSearchStatus: 'none',
      message: null,
      filtersVisible: false,
      floorPickerVisible: false,
    };
  }

  componentDidMount() {
    if (window.location.pathname === '/') return;

    const lang =
      window.localStorage.getItem('language') === null
        ? Language.CS
        : Number.parseInt(window.localStorage.getItem('language')!);

    const query = window.location.pathname.slice(1);

    for (const building in buildings) {
      if (building === query) {
        this.toggleBuilding(building);
        return;
      }
    }
    let item;
    try {
      item = { ...findRoomById(query) };
      item.x = item.x + FIX_ROOM_BANNER_POS.x;
      item.y = item.y + FIX_ROOM_BANNER_POS.y;
    } catch (e) {
      for (const building in facilities) {
        const result = facilities[building].find(i => i.id === query);
        if (result) {
          item = { ...result };
          item.title = result.title[lang];
          item.type = result.type[0];
          item.building = building;
          break;
        }
      }
    }
    if (item) {
      item.desc = item.desc ? item.desc[lang] : undefined;
      this.setSelectedItem(item);
    } else {
      this.setMessage({
        text: contents.searchStatus.notFound[lang],
        icon: icons.searchStatus.notFound,
        error: true,
      });
    }
  }

  setDefaultState = () => {
    this.state.filters.forEach(f => (f.selected = false));
    this.setState({
      floor: config.default.floor,
      building: config.default.building,
      location: config.default.location as locationCode,
      pathSearchQuery: { start: null, end: null },
      paths: null,
      pathSearchStatus: 'none',
    });
  };

  toggleLanguage = () => {
    const language = this.state.language === Language.CS ? Language.EN : Language.CS;
    window.localStorage.setItem('language', language + '');
    this.setState({ language: language });
  };

  toggleBuilding = (building: string) => {
    const location = getLocationOfBuilding(building);
    const locationChange = location !== this.state.location;
    const { pathSearchQuery, paths } = this.state;
    if (this.state.building !== building) {
      this.setState({
        floor: buildings[building].defaultFloor,
        pathSearchQuery: locationChange ? { start: null, end: null } : pathSearchQuery,
        paths: locationChange ? null : paths,
        building: building,
        location: location,
      });
    }
  };

  setBuilding = (building: string) => {
    this.setState({
      building: building,
    });
  };

  toggleLocation = (location: locationCode) => {
    this.setState({
      floor: buildings[location].defaultFloor,
      location: location,
      building: location,
      pathSearchQuery: { start: null, end: null },
      paths: null,
    });
  };

  setFloorPickerVisible = (visible: boolean) => {
    // console.log(visible)
    this.setState({ floorPickerVisible: visible });
  };

  toggleFilter = (type: Type) => {
    const filters = this.state.filters;

    for (let i = 0; i < filters.length; i++) {
      if (filters[i].type === type) {
        filters[i].selected = !filters[i].selected;
        this.setState({ filters: filters });
        return;
      }
    }
  };

  setCurrentFloor = (floor: number) => {
    this.setState({
      floor: floor,
    });
  };

  setMessage = (message: message | null) => {
    this.setState({ message: message });
  };

  setPathSearchingStatus = (status: PathSearchStatus) => {
    this.setState({ pathSearchStatus: status });
  };

  setSelectedItem = (item: MapItem) => {
    if (item === null) {
      this.setState({ selectedItem: null });
    }
    if (this.state.pathSearchQuery.end !== null) {
      const end = this.state.pathSearchQuery.end;
      this.setState({ pathSearchQuery: { start: item, end: end } });
    } else {
      this.setState({
        selectedItem: item,
        floor: item.floor,
        building: item.building,
        location: getLocationOfBuilding(item.building),
        filtersVisible: false,
      });
    }
  };

  setSelectedVertical = (vert: Vertical | null) => {
    this.setState({ selectedVertical: vert });
  };

  hideBanner = () => {
    this.setState({
      selectedItem: null,
    });
  };

  setPaths = (pathResults: PathResult[]) => {
    const end = this.state.pathSearchQuery.end! as MapItem;
    this.setState({
      pathSearchStatus: 'none',
      paths: buildPaths(pathResults, end.floor),
    });
  };

  mapButtonHandler = (item: MapItem) => {
    this.setState({ pathSearchQuery: { start: null, end: item } });
  };

  hidePathSearchBox = () => {
    this.setState({
      pathSearchStatus: 'none',
      pathSearchQuery: { start: null, end: null },
      paths: null,
    });
  };

  wheelHandler = (dir: number) => {
    const curr = this.state.floor;
    if (dir > 0) {
      if (curr + 1 <= buildings[this.state.building].floorRange.to) {
        this.setState({ floor: curr + 1, selectedItem: null });
      }
    } else {
      if (curr - 1 >= buildings[this.state.building].floorRange.from) {
        this.setState({ floor: curr - 1, selectedItem: null });
      }
    }
  };

  buildingArrowHandler = (dir: number) => {
    const buildingCodes = Object.keys(buildings);
    let nextIdx = buildingCodes.findIndex(c => c === this.state.building) + dir;
    nextIdx = nextIdx < 0 ? buildingCodes.length - 1 : nextIdx % buildingCodes.length;
    this.toggleBuilding(buildingCodes[nextIdx]);
  };

  toggleFiltersVisibility = () => {
    const { filtersVisible } = this.state;
    this.setState({ filtersVisible: !filtersVisible });
  };

  render() {
    const {
      floor: currentFloor,
      language,
      selectedItem,
      selectedVertical,
      paths,
      pathSearchQuery,
      building,
      location,
      pathSearchStatus,
      message,
      filtersVisible,
      floorPickerVisible,
    } = this.state;
    const { from, to } = buildings[building].floorRange;
    const pathSearchBoxVisible = pathSearchQuery.end !== null;

    return (
      <div className="App">
        <header>
          <h1>{contents.title[language]}</h1>
        </header>
        <Search
          name="search"
          currentBuilding={building}
          currentLocation={location}
          toggleBuilding={this.toggleBuilding}
          toggleLocation={this.toggleLocation}
          setSelectedItem={this.setSelectedItem}
          lang={language}
          setMessage={this.setMessage}
        />

        <MessageBox message={message} setMessage={this.setMessage} />

        <LangToggle isCS={this.state.language === Language.CS} onClick={this.toggleLanguage} />

        <button
          className="home-button fa fa-home"
          onClick={e => {
            e.currentTarget.blur();
            this.setDefaultState();
          }}
          onKeyPress={e => enterKeyPress(e, this.setDefaultState)}
        />
        <div className={floorPickerVisible ? 'floor-picker-visible' : 'floor-picker-hidden'}>
          <FloorPicker
            item={null}
            current={currentFloor}
            from={from}
            to={to}
            lang={language}
            setCurrentFloor={this.setCurrentFloor}
            wheelHandler={this.wheelHandler}
            hide={() => this.setFloorPickerVisible(false)}
          />
        </div>
        <div className="delim"></div>

        <SidePanel
          lang={language}
          location={location}
          visible={filtersVisible}
          toggleFilter={this.toggleFilter}
          setSelected={this.setSelectedItem}
          toggleVisibility={this.toggleFiltersVisibility}
          toggleLanguage={this.toggleLanguage}
        />
        <button id="filters-button" className="main-page-button" onClick={this.toggleFiltersVisibility}>
          <i className="fa fa-bars" aria-hidden="true" />
        </button>

        <button id="floor-picker-button" className="main-page-button" onClick={() => this.setFloorPickerVisible(true)}>
          <i className="fa fa-angle-up" aria-hidden="true" />
          <i className="fa fa-angle-down" aria-hidden="true" />
        </button>

        {pathSearchStatus === 'searching' && pathSearchBoxVisible && (
          <div className="dimmer">
            <i className={'fa fa-spinner fa-pulse dimmer-icon'}></i>
          </div>
        )}

        {pathSearchStatus.includes('failed') && pathSearchBoxVisible && (
          <div className="dimmer" onClick={() => this.setPathSearchingStatus('none')}>
            <div>
              <p>
                {pathSearchStatus === 'failed-fetch'
                  ? contents.searchStatus.connectionLost[language]
                  : contents.searchStatus.pathNotFound[language]}
              </p>
              <i className="fa fa-close" aria-hidden="true" onClick={() => this.setPathSearchingStatus('none')}></i>
            </div>
          </div>
        )}

        {!buildings[building].ready && (
          <div className="dimmer">
            <div className="not-avalaible-dimmer">
              <i className={'fa fa-wrench slow-spin  dimmer-icon'}></i>
              <p>{contents.buildingNotAvalaible[language]}</p>
            </div>
          </div>
        )}

        <Map
          floorNumber={currentFloor}
          lang={language}
          paths={paths}
          building={building}
          selectedItem={selectedItem}
          setSelectedVertical={this.setSelectedVertical}
          setSelectedItem={this.setSelectedItem}
          setBuilding={this.toggleBuilding}
          setFloor={this.setCurrentFloor}
          swipeHorHandler={this.buildingArrowHandler}
          wheelHandler={this.wheelHandler}
        />

        <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={100} transitionLeaveTimeout={100}>
          {selectedVertical !== null && (
            <VerticalBanner
              lang={language}
              item={selectedVertical!}
              floor={currentFloor}
              clickOutsideHandler={this.setSelectedVertical}
              floorSelectHandler={this.setCurrentFloor}
              wheelHandler={this.wheelHandler}
            />
          )}
        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={100} transitionLeaveTimeout={100}>
          {selectedItem !== null && (
            <LocationBanner
              item={selectedItem}
              clickOutsideHandler={this.hideBanner}
              mapButtonHandler={this.mapButtonHandler}
              lang={language}
              setMessage={this.setMessage}
            />
          )}
        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={100} transitionLeaveTimeout={100}>
          {pathSearchBoxVisible && (
            <PathSearchBox
              query={pathSearchQuery}
              lang={language}
              hide={this.hidePathSearchBox}
              setPaths={this.setPaths}
              setSearching={this.setPathSearchingStatus}
              setCurrentFloor={this.setCurrentFloor}
              setBuilding={this.setBuilding}
            />
          )}
        </ReactCSSTransitionGroup>

        <BuildingPicker
          building={building}
          floor={currentFloor}
          lang={language}
          arrowHandler={this.buildingArrowHandler}
        />
      </div>
    );
  }
}

export default App;
