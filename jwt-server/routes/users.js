const controller = require('../controllers/users');

const validateToken = require('../utils').validateToken;

module.exports = (router) => {
    router.route('/login').post(controller.login);

    router.route('/user').get(validateToken,controller.getUser);

    router.route('/register').post(controller.register);
}