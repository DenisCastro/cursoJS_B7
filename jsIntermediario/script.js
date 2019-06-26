/*
        ---------------------
        --FUNCTION DE MOUSE--
        ---------------------
function apertouMouse() {
    console.log("APERTOU O MOUSE");
}
function soltouMouse() {
    console.log("SOLTOU O MOUSE");
}
function mouseEmCima() {
    console.log("MOUSE PASSOU EM CIMA");
}   
function mouseSaiuDeCima() {
    console.log("MOUSE SAIU DE CIMA");
}
function moveuMouse() {
    console.log("MOUSE FOI MOVIDO");
}
*/

/*
        ------------------------------
        --FUNCTION DE CLICK DO MOUSE--
        ------------------------------
function clicou() {
	console.log("CLICOU");
}
*/

/*
function botaoDireito() {
    console.log("BOTAO DIREITO");
    
    return false;
}
*/

/*
function clickDuplo() {
    console.log("CLICOU DUAS VEZES");
}
*/

/*
        -----------------------
        --FUNCTION DE TECLADO--
        -----------------------
function apertouTecla(event) {
    console.log("APERTOU ALGUMA TECLA: "+event.keycode);
}
*/

/*
function apertouTecla(event) {
    if(event.shiftKey == true && event.keyCode == 69) {
        console.log("Apertou Shift + E");
    }
}
*/

/*
function carregou() {
    alert("Página carregada");
}
*/

/*
        --------------
        --FORMULARIO--
        --------------

function mudouOpcao(objeto) {
    console.log("Selecionou: "+objeto.value);
}
function focou() {
    console.log("Focou no campo 1");
}
function desfocou() {
    console.log("Desfocou do campo 1");
}
*/
/*
        ----------------
        --FUNCAO BOLAS--
        ----------------

function addBola() {
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");
    var p1 = Math.floor(Math.random() * 500);
    var p2 = Math.floor(Math.random() * 400);
    bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;");
    bola.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(bola);
}

function estourar(elemento){
    document.body.removeChild(elemento);
}

function iniciar() {
    setInterval(addBola, 1000);
}
*/

