const { sample } = require("../helpers");

module.exports = () => {
  return (
    sample([
      "Planned Parenthood in ",
      "At a Planned Parenthood at ",
      "They got it at Planned Parenthood at ",
      "It was at ",
      "At the clinic in ",
      "The clinic is ",
      "",
      "Clinic is located at ",
      "The address to the clinic was ",
      "We were in a back alley in ",
    ]) +
    sample([
      "San Antonio",
      "Lower Rio Grande Valley",
      "Harlingen",
      "Northeast",
      "Southeast",
      `Brownsville 870 E. Alton Gloor Blvd. Brownsville, TX 78526`,
      `Harlingen 712 North 77 Sunshine Strip, Ste. 18 Harlingen, TX  78550`,
      `San Pedro (Abortion & Primary Care) 921 San Pedro Ave. Ste. 150 San Antonio, TX 78212`,
      `Northeast 11514 Perrin-Beitel Rd. San Antonio, TX 78217`,
      `Marbach 8725 Marbach Rd. San Antonio, TX 78227`,
      `Southeast 7022 S. New Braunfels Ave. Ste. 103 San Antonio, TX 78223`,
      `Babcock (Medical Center) 2140 Babcock Rd. San Antonio, TX 78229`,
    ])
  );
};
