//file handling

const fs = require('fs')

// .. means parent directory
 fs.writeFile('./demo2.txt', "hello world" , function(err, data){
    if(err){
        return console.log(err)
    }

    console.log("successfully written to file")
})



fs.writeFile('./hello.txt' , "it's a trial file for learning" , (err,data) => {
    if(err){
        return console.log(err)
    }

    console.log("file created")
})