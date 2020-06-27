import React from 'react';
import { MapItem } from '../../utils/interfaces';
import { Language } from '../../utils/misc-utils';
import { locationCode } from '../../data/locations'
import Legend from '../legend/Legend';
import contents from '../../data/text-content';
import Filters from '../filters/Filters';
import './SidePanel.css';

type props = {
  lang: Language;
  location: locationCode;
  visible: boolean;
  setSelected: (item: MapItem) => void;
  toggleVisibility: () => void;
  toggleLanguage: () => void;
};

const SidePanel = ({ lang, location, visible, setSelected, toggleVisibility, toggleLanguage }: props) => {
  return (
    <aside className={`side-panel-wrapper side-panel-${visible ? 'visible' : 'hidden'}`}>
      <h1 onClick={toggleVisibility}>
        {contents['filters-header-title'][lang]}
        <span className="fa fa-angle-right hide-side-panel-icon" />
      </h1>

      <Filters lang={lang} location={location} setSelected={setSelected} />
      

      <div id="lang-toggle-container">
        <p>{contents.language[(lang - 1)*(-1)] + ':'}</p>
        <span onClick={toggleLanguage}>
          <p className={`lang-toggle-${lang === Language.CS ? 'active' : 'passive'}`}>CS</p>
          <p>|</p>
          <p className={`lang-toggle-${lang === Language.EN ? 'active' : 'passive'}`}>EN</p>
        </span>
      </div>

      <Legend lang={lang} />

      <section id="info-container">
        <div tabIndex={0} className="help info">
          {contents.info.help[lang]}
        </div>
        <div tabIndex={0} className="fel-ref info">
          <a href={window.location.href}>
            {contents.info.ref[lang]} <i className="fa fa-external-link" aria-hidden="true"></i>
          </a>
        </div>
        <div tabIndex={0} className="docs info">
          {'{}'}
        </div>
      </section>
    </aside>
  );
};

export default SidePanel;
