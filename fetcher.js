const fs = require('fs')

const https = require('https')
// console.log(process.argv[2].slice(7));
const options = {
  hostname: process.argv[2].slice(11, process.argv[2].length  -1), 
  method: 'GET'
}

const writeToFile = (data) => {
  fs.writeFile(process.argv[3], data, err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
  })
};

const req = https.request(options, res => {
  // console.log(`statusCode: ${res.statusCode}`)
  res.on('data', data => {
    writeToFile(data);
    console.log(`Downloaded and saved 3261 bytes to ./index.html`)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()