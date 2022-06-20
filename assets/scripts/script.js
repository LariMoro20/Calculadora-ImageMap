//Variaveis globais
let calculation = ''
let has_operation = false

const result_area = document.getElementById(`ResultArea`); // Area de exibição dos calculos
const clear_button = document.getElementById(`ClearBtn`); //Botão de limpar

//Resolução da imagem
var largura = document.getElementById("calculator").width;
var altura = document.getElementById("calculator").height;

//Mapeamento dos botões da calculadora
/*
Definição das coordenadas utilizando as devidas proporções:
larg = 500(x)
alt = 676(y)
largcord = lar_area*100/x
altcord = y*100/y
*/
const buttons_coord = [
    {
        1: largura * 0.086,
        2: altura * 0.2875,
        3: largura * 0.264,
        4: altura * 0.424,
        type: "number",
        val: 1,
    },
    {
        1: largura * 0.302,
        2: altura * 0.2875,
        3: largura * 0.48,
        4: altura * 0.424,
        type: "number",
        val: 2,
    },
    {
        1: largura * 0.52,
        2: altura * 0.2875,
        3: largura * 0.69,
        4: altura * 0.424,
        type: "number",
        val: 3,
    },

    {
        1: largura * 0.078,
        2: altura * 0.452,
        3: largura * 0.25,
        4: altura * 0.58,
        type: "number",
        val: 4,
    },
    {
        1: largura * 0.3,
        2: altura * 0.452,
        3: largura * 0.48,
        4: altura * 0.58,
        type: "number",
        val: 5,
    },
    {
        1: largura * 0.51,
        2: altura * 0.452,
        3: largura * 0.69,
        4: altura * 0.58,
        type: "number",
        val: 6,
    },

    {
        1: largura * 0.073,
        2: altura * 0.61,
        3: largura * 0.26,
        4: altura * 0.74,
        type: "number",
        val: 7,
    },
    {
        1: largura * 0.3,
        2: altura * 0.61,
        3: largura * 0.48,
        4: altura * 0.74,
        type: "number",
        val: 8,
    },
    {
        1: largura * 0.52,
        2: altura * 0.61,
        3: largura * 0.69,
        4: altura * 0.74,
        type: "number",
        val: 9,
    },

    {
        1: largura * 0.073,
        2: altura * 0.77,
        3: largura * 0.26,
        4: altura * 0.9,
        type: "number",
        val: 0,
    },
    {
        1: largura * 0.73,
        2: altura * 0.2875,
        3: largura * 0.91,
        4: altura * 0.424,
        type: "operator",
        val: "/",
    },
    {
        1: largura * 0.73,
        2: altura * 0.452,
        3: largura * 0.91,
        4: altura * 0.58,
        type: "operator",
        val: "*",
    },
    {
        1: largura * 0.73,
        2: altura * 0.61,
        3: largura * 0.98,
        4: altura * 0.74,
        type: "operator",
        val: "-",
    },
    {
        1: largura * 0.3,
        2: altura * 0.77,
        3: largura * 0.48,
        4: altura * 0.9,
        type: "number",
        val: ".",
    },
    {
        1: largura * 0.51,
        2: altura * 0.77,
        3: largura * 0.69,
        4: altura * 0.9,
        type: "operator",
        val: "+",
    },
    {
        1: largura * 0.73,
        2: altura * 0.77,
        3: largura * 0.91,
        4: altura * 0.9,
        type: "calculate",
        val: "=",
    },
];

buttons_coord.forEach((e) => { //Para cada coordenada, cria a area dos botões
    var button_coord =
        "" + e["1"] + "," + e["2"] + "," + e["3"] + "," + e["4"] + ""; //Junção das coordenadas
    var Area = document.createElement("area"); //Cria elemento area

    //Cria os atributos do elemento area
    var Forma = document.createAttribute("shape");
    Forma.value = "rect";
    var Cord = document.createAttribute("coords");
    Cord.value = button_coord;
    var Classe = document.createAttribute("class");
    Classe.value = "map__item";
    var Value = document.createAttribute("data-value");
    Value.value = e["val"];
    var Type = document.createAttribute("data-type");
    Type.value = e["type"];

    //Atribuição dos atributos
    Area.setAttributeNode(Forma);
    Area.setAttributeNode(Cord);
    Area.setAttributeNode(Classe);
    Area.setAttributeNode(Type);
    Area.setAttributeNode(Value);

    document.getElementById("Map").appendChild(Area); //Adição do elemento area ao elemento Mapa
});

//Observa clique nos botões da calculadora
const buttons_calculator = document.querySelectorAll(".map__item");
buttons_calculator.forEach((button) => {
    button.addEventListener("click", () => {
        const button_value = button.getAttribute("data-value");
        const button_type = button.getAttribute("data-type");
        if (button_type === "calculate") {
            calcule()
        } else {
            if (button_type === 'operator') {
                if (!has_operation) {
                    calculation += button_value
                    result_area.innerHTML += button_value
                }
                has_operation = true
            }
            else {
                calculation += button_value
                result_area.innerHTML += button_value;
            }
        }
    });
});

//Observa clique no botão limpar
clear_button.addEventListener("click", () => {
    clear()
});

//--- Funções

function clear() {
    result_area.innerHTML = "";
    calculation = "";
    has_operation = false
}

function calcule() {
    let expression = new String(calculation);
    let final_result = 0
    if (expression.includes('+')) {
        var numbers = new String(expression.split('+'))
        n1 = numbers.substring(0, numbers.indexOf(','));
        n2 = numbers.substring(numbers.indexOf(',') + 1, numbers.length)
        final_result = (parseFloat(n1) + parseFloat(n2)).toFixed(2);
    } else if (expression.includes('-')) {
        var numbers = new String(expression.split('-'))
        n1 = numbers.substring(0, numbers.indexOf(','));
        n2 = numbers.substring(numbers.indexOf(',') + 1, numbers.length)
        final_result = (parseFloat(n1) - parseFloat(n2)).toFixed(2);
    } else if (expression.includes('*')) {
        var numbers = new String(expression.split('*'))
        n1 = numbers.substring(0, numbers.indexOf(','));
        n2 = numbers.substring(numbers.indexOf(',') + 1, numbers.length)
        final_result = (parseFloat(n1) * parseFloat(n2)).toFixed(2);

    } else if (expression.includes('/')) {
        var numbers = new String(expression.split('/'))
        n1 = numbers.substring(0, numbers.indexOf(','));
        n2 = numbers.substring(numbers.indexOf(',') + 1, numbers.length)
        final_result = (parseFloat(n1) / parseFloat(n2)).toFixed(2);
    }
    result_area.innerHTML = final_result;
    has_operation = false
    calculation = final_result
}