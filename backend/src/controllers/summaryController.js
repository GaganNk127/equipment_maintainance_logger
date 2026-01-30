const Equipment = require('../models/Equipment');


exports.getSummary = async (req, res) => {
    try {
        const totalEquipment = await Equipment.countDocuments();

        // Calculate date for "Due for Service" (> 30 days)
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const dueForService = await Equipment.countDocuments({
            lastServiceDate: { $lt: thirtyDaysAgo }
        });

        // Optional: Count "Due Soon" (24-30 days)
        const twentyFourDaysAgo = new Date();
        twentyFourDaysAgo.setDate(twentyFourDaysAgo.getDate() - 24);


        const dueSoon = await Equipment.countDocuments({
            lastServiceDate: { $gte: thirtyDaysAgo, $lte: twentyFourDaysAgo }
        });

        res.status(200).json({
            totalEquipment,
            dueForService,
            dueSoon
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
