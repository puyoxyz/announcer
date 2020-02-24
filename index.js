process.env['NODE_CONFIG_DIR'] = __dirname + '/config/';
process.env['NODE_ENV'] = 'production';
const config = require('./local/config.js');

if (config.configVersion == '3') {
    console.log("Config version correct, starting.")
} else {
    console.log("Your configuration file is either too old or missing! Please update it.")
    process.exit()
}


main = require('./main.js');