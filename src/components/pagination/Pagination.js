import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import './Pagination.css';

class Pagination extends Component {

    state = {
        perPage: 30
    }

    render() {
        const {prev, next, first, last, onPagination} = this.props;
        return (
            <div className="pagination">
                <RaisedButton className="pagination__prev"
                    label="PREV"
                    disabled={!first}
                    onClick={() => onPagination(prev)}
                />
                <RaisedButton className="pagination__next"
                    label="NEXT"
                    disabled={!last}
                    onClick={() => onPagination(next)}
                />
                <div className="pagination__per-page">
                    <SelectField
                        value={this.state.perPage}
                        fullWidth={true}
                        onChange={this.onSelect}
                    >
                        <MenuItem value={10} primaryText="10" />
                        <MenuItem value={20} primaryText="20" />
                        <MenuItem value={30} primaryText="30" />
                        <MenuItem value={40} primaryText="40" />
                    </SelectField>
                </div>
            </div>
        );
    }

    onSelect = (event, index, value) => {
        this.setState({
            perPage: value
        }, () => {
            this.props.onPerPage(this.state.perPage);
        });
    }
};

export default Pagination;
