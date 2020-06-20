import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import stringSimilarity from 'string-similarity';
import { Language, locationCode, message, removeDiacritic } from '../../utils/utils';
import { MapItem, Facility } from '../../utils/interfaces';
import { findRoomById, getfloorNumber, getNumberFromId, getLocationFromId, isValidLocation } from './search-utils';
import { icons, contents, facilities } from '../../data';
import { FIX_ROOM_BANNER_POS } from '../../utils/map_constants';

type SearchBarState = {
  listOpen: boolean;
  facilityList: Facility[];
};

class SearchBar extends Component<{
  updateSearch: any;
  handleKeyDown: any;
  peopleList: any;
  lang: Language;
  currentLocation: string;
  searchButtonHandler: () => void;
  setSelected: (item: MapItem) => void;
  setMessage: (m: message) => void;
}> {
  constructor(props: {
    updateSearch: any;
    handleKeyDown: any;
    searchButtonHandler: any;
    setSelected: any;
    setMessage: any;
    currentLocation: string;
    peopleList: any;
    lang: Language;
  }) {
    super(props);
    this.state = {
      listOpen: true,
      facilityList: [],
    };
  }

  handleClickOutside() {
    this.hideList();
  }

  hideList = () => {
    this.setState({
      listOpen: false,
    });
  };

  showList = () => {
    this.setState({
      listOpen: true,
    });
  };

  searchBarClickhandler = () => {
    this.showList();
  };

  listPersonClickHandler = person => {
    const lang = this.props.lang;
    let room;
    try {
      room = findRoomById(person.rooms[0]);
    } catch (error) {
      if (isValidLocation(person.rooms[0])) {
        this.props.setMessage({
          text: contents.searchStatus.roomNotInMap[lang],
          icon: icons.searchStatus.roomNotInMap,
          error: true,
        });
        this.hideList();
        return;
      }

      this.props.setMessage({
        text: contents.searchStatus.wrongBuilding[lang],
        icon: icons.searchStatus.wrongBuilding,
        error: true,
      });
      this.hideList();
      return;
    }

    this.props.setSelected({
      x: room.x + FIX_ROOM_BANNER_POS.x,
      y: room.y + FIX_ROOM_BANNER_POS.y,
      floor: getfloorNumber(getNumberFromId(room.id)),
      id: room.id,
      title: person.fullName,
      building: getLocationFromId(room.id) as locationCode,
    });
    this.hideList();
  };

  facilityClickHandler = (item: Facility) => {
    const {lang} = this.props
    this.props.setSelected({
      x: item.x,
      y: item.y,
      floor: item.floor,
      id: item.id,
      title: item.title[lang],
      type: item.type[0],
      building: item.building,
      desc: item.desc?item.desc[lang]:undefined
    })
    this.hideList();
  }

  searchButtonHandler = () => {
    this.showList();
    this.props.searchButtonHandler();
  };

  updateSearch = (event: any) => {
    this.props.updateSearch(event);
    const { lang, currentLocation } = this.props;
    const value = removeDiacritic(event.target.value.trim().toLowerCase());
    const facilityList = facilities[currentLocation].filter(
      f => stringSimilarity.compareTwoStrings(removeDiacritic(f.title[lang].toLowerCase()), value) > 0.3,
    );
    this.setState({ facilityList: facilityList });
  };

  render() {
    const { peopleList: list, lang } = this.props;
    const { listOpen, facilityList } = this.state as SearchBarState;
    return (
      <div className="search-bar-wrapper">
        <input
          className="search-bar"
          type="text"
          placeholder={contents['search-placeholder'][lang]}
          onChange={this.updateSearch}
          onClick={this.searchBarClickhandler}
          onKeyDown={this.props.handleKeyDown}
        ></input>
        <button
          className="SearchButton fa fa-search"
          onClick={e => {
            this.searchButtonHandler();
            e.currentTarget.blur();
          }}
        ></button>
        {list.length > 0 && listOpen && (
          <ul className="search-list">
            {list.map(person => (
              <li
                className="search-list-item"
                key={person.username}
                onClick={() => this.listPersonClickHandler(person)}
              >
                <h2>{person.rooms[0]}</h2>
                <h1>{person.fullName}</h1>
              </li>
            ))}
          </ul>
        )}
        {facilityList.length > 0 && listOpen && (
          <ul className="search-list">
            {facilityList.map(facility => (
              <li className="search-list-item" key={facility.id} onClick={() => {this.facilityClickHandler(facility as any)}}>
                <h2>{facility.title[Math.abs(lang - 1)]}</h2>
                <h1>{facility.title[lang]}</h1>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default onClickOutside(SearchBar);
