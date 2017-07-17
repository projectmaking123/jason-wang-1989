import React from 'react';
import { auth } from './firebase';
import { MenuItem } from 'react-bootstrap';

const CurrentUser = ({ user }) => {
  return (
    <a
      title="Sign Out"
      onClick={() => auth.signOut()}>
    </a>
  );
};

export default CurrentUser;
