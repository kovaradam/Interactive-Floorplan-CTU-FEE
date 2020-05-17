import React from 'react';
import contents from '../../data/text-content';
import './Legend.css';
import { Language, Type } from '../../utils/utils';

type props = { lang: Language };

const Legend = ({ lang }: props) => {
  return (
    <section className="legend-wrapper">
      <div className="legend-item">
        {contents.types[Type.ELEVATOR][lang]}
        <img
          className="legend-icon verts"
          src={require('../../icons/elev.png')}
          alt="elev"
          height="30"
          width="30"
        ></img>
      </div>
      <div className="legend-item">
        {contents.types[Type.PATER][lang]}
        <img
          className="legend-icon verts"
          src={require('../../icons/pater.png')}
          alt="elev"
          height="30"
          width="30"
        ></img>
      </div>

      <div className="legend-item">
        {contents.legend.offices[lang]}
        <div className="legend-icon offices"></div>
      </div>
      <div className="legend-item">
        {contents.legend.services[lang]}
        <div className="legend-icon services"></div>
      </div>
      <div className="legend-item">
        {contents.legend.classrooms[lang]}
        <div className="legend-icon classrooms"></div>
      </div>
    </section>
  );
};

export default Legend;
