'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');


  // todoList Routes
  app.route('/students')
    .get(todoList.list_all_students)
    .post(todoList.create_a_student);

  app.route('/students/:studentId')
    .get(todoList.read_a_student)
    .put(todoList.update_a_student)
    .delete(todoList.delete_a_student);
};
