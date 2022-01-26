import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    try {
        const { clients: clientData } = req.body
        const clients = await prisma.client.create({
            data: {
                firstName: clientData.firstName,
                lastName: clientData.lastName,
                dob: clientData.dob + "T00:00:00.000Z",
                contact: clientData.contact,
                phone: clientData.phone,
                email: clientData.email
            }
        })
        res.status(201)
        res.json({ clients })
    } catch (error) {
        res.status(500)
        res.json({error: "sorry unable to fetch clients"})
    }
}