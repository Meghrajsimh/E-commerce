const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticatedUser = catchAsyncError(async(req,res,next)=>{
    const { token } = req.cookies;
    if(!token){
        return next(new ErrorHandler("Please Login to access this resource.",401))
    }
    const decodedData = jwt.verify(token, process.env.JWT_SECRET)  
    // console.log(decodedData.id);
    req.user=  await User.findById(decodedData.id); 
    next();

});

exports.authorizeRoles= (...role) =>{
    return (req,res,next) =>{
        console.log(req.user.role);
        if(!role.includes(req.user.role)){
           
            return next ( new ErrorHandler(`Role: ${req.user.role} is not allowed to access this resorce`,403));
        }

        next();
    };

}
