import React, { userReducer } from "react";
import axios from "axios";
import GitHubContext from "./githubContext";
import GitHubReducer from "./githubReducer";

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USER,
  GET_REPOS,
  GET_USER
} from "../types";
import { useReducer } from "react";
import githubContext from "./githubContext";

let githubClientid;
let githubClientSecrect;

if (process.env.NODE_ENV !== "production") {
  githubClientid = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecrect = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientid = process.env.GITHUB_CLIENT_ID;
  githubClientSecrect = process.env.GITHUB_CLIENT_SECRET;
}

const GitHubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GitHubReducer, initialState);

  // Search User
  const searchUsers = async text => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientid}&client_secret=${githubClientSecrect}`
    );

    // setUsers(res.data.items);
    // setLoading(false);
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };

  // Get User

  const getUser = async username => {
    // this.setState({ loading: true });

    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientid}&client_secret=${githubClientSecrect}`
    );

    // setUser(res.data);
    // setLoading(false);
    // this.setState({ user: res.data, loading: false });
    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };

  // Get Repos
  const getUserRepos = async username => {
    // this.setState({ loading: true });
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientid}&client_secret=${githubClientSecrect}`
    );

    // setRepos(res.data);
    // setLoading(false);
    dispatch({
      type: GET_REPOS,
      payload: res.data
    });
  };

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USER });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GitHubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}
    >
      {props.children}
    </GitHubContext.Provider>
  );
};

export default GitHubState;
