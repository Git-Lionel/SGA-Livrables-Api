require("dotenv").config({ path: "./config/.env" });

const ActiveDirectory = require("activedirectory");

const config = {
  url: process.env.LDAP_URL,
  baseDN: process.env.LDAP_BASEDN,
  username: process.env.LDAP_LOGIN,
};
const ldap = new ActiveDirectory(config);

module.exports = ldap;
