"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const config_1 = __importDefault(require("./config/config"));
const routes_1 = __importDefault(require("./routes/routes"));
const mongoose_1 = __importDefault(require("mongoose"));
const launch_db_1 = require("./db/launch-db");
const path_1 = __importDefault(require("path"));
mongoose_1.default
    .connect(config_1.default.database.connectionString, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
    console.log('Database connected');
    launch_db_1.createTreeNodes();
})
    .catch(err => console.log(err));
exports.default = mongoose_1.default.connection;
// createVerticals()
const app = express_1.default();
app.use(body_parser_1.json());
app.use(cors_1.default());
const limiter = express_rate_limit_1.default({
    windowMs: 1 * 30 * 1000,
    max: 10
});
app.use('/api', limiter);
app.use('/api', routes_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'build')));
app.get('/*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'build', 'index.html'));
});
app.listen(config_1.default.server.port);
//# sourceMappingURL=app.js.map