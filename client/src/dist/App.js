"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
// import React from 'react';
require("./App.css");
var react_router_dom_1 = require("react-router-dom");
var client_1 = require("@apollo/client");
var context_1 = require("@apollo/client/link/context");
var Header_1 = require("./Components/Header");
var Footer_1 = require("./Components/Footer");
var homepage_1 = require("./pages/homepage");
var login_1 = require("./pages/login");
var howto_1 = require("./pages/howto");
// import Highscore from './pages/highscore';
var signup_1 = require("./pages/signup");
var react_1 = require("@chakra-ui/react");
// import { ExternalLinkIcon } from '@chakra-ui/icons'
//  import chessboardPattern from '.assets/chessboard-pattern-light.png'
require("@fontsource/bungee");
var httpLink = client_1.createHttpLink({
    uri: '/graphql'
});
var authLink = context_1.setContext(function (_, _a) {
    var headers = _a.headers;
    var token = localStorage.getItem('id_token');
    return {
        headers: __assign(__assign({}, headers), { authorization: token ? "Bearer " + token : '' })
    };
});
var client = new client_1.ApolloClient({
    link: authLink.concat(httpLink),
    cache: new client_1.InMemoryCache()
});
function App() {
    return (React.createElement(react_1.Box, { className: "maincontainer" },
        React.createElement(client_1.ApolloProvider, { client: client },
            React.createElement(react_router_dom_1.BrowserRouter, null,
                React.createElement("div", { className: "flex-column justify-flex-start min-100-vh" },
                    React.createElement(Header_1["default"], null),
                    React.createElement("div", { className: "container" },
                        React.createElement(react_router_dom_1.Routes, null,
                            React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(homepage_1["default"], null) }),
                            React.createElement(react_router_dom_1.Route, { path: "/howto", element: React.createElement(howto_1["default"], null) }),
                            React.createElement(react_router_dom_1.Route, { path: "/login", element: React.createElement(login_1["default"], null) }),
                            React.createElement(react_router_dom_1.Route, { path: "/signup", element: React.createElement(signup_1["default"], null) }))),
                    React.createElement(Footer_1["default"], null))))));
}
exports["default"] = App;
;
