import React from 'react';
import Header from '../Header';
import AsideBar from './Aside';

const Users = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col col-md-3 col-lg-2 aside-bar">
            <AsideBar />
          </div>
          <div className="col col-md-9 col-lg-10">
            <h1 className="h1">Users page</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Users;