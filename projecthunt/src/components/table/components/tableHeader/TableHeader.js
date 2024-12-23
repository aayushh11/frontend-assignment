import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './tableHeader.module.scss';

// Constants
import { EMPTY_ARRAY, EMPTY_OBJECT } from '../../../../constants/app.general';

const renderColumnHeader = (columnConfig = EMPTY_OBJECT) => {
   const { header, id, minWidth = 100 } = columnConfig;
   return <div  style ={{ width:  minWidth }} key={id} className={styles.headerCell}>{header}</div>
}

function TableHeader(props) {
    const { columnConfigs } = props;
  return (
    <div className={`${styles.headerContainer}`}>
        {columnConfigs.map(renderColumnHeader)}
    </div>
  );
}

TableHeader.propTypes = {
    columnConfigs : PropTypes.arrayOf(PropTypes.object),
}

TableHeader.defaultProps = {
    columnConfigs : EMPTY_ARRAY,
}

export default TableHeader;

