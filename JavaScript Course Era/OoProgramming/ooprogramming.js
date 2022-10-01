// Task 1: Code a Person class

class Person{
    Person(name, age, energy) {
        this.name = "Tom"
        this.age = 20
        this.energy=100
    }
    sleep(energy) {
        energy+=10
        
    }

    doSomethingFun(energy) {
        energy -= 10;
        
    }
}

// Task 2: Code a Worker class

class Worker extends Person{
    constructor(name,age,energy,xp=0, hourlyWage=10) {
        super(name, age, energy)
        this.xp = xp;
        this.hourlyWage=hourlyWage
    }
    goToWork(xp) {
        xp+=10
        
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    var intern = new Worker('Bob', 21, 110, 0, 10)
    intern.goToWork()
    return intern

}

// Task 4: Code a manager object, methods
function manager() {
    var manager = new Worker('Alice', 30, 120, 100, 30)
    manager.doSomethingFun()
    return manager;
    
}