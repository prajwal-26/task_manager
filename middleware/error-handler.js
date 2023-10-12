const errorHandlerMiddleware = (err,req,res,next) => {
res.status(500).json({msg:`something went wrong try again later`})
}
module.exports = errorHandlerMiddleware;