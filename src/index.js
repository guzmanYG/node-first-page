import express from "express"
import ejs from "ejs" 
import {dirname,join} from "path"
import {fileURLToPath} from "url"
import index from "./routes/index.js"
const app = express()
const _dirname = dirname(fileURLToPath(import.meta.url))
console.log(_dirname)
app.set("views", join(_dirname,"views"))
app.set("view engine", "ejs")
app.use(index)
app.use(express.static(join(_dirname,"public")))







app.listen(3000)
console.log("Servidor iniciado en el puerto 3000")

