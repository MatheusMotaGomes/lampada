const lampada = document.getElementById('lampada_ligada');
const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');

function verificar(){
  return lampada.src.indexOf('quebrada') > -1
}

function ligar_lampada(){
  if( !verificar() ){
      lampada.src = './img/ligada.jpg';
  }
}

function desligar_lampada(){
  if( !verificar() ){
     lampada.src = './img/desligada.jpg'
  }
}

function quebrar_lampada(){
  lampada.src  = './img/quebrada.jpg';
  verificador += 1;
  console.log(verificador);
}



  ligar.addEventListener('click' , ligar_lampada);
  desligar.addEventListener('click', desligar_lampada);
  lampada.addEventListener('mouseover' , ligar_lampada);
  lampada.addEventListener('mouseleave' , desligar_lampada);
  lampada.addEventListener('dblclick' , quebrar_lampada);
 