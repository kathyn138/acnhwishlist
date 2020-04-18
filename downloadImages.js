const fs = require('fs');
const https = require('https');

// https://stackoverflow.com/questions/11944932/how-to-download-a-file-with-node-js-without-using-third-party-libraries

let download = function(url, dest, cb) {
  let file = fs.createWriteStream(dest);
  let request = https.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close(cb); 
    });
  }).on('error', function(err) { // Handle errors
    fs.unlink(dest); // Delete the file async. (But we don't check the result)
    if (cb) cb(err.message);
  });
};

fs.readFile('imageUrls.txt', 'utf8', function (err, data) {
  if (err) {
    // handle possible error
    console.error(err);
    // kill the process and tell the shell it errored
    process.exit(1);
  }
  // otherwise success

  let dataList = data.toString().split(',');

  for (let i = 0; i < dataList.length; i++) {
    let currFile = dataList[i].split('/');
    let currFileName = currFile[currFile.length - 1].slice(0, -4);
    let newFileName = '';

    // removing extensions to original file name
    // left = in case of future events changes file names from site
    if (currFileName.indexOf('_NewHorizon') >= 0) {
      newFileName = currFileName.replace('_NewHorizon', ''); 
    } else if (currFileName.indexOf('_ACNH') >= 0) {
      newFileName = currFileName.replace('_ACNH', '');
    } else if (currFileName.indexOf('_NewLeaf') >= 0) {
      newFileName = currFileName.replace('_NewLeaf', '');
    } else {
      newFileName = currFileName;
    }

    download(dataList[i], `./assets/villagers/${newFileName}.png`, console.log(`downloaded ${newFileName}.png`))
  }
});

console.log('reading file');
// file won't have been read yet at this point

// note that there are a few new villagers whose original file names
// follow convention of new_animalspecies 
// there aren't many of these 
// and they need to be visually confirmed to ID which villager they are