import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Adduser from '../views/adduser/index'
import Dashboad from '../views/dashboad/index'
import Settings from '../views/settings/index'
import Administrator from '../views/administrator/index'

const index = () => {
    return (
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Dashboad}/>
              <Route path="/adduser" exact component={Adduser}/>
              <Route path="/settings" exact component={Settings}/>
              <Route path="/administrator" exact component={Administrator} />
          </Switch>
        </BrowserRouter>
    );
};

export default index;