const { Homes } = require('./index.js');

module.exports = {
  getHomeInfo: (homeId) => (
    Homes.find({ _id: homeId })
  ),

  getAllHomes: () => (
    Homes.find()
      .then((homes) => (
        homes
      ))
      .catch((err) => {
        console.log(err);
      })
  ),

  deleteAll: () => (
    Homes.remove()
      .then((result) => (
        result
      ))
      .catch((err) => {
        console.log(err);
      })
  ),
};
