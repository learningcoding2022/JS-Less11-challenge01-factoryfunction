const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
    const pet = {
        name: name,
        species: species,
        isTired: 5, 
        sleep: function () {
            console.log(`${this.name} needs a nap.`);
            this.isTired = 1;
        },
        play: function () {
            if (this.isTired === 10) {
            console.log("Too tired to play.");
            this.sleep();   
            } else {
            console.log(`Yay! ${this.name} loves to play!`);
            this.isTired += 1;
            }
        }
    };

    return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

console.log(sora, clover, baxter, cleo, francine);

clover.sleep();
baxter.play();

console.log(clover, baxter);

/*change the value of the isTired property to 8 for Clover and 9 for Francine*/
clover.isTired = 8;
francine.isTired = 9;

/*Create an array called allPets that includes all pet objects as elements*/
const allPets = [
    sora,
    clover,
    baxter,
    cleo,
    francine
];

/*log out allPets array to verify all five objects are showing up as array elements*/
console.log(allPets);

/*Create a function called showPets. Use petArray as an argument*/
const showPets = function (petArray) {
    /*empty list*/
    pets.innerHTML = "";

    for (let pet of petArray) {
    let status = "ready to play!";
    if (pet.isTired >= 7) {
        status = "sleeping.";
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
    pets.append(li);
    }
};

/*Add click event*/
statusButton.addEventListener("click", function () {
    showPets(allPets);
}
);
