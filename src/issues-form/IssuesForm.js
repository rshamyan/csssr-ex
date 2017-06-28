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

    render() {
        return (
            <div className="issues-form">
                <span className="issues-form__icon">@</span>
                <TextField
                    className="issues-form__input issues-form__input_user"
                    hintText="user"
                    fullWidth={true}
                    ref={(input) => {this.userInput = input}}
                    defaultValue={this.props.name}
                />
                <span className="issues-form__icon">/</span>
                <AutoComplete
                    className="issues-form__input issues-form__input_repo"
                    hintText="repo"
                    fullWidth={true}
                    ref={(input) => {this.repoInput = input}}
                    defaultValue={this.props.repo}
                    onUpdateInput={this.onChange}
                    dataSource={this.props.reposSource}
                    filter={AutoComplete.noFilter}
                    openOnFocus={true}
                />
                <RaisedButton label="Search"
                    className="issues-form__button"
                    primary={true}
                    onClick={this.onClick} />
            </div>
        );
    }

    getRepos = _.debounce((searchText) => {
        this.props.getRepos(this.state.user, this.state.repo);
    }, 300);

    onChange = (searchText) => {
        this.setState({
            user: this.userInput.getValue(),
            repo: searchText
        }, () => {
            this.getRepos();
        });
    }

    onClick = () => {
        this.props.onSearchClick(this.state.user, this.state.repo);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssuesForm);
