import prisma from "../../../../lib/prisma"

export default async function handler(req, res) {
    try {
        const { carId: carData, clientId: clientData } = req.body
        const carId = parseInt(carData)
        const clientId = parseInt(clientData)
        const issued = await prisma.issued.create({
            data: {
                carId: carId,
                clientId: clientId,
            }
        })
        res.status(201)
        res.json({ issued })
    } catch (error) {
        console.log(error)
        res.status(500)
        res.json({error: "sorry unable to save issued vehicle to database"})
    }
}