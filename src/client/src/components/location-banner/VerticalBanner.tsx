import React, { Component } from 'react';
import { Vertical } from '../../utils/interfaces';
import contents from '../../data/text-content';
import { Language } from '../../utils/misc-utils';
import onClickOutside from 'react-onclickoutside';
import FloorPicker from '../floor-picker/FloorPicker';

class VerticalBanner extends Component<{
  item: Vertical;
  lang: Language;
  floor: number;
  clickOutsideHandler: (v: Vertical | null) => void;
  floorSelectHandler: (floor: number) => void;
  wheelHandler: (d: number) => void;
}> {
  handleClickOutside = () => {
    this.props.clickOutsideHandler(null);
  };

  ADJ_POS = {x: 72, y: 185}

  render() {
    const { x, y, type, from, to } = this.props.item;
    const { lang, floor } = this.props;
    return (
      <div className="location-banner-wrapper " style={{ top: y + this.ADJ_POS.y, left: x + this.ADJ_POS.x }}>
        <div className="location-banner-top-box ">
          <h1 className="location-banner-header vertical-header">{contents.types[type][lang]}</h1>
          <FloorPicker
            current={floor}
            from={from}
            to={to}
            lang={lang}
            item={this.props.item}
            setCurrentFloor={this.props.floorSelectHandler}
            wheelHandler={this.props.wheelHandler}
            hide={() => {}}
          />
        </div>
      </div>
    );
  }
}

export default onClickOutside(VerticalBanner);
