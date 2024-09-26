const jwt = require('jsonwebtoken');

module.exports = function auth(req, res, next) {
    try {
        if (!req.headers['authorization']) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        
        const token = req.headers['authorization'].split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            else {
                req.id = decodedToken._id;
                req.role = decodedToken.role;
                return next();
            }
        });
    }
    catch (err) {
        console.error(err);
        res.status(401).json({ message: 'Unauthorized' });
    }
}