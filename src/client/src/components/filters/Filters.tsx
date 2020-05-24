import React, { Component } from 'react';
import './Filters.css';
import { facilities, contents } from '../../data';
import { Filter, Facility, MapItem } from '../../utils/interfaces';
import { Type, locationCode, enterKeyPress, Language } from '../../utils/utils';
import { SlideDown } from 'react-slidedown';
import Legend from '../legend/Legend';

class Filters extends Component<{
  filters: Filter[];
  lang: Language;
  location: locationCode;
  visible: boolean;
  toggleFilter: (type: Type) => void;
  setSelected: (item: MapItem) => void;
  toggleVisibility: () => void;
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
          this.items.get(t)?.push(i);
        } else {
          this.items.set(t, [i]);
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
      name: item.title[lang],
      type: item.type[0],
      building: item.building,
      desc: item.desc?item.desc[lang]:undefined
    });
  };

  render() {
    const { filters, lang, location: building } = this.props;
    let visible = this.props.visible;
    if (building !== this.location) {
      this.populateItems();
      this.location = building;
    }
    return (
      <aside className={`filters-wrapper filters-${visible ? 'visible' : 'hidden'}`}>
        <h1 onClick={this.props.toggleVisibility}>
          {contents['filters-header-title'][lang]}
          <span className="fa fa-angle-right hide-filters-icon" />
        </h1>
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
                                className="filter-item-icon img-icon"
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
          <Legend lang={lang} />
        </div>
        <div tabIndex={0} className="help info">
          {contents.info.help[lang]}
        </div>
        <div tabIndex={0} className="fel-ref info">
          <a href={window.location.href}>{contents.info.ref[lang]}</a>
        </div>
        <div tabIndex={0} className="docs info">
          {'{}'}
        </div>
      </aside>
    );
  }
}

export default Filters;
