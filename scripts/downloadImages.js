const fs = require('fs');
const https = require('https');

let download = function(url, dest, cb) {
  let file = fs.createWriteStream(dest);
  let request = https.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close(cb); 
    });
  }).on('error', function(err) { // Handle errors
    fs.unlink(dest); // removes the file
    if (cb) cb(err.message);
  });
};

fs.readFile('imageUrls.txt', 'utf8', function (err, data) {
  if (err) {
    // handle possible error
    console.error(err);
    process.exit(1);
  }

  let dataList = data.toString().split(',');

  // go through imagesUrls.txt
  // and search for specific phrases to remove from file name

  for (let i = 0; i < dataList.length; i++) {
    let currFile = dataList[i].split('/');
    let currFileName = currFile[currFile.length - 1].slice(0, -4);
    let newFileName = '';

    // removing extensions to original file name
    
    if (currFileName.indexOf('_NewHorizon') >= 0) {
      newFileName = currFileName.replace('_NewHorizon', ''); 
    } else if (currFileName.indexOf('_ACNH') >= 0) {
      newFileName = currFileName.replace('_ACNH', '');
    } else if (currFileName.indexOf('_NewLeaf') >= 0) {
      newFileName = currFileName.replace('_NewLeaf', '');
    } else {
      newFileName = currFileName;
    }

    download(dataList[i], `./${newFileName}.png`, console.log(`downloaded ${newFileName}.png`))
  }
});

console.log('reading file');

// note that there are a few new villagers whose original file names
// follow convention of new_animalspecies 
// there aren't many of these 
// and they need to be visually confirmed to ID which villager they are