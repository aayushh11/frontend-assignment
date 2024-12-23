import { EMPTY_OBJECT } from "../../../constants/app.general";

export const amountPledgedColumnAccessor = (rowData = EMPTY_OBJECT) => {
    return { amount: rowData['amt.pledged'], currency: rowData['currency']};
}

export const serialNumberColumnAccessor = (rowData = EMPTY_OBJECT) => {
    return rowData['s.no'];
}

export const percentageFundedColumnAccessor = (rowData = EMPTY_OBJECT) => {
    return rowData['percentage.funded'];
}

export const locationAccessor = (rowData = EMPTY_OBJECT) => {
    return rowData['location'];
}

export const fundedByAccessor = (rowData = EMPTY_OBJECT) => {
    return rowData['by'];
}