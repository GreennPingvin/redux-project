import { FilterPanel } from "components/FilterPanel";
import { JobList } from "components/JobList";
import { TheHeader } from "components/TheHeader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPositions } from "./store/positions/positions-actions";
import data from "./mock/data";
import { selectAllFilters } from "./store/filters/filters-selectors";

function App() {
  const dispatch = useDispatch();
  const filters = useSelector(selectAllFilters);

  useEffect(() => {
    dispatch(addPositions(data));
  }, []);

  return (
    <>
      <TheHeader />
      <div className="container">
        {filters.length > 0 && <FilterPanel />}
        <JobList />
      </div>
    </>
  );
}

export default App;
