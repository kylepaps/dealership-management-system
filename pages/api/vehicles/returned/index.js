import prisma from "../../../../lib/prisma"

export default async function handler(req, res) {
    try {
        const returned = await  prisma.issued.findMany({
            where: {
                returned: true
            }, include: {
                car: true,
                client: true,
            }
        })
        res.status(201)
        res.json({ returned })
    } catch (error) {
        res.status(500)
        res.json({error: "sorry unable to fetch returned vehicles"})
    }
}