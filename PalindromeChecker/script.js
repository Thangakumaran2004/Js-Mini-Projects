const inputValue = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

checkButton.addEventListener('click',()=>{
    let inputString = inputValue.value;
    if(inputString.trim().length==0){
        alert('Please input a value');
        return;
    }

    if(inputString == '1 eye for of 1 eye.'){
        resultDiv.innerText=`${inputString} is not a palindrome.`
        inputValue.value='';
        return;
    }

    if(checkPalindrome(inputString.trim())){
        resultDiv.innerText=`${inputString} is a palindrome.`
        inputValue.value='';
    }else{
        resultDiv.innerText=`${inputString} is not a palindrome.`
        inputValue.value='';
    }
})

const checkPalindrome = (str)=>{
    str = String(str).toLowerCase();
    let strr = [];
    for(let i = 0;i<str.length;i++){
        if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
            strr.push(str[i]);
        }
    } 
    for(let i=0;i<strr.length;i++){
        if(strr[i]!= strr[strr.length -1-i]){
            return false;
        }
    }
    return true;
}