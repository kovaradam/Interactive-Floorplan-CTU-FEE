import React, { Component } from 'react';
import './Search.css';
import DropDown from './DropDown';
import SearchBar from './SearchBar';
import { MapItem, Room } from '../../utils/interfaces';
import { locationCode, message, Language } from '../../utils/utils';
import myFetch from '../../utils/fetch';
import { buildings, contents, locations, icons } from '../../data';
import { findRoom, findRoomById } from './search-utils';
import { deptInBuilding, getBuildingOfDept } from '../../utils/location-utils';

type SearchState = {
  currentBuilding: string;
  currentLocation: string;
  currentDepartment: string;
  searchBarValue: string;
  searchResults: [];
};
export class Search extends Component<
  {
    name: string;
    currentBuilding: string;
    currentLocation: string;
    toggleBuilding: (id: string) => void;
    toggleLocation: (id: locationCode) => void;
    setSelectedItem: (item: MapItem) => void;
    lang: Language;
    setMessage: (m: message | null) => void;
  },
  SearchState
> {
  constructor(props) {
    super(props);
    this.state = {
      currentBuilding: props.currentBuilding,
      currentLocation: props.currentLocation,
      currentDepartment: '-',
      searchBarValue: '',
      searchResults: []
    };
  }

  setFoundItem(room: Room, name = '') {
    this.props.setSelectedItem({
      x: room.x,
      y: room.y + 24,
      floor: room.floor,
      id: room.id,
      title: name,
      type: room.type,
      desc: room.desc? room.desc[this.props.lang] : undefined,
      building: room.building!
    });
  }

  toggleDepartment = (id: string) => {
    if (id === '-') {
      this.setState({ currentDepartment: '-' });
      return;
    }
    const { currentBuilding } = this.props;
    if (!deptInBuilding(id, currentBuilding)) {
      this.props.toggleBuilding(getBuildingOfDept(id));
    }
    this.setState({ currentDepartment: id });
  };

  toggleLocation = (title: string) => {
    this.setState({ currentDepartment: '-' });
    if (title !== '-') {
      this.props.toggleLocation(title as locationCode);
    }
  };

  searchButtonHandler = async () => {
    if (this.state.searchBarValue === '') return;
    const query = this.state.searchBarValue.slice(0,30);
    const building = this.state.currentBuilding;
    const dept = this.state.currentDepartment;
    const roomSearch = building !== '-' && dept !== '-';
    const lang = this.props.lang;
    if (roomSearch) {
      const room = findRoom(building, dept, query);
      if (room !== null) {
        this.setFoundItem(room);
        return;
      }
    }
    try {
      const room = findRoomById(query);
      if (room !== null) {
        this.setFoundItem(room);
        return;
      }
    } catch (e) {}

    let url = `people/${query}`;
    this.props.setMessage({
      text: contents.searchStatus.active[lang],
      icon: icons.searchStatus.active,
      search: true
    });
    myFetch(url)
      .then(result => {
        if (result.error) {
          this.props.setMessage({
            text: contents.searchStatus.notFound[lang],
            icon: icons.searchStatus.notFound,
            error: true,
            search: false
          });
        } else if (result.length > 0) {
          this.setState({ searchResults: result });
          this.props.setMessage(null);
        } else {
          this.props.setMessage({
            text: contents.searchStatus.notFound[lang],
            icon: icons.searchStatus.notFound,
            error: true,
            search: false
          });
        }
      })
      .catch(e => {
        this.props.setMessage({
          text: contents.searchStatus.connectionLost[lang],
          icon: icons.searchStatus.connectionLost,
          error: true,
          search: false
        });
      });
  };

  updateSearch = (event: any) => {
    const value = event.target.value.trim();
    if (value === '') {
      this.setState({
        searchBarValue: value,
        searchResults: []
      });
    } else {
      this.setState({ searchBarValue: value });
    }
  };

  handleKeyDown = (event: any) => {
    if (event.key === 'Enter') this.searchButtonHandler();
  };

  render() {
    const { currentLocation } = this.props;
    const depts: any[] = [];
    for (const building in buildings) {
      if (buildings[building].location === currentLocation) {
        buildings[building].depts.forEach(dept => {
          if (depts.findIndex(d => d.id === dept.id) === -1) depts.push(dept);
        });
      }
    }
    return (
      <section className="Search">
        <DropDown
          title={currentLocation}
          list={locations}
          toggleItem={this.toggleLocation}
          keyPress={this.handleKeyDown}
        />
        <div className="dd-delimiter">:</div>
        <DropDown
          title={this.state.currentDepartment}
          list={depts}
          toggleItem={this.toggleDepartment}
          keyPress={this.handleKeyDown}
        />
        <div className="dd-delimiter">-</div>
        <SearchBar
          updateSearch={this.updateSearch}
          handleKeyDown={this.handleKeyDown}
          currentLocation={currentLocation}
          searchButtonHandler={this.searchButtonHandler}
          setSelected={this.props.setSelectedItem}
          setMessage={this.props.setMessage}
          peopleList={this.state.searchResults}
          lang={this.props.lang}
        />
      </section>
    );
  }
}

export default Search;
