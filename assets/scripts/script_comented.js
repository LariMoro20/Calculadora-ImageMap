// Definições
let calculation = '' // Conta final
let has_operation = false // Controle de operação
const result_area = document.getElementById(`ResultArea`) // Area de exibição dos calculos
const clear_button = document.getElementById(`ClearBtn`) // Botão de limpar exibição
var calculator_width = document.getElementById('calculator').width // Largura da imagem da calculadora
var calculator_height = document.getElementById('calculator').height // Altura da imagem da calculadora
let calculator_map = document.getElementById('Map') // Elemento de mapeamento da imagem da calculadora

/*Mapeamento dos botões da calculadora
    Definição das coordenadas utilizando regra de três: 
    coord_x = image_width*100/calculator_width
    coord_y = image_height*100/calculator_height
*/
const buttons_coord = [
  {
    1: calculator_width * 0.086,
    2: calculator_height * 0.2875,
    3: calculator_width * 0.264,
    4: calculator_height * 0.424,
    type: 'number',
    val: 1
  },
  {
    1: calculator_width * 0.302,
    2: calculator_height * 0.2875,
    3: calculator_width * 0.48,
    4: calculator_height * 0.424,
    type: 'number',
    val: 2
  },
  {
    1: calculator_width * 0.52,
    2: calculator_height * 0.2875,
    3: calculator_width * 0.69,
    4: calculator_height * 0.424,
    type: 'number',
    val: 3
  },

  {
    1: calculator_width * 0.078,
    2: calculator_height * 0.452,
    3: calculator_width * 0.25,
    4: calculator_height * 0.58,
    type: 'number',
    val: 4
  },
  {
    1: calculator_width * 0.3,
    2: calculator_height * 0.452,
    3: calculator_width * 0.48,
    4: calculator_height * 0.58,
    type: 'number',
    val: 5
  },
  {
    1: calculator_width * 0.51,
    2: calculator_height * 0.452,
    3: calculator_width * 0.69,
    4: calculator_height * 0.58,
    type: 'number',
    val: 6
  },

  {
    1: calculator_width * 0.073,
    2: calculator_height * 0.61,
    3: calculator_width * 0.26,
    4: calculator_height * 0.74,
    type: 'number',
    val: 7
  },
  {
    1: calculator_width * 0.3,
    2: calculator_height * 0.61,
    3: calculator_width * 0.48,
    4: calculator_height * 0.74,
    type: 'number',
    val: 8
  },
  {
    1: calculator_width * 0.52,
    2: calculator_height * 0.61,
    3: calculator_width * 0.69,
    4: calculator_height * 0.74,
    type: 'number',
    val: 9
  },

  {
    1: calculator_width * 0.073,
    2: calculator_height * 0.77,
    3: calculator_width * 0.26,
    4: calculator_height * 0.9,
    type: 'number',
    val: 0
  },
  {
    1: calculator_width * 0.73,
    2: calculator_height * 0.2875,
    3: calculator_width * 0.91,
    4: calculator_height * 0.424,
    type: 'operator',
    val: '/'
  },
  {
    1: calculator_width * 0.73,
    2: calculator_height * 0.452,
    3: calculator_width * 0.91,
    4: calculator_height * 0.58,
    type: 'operator',
    val: '*'
  },
  {
    1: calculator_width * 0.73,
    2: calculator_height * 0.61,
    3: calculator_width * 0.98,
    4: calculator_height * 0.74,
    type: 'operator',
    val: '-'
  },
  {
    1: calculator_width * 0.3,
    2: calculator_height * 0.77,
    3: calculator_width * 0.48,
    4: calculator_height * 0.9,
    type: 'number',
    val: '.'
  },
  {
    1: calculator_width * 0.51,
    2: calculator_height * 0.77,
    3: calculator_width * 0.69,
    4: calculator_height * 0.9,
    type: 'operator',
    val: '+'
  },
  {
    1: calculator_width * 0.73,
    2: calculator_height * 0.77,
    3: calculator_width * 0.91,
    4: calculator_height * 0.9,
    type: 'calculate',
    val: '='
  }
]

//Para cada coordenada, cria os botões
buttons_coord.forEach(e => {
  var button_coord =
    '' + e['1'] + ',' + e['2'] + ',' + e['3'] + ',' + e['4'] + '' //Junção das coordenadas
  var Area = document.createElement('area') //Cria elemento area, necessário para definir a area dentro do map

  //Cria os atributos do elemento area
  var Shape = document.createAttribute('shape')
  Shape.value = 'rect'
  var Cords = document.createAttribute('coords')
  Cords.value = button_coord
  var Class = document.createAttribute('class')
  Class.value = 'map__item'
  var Value = document.createAttribute('data-value')
  Value.value = e['val']
  var Type = document.createAttribute('data-type')
  Type.value = e['type']

  //Atribuição dos atributos
  Area.setAttributeNode(Shape)
  Area.setAttributeNode(Cords)
  Area.setAttributeNode(Class)
  Area.setAttributeNode(Value)
  Area.setAttributeNode(Type)

  calculator_map.appendChild(Area) //Adição de elemento area ao elemento de mapa
})

const buttons_calculator = document.querySelectorAll('.map__item') // Botões da calculadora
//Observa clique nos botões da calculadora
buttons_calculator.forEach(button => {
  button.addEventListener('click', () => {
    const button_value = button.getAttribute('data-value') // Pega valor do botão
    const button_type = button.getAttribute('data-type') // Pega tipo do botão
    if (button_type === 'calculate') { // Se botão clicado for calculate
      calcule() // Chama função de calculo
    } else {
      if (button_type === 'operator') { // Se botão clicado for operador
        if (!has_operation) { // Se não tem operação, permite selecionar. 
          calculation += button_value  // Adiciona operador á conta
          result_area.innerHTML += button_value // Exibe operador no display
        }
        has_operation = true // Operação selecionada, bloqueia nova seleção
      } else { // Se botão clicado for numerico
        calculation += button_value // Adiciona numero á conta
        result_area.innerHTML += button_value // Exibe novo numero junto no display
      }
    }
  })
})

//Observa clique no botão limpar
clear_button.addEventListener('click', () => {
  clear() // Chama função de limpar
})

//--- Funções
function clear() {
  result_area.innerHTML = '' // Zera display
  calculation = '' // Remove calculo
  has_operation = false // Libera operação
}

function calcule() {
  let expression = new String(calculation) // Define a expressão
  let final_result = 0 // Resultado final
  if (expression.includes('+')) { // Verifica se operação é soma
    var numbers = new String(expression.split('+'))
    n1 = numbers.substring(0, numbers.indexOf(','))
    n2 = numbers.substring(numbers.indexOf(',') + 1, numbers.length)
    final_result = (parseFloat(n1) + parseFloat(n2))
  } else if (expression.includes('-')) { // Verifica se operação é subtração
    var numbers = new String(expression.split('-'))
    n1 = numbers.substring(0, numbers.indexOf(','))
    n2 = numbers.substring(numbers.indexOf(',') + 1, numbers.length)
    final_result = (parseFloat(n1) - parseFloat(n2))
  } else if (expression.includes('*')) { // Verifica se operação é multiplicação
    var numbers = new String(expression.split('*'))
    n1 = numbers.substring(0, numbers.indexOf(','))
    n2 = numbers.substring(numbers.indexOf(',') + 1, numbers.length)
    final_result = (parseFloat(n1) * parseFloat(n2))
  } else if (expression.includes('/')) { // Verifica se operação é divisão
    var numbers = new String(expression.split('/'))
    n1 = numbers.substring(0, numbers.indexOf(','))
    n2 = numbers.substring(numbers.indexOf(',') + 1, numbers.length)
    final_result = (parseFloat(n1) / parseFloat(n2))
  }
  result_area.innerHTML = final_result // Mostra resultado no display
  has_operation = false // Libera operação
  calculation = final_result // Inicia proxima conta com o valor do resultado
}
