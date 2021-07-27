import { RequestHandler } from "express";

const { Router} = require('express')
const router = Router;

const auctionController = require("../controllers/auctionController.ts")

router.get("/homepage", auctionController.getItem, (req: any, res: any, next: any)=> {
  return res.status(200).json(res.locals.item)
})

router.post("/bid", auctionController.bidItem, (req: any, res: any, next: any)=> {
    return res.status(200).json(res.locals)
 })

router.get("/winner", auctionController.getWinner, auctionController.getItem, (req: any, res: any, next: any)=> {
  return res.status(200).json(res.locals)
})

module.exports = router;