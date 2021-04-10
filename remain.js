let screen = document.getElementById('screen');
button =  document.querySelectorAll('button');


var screenValue = '' ;
for(item of button){
    item.addEventListener('click' , (e)=>{
        buttonText = e.target.innerText;
        if(buttonText == 'x'){
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = '' ;
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }
        else if(buttonText == '%'){
            screenValue  += '*0.01' ;
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
    
}