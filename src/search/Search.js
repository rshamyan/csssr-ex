import React, { Component } from 'react';
import logo from './images/logo.svg';
import './Search.css';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import * as Actions from './actions';
import IssuesTable from '../components/issues-table/IssuesTable';
import Pagination from '../components/pagination/Pagination';

const mapStateToProps = ({issues: {next, prev, last, first, current, byId = {}, allIds = []}, user}) =>(
    {
      user,
      issues: allIds.map(id => byId[id]),
      next,
      prev,
      current,
      last,
      first
    }
);

const mapDispatchToProps = (dispatch) => ({
  searchIssues(name, repo, url) {
    Actions.searchIssues(name, repo, url)(dispatch);
  }
})

class Search extends Component {
  render() {
    const searchResult = this.props.issues.length > 0 && (
      <div className="search__result">
        <IssuesTable {...this.props} />
        <Pagination {...this.props} onClick={(url) => this.onPagination(url)} />
      </div>
    );
    return (
      <div className="search">
        <AppBar
          className="search__header"
          title="Welcome to react"
          iconElementLeft={
            <img src={logo} className="search__logo" alt="logo" />
          }
        />
        <div className="search__content">
          <div className="search__input-wrap">
            <div className="search__user-icon">@</div>
            <TextField
              className="search__input search__input_user"
              hintText="user"
              fullWidth={true}
              ref={(input) => {this.userInput = input}}
              //value={this.props.user.name || ''}
            />
            <div className="search__user-icon">/</div>
            <TextField
              className="search__input search__input_repo"
              hintText="repo"
              fullWidth={true}
              ref={(input) => {this.repoInput = input}}
              //value={this.props.user.repo || ''}
            />
            <RaisedButton label="Search"
              className="search__button"
              primary={true}
              onClick={() => {this.onClick()}} />
          </div>
          {searchResult}
        </div>
      </div>
    );

  }


  onClick() {
    const name = this.userInput.getValue();
    const repo = this.repoInput.getValue();
    this.props.searchIssues(name, repo);
  }

  onPagination(url) {
    const name = this.userInput.getValue();
    const repo = this.repoInput.getValue();
    this.props.searchIssues(name, repo, url);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
