"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const person_1 = require("../controllers/person");
const router = express_1.Router();
router.get('/:username', person_1.getPerson);
exports.default = router;
//# sourceMappingURL=person.js.map