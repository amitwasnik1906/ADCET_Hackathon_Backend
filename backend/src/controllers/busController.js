// update location
// update people count

const prisma = require('../prismaClient')

const updateLocation = async (req, res) => {
    try {
        const { busId, latitude, longitude } = req.body;

        // Check if bus exists
        const existingBus = await prisma.bus.findUnique({
            where: {
                id: busId
            }
        });

        if (!existingBus) {
            return res.status(404).json({
                success: false,
                error: "Bus not found"
            });
        }

        // Update bus location
        const updatedBus = await prisma.bus.update({
            where: {
                id: busId
            },
            data: {
                current_latitude: latitude,
                current_longitude: longitude,
                updated_at: new Date()
            }
        });

        res.status(200).json({
            success: true,
            message: "Location updated successfully",
            bus: updatedBus
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Failed to update location",
            details: error.message
        });
    }
}


const updatePeopleCount = async (req, res) => {
    try {
        const { busId, passenger_count } = req.body;

        // Check if bus exists
        const existingBus = await prisma.bus.findUnique({
            where: {
                id: busId
            }
        });

        if (!existingBus) {
            return res.status(404).json({
                success: false,
                error: "Bus not found"
            });
        }

        // Update passenger count
        const updatedBus = await prisma.bus.update({
            where: {
                id: busId
            },
            data: {
                current_passenger_count: passenger_count,
                updated_at: new Date()
            }
        });

        res.status(200).json({
            success: true,
            message: "Passenger count updated successfully",
            bus: updatedBus
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Failed to update passenger count",
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
                route: true
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
            },
            include: {
                buses: true
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



module.exports = {
    updateLocation,
    updatePeopleCount,
    getBusDetails,
    getRouteDetails
}