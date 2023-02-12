var exp = "";
function getData(data) {
    exp = exp + data;
    document.getElementById("inputdata").value = exp;

}
function inputvalidation() {
    var expression = document.getElementById("inputdata").value
    //try() and catch() is used to handle exceptions
    try {
        document.getElementById("result").value = eval(expression);
    } catch (e) {
        document.getElementById("result").value = "invalid expression";
    }
}
//function to clear
function clearAll() {
    exp = "";
    document.getElementById("inputdata").value = "";
    document.getElementById("result").value = "";
}
function sq(){
    var data=document.getElementById("inputdata").value;
    document.getElementById("result").value=data*data;
}