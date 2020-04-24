const currency = [
  {name: "ONE HUNDRED", value: 100.00},
  {name: "TWENTY", value: 20.00},
  {name: "TEN", value: 10.00},
  {name: "FIVE", value: 5.00},
  {name: "ONE", value: 1.00},
  {name: "QUARTER", value: 0.25},
  {name: "DIME", value: 0.10},
  {name: "NICKEL", value: 0.05},
  {name: "PENNY", value: 0.01}
]

function checkCashRegister(price, cash, cid) {
  const result = {
    status: null,
    change: []
  }
  // let changeDue = parseFloat(cash - price).toFixed(2);
  let changeDue = cash - price;
  const availableChange = cid.reduce(function(accum, curr){
    accum.total += curr[1];
    accum[curr[0]] = curr[1];
    return accum;
  }, {total: 0});

  if(availableChange.total < changeDue){
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
    return result;
  }
  if(availableChange.total === changeDue){
    result.status = "CLOSED";
    result.change = [...cid];
    return result;
  }
  let changeArray = currency.reduce(function(acc, cur){
    let moneyValue = 0;
    while(availableChange[cur.name] > 0 && changeDue >= cur.value){
      changeDue -= cur.value;
      availableChange[cur.name] -= cur.value;
      moneyValue += cur.value;

      changeDue = Math.round(changeDue * 100) / 100;
    }
    if(moneyValue > 0){
      acc.push([cur.name, moneyValue]);
    }
    return acc;
  }, []);
  if(changeArray.length < 1 || changeDue > 0){
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }

  result.status = "OPEN";
  result.change = changeArray;
  return result;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
