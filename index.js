/*!
GPII Universal Personalization Framework GPII windows index

Copyright 2014 Lucendo Development Ltd.

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/gpii/universal/LICENSE.txt
*/

"use strict";

var fluid = require("universal");

fluid.module.register("gpii-windows", __dirname, require);

require("./gpii/node_modules/WindowsUtilities/WindowsUtilities.js");
require("./gpii/node_modules/registrySettingsHandler");
require("./gpii/node_modules/registryResolver");
require("./gpii/node_modules/spiSettingsHandler");

module.exports = fluid;
