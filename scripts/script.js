//Aquisição da resolução da imagem
var largura = document.getElementById("calculator").width;
var altura = document.getElementById("calculator").height;

//Definição das coordenadas utilizando as devidas proporções
//larg = 500(x)
//alt = 676(y)
//largcord = x*100/larg
//altcord = y*100/alt
const cord = [
    {
        1: largura * 0.086,
        2: altura * 0.2875,
        3: largura * 0.264,
        4: altura * 0.424,
        val: 1,
    },
    {
        1: largura * 0.302,
        2: altura * 0.2875,
        3: largura * 0.48,
        4: altura * 0.424,
        val: 2,
    },
    {
        1: largura * 0.52,
        2: altura * 0.2875,
        3: largura * 0.69,
        4: altura * 0.424,
        val: 3,
    },
    {
        1: largura * 0.73,
        2: altura * 0.2875,
        3: largura * 0.91,
        4: altura * 0.424,
        val: "/",
    },
    {
        1: largura * 0.078,
        2: altura * 0.452,
        3: largura * 0.25,
        4: altura * 0.58,
        val: 4,
    },
    {
        1: largura * 0.3,
        2: altura * 0.452,
        3: largura * 0.48,
        4: altura * 0.58,
        val: 5,
    },
    {
        1: largura * 0.51,
        2: altura * 0.452,
        3: largura * 0.69,
        4: altura * 0.58,
        val: 6,
    },
    {
        1: largura * 0.73,
        2: altura * 0.452,
        3: largura * 0.91,
        4: altura * 0.58,
        val: "x",
    },
    {
        1: largura * 0.073,
        2: altura * 0.61,
        3: largura * 0.26,
        4: altura * 0.74,
        val: 7,
    },
    {
        1: largura * 0.3,
        2: altura * 0.61,
        3: largura * 0.48,
        4: altura * 0.74,
        val: 8,
    },
    {
        1: largura * 0.52,
        2: altura * 0.61,
        3: largura * 0.69,
        4: altura * 0.74,
        val: 9,
    },
    {
        1: largura * 0.73,
        2: altura * 0.61,
        3: largura * 0.98,
        4: altura * 0.74,
        val: "-",
    },
    {
        1: largura * 0.073,
        2: altura * 0.77,
        3: largura * 0.26,
        4: altura * 0.9,
        val: 0,
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

cord.forEach((e) => {
    //Junção das coordenadas
    var cordg =
        "" + e["1"] + "," + e["2"] + "," + e["3"] + "," + e["4"] + "";
    //Criação do elemento area
    var Area = document.createElement("area");

    //Criação dos atributos do elemento area
    var Forma = document.createAttribute("shape");
    Forma.value = "rect";
    var Cord = document.createAttribute("coords");
    Cord.value = cordg;
    var Classe = document.createAttribute("class");
    Classe.value = "mapa__item";
    var Href = document.createAttribute("href");
    Href.value = "#";
    var Value = document.createAttribute("data-value");
    Value.value = e["val"];
    //Atribuição dos atributos
    Area.setAttributeNode(Forma);
    Area.setAttributeNode(Cord);
    Area.setAttributeNode(Classe);
    Area.setAttributeNode(Href);
    Area.setAttributeNode(Value);
    //Adição do elemento area ao elemento Mapa
    document.getElementById("Mapa").appendChild(Area);
});

const mapa__item = document.querySelectorAll(".mapa__item");
mapa__item.forEach((item) => {
    item.addEventListener("click", () => {
        const item_value = item.getAttribute("data-value");
        const item_result = document.getElementById(`result`);
        item_result.innerHTML += item_value;
    });
});