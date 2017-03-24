import Controller from './base.controller'
import Project from '../models/project.model'
import selfish from '../helpers/selfish.helper'

class ProjectCtrl extends Controller {
  add (req, res, next) {
    req.body.owner = req.user.id
    return super.add(...arguments)
  }

  load (req, res, next, id) {
    return super.load(req, res, next, {owner: req.user.id, _id: id})
  }

  list (req, res, next) {
    req.simpleQuery = {owner: req.user.id}
    return super.list(...arguments)
  }

}

export default selfish(new ProjectCtrl(Project))
