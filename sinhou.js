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
        kaisi(x,y,0,[],1,0);
    }
}
function kaisi(my,me,a,c,b,i) {
    if (my===0 && me<11){
        re.innerText="";
        const paragraph=document.createElement('p');
        const result=(a);
        paragraph.innerText=result;
        re.appendChild(paragraph);
    }else if(my===0){
        re.innerText="";
        const paragraph=document.createElement('p');
        const result=(c);
        paragraph.innerText=result;
        re.appendChild(paragraph);
    }else if(my > b) {
        i++;
        b=b*me;
        kaisi(my,me,a,c,b,i);
    }else if(my < b){
        b=b/me;
        i=i-1;
        my=my-b;
        keta(my,me,b,a,i,1,c);
    }else{
        a=a+10**i;
        c.push(1);
        for (let j = 0; j < i; j++) {
            c.push(0);
        }
        kaisi(0,me,a,c,1,0);
    }
}
function keta(my,me,b,a,i,d,c){
    if (my > b) {
        d++;
        my=my-b;
        keta(my,me,b,a,i,d,c);
    }else if(my == b){
        d++;
        e=10**i;
        a=a+e*d;
        c.push(d);
        for (let j = 0; j < i; j++) {
            c.push(0);
        }
        kaisi(0,me,a,c,1,0);
    }else{
        e=10**i;
        a=a+e*d;
        c.push(d);
        kaisi(my,me,a,c,1,0);
    }
}
