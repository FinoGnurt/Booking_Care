import bcrypt from "bcrypt";
import db from "../models";

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

let createNewUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordFromBcrypt = await hashUserPassword(data.password);
      //   console.log("data", data);
      console.log("hash", hashPasswordFromBcrypt);

      await db.User.create({
        email: data.email,
        password: hashPasswordFromBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        gender: data.gender === "1" ? true : false,
        image: data.image,
        roleId: data.roleId,
        positionId: data.positionId,
      });

      resolve("ok! create a new user succeed!");
    } catch (e) {
      reject(e);
    }
  });
};

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      var hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = { createNewUser: createNewUser };
