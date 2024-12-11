const captainModel = require("../models/captain.model");

module.exports.createCaptain = async ({
  firstname,
  lastname,
  password,
  color,
  plate,
  capacity,
  vehicleType,email
}) => {
  if (!email||
    !firstname ||
    !lastname ||
    !password ||
    !color ||
    !plate ||
    !capacity ||
    !vehicleType
  ) {
    throw new Error("All fields are required");
  }
  const captain = captainModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
    vehicle: {
      color,
      plate,
      capacity,
      vehicleType,
    },
  });
  return captain;
};
