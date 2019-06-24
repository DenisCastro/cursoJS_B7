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
//**************************************************************************************************************************************** */
/*

                    --------------
                    --LOOP WHILE--
                    --------------

document.write("Iniciando o Loop...<br/>")

var x = 0;
while(x < 10) {
    document.write("Numero: "+x+"<br/>")
    x++;
}

document.write("Finalizando o Loop...<br/>")
*/

//**************************************************************************************************************************************** */

/*
                    --------------
                    --LOOP WHILE--
                    --------------                    
for(x = 0; x < 10; x++ ) {
    document.write("Numero "+x+"<br/>");
}
*/
//**************************************************************************************************************************************** */
/*
                    ----------
                    --SWITCH--
                    ----------                    

x = prompt("Qual é o numero? ");

switch(x) {
    case "0":
        alert("X é  o 0");
        break;
    case "1":
        alert("X é o 1");
        break;
    case "2":
        alert("X é o 2");
        break;
    default:
        alert("Ninguem foi satisfeito");
        break;
    
}

*/
//**************************************************************************************************************************************** */

/*
                    ------------------------------
                    --PRATICA "ADVINHE O NUMERO"--
                    ------------------------------

function verificar() {
    var n1 = document.getElementById("n1").innerHTML;
    var n2 = document.getElementById("n2").value;

    if(n1 == n2) {
        alert("VOCÊ ACERTOU O NÚMERO!");
    } else {
        alert("VOCÊ ERROU!");
    }
    resetar();
}

function resetar() {
    document.getElementById("n2").value = "";
    
    var r = Math.floor(Math.random() * 100);
    document.getElementById("n1").innerHTML = r;

}

*/
