
import React from "react";
import './../styles/App.css';
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

const App = () => {

  
  return (
    <div>
        {/* Do not remove the main div */}
        <Switch>
          <Route exact path='/'  component={UserList} />
          <Route path='/users/:id' component={UserDetails}  />
        </Switch>
    </div>
  )
}

export default App
