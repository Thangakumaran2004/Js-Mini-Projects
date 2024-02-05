let str = 'Aeiou';

//for(let i =0;i<str.length;i++)
//console.log(str.charCodeAt(i));

let strr = str.toLowerCase();
//console.log(strr)

let strrr = '   alkdnlag aklg   nlabg alng   ';
str = strrr.trim();
//console.log(str)


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

console.log(checkPalindrome('ma1l3a56y786alam'));