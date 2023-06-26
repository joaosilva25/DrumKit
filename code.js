/*No código abaixo foi chamado um escutador de evento dentro do meu body que irá capturar o evento de teclado
onde foi passado o parâmetro da função (event) para armazena-lo para que dê certo a minha referência
utilizei o toLowerCase para passar o resultado do evento de teclado em minúsculo, o .code é 
uma propriedade do objeto de evento em JavaScript 
que fornece o código da tecla pressionada ou liberada durante um evento de teclado.*/
document.body.addEventListener('keyup', (event)=> {
    playSound(event.code.toLowerCase() );
});


function playSound(sound) {
    let audioElement=document.querySelector(`#s_${sound}`);
    let key=document.querySelector(`button[data-key="${sound}"]`)

    if (audioElement) {
        audioElement.play();
    }

    if (key) {
        key.classList.add('active');
        
        setTimeout(() => {
        key.classList.remove('active');
        },300);
    }
}