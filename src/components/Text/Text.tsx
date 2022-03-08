import React from 'react';
import PropTypes from 'prop-types';

import './Text.css';

interface TextProps {
  label: string;
}

const Text = (props: TextProps) => {
  return <p>{props.label}</p>;
};

Text.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Text;
