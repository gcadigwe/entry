import React, { FC } from 'react';
import FolderIcon from '@material-ui/icons/Folder';
import './Dashboard.css';

const Dashboard: FC = () => {
  return (
    <div className="Dashboard__container">
      <div className="Dashboard__left">
        <div className="Dashboard__leftcontainer">
          <h1 className="title">De-Box</h1>
          <button className="create__button">
            <FolderIcon /> Create new file
          </button>
        </div>
      </div>
      <div className="Dashboard__right">right</div>
    </div>
  );
};

export default Dashboard;
