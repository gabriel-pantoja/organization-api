require('dotenv').config();
const jwt = require('jsonwebtoken');
const auth = require('../../infrastructure/repository/auth.repository');

module.exports = {
    login: async function (req, res) {
        const user = await auth.login(req);
        if (user === null) return null
        const token = jwt.sign({ id: user.id }, process.env.KEY_JWT, { expiresIn: process.env.EXPIRES_JWT });
        return token;
    },

    check_token: function (req, res, next) {
        const token = req.get('Authorization');
        if (!token) return res.status(401).json({ auth: false, message: 'No token.' });

        jwt.verify(token, process.env.KEY_JWT, function (err, decoded) {
            if (err) return res.status(403).json({ auth: false, message: 'Failed to authenticate token.' });
            next();
        });
    }
}