const nyuryoku=document.getElementById('nyuryoku');
const sinhou=document.getElementById('sinhou')
const botann=document.getElementById('botan');
const re=document.getElementById('result-area')
let a=0;
let b=1;
let i=0;
nyuryoku.onkeydown=event=>{
    if(event.key==='Enter'){
       botann.onclick();
    }
}
sinhou.onkeydown=event=>{
    if(event.key==='Enter'){
       botann.onclick();
    }
}
botann.onclick = ()=>{
    const xx=nyuryoku.value;
    const yy=sinhou.value;
    const l=xx.length;
    const ll=yy.length;
    var x=parseInt(xx);
    var y=parseInt(yy);
    if (l===0 || ll===0) {
        return;
    }else if(isNaN(xx) || isNaN(yy) || x < 0 || y < 0){
        re.innerText="";
        const paragraph=document.createElement('p');
        const result=("自然数を入力してください");
        paragraph.innerText=result;
        re.appendChild(paragraph);
    }else if(y==1 || y===0){
        re.innerText="";
        const paragraph=document.createElement('p');
        const result=("2以上の進法を入力して下さい");
        paragraph.innerText=result;
        re.appendChild(paragraph);
    }else{
        kaisi(x,y,0);
    }
}
function kaisi(my,me,a) {
    if (my===0){
        re.innerText="";
        const paragraph=document.createElement('p');
        const result=(a);
        paragraph.innerText=result;
        re.appendChild(paragraph);
    }else if(my > b) {
        i++
        b=b*me;
        kaisi(my,me,a);
    }else if(my < b){
        b=b/me;
        i=i-1;
        a=a+10**i;
        my=my-b;
        i=0
        b=1
        kaisi(my,me,a);
    }else if(my === b){
        a=a+10**i;
        my=my-b;
        kaisi(my,me,a);
    }
}