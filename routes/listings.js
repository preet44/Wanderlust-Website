const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const { default: mongoose } = require("mongoose");
const Listing = require("../models/listings.js");
const { isLoggedIn, isOwner, validateListings } = require("../middleware.js")
const listingController = require("../controller/listings.js")
const { storage } = require("../cloudConfig.js");
const multer = require("multer");
const upload = multer({ storage })


//index and create route//
router.route("/")
    .get(wrapAsync(listingController.index))
    .post(
        isLoggedIn,
        upload.single("listing[image]"),
        validateListings,
        wrapAsync(listingController.create));

//new route
router.get("/new", isLoggedIn, wrapAsync(listingController.renderNew));

//show and update route//
router.route("/:id")
    .get(wrapAsync(listingController.show))
    .put(
        isLoggedIn,
        isOwner,
        validateListings,
        upload.single("listing[image]"),
        wrapAsync(listingController.update))
    .delete(isLoggedIn, isOwner,
        wrapAsync(listingController.delete));

//edit route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.edit))


module.exports = router;



