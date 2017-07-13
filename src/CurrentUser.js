import React, { PropTypes } from 'react';
import { auth } from './firebase';

const CurrentUser = ({ user }) => {
  return (
    <div>
      <div>

        <button
          onClick={() => auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default CurrentUser;
