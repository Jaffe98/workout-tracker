"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/setup",{

/***/ "./components/ExerciseSetupForm.tsx":
/*!******************************************!*\
  !*** ./components/ExerciseSetupForm.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/supabaseClient */ \"./utils/supabaseClient.ts\");\n\nvar _s = $RefreshSig$();\n\n\nconst DAYS_OF_WEEK = [\n    'Monday',\n    'Tuesday',\n    'Wednesday',\n    'Thursday',\n    'Friday',\n    'Saturday',\n    'Sunday'\n];\nconst ExerciseSetupForm = ()=>{\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [days, setDays] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [exercises, setExercises] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ExerciseSetupForm.useEffect\": ()=>{\n            fetchExercises();\n        }\n    }[\"ExerciseSetupForm.useEffect\"], []);\n    const fetchExercises = async ()=>{\n        const { data, error } = await _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.from('exercise_list').select('*');\n        if (data) setExercises(data);\n        if (error) console.error('Error fetching exercises:', error);\n    };\n    const handleDayChange = (day)=>{\n        setDays((prevDays)=>prevDays.includes(day) ? prevDays.filter((d)=>d !== day) : [\n                ...prevDays,\n                day\n            ]);\n    };\n    const handleSubmit = async ()=>{\n        if (!name) {\n            alert('Please enter an exercise name.');\n            return;\n        }\n        const { error } = await _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.from('exercise_list').insert([\n            {\n                name,\n                days\n            }\n        ]);\n        if (error) {\n            console.error('Error adding exercise:', error);\n            alert('Failed to add exercise. Please try again.');\n        } else {\n            setName('');\n            setDays([]);\n            setSuccessMessage(\"\".concat(name, \" exercise added!\"));\n            setTimeout(()=>setSuccessMessage(''), 3000);\n            fetchExercises();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"setup-form\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"/\",\n                className: \"done-link\",\n                children: \"Done setting up exercises\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bgord\\\\OneDrive\\\\Coding Projects\\\\workout-tracker2\\\\components\\\\ExerciseSetupForm.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Setup New Exercise\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bgord\\\\OneDrive\\\\Coding Projects\\\\workout-tracker2\\\\components\\\\ExerciseSetupForm.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            successMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"success-message\",\n                children: successMessage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bgord\\\\OneDrive\\\\Coding Projects\\\\workout-tracker2\\\\components\\\\ExerciseSetupForm.tsx\",\n                lineNumber: 53,\n                columnNumber: 26\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Exercise Name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bgord\\\\OneDrive\\\\Coding Projects\\\\workout-tracker2\\\\components\\\\ExerciseSetupForm.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: name,\n                onChange: (e)=>setName(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bgord\\\\OneDrive\\\\Coding Projects\\\\workout-tracker2\\\\components\\\\ExerciseSetupForm.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Days\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bgord\\\\OneDrive\\\\Coding Projects\\\\workout-tracker2\\\\components\\\\ExerciseSetupForm.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"checkbox-group\",\n                children: DAYS_OF_WEEK.map((day)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"checkbox-label\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: days.includes(day),\n                                onChange: ()=>handleDayChange(day)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bgord\\\\OneDrive\\\\Coding Projects\\\\workout-tracker2\\\\components\\\\ExerciseSetupForm.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, undefined),\n                            day\n                        ]\n                    }, day, true, {\n                        fileName: \"C:\\\\Users\\\\bgord\\\\OneDrive\\\\Coding Projects\\\\workout-tracker2\\\\components\\\\ExerciseSetupForm.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bgord\\\\OneDrive\\\\Coding Projects\\\\workout-tracker2\\\\components\\\\ExerciseSetupForm.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSubmit,\n                className: \"submit-button\",\n                children: \"Add Exercise\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bgord\\\\OneDrive\\\\Coding Projects\\\\workout-tracker2\\\\components\\\\ExerciseSetupForm.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Existing Exercises\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bgord\\\\OneDrive\\\\Coding Projects\\\\workout-tracker2\\\\components\\\\ExerciseSetupForm.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: exercises.map((exercise)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            exercise.name,\n                            \" (\",\n                            exercise.days.join(', '),\n                            \")\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleDelete(exercise.id),\n                                className: \"delete-button\",\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bgord\\\\OneDrive\\\\Coding Projects\\\\workout-tracker2\\\\components\\\\ExerciseSetupForm.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, exercise.id, true, {\n                        fileName: \"C:\\\\Users\\\\bgord\\\\OneDrive\\\\Coding Projects\\\\workout-tracker2\\\\components\\\\ExerciseSetupForm.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bgord\\\\OneDrive\\\\Coding Projects\\\\workout-tracker2\\\\components\\\\ExerciseSetupForm.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bgord\\\\OneDrive\\\\Coding Projects\\\\workout-tracker2\\\\components\\\\ExerciseSetupForm.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ExerciseSetupForm, \"wlkCHzLBax9KWFEJ0QsU4PGjy8s=\");\n_c = ExerciseSetupForm;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExerciseSetupForm);\nvar _c;\n$RefreshReg$(_c, \"ExerciseSetupForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNTSxhQUFhSCxTQUFTSSxFQUFFO2dDQUFHckIsV0FBVTswQ0FBZ0I7Ozs7Ozs7dUJBRnJFaUIsU0FBU0ksRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQVE5QjtHQTNFTS9DO0tBQUFBO0FBNkVOLGlFQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYmdvcmRcXE9uZURyaXZlXFxDb2RpbmcgUHJvamVjdHNcXHdvcmtvdXQtdHJhY2tlcjJcXGNvbXBvbmVudHNcXEV4ZXJjaXNlU2V0dXBGb3JtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tICcuLi91dGlscy9zdXBhYmFzZUNsaWVudCc7XHJcblxyXG5jb25zdCBEQVlTX09GX1dFRUsgPSBbJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknLCAnU3VuZGF5J107XHJcblxyXG5jb25zdCBFeGVyY2lzZVNldHVwRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RheXMsIHNldERheXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcclxuICBjb25zdCBbc3VjY2Vzc01lc3NhZ2UsIHNldFN1Y2Nlc3NNZXNzYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gIGNvbnN0IFtleGVyY2lzZXMsIHNldEV4ZXJjaXNlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaEV4ZXJjaXNlcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hFeGVyY2lzZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKCdleGVyY2lzZV9saXN0Jykuc2VsZWN0KCcqJyk7XHJcbiAgICBpZiAoZGF0YSkgc2V0RXhlcmNpc2VzKGRhdGEpO1xyXG4gICAgaWYgKGVycm9yKSBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBleGVyY2lzZXM6JywgZXJyb3IpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURheUNoYW5nZSA9IChkYXk6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0RGF5cygocHJldkRheXMpID0+XHJcbiAgICAgIHByZXZEYXlzLmluY2x1ZGVzKGRheSkgPyBwcmV2RGF5cy5maWx0ZXIoKGQpID0+IGQgIT09IGRheSkgOiBbLi4ucHJldkRheXMsIGRheV1cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFuYW1lKSB7XHJcbiAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYW4gZXhlcmNpc2UgbmFtZS4nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ2V4ZXJjaXNlX2xpc3QnKS5pbnNlcnQoW3sgbmFtZSwgZGF5cyB9XSk7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRkaW5nIGV4ZXJjaXNlOicsIGVycm9yKTtcclxuICAgICAgYWxlcnQoJ0ZhaWxlZCB0byBhZGQgZXhlcmNpc2UuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXROYW1lKCcnKTtcclxuICAgICAgc2V0RGF5cyhbXSk7XHJcbiAgICAgIHNldFN1Y2Nlc3NNZXNzYWdlKGAke25hbWV9IGV4ZXJjaXNlIGFkZGVkIWApO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHNldFN1Y2Nlc3NNZXNzYWdlKCcnKSwgMzAwMCk7XHJcbiAgICAgIGZldGNoRXhlcmNpc2VzKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dXAtZm9ybVwiPlxyXG4gICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImRvbmUtbGlua1wiPkRvbmUgc2V0dGluZyB1cCBleGVyY2lzZXM8L2E+XHJcblxyXG4gICAgICA8aDI+U2V0dXAgTmV3IEV4ZXJjaXNlPC9oMj5cclxuXHJcbiAgICAgIHtzdWNjZXNzTWVzc2FnZSAmJiA8ZGl2IGNsYXNzTmFtZT1cInN1Y2Nlc3MtbWVzc2FnZVwiPntzdWNjZXNzTWVzc2FnZX08L2Rpdj59XHJcblxyXG4gICAgICA8bGFiZWw+RXhlcmNpc2UgTmFtZTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG5cclxuICAgICAgPGxhYmVsPkRheXM8L2xhYmVsPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrYm94LWdyb3VwXCI+XHJcbiAgICAgICAge0RBWVNfT0ZfV0VFSy5tYXAoKGRheSkgPT4gKFxyXG4gICAgICAgICAgPGxhYmVsIGtleT17ZGF5fSBjbGFzc05hbWU9XCJjaGVja2JveC1sYWJlbFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17ZGF5cy5pbmNsdWRlcyhkYXkpfSBvbkNoYW5nZT17KCkgPT4gaGFuZGxlRGF5Q2hhbmdlKGRheSl9IC8+XHJcbiAgICAgICAgICAgIHtkYXl9XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzdWJtaXQtYnV0dG9uXCI+QWRkIEV4ZXJjaXNlPC9idXR0b24+XHJcblxyXG4gICAgICA8aDM+RXhpc3RpbmcgRXhlcmNpc2VzPC9oMz5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtleGVyY2lzZXMubWFwKChleGVyY2lzZSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17ZXhlcmNpc2UuaWR9PlxyXG4gICAgICAgICAgICB7ZXhlcmNpc2UubmFtZX0gKHtleGVyY2lzZS5kYXlzLmpvaW4oJywgJyl9KVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShleGVyY2lzZS5pZCl9IGNsYXNzTmFtZT1cImRlbGV0ZS1idXR0b25cIj5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhlcmNpc2VTZXR1cEZvcm07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3VwYWJhc2UiLCJEQVlTX09GX1dFRUsiLCJFeGVyY2lzZVNldHVwRm9ybSIsIm5hbWUiLCJzZXROYW1lIiwiZGF5cyIsInNldERheXMiLCJzdWNjZXNzTWVzc2FnZSIsInNldFN1Y2Nlc3NNZXNzYWdlIiwiZXhlcmNpc2VzIiwic2V0RXhlcmNpc2VzIiwiZmV0Y2hFeGVyY2lzZXMiLCJkYXRhIiwiZXJyb3IiLCJmcm9tIiwic2VsZWN0IiwiY29uc29sZSIsImhhbmRsZURheUNoYW5nZSIsImRheSIsInByZXZEYXlzIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJkIiwiaGFuZGxlU3VibWl0IiwiYWxlcnQiLCJpbnNlcnQiLCJzZXRUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiYSIsImhyZWYiLCJoMiIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJtYXAiLCJjaGVja2VkIiwiYnV0dG9uIiwib25DbGljayIsImgzIiwidWwiLCJleGVyY2lzZSIsImxpIiwiam9pbiIsImhhbmRsZURlbGV0ZSIsImlkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ExerciseSetupForm.tsx\n"));

/***/ })

});