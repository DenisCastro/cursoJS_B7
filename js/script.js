/*
function trocarDiv(nome, idade) {

    var area = document.getElementById("area");
    var texto = prompt("Qual seu sobrenome ?");

    area.innerHTML = nome+" "+texto+" tem "+idade+" anos";
}
*/
//**************************************************************************************************************************************** */
/*
            ---------------------------
            --JS DA LISTA DE ARQUIVOS--
            ---------------------------

function adicionarIngrediente() {
    var ing = document.getElementById("ingrediente").value;

    var listahtml = document.getElementById("lista").innerHTML;

    listahtml = listahtml + "<li>"+ing+"</li>";

    document.getElementById("lista").innerHTML = listahtml;
}
*/
//**************************************************************************************************************************************** */
/*
var x = 10;
var y = x + 30;

alert(y);
*/
//**************************************************************************************************************************************** */
/*
                -----------------------
                --OPERAÇÃO MATEMATICA--
                -----------------------

function multiplicar() {
    var campo1 = parseInt(document.getElementById("campo1").value);
    var campo2 = parseInt(document.getElementById("campo2").value);

    var multiplicacao = campo1 * campo2;

    alert(multiplicacao);
}

*/
//**************************************************************************************************************************************** */
/*
                    ------------------------------
                    --EXEMPLO DE VERIFICADOR(IF)--
                    ------------------------------

function testeVerificador() {
    var x = prompt("Diga um número: ");

    if(x > 10) {
        alert("É maior que 10");
    } else {
        alert("Não é maior que 10");
    }
}
*/


var x = 0;
while(x = 10) {
    document.write("Numero: "+x+"<br/>")
    x++;
}