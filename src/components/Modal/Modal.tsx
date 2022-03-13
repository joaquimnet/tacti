import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { tacti } from '../../util/tacti';
import { DefaultProps } from '../../util/make-component';
import './Modal.css';

export interface ButtonProps extends DefaultProps {
  open: boolean;
  onClose?: () => void;
}

const Modal: React.FC<ButtonProps> = ({ style = {}, open, onClose, children }) => {
  const backdropClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose?.();
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

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

export default Modal;
