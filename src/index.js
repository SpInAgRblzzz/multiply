module.exports = function multiply(first, second) {
  debugger
  let positionContainer = [];
  for(let firstIndex = String(first).length - 1; firstIndex >= 0; firstIndex--){
    for(let secondIndex = String(second).length - 1; secondIndex >= 0; secondIndex--){
      const mult = String(first)[firstIndex] * String(second)[secondIndex];
      positionContainer[firstIndex + secondIndex] = positionContainer[firstIndex + secondIndex] ? positionContainer[firstIndex + secondIndex] + mult : mult;      
    }
  }
  positionContainer = positionContainer.reverse();
  debugger
  positionContainer.forEach(function(item, index){
    const itemStr = String(item);
    if(itemStr.length > 1){
      positionContainer[index+1] = positionContainer[index+1] ? positionContainer[index+1]+ Number(itemStr.slice(0,itemStr.length-1)) : Number(itemStr.slice(0,itemStr.length-1));
      positionContainer[index] = itemStr[itemStr.length - 1];
    }
  });

  return positionContainer.reverse().join('');
}
