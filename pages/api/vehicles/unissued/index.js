import prisma from "../../../../lib/prisma"

export default async function handler(req, res) {
    try {
        const cars = await prisma.car.findMany({
            where: {
                issued: null
            }
        })
        res.status(201)
        res.json({ cars })
    } catch (error) {
        res.status(500)
        res.json({error: "sorry unable to fetch vehicles"})
    }
}