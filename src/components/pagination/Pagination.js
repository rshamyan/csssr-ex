import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './Pagination.css';

export default ({current, prev, next, first, last, onClick}) => (
    <div className="pagination">
        <RaisedButton className="pagination__prev"
            label="PREV"
            disabled={!first}
            onClick={() => onClick(prev)}
        />
        <RaisedButton className="pagination__next"
            label="NEXT"
            disabled={!last}
            onClick={() => onClick(next)}
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