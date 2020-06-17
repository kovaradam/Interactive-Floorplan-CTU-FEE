import React, { Component } from 'react';
import { Filter, MapItem } from '../../utils/interfaces';
import { Language, locationCode, Type } from '../../utils/utils';
import Legend from '../legend/Legend';
import { contents } from '../../data';
import Filters from '../filters/Filters';
import './SidePanel.css';

class SidePanel extends Component<{
  filters: Filter[];
  lang: Language;
  location: locationCode;
  visible: boolean;
  toggleFilter: (type: Type) => void;
  setSelected: (item: MapItem) => void;
  toggleVisibility: () => void;
  toggleLanguage: () => void;
}> {
  render() {
    const { lang, visible } = this.props;
    return (
      <aside className={`side-panel-wrapper side-panel-${visible ? 'visible' : 'hidden'}`}>
        <h1 onClick={this.props.toggleVisibility}>
          {contents['filters-header-title'][lang]}
          <span className="fa fa-angle-right hide-side-panel-icon" />
        </h1>

        <Filters
          filters={this.props.filters}
          lang={lang}
          location={this.props.location}
          toggleFilter={this.props.toggleFilter}
          setSelected={this.props.setSelected}
        />
        <div id="lang-toggle-container">
          <p>{contents.language[lang] + ':'}</p>
          <span onClick={this.props.toggleLanguage}>
            <p className={`lang-toggle-${lang===Language.CS?'active':'passive'}`}>CS</p>
            <p>/</p>
            <p className={`lang-toggle-${lang===Language.EN?'active':'passive'}`}>EN</p>
          </span>
        </div>

        <Legend lang={lang} />

        <section id="info-container">
          <div tabIndex={0} className="help info">
            {contents.info.help[lang]}
          </div>
          <div tabIndex={0} className="fel-ref info">
            <a href={window.location.href}>{contents.info.ref[lang]} <i className="fa fa-external-link" aria-hidden="true"></i></a>
          </div>
          <div tabIndex={0} className="docs info">
            {'{}'}
          </div>
        </section>
      </aside>
    );
  }
}

export default SidePanel;
