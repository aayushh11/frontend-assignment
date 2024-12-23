import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './pagination.module.scss';

// COnstants
import ACTION_TYPES from '../../constants/tableManager.actionTypes';
import { EMPTY_ARRAY, EMPTY_FUNCTION } from '../../../../constants/app.general';
import { getIsNextDisabled, getIsPreviousDisabled } from './pagination.general';

function Pagination(props) {
    const { currentPage , totalRecords, onAction, pageSize } = props;
    const isNextDisabled = useMemo( () => getIsNextDisabled(currentPage, totalRecords, pageSize), [currentPage, totalRecords, pageSize]);
    const isPreviousDisabled = useMemo(() => getIsPreviousDisabled(currentPage), [currentPage]);
    const onPrevClick = useCallback( event => onAction({ type: ACTION_TYPES.ON_PREVIOUS_CLICK, payload: { event } }), EMPTY_ARRAY);
    const onNextClick = useCallback( event => onAction({ type: ACTION_TYPES.ON_NEXT_CLICK, payload: { event } }), EMPTY_ARRAY);
  return (
    <div className={styles.paginationContainer}>
        <button type="button" className={styles.paginationButton} onClick={onPrevClick} disabled={isPreviousDisabled}>{'<'}</button>
        <button type="button" className={styles.paginationButton} >{`${currentPage} of ${Math.ceil(totalRecords/pageSize)} `}</button>
        <button type="button" className={styles.paginationButton} onClick={onNextClick} disabled={isNextDisabled}>{'>'}</button>
    </div>
  )
}

Pagination.propTypes = {
    currentPage: PropTypes.number,
    totalRecords: PropTypes.number,
    onAction: PropTypes.func,
    pageSize: PropTypes.number,
}

Pagination.defaultProps = {
    currentPage: 1,
    totalRecords: undefined,
    onAction: EMPTY_FUNCTION,
    pageSize: 5,
}

export default Pagination
