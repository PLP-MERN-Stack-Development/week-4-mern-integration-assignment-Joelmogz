const jwt = require('jsonwebtoken');

// checks token and sets req.user

const protect = async (req, res, next) => {
    const auth = req.headers.authorization;
    if(!auth || auth.split(" ") [1])
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; //{ id, role}
        next();
    } catch (error) {
        return res.status(403).jsom({ message : "Invalid token"})
    }
};

module.exports = {protect}