import prisma from "../../../../lib/prisma"

export default async function handler(req, res) {
    try {
        const vehicles = await prisma.car.findMany({
            orderBy: {
                createdAt: 'desc',
            }
        })
        res.status(201)
        res.json({ vehicles })
    } catch (error) {
        res.status(500)
        res.json({error: "sorry unable to fetch recent vehicles"})
    }
}