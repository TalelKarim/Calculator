//Declaration de variable 
let output = document.querySelector('.ecran');

let buttons = document.querySelectorAll('.numbers >button');
let expression = "0";

output.textContent = expression;


let clearElement = document.querySelector('#regular-buttonCE');
let clearAll = document.querySelector('#regular-buttonC');

let divMul = document.querySelector('.first').children;

//les operateurs 
let plus = document.querySelector('#plus');
let division = divMul[2];
let multp = divMul[3];
let moins = document.querySelector('.regular > button');
let equal = document.querySelector('#regular-buttonegal');

let Operators = ['+', '-', '/', '*'];

let resultatFinale = 0;



//effacement
clearAll.addEventListener('click', function(){
    expression = "0";
    output.textContent = expression;
    enableOperator();
});

clearElement.addEventListener('click', function(){
    expression = expression.substring(0, expression.length - 1);
    output.textContent = expression;
    enableOperator();
    if(expression.length == 0){
        expression = "0";
        output.textContent = expression;
    }
});

function onlyOneOperator(){
    for(let i =0; i<expression.length; i++){
        if(Operators.includes(expression[i])){
            multp.disabled = true;
            plus.disabled = true;
            moins.disabled = true;
            division.disabled = true;
        }
    }
}

function enableOperator(){
   let test = true;
   let j =0;
   do{
       if(Operators.includes(expression[j])){
           test = false;
       }
       j++;
   }
   while(j<expression.length && test== true);
   if(test == true){
       multp.disabled = false;
       plus.disabled = false;
       moins.disabled = false;
       division.disabled = false;

   }
  
}

function verifyFirstIsNumber(){
   if(expression.length == 0){
       multp.disabled = true;
       plus.disabled = true;
       moins.disabled = true;
       division.disabled = true;
   }
}

buttons[0].onclick = function(){
    if(expression == "0"){
        expression ="";
    }
    if(expression.length < 18){
        expression = expression + "7";
    }
     output.textContent = expression;
};

buttons[1].onclick = function(){
    if(expression == "0"){
        expression ="";
    }
    if(expression.length < 18){
        expression = expression + "8";
    }
    output.textContent= expression;
};

buttons[2].onclick = function(){
    if(expression == "0"){
        expression ="";
    }
    if(expression.length < 18){
        expression = expression + "9";
    }
    output.textContent= expression;
};

buttons[3].onclick = function(){
    if(expression == "0"){
        expression ="";
    }
    if(expression.length< 18){
        expression = expression + "4";
    }
    output.textContent= expression;
};

buttons[4].onclick = function(){
    if(expression == "0"){
        expression ="";
    }
    if(expression.length < 18){
        expression = expression + "5";
    }
    output.textContent = expression;
};

buttons[5].onclick = function(){
    if(expression == "0"){
        expression ="";
    }

    if(expression.length < 18){
        expression = expression + "6";

    }
   output.textContent= expression;
};

buttons[6].onclick = function(){
    if(expression == "0"){
        expression ="";
    }

    if(expression.length <18){
        expression = expression + "1";
    }
   output.textContent= expression;
};

buttons[7].onclick = function(){
    if(expression == "0"){
        expression ="";
    }
    if(expression.length < 18){
        expression = expression + "2";
    }
   output.textContent= expression;
};

buttons[8].onclick = function(){
    if(expression == "0"){
        expression ="";
    }
    if(expression.length < 18){
        expression = expression + "3";
    }
    output.textContent = expression;
};

buttons[9].onclick = function(){
    if(expression == "0"){
        expression ="";
    }

    if(expression.length < 18){
        expression = expression + "0";

    }
   output.textContent= expression;
};

buttons[10].onclick = function(){
    if(expression == "0"){
        expression ="";
    }

    if(expression.length < 18){
        expression = expression + ".";
    }
   output.textContent= expression;
};




plus.addEventListener('click', function(){
    expression = expression + " + ";
    output.textContent = expression;
    onlyOneOperator();
});

moins.addEventListener('click', function(){
   expression = expression + " - ";
   output.textContent = expression;
   onlyOneOperator();

});

division.addEventListener('click', function(){
    expression = expression + " / ";
    output.textContent = expression;
    onlyOneOperator();
 });
 
 multp.addEventListener('click', function(){
    expression = expression + " * ";
    output.textContent = expression;
    onlyOneOperator();

 });
 

function Evaluation(){
   let results = expression.split(' ');
 
  if (results.length == 3){
    switch(results[1]){
        case '+':
            resultatFinale = Number(results[0]) + Number(results[2]); 
            break;
   
        case '-':
            resultatFinale = Number(results[0]) - Number(results[2]); 
            break;
   
        case '*':
            resultatFinale = Number(results[0]) * Number(results[2]); 
            break;
   
        case '/':
            resultatFinale = Number(results[0]) / Number(results[2]); 
            break;      
      }
      resultatFinale = Math.round(resultatFinale * 1000000) / 1000000;
    expression = resultatFinale.toString();
  }
   output.textContent = expression;

} 

  
equal.onclick = function(){
    Evaluation();
    output.textContent = expression;
    enableOperator();
};