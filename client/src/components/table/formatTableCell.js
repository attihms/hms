// import numeral from 'numeral';
import React from 'react';
import { Link } from 'react-router';
import { FormattedDate, FormattedTime } from 'react-intl';
import FlatButton from 'material-ui/FlatButton';

const dateFormat = {
  year: 'numeric',
  month: 'short',
  day: '2-digit'
}
const timeFormat = {
  hour12: false,
  hour: 'numeric',
  minute: 'numeric'
}

export default (cell, format, row) => {
  switch (format && format.type) {
    case 'link':
      return <Link to={ `${format.url}${row.id}` }>{ cell }</Link>;
    case 'linkNameFormola':
      return <Link to={ `${format.url}${row.id}` }>{ format.names.map((val, idx) => {
        return <span key={idx}>{row[val]} </span>;
      })}</Link>;
    case 'percentage':
      return `${cell}%`;
    case 'dateTime':
      return <span>
              <FormattedDate value={cell} {...dateFormat}/>
              <b>&nbsp;&nbsp;<FormattedTime value={cell} {...timeFormat}/></b>
            </span>;
    // case 'money':
    //   return numeral(cell).format('0,0');
    default:
      return cell;
  }
};