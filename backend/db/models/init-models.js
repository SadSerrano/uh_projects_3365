var DataTypes = require("sequelize").DataTypes;
var _departments = require("./departments");
var _users = require("./users");
var _roles = require("./roles");
var _statuses = require("./statuses");

function initModels(sequelize) {
  var departments = _departments(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var statuses = _statuses(sequelize, DataTypes);

  departments.hasMany(users)
  roles.hasMany(users)
  statuses.hasMany(users)

  users.belongsTo(departments, {foreignKey: "department_id"});
  users.belongsTo(roles, {foreignKey: "role_id"});
  users.belongsTo(statuses, {foreignKey: "status_id"});


  return {
    departments,
    users,
    roles,
    statuses,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
