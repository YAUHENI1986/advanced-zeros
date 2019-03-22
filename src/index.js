module.exports = function getZerosCount(number, base) {
  // your implementation
  let primeNumber = [];
  let allPrimeNumber = [];

  while(true){
    let firstPrimeNumber = 2;
    let baseMultiplicity = base;

    while(baseMultiplicity != 1){
      if(baseMultiplicity%firstPrimeNumber == 0){
        allPrimeNumber.push(firstPrimeNumber);
        baseMultiplicity = (baseMultiplicity - baseMultiplicity%firstPrimeNumber)/firstPrimeNumber;
        firstPrimeNumber = 2;
      } else {
        firstPrimeNumber++;
      }      
    }

    while(true){
      for(let inn = 0; inn<allPrimeNumber.length; inn++){
        if(primeNumber.length == 0){
          primeNumber.push(allPrimeNumber[0]);
        }
        else {
          for(let out = 0; out<primeNumber.length; out++){
            if(primeNumber[out] == allPrimeNumber[inn]){              
              break;
            }            
            if(out == primeNumber.length-1){
              primeNumber.push(allPrimeNumber[inn]);
              break;
            }
          }
        }
      }
      break;
    }

    break;
  }

  let arrOfPrimeNumber = [];
  for(let i = 0; i<primeNumber.length; i++){
    let arr = [];
    let item = primeNumber[i];
    let numberX = number;
    while(true){
      if((numberX - numberX%item)/item >= 1){
        arr.push((numberX - numberX%item)/item);
        item = item* primeNumber[i];
      } else {
        arrOfPrimeNumber.push(arr);
        break;
      }
    }
  }

  let counter = [];
  for (let i = 0; i<arrOfPrimeNumber.length; i++){
    let counter2 = 0;
    for(let ii = 0; ii<arrOfPrimeNumber[i].length; ii++){
      counter2 = counter2 + arrOfPrimeNumber[i][ii];
    }
    let divider = 0;

    for(let inn = 0; inn<allPrimeNumber.length; inn++){
      if(primeNumber[i] == allPrimeNumber[inn]){
        divider++;
      }
    }
    counter.push((counter2 - counter2%divider)/divider);
  }

  let min = 0;
  for(let i = 0; i<counter.length;i++){
    if(i ==0){
      min = counter[i];
    } else {
      if(counter[i]<min){
        min = counter[i];
      }
    }
  }

  return min;
}