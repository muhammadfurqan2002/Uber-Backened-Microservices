const express = require("express");
const { body } = require("express-validator");
const captainController = require("../controllers/captain.controller");
const authMiddleware=require("../middlewares/auth.middleware")
const router = express.Router();



router.post(
  "/register",
  [
    // Fullname validation
    body("fullname.firstname")
      .trim()
      .isLength({ min: 3 })
      .withMessage("Firstname must be at least 3 characters long")
      .notEmpty()
      .withMessage("Firstname is required"),

    // Email validation
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Please enter a valid email")
      .toLowerCase(),

    // Password validation
    body("password").notEmpty().withMessage("Password is required"),

    body("vehicle.color")
      .trim()
      .isLength({ min: 3 })
      .withMessage("Vehicle color must be at least 3 characters long")
      .notEmpty()
      .withMessage("Vehicle color is required"),

    body("vehicle.plate")
      .trim()
      .isLength({ min: 3 })
      .withMessage("Vehicle plate must be at least 3 characters long")
      .notEmpty()
      .withMessage("Vehicle plate is required"),

    body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("Vehicle capacity must be at least 1")
      .notEmpty()
      .withMessage("Vehicle capacity is required"),

    body("vehicle.vehicleType")
      .isIn(["car", "motorcycle", "auto"])
      .withMessage("Vehicle type must be car, motorcycle, or auto")
      .notEmpty()
      .withMessage("Vehicle type is required"),
  ],
  captainController.registerCaptain
);


router.post("/login", [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Please enter a valid email")
      .toLowerCase(),
  
    // Password validation
    body("password").notEmpty().withMessage("Password is required"),
  ],captainController.loginCaptain);


  router.get("/profile",authMiddleware.authCaptain,captainController.getCaptainProfile);
  router.get("/logout",authMiddleware.authCaptain,captainController.logoutCaptain);
module.exports = router;
