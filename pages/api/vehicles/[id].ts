import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query
    console.log(id)
    try {
        const cars = await prisma.car.findMany()
        res.status(201)
        res.json({ cars })
    } catch (error) {
        res.status(500)
        res.json({error: "sorry unable to fetch clients"})
    }
}