var operants=[];//array that stores operants
var operators=[];//array that stores operators
var expression=[];//array that stores operators and operant
//function to handle button click
$(".b,.orange,.light,.green").click(function(){
    var buttonText=$(this).text();
    if($(this).hasClass('b')){
        //clicked button is an operant,
        operants.push(buttonText);
        expression.push(buttonText);
    }
    if($(this).hasClass('orange')){
        //clicked button is an operator
        operators.push(buttonText);
        expression.push(buttonText);
    }
    if($(this).hasClass('light')){
        var txt=$(this).text();
        if(txt==='C'){
            expression.splice(0,expression.length);
        }
        if(txt==='DEL'){
            expression.pop();
        }
    }
    if($(this).hasClass('green')){
        try{
            calculateResult(operators,operants);
        }
        catch(error){
            var err=error.message;
            expression.push(err);
        }
    }
    $("h1").html(expression.join(''));
    
})
//function to calculator result from operator and operantsl
function calculateResult(operators,operants){
    // handles the case where number of operators is not lessthan 1 the number of operands
    if(operators.length !== operants.length - 1){
        throw new Error("Maths Error");
    }
    //innitialize the result with the first operand
    var result=parseFloat(operants[0]);
    //iterate through the arrays
    for(var i=0;i<operators.length;i++){
        var operand=parseFloat(operants[i+1]);
        var operator=operators[i];
        //perform the calculation based on the operator
        switch(operator){
            case '+':
                result +=operand;
                 break;
            case '/':
                result /=operand;
                break;
            case '*':
                result *=operand;
                break;
            case '-':
                result -=operand;
                break;
            default:
                $("h1").html("invalid operator");
        }
    }
    expression=[];
    expression.push(result);
}