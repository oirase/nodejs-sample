"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = 3000;
var test = 'test';
app.get('/', function (req, res) {
    var data = { message: 'Hello' };
    res.send(data);
});
app.listen(port, function () {
    console.log('server start');
});
