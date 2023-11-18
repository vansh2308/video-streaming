const fs = require("fs")
const Video = require("./Videos")
const { connectDB } = require("./db")
const mongoose = require("mongoose")

connectDB()



mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir)
  for (const file of fileList) {
    const name = `${dir}/${file}`
    // Check if the current file/directory is a directory using fs.statSync
    if (fs.statSync(name).isDirectory()) {
      // If it is a directory, recursively call the getFiles function with the directory path and the files array
      getFiles(name, files)
    } else {
      // If it is a file, push the full path to the files array
      files.push(name)
    }
  }
  return files
}

const fileList = getFiles("/Users/vanshu/Downloads/test");
const error_list = []


fileList.forEach((file) => {
  fs.readFile(file, async (err, res)=>{
    if(err) { error_list.push(file); return; }
    const video = res.toLocaleString();
    await Video.create(JSON.parse(video))
    
  })
})



