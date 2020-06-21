import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './FloorPicker.css';
import { Vertical } from '../../utils/interfaces';
import { enterKeyPress, Language } from '../../utils/misc-utils';
import { getFloorString } from '../../utils/location-utils';
import onClickOutside from 'react-onclickoutside';

class FloorPicker extends Component<{
  current: number;
  from: number;
  to: number;
  item: Vertical | null;
  lang: Language;
  setCurrentFloor: (floor: number) => void;
  wheelHandler: (d: number) => void;
  hide: () => void;
}> {
  state = { current: this.props.current };

  handleClickOutside = () => {
    this.props.hide();
  };

  numberClickHandler = (floor: number) => {
    if (this.floorInRange(floor)) this.props.setCurrentFloor(floor);
  };

  getFloorNumbers() {
    const curr = this.props.current;
    return [curr + 2, curr + 1, curr, curr - 1, curr - 2];
  }

  floorInRange(floor: number) {
    return floor >= this.props.from && floor <= this.props.to;
  }

  wheelHandler(dir: number) {
    dir = Math.sign(dir);
    if (this.floorInRange(this.props.current + dir)) this.props.wheelHandler(dir);
  }

  render() {
    const floor = this.props.current;
    const lang = this.props.lang
    const inBanner = this.props.item !== null;
    return (
      <div
        className={`picker-wrapper ${inBanner && 'in-banner-wrapper'}`}
        onWheel={e => {
          this.wheelHandler(-e.deltaY);
        }}
      >
        <FontAwesome
          className={`${inBanner ? 'picker-left' : 'picker-up'} picker-arrow`}
          name={`angle-${inBanner ? 'left' : 'up'}`}
          size="2x"
          onClick={e => {
            e.currentTarget.blur();
            this.wheelHandler(1);
          }}
          tabIndex={0}
          onKeyPress={e => enterKeyPress(e, () => this.wheelHandler(1))}
        />

        <ul className={`${!inBanner ? 'picker-list' : 'in-banner-list'}`}>
          {this.getFloorNumbers().map(item => (
            <li
              className={`picker-list-item dist-${Math.abs(floor - item)} ${this.floorInRange(item) ? 'vis' : 'unvis'} ${
                floor === item ? 'current' : 'other'
              } ${inBanner && 'in-banner-item'}`}
              key={item}
              onClick={() => {
                this.numberClickHandler(item);
              }}
            >
              {this.floorInRange(item) ? item : ''}
            </li>
          ))}
        </ul>
            <p id="floor-title">{getFloorString(floor)[lang]}</p>
        <FontAwesome
          className={`${inBanner ? 'picker-right' : 'picker-down'} picker-arrow`}
          name={`angle-${inBanner ? 'right' : 'down'}`}
          size="2x"
          onClick={e => {
            e.currentTarget.blur();
            this.props.wheelHandler(-1);
          }}
          tabIndex={0}
          onKeyPress={e => enterKeyPress(e, () => this.wheelHandler(-1))}
        />
      </div>
    );
  }
}

export default onClickOutside(FloorPicker);
