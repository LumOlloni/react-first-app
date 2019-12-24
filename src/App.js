import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";

import GithubState from "./context/github/gitHubState";
import User from "./components/users/User";
import Home from "./components/pages/Home";

import Alert from "./components/layouts/Alert";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import AlertState from "./context/alert/AlertState";

const App = () => {
  // const [users, setUsers] = useState([]);
  // const [user, setUser] = useState({});
  // const [repos, setRepos] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [alert, setAlert] = useState(null);

  // state = {
  //   users: [],
  //   repos: [],
  //   loading: false,
  //   alert: null,
  //   user: {}
  // };

  // const clearUsers = () => {
  //   setUsers([]);
  //   setLoading(false);
  // };

  // get Single Users
  // const getUser = async username => {
  //   // this.setState({ loading: true });

  //   setLoading(true);

  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   setUser(res.data);
  //   setLoading(false);
  //   // this.setState({ user: res.data, loading: false });
  // };

  // const showAlert = (msg, type) => {
  //   setAlert({ msg, type });

  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 5000);
  // };

  // Search Github users
  // const searchUsers = async text => {
  //   setLoading(true);

  //   const res = await axios.get(
  //     `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   setUsers(res.data.items);
  //   setLoading(false);
  // };

  // Get Users Repos
  // const getUserRepos = async username => {
  //   // this.setState({ loading: true });
  //   setLoading(true);

  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   setRepos(res.data);
  //   setLoading(false);
  // };

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route
                  exact
                  path='/'
                  component={Home}
                  // render={props => (
                  //   <Fragment>
                  //     <Search />
                  //     <Users />
                  //   </Fragment>
                  // )}
                ></Route>
                <Route exact path='/about' component={About}></Route>
                <Route
                  exact
                  path='/user/:login'
                  component={User}
                  // render={props => (
                  //   <User
                  //     {...props}
                  //     // getUser={getUser}
                  //     // getUserRepos={getUserRepos}
                  //     // repos={repos}
                  //     // user={user}
                  //     // loading={loading}
                  //   />
                  // )}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
