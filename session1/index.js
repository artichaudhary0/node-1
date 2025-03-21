const http = require("node:http")

const PORT = 8083

const server = http.createServer((req,res)=>{

    // console.log("dyfjduysf")
    const url = req.url
    console.log(url)
    if(url === "/")
    {
        res.write("Hello this is home page")
        res.end()
    }else if(url === "/abouts"){
        res.write("Hello this is about page")
        res.end()
    }
})

server.listen(PORT,()=>{
    console.log("done")
})