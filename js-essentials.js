// 0 - Bajar repo, hacer hola mundo console.log
console.log("Hola mundo");

// 2 - Funciones:
// add(firstOperator, secondOperator),
function add(firstOperator, secondOperator){
    suma = firstOperator + secondOperator
    return suma;
}
console.log(add(3,4));
// subtract(firstOperator, secondOperator),
function subtract(firstOperator,secondOperator){
    resta = firstOperator - secondOperator
    return resta;
}
console.log(subtract(3,2))
// divide(firstOperator, secondOperator),
function divide(firstOperator, secondOperator){
    division = firstOperator / secondOperator
    return division;
}
console.log(divide(4,2));
// multiply(firstOperator, secondOperator)
function multiply(firstOperator, secondOperator){
    multiplicacion = firstOperator * secondOperator
    return multiplicacion;
}
console.log(multiply(4,2));

// 3 - Funcion
// dress(temperature, isRaining)
// si llueve, llevar paraguas☂️. si la temperatura
// es menor a 10 ir en auto🚗, si es mayor a 30 ir de short🩳.
// si la temperatura es 30 usar lentes 🕶
function dress(temperatura, isRaining) {
    if (isRaining) {
        console.log("llevar paraguas");
    }

    if (temperatura < 10) {
        console.log("ir en auto");
    } else if (temperatura > 30) {
        console.log("ir de short");
    } else if (temperatura === 30) {
        console.log("usar lentes");
    }
}

dress(30, true); // Esto imprimirá "llevar paraguas☂️"

// 4 - Funcion
// calculate(operation, firstOperator, secondOperator)
function calculate(operation, firstOperator, secondOperator){
    switch (operation){
        case  "+":
            console.log("resultado: ", firstOperator + secondOperator)
            break;
        case  "-":
            console.log("resultado: ", firstOperator - secondOperator)
            break;
        case  "*":
            console.log("resultado: ", firstOperator * secondOperator)
            break;
        case  "/":
            console.log("resultado: ", firstOperator / secondOperator)
            break;
    }
}
calculate("+", 3, 4);


// 5 - Funcion
// eating(name, foods['🍔','🍟','🍗',])
function eating (name, foods){
    
}

// 6 - Funcion
// finalCountDown(count)

// 7 - Funcion
// getGrade(score)
// It should return the following grade according the score value.
// 0-40 => D
// 41-60 => R
// 61-74 => B
// 75-84 => BMB
// 85-96 => MB
// 97-100 => S

// 8 - Funcion
// fillCart(person, articlesCollection)
// cartArticlesCollection: [{article: '👟', amount: 1, price: 25}...])
// person: {name: 'Pepe', cart: []}
// it should modify person's cart in order to add the the new collection of articles

// 9 - Funcion
// countBanana(inventory:['🥑','🍌','🥭', '🍌']})

// 10 - Function
// getTotal(inventory: [{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}])
// it should return the total. for the example data 👆 it should be: 35. (15x1 + 10x2)
