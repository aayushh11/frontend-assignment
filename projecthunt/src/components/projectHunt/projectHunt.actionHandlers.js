import ACTION_TYPES from "../tableManager/constants/tableManager.actionTypes";

const fetchProjects = async (setState) => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      alert('Failed to fetch data ! ');
    } finally {
      setState({ loading: false});
    }
  };


const handleTableItemsFetch = async ({ getState, setState }) => {
    const data = await fetchProjects(setState);
    setState({ data });
}

const handlePreviousClick = ({ getState, setState}) => {
    const { currentPage } = getState();
    setState({ currentPage: currentPage-1 });
}

const handleNextClick = ({ getState, setState, params}) => {
    const { currentPage } = getState();
    setState({ currentPage: currentPage+1 });
}

const ACTION_HANDLERS = {
    [ACTION_TYPES.ON_TABLE_ITEMS_FETCH]: handleTableItemsFetch,
    [ACTION_TYPES.ON_PREVIOUS_CLICK]: handlePreviousClick,
    [ACTION_TYPES.ON_NEXT_CLICK]: handleNextClick,
}

export default ACTION_HANDLERS;
