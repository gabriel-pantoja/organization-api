const auth = require('../../application/service/auth.service');

module.exports = {
    login: async function (req, res) {
        try {
            const response = await auth.login(req);
            if (response === null) return res.status(401).json('e-mail incorreto');
            return res.status(200).json({ token: response });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}