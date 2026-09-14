import fs from "fs";

const readStream = fs.createReadStream("input.txt");
readStream.on("data", (chunk) => {
    console.log("Received chunk:")
    console.log("Data:", chunk);
});
readStream.on("end", () => {
    console.log("END");
});
readStream.on("error", (err) => {
    console.log("Error:", err.message);
});

const writeStream = fs.createWriteStream("output.txt");
writeStream.write("Hello, World!\n");

writeStream.on("finish", () => {
    console.log("Write completed");
});
writeStream.on("error", (err) => {
    console.log("Error:", err);
});

readStream.pipe(writeStream);