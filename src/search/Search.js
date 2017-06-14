import React, { Component } from 'react';
import logo from './images/logo.svg';
import './Search.css';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <div className="search__header">
          <AppBar
            title="Welcome to react"
            iconElementLeft={
              <img src={logo} className="search__logo" alt="logo" />
            }
          />
        </div>
        <div className="search__content">
          <div className="search__input-wrap">
            <div className="search__input search__input_user">
              <TextField
                hintText="git user"
                fullWidth={true}
              />
            </div>
            <div className="search__input search__input_repo">
              <TextField
                hintText="git repo"
                fullWidth={true}
              />
            </div>
            <div className="search__button">
              <RaisedButton label="Search" primary={true} />
            </div>
          </div>
          <div className="search__result">
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
