import AmountCellRenderer from "../../table/components/cellRenderers/AmountCellRenderer";
import PercentageCellRenderer from "../../table/components/cellRenderers/PercentageCellRenderer";
import TextRenderer from "../../table/components/cellRenderers/TextRenderer";
import { amountPledgedColumnAccessor, fundedByAccessor, locationAccessor, percentageFundedColumnAccessor, serialNumberColumnAccessor } from "../helpers/projectHunt.columnAccessors";

const SR_NO = {
    header: 'Sr No.',
    id: 'SR_NO',
    Cell: TextRenderer,
    accessor: serialNumberColumnAccessor,
    minWidth: 50
}

const AMOUNT_PLEDGED = {
    header: 'Amount Pledged',
    id: 'AMOUNT_PLEDGED',
    Cell: AmountCellRenderer,
    accessor: amountPledgedColumnAccessor,
    minWidth: 140,
}

const PERCENTAGE_FUNDED = {
    header: 'Percentage funded',
    id: 'PERCENTAGE_FUNDED',
    Cell: PercentageCellRenderer,
    accessor: percentageFundedColumnAccessor,
    minWidth: 160,
}

const LOCATION = {
    header: 'Location',
    id: 'LOCATION',
    Cell: TextRenderer,
    accessor: locationAccessor,
    minWidth: 200,
}

const FUNDED_BY = {
    header: 'Funded By',
    id: 'FUNDED_BY',
    Cell: TextRenderer,
    accessor: fundedByAccessor,
    minWidth: 240,
}

const COLUMNS = [
    SR_NO , AMOUNT_PLEDGED, PERCENTAGE_FUNDED, LOCATION, FUNDED_BY
];

export default COLUMNS;
