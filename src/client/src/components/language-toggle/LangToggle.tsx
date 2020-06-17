import React from 'react';
import './LangToggle.css';
import { enterKeyPress } from '../../utils/utils';

type props = { isCS: boolean; onClick: () => void };

const LangToggle = ({ isCS, onClick }: props) => {
  const classNames = isCS ? ['on', 'off'] : ['off', 'on'];
  return (
    <button
      className="lang"
      onClick={e => {
        e.currentTarget.blur();
        onClick();
      }}
      onKeyPress={e => enterKeyPress(e, () => onClick)}
    >
      <div className={`lang-switch ${classNames[0]}`}>CS</div>
      <div className={`lang-switch ${classNames[1]}`}>EN</div>
    </button>
  );
};

export default LangToggle;
