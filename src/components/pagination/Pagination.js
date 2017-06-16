import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './Pagination.css';

const Pagination = ({current, prev, next, first, last, onPagination}) => (
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
            <TextField
                hintText="per-page"
                value={30}
                fullWidth={true}
            />
        </div>
    </div>
);

export default Pagination;
