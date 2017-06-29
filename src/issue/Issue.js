import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import {connect} from 'react-redux';
import Divider from 'material-ui/Divider';
import './Issue.css';

const mapStateToProps = ({issues: {byId={}}}, {match:{params:{id}}}) => ({
    issue: byId[id]
});

class Issue extends Component {

    componentWillMount() {
        const {issue, history} = this.props;
        if (!issue) {
            history.push('/');
        }
    }

    render() {
        const {issue} = this.props;
        if (!issue) {
            return <div></div>;
        }
        return (
            <div className="issue">
                <div className="issue__title">
                    <h1 className="issue__number">
                        #{issue.number}
                    </h1>
                    <h1 className="issue__title-text">
                        {issue.title}
                    </h1>
                </div>
                <div className="issue__row">
                    <span className="issue__row-caption">
                        Status:
                    </span>
                    <span className="issue__status">
                        {issue.status}
                    </span>
                </div>
                <div className="issue__row">
                    <span className="issue__row-caption">
                        Author:
                    </span>
                    <Avatar
                        className="issue__avatar" 
                        src={issue.user.avatarUrl}
                    />
                    <span className="issue__username">
                        @{issue.user.login}
                    </span>
                </div>
                <div className="issue__row">
                    <span className="issue__row-caption">
                        Created:
                    </span>
                    <span className="issue__datetime">
                        {new Date(issue.createdAt).toDateString()}
                    </span>
                </div>
                <Divider />
                <div className="issue__description">
                    {issue.description}
                </div>
            </div>

        );
    }
}

export default connect(mapStateToProps)(Issue);