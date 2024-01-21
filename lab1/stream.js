const csv = require('csv-parser')
const fs = require('fs')
const fastcsv = require('fast-csv')
const { equal } = require('assert')

// delete file if exist
const filesToDelete = ['canada.txt', 'usa.txt']
for (var file of filesToDelete) {
    console.log(file)
    if (fs.existsSync(file)) {
        fs.unlink(`${file}`, function(err) {
            if(err){
                return console.error(`${file}: err`)
            }
        })
        console.log(`${file} Deleted Successfully`)
    }
}

// filter the data and write to file
fs.appendFile("canada.txt", "Country, Year, Population\r\n",function(err){
    if (err) {
        console.error(err)
    }
})
fs.appendFile("usa.txt", "Country, Year, Population\r\n",function(err){
    if (err) {
        console.error(err)
    }
})
fs.createReadStream("input_countries.csv")
    .pipe(csv())
    .on('data', (row) => {
        if (row.country == "Canada"){
            var dataToAppend = `${row.country}, ${row.year}, ${row.population}\r\n`
            fs.appendFile('Canada.txt', dataToAppend, function(err) {
                if (err) {
                    console.error(err)
                }
            })
        }
        if (row.country == "United States"){
            var dataToAppend = `${row.country}, ${row.year}, ${row.population}\r\n`
            fs.appendFile('usa.txt', dataToAppend, function(err) {
                if (err) {
                    console.error(err)
                }
            })
        }
    })






