const axios = require('axios');
const fs = require('fs');
let content = ''



axios.get('https://www.ign.com/wikis/animal-crossing-new-horizons/Villagers_and_Other_Characters').then(function(resp) {
  let pattern = /https:\/\/oyster.+?\/animal-crossing-new-horizons\/.+?\.(?:jpg|gif|png)/g;
  content = resp.data.match(pattern);
  let unique = new Set(content);
  console.log(unique)

  fs.writeFile('./output.txt', unique, "utf8", function(err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log('Successfully wrote to file!');
  });

  console.log('writing file...');
});