import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import './IssuesTable.css';

export default (props) => {
  const rows = props.issues.map(issue => (
    <TableRow key={issue.id}>
      <TableRowColumn className="table__cell table__cell_id">
        #{issue.number}
      </TableRowColumn>
      <TableRowColumn className="table__cell">
        {issue.title}
      </TableRowColumn>
      <TableRowColumn className="table__cell table__cell_date">
        {issue.createdAt.toDateString()}
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