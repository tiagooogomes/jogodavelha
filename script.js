const jogador1 = "O";
const jogador2 = "X";
let jogadorVez = jogador1;
let jogoTerminado = false;
const tabela = [ ['', '', ''],
                 ['', '', ''],
                 ['', '', ''] ];

vezDeJogar();
mudarNoJogo();



function vezDeJogar(){

     if(jogoTerminado) {return;}

    if(jogadorVez == jogador1){
        let mostrarJogador1 = document.getElementById("jogador");
        mostrarJogador1.innerHTML = "Oi";
    }else{
        let mostrarJogador1 = document.getElementById("jogador");
        mostrarJogador1.innerHTML = "X";
    }
}

function mudarNoJogo(){
    let campo = document.getElementsByClassName("campo");
    const resultado = document.getElementById("resultado");
    const texto = document.getElementById("mensagem");

    for (let i = 0; i < campo.length; i++){

        campo[i].addEventListener("click", function(){

            if (jogoTerminado) {return;}
            if(this.getElementsByTagName("h2").length == 0){

                if (jogadorVez == jogador1){
                    this.innerHTML = jogador1
                    jogadorVez = jogador2;

                    if(i == 0){
                        tabela[0][0] = 1
                    }
                    if(i == 1){
                        tabela[0][1] = 1
                    }
                    if(i == 2){
                        tabela[0][2] = 1
                    }
                    if(i == 3){
                        tabela[1][0] = 1
                    }
                    if(i == 4){
                        tabela[1][1] = 1
                    }
                    if(i == 5){
                        tabela[1][2] = 1
                    }
                    if(i == 6){
                        tabela[2][0] = 1
                    }
                    if(i == 7){
                        tabela[2][1] = 1
                    }
                    if(i == 8){
                        tabela[2][2] = 1
                    }
                    

                    if ((tabela[0][0] == 1 && tabela[0][1] == 1 && tabela[0][2] == 1)  ||
                        (tabela[1][0] == 1 && tabela[1][1] == 1 && tabela[1][2] == 1) ||
                        (tabela[2][0] == 1 && tabela[2][1] == 1 && tabela[2][2] == 1) ||
                        (tabela[0][0] == 1 && tabela[1][0] == 1 && tabela[2][0] == 1) ||
                        (tabela[0][1] == 1 && tabela[1][1] == 1 && tabela[2][1] == 1) || 
    1                   (tabela[0][0] == 1 && tabela[1][1] == 1 && tabela[2][2] == 1) || 
                        (tabela[0][2] == 1 && tabela[1][1] == 1 && tabela[2][0] == 1) ){

                        resultado.innerHTML = "O"
                        texto.innerHTML = "Show de Bola"
                    }
            
                }else{
                    this.innerHTML = jogador2
                    jogadorVez = jogador1;

                    if(i == 0){
                        tabela[0][0] = 2
                    }
                    if(i == 1){
                        tabela[0][1] = 2
                    }
                    if(i == 2){
                        tabela[0][2] = 2
                    }
                    if(i == 3){
                        tabela[1][0] = 2
                    }
                    if(i == 4){
                        tabela[1][1] = 2
                    }
                    if(i == 5){
                        tabela[1][2] = 2
                    }
                    if(i == 6){
                        tabela[2][0] = 2
                    }
                    if(i == 7){
                        tabela[2][1] = 2
                    }
                    if(i == 8){
                        tabela[2][2] = 2
                    }

                    if ((tabela[0][0] == 2 && tabela[0][1] == 2 && tabela[0][2] == 2) ||
                        (tabela[1][0] == 2 && tabela[1][1] == 2 && tabela[1][2] == 2) ||
                        (tabela[2][0] == 2 && tabela[2][1] == 2 && tabela[2][2] == 2) ||
                        (tabela[0][0] == 2 && tabela[1][0] == 2 && tabela[2][0] == 2) ||
                        (tabela[0][1] == 2 && tabela[1][1] == 2 && tabela[2][1] == 2) || 
                        (tabela[0][2] == 2 && tabela[1][2] == 2 && tabela[2][2] == 2) ||
                        (tabela[0][0] == 2 && tabela[1][1] == 2 && tabela[2][2] == 2) || 
                        (tabela[0][2] == 2 && tabela[1][1] == 2 && tabela[2][0] == 2) ){

                            resultado.innerHTML = "X"
                            texto.innerHTML = "Diga XXXX... Pronto, registrado"
                        }
                }
            }
        });
    }
}         