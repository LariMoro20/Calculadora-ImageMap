//Resolução da imagem
var largura = document.getElementById("calculator").width;
var altura = document.getElementById("calculator").height;
let result = 0;
let num1 = 0;
let num2 = 0;
//Definição das coordenadas utilizando as devidas proporções
//larg = 500(x)
//alt = 676(y)
//largcord = x*100/larg
//altcord = y*100/alt

function cal(...num) {
    return num.join("");
}
const action_coord = [
    {
        1: largura * 0.73,
        2: altura * 0.2875,
        3: largura * 0.91,
        4: altura * 0.424,
        val: "/",
    },
    {
        1: largura * 0.73,
        2: altura * 0.452,
        3: largura * 0.91,
        4: altura * 0.58,
        val: "x",
    },
    {
        1: largura * 0.73,
        2: altura * 0.61,
        3: largura * 0.98,
        4: altura * 0.74,
        val: "-",
    },
    {
        1: largura * 0.3,
        2: altura * 0.77,
        3: largura * 0.48,
        4: altura * 0.9,
        val: ".",
    },
    {
        1: largura * 0.51,
        2: altura * 0.77,
        3: largura * 0.69,
        4: altura * 0.9,
        val: "+",
    },
    {
        1: largura * 0.73,
        2: altura * 0.77,
        3: largura * 0.91,
        4: altura * 0.9,
        val: "=",
    },
];

const numbers_coord = [
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
        val: "x",
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
        type: "operator",
        val: "=",
    },
];

//Para cada coordenada, cria a area dos botões
numbers_coord.forEach((e) => {
    //Junção das coordenadas
    var number_coord =
        "" + e["1"] + "," + e["2"] + "," + e["3"] + "," + e["4"] + "";
    //Cria elemento area
    var Area = document.createElement("area");

    //Cria os atributos do elemento area
    var Forma = document.createAttribute("shape");
    Forma.value = "rect";
    var Cord = document.createAttribute("coords");
    Cord.value = number_coord;
    var Classe = document.createAttribute("class");
    Classe.value = "mapa__item";
    var Href = document.createAttribute("href");
    Href.value = "";
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

    //Adição do elemento area ao elemento Mapa
    document.getElementById("Mapa").appendChild(Area);
});

//Observa interação nos botões da calculadora
const buttons_calculator = document.querySelectorAll(".mapa__item");
buttons_calculator.forEach((button) => {
    button.addEventListener("click", () => {
        const area_result = document.getElementById(`result`);
        const button_value = button.getAttribute("data-value");
        if (button_value == "=") {
            area_result.innerHTML = eval(area_result.textContent);
        } else {
            area_result.innerHTML += button_value == "x" ? "*" : button_value;
        }
    });
});

const button_clear = document.getElementById(`BtnClear`);
button_clear.addEventListener("click", () => {
    const area_result = document.getElementById(`result`);
    area_result.innerHTML = "";
});
