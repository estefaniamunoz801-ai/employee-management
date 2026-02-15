module.exports = (services) => ({
    updateContract: async (req, res, next) => {
        try {
            const contractData = req.body;
            const updateContract = await services.updateContract(contractData);
            return res.status(200).json({
                data: updateContract,
                message: 'Contract termination successfully registered'
            })
        }
        catch (error) {
            next(error)
        }
    }
})