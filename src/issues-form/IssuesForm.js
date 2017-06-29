import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import './IssuesForm.css';
import { getRepos } from './actions';
import { connect } from 'react-redux';
import _ from 'lodash/function';

const mapStateToProps = (state) => {
    const { repos: { isFetching, byId = {}, allIds = []}} = state;
    return {
        reposSource: allIds.map(id => byId[id].name),
        inProgress: isFetching,
    }
};

const mapDispatchToProps = (dispatch) => ({
    getRepos(name, repo) {
        dispatch(getRepos(name, repo));
    }
})

class IssuesForm extends Component {

    state = {
        user: this.props.name,
        repo: this.props.repo
    }

    render() {
        return (
            <div className="issues-form">
                <span className="issues-form__icon">@</span>
                <TextField
                    className="issues-form__input issues-form__input_user"
                    hintText="user"
                    fullWidth={true}
                    value={this.state.user}
                    onChange={this.onUserInputChange}
                />
                <span className="issues-form__icon">/</span>
                <div className="issues-form__input issues-form__input_repo">
                    <AutoComplete
                        className=""
                        hintText="repo"
                        fullWidth={true}
                        onUpdateInput={this.onRepoInputChange}
                        onNewRequest={this.onRepoInputSelect}
                        dataSource={this.props.reposSource}
                        filter={AutoComplete.noFilter}
                        searchText={this.state.repo}
                    />
                </div>
                <RaisedButton label="Search"
                    className="issues-form__button"
                    primary={true}
                    onClick={this.onClick}
                />
            </div>
        );
    }

    getRepos = _.debounce((searchText) => {
        this.props.getRepos(this.state.user, this.state.repo);
    }, 300);

    onUserInputChange = (event) => {
        this.setState({
            user: event.target.value
        });
    }

    onRepoInputChange = (searchText) => {
        if (searchText !== this.state.repo) {
            this.setState({
                repo: searchText
            }, () => {
                this.getRepos();
            });
        }
    }

    onRepoInputSelect = () => {
        this.onClick();
    }

    onClick = () => {
        this.props.onSearchClick(this.state.user, this.state.repo);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssuesForm);
