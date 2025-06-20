import { Router } from "express";

const router = Router()


router.get("/", (req, res) => res.render("index",{title:"Home"}))
router.get("/about", (req, res) => res.render("about",{title:"Acerca de nosotros"}))
router.get("/contact", (req, res) => res.render("contact",{title:"Contato"}))

export default router