
tr= true;
document.getElementById("vr").addEventListener("click", function(e) {


if(tr==true){
	
    document.getElementById('vr1').innerHTML = 'С помощью нашей программы вы значительно экономите свое время';
    
    let target = e && e.target || event.srcElement;
tr=false;
Exit;
}
if(tr==false){
	
    document.getElementById('vr1').innerHTML = '';
    
    let target = e && e.target || event.srcElement;
tr=true;
Exit;

}
});

tr1= true;
document.getElementById("ud").addEventListener("click", function(e) {


if(tr1==true){
	
    document.getElementById('ud1').innerHTML = 'Наша программа очень проста в использование';
    
    let target = e && e.target || event.srcElement;
tr1=false;
Exit;
}
if(tr1==false){
	
    document.getElementById('ud1').innerHTML = '';
    
    let target = e && e.target || event.srcElement;
tr1=true;
Exit;

}
})
;
tr2= true;
document.getElementById("ka").addEventListener("click", function(e) {


if(tr2==true){
	
    document.getElementById('ka1').innerHTML = 'Наша прогрмма cоздает качественные договоры, как професионалы';
    
    let target = e && e.target || event.srcElement;
tr2=false;
Exit;
}
if(tr2==false){
	
    document.getElementById('ka1').innerHTML = '';
    
    let target = e && e.target || event.srcElement;
tr2=true;
Exit;

}
})

;
