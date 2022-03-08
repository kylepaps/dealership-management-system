import prisma from "../../../../lib/prisma"

export default async function handler(req, res) {
    try {
        const clients = await prisma.client.findMany({
            orderBy: {
                createdAt: 'desc',
            }
        })
        res.status(201)
        res.json({ clients })
    } catch (error) {
        res.status(500)
        res.json({error: "sorry unable to fetch recent clients"})
    }
}