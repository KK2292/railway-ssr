"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var react_1 = require("react");
var client_1 = __importDefault(require("react-dom/client"));
var App_1 = require("./App");
var react_router_dom_1 = require("react-router-dom");
client_1.default.createRoot(document.getElementById("root")).render((0, jsx_runtime_1.jsx)(react_1.StrictMode, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { basename: "/railway-ssr", children: (0, jsx_runtime_1.jsx)(App_1.App, {}) }) }));
