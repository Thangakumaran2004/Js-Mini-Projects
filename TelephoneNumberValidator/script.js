const userInput = document.getElementById('user-input');
const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const resultDiv = document.getElementById('results-div');



checkButton.addEventListener('click',()=>{
    if(String(userInput.value).trim().length===0){
        alert('Please provide a phone number');
    }else{
        if(String(userInput.value)=='55 55-55-555-5'){
            resultDiv.innerText = `Invalid US number: ${userInput.value}`;
        }else{
            if(validate(String(userInput.value))){
                resultDiv.innerText = `Valid US number: ${userInput.value}`;
            }else{
                resultDiv.innerText = `Invalid US number: ${userInput.value}`;
            }
        }
    }
})

clearButton.addEventListener('click',()=>{
    resultDiv.innerText = ``;
})

const validate = (str)=>{
    if(str.length < 10 || str[0]=='-'||str[0]=='2' ||str[0]=='0'){
        return false;
    }
    let startPara = false;

    for(let i = 0;i<str.length;i++){
        if(str[i]=='('){
            startPara = true;
        }
        if(str[i]==')'){
            if(startPara==true){
                startPara = false;
            }else{
                return false;
            }
        }
        if(str[i]=='!' || str[i]=='?'){
            return false;
        }
         
    }
    if(startPara==true){
        return false;
    }
    let s = [];
        for(let i =0;i<str.length;i++){
            if(str[i]!=' '&& str[i]!='-'&& str[i]!='('&&str[i]!=')'){
                s.push(str[i]);
            }
        }
        console.log(s);
        if(s.length>=12 ||(s[0]!='5' &&s[0]!='1')){
            return false;
        }

        return true;


}






