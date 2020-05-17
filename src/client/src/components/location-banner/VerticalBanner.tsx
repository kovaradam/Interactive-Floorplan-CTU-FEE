import React, { Component } from 'react';
import { Vertical } from '../../utils/interfaces';
import contents from '../../data/text-content';
import { Language } from '../../utils/utils';
import onClickOutside from 'react-onclickoutside';
import FloorSlider from '../floor-slider/FloorSlider';

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

  render() {
    const { x, y, type, from, to } = this.props.item;
    const { lang, floor } = this.props;
    return (
      <div className="location-banner-wrapper " style={{ top: y + 90, left: x + 70 }}>
        <div className="location-banner-top-box ">
          <h1 className="location-banner-header vertical-header">{contents.types[type][lang]}</h1>
          <FloorSlider
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
