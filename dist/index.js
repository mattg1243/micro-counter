"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
let count = 0;
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
app.use((0, cors_1.default)());
app.get('/count', (req, res, next) => {
    res.status(200).json(count);
});
app.get('/add', (req, res, next) => {
    count++;
    res.status(200).json(count);
});
app.get('/sub', (req, res, next) => {
    count--;
    res.status(200).json(count);
});
app.listen(PORT, () => {
    console.log(`counter server listening on port ${PORT}`);
});
