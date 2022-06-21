let calculation = "";
let has_operation = false;
let result_area = document.getElementById(`ResultArea`);
let clear_button = document.getElementById(`ClearBtn`);
let calculator_width = document.getElementById("calculator").width;
let calculator_height = document.getElementById("calculator").height;
let calculator_map = document.getElementById("Map");

const buttons_coord = [
    {
        1: calculator_width * 0.086,
        2: calculator_height * 0.2875,
        3: calculator_width * 0.264,
        4: calculator_height * 0.424,
        type: "number",
        val: 1,
    },
    {
        1: calculator_width * 0.302,
        2: calculator_height * 0.2875,
        3: calculator_width * 0.48,
        4: calculator_height * 0.424,
        type: "number",
        val: 2,
    },
    {
        1: calculator_width * 0.52,
        2: calculator_height * 0.2875,
        3: calculator_width * 0.69,
        4: calculator_height * 0.424,
        type: "number",
        val: 3,
    },

    {
        1: calculator_width * 0.078,
        2: calculator_height * 0.452,
        3: calculator_width * 0.25,
        4: calculator_height * 0.58,
        type: "number",
        val: 4,
    },
    {
        1: calculator_width * 0.3,
        2: calculator_height * 0.452,
        3: calculator_width * 0.48,
        4: calculator_height * 0.58,
        type: "number",
        val: 5,
    },
    {
        1: calculator_width * 0.51,
        2: calculator_height * 0.452,
        3: calculator_width * 0.69,
        4: calculator_height * 0.58,
        type: "number",
        val: 6,
    },

    {
        1: calculator_width * 0.073,
        2: calculator_height * 0.61,
        3: calculator_width * 0.26,
        4: calculator_height * 0.74,
        type: "number",
        val: 7,
    },
    {
        1: calculator_width * 0.3,
        2: calculator_height * 0.61,
        3: calculator_width * 0.48,
        4: calculator_height * 0.74,
        type: "number",
        val: 8,
    },
    {
        1: calculator_width * 0.52,
        2: calculator_height * 0.61,
        3: calculator_width * 0.69,
        4: calculator_height * 0.74,
        type: "number",
        val: 9,
    },

    {
        1: calculator_width * 0.073,
        2: calculator_height * 0.77,
        3: calculator_width * 0.26,
        4: calculator_height * 0.9,
        type: "number",
        val: 0,
    },
    {
        1: calculator_width * 0.73,
        2: calculator_height * 0.2875,
        3: calculator_width * 0.91,
        4: calculator_height * 0.424,
        type: "operator",
        val: "/",
    },
    {
        1: calculator_width * 0.73,
        2: calculator_height * 0.452,
        3: calculator_width * 0.91,
        4: calculator_height * 0.58,
        type: "operator",
        val: "*",
    },
    {
        1: calculator_width * 0.73,
        2: calculator_height * 0.61,
        3: calculator_width * 0.98,
        4: calculator_height * 0.74,
        type: "operator",
        val: "-",
    },
    {
        1: calculator_width * 0.3,
        2: calculator_height * 0.77,
        3: calculator_width * 0.48,
        4: calculator_height * 0.9,
        type: "number",
        val: ".",
    },
    {
        1: calculator_width * 0.51,
        2: calculator_height * 0.77,
        3: calculator_width * 0.69,
        4: calculator_height * 0.9,
        type: "operator",
        val: "+",
    },
    {
        1: calculator_width * 0.73,
        2: calculator_height * 0.77,
        3: calculator_width * 0.91,
        4: calculator_height * 0.9,
        type: "calculate",
        val: "=",
    },
];

buttons_coord.forEach((e) => {
    let button_coord = "" + e["1"] + "," + e["2"] + "," + e["3"] + "," + e["4"] + '';
    let Area = document.createElement("area");
    let Shape = document.createAttribute("shape");
    Shape.value = "rect";
    let Cords = document.createAttribute("coords");
    Cords.value = button_coord;
    let Class = document.createAttribute("class");
    Class.value = "map__item";
    let Value = document.createAttribute("data-value");
    Value.value = e["val"];
    let Type = document.createAttribute("data-type");
    Type.value = e["type"];
    Area.setAttributeNode(Shape);
    Area.setAttributeNode(Cords);
    Area.setAttributeNode(Class);
    Area.setAttributeNode(Value);
    Area.setAttributeNode(Type);
    calculator_map.appendChild(Area);
});

let buttons_calculator = document.querySelectorAll(".map__item");
buttons_calculator.forEach((button) => {
    button.addEventListener("click", () => {
        const button_value = button.getAttribute("data-value");
        const button_type = button.getAttribute("data-type");
        if (button_type === "calculate") {
            calcule();
        } else {
            if (button_type === "operator") {
                if (!has_operation) {
                    calculation += button_value;
                    result_area.innerHTML += button_value;
                }
                has_operation = true;
            } else {
                calculation += button_value;
                result_area.innerHTML += button_value;
            }
        }
    });
});

clear_button.addEventListener("click", () => {
    clear();
});

function clear() {
    result_area.innerHTML = "";
    calculation = "";
    has_operation = false;
}

function calcule() {
    let expression = new String(calculation);
    let final_result = 0;
    if (expression.includes("+")) {
        let numbers = new String(expression.split("+"));
        n1 = numbers.substring(0, numbers.indexOf(","));
        n2 = numbers.substring(numbers.indexOf(",") + 1, numbers.length);
        final_result = (parseFloat(n1) + parseFloat(n2));
    } else if (expression.includes("-")) {
        let numbers = new String(expression.split("-"));
        n1 = numbers.substring(0, numbers.indexOf(","));
        n2 = numbers.substring(numbers.indexOf(",") + 1, numbers.length);
        final_result = (parseFloat(n1) - parseFloat(n2));
    } else if (expression.includes("*")) {
        let numbers = new String(expression.split("*"));
        n1 = numbers.substring(0, numbers.indexOf(","));
        n2 = numbers.substring(numbers.indexOf(",") + 1, numbers.length);
        final_result = (parseFloat(n1) * parseFloat(n2));
    } else if (expression.includes("/")) {
        let numbers = new String(expression.split("/"));
        n1 = numbers.substring(0, numbers.indexOf(","));
        n2 = numbers.substring(numbers.indexOf(",") + 1, numbers.length);
        final_result = (parseFloat(n1) / parseFloat(n2));
    }
    result_area.innerHTML = final_result;
    has_operation = false;
    calculation = final_result;
}
