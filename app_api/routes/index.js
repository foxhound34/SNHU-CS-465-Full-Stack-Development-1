const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");

router
  .route("/trips")
  .get(tripsController.tripsList)
  .post(auth, tripsController.tripsAddTrip);

router
  .route("/trips/:tripCode")
  .get(tripsController.tripsList)
  .put(auth, tripsController.tripsUpdateTrip);

router.route("/trips/:tripCode").get(tripsController.tripsFindCode);

module.exports = router;