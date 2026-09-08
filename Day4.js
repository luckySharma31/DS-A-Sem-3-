/*function multiply(a,b){
    return a*b ;
}
function calculate() {
    let num1 = prompt("Enter first no. : ");
    let num2 = prompt("Enter the second no. :");
    num1 = Number(num1);
    num2 = Number(num2);
    let result = multiply(num1 , num2);
    document.write("The result is " + result);
}
*/
function calculateMarks(a,b,c,d,e){
    return a+b+c+d+e;
}
function calculatePercentage(total){
    return total/5;
}
function calculateGrade(percentage){
    if(percentage >= 90)
        return "A+";
    else if(percentage >= 80)
        return "A";
    else if(percentage >= 70)
        return "B";
    else if(percentage >= 60)
        return "C";
    else if(percentage >= 50)
        return "D";
    else
        return "F";
}

