"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = require("../controllers/path");
const router = express_1.Router();
router.get('/:startId/:endId/:accessibility', path_1.getPath);
exports.default = router;
//# sourceMappingURL=path.js.map