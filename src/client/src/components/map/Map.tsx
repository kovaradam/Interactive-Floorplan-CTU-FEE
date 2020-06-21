import React, { Component } from 'react';
import './Map.css';
import PathComponent from '../path/Path';
import { Path, MapItem, Vertical, Facility } from '../../utils/interfaces';
import { Language, normalizeToMapX, normalizeToMapY } from '../../utils/misc-utils';
import { locationCode } from '../../data/locations';
import Toilets from '../icon-items/Toilets';
import Verticals from '../icon-items/Verticals';
import TouchHandler from '../../utils/touchHandler';
import { getLocationOfBuilding } from '../../utils/location-utils';
import {
  FIX_ROOM_BANNER_POS,
  FIX_ROOM_NUMBER_POS,
  FIX_ENTRY_BANNER_POS,
  FIX_FACILITY_ICON_POS,
  FIX_MARKER_POS,
} from '../../utils/map-fix-constants';
import buildings from '../../data/buildings';
import contents from '../../data/text-content';
import { facilities } from '../../data/facilities';

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
  defaultState = { scale: 1, translate: { x: 1, y: 1 } };
  state = this.defaultState
  scaleFix = false;
  prevSelectedItemId = '';
  swipeHandler: any = null;
  map: HTMLElement | null = null;

  SCALE_BOUND = { min: 1, max: 2 };

  setMapRef = (element: HTMLElement) => {
    this.map = element;
  };

  pinchZoomHandler = (scale: number) => {
    scale += this.state.scale;
    if (scale > this.SCALE_BOUND.max) scale = this.SCALE_BOUND.max;
    if (scale <= this.SCALE_BOUND.min) {
      this.swipeHandler.zoomedIn = false;
      this.setState(this.defaultState);
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
      // classroom
      item.y += FIX_ROOM_BANNER_POS.y;
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
    this.map!.addEventListener('touchend', (e: TouchEvent) => this.swipeHandler.touchEnd(e), { passive: false });
    this.map!.addEventListener('touchstart', (e: TouchEvent) => this.swipeHandler.touchStart(e), { passive: false });
    this.map!.addEventListener('touchmove', (e: TouchEvent) => this.swipeHandler.touchMove(e), { passive: false });
    this.map!.addEventListener('touchcancel', (e: TouchEvent) => this.swipeHandler.touchCancel(e), { passive: false });
  }

  shouldComponentUpdate(_, __) {
    return !this.scaleFix;
  }

  componentDidUpdate() {
    if (this.scaleFix) {
      this.setState(this.defaultState);
      this.scaleFix = false;
    }
  }

  // FOR DRAWING PURPOSES ONLY
  // svg: SVGSVGElement | null = null;
  // points = '';
  // registerPoints = (e: React.MouseEvent) => {
  //   const point = this.svg!.createSVGPoint() as SVGPoint;
  //   point.x = e.clientX;
  //   point.y = e.clientY;
  //   const cursor = point.matrixTransform(this.svg!.getScreenCTM()!.inverse());
  //   this.points += `${cursor.x.toFixed()},${cursor.y.toFixed()} `;
  //   console.log(this.points);
  // };
  // FOR DRAWING PURPOSES ONLY

  render() {
    const { floorNumber: floor, paths, lang, building, selectedItem } = this.props;
    const { classrooms } = buildings[building][this.props.floorNumber];
    const { outlines, depts, entries } = buildings[building];
    const currFacilities = facilities[getLocationOfBuilding(building)].filter(
      (i: Facility) => i.floor === floor && i.building === building,
    );
    let scale = this.state.scale;
    let translate = this.state.translate;
    if (selectedItem && selectedItem.id !== this.prevSelectedItemId) {
      this.scaleFix = true;
      scale = this.defaultState.scale;
      translate = this.defaultState.translate
    }
    this.prevSelectedItemId = selectedItem?.id || '';

    return (
      <div className="map-container">
        <section
          className={`map`}
          ref={this.setMapRef}
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
                <path d="m 768,896 q 0,106 -75,181 -75,75 -181,75 -106,0 -181,-75 -75,-75 -75,-181 0,-106 75,-181 75,-75 181,-75 106,0 181,75 75,75 75,181 z m 256,0 q 0,-109 -33,-179 L 627,-57 q -16,-33 -47.5,-52 -31.5,-19 -67.5,-19 -36,0 -67.5,19 Q 413,-90 398,-57 L 33,717 Q 0,787 0,896 q 0,212 150,362 150,150 362,150 212,0 362,-150 150,-150 150,-362 z" />
              </marker>
            </defs>
            {outlines
              .filter(o => o.from <= floor && (o.hide ? o.to >= floor : true))
              .map(outline => (
                <polygon
                  className="outline"
                  key={outline.id}
                  id={outline.id}
                  points={outline.points}
                  strokeWidth="1.5"
                  stroke={outline.to >= floor ? '#000' : '#ccc'}
                  fillOpacity="0"
                />
              ))}
            {classrooms.map(room => (
              <polygon
                id={room.id}
                key={room.id}
                points={room.points}
                onClick={() => this.roomClickHandler({ ...room })}
                className={'classroom room ' + contents.types[room.type][1]}
                stroke="#000"
              />
            ))}

            {currFacilities.map(room => (
              <polygon
                id={room.id}
                key={room.id}
                points={room.points}
                onClick={() => this.roomClickHandler({ ...room }!)}
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

          {classrooms.map((room: MapItem) => (
            <div
              className="room-number-wrapper"
              style={{
                top: normalizeToMapY(room.y + FIX_ROOM_NUMBER_POS.y),
                left: normalizeToMapX(room.x + FIX_ROOM_NUMBER_POS.x),
              }}
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
                      x: e.x + FIX_ENTRY_BANNER_POS.x,
                      y: e.y + (e.adjacent !== '' ? FIX_ENTRY_BANNER_POS.y : 0),
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
          {currFacilities.map((i: Facility) =>
            i.icon !== '' ? (
              <i
                key={i.id}
                className={`${i.icon} filter-item-map-icon`}
                aria-hidden="true"
                style={{
                  top: normalizeToMapY(i.y + FIX_FACILITY_ICON_POS.y),
                  left: normalizeToMapX(i.x + FIX_FACILITY_ICON_POS.x),
                }}
              ></i>
            ) : (
              <img
                key={i.id}
                className="filter-item-map-icon img-icon"
                alt="alt"
                style={{
                  top: normalizeToMapY(i.y + FIX_FACILITY_ICON_POS.y),
                  left: normalizeToMapX(i.x + FIX_FACILITY_ICON_POS.x),
                }}
                src={require(`../../icons/${i.id}.png`)}
              ></img>
            ),
          )}
          {selectedItem !== null && selectedItem.floor === floor && (
            <div
              id="item-marker-wrapper"
              style={{
                left: normalizeToMapX(selectedItem.x + FIX_MARKER_POS.x),
                top: normalizeToMapY(selectedItem.y + FIX_MARKER_POS.y),
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
