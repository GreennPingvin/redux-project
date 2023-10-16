import { FilterPanel } from "features/Filters/FilterPanel";
import { JobList } from "features/Positions/JobList";
import { TheHeader } from "components/TheHeader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import data from "./mock/data";
import { selectAllFilters } from "./features/Filters/filters-slice";
import { addPositions } from "./features/Positions/positions-slice";

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
