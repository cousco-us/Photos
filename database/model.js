const { Homes } = require('./index.js');

module.exports = {
  getHomeInfo: (homeId, callback) => {
    Homes.findById(homeId)
      .then((result) => {
        callback(null, result);
      })
      .catch((err) => {
        console.log(err);
      });
  },

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
