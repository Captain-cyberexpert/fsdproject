const fs = require('fs'); 
const path = require('path'); 

const loc = path.resolve(__dirname, 'models/users.json')

const readfile = () =>{
    data = fs.readFileSync(loc, 'utf8');
    return data;
}

// async function fetchDataUsingFs() {
//     try {
//       var data = fs.readFileSync(filePath, 'utf8');
//       data = JSON.parse(data);
//       return data;
//     } catch (error) {
//       console.error('Error fetching data : ', error.message);
//     }
//   }

// readfile();
// console.log(readfile());

module.exports ={readfile};