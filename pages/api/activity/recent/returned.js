import prisma from "../../../../lib/prisma"

export default async function handler(req, res) {
    try {
        const issued = await prisma.issued.findMany({
            orderBy: {
                updatedAt: 'desc',
            },
            where: {
                returned: true
            },
            include: {
                car: true,
                client: true,
            }
        })
        res.status(201)
        res.json({ issued })
    } catch (error) {
        res.status(500)
        res.json({error: "sorry unable to fetch recent issued"})
    }
}