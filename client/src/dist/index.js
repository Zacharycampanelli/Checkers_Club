"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
require("./index.css");
var App_1 = require("./App");
var reportWebVitals_1 = require("./reportWebVitals");
var react_2 = require("@chakra-ui/react");
var theme = react_2.extendTheme({
    semanticTokens: {
        colors: {
            white: '#fff',
            black: '#000',
            red: '#c41f12',
            grey: '#9c9c9c'
        }
    },
    components: {
        Button: {
            baseStyle: {
                bg: '',
                color: 'black',
                fontWeight: 'bold'
            },
            sizes: {
                xl: {
                    h: '56px',
                    fontSize: 'lg',
                    px: '320px'
                }
            }
        }
    }
});
var root = client_1["default"].createRoot(document.getElementById('root'));
root.render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(react_2.ChakraProvider, { theme: theme },
        react_1["default"].createElement(App_1["default"], null))));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals_1["default"]();
