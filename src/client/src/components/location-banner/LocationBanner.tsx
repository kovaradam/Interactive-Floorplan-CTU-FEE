import React, { Component } from 'react';
import './LocationBanner.css';
import onClickOutside from 'react-onclickoutside';
import { MapItem } from '../../utils/interfaces';
import contents from '../../data/text-content';
import icons from '../../data/fa-icons';
import { Language, message } from '../../utils/utils';
import { FIX_BANNER_POS } from '../../utils/map_constants';

class LocationBanner extends Component<{
  item: MapItem;
  lang: Language;
  clickOutsideHandler: () => void;
  mapButtonHandler: (i: MapItem) => void;
  setMessage: (m: message) => void;
}> {


  handleClickOutside = () => {
    this.props.clickOutsideHandler();
  };

  mapButtonHandler = (item: MapItem) => {
    this.props.mapButtonHandler(this.props.item);
    this.handleClickOutside();
  };

  shareButtonHandler = (id: string) => {
    this.copyToClipboard(id);
    const lang = this.props.lang;
    this.props.setMessage({ text: contents.messages.copy[lang], icon: icons.messages.copy });
  };

  copyToClipboard = (id: string) => {
    const tempInput = document.createElement('input');
    const href = window.location.href

    tempInput.value = href.slice(0, href.lastIndexOf('/') + 1) + id;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  };

  render() {
    const { title, id, x, y, type, desc } = this.props.item;
    const lang = this.props.lang;
    const isPerson = title !== '' && type === undefined;
    return (
      <div
        className="location-banner-wrapper"
        style={{ top: y + FIX_BANNER_POS.y, left: x + FIX_BANNER_POS.x }}
      >
        <div className="location-banner-top-box">
          <div className="location-banner-header">
            <h1>{title || id}</h1>
            <button className="share-button">
              <i
                className="fa fa-share-alt share-icon"
                aria-hidden="true"
                onClick={() => this.shareButtonHandler(id)}
              ></i>
              <p className="share-icon-desc">{contents.share[lang]}</p>
            </button>
            <button className="path-button">
              <i
                className="fa fa-share path-icon"
                aria-hidden="true"
                onClick={() => this.mapButtonHandler(this.props.item)}
              ></i>
              <p className="path-icon-desc">{contents.path[lang]}</p>
            </button>
          </div>

          <p className="location-banner-description">{desc ? desc : isPerson ? id : contents.types[type!][lang]}</p>
        </div>
      </div>
    );
  }
}

export default onClickOutside(LocationBanner);
