const mongoose = require('mongoose');

mongoose.connect('mongodb://51.68.44.66:27017/freelance')
    .then(
        ()=>{
            console.log('connected to db');
            
        }
    )
    .catch(
        (err)=>{
            console.log(err);
        }
    )