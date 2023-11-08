class Tama {
    constructor(name, colour, pattern){
        this.name = name;
        this.colour = colour;
        this.pattern = pattern;
    }
    info(){
        console.log(`This ${this.name} is ${this.colour} with cool ${this.pattern}!`)
    }
    eats(){
        console.log(`Make ure you look after your ${this.name} by feeding and playing with them.`)
    }
}

class Tamagotchi extends Tama{
    constructor(name, item, food, snack, location){
        super (name);
        this.item = item;
        this.food = food;
        this.snack = snack;
        this.location = location;
    }
    hobby(){
        console.log(`${this.name} is happy when they have their ${this.item} especially in the ${this.location}.`,);
    }
    meal (){
        console.log(`Time for food, ${this.name}'s favourite food is a ${this.food}, for a special treat ${this.name} loves a ${this.snack}.`,);
    }
}


const case1 = new Tama ('Tamagotchi', 'pink', 'polka dots');

case1.info();
case1.eats();

const momotchi = new Tamagotchi ('Momotchi', 'snorkel set', 'ham sandwich', 'peach', 'garden');
momotchi.hobby();
momotchi.meal();


const case2 = new Tama ('Tamagotchi', 'green', 'hearts');
case2.info();
case2.eats();

const kuchipatchi = new Tamagotchi ('Kuchipatchi', 'heart sunglasses', 'jumbo steak', 'mango pudding', 'hot springs');
kuchipatchi.hobby();
kuchipatchi.meal();


const case3 = new Tama ('Tamagotchi', 'blue', 'flowers');
case3.info();
case3.eats();

const gozarutchi = new Tamagotchi ('Gozarutchi', 'paraglider', 'sushi', 'grape juice', 'Japan');
gozarutchi.hobby();
gozarutchi.meal();