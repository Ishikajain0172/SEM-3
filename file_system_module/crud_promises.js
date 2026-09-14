import fs from 'fs/promises';
import {readFile} from 'fs'

async function readFileContent(filename){
    const data = await readFile(filename, "utf8")
    console.log(data);

}
readFileContent('notes.txt')