// get all bus -- do filtering
// get all routes -- do filtering
// get bus details

const prisma = require('../prismaClient')

const getAllBuses = async (req, res) => {
    try {
        const buses = await prisma.bus.findMany();

        res.status(200).json({
            message: "Buses retrieved successfully",
            buses: buses
        });

    } catch (error) {
        res.status(500).json({
            error: "Failed to retrieve buses",
            details: error.message
        });
    }
}

const getAllRoutes = async (req, res) => {
    try {
        const routes = await prisma.route.findMany({
            include: {
                bus: true
            }
        });

        res.status(200).json({
            message: "Routes retrieved successfully", 
            routes: routes
        });

    } catch (error) {
        res.status(500).json({
            error: "Failed to retrieve routes",
            details: error.message
        });
    }
}

// get buses by src and dest

module.exports = {
    getAllBuses,
    getAllRoutes
}