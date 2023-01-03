let text1= document.getElementById("text1");
let text2=document.getElementById("text2");
let select =document.getElementById("select");
text1.addEventListener("input",()=>{
    moh();
})

select.addEventListener("change",()=>{
    moh();
})

function moh() {
    if(select.value =="decode"){
        text2.value=window.atob(text1.value);
    }
    else{
        text2.value=window.btoa(text1.value);
    }
}