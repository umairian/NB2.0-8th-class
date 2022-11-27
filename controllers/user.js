const users = [
  {
    name: "Ahmad",
    age: 20,
    email: "ahmad@gmail.com",
    address: "Peshawar",
  },
  {
    name: "Behram",
    age: 25,
    email: "behram@gmail.com",
    address: "Lahore",
  },
  {
    name: "Camim",
    age: 30,
    email: "camim@gmail.com",
    address: "Islamabad",
  },
  {
    name: "Faisal",
    age: 19,
    email: "faisal@gmail.com",
    address: "Karachi",
  },
  {
    name: "Ahmad",
    age: 20,
    email: "ahmad@gmail.com",
    address: "Peshawar",
  },
];

function postUsers(req, res) {
  res.status(200).send("POST: /users => Successfull");
}

function getUsers(req, res) {
  res.status(200).render("users", {
    users: users,
    title: "Users",
    admin: false,
  });
}

module.exports = {
  postUsers: postUsers,
  getUsers: getUsers
};
