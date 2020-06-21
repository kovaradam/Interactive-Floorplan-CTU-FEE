import React from 'react';
import contents from '../../data/text-content';
import './Legend.css';
import { Language, Type } from '../../utils/misc-utils';

type props = { lang: Language };

const Legend = ({ lang }: props) => {
  return (
    <section className="legend-wrapper">
      <p>
        {contents.types[Type.ELEVATOR][lang]}
        <img
          className="legend-icon verts"
          src={require('../../icons/elev.png')}
          alt="elev"
          height="30"
          width="30"
        ></img>
      </p>
      <p>
        {contents.types[Type.PATER][lang]}
        <img
          className="legend-icon verts"
          src={require('../../icons/pater.png')}
          alt="elev"
          height="30"
          width="30"
        ></img>
      </p>

      <p>
        {contents.legend.offices[lang]}
        <span className="legend-icon offices"></span>
      </p>
      <p>
        {contents.legend.services[lang]}
        <span className="legend-icon services"></span>
      </p>
      <p>
        {contents.legend.classrooms[lang]}
        <span className="legend-icon classrooms"></span>
      </p>
    </section>
  );
};

export default Legend;
