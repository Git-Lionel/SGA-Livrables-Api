const router = require("express").Router();

const ldap = require("../ldapConf");

// LDAP Verification Login Pass
router.post("/postLDAP_auth", (req, res) => {
  const username = req.body.userLogin + "@sogeclairis.fr";
  const password = req.body.userPassword;

  ldap.authenticate(username, password, (err, auth) => {
    if (err) {
      console.log("ERROR LDAP: " + JSON.stringify(err));
      res.send(false);
    }

    if (auth) {
      console.log("Authenticated!", auth);
      res.send(auth);
    }
  });
});

module.exports = router;
