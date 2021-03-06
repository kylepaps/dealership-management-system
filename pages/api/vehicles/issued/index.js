import prisma from "../../../../lib/prisma"

export default async function handler(req, res) {
    try {
        const issued = await prisma.issued.findMany({
            where: {
                returned: false
            }, include: {
                car: true,
                client: true,
            }
        })
        res.status(201)
        res.json({ issued })
    } catch (error) {
        console.log(error)
        res.status(500)
        res.json({error: "sorry unable to fetch issued vehicles"})
    }
}