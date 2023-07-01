


const sendTokens=(user, statusCode, res)=>{
    const token = user.getJWTToken();

    const option = {
        expired: new Date(
             Date.now()+ process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly:true
    };

    res.status(statusCode).cookie("token",token, option).json({
        success: true,
        message:"Register successful",
        user,
        token
    });
}

module.exports = sendTokens;
// module.exports = sendToken;