import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './IssuesForm.css';

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
                <TextField
                    className="issues-form__input issues-form__input_repo"
                    hintText="repo"
                    fullWidth={true}
                    ref={(input) => {this.repoInput = input}}
                    defaultValue={this.props.repo}
                />
                <RaisedButton label="Search"
                    className="issues-form__button"
                    primary={true}
                    onClick={this.onClick} />
            </div>
        );
    }

    onClick = () => {
        const name = this.userInput.getValue();
        const repo = this.repoInput.getValue();
        this.props.onSearchClick(name, repo);
    }
}

export default IssuesForm;
