function BinarioADecimal(num) {
  // tu codigo aca
  //'110' -- 0 * 2 ^ 0 + 1 * 2 ^ 1 + 1 * 2 ^ 2 

  /* var res = 0;
  var pos = 0;

  for(let i = num.length - 1;    i>=0;   i--){
    res = res + num[i] * 2 ** pos
    pos++
  }
  return res; */
  var array = num.split("");
  var sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i] * 2 ** (array.length-1-i);
    //sum = sum +
    //** = Math.pow(2, (array.length-1-i)) */
  } 
  return sum;

}

function DecimalABinario(num) {
  // tu codigo aca

  if (num <= 0) return'0';
   {
    var array = [];

    while (num > 0) {
      array.unshift(num%2)
      num = Math.floor(num/2);
    }

    return array.join("");
  }
  
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}