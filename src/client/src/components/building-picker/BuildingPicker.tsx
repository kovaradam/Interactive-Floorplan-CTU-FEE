import React, { Component } from 'react';
import './BuildingPicker.css';
import FontAwesome from 'react-fontawesome';
import { Language, getFloorString, enterKeyPress } from '../../utils/utils';
import { getLocationOfBuilding } from '../../utils/location-utils';
import { buildings } from '../../data';
class BuildingPicker extends Component<{
  building: string;
  floor: number;
  lang: Language;
  arrowHandler: (d: number) => void;
}> {
  getTitle = () => {
    const { building, floor, lang } = this.props;
    return `${getLocationOfBuilding(building)}: ${buildings[building].title[lang]} - ${
      getFloorString(floor)[lang]
    }`;
  };

  render() {
    return (
      <section className="building-picker">
        <FontAwesome
          className="picker-arrow"
          name="angle-left"
          size="2x"
          onClick={e => {
            e.currentTarget.blur();
            this.props.arrowHandler(-1);
          }}
          tabIndex={0}
          onKeyPress={e => enterKeyPress(e, () => this.props.arrowHandler(-1))}
        />

        <div className={'building-title'}>{this.getTitle()}</div>

        <FontAwesome
          className="picker-arrow"
          name="angle-right"
          size="2x"
          onClick={e => {
            e.currentTarget.blur();
            this.props.arrowHandler(1);
          }}
          tabIndex={0}
          onKeyPress={e => enterKeyPress(e, () => this.props.arrowHandler(1))}
        />
      </section>
    );
  }
}

export default BuildingPicker;
