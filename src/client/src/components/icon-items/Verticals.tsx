import React, { Component } from 'react';
import './Verticals.css';
import { Type, normalizeToMapY, normalizeToMapX } from '../../utils/utils';
import { verticals } from '../../data';
import { Vertical } from '../../utils/interfaces';
class Verticals extends Component<{
  floor: number;
  building: string;
  accessibility: boolean;
  setSelected: (v: Vertical) => void;
}> {
  verticalClickHandler = (v: Vertical, e) => {
    this.props.setSelected(v);
  };

  getIcon(v: Vertical) {
    if (v.type === Type.ELEVATOR) {
      return require('../../icons/elev.png');
    } else if (v.type === Type.PATER) {
      return require('../../icons/pater.png');
    } else {
      return require(`../../icons/${v.icon}.png`);
    }
  }
  render() {
    const { floor, building } = this.props;
    return (
      <div>
        {verticals[building]
          .filter(v => v.from <= floor && v.to >= floor)
          .map(v => (
            <div key={v.id}>
              <img
                onClick={e => this.verticalClickHandler(v, e)}
                style={{
                  top: normalizeToMapY(v.y),
                  left: normalizeToMapX(v.x),
                  height: normalizeToMapY(v.height),
                  width: normalizeToMapX(v.width || v.height),
                  transform: v.transform || '',
                }}
                className={`vertical-icon ${v.id}`}
                src={this.getIcon(v)}
                alt="elev"
                height="30"
                width="30"
              ></img>
            </div>
          ))}
      </div>
    );
  }
}

export default Verticals;
