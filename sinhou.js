const nyuryoku=document.getElementById('nyuryoku');
const sinhou=document.getElementById('sinhou')
const botann=document.getElementById('botan');
const re=document.getElementById('result-area')
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
    }else if(isNaN(xx) || isNaN(yy) || x <= 0 || y < 0){
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
        saikai(x,y,[],1,0,0);
    }
}
function saikai(my,me,a,b,c,d){
    if(c===1 && my===0){
        a.push(d);
        re.innerText="";
        const paragraph=document.createElement('p');
        paragraph.innerText=a;
        re.appendChild(paragraph);
    }else if(c===1 && my>=b){
        my=my-b;
        d++;
        saikai(my,me,a,b,1,d);
    }else if(c===1 && b===1){
        a.push(d);
        saikai(my,me,a,b,1,0);
    }else if(c===1){
        a.push(d);
        b=b/me;
        saikai(my,me,a,b,1,0);
    }else if(my>b){
        b=b*me;
        saikai(my,me,[],b,0,0);
    }else if(my<b){
        b=b/me;
        saikai(my,me,[],b,1,0);
    }else if(my===b){
        saikai(my,me,[],b,1,0);
    }
}
