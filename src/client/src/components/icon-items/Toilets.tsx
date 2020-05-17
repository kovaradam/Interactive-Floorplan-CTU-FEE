import React, { Component } from 'react';
import { buildings } from '../../data';
import './Toilets.css';
import { normalizeToMapY, normalizeToMapX } from '../../utils/utils';
class Toilets extends Component<{
  currentBuilding: string;
  currentFloor: number;
}> {
  inRange(t: { from: number; to: number }) {
    return t.to >= this.props.currentFloor && t.from <= this.props.currentFloor;
  }

  render() {
    const { currentBuilding } = this.props;
    return buildings[currentBuilding].toilets
      .filter(t => this.inRange(t))
      .map(t => (
        <div
          key={t.x + t.y}
          className="toilet-icon-wrapper"
          style={{ left: normalizeToMapX(t.x - 60), top: normalizeToMapY(t.y - 200) }}
        >
          {t.class.map(c => (
            <i key={c} className={`${c} toilet-icon`} aria-hidden="true"></i>
          ))}
        </div>
      ));
  }
}

export default Toilets;
