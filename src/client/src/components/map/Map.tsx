import React, { Component } from 'react';
import './Map.css';
import { buildings, facilities, contents } from '../../data';
import PathComponent from '../path/Path';
import { Path, MapItem, Vertical } from '../../utils/interfaces';
import { Language, locationCode, normalizeToMapX, normalizeToMapY } from '../../utils/utils';
import Toilets from '../icon-items/Toilets';
import Verticals from '../icon-items/Verticals';
import TouchHandler from '../../utils/touchHandler';
import { getLocationOfBuilding } from '../../utils/location-utils';

class Map extends Component<{
  floorNumber: number;
  lang: Language;
  paths: Path[] | null;
  building: string;
  selectedItem: MapItem | null;
  setSelectedItem: (item: MapItem) => void;
  setSelectedVertical: (v: Vertical) => void;
  setFloor: (f: number) => void;
  wheelHandler: (d: number) => void;
  swipeHorHandler: (dir: number) => void;
  setBuilding: (b: locationCode) => void;
}> {
  state = { scale: 1, translate: { x: 1, y: 1 } };
  swipeHandler;
  map;
  scaleFix = false;
  prevSelectedItemId = '';

  pinchZoomHandler = (scale: number) => {
    scale += this.state.scale;
    if (scale > 2) scale = 2;
    if (scale < 1) {
      this.swipeHandler.zoomedIn = false;
      this.setState({ scale: 1, translate: { x: 1, y: 1 } });
    } else {
      this.setState({ scale: scale });
    }
  };

  zoomPanHandler = (dX: number, dY: number) => {
    dX = this.state.translate.x + dX;
    dY = this.state.translate.y + dY;
    this.setState({ translate: { x: dX, y: dY } });
  };

  roomClickHandler = (item: any) => {
    const lang = this.props.lang;
    this.prevSelectedItemId = item.id;
    item.floor = this.props.floorNumber;
    item.building = this.props.building;
    item.desc = item.desc ? item.desc[lang] : undefined;
    if (item.title !== undefined) {
      item.type = item.type[0];
      item.title = item.title[lang];
    } else {
      item.y += 18;
    }
    this.props.setSelectedItem(item);
  };

  componentDidMount() {
    this.swipeHandler = new TouchHandler(
      this.props.swipeHorHandler,
      this.props.wheelHandler,
      this.pinchZoomHandler,
      this.zoomPanHandler,
    );
    this.map.addEventListener('touchend', (e: TouchEvent) => this.swipeHandler.touchEnd(e), { passive: false });
    this.map.addEventListener('touchstart', (e: TouchEvent) => this.swipeHandler.touchStart(e), { passive: false });
    this.map.addEventListener('touchmove', (e: TouchEvent) => this.swipeHandler.touchMove(e), { passive: false });
    this.map.addEventListener('touchcancel', (e: TouchEvent) => this.swipeHandler.touchCancel(e), { passive: false });
  }

  shouldComponentUpdate(_, __) {
    return !this.scaleFix;
  }

  componentDidUpdate() {
    if (this.scaleFix) {
      this.setState({ scale: 1, translate: { x: 1, y: 1 } });
      this.scaleFix = false;
    }
  }

  render() {
    const { floorNumber: floor, paths, lang, building, selectedItem } = this.props;
    const { classrooms } = buildings[building][this.props.floorNumber];
    const { outlines, depts, entries } = buildings[building];
    const currFacilities = facilities[getLocationOfBuilding(building)].filter(
      i => i.floor === floor && i.building === building,
    );
    let scale = this.state.scale;
    const translate = this.state.translate;
    if (selectedItem && selectedItem.id !== this.prevSelectedItemId) {
      this.scaleFix = true;
      scale = 1;
      translate.x = 1;
      translate.y = 1;
    }
    this.prevSelectedItemId = selectedItem?.id || '';

    return (
      <div className="map-container">
        <section
          className={`map`}
          ref={ref => (this.map = ref)}
          onWheel={e => {
            this.props.wheelHandler(-e.deltaY);
          }}
          style={{ transform: `scale(${scale}) translate(${translate.x}px,${translate.y}px)` }}
        >
          <svg width="720" height="540" viewBox="0 0 580 400">
            <defs>
              <marker id="pathMarkerStart" markerWidth="4" markerHeight="4" refX="2" refY="2">
                <circle cx="2" cy="2" r="0.9" />
              </marker>
              <marker id="pathMarkerEnd" markerWidth="4" markerHeight="8" refX="2" refY="8">
                <path
                  d="m 768,896 q 0,106 -75,181 -75,75 -181,75 -106,0 -181,-75 -75,-75 -75,-181 0,-106 75,-181 75,-75 181,-75 106,0 181,75 75,75 75,181 z m 256,0 q 0,-109 -33,-179 L 627,-57 q -16,-33 -47.5,-52 -31.5,-19 -67.5,-19 -36,0 -67.5,19 Q 413,-90 398,-57 L 33,717 Q 0,787 0,896 q 0,212 150,362 150,150 362,150 212,0 362,-150 150,-150 150,-362 z"
                />
              </marker>
            </defs>
            {outlines
              .filter(o => o.from <= floor && (o.hide ? o.to >= floor : true))
              .map(outline =>
                outline.points ? (
                  <polygon
                    className="outline"
                    key={outline.id}
                    id={outline.id}
                    points={outline.points}
                    strokeWidth="1.5"
                    stroke={outline.to >= floor ? '#000' : '#ccc'}
                    fillOpacity="0"
                  />
                ) : (
                  <path
                    key={outline.id}
                    id={outline.id}
                    d={outline.d}
                    strokeWidth="1.5"
                    stroke={outline.to >= floor ? '#000' : '#ccc'}
                    fill="#fff"
                    fillOpacity="0"
                  />
                ),
              )}
            {classrooms.map(room => (
              <polygon
                id={room.id}
                key={room.id}
                points={room.points}
                onClick={e => this.roomClickHandler({ ...room })}
                className={'classroom room ' + contents.types[room.type][1]}
                stroke="#000"
              />
            ))}

            {currFacilities.map(room => (
              <polygon
                id={room.id}
                key={room.id}
                points={room.points}
                onClick={e => this.roomClickHandler({ ...room }!)}
                strokeWidth="1.5"
                className="facility room"
                stroke="#000"
              />
            ))}

            {paths !== null &&
              paths
                .filter(p => p.building === building)
                .map(path => (
                  <PathComponent
                    key={`${path.points}`}
                    setFloor={this.props.setFloor}
                    path={path}
                    current={path.floor === floor ? true : false}
                  />
                ))}
          </svg>
          {depts.map(dept => (
            <h1
              key={dept.id + dept.y}
              className="dept-label"
              style={{ top: normalizeToMapY(dept.y), left: normalizeToMapX(dept.x) }}
            >
              {dept.id}
            </h1>
          ))}

          {classrooms.map(room => (
            <div
              className="room-number-wrapper"
              style={{ top: normalizeToMapY(room.y + 8), left: normalizeToMapX(room.x) }}
              key={room.id}
            >
              <h1 className="room-number-header">{room.id.slice(room.id.indexOf('-') + 1)}</h1>
            </div>
          ))}
          {entries.map(e => (
            <div
              className={`entry-wrapper ${floor === e.floor && 'entry-current'}`}
              style={{
                top: normalizeToMapY(e.y),
                left: normalizeToMapX(e.x),
                transform: `rotate(${e.rotate ? e.rotate : 0}deg)`,
              }}
              key={e.id}
            >
              <div className={`entry-contents ${e.adjacent !== '' && 'entry-adjacent'}`}>
                <h1
                  className={`entry-header ${e.adjacent !== '' && 'adjacent'}`}
                  onClick={() => e.adjacent !== '' && this.props.setBuilding(e.adjacent)}
                >
                  {e.title}
                </h1>
                <i
                  key={e.id}
                  className={`${e.icon} entry-icon`}
                  aria-hidden="true"
                  onClick={() =>
                    this.props.setSelectedItem({
                      x: e.x,
                      y: e.y + (e.adjacent !== '' ? 50 : 0),
                      floor: e.floor,
                      id: e.id,
                      title: e.title,
                      desc: contents.entry[lang],
                      building: building,
                    })
                  }
                ></i>
              </div>
            </div>
          ))}
          <Toilets currentBuilding={building} currentFloor={floor} />
          <Verticals
            floor={floor}
            building={building}
            accessibility={false}
            setSelected={this.props.setSelectedVertical}
          />
          {currFacilities.map(i =>
            i.icon !== '' ? (
              <i
                key={i.id}
                className={`${i.icon} filter-item-map-icon`}
                aria-hidden="true"
                style={{ top: normalizeToMapY(i.y - 20), left: normalizeToMapX(i.x - 5) }}
              ></i>
            ) : (
              <img
                key={i.id}
                className="filter-item-map-icon img-icon"
                alt="alt"
                style={{ top: normalizeToMapY(i.y - 20), left: normalizeToMapX(i.x - 5) }}
                src={require(`../../icons/${i.id}.png`)}
              ></img>
            ),
          )}
          {selectedItem !== null && selectedItem.floor === floor && (
            <div
              id="item-marker-wrapper"
              style={{
                left: normalizeToMapX(selectedItem.x - 15),
                top: normalizeToMapY(selectedItem.y - 60),
                transform: `scale(${1 - scale / 5})`,
              }}
            >
              <i className="fa fa-map-marker item-marker" aria-hidden="true"></i>
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default Map;
