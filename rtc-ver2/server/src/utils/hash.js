const bcrypt = require("bcrypt");

const createHash =  async function (passwd) {
    return await bcrypt.hash(passwd, 10);
}

const compareHash = function(passwd, hash){
    return bcrypt.compareSync(passwd, hash)
}

module.exports = { createHash , compareHash};