
function areaTriangulo() {
    const base = parseFloat(prompt('Informe a base do triangulo: '));
    const altura = parseFloat(prompt('Informe a altura do triangulo: '));
    return (base * altura) / 2
};

function areaRetangulo() {
    const base = parseFloat(prompt('Informe a base do retângulo: '));
    const altura = parseFloat(prompt('Informe a altura do retângulo: '));
    return (base * altura) 
};

function areaQuadrado() {
    const lado = parseFloat(prompt('Informe o lado do quadrado: '));
    return Math.pow(lado, 2) 
};

function areaTrapezio() {
    const baseMaior = parseFloat(prompt('Informe a base maior do trapézio: '));
    const baseMenor = parseFloat(prompt('Informe a base menor do trapézio: '));
    const altura = parseFloat(prompt('Informe a altura do trapézio: '));
    return ((baseMaior + baseMenor) * altura) / 2
};

function areaCirculo() {
    const raio = parseFloat(prompt("Digite o valor do raio"));
    return (Math.PI * raio ** 2) 
};

function exibirMenu() {
    return prompt(
        'Calculadora Geométrica\n' + 
        '1. Calcular área de triângulo\n' +
        '2. Calcular área do retângulo\n' +
        '3. Calcular área do quadrado\n' +
        '4. Calcular área do trapézio\n' +
        '5. Calcular área do circulo\n' +
        '6. Sair/n'
    );
    
};

function executar() {
    let opcao = '';
    do {
        opcao = exibirMenu()
        let resultado 

        switch (opcao) {
            case '1':
                resultado = areaTriangulo()
                break;
            case '2':
                resultado = areaRetangulo()
                break;
            case '3':
                resultado = areaQuadrado()
                break;
            case '4':
                resultado = areaTrapezio()
                break;
            case '5':
                resultado = areaCirculo()
                break;
            case '6':
                alert ('Saindo...')
                break;
            default:
                break;
        }
        if (resultado) {
            alert ('Resultado: ' + resultado)
        }
        
    } while (opcao !== 6);
    
};

executar()