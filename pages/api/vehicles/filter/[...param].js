import prisma from "../../../../lib/prisma"

export default async function handler(req, res) {
    const { param: filter } = req.query    
    try {
        if (filter[0] === 'make') {
            const cars = await prisma.car.findMany({
                orderBy: {
                    make: 'asc',
                },
            })
            res.status(201)
            res.json({ cars })
        } else if (filter[0] === 'model') {
            const cars = await prisma.car.findMany({
                orderBy: {
                    model: 'asc',
                },
            })
            res.status(201)
            res.json({ cars })
        } else if (filter[0] === 'yearlow') {
            const cars = await prisma.car.findMany({
                orderBy: {
                    year: 'asc',
                },
            })
            res.status(201)
            res.json({ cars })
        } else if (filter[0] === 'yearhigh') {
            const cars = await prisma.car.findMany({
                orderBy: {
                    year: 'desc',
                },
            })
            res.status(201)
            res.json({ cars })
        } else if (filter[0] === 'type') {
            const cars = await prisma.car.findMany({
                orderBy: {
                    type: 'asc',
                },
            })
            res.status(201)
            res.json({ cars })
        } else if (filter[0] === 'pricelow') {
            const cars = await prisma.car.findMany({
                orderBy: {
                    price: 'asc',
                },
            })
            res.status(201)
            res.json({ cars })
        } else if (filter[0] === 'pricehigh') {
            const cars = await prisma.car.findMany({
                orderBy: {
                    price: 'desc',
                },
            })
            res.status(201)
            res.json({ cars })
        } else {
            const cars = await prisma.car.findMany({
                orderBy: {
                    model: 'asc',
                },
            })
            res.status(201)
            res.json({ cars })
        }
    } catch (error) {
        res.status(500)
        res.json({error: "sorry unable to fetch clients"})
    }
}