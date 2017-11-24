const router = require('express').Router();
const auth  = require('../controllers/auth');
const users = require('../controllers/users');
const requests = require('../controllers/requests');


// ===================================================================
router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);
// ====================================================================
router.route('/register')
  .post(auth.register);
router.route('/login')
  .post(auth.login);
router.route('/requests')
  .get(requests.index);
router.route('/requests/:id')
  .get(requests.show)
  .delete(requests.delete);
// =======================================================================
router.all('/*', (req, res) => res.notFound());
// =======================================================================


module.exports = router;
