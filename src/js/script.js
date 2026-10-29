// ===============================================
// Vinheria Agnello - Checkpoint 03
// Sistema com objetos, arrays e funções de alta ordem
// ===============================================


// 1) ARRAY DE OBJETOS
// Cada vinho é um objeto com nome, tipo, safra e estoque
const vinhos = [
    { nome: "Malbec Reserva", tipo: "tinto", safra: 2019, estoque: 12 },
    { nome: "Chardonnay Clássico", tipo: "branco", safra: 2021, estoque: 4 },
    { nome: "Rosé de Verão", tipo: "rosé", safra: 2022, estoque: 8 },
    { nome: "Cabernet Sauvignon", tipo: "tinto", safra: 2018, estoque: 3 },
    { nome: "Sauvignon Blanc", tipo: "branco", safra: 2020, estoque: 15 }
];


// 2) FUNÇÕES

// Função para adicionar um vinho novo no array
function adicionarVinho(nome, tipo, safra, estoque) {
    // cria o objeto do novo vinho
    const novoVinho = {
        nome: nome,
        tipo: tipo,
        safra: safra,
        estoque: estoque
    };

    // coloca o objeto no final do array
    vinhos.push(novoVinho);
}

// Função para listar todos os vinhos usando forEach
function listarVinhos() {
    console.log("===== LISTA COMPLETA DE VINHOS =====");

    vinhos.forEach((vinho) => {
        console.log(
            vinho.nome + " | Tipo: " + vinho.tipo +
            " | Safra: " + vinho.safra +
            " | Estoque: " + vinho.estoque
        );
    });
}

// Função para mostrar vinhos com estoque baixo usando filter
// (estoque abaixo de 5)
function mostrarEstoqueBaixo() {
    console.log("===== VINHOS COM ESTOQUE BAIXO (menos de 5) =====");

    // filter cria um array novo só com os vinhos que passam na condição
    const estoqueBaixo = vinhos.filter((vinho) => {
        return vinho.estoque < 5;
    });

    estoqueBaixo.forEach((vinho) => {
        console.log(vinho.nome + " - Estoque: " + vinho.estoque);
    });

    return estoqueBaixo;
}

// Função para calcular o estoque total usando reduce
function calcularEstoqueTotal() {
    // reduce soma o estoque de todos os vinhos (começa do 0)
    const total = vinhos.reduce((soma, vinho) => {
        return soma + vinho.estoque;
    }, 0);

    console.log("===== ESTOQUE TOTAL =====");
    console.log("Total de garrafas na vinícola: " + total);

    return total;
}

// Função para pegar os nomes em caixa alta usando map
function nomesEmCaixaAlta() {
    // map cria um array novo com os nomes em maiúsculo
    const nomes = vinhos.map((vinho) => {
        return vinho.nome.toUpperCase();
    });

    console.log("===== NOMES EM CAIXA ALTA =====");
    console.log(nomes);

    return nomes;
}


// 3) USANDO AS FUNÇÕES

// Adicionando dois vinhos novos pelo código (sem prompt)
adicionarVinho("Merlot Especial", "tinto", 2020, 2);
adicionarVinho("Rosé Premium", "rosé", 2023, 10);

// Chamando as funções para mostrar tudo no console
listarVinhos();
const listaEstoqueBaixo = mostrarEstoqueBaixo();
const estoqueTotal = calcularEstoqueTotal();
const listaNomes = nomesEmCaixaAlta();


// 4) ALERT FINAL com o resumo
// monta um texto com os nomes dos vinhos de estoque baixo
let textoBaixo = "";
listaEstoqueBaixo.forEach((vinho) => {
    textoBaixo += "- " + vinho.nome + " (" + vinho.estoque + ")\n";
});

alert(
    "RESUMO DA VINHERIA AGNELLO\n\n" +
    "Total de vinhos cadastrados: " + vinhos.length + "\n\n" +
    "Vinhos com estoque abaixo de 5:\n" + textoBaixo + "\n" +
    "Estoque total: " + estoqueTotal + " garrafas\n\n" +
    "Nomes em caixa alta:\n" + listaNomes.join(", ")
);
