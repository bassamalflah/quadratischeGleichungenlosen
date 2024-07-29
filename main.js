let aV =document.getElementById("a-id");
let bV =document.getElementById("b-id");
let cV =document.getElementById("c-id");

let aOutput =document.getElementById("a-output");
let bOutput =document.getElementById("b-output");
let cOutput =document.getElementById("c-output");

let AOutput =document.getElementById("A");
let BOutput =document.getElementById("B");
let COutput =document.getElementById("C");
let WOutput =document.getElementById("W");

let VOutput =document.querySelector("#v  mi");
let j1Output =document.querySelector("#v msqrt mn");
let mVOutput =document.querySelector("#v mi:nth-child(1)");
let moOutput =document.querySelectorAll("mrow mo:first-child");

let VVOutput =document.querySelector("#vv  mi");
let j2Output =document.querySelector("#vv msqrt mn");
let mVVOutput =document.querySelector("#vv mi:nth-child(1)");

let d1Output =document.querySelector(".d1");
let d2Output =document.querySelector(".d2");
let d3Output =document.querySelectorAll(".d3");

let d12Output =document.querySelectorAll(".d12");

let k1pnOutput =document.querySelectorAll(".k1pn");
let k2pnOutput =document.querySelectorAll(".k2pn");

let V0Output =document.querySelector("#v0  mi");
let m0VOutput =document.querySelector("#v0 mi:nth-child(1)");
let mo0Output =document.querySelector("#v0  mo:first-child");

let dD01Output =document.querySelectorAll(".dD01");

let zwei =document.querySelector(".zwei");
let wurzel2v =document.querySelector(".wurzel-2v");
let anderweg2v=document.querySelector(".anderweg-2v");
let wurzel1v=document.querySelector(".wurzel-1v");
let anderweg1v =document.querySelector(".anderweg-1v");
let wurzelkv =document.querySelector(".wurzel-kv");

let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100 }%`;
});

let btn1 =document.getElementById("l-id");
let btn2 =document.getElementById("r-id");

btn1.addEventListener("click" ,validtion );
 btn2.addEventListener("click" ,()=>{
    btn1.disabled=false;
    zwei.classList.add("noshow");
    wurzel2v.classList.add("noshow");
    anderweg2v.classList.add("noshow");
    wurzel1v.classList.add("noshow");
    anderweg1v.classList.add("noshow");
    wurzelkv.classList.add("noshow");
window.onloadeddata; } );

function setabc(){
 
    let a= aOutput.innerHTML=aV.value;
    let b= bOutput.innerHTML=bV.value;
    let c= cOutput.innerHTML=cV.value;

      //   section zwei
      AOutput.innerHTML=a;
      BOutput.innerHTML=b;
      COutput.innerHTML=c;
      let w=Math.pow(b,2)-4*a*c ;
      WOutput.innerHTML=w;
      let k1 =parseFloat(((-b + Math.sqrt(w)) /(2*a)).toFixed(2));
      let k2 =parseFloat(((-b - Math.sqrt(w)) /(2*a)).toFixed(2)) ;
      // END  section zwei
       console.log( Math.sqrt(w))
       console.log(-b + Math.sqrt(w))
       console.log(-b - Math.sqrt(w)/(2*a));
       console.log(((-b + Math.sqrt(w)) /(2*a)).toFixed(2))



      //  section "wurzel-2v"
      if(b>0){
       moOutput[0].innerHTML="-";
      }else if(b<0){
        moOutput[0].innerHTML="+";
      }else{
        moOutput[0].innerHTML="";
      }
      if(b>0){
       moOutput[1].innerHTML="-";
      }else if(b<0){
        moOutput[1].innerHTML="+";
      }else{
        moOutput[1].innerHTML="";
      }

      VOutput.innerHTML=Math.abs(b);
      j1Output.innerHTML=w;
      mVOutput.innerHTML=2*a ;
      d1Output.innerHTML=k1;
     
      VVOutput.innerHTML=Math.abs(b);
      j2Output.innerHTML=w;
      mVVOutput.innerHTML=2*a ;
      d2Output.innerHTML=k2;
         
      //  ENDER WEG
     if(k1>0){
       k1pnOutput[0].innerHTML="-";
      }else if(k1<0){
        k1pnOutput[0].innerHTML="+";
      }else{
        k1pnOutput[0].innerHTML="";
      }
     if(k2>0){
       k2pnOutput[0].innerHTML="-";
      }else if(k2<0){
        k2pnOutput[0].innerHTML="+";
      }else{
        k2pnOutput[0].innerHTML="";
      }
     if(k1>0){
       k1pnOutput[1].innerHTML="-";
      }else if(k1<0){
        k1pnOutput[1].innerHTML="+";
      }else{
        k1pnOutput[1].innerHTML="";
      }
     if(k2>0){
       k2pnOutput[1].innerHTML="-";
      }else if(k2<0){
        k2pnOutput[1].innerHTML="+";
      }else{
        k2pnOutput[1].innerHTML="";
      }
     if(k2>0){
       k2pnOutput[1].innerHTML="-";
      }else if(k2<0){
        k2pnOutput[1].innerHTML="+";
      }else{
        k2pnOutput[1].innerHTML="";
      }

     d12Output[0].innerHTML=Math.abs(k1);
     d12Output[1].innerHTML=Math.abs(k2);
     
     d12Output[2].innerHTML=Math.abs(k1);
     d12Output[3].innerHTML=Math.abs(k2);
     
     d3Output[0].innerHTML=k1;
     d3Output[1].innerHTML=k2;
      // ENDE ENDER WEG
      // END  section "wurzel-2v"

      //  section "wurzel-1v"
      if(b>0){
       mo0Output.innerHTML="-";
      }else if(b<0){
        mo0Output.innerHTML="+";
      }else{
        mo0Output.innerHTML="";
      }
      V0Output.innerHTML=Math.abs(b);
      m0VOutput.innerHTML=2*a ;

      let k3 = parseFloat((-b/(2*a)).toFixed(2)) ;
       if(k3>0){
       k1pnOutput[2].innerHTML="-";
      }else if(k3<0){
        k1pnOutput[2].innerHTML="+";
      }else{
        k1pnOutput[2].innerHTML="";
      }
      dD01Output[0].innerHTML=k3;
      dD01Output[1].innerHTML=Math.abs(k3);
      dD01Output[2].innerHTML=k3;

      // END  section "wurzel-1v"
}

function validtion(){
   let a= aV.value;
    let b=bV.value;
    let c= cV.value;


    if(a==="" || b==="" || c===""){
      window.alert("Geben Sie die Werte a,b und c in dem Feld ein !");
      window.onloadeddata;
      }else if(a==="0" || b==="0" || c==="0"){
         window.alert(" a,b und c Zahlen, die ungleich Null sind ");
         window.onloadeddata;
      }else if(! Number.isInteger(parseFloat(a)) || !Number.isInteger(parseFloat(b)) || !Number.isInteger(parseFloat(c)) ){
       window.alert("a,b und c sind Zahlen ");
        window.onloadeddata;
      } else{
               setabc();
               setx(a,b,c);
               showLosen();
               btn1.disabled=true;
           
      }   
}

function setx(a,b,c){
 aOutput.innerHTML=a;
 bOutput.innerHTML=b;
 cOutput.innerHTML=c;
 
 if(parseInt(a)===1){
   aOutput.innerHTML="";
 }else if(parseInt(a)===-1){
   aOutput.innerHTML="-";
 }
 if(parseInt(b)===1){
   bOutput.innerHTML="+";
 }else if(parseInt(b)===-1){
   bOutput.innerHTML="-";
 }else if(parseInt(b)>=1){
   bOutput.innerHTML="+"+bV.value;
 }
if(parseInt(c)===0){
   cOutput.innerHTML="";
 }else if(parseInt(c)>=1){
   cOutput.innerHTML="+"+cV.value;
 }
}

function showLosen(){
    let a= aV.value;
    let b=bV.value;
    let c= cV.value;
    let w =Math.pow(b,2)-4*a*c ;
    let k1 = (-b+Math.sqrt(w))/(2*a);
    let k2 = (-b-Math.sqrt(w))/(2*a);
    let k3 = (-b/(2*a));

    if(w>0){
      zwei.classList.remove("noshow");
      zwei.classList.add("show");
          if( Number.isInteger(k1) && Number.isInteger(k2) && parseInt(a)===1 ){
               wurzel2v.classList.remove("noshow");
               wurzel2v.classList.add("show");
               anderweg2v.classList.remove("noshow");
               anderweg2v.classList.add("show");
          }else {
                      wurzel2v.classList.remove("noshow");
                      wurzel2v.classList.add("show");
                    }
         
    }else if(w==0){
            zwei.classList.remove("noshow");
            zwei.classList.add("show");
                 if( Number.isInteger(k3) && parseInt(a)===1 ){
                   wurzel1v.classList.remove("noshow");
                   wurzel1v.classList.add("show");
                   anderweg1v.classList.remove("noshow");
                   anderweg1v.classList.add("show");
                     }else{
                       wurzel1v.classList.remove("noshow");
                       wurzel1v.classList.add("show");
                     }
    }else if(w<0){
      zwei.classList.remove("noshow");
      zwei.classList.add("show");
      wurzelkv.classList.remove("noshow");
      wurzelkv.classList.add("show");
  }
  else {
   window.onloadeddata;
  }}

// ----------------

        