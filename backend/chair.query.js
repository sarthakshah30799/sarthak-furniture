const db = require("./db");
const helper = require("./helper");
const config = require("./db.config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(`SELECT * FROM sarthak_chair_product LIMIT ?,?`, [
    offset,
    config.listPerPage,
  ]);
  console.log("rows ,", rows);
  const data = helper.emptyOrRows(rows);
  console.log("data", data);
  const meta = { page };
  console.log("meta ", meta);

  return {
    data,
    meta,
  };
}

async function createChair() {
  console.log("creating chair");
  const rows = await db.query(
    `INSERT INTO sarthak_chair_product(chair_id, chair_name, chair_img, chair_type, chair_back_material, chair_seat_material, chair_back_color, chair_seat_color, chair_headrest, chair_arm, chair_arm_material, chair_pushback, chair_height_adjustable, chair_stand, chair_wheel) VALUES ("chair.name","chair.name","chair.name","chair.name","chair.name","chair.name","chair.name","chair.name","chair.name","chair.name","chair.name","chair.name","chair.name","chair.name","chair.name")`
  );
  console.log("row data", rows);
  return rows;
  //   .then(() => {
  //     console.log("Successfully Created Chair");
  //   });
  //   if () {
  //     return "Successfully Created chair";
  //   }
}

module.exports = {
  getMultiple,
  createChair,
};
