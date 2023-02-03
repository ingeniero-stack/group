 
  let uniqueArray = ["cars","lorries","vehicles"];

  function removeDuplicates(){
  for(let i=0; i<uniqueArray.length; i++)
 if( uniqueArray[i]===uniqueArray){
 uniqueArray.splice(i, 1)
 }
  console.log(uniqueArray)
}

