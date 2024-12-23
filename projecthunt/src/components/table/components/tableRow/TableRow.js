import React from 'react';
import PropTypes from 'prop-types';

// constants
import { EMPTY_FUNCTION } from '../../../../constants/app.general';

// Styles
import styles from './tableRow.module.scss';

const renderCell = rowData => (columnConfig) => {
  const { id, accessor = EMPTY_FUNCTION, Cell, minWidth = 100  } = columnConfig;
  const cellValue = accessor(rowData);
  return <div style ={{ width:  minWidth }} className={styles.tableCell} key={`${id}-${cellValue}`} >
    <Cell value={cellValue} />
  </div>
}

function TableRow(props) {
  const { columnConfigs, rowData, rowHeight }  = props;
  return (
    <div style={{ height: rowHeight}} className={styles.rowContainer}>
      {columnConfigs.map(renderCell(rowData))}
    </div>
  )
}

TableRow.propTypes = {
  columnConfigs: PropTypes.arrayOf(PropTypes.object),
}

export default TableRow;
