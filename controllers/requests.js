const Request = require('../models/request');

function requestsIndex(req,res,next) {
  Request
    .find()
    .exec()
    .then(requests => res.json(requests))
    .catch(next);

}
function requestsShow(req,res,next){
  Request
    .findById(req.params.id)
    .exec()
    .then(request => res.json(request))
    .catch(next);

}
function requestsDelete(req,res,next){
  Request
    .findById(req.params.id)
    .exec()
    .then(request => request.remove())
    .then(res => res.sendStatus(204))
    .catch(next);
}
module.exports = {
  index: requestsIndex,
  show: requestsShow,
  delete: requestsDelete
};
