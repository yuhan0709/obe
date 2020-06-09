const Teachers = require("../models/Teacher");
const sha1 = require("sha1");
const setDefualtData = () => {
  Teachers.find({ name: "admin", number: "admin" }, (err, users) => {
    try {
      if (err) {
        throw err;
      }
      if (users && users.length == 1) {
        console.log("管理员已存在");
        return;
      }
      Teachers.create(
        {
          name: "admin",
          number: "admin",
          academic: "admin",
          password: sha1("admin"),
        },
        (err, docs) => {
          if (err) {
            throw err;
          }
          console.log(docs);
        }
      );
    } catch (err) {
      console.log("初始化管理员失败");
    }
  });
};

module.exports = setDefualtData;
