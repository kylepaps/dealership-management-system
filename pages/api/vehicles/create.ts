import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { car: carData } = req.body
        const year = parseInt(carData.year)
        const price = parseInt(carData.price)
        const cars = await prisma.car.create({
            data: {
                make: carData.make,
                model: carData.model,
                type: carData.type,
                year: year,
                price: price
            }
        })
        res.status(201)
        res.json({ cars })
    } catch (error) {
        console.log(error)
        res.status(500)
        res.json({error: "sorry unable to save vehicle to database"})
    }
}