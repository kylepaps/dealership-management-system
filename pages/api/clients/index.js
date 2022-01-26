import prisma from "../../../lib/prisma"

export default async function handler(req, res) {
    try {
        const clients = await prisma.client.findMany()
        res.status(201)
        res.json({ clients })
    } catch (error) {
        res.status(500)
        res.json({error: "sorry unable to fetch clients"})
    }
}