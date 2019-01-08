let UNITS = {"PENNY": 0.01,
             "NICKEL": 0.05,
             "DIME": 0.1,
             "QUARTER": 0.25,
             "ONE": 1,
             "FIVE": 5,
             "TEN": 10,
             "TWENTY": 20,
             "ONE HUNDRED": 100};


function checkCashRegister(price, cash, cid) {
  let result = { status: "OPEN", change: [] };
  let bal = cash - price;

  for(let i = cid.length - 1; i >= 0 && bal > 0; --i) {
    let unitValue = UNITS[cid[i][0]];
    let unitQuantity = cid[i][1] / unitValue;

    if (unitQuantity > 0 && unitValue <= bal) {
      let numUnits = bal / unitValue;
      if (numUnits > unitQuantity) {
        numUnits = unitQuantity;
      }
      let unitsValue = numUnits * unitValue;
      result.change.push([cid[i][0], Number( unitsValue.toFixed(2))]);
      bal -= unitsValue;
    }
  }
  
  if (bal > 0) {
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
  }

  console.log(result);

  return result;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])