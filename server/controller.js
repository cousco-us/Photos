const dbModel = require('../database/model.js');

module.exports = {
  getHomeInfo: ({ params }, res) => {
    const { homeId } = params;
    dbModel.getHomeInfo(homeId)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        console.log('Error when getting home info from database: ', err);
      });
  },

  /* ------------------- The Following are for dev purposes only ----------------- */
  getAllHomes: (req, res) => {
    dbModel.getAllHomes()
      .then((homes) => {
        console.log('homes: ', homes.length);
        res.status(200).send(homes);
      })
      .catch((err) => {
        console.log('Error when getting all homes from database: ', err);
      });
  },

  deleteAll: (req, res) => {
    dbModel.deleteAll()
      .then(() => {
        res.status(200).send('Successfully cleared db');
      })
      .catch((err) => {
        console.log('Error when deleting all homes from database: ', err);
      });
  },
};
