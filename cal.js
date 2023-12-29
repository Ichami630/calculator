var currentInput='';
//function to append symbol on screen
function appendNumber(value){
    currentInput +=value;
    updateScreen();
}

//append symbol to screen
function appendSymbol(value){
    if(value ==="%"){
        currentInput+='*0.01';//convert percentage to decimal form for evaluation
    }else{
    currentInput +=value;
    }
    updateScreen();
}

//function to clear the screen
function clearScreen(){
    currentInput='';
    updateScreen();
}

//function to delete from screen
function deleteLast(){
    currentInput=currentInput.slice(0,-1);
    updateScreen();
}

//function to calculate the result
function calculateResult(){
    try{
        const result=eval(currentInput);
        currentInput=result.toString();
        updateScreen();
    }catch(error){
        //error to be returned 
        currentInput='error';
        updateScreen();
    }
}
//update screen values
function updateScreen(){
    $('#main').text(currentInput);
}
//function to handle button clicked
$(".b,.light,.orange,.green").click(function(){
    const buttonText=$(this).text();
    if($(this).hasClass('b')){
        appendNumber(buttonText);
    }
    if($(this).hasClass('orange')){
        appendSymbol(buttonText);
    }
    if($(this).hasClass('light')){
        if($(this).text()=='C'){
            clearScreen();
        }
        if($(this).text()=='DEL'){
            deleteLast();
        }
    }
    if($(this).hasClass('green')){
        calculateResult();
    }
})
