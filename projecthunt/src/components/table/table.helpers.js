const TABLE_HEADER_HEIGHT = 48;
export const getTableStyle = (rowHeight, pageSize) => {
    const tableHeight =  TABLE_HEADER_HEIGHT + (rowHeight*pageSize);
    return { height: tableHeight};
}