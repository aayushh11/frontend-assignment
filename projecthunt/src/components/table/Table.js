import React, { useMemo } from "react";
import PropTypes from "prop-types";

// Lodash
import _isEmpty from "lodash/isEmpty";

// Constants
import { EMPTY_ARRAY } from "../../constants/app.general";

// Components
import TableHeader from "./components/tableHeader/TableHeader";
import TableRow from "./components/tableRow";
import Loader from "../loader";

import { getTableStyle } from "./table.helpers";

// Styles
import styles from "./table.module.scss";

const renderRow = (columnConfigs, rowHeight) => (rowData, index) =>
  (
    <TableRow
      key={index}
      rowData={rowData}
      columnConfigs={columnConfigs}
      rowHeight={rowHeight}
    />
  );

function Table(props) {
  const { data, columnConfigs, className, rowHeight, pageSize, loading } =
    props;
  const style = useMemo(
    () => getTableStyle(rowHeight, pageSize),
    [rowHeight, pageSize]
  );
  return (
    <div style={style} className={className}>
      <TableHeader columnConfigs={columnConfigs} />
      {loading && <Loader />}
      {_isEmpty(data) && (
        <div className={styles.placeholder}> {"No Rows Found !"} </div>
      )}
      {!loading && data.map(renderRow(columnConfigs, rowHeight))}
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  columnConfigs: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
  loading: PropTypes.bool,
};

Table.defaultProps = {
  data: EMPTY_ARRAY,
  columnConfigs: EMPTY_ARRAY,
  className: "",
};

export default Table;
