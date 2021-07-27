import { RequestHandler } from 'express';
// import {db} = require('../models/auctionModel') 
import * as db from '../models/auctionModel'

export class auctionController {

    static getItem : RequestHandler = async (req, res, next) => {
        // 
        // 
        const searchQuery = 'SELECT * FROM "item" WHERE "isComplete" = false ORDER BY "itemId" LIMIT 1'
        try {
          const results : any = await db.query(searchQuery)
          
          const item = results.rows

          res.locals.item = item

          return next();

        } catch (e) {
            return next({error: `error from getItem, ${e}`})
        }

    }

    static bidItem : RequestHandler = (req, res, next) => {
        // {bid : 320, user: "rob", cookie" : ""}
        const { bid, user, itemName } = req.body

        // get user id
        // get itemid
        //SELECT "user"."userId","bids"."itemId" FROM "public"."bids" INNER JOIN "public"."user" ON "bids"."userId" = "user"."userId" WHERE "user"."userName" = 'player1'

        // grab values from result.rows and assign to user IF and item Id

        // make updateBid 

    }

    static getWinner : RequestHandler = (req, res, next) => {


        // const markParms : number = results.rows[0]['itemId']

        // const markQuery = 'UPDATE "item" SET "isComplete" = true WHERE "itemId" = $1'

        // await db.query(markQuery, [markParms])
    }



}








// module.exports = auctionController;