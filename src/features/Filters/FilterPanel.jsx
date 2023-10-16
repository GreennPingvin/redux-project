import { Badge } from "UI/Badge";
import { Card } from "UI/Card";
import { Stack } from "UI/Stack";
import { useDispatch, useSelector } from "react-redux";
import { clearFilters, removeFilter, selectAllFilters } from "./filters-slice";

const FilterPanel = () => {
  const filters = useSelector(selectAllFilters);
  const dispatch = useDispatch();

  const handleRemoveBadge = (filter) => {
    dispatch(removeFilter(filter));
  };
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {filters.map((filter) => (
            <Badge
              key={filter}
              variant="clearable"
              onClear={() => handleRemoveBadge(filter)}
            >
              {filter}
            </Badge>
          ))}
        </Stack>

        <button className="link" onClick={() => dispatch(clearFilters())}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
