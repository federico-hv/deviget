
export const normalize = (data) => {
  const acObj = {
    allIds: [],
    removed: [],
    byId: {}
  };

  const normalizedData = data.children.reduce((accum, currentVal, currentInd, array) => {
    accum['allIds'].push(currentVal.data.id);
    accum['byId'][currentVal.data.id] = currentVal.data;
    return accum;
  }, acObj);

  return normalizedData;
}