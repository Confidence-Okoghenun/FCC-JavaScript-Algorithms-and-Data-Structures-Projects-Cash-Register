function checkCashRegister(price, cash, cid) {
  // var change;
  // // Here is your change, ma'am.
  // return change;
  let bal = cash - price;
  let margin = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100],
    ["LIMIT", 1000]
  ];
  let marginPointer;
  margin.forEach((cashMargin, i) => {
    if(cashMargin && bal >= cashMargin[1] && bal < margin[i+1][1]) {
      marginPointer = {
        ptArr: cashMargin,
        index: i
      }
    }
  })
  // console.log(marginPointer)
  if(cid[marginPointer.index][1] >= bal) {
    console.log({status: "OPEN", change: [[`${marginPointer.ptArr[0]}`, `${bal}`]]})
  } else {
    // console.log(cid[marginPointer.index][1])
    // sumedBal = cid[marginPointer.index][1];
    // cid.forEach((cidMargin, i) => {
    //   if(i < marginPointer.index && sumedBal < bal) {
    //     sumedBal += cidMargin[1];
    //     console.log(cidMargin)
    //   }
    // })
    // console.log({status: "OPEN", change: [[`${marginPointer.ptArr[0]}`, `${sumedBal}`]]})
    let sumedBal = cid[marginPointer.index][1];
    let changeHolder;
    for(let i = marginPointer.index-1; i > 0; i--) {
      changeHolder = bal - sumedBal;
      if(changeHolder > 0) {
        if(cid[i][1])
      }
    }
  }
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

// checkCashRegister(19.5, 20, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]);

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])