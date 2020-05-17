import React, { Component } from 'react';
import contents from '../../data/text-content';
import { Language, PathSearchStatus } from '../../utils/utils';
import myFetch from '../../utils/fetch';
import './PathSearchBox.css';
import { MapItem, PathResult } from '../../utils/interfaces';

class PathSearchBox extends Component<{
  query: { start: MapItem | null; end: MapItem | null };
  lang: Language;
  hide: () => void;
  setPaths: (p: PathResult[]) => void;
  setSearching: (s: PathSearchStatus) => void;
  setCurrentFloor: (n: number) => void;
  setBuilding: (b: string) => void;
}> {
  state = { dragged: false, accessibility: window.localStorage.getItem('accessibility') === 'on' };
  dragged = false;
  dX = 0;
  dY = 0;

  pathSearchButtonHandler = async () => {
    const { start, end } = this.props.query;
    if (start && end && start.id !== end.id) {
      const url = `path/${start.id}/${end.id}/${this.state.accessibility}`;
      this.props.setSearching('searching');
      myFetch(url)
        .then(result => {
          // console.log(result);
          if (result.error) {
            setTimeout(() => this.props.setSearching('failed-search'), 3000);
            return;
          }
          if (result.length > 0) {
            this.props.setPaths(result as PathResult[]);
          }
        })
        .catch(e => {
          // console.log(e);
          this.props.setSearching('failed-fetch');
        });
    }
  };

  dragStartHandler = (event: any) => {
    event.preventDefault();
    this.dragged = true;
    const box = event.target;
    if (box.id !== 'search-box') return;
    box.classList.add('dragged');
    const { top, left } = box.style;
    this.dX = event.clientX - Number.parseInt(left.slice(0, left.length - 2));
    this.dY = event.clientY - Number.parseInt(top.slice(0, top.length - 2));
  };

  dragging = (event: any) => {
    event.stopPropagation();
    //event.stopImmediatePropagation()
    const box = event.target;
    if (box.id !== 'search-box') return;
    const x = event.clientX - this.dX;
    if (this.dragged && x > 0 && x < 640) {
      box.style.left = x + 'px';
      box.style.top = event.clientY - this.dY + 'px';
    }
  };

  dragEndHandler = (event: any) => {
    event.preventDefault();
    event.target.classList.remove('dragged');
    this.dragged = false;
  };

  inputClickHandler = (item: MapItem) => {
    this.props.setCurrentFloor(item!.floor);
    this.props.setBuilding(item.building);
  };

  accessibilityButtonHandler = () => {
    const accessibility = this.state.accessibility;
    window.localStorage.setItem('accessibility', accessibility ? 'off' : 'on');
    this.setState({ accessibility: !accessibility });
  };

  render() {
    const { query, lang } = this.props;
    const { start, end } = query;
    const { accessibility } = this.state;
    const givenStart = query.start !== null;
    const startEntry = !givenStart ? contents.searchPathBox['search-path-placeholder'][lang] : start!.name || start!.id;
    let endEntry = end!.name || end!.id;
    return (
      <div
        id="search-box"
        className={`${this.dragged && 'dragged'}`}
        onMouseMove={e => this.dragging(e)}
        onMouseDown={e => this.dragStartHandler(e)}
        onMouseUp={e => this.dragEndHandler(e)}
        style={{ top: 200, left: 190 }}
      >
        <div className="input-container" onClick={e => e.preventDefault()}>
          <label>{contents.searchPathBox.start[lang]}</label>
          <p
            className={`path-search-input ${!givenStart && 'no-start'}`}
            onClick={() => givenStart && this.inputClickHandler(start!)}
          >
            {startEntry}
          </p>
        </div>
        <div className="input-container end-container">
          <label>{contents.searchPathBox.end[lang]}</label>
          <p
            title={end!.name || end!.id}
            className="path-search-input end-input"
            onClick={() => this.inputClickHandler(end!)}
          >
            {endEntry}
          </p>
          <i className="fa fa-close close-input-icon" aria-hidden="true" onClick={() => this.props.hide()}></i>
        </div>
        <div className="buttons-container">
          <button
            className={`accessibility-button ${accessibility ? 'accessibility-on' : 'accessibility-off'}`}
            onClick={this.accessibilityButtonHandler}
          >
            <i className="fa fa-wheelchair accessibility-icon" aria-hidden="true"></i>
          </button>
          <button
            className={`${givenStart && start!.id !== end!.id && 'active-button'} search-button ${lang===Language.CS? 'cs' : 'en'}`}
            onClick={() => this.pathSearchButtonHandler()}
          >
            <i className="fa fa-share search-path-icon" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default PathSearchBox;
