const Listing = require("../models/listings");
const cloudinary = require("cloudinary").v2;

const { CloudinaryStorage } =
    require("multer-storage-cloudinary");
const { populate } = require("../models/review");


module.exports.renderNew = async (req, res, next) => {
    res.render("listings/new.ejs");
};


module.exports.edit = async (req, res, next) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested does not exist!");
        res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");

    res.render("listings/edit.ejs", { listing, originalImageUrl })
};


module.exports.index = async (req, res) => {
    let query = {};

    if (req.query.category) {
        query.category = req.query.category;
    }

    if (req.query.search) {
        query.location = {
            $regex: req.query.search,
            $options: "i"
        };
    }
    const allListings = await Listing.find(query);
    res.render("listings/index.ejs", { allListings });
};


module.exports.create = async (req, res, next) => {

    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.image = { url, filename };
    console.log(req.user);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "new listing created!");
    console.log(newListing);
    res.redirect("/listings");
}

module.exports.show = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "review",
            populate: {
                path: "author",
            }
        })
        .populate("owner")
    console.log(listing.owner);
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", { listing });
}


module.exports.update = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if (typeof req.file != "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }
    req.flash("success", "listing Updated!");
    res.redirect(`/listings/${id}`);
};


module.exports.delete = async (req, res) => {
    let { id } = req.params;
    let deletedListings = await Listing.findByIdAndDelete(id);
    console.log(deletedListings);
    req.flash("success", "listing deleted");
    res.redirect("/listings");
}


