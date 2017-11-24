const User = require('../models/user');

function usersIndex(req, res, next) {
  User
    .find()
    .exec()
    .then(users => res.json(users))
    .catch(next);
}
function usersShow(req, res) {
  User
    .findById(req.params.id)
    .populate('requests')
    .exec()
    .then(user => res.json(user))
    .catch(err => res.render('error', {err}));
}

function usersUpdate (req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then(user => {
      user = Object.assign(user, req.body);
      user.save();
      res.send(user);
    })
    .catch(next);
}
function usersDelete(req,res,next) {
  User
    .findById(req.params.id)
    .exec()
    .then(user => user.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}
// -----------------------------------------------------------
// -----------------------------------------------------------
module.exports = {
  index: usersIndex,
  show: usersShow,
  update: usersUpdate,
  delete: usersDelete
};
