const fs = require('fs')

//read demo and demo2 and the write its content in concate.txt


fs.readFile('./demo.txt' , 'utf-8' , (err , data) =>{
    if (err) return console.log(err)
        
        let data1 = data;

    fs.readFile('./demo2.txt' , 'utf-8' , (err , data) =>{
        if (err) return console.log(err)
        
        let data2 = data;

        let result = data1.split() + '\n' + data2.trim();

        fs.writeFile('concate.txt', result , (err) => {
            if (err) return console.log(err);
            console.log("Successfully written to concate.txt");
        })
    })
})
