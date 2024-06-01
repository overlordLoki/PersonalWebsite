
import fs from 'fs';

function readJobFiles(){
    const data = [];
    try {
        //read the names of each file in jobs dir
        const files = fs.readdirSync('./public/jobs');
        for(const file of files){
            //if file does not end with json then skip
            if(!file.endsWith('.json')){continue;}
            var fileContent = JSON.parse(fs.readFileSync('./src/jobs/'+file, 'utf-8'));
            data.push(fileContent);
        }
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
    return data
}

const data = readJobFiles();
console.log(data);