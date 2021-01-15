const dbModel = require('../database/model.js');

module.exports = {
  getHomeInfo: ({ params }, res) => {
    const { homeId } = params;
    dbModel.getHomeInfo(homeId)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log('Error when getting home info from database: ', err);
      });
  },

  getAllHomes: (req, res) => {
    dbModel.getAllHomes()
      .then((homes) => {
        res.send(homes);
      })
      .catch((err) => {
        console.log('Error when getting all homes from database: ', err);
      });
  },
};
