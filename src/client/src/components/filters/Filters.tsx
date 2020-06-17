import React, { Component } from 'react';
import './Filters.css';
import { facilities } from '../../data';
import { Filter, Facility, MapItem } from '../../utils/interfaces';
import { Type, locationCode, enterKeyPress, Language } from '../../utils/utils';
import { SlideDown } from 'react-slidedown';

class Filters extends Component<{
  filters: Filter[];
  lang: Language;
  location: locationCode;
  toggleFilter: (type: Type) => void;
  setSelected: (item: MapItem) => void;
}> {
  private location: locationCode;
  constructor(props, private items = new Map<Type, Facility[]>()) {
    super(props);
    this.location = props.building;
    this.populateItems();
  }

  populateItems = () => {
    this.items = new Map<Type, Facility[]>();
    facilities[this.props.location].forEach(i => {
      i.type.forEach(t => {
        if (this.items.has(t)) {
          this.items.get(t)?.push(i as Facility);
        } else {
          this.items.set(t, [i as Facility]);
        }
      });
    });
  };

  itemClickHandler = (item: Facility) => {
    const lang = this.props.lang;
    this.props.setSelected({
      x: item.x,
      y: item.y,
      floor: item.floor,
      id: item.id,
      title: item.title[lang],
      type: item.type[0],
      building: item.building,
      desc: item.desc ? item.desc[lang] : undefined,
    });
  };

  render() {
    const { filters, lang, location } = this.props;
    if (location !== this.location) {
      this.populateItems();
      this.location = location;
    }
    return (
      <div className="filters-list-wrapper">
        {
          <ul>
            {filters.map(filter => (
              <li
                tabIndex={0}
                className={`filters-list-item ${filter.selected ? 'selected' : 'non-selected'}`}
                key={filter.type}
                onKeyPress={e => {
                  e.key === 'Enter' && this.props.toggleFilter(filter.type);
                }}
              >
                <div
                  onClick={() => {
                    this.props.toggleFilter(filter.type);
                  }}
                >
                  <span className={`item-angle fa fa-angle-${filter.selected ? 'up' : 'down'}`} />
                  {filter.title[lang]}
                </div>
                <SlideDown className="filters-dropdown-slidedown">
                  {filter.selected && this.items.get(filter.type) && (
                    <ul className="selected-filter-list">
                      {this.items.get(filter.type)!.map(item => (
                        <li
                          key={item.id}
                          onClick={() => this.itemClickHandler(item)}
                          tabIndex={0}
                          onKeyPress={e => {
                            enterKeyPress(e, () => this.itemClickHandler(item));
                            e.stopPropagation();
                          }}
                        >
                          {item.title[lang]}
                          {item.icon !== '' ? (
                            <i className={`${item.icon} filter-item-icon`} aria-hidden="true"></i>
                          ) : (
                            <img
                              className="filter-item-icon filter-item-img-icon"
                              alt="alt"
                              src={require(`../../icons/${item.id}.png`)}
                            ></img>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </SlideDown>
              </li>
            ))}
          </ul>
        }
      </div>
    );
  }
}

export default Filters;
