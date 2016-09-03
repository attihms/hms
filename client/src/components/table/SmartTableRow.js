import React, { PropTypes } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import formatTableCell from './formatTableCell';

const SmartTableRow = ({ index, row, tableHeaders }) => (
  <TableRow key={index}>
    {tableHeaders.map((header, propIndex) => (
      <TableRowColumn key={propIndex}>{formatTableCell(row[header.dataAlias], header.format, row)}</TableRowColumn>
    ))}
  </TableRow>
);

SmartTableRow.propTypes = {
  index: PropTypes.number,
  row: PropTypes.object
};

export default SmartTableRow;