import React, { Component } from 'react';
import './LocationBanner.css';
import onClickOutside from 'react-onclickoutside';
import { MapItem } from '../../utils/interfaces';
import contents from '../../data/text-content';
import icons from '../../data/fa-icons';
import { Language, message } from '../../utils/utils';

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
    const { name, id, x, y, type, desc } = this.props.item;
    const lang = this.props.lang;
    const isPerson = name !== '' && type === undefined;
    return (
      <div
        className="location-banner-wrapper"
        // onClick={this.handleClickOutside}
        style={{ top: y + 75, left: x + 60 }}
      >
        <div className="location-banner-top-box">
          <div className="location-banner-header">
            <h1>{name || id}</h1>
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
