import prisma from "../../../lib/prisma"

export default async function handler(req, res) {
    const { id } = req.query
    const carId = parseInt(id)
    if (req.method === 'DELETE') {
        try {
            const cars = await prisma.car.delete({
                where: {
                    id: carId,
                }
            })
            res.status(201)
            res.json({ cars })
        } catch (error) {
            res.status(500)
            res.json({error: "sorry unable to delete vehicle"})
        }
    }
}