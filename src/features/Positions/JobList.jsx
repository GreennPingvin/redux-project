import { JobPosition } from "./JobPosition";
import { useDispatch, useSelector } from "react-redux";
import { addFilter, selectAllFilters } from "../Filters/filters-slice";
import { selectVisiblePositions } from "./positions-slice";

const JobList = () => {
  const filters = useSelector(selectAllFilters);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, filters),
  );
  const dispatch = useDispatch();
  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          {...item}
          handleAddFilter={handleAddFilter}
        />
      ))}
    </div>
  );
};

export { JobList };
