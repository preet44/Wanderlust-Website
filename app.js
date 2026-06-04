
if(process.env.NODE_ENV != "production"){
require("dotenv").config();
};
console.log(process.env.SECRET);

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore=require("connect-mongo").default;
console.log(MongoStore);

const flash=require("connect-flash");
const path = require("path");
const methodOverride = require("method-override");
const ExpressError = require("./utils/ExpressError");

const listingsRouter = require("./routes/listings.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const User=require("./models/user.js");

const passport = require("passport");
const LocalStrategy = require("passport-local");

const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


const db_url=process.env.ATLASDB_URL;
main()
    .then(() => { console.log("connected successfully") })
    .catch((err) => { console.log(err) });

async function main() {
    await mongoose.connect(db_url);
};


const store = MongoStore.create({
    mongoUrl: db_url,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600,
});


store.on("error",(err)=>{
    console.log("ERROR IN SESSION STORE",err);
});
//express sessoin
const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
       httpOnly:true,
    },
}

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
     res.locals.error=req.flash("error");
     res.locals.currUser=req.user;
    console.log(res.locals.success);
    next();
})

app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);




app.listen(8080, () => {
    console.log("app is listening");
});
app.get("/", (req, res) => {
    res.redirect("/listings");
});

app.use((req, res, next) => {
    next(new ExpressError(404, "Page not Found"));
})
//error handler
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "something went wrong" } = err;
    res.status(statusCode).render("error.ejs", { err });
});


