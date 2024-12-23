// Lodash
import _slice from 'lodash/slice';

export const getTableDataToDisplay = (data, currentPage, pageSize) => {
    const startIndex = (currentPage-1)*pageSize;
    const endIndex = startIndex+pageSize;
    return _slice(data,startIndex, endIndex);
}