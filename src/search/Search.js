import React, { Component } from 'react';
import logo from './images/logo.svg';
import './Search.css';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import * as Actions from './actions';

const mapStateToProps = (state) =>({
    user: {
      name: state.user.name,
      repo: state.user.repo
    }
});

const mapDispatchToProps = (dispatch) => ({
  onClick(name, repo) {
    Actions.searchIssues(name, repo)(dispatch);
  }
})

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
            <div className="search__user-icon">
              @
            </div>
            <div className="search__input search__input_user">
              <TextField
                hintText="user"
                fullWidth={true}
                ref={(input) => {this.userInput = input}}
                //value={this.props.user.name || ''}
              />
            </div>
            <div className="search__user-icon">
              /
            </div>
            <div className="search__input search__input_repo">
              <TextField
                hintText="repo"
                fullWidth={true}
                ref={(input) => {this.repoInput = input}}
                //value={this.props.user.repo || ''}
              />
            </div>
            <div className="search__button">
              <RaisedButton label="Search" primary={true} onClick={() => {this.onClick()}} />
            </div>
          </div>
          <div className="search__result">
          </div>
        </div>
      </div>
    );

  }


  onClick() {
    const name = this.userInput.getValue();
    const repo = this.repoInput.getValue();
    this.props.onClick(name, repo);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
