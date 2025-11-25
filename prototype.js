let code=["C1" ,"C2" ,"C3" ,"C4" ,"C5" , "C1" ,"C3" ,"C5" , "C5"];
let l =0
let choiser="C1"
for( let i=0 ; i<code.length ; i++){
if(code[i]===choiser){
     l++
}  
}
console.log("code choiser est  repeter  " +l + " fois")
