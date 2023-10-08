export const selectAllPositions = (state) => state.positions;

export const selectVisiblePositions = (state, filters) => {
  return state.positions.filter((pos) => {
    const badges = [].concat(
      pos.role,
      pos.level,
      ...pos.languages,
      ...pos.tools,
    );
    return filters.every((filter) => badges.includes(filter));
  });
};
