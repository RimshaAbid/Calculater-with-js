function insert(num) 
{
document.form.results.value = document.form.results.value + num;
}


function equal()
{
var equ = document.form.results.value;
if(equ)
{
document.form.results.value = eval(equ)
}
}

function backspace()
{
var equ = document.form.results.value;
document.form.results.value = equ.substring(0, equ.length -1); 
}