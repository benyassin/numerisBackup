import app from './config/express'
// { force: true } will drop the table if it already exists

import Reference from './api/models/Reference';


const path = require('path');
const fs = require('fs');
const multer = require('multer');
const bodyParser = require('body-parser')
const _ = require('underscore');

const DIR = './api/uploads';

function readData(err, data) {
  console.log(data);
}

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR)
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + path.extname(file.originalname));
  }
});

let maxSize = 3260360;

let upload = multer({ storage: storage, limits: { fileSize: maxSize }  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// API d'upload des fichier de réference :
app.post('/api/upload', upload.single('file'), function (req, res) {
  if (!req.file) {
    console.log("No file received");
    return res.send({
      success: false
    });

  } else {
    console.log('file received');
    console.log(req.body); // req.body :: is the name parameter 'nom' sended by the frontend form e.g. nom:foret ;)

    let fileData = "",  inserted = 0, total = 0;
    // Create stream reader
    fs.createReadStream("./api/uploads/" + req.file.fieldname + path.extname(req.file.originalname))
      .on('data', function (chunk) {
        fileData+= chunk.toString(); // Concatenate readed data from te uploaded file :)
      })
      .on('end', function () {  // done

        let donnes = JSON.parse(fileData).features;
        
        // map each donne of donnes to a function "reference.Save()"" and after finshing all promises delete the file :)  
        const promises = donnes.map(function(donne) { 
            let feature = Object.assign(donne.properties, req.body, { geometry: donne.geometry })
            return Reference.build(feature).save()
            .then(anotherTask => {
              // console.log('niiiiiiiice')
              total++;
              inserted++;
            }).catch(error => {
              // console.log("error")
              total++;
            })
        });

        Promise.all(promises).then(function () {
          console.log("total= "+total+" , inserted= "+inserted)
          fs.unlink("./api/uploads/" + req.file.fieldname + path.extname(req.file.originalname), function (err) {
            if (err) throw err;
            console.log('File deleted!');
          }); 

          return res.send({
            total: total, inserted: inserted
          });

        });        

      });  
    
  }
});



const port = parseInt(process.env.PORT, 10) || 8001;

app.listen(port, () => {
  console.log(`The server is running at localhost: ${port}`);
});


export default app
