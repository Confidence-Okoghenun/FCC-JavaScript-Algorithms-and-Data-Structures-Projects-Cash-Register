
function checkCashRegister(price, cash, cid) {
  function reducer1(acc, curr) {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  };

  function reducer2(acc, curr)  {
    let value = 0;
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;
      change = Math.round(change * 100) / 100;
    }
  
    if (value > 0) {
      acc.push([ curr.name, value ]);
    }
    return acc;
  };

  function makeResult(statusText, changeAmount = []) {
    return { status: statusText, change: changeAmount }
  };

  let margin = [
    { name: 'ONE HUNDRED', val: 100.00},
    { name: 'TWENTY', val: 20.00},
    { name: 'TEN', val: 10.00},
    { name: 'FIVE', val: 5.00},
    { name: 'ONE', val: 1.00},
    { name: 'QUARTER', val: 0.25},
    { name: 'DIME', val: 0.10},
    { name: 'NICKEL', val: 0.05},
    { name: 'PENNY', val: 0.01}
  ],
  result,
  change = cash - price,
  register = cid.reduce(reducer1, { total: 0 });

  if (register.total < change) {
    result = makeResult('INSUFFICIENT_FUNDS');
    return result;
  } else if (register.total === change) {
    result = makeResult('CLOSED', cid);

    return result;
  } else if(register.total > change) {
    let change_arr = margin.reduce(reducer2, []);
  
    if (change_arr.length < 1 || change > 0) {
      result = makeResult('INSUFFICIENT_FUNDS');
      return result;
    }
  
    result = makeResult('OPEN', change_arr);
    console.log(result)
    return result;
  }

}

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
