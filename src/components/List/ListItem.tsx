import React from 'react';
import { tacti } from '../../util/tacti';

interface Props {}

const ListItem: React.FC<Props> = ({ children }) => {
  return <li className={tacti('list-item')}>{children}</li>;
};

export default ListItem;
