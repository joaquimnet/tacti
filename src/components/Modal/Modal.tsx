import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { tacti } from '../../util/tacti';
import './Modal.css';

export interface ButtonProps {
  open: boolean;
  onClose: () => void;
  style?: React.CSSProperties;
}

const Modal: React.FC<ButtonProps> = ({ style = {}, open, onClose = () => {}, children }) => {
  const [isClosing, setIsClosing] = useState(false);
  const backdropClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsClosing(true);
      setTimeout(onClose, 100);
    }
  };
  if (!open) {
    return null;
  }
  return (
    <div className={tacti('backdrop')} onClick={backdropClickHandler}>
      <div style={{ ...style }} className={classNames(tacti('modal'))}>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {};

export default Modal;
