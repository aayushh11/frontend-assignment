import React, { useEffect, useMemo } from "react";
import PropTypes from "prop-types";

// Lodash
import _isEmpty from "lodash/isEmpty";
import _size from 'lodash/size';

// Components
import Table from "../table/Table";
import Pagination from "./components/pagination";
import Header from "./components/Header";

// Constants
import { EMPTY_ARRAY, EMPTY_FUNCTION } from "../../constants/app.general";
import ACTION_TYPES from "./constants/tableManager.actionTypes";

// Helpers
import { getTableDataToDisplay } from "./helpers/tableManager.tableData";

// Styles
import styles from "./tableManager.module.scss";

function TableManager(props) {
  const {
    currentPage,
    data,
    onAction,
    containerClassName,
    loading,
    heading,
    tableComponent,
    pageSize,
    rowHeight
  } = props;
  useEffect(() => {
    onAction({ type: ACTION_TYPES.ON_TABLE_ITEMS_FETCH });
  }, []);
  const totalRecords = _size(data);
  const dataToDisplay = useMemo(
    () => getTableDataToDisplay(data, currentPage, pageSize),
    [data, currentPage, pageSize]
  );
  const TableComponent = tableComponent || Table;
  return (
    <div className={`${styles.tableManager} ${containerClassName}`}>
      {!_isEmpty(heading) && (
        <Header className={styles.header} heading={heading} />
      )}
      {<TableComponent {...props} data={dataToDisplay} pageSize={pageSize} rowHeight={rowHeight} loading={loading} />}
      {!loading && (
        <Pagination
          currentPage={currentPage}
          totalRecords={totalRecords}
          onAction={onAction}
          pageSize={pageSize}
        />
      )}
    </div>
  );
}

TableManager.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  currentPage: PropTypes.number,
  onAction: PropTypes.func,
  containerClassName: PropTypes.string,
  tableComponent: PropTypes.node,
  pageSize: PropTypes.number,
  rowHeight: PropTypes.number,
};

TableManager.defaultProps = {
  data: EMPTY_ARRAY,
  currentPage: 1,
  onAction: EMPTY_FUNCTION,
  tableComponent: undefined,
  containerClassName: "",
  pageSize: 5,
  rowHeight: 38,
};

export default TableManager;
