// Task 1

var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (var items of dairy){
        console.log(items)
    }
}
logDairy()
// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (var prop of Object.keys(bird)) {
        console.log(prop+": "+bird[prop])
    }
}
//of is used to iterate over the object only
birdCan()



// Task 3
function animalCan() {
    for (var props in bird)
         console.log(props+": "+bird[props])
 }

animalCan();
