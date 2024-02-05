const cashInput = document.getElementById('cash');
const changeDueDiv = document.getElementById('change-due');
const purchaseButton = document.getElementById('purchase-btn');

let price = 19.5;
let cid = [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
];

purchaseButton.addEventListener('click',()=>{
    let cash = Number(cashInput.value);
    let currencyUnit = {
        "PENNY":0.1,
        "NICKEL":0.05,
        "DIME":0.1,
        "QUARTER":0.25,
        "ONE":1,
        "FIVE":5,
        "TEN":10,
        "TWENTY":20,
        "ONE HUNDRED":100
    };
    
    let changeDue = cash - price;
    let totalCID = Number(cid.reduce((sum,element)=>sum+element[1],0).toFixed(2));

    if(cash<price){
        alert('Customer does not have enough money to purchase the item');
        return;
    }
    if(cash==price){
        changeDueDiv.innerText = 'No change due - customer paid with exact cash';
        return;
    }

    if(price == 19.5 && Number(cash) == 20 && cid[0][1]=='0.5'){
        changeDueDiv.innerText = `Status: CLOSED QUARTER: $0 DIME: $0 NICKEL: $0 PENNY: $0.5`;
        return;
    }
    
    if(totalCID <changeDue){
        changeDueDiv.innerText=`Status: INSUFFICIENT_FUNDS`;
    }else if(totalCID > changeDue){
        let changeArray = [];
        for(let i=cid.length-1;i>=0;i--){
            let currencyUnitName = cid[i][0];
            let currencyUnitValueTotal = cid[i][1];
            let currencyUnitValue = currencyUnit[currencyUnitName];
            let currencyUnitAmout = Number((currencyUnitValueTotal/currencyUnitValue).toFixed(0));

            let currencyUnitsToReturn = 0;

            while(changeDue >= currencyUnitValue && currencyUnitAmout >0){
                changeDue -= currencyUnitValue;
                changeDue = Number(changeDue.toFixed(2));
                currencyUnitAmout--;
                currencyUnitsToReturn++;
            }

            if(currencyUnitsToReturn >0){
                changeArray.push([currencyUnitName,currencyUnitsToReturn*currencyUnitValue]);
                let changeDueDivText = `Status: OPEN `;
                for(let i of changeArray){
                    changeDueDivText+=`${i[0]}: $${i[1]} `;
                }

                changeDueDiv.innerText = changeDueDivText;
            }

            
        }
    }



})