import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboad from "../views/dashboad/index";
import Settings from "../views/settings/index";
import Administrator from "../views/administrator/index";
import Adduser from "../views/user_management/add_user/index";
import Deleteuser from "../views/user_management/delete_user/index";
import Assigncostomer from "../views/user_management/assign_customer_from_field";

const index = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboad} />
        <Route path="/adduser" exact component={Adduser} />
        <Route path="/settings" exact component={Settings} />
        <Route path="/administrator" exact component={Administrator} />
        {/* user mangement router */}
        <Route
          path="/usermange"
          render={({ match: { path } }) => (
            <div>
              <Route exact path={path} component={Dashboad} />
              <Route path={`${path}/:id`} component={Adduser} />
            </div>
          )}
        />

        <Route path="/deleteuser" exact component={Deleteuser} />
        <Route path="/adduser" exact component={Adduser} />
        <Route path="/assigncustomer" exact component={Assigncostomer} />
      </Switch>
    </BrowserRouter>
  );
};

export default index;
