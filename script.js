let string ="";
let buttons = document.querySelectorAll('.spbutton');
let buttons1 = document.querySelectorAll('.button');
Array.from(buttons).forEach((spbutton)=>{
    spbutton.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='C'){
            string="";
            document.querySelector('input').value=string;
        }
        else{
            console.log(e.target)
            string=string+ e.target.innerHTML;
            document.querySelector('input').value=string;
        }
       
    })
})
Array.from(buttons1).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML){
            console.log(e.target)
            string=string+ e.target.innerHTML;
            document.querySelector('input').value=string;
        }
       
    })
})