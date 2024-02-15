const Data = require("./datamodel");
const User = require("./usermodel");

const getData = (req, res) => {
  Data.find()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => console.log(err));
};

const addData = (req, res) => {
  const data = Data({
    title: req.query.title,
    data: req.query.data,
  });

  data
    .save()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => console.log(err));
};

const findDataByTitle = (req, res) => {
  Data.find({ title: req.query.title })
    .then((response) => {
      res.send(response);
    })
    .catch((err) => console.log(err));
};

const findUserByName = (req, res) => {
  User.findOne({ name: req.query.name })
    .then((response) => {
      res.send(response);
    })
    .catch((err) => console.log(err));
};

const findUserByPass = (req, res) => {
  User.findOne({ password: req.query.pass }).then((response) => {
    res.send(response);
  });
};

const addUser = (req, res) => {
  const user = User({
    name: req.query.name,
    password: req.query.pass,
    email: req.query.email,
    job: req.query.job,
  });

  user
    .save()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => console.log(err));
};

const updateUser = (req, res) => {
  const id = req.query.id;
  const email = req.query.email;
  const job = req.query.job;

  User.updateOne(
    { _id: id },
    {
      email: email,
      job: job,
    }
  )
    .then((response) => {
      res.send(response);
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getData,
  addData,
  findDataByTitle,
  findUserByName,
  addUser,
  updateUser,
  findUserByPass,
};
