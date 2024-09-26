"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var react_1 = require("@emotion/react");
var material_1 = require("@mui/material");
var App = function () {
    var myData = ["名前:河野公平", "年齢:22", "趣味:Splatoon",];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_1.Global, { styles: (0, react_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          body {\n            background-color: #666;\n            margin: 0;\n            padding: 80px;\n          }\n        "], ["\n          body {\n            background-color: #666;\n            margin: 0;\n            padding: 80px;\n          }\n        "]))) }), (0, jsx_runtime_1.jsxs)(material_1.Stack, { spacing: 4, sx: { display: "flex", flexDirection: "column", alignItems: "center" }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { sx: { fontSize: "64px", color: "#fff" }, children: "My Profile" }), (0, jsx_runtime_1.jsx)(material_1.Container, { sx: { backgroundColor: "#111", maxWidth: "500px", borderRadius: "10px", padding: "32px" }, children: (0, jsx_runtime_1.jsx)(material_1.Stack, { spacing: 2, children: myData.map(function (data, index) { return ((0, jsx_runtime_1.jsx)(material_1.Typography, { sx: { color: "#fff" }, children: data }, index)); }) }) })] })] }));
};
exports.App = App;
var templateObject_1;
