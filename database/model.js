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

  getAllHomes: () => {
    Homes.find()
      .then((homes) => {
        console.log('made it here, homes: ', homes);
        return homes.floorplan;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
