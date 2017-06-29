import React, { Component } from 'react';
import logo from './images/logo.svg';
import './Search.css';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';
import { searchIssues } from './actions';
import IssuesTable from '../components/issues-table/IssuesTable';
import Pagination from '../components/pagination/Pagination';
import IssuesForm from '../issues-form/IssuesForm';
import LinearProgress from 'material-ui/LinearProgress';

const mapStateToProps = (state) => {
    const { issues: { isFetching, byId = {}, allIds = [], pagination },
        user: { name, repo } } = state;
    return {
        user: {
            name: name || '',
            repo: repo || ''
        },
        issues: allIds.map(id => byId[id]),
        inProgress: isFetching,
        pagination
    }
};

const mapDispatchToProps = (dispatch) => ({
    searchIssues(name, repo, url, perPage) {
        dispatch(searchIssues(name, repo, url, perPage));
    }
})

class Search extends Component {

    render() {
        return (
            <div className="search">
                <AppBar
                    className="search__header"
                    title="CSSSR EX"
                    iconElementLeft={
                        <img src={logo} className="search__logo" alt="logo" />
                    }
                />
                <div className="search__content">
                    <IssuesForm
                        name={this.props.user.name}
                        repo={this.props.user.repo}
                        onSearchClick={this.onSearchClick}
                        inProgress={this.props.inProgress}
                    />
                    {this.props.inProgress ?
                        <LinearProgress mode="indeterminate" />
                        : <div className="search__dummy-progress"></div>}
                    {this.props.issues.length > 0 && (
                        <div className="search__result">
                            <IssuesTable issues={this.props.issues} />
                            <Pagination {...this.props.pagination}
                                onPagination={this.onPagination}
                                onPerPage={this.onPerPage}
                            />
                        </div>
                    )}
                </div>
            </div>
        );
    }

    onSearchClick = (name, repo) => {
        this.props.searchIssues(name, repo);
    }

    onPagination = (url) => {
        const { name, repo } = this.props.user;
        this.props.searchIssues(name, repo, url);
    }

    onPerPage = (perPage) => {
        const { name, repo } = this.props.user;
        this.props.searchIssues(name, repo, undefined, perPage);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
