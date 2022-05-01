import prisma from "../../../../lib/prisma"

export default async function handler(req, res) {
    const { id } = req.query
    const issuedId = parseInt(id)
    if (req.method === 'PUT') {
        try {
            const issued = await prisma.issued.update({
                where: {
                    id: issuedId,
                },
                data: {
                    returned: true
                }
            })
            res.status(201)
            res.json({ issued })
        } catch (error) {
            res.status(500)
            res.json({error: "sorry unable to delete vehicle"})
        }
    }
}