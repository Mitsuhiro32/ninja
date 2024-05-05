class Ninja {
    constructor(nombre, salud=0, velocidad=3, fuerza=3) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }
    sayName() {
        console.log(`Nombre: ${this.nombre}`);
    }
    showStats() {
        console.log(`Nombre: ${this.nombre}, Salud: ${this.salud}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}`);
    }
    drinkSake() {
        this.salud += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

console.log("--------------------------------------------------");

class Sensei extends Ninja {
    constructor(nombre, salud=200, velocidad=10, fuerza=10, sabiduria=10) {
        super(nombre, salud, velocidad, fuerza);
        this.sabiduria = sabiduria;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
