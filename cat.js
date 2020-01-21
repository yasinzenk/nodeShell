const fs = require('fs')

module.exports = function (data) {
    console.log(data)
    fs.readFile(`/${data}`, (err, data) => {
        if (err) throw err;
        console.log(data);
    })
}
