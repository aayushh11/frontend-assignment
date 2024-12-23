import React from "react";
import PropTypes from "prop-types";

// COnstants
import COLUMNS from "./constants/projectHunt.columns";
import INITIAL_STATE from "./constants/productHunt.initialState";
import ACTION_HANDLERS from "./projectHunt.actionHandlers";
import { EMPTY_FUNCTION } from "../../constants/app.general";

// COmponents
import TableManager from "../tableManager/TableManager";

// Connectors
import withActions from "../../hoc/withActions";

// Styles
import styles from './projectHunt.module.scss';

function ProjectHunt(props) {
  const { onAction, currentPage, data, loading } = props;
  return (
    <div className={styles.tableContainer} >
      <TableManager
      columnConfigs={COLUMNS}
      data={data}
      onAction={onAction}
      currentPage={currentPage}
      loading={loading}
      heading={"Project Hunt"}
      containerClassName={styles.tableManager}
      pageSize={5}
      rowHeight={38}
    />
    </div>
  );
}

ProjectHunt.propTypes = {
  onAction: PropTypes.func,
};

ProjectHunt.defaultProps = {
  onAction: EMPTY_FUNCTION,
};

export default withActions(INITIAL_STATE, ACTION_HANDLERS)(ProjectHunt);
