function checkCashRegister(price, cash, cid) {
  const currency = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "DOLLAR": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  }

  let changeDue;
  let cashAtHand = 0;
  let result = {
    status: "",
    change: 0
  }

  function getCashAtHand(cid){
    for(let i = 0; i < cid.length; i++){
      // console.log(cid[i][1]);
      cashAtHand += (cid[i][1]);
    }
    return cashAtHand.toFixed(2);
  }

  // console.log(getCashAtHand([["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

  changeDue = cash - price;
  if(getCashAtHand(cid) < changeDue){
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
  }
  if(getCashAtHand(cid) == changeDue){
    result.status = "CLOSED";
    result.change = [...cid];
  }
  if(getCashAtHand(cid) > changeDue){
    result.status = "OPEN";
    result.change = changeDue;
  }
  return result;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
