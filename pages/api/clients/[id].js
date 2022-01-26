import prisma from "../../../lib/prisma"

export default async function handler(req, res) {
    const { id } = req.query
    const clientId = parseInt(id)
    if (req.method === 'DELETE') {
        try {
            const clients = await prisma.client.delete({
                where: {
                    id: clientId,
                }
            })
            res.status(201)
            res.json({ clients })
        } catch (error) {
            res.status(500)
            res.json({error: "sorry unable to fetch clients"})
        }
    }
}