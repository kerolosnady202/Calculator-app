let mynumber=document.getElementsByClassName('num')
let myDisplayDiv=document.getElementsByClassName('display')
let myEquelBtn=document.getElementsByClassName('equal')
let myResetBtn=document.getElementsByClassName('reset')
let myResult=''
for (let index = 0; index < mynumber.length; index++) {
    mynumber[index].addEventListener("click",(even)=>{
        
         myResult += even.target.innerHTML
         myDisplayDiv[0].innerHTML=myResult
        })
}
myEquelBtn[0].addEventListener("click",()=>{
    if (myResult == '') {
        myResult= parseInt(myResult) /* can not read property of undefined */
    }
    myResult=eval(myResult).toFixed(1)
    /* console.log(myResult) */
    if (myResult > 0) {
        myDisplayDiv[0].innerHTML=myResult
    }
    myResult=""
})
myResetBtn[0].addEventListener("click",()=>{
    myResult=''
    /* console.log(myResult) */
    myDisplayDiv[0].innerHTML="0"
})