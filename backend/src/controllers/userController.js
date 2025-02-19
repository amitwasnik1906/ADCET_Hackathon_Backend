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

const getBusDetails = async (req, res) => {
    try {
        const { id } = req.params;

        const bus = await prisma.bus.findUnique({
            where: {
                id: id
            },
            include: {
                routes: true
            }
        });

        if (!bus) {
            return res.status(404).json({
                success: false,
                error: "Bus not found"
            });
        }

        res.status(200).json({
            success: true,
            bus: bus
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Failed to get bus details",
            details: error.message
        });
    }
}

const getRouteDetails = async (req, res) => {
    try {
        const { id } = req.params;

        const route = await prisma.route.findUnique({
            where: {
                id: id
            }
        });

        if (!route) {
            return res.status(404).json({
                success: false,
                error: "Route not found"
            });
        }

        res.status(200).json({
            success: true,
            route: route
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Failed to get route details",
            details: error.message
        });
    }
}

// get buses by src and dest

module.exports = {
    getAllBuses,
    getAllRoutes,
    getBusDetails,
    getRouteDetails
}