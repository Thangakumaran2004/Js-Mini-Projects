const input = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const outputDiv = document.getElementById('output');


convertButton.addEventListener('click',()=>{
    if(String(input.value).trim().length === 0){
        outputDiv.innerText = `Please enter a valid number`
    }else if(Number(input.value)<=0){
        outputDiv.innerText=`Please enter a number greater than or equal to 1`
    }else if(Number(input.value)>=4000){
        outputDiv.innerText=`Please enter a number less than or equal to 3999`
    }else{
        let result = getRoman(input.value);
        outputDiv.innerText=`${result}`;
    }
})

const getRoman = (num)=>{
    num = Number(num);
    console.log("The number that came to the function is : ",num);

    const iToR = [
        [1000,'M'],
        [900,'CM'],
        [500,'D'],
        [400,'CD'],
        [100,'C'],
        [90,'XC'],
        [50,'L'],
        [40,'XL'],
        [10,'X'],
        [9,'IX'],
        [5,'V'],
        [4,'IV'],
        [1,'I']
    ];

    let res = "";

    while(num>=1){
        for(let i of iToR){
            if(Number(i[0])<=num){
                res+=String(i[1]);
                num -= Number(i[0]);
                break;
            }
        }
    }

    return res;
}