"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const person_1 = require("../controllers/person");
const path_1 = require("../controllers/path");
const router = express_1.Router();
router.get('/people/:username', person_1.getPerson);
router.get('/path/:startId/:endId/:accessibility', path_1.getPath);
exports.default = router;
//# sourceMappingURL=routes.js.map