import React from 'react';
import { auth } from './firebase';

const CurrentUser = ({ user }) => {
  return (
    <a
      title="Sign Out"
      onClick={() => auth.signOut()}>
    </a>
  );
};

export default CurrentUser;
