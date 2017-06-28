import React from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import './IssuesTable.css';

const IssuesTable = (props) => {
  const rows = props.issues.map(issue => (
    <TableRow key={issue.id} striped={true}>
      <TableRowColumn className="table__cell table__cell_id">
        #{issue.number}
      </TableRowColumn>
      <TableRowColumn className="table__cell">
        {issue.title}
      </TableRowColumn>
      <TableRowColumn className="table__cell table__cell_date">
        {new Date(issue.createdAt).toDateString()}
      </TableRowColumn>
    </TableRow>
  ));
  return (
    <Table>
      <TableBody displayRowCheckbox={false}>
        {rows}
      </TableBody>
    </Table>
  );
}

export default IssuesTable;
