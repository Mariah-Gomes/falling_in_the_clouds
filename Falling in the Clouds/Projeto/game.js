var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
let tecla = 0;
// personagem é o boneco
var personagem = {
    x: 200,
    y: 0,
    w: 107,
    h: 107,
    raio: 110,
    speed: 0,
    dirX: 0,
    dirY: 1,
    mod: 0
}

var paisagem = {
    x: 0,
    y: 0
}
//posicaoOBS é a posição do obstaculo
var posicaoOBS = {
    x: 0,
    y: 150,
    w: 140,
    h: 44
}
var posicaoOBS1 = {
    x: 360,
    y: 350,
    w: 140,
    h: 44
}
var posicaoOBS2 = {
    x: 180,
    y: 550,
    w: 140,
    h: 44
}
var posicaoOBS3 = {
    x: 0,
    y: 750,
    w: 140,
    h: 44
}
var posicaoOBS4 = {
    x: 300,
    y: 950,
    w: 140,
    h: 44
}

var posicaoOBS5 = {
    x: 110,
    y: 1150,
    w: 140,
    h: 44
}

var posicaoOBS6 = {
    x: 310,
    y: 1350,
    w: 140,
    h: 44
}

var posicaoOBS7 = {
    x: 0,
    y: 1550,
    w: 140,
    h: 44
}

var posicaoOBS8 = {
    x: 150,
    y: 1750,
    w: 140,
    h: 44
}

var posicaoOBS9 = {
    x: 350,
    y: 1950,
    w: 140,
    h: 44
}

var posicaoOBS10 = {
    x: 90,
    y: 2150,
    w: 140,
    h: 44
}

var posicaoOBS11 = {
    x: 360,
    y: 2350,
    w: 140,
    h: 44
}

var posicaoOBS12 = {
    x: 180,
    y: 2550,
    w: 140,
    h: 44
}

var posicaoOBS13 = {
    x: 0,
    y: 2750,
    w: 140,
    h: 44
}

var posicaoOBS14 = {
    x: 100,
    y: 2950,
    w: 140,
    h: 44
}

var posicaoOBS15 = {
    x: 280,
    y: 3150,
    w: 140,
    h: 44
}

var posicaoOBS16 = {
    x: 0,
    y: 3350,
    w: 140,
    h: 44
}

var posicaoOBS17 = {
    x: 360,
    y: 3550,
    w: 140,
    h: 44
}

var posicaoOBS18 = {
    x: 110,
    y: 3750,
    w: 140,
    h: 44
}

var posicaoOBS19 = {
    x: 300,
    y: 3950,
    w: 140,
    h: 44
}

var posicaoOBS20 = {
    x: 0,
    y: 4150,
    w: 140,
    h: 44
}

var posicaoOBS21 = {
    x: 360,
    y: 4350,
    w: 140,
    h: 44
}

var posicaoOBS22 = {
    x: 150,
    y: 4550,
    w: 140,
    h: 44
}

var posicaoOBS23 = {
    x: 50,
    y: 4750,
    w: 140,
    h: 44
}

var posicaoOBS24 = {
    x: 290,
    y: 4950,
    w: 140,
    h: 44
}

var posicaoOBS25 = {
    x: 100,
    y: 5150,
    w: 140,
    h: 44
}

var posicaoOBS26 = {
    x: 360,
    y: 5350,
    w: 140,
    h: 44
}

var contador = 0


// fundo é a função da Imagem do fundo
function fundo(){
    var img = new Image();
    img.src = "novoceu.png";
    ctx.drawImage(img, paisagem.x, paisagem.y);
    contador = contador + 1
    console.log(contador)
    if(contador < 5500){
        ctx.translate(0,-1)
    }
}
document.addEventListener("keydown", function(evento){
    tecla = evento.keyCode;
});
// Função para mover o personagem para os lados
function movePersonagem(){
    if(tecla === 37){
        if(personagem.x >= 0)
            personagem.x -= 1;
        console.log("Esquerda")
    }
    else if(tecla === 39){
        if(personagem.x <= canvas.width - personagem.raio)
            personagem.x += 1;
        console.log("Direita")
    }
}
// Função para o personagem ter uma imagem e ela fazer as funções do personagem
function boneco(){
    var imagem = new Image();
    imagem.src = "Bonecco.png";
    ctx.drawImage(imagem, personagem.x, personagem.y);
    if(contador < 5800){
        personagem.y += (personagem.speed + personagem.mod) * personagem.dirY;
        personagem.y += 1
    }
     // else if(contador >= 5800){
     //     escrita("VOCÊ GANHOU", 100,50, "purple")
     // }
}
// Função para colocar os obstáculos
function obstaculo1(){
    var bloco = new Image();
    bloco.src = "obss1.jpg";
    ctx.drawImage(bloco, posicaoOBS.x, posicaoOBS.y);
}
function obstaculo2(){
    var bloco = new Image();
    bloco.src = "obss1.jpg";
    ctx.drawImage(bloco, posicaoOBS1.x, posicaoOBS1.y);
}

function obstaculo3() {
    var bloco = new Image();
    bloco.src = "obss1.jpg";
    ctx.drawImage(bloco, posicaoOBS2.x, posicaoOBS2.y);
}

function obstaculo4() {
    var bloco = new Image();
    bloco.src = "obss1.jpg";
    ctx.drawImage(bloco, posicaoOBS3.x, posicaoOBS3.y);
}

function obstaculo5() {
    var bloco = new Image();
    bloco.src = "obss1.jpg";
    ctx.drawImage(bloco, posicaoOBS4.x, posicaoOBS4.y);
}

function obstaculo6() {
    var bloco = new Image();
    bloco.src = "obss1.jpg";
    ctx.drawImage(bloco, posicaoOBS5.x, posicaoOBS5.y);
}

function obstaculo7() {
    var bloco = new Image();
    bloco.src = "obss1.jpg";
    ctx.drawImage(bloco, posicaoOBS6.x, posicaoOBS6.y);
}

function obstaculo8() {
    var bloco = new Image();
    bloco.src = "obss1.jpg";
    ctx.drawImage(bloco, posicaoOBS7.x, posicaoOBS7.y);
}

function obstaculo9() {
    var bloco = new Image();
    bloco.src = "obss1.jpg";
    ctx.drawImage(bloco, posicaoOBS8.x, posicaoOBS8.y);
}

function obstaculo10() {
    var bloco = new Image();
    bloco.src = "obss1.jpg";
    ctx.drawImage(bloco, posicaoOBS9.x, posicaoOBS9.y);
}

function obstaculo11() {
    var bloco = new Image();
    bloco.src = "obss1.jpg";
    ctx.drawImage(bloco, posicaoOBS10.x, posicaoOBS10.y);
}

function obstaculo12() {
    var bloco = new Image();
    bloco.src = "obss1.jpg";
    ctx.drawImage(bloco, posicaoOBS11.x, posicaoOBS11.y);
}

function obstaculo13() {
    var bloco = new Image();
    bloco.src = "obss1.jpg";
    ctx.drawImage(bloco, posicaoOBS12.x, posicaoOBS12.y);
}

function obstaculo14() {
    var bloco = new Image();
    bloco.src = "obss1.jpg";
    ctx.drawImage(bloco, posicaoOBS13.x, posicaoOBS13.y);
}

function obstaculo15() {
     var bloco = new Image();
     bloco.src = "obss1.jpg";
     ctx.drawImage(bloco, posicaoOBS14.x, posicaoOBS14.y);
}

function obstaculo16() {
     var bloco = new Image();
     bloco.src = "obss1.jpg";
     ctx.drawImage(bloco, posicaoOBS15.x, posicaoOBS15.y);
}

function obstaculo17() {
     var bloco = new Image();
     bloco.src = "obss1.jpg";
     ctx.drawImage(bloco, posicaoOBS16.x, posicaoOBS16.y);
}

function obstaculo18() {
    var bloco = new Image();
    bloco.src = "obss1.jpg";
    ctx.drawImage(bloco, posicaoOBS17.x, posicaoOBS17.y);
}

function obstaculo19() {
    var bloco = new Image();
    bloco.src = "obss1.jpg";
    ctx.drawImage(bloco, posicaoOBS18.x, posicaoOBS18.y);
}

function obstaculo20() {
    var bloco = new Image();
    bloco.src = "obss1.jpg";
    ctx.drawImage(bloco, posicaoOBS19.x, posicaoOBS19.y);
}

function obstaculo21() {
    var bloco = new Image();
    bloco.src = "obss1.jpg";
    ctx.drawImage(bloco, posicaoOBS20.x, posicaoOBS20.y);
}

function obstaculo22() {
    var bloco = new Image();
    bloco.src = "obss1.jpg";
    ctx.drawImage(bloco, posicaoOBS21.x, posicaoOBS21.y);
}

function obstaculo23() {
    var bloco = new Image();
    bloco.src = "obss1.jpg";
    ctx.drawImage(bloco, posicaoOBS22.x, posicaoOBS22.y);
}

function obstaculo24() {
    var bloco = new Image();
    bloco.src = "obss1.jpg";
    ctx.drawImage(bloco, posicaoOBS23.x, posicaoOBS23.y);
}

function obstaculo25() {
    var bloco = new Image();
    bloco.src = "obss1.jpg";
    ctx.drawImage(bloco, posicaoOBS24.x, posicaoOBS24.y);
}

function obstaculo26() {
    var bloco = new Image();
    bloco.src = "obss1.jpg";
    ctx.drawImage(bloco, posicaoOBS25.x, posicaoOBS25.y);
}

function obstaculo27() {
    var bloco = new Image();
    bloco.src = "obss1.jpg";
    ctx.drawImage(bloco, posicaoOBS26.x, posicaoOBS26.y);
}
// function colisao(){
//     if (personagem.y === (posicaoOBS.w - posicaoOBS.x)){
//         window.alert("END GAME")
//     }
//     else{
//         ctx.translate(0,-1)
//         personagem.y += (personagem.speed + personagem.mod) * personagem.dirY;
//         personagem.y += 1
//     }
// }
// function escrita(escrita, x, y, cor){
//      ctx.fillStyle = cor;
//      ctx.font = "30px Arial";
//      ctx.fillText(escrita, x, y);
// }

function desenhar(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    fundo();
    movePersonagem();
    boneco();
    obstaculo1();
    obstaculo2();
    obstaculo3();
    obstaculo4();
    obstaculo5();
    obstaculo6();
    obstaculo7();
    obstaculo8();
    obstaculo9();
    obstaculo10();
    obstaculo11();
    obstaculo12();
    obstaculo13();
    obstaculo14();
    obstaculo15();
    obstaculo16();
    obstaculo17();
    obstaculo18();
    obstaculo19();
    obstaculo20();
    obstaculo21();
    obstaculo22();
    obstaculo23();
    obstaculo24();
    obstaculo25();
    obstaculo26();
    obstaculo27();

    //colisao();
    requestAnimationFrame(desenhar);
}

function anima(){
    desenhar();
}
