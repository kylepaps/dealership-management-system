import prisma from "../../../../lib/prisma"

export default async function handler(req, res) {
    const { param: filter } = req.query    
    try {
        if (filter[0] === 'firstname') {
            const clients = await prisma.client.findMany({
                orderBy: {
                    firstName: 'asc',
                },
            })
            res.status(201)
            res.json({ clients })
        } else if (filter[0] === 'lastname') {
            const clients = await prisma.client.findMany({
                orderBy: {
                    lastName: 'asc',
                },
            })
            res.status(201)
            res.json({ clients })
        } else if (filter[0] === 'phone') {
            const clients = await prisma.client.findMany({
                orderBy: {
                    phone: 'asc',
                },
            })
            res.status(201)
            res.json({ clients })
        } else if (filter[0] === 'email') {
            const clients = await prisma.client.findMany({
                orderBy: {
                    email: 'asc',
                },
            })
            res.status(201)
            res.json({ clients })
        } else if (filter[0] === 'contact') {
            const clients = await prisma.client.findMany({
                orderBy: {
                    contact: 'desc',
                },
            })
            res.status(201)
            res.json({ clients })
        } else {
            const clients = await prisma.client.findMany({
                orderBy: {
                    firstName: 'asc',
                },
            })
            res.status(201)
            res.json({ clients })
        }
    } catch (error) {
        res.status(500)
        res.json({error: "sorry unable to fetch clients"})
    }
}