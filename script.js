const lampada = document.getElementById('lampada_ligada');
const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');

function ligar_lampada(){
  lampada.src = './img/ligada.jpg';
}

function desligar_lampada(){
  lampada.src = './img/desligada.jpg'
}

function quebrar_lampada(){
  lampada.src  = './img/quebrada.jpg'
}

ligar.addEventListener('click' , ligar_lampada);
desligar.addEventListener('click', desligar_lampada);
lampada.addEventListener('mouseover' , ligar_lampada);
lampada.addEventListener('mouseleave' , desligar_lampada);
lampada.addEventListener('dblclick' , quebrar_lampada);
