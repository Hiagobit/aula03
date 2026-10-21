var letraDigitada = "E"

switch (letraDigitada) {
    case "A": // possibilidades de acertos
        console.log("É uma vogal A");
        break; //parar 
    case "E":
        console.log("É uma vogal E");
        break;
    case "I":
        console.log("É uma vogal I");
        break;
    case "O":
        console.log("É uma vogal O");
        break;
    case "U":
        console.log("É uma vogal U");
        break;
    default:
        console.log("É uma consoante");
        
        break;
}

// Criar um menu de escolha, sendo 1- entrar, 2- cadastrar, 3 editar, 0- sair

var escolhaMenu = "2"

switch (letraDigitada) {
    case 1: // possibilidades de acertos
        console.log("entrar");
        break; //parar 
    case 2:
        console.log("cadastrar");
        break;
    case 3:
        console.log("editar");
        break;
    case 0:
        console.log("sair");
        break;
    default:
        console.log("É uma consoante");
        
        break;
}