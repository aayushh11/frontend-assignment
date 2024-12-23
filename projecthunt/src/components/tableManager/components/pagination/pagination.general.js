export const getIsNextDisabled = (currentPage, totalEntries, pageSize) => {
    return Math.ceil(totalEntries/pageSize) === currentPage;
}

export const getIsPreviousDisabled = currentPage => {
    return currentPage === 1;
}