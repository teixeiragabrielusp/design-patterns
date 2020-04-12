const fruits = ['Apple', 'Oranges', 'Kiwi', 'Strawberries'];

function* fruitShop() {
    for(const fruit of fruits) {
        yield fruit;
    }
}

const getFruits = fruitShop();

function makeSalad() {
    let fruitBasket = getFruits.next();

    if(!fruitBasket.done) {
        console.log(fruitBasket.value); //Do something with the value from the array
        makeSalad();
    } else {
        console.log('We are out of fruits!');
    }
}

makeSalad();