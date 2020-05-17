import React, { Component } from 'react';
import { Building } from '../../utils/interfaces';
import FontAwesome from 'react-fontawesome';
import onClickOutside from 'react-onclickoutside';
import './DropDown.css';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import { enterKeyPress } from '../../utils/utils';

type DropDownState = {
  listOpen: boolean;
  headerTitle: string;
};
class DropDown extends Component<{
  title: string;
  list: Building[];
  toggleItem: any;
  keyPress: (e: any) => void;
}> {
  constructor(props: { title: string; list: Building[]; toggleItem: any; keyPress: (e: any) => void }) {
    super(props);
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    };
  }

  handleClickOutside() {
    this.hideList();
  }

  hideList = () => {
    this.setState({
      listOpen: false
    });
  };

  toggleList() {
    this.setState((prevState: DropDownState) => ({
      listOpen: !prevState.listOpen
    }));
  }
  toggleItem(title: string) {
    this.props.toggleItem(title);
    this.setTitle(title);
    this.hideList();
  }

  setTitle(title: string) {
    this.setState({
      headerTitle: title
    });
  }

  render() {
    let { list } = this.props;
    let { headerTitle } = this.state as DropDownState;
    const { listOpen } = this.state as DropDownState;

    if (list === undefined) list = [];
    headerTitle = headerTitle !== this.props.title ? this.props.title : headerTitle;
    if (list.length === 0) headerTitle = '-';

    return (
      <div className="dd-wrapper">
        <div
          className="dd-header"
          tabIndex={0}
          onKeyPress={e => enterKeyPress(e, () => this.toggleList())}
          onClick={() => this.toggleList()}
        >
          <div className="dd-header-title">{headerTitle}</div>
          <FontAwesome name={`angle-${listOpen ? 'up' : 'down'}`} size="2x" />
        </div>
        <SlideDown className={'my-dropdown-slidedown'}>
          {listOpen && (
            <ul className="dd-list">
              {list.length > 0 && (
                <li
                  className="dd-list-item"
                  key={'-'}
                  tabIndex={0}
                  onClick={() => {
                    this.toggleItem('-');
                  }}
                >
                  {'-'}
                </li>
              )}
              {list.map(item => (
                <li
                  className="dd-list-item"
                  key={item.id}
                  tabIndex={0}
                  onClick={() => {
                    this.toggleItem(item.title || item.id);
                  }}
                  onKeyPress={e => enterKeyPress(e, () => this.toggleItem(item.title || item.id))}
                >
                  {item.title || item.id}
                </li>
              ))}
            </ul>
          )}
        </SlideDown>
      </div>
    );
  }
}

export default onClickOutside(DropDown);
