const jsonwebtoken = require('jsonwebtoken');

const generateJwtToken = (id, role) => {
    return jsonwebtoken.sign({
        id,
        role
    }, process.env.JWT_SECRET_KEY, {
        expiresIn: '1d'
    });
}

const ErroeArray = [];
ErroeArray[500] = "DB Error occurred. Contact your administrator";

const getErrorResponse = (statusCode, data = null, message = null) => {

    return {
        success: false,
        message: message || ErroeArray[statusCode]
    }
}


module.exports = {
    generateJwtToken,
    getErrorResponse
}