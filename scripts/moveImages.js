const fs = require('fs');

let crankyVillagers = [
  'Admiral', 'Angus', 'Apollo', 'Avery', 'Boris', 'Boyd', 'Bruce',
  'Butch', 'Buzz', 'Camofrog', 'Cesar', 'Chief', 'Chow',
  'Croque', 'Curt', 'Cyd', 'Cyrano', 'Del', 'Dobie',
  'Elvis', 'Fang', 'Frank', 'Gaston', 'Gonzo',
  'Grizzly', 'Groucho', 'Gruff', 'Hamphrey', 'Harry', 'Hopper', 'Ike',
  'Kabuki', 'Knox', 'Limberg', 'Lobo', 'Monty', 'Murphy',
  'Octavian', 'Peewee', 'Rasher', 'Ricky', 'Rizzo', 'Rocco',
  'Rolf', 'Rooney', 'Roscoe', 'Rowan', 'Spike', 'Static', 'T-Bone',
  'Tom', 'Vic', 'Vladimir', 'Walt', 'Wart Jr.',
  'Wolfgang'
];

let jockVillagers = [
  'Antonio', 'Axel', 'Bam', 'Biff',
  'Bill', 'Billy', 'Boone', 'Boots', 'Buck', 'Bud',
  'Coach', 'Cobb', 'Cousteau', 'Curly', 'Dom', 'Drift', 'Flip',
  'Frobert', 'Genji', 'Goose', 'Hamlet',
  'Iggly', 'Jay', 'Jitters',
  'Kevin', 'Kid Cat', 'Kody', 'Leonardo', 'Louie', 'Lyman',
  'Mac', 'Moose', 'Mott', 'Peck', 'Pierce',
  'Poncho', 'Ribbot', 'Roald',
  'Rod', 'Rory', 'Rowan', 'Rudy', 'Samson', 'Scoot', 'Sheldon',
  'Sly', 'Snake', 'Sparro', 'Sprocket', 'Sterling', 'Stinky',
  'Tad', 'Tank', 'Tarou', 'Teddy', 'Tybalt'
];

let lazyVillagers = [
  'Aisle', 'Al', 'Alfonso', 'Anchovy', 'Barold', 'Beau', 'Benedict',
  'Benjamin', 'Big Top', 'Biskit', 'Bob', 'Bones', 'Boomer', 'Bow',
  'Broccolo', 'Chester', 'Chico ', 'Claude', 'Clay', 'Clyde', 'Cole',
  'Cranston', 'Cube', 'Deli', 'Derwin', 'Dizzy', 'Dobie', 'Doc',
  'Dozer', 'Drago', 'Drake', 'Egbert', 'Elmer', 'Erik', 'Filbert',
  'Felyne', 'Hopkins', 'Hornsby', 'Hugh', 'Jacob', 'Jeremiah', 'Joey',
  'Lucky', 'Marcel', 'Marty', 'Moe', 'Nate', 'Nobuo', 'Otis',
  'Ozzie', 'Paolo', 'Papi', 'Pironkon', 'Prince', 'Puck', 'Pudge',
  'Punchy', 'Raddle', 'Rex', 'Rodeo', 'Rollo', 'Sherb', 'Simon',
  'Spork', 'Stitches', 'Stu', 'Sven', 'Tucker', 'Wade', 'Walker',
  'Weber', 'Yodel', 'Zucker'
];

let normalVillagers = [
  'Alice', 'Annalisa', 'Aurora', 'Ava', 'Bea', 'Bertha', 'Bessie',
  'Bettina', 'Betty', 'Cally', 'Caroline', 'Carrie', 'Carrot', 'Celia',
  'Chelsea', 'Chevre', 'Clara', 'Coco', 'Daisy', 'Deena', 'Dora',
  'Ellie', 'Emerald', 'Etoile', 'Eunice', 'Faith', 'Fauna', 'Flurry',
  'Filly', 'Gala', 'Gayle', 'Goldie', 'Gladys', 'Jambette', 'June',
  'Kiki', 'Kitt', 'Lily', 'Liz', 'Lolly', 'Lucy', 'Maggie',
  'Maple', 'Marcie', 'Margie', 'Marina', 'Medli', 'Megan', 'Melba',
  'Merengue', 'Midge', 'Mitzi', 'Molly', 'Nan', 'Nana', 'Norma',
  'Nosegay', 'Olive', 'Patricia', 'Peaches', 'Pekoe', 'Poppy', 'Rhonda',
  'Sally', 'Sandy', 'Savannah', 'Skye', 'Stella', 'Sunny', 'Sydney',
  'Sylvana', 'Tia', 'Vesta', 'Viché', 'Zoe'
];

let peppyVillagers = [
  'Agent S', 'Anabelle', 'Anicotti', 'Apple', 'Audie', 'Bangle', 'Bella',
  'Belle', 'Bianca', 'Bluebear', 'Bonbon', 'Bubbles', 'Bunnie', 'Candi',
  'Carmen', 'Cece', 'Chai', 'Cheri', 'Chrissy', 'Cookie', 'Dotty',
  'Epona', 'Felicity', 'Flora', 'Flossie', 'Freckles', 'Gabi',
  'Huggy', 'Ketchup', 'Koharu', 'Leigh', 'Lulu', 'Maddie', 'Marcy',
  'Megumi', 'Meow', 'Merry', 'Nibbles', 'Pango', 'Pate', 'Patty',
  'Peanut', 'Peggy', 'Penelope', 'Penny', 'Pinky', 'Piper', 'Pippy',
  'Pompom', 'Puddles', 'Rilla', 'Rio', 'Rosie', 'Ruby', 'Sprinkle',
  'Tabby', 'Tammi', 'Tangy', 'Truffles', 'Tutu', 'Twiggy', 'Victoria',
  'Wendy', 'Winnie'
];

let smugVillagers = [
  'Beardo', 'Chadder', 'Chops', 'Colton', 'Curlos', 'Ed', 'Eugene',
  'Graham', 'Hans', 'Henry', 'Hippeux', 'Huck', 'Jacques', 'Julian',
  'Keaton', 'Ken', 'Kidd', 'Klaus', 'Kyle', 'Leopold', 'Lionel',
  'Lopez', 'Lucha', 'Marshal', 'O\'Hare', 'Olaf', 'Phil', 'Pietro',
  'Quillson', 'Raymond', 'Rodney', 'Shep', 'Tex', 'Toby', 'W. Link',
  'Zell'
];

let snootyVillagers = [
  'Alli', 'Amelia', 'Ankha', 'Annalise', 'Astrid', 'Baabara', 'Becky',
  'Bitty', 'Blaire', 'Blanche', 'Bree', 'Broffina', 'Carmen', 'Cashmere',
  'Claudia', 'Cleo', 'Cupcake', 'Diana', 'Elise', 'Eloise', 'Francine',
  'Freya', 'Friga', 'Gigi', 'Gloria', 'Greta', 'Gwen', 'Jane',
  'Judy', 'Julia', 'Kitty', 'Lulu', 'Madam Rosa', 'Maelle', 'Mallary',
  'Mathilda', 'Mint', 'Miranda', 'Monique', 'Naomi', 'Olivia', 'Opal',
  'Pancetti', 'Pecan', 'Petunia', 'Portia', 'Purrl', 'Queenie',
  'Rhoda', 'Robin', 'Snooty', 'Soleil', 'Sue E.', 'Tasha', 'Tiara',
  'Tiffany', 'Timbra', 'Tipper', 'Valise', 'Velma', 'Violet', 'Vivian',
  'Whitney', 'Willow', 'Yuka'
];

let uchiVillagers = [
  'Agnes', 'Canberra', 'Charlise', 'Cherry', 'Deirdre', 'Diva', 'Flo',
  'Frita', 'Fuchsia', 'Hazel', 'Katt', 'Mira', 'Muffy', 'Pashmina',
  'Paula', 'Phoebe', 'Plucky', 'Renee', 'Rocket', 'Reneigh', 'Shari',
  'Sylvia', 'Tammy', 'Ursala'
];

let personalityTypes = [crankyVillagers, jockVillagers, lazyVillagers,
  normalVillagers, peppyVillagers, smugVillagers,
  snootyVillagers, uchiVillagers];

let folderNames = ['cranky', 'jock', 'lazy', 'normal', 'peppy', 'smug',
  'snooty', 'uchi'];

for (let i = 0; i < personalityTypes.length; i++) {
  for (let j = 0; j < personalityTypes[i].length; j++) {
    let currVillager = personalityTypes[i][j];
    let currFolder = folderNames[i];

    fs.rename(`./assets/villagers/${currVillager}.png`,
      `./assets/villagers/${currFolder}/${currVillager}.png`, (err) => {
        if (err) throw err;
        console.log(`Move ${currVillager} complete!`);
      });
  }
}
