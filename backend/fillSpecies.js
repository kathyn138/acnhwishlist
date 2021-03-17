const db = require("./db");
const express = require("express");
const router = new express.Router();

let alligator = ['Alfonso',
  'Alli', 'Boots', 'Del', 'Drago', 'Gayle',
  'Sly'];

let anteater = ['Anabelle', 'Annalisa', 'Antonio', 'Cyrano', 'Olaf',
  'Pango', 'Snooty'];

let bear = ['Beardo', 'Charlise', 'Chow', 'Curt', 'Grizzly', 'Groucho',
  'Ike', 'Klaus', 'Megan', 'Nate', 'Paula', 'Pinky',
  'Teddy', 'Tutu', 'Ursala'];

let bird = [
  'Admiral', 'Anchovy', 'Jacob', 'Jacques', 'Jay', 'Jitters',
  'Lucha', 'Midge', 'Peck', 'Piper', 'Robin', 'Sparro',
  'Twiggy'];

let bull = [
  'Angus', 'Coach', 'Rodeo', 'Stu', 'T-Bone', 'Vic',
];

let cat = [
  'Ankha', 'Bob', 'Felicity', 'Kabuki', 'Katt', 'Kid Cat',
  'Kiki', 'Kitty', 'Lolly', 'Merry', 'Mitzi', 'Moe',
  'Monique', 'Olivia', 'Punchy', 'Purrl', 'Raymond', 'Rosie',
  'Rudy', 'Stinky', 'Tabby', 'Tangy', 'Tom'
];

let chicken = [
  'Ava', 'Becky', 'Benedict', 'Broffina', 'Egbert', 'Goose',
  'Ken', 'Knox', 'Plucky'
];

let cow = [
  'Naomi', 'Norma', 'Patty', 'Tipper'
];

let cub = [
  'Barold', 'Bluebear', 'Cheri', 'Chester', 'Judy',
  'June', 'Kody', 'Maple', 'Murphy', 'Olive', 'Pekoe',
  'Poncho', 'Pudge', 'Stitches', 'Tammy', 'Vladimir'
];

let deer = [
  'Bam', 'Beau', 'Bruce', 'Chelsea', 'Deirdre',
  'Diana', 'Erik', 'Fauna', 'Fuchsia', 'Lopez',
  'Zell'
];

let dog = [
  'Bea', 'Benjamin', 'Biskit', 'Bones', 'Butch',
  'Cherry', 'Cookie', 'Daisy', 'Goldie', 'Lucky',
  'Mac', 'Maddie', 'Marcel', 'Portia', 'Shep', 'Walker'
];

let duck = [
  'Bill', 'Deena', 'Derwin', 'Drake', 'Freckles',
  'Gloria', 'Joey', 'Ketchup', 'Maelle', 'Mallary', 'Miranda',
  'Molly', 'Pate', 'Pompom', 'Quillson', 'Scoot', 'Weber'
];

let eagle = [
  'Amelia', 'Apollo', 'Avery', 'Buzz', 'Celia', 'Amelia',
  'Apollo', 'Avery', 'Buzz', 'Celia'
];

let elephant = [
  'Axel', 'Big Top', 'Chai', 'Cyd', 'Dizzy', 'Ellie',
  'Eloise', 'Margie', 'Opal', 'Paolo', 'Tia', 'Tucker'
];

let frog = [
  'Camofrog', 'Cousteau', 'Croque', 'Diva', 'Drift', 'Frobert',
  'Gigi', 'Henry', 'Huck', 'Jambette', 'Jeremiah', 'Lily',
  'Prince', 'Puddles', 'Raddle', 'Ribbot', 'Tad', 'Wart Jr.'
];

let goat = [
  'Billy', 'Chevre', 'Gruff', 'Kidd', 'Nan', 'Pashmina',
  'Sherb', 'Velma'
];

let gorilla = [
  'Al', 'Boone', 'Boyd', 'Cesar', 'Hans', 'Louie',
  'Peewee', 'Rilla', 'Rocket', 'Violet'
];

let hamster = [
  'Apple', 'Clay', 'Flurry', 'Graham', 'Hamlet', 'Hamphrey',
  'Rodney', 'Solei'
];

let hippo = [
  'Bertha', 'Bitty', 'Bubbles', 'Harry', 'Rocco'
];

let horse = [
  'Annalise', 'Buck', 'Cleo', 'Clyde', 'Colton', 'Ed',
  'Elmer', 'Julian', 'Papi', 'Peaches', 'Reneigh', 'Roscoe',
  'Savannah', 'Victoria', 'Winnie'
];

let kangaroo = [
  'Astrid', 'Carrie', 'Kitt', 'Marcie', 'Mathilda', 'Rooney',
  'Sylvia', 'Walt'
];

let koala = [
  'Alice', 'Canberra', 'Eugene', 'Gonzo', 'Lyman', 'Melba',
  'Ozzie', 'Sydney', 'Yuka'
];

let lion = [
  'Bud', 'Elvis', 'Leopold', 'Lionel', 'Mott',
  'Rex', 'Rory'
];

let mouse = [
  'Anicotti', 'Bella', 'Bettina', 'Bree', 'Broccolo', 'Candi',
  'Chadder', 'Dora', 'Greta', 'Limberg', 'Moose', 'Penelope',
  'Rizzo', 'Rod', 'Samson'
];

let monkey = [
  'Deli', 'Elise', 'Flip', 'Monty', 'Nana', 'Shari',
  'Simon', 'Tammi'
];

let octopus = [
  'Marina', 'Octavian', 'Zucker',
];

let ostrich = [
  'Blanche', 'Cranston', 'Flora', 'Gladys', 'Julia', 'Phil',
  'Phoebe', 'Queenie', 'Sandy', 'Sprocket',
];

let penguin = [
  'Aurora', 'Boomer', 'Cube', 'Flo', 'Friga', 'Gwen',
  'Hopper', 'Iggly', 'Puck', 'Roald', 'Sprinkle', 'Tex',
  'Wade'
];

let pig = [
  'Agnes', 'Boris', 'Chops', 'Cobb', 'Curly', 'Gala',
  'Hugh', 'Kevin', 'Lucy', 'Maggie', 'Pancetti', 'Peggy',
  'Rasher', 'Spork', 'Truffles'
];

let rabbit = [
  'Bonbon', 'Bunnie', 'Carmen', 'Chrissy', 'Claude', 'Coco',
  'Cole', 'Doc', 'Dotty', 'Francine', 'Gabi', 'Gaston',
  'Genji', 'Hopkins', 'Mira', 'O\'Hare', 'Pippy', 'Ruby',
  'Snake', 'Tiffany', 'Toby'
];

let rhino = [
  'Hornsby', 'Merengue', 'Renee', 'Rhonda', 'Spike', 'Tank'
];

let sheep = [
  'Baabara', 'Cashmere', 'Curlos', 'Dom', 'Etoile', 'Eunice',
  'Frita', 'Muffy', 'Pietro', 'Stella', 'Timbra', 'Vesta',
  'Wendy', 'Willow'
];

let squirrel = [
  'Agent S', 'Blaire', 'Cally', 'Caroline', 'Filbert', 'Hazel',
  'Marshal', 'Mint', 'Nibbles', 'Peanut', 'Pecan', 'Poppy',
  'Ricky', 'Sally', 'Sheldon', 'Static', 'Sylvana', 'Tasha'
];

let tiger = [
  'Bangle', 'Bianca', 'Claudia', 'Leonardo', 'Rolf', 'Rowan',
  'Tybalt'
];

let wolf = [
  'Audie', 'Chief', 'Dobie', 'Fang', 'Freya', 'Kyle',
  'Lobo', 'Skye', 'Vivian', 'Whitney', 'Wolfgang'
];

let speciesType = [
  'Alligator', 'Anteater', 'Bear', 'Bird', 'Bull', 'Cat',
  'Chicken', 'Cow', 'Cub', 'Deer', 'Dog', 'Duck',
  'Eagle', 'Elephant', 'Frog', 'Goat', 'Gorilla', 'Hamster',
  'Hippo', 'Horse', 'Kangaroo', 'Koala', 'Lion', 'Mouse',
  'Monkey', 'Octopus', 'Ostrich', 'Penguin', 'Pig', 'Rabbit',
  'Rhino', 'Sheep', 'Squirrel', 'Tiger', 'Wolf'
];

let species = [
  alligator, anteater, bear, bird, bull, cat,
  chicken, cow, cub, deer, dog, duck,
  eagle, elephant, frog, goat, gorilla, hamster,
  hippo, horse, kangaroo, koala, lion, mouse,
  monkey, octopus, ostrich, penguin, pig, rabbit,
  rhino, sheep, squirrel, tiger, wolf
];

// route to update species of villagers in database
router.post("/db/update", async function (req, res, next) {
  for (let i = 0; i < species.length; i++) {
    for (let j = 0; j < species[i].length; j++) {
      let type = speciesType[i];
      let currVillager = species[i][j];

      console.log('name', species[i][j])
      try {
        await db.query(`
          UPDATE villagers SET species = $1 WHERE name = $2`, 
          [type, currVillager])
      } catch (err) {
        return next(err);
      }
    }
  }
}
)


module.exports = router;