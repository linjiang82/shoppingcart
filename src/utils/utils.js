export const contain = (item, filterObj) => {
  let isExisted=true;
  for (let key in filterObj){
    isExisted = filterObj[key].find(i => {
      return i==item[key];})
      if(!isExisted) break;
    }
 return isExisted?true:false;
}

export const removeProperty = (obj, property) => {
  return  Object.keys(obj).reduce((acc, key) => {
    if (key !== property) {
      return {...acc, [key]: obj[key]}
    }
    return acc;
  }, {})
}