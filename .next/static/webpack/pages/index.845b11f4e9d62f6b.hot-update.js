"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/Components/ComplexComponents/ResultSummary.jsx":
/*!************************************************************!*\
  !*** ./src/Components/ComplexComponents/ResultSummary.jsx ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_es_checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/checkbox/Checkbox */ \"./node_modules/antd/es/checkbox/Checkbox.js\");\n/* harmony import */ var _BasicComponents_ExpandButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BasicComponents/ExpandButton */ \"./src/Components/BasicComponents/ExpandButton.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ResultSummary = (param)=>{\n    let { title, content } = param;\n    _s();\n    // 상태 관리: 내용이 보이는지 여부를 관리\n    const [isContentVisible, setIsContentVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // 내용 보이기/숨기기 토글 함수\n    const toggleContentVisibility = ()=>{\n        console.log(\"버튼이 눌립니다.\");\n        setIsContentVisible((prevState)=>!prevState);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: '100%',\n            height: '100%',\n            padding: 20,\n            background: '#EAEEFD',\n            borderRadius: 6,\n            flexDirection: 'column',\n            justifyContent: 'flex-end',\n            alignItems: 'flex-end',\n            gap: 14,\n            display: 'inline-flex'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    alignSelf: 'stretch',\n                    justifyContent: 'flex-start',\n                    alignItems: 'flex-start',\n                    gap: 16,\n                    display: 'inline-flex'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        flex: '1 1 0',\n                        height: 23,\n                        justifyContent: 'flex-start',\n                        alignItems: 'center',\n                        gap: 8,\n                        display: 'flex'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                flex: '1 1 0',\n                                color: 'black',\n                                fontSize: 20,\n                                fontFamily: 'Pretendard',\n                                fontWeight: '500',\n                                lineHeight: 23,\n                                wordWrap: 'break-word'\n                            },\n                            children: [\n                                title,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/songye/Documents/scriptly/src/Components/ComplexComponents/ResultSummary.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                justifyContent: 'flex-start',\n                                alignItems: 'center',\n                                gap: 10,\n                                display: 'flex'\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BasicComponents_ExpandButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    onClick: toggleContentVisibility\n                                }, void 0, false, {\n                                    fileName: \"/Users/songye/Documents/scriptly/src/Components/ComplexComponents/ResultSummary.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/songye/Documents/scriptly/src/Components/ComplexComponents/ResultSummary.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/songye/Documents/scriptly/src/Components/ComplexComponents/ResultSummary.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/songye/Documents/scriptly/src/Components/ComplexComponents/ResultSummary.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/songye/Documents/scriptly/src/Components/ComplexComponents/ResultSummary.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            isContentVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    alignSelf: 'stretch',\n                    color: 'black',\n                    fontSize: '16px',\n                    fontFamily: 'Pretendard',\n                    fontWeight: '400',\n                    lineHeight: '29px',\n                    wordWrap: 'break-word'\n                },\n                children: [\n                    content,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/songye/Documents/scriptly/src/Components/ComplexComponents/ResultSummary.jsx\",\n                lineNumber: 82,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/songye/Documents/scriptly/src/Components/ComplexComponents/ResultSummary.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ResultSummary, \"zBxmocM25HseeOseaj7ocSgoKaw=\");\n_c = ResultSummary;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResultSummary);\nvar _c;\n$RefreshReg$(_c, \"ResultSummary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9Db21wbGV4Q29tcG9uZW50cy9SZXN1bHRTdW1tYXJ5LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEI7QUFDdUI7QUFDVTtBQUMxQjtBQUVqQyxNQUFNSSxnQkFBZ0I7UUFBQyxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRTs7SUFDdkMseUJBQXlCO0lBQ3pCLE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR0wsK0NBQVFBLENBQUM7SUFFekQsbUJBQW1CO0lBQ25CLE1BQU1NLDBCQUEwQjtRQUM5QkMsUUFBUUMsR0FBRyxDQUFDO1FBQ1pILG9CQUFvQkksQ0FBQUEsWUFBYSxDQUFDQTtJQUNwQztJQUVBLHFCQUNFLDhEQUFDQztRQUNDQyxPQUFPO1lBQ0xDLE9BQU87WUFDUEMsUUFBUTtZQUNSQyxTQUFTO1lBQ1RDLFlBQVk7WUFDWkMsY0FBYztZQUNkQyxlQUFlO1lBQ2ZDLGdCQUFnQjtZQUNoQkMsWUFBWTtZQUNaQyxLQUFLO1lBQ0xDLFNBQVM7UUFDWDs7MEJBR0EsOERBQUNYO2dCQUNDQyxPQUFPO29CQUNMVyxXQUFXO29CQUNYSixnQkFBZ0I7b0JBQ2hCQyxZQUFZO29CQUNaQyxLQUFLO29CQUNMQyxTQUFTO2dCQUNYOzBCQUVBLDRFQUFDWDtvQkFDQ0MsT0FBTzt3QkFDTFksTUFBTTt3QkFDTlYsUUFBUTt3QkFDUkssZ0JBQWdCO3dCQUNoQkMsWUFBWTt3QkFDWkMsS0FBSzt3QkFDTEMsU0FBUztvQkFDWDs7c0NBR0EsOERBQUNYOzRCQUNDQyxPQUFPO2dDQUNMWSxNQUFNO2dDQUNOQyxPQUFPO2dDQUNQQyxVQUFVO2dDQUNWQyxZQUFZO2dDQUNaQyxZQUFZO2dDQUNaQyxZQUFZO2dDQUNaQyxVQUFVOzRCQUNaOztnQ0FFQzNCO2dDQUFNOzs7Ozs7O3NDQUdULDhEQUFDUTs0QkFDQ0MsT0FBTztnQ0FDTE8sZ0JBQWdCO2dDQUNoQkMsWUFBWTtnQ0FDWkMsS0FBSztnQ0FDTEMsU0FBUzs0QkFDWDs7OENBRUEsOERBQUN0QixxRUFBWUE7b0NBQUMrQixTQUFTeEI7Ozs7Ozs4Q0FDdkIsOERBQUNSLGlFQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1kTSxrQ0FDQyw4REFBQ007Z0JBQ0NDLE9BQU87b0JBQ0xXLFdBQVc7b0JBQ1hFLE9BQU87b0JBQ1BDLFVBQVU7b0JBQ1ZDLFlBQVk7b0JBQ1pDLFlBQVk7b0JBQ1pDLFlBQVk7b0JBQ1pDLFVBQVU7Z0JBQ1o7O29CQUVDMUI7b0JBQVE7Ozs7Ozs7Ozs7Ozs7QUFLbkI7R0E1Rk1GO0tBQUFBO0FBOEZOLGlFQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvc29uZ3llL0RvY3VtZW50cy9zY3JpcHRseS9zcmMvQ29tcG9uZW50cy9Db21wbGV4Q29tcG9uZW50cy9SZXN1bHRTdW1tYXJ5LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ2FudGQvZXMvY2hlY2tib3gvQ2hlY2tib3gnO1xuaW1wb3J0IEV4cGFuZEJ1dHRvbiBmcm9tICcuLi9CYXNpY0NvbXBvbmVudHMvRXhwYW5kQnV0dG9uJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBSZXN1bHRTdW1tYXJ5ID0gKHsgdGl0bGUsIGNvbnRlbnQgfSkgPT4ge1xuICAvLyDsg4Htg5wg6rSA66asOiDrgrTsmqnsnbQg67O07J2064qU7KeAIOyXrOu2gOulvCDqtIDrpqxcbiAgY29uc3QgW2lzQ29udGVudFZpc2libGUsIHNldElzQ29udGVudFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIOuCtOyaqSDrs7TsnbTquLAv7Iio6riw6riwIO2GoOq4gCDtlajsiJhcbiAgY29uc3QgdG9nZ2xlQ29udGVudFZpc2liaWxpdHkgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCLrsoTtirzsnbQg64iM66a964uI64ukLlwiKVxuICAgIHNldElzQ29udGVudFZpc2libGUocHJldlN0YXRlID0+ICFwcmV2U3RhdGUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIHBhZGRpbmc6IDIwLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnI0VBRUVGRCcsXG4gICAgICAgIGJvcmRlclJhZGl1czogNixcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxuICAgICAgICBnYXA6IDE0LFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Lyog7KCc66qp6rO8IOyytO2BrOuwleyKpCDrsI8g7IOB7YOcIO2RnOyLnCAqL31cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICAgICAgICBnYXA6IDE2LFxuICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZmxleDogJzEgMSAwJyxcbiAgICAgICAgICAgIGhlaWdodDogMjMsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICBnYXA6IDgsXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHsvKiDsoJzrqqkgKi99XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZmxleDogJzEgMSAwJyxcbiAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogJ1ByZXRlbmRhcmQnLFxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnNTAwJyxcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogMjMsXG4gICAgICAgICAgICAgIHdvcmRXcmFwOiAnYnJlYWstd29yZCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aXRsZX0gey8qIHRpdGxlIHByb3Ag7IKs7JqpICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiDsg4Htg5wg7ZGc7IucICovfVxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICBnYXA6IDEwLFxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxFeHBhbmRCdXR0b24gb25DbGljaz17dG9nZ2xlQ29udGVudFZpc2liaWxpdHl9IC8+XG4gICAgICAgICAgICA8Q2hlY2tib3ggLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIOuCtOyaqSDthqDquIAgKi99XG4gICAgICB7aXNDb250ZW50VmlzaWJsZSAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnUHJldGVuZGFyZCcsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiAnNDAwJyxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcyOXB4JyxcbiAgICAgICAgICAgIHdvcmRXcmFwOiAnYnJlYWstd29yZCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjb250ZW50fSB7LyogY29udGVudCBwcm9wIOyCrOyaqSAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0U3VtbWFyeTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNoZWNrYm94IiwiRXhwYW5kQnV0dG9uIiwidXNlU3RhdGUiLCJSZXN1bHRTdW1tYXJ5IiwidGl0bGUiLCJjb250ZW50IiwiaXNDb250ZW50VmlzaWJsZSIsInNldElzQ29udGVudFZpc2libGUiLCJ0b2dnbGVDb250ZW50VmlzaWJpbGl0eSIsImNvbnNvbGUiLCJsb2ciLCJwcmV2U3RhdGUiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZyIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZ2FwIiwiZGlzcGxheSIsImFsaWduU2VsZiIsImZsZXgiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0Iiwid29yZFdyYXAiLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/ComplexComponents/ResultSummary.jsx\n"));

/***/ })

});