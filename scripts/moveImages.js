const fs = require('fs');
const { crankyVillagers, jockVillagers, lazyVillagers,
  normalVillagers, peppyVillagers, smugVillagers,
  snootyVillagers, uchiVillagers } = require('./villagers');

let personalityTypes = [crankyVillagers, jockVillagers, lazyVillagers,
  normalVillagers, peppyVillagers, smugVillagers,
  snootyVillagers, uchiVillagers];

let folderNames = ['cranky', 'jock', 'lazy', 'normal', 'peppy', 'smug',
  'snooty', 'uchi'];

// move villager images into folders
// sorted by personality types 

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
