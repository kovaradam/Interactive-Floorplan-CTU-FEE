import React from 'react';
import { Path } from '../../utils/interfaces';
import './Path.css';

type props = {
  path: Path;
  current: boolean;
  setFloor: (f: number) => void;
};

const PathComponent = ({ path, current, setFloor }: props) => {
  return (
    <polyline
      onClick={() => setFloor(path.floor)}
      points={path.points}
      strokeWidth="1.5"
      className={`path ${current && 'path-current'}`}
      rx="4"
      markerStart="url(#pathMarkerStart)"
      markerEnd={`url(#pathMarker${path.isEndPath && current ? 'End' : 'Start'})`}
    />
  );
};

export default PathComponent;
