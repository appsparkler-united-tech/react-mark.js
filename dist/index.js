'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var MarkJS$1 = require('mark.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var MarkJS__default = /*#__PURE__*/_interopDefaultLegacy(MarkJS$1);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/**
 * @public
 */
var Marker = function (_a) {
    var _b = _a.as, as = _b === void 0 ? "div" : _b, _c = _a.mark, mark = _c === void 0 ? "" : _c, _d = _a.options, options = _d === void 0 ? {} : _d, children = _a.children, _e = _a.unmarkOptions, unmarkOptions = _e === void 0 ? {} : _e, elementProps = _a.elementProps;
    var markerRef = react.useRef(null);
    var _f = react.useState(), markInstance = _f[0], setMarkInstance = _f[1];
    react.useEffect(function () {
        if (markerRef.current) {
            var markInstance_1 = new MarkJS__default["default"](markerRef.current);
            setMarkInstance(markInstance_1);
        }
    }, []);
    react.useEffect(function () {
        if (markInstance) {
            Promise.resolve(markInstance.unmark(unmarkOptions)).then(function () {
                markInstance.mark(mark, options);
            });
        }
    }, [mark, markInstance, options, unmarkOptions]);
    return react.createElement(as, __assign({ ref: markerRef, children: children }, elementProps));
};

/**
 * @public
 */
function RangesMarker(_a) {
    var _b = _a.as, as = _b === void 0 ? "div" : _b, _c = _a.mark, ranges = _c === void 0 ? [] : _c, _d = _a.options, options = _d === void 0 ? {} : _d, _e = _a.unmarkOptions, unmarkOptions = _e === void 0 ? {} : _e, children = _a.children, elementProps = _a.elementProps;
    var markerRef = react.useRef(null);
    var _f = react.useState(), markJSInstance = _f[0], setMarkJSInstance = _f[1];
    react.useEffect(function () {
        if (markerRef.current) {
            var markJSInstance_1 = new MarkJS__default["default"](markerRef.current);
            setMarkJSInstance(markJSInstance_1);
        }
    }, []);
    react.useEffect(function () {
        if (markJSInstance) {
            Promise.resolve(markJSInstance.unmark(unmarkOptions)).then(function () {
                markJSInstance.markRanges(ranges, options);
            });
        }
    }, [ranges, markJSInstance, options, unmarkOptions]);
    return react.createElement(as, __assign({ ref: markerRef, children: children }, elementProps));
}

/**
 * @public
 */
function RegExpMarker(_a) {
    var _b = _a.mark, mark = _b === void 0 ? new RegExp("") : _b, _c = _a.options, options = _c === void 0 ? {} : _c, _d = _a.as, as = _d === void 0 ? "div" : _d, _e = _a.unmarkOptions, unmarkOptions = _e === void 0 ? {} : _e, children = _a.children, elementProps = _a.elementProps;
    var markerRef = react.useRef(null);
    var _f = react.useState(), markerInstance = _f[0], setMarkerInstance = _f[1];
    react.useEffect(function () {
        if (markerInstance) {
            Promise.resolve(markerInstance.unmark(unmarkOptions)).then(function () {
                markerInstance.markRegExp(mark, options);
            });
        }
        else {
            if (markerRef.current) {
                var markerInstance_1 = new MarkJS__default["default"](markerRef.current);
                setMarkerInstance(markerInstance_1);
            }
        }
    }, [mark, markerInstance, options, unmarkOptions]);
    return react.createElement(as, __assign({ ref: markerRef, children: children }, elementProps));
}

/* eslint-disable */
var MarkJS = /** @class */ (function () {
    function MarkJS(el) {
    }
    MarkJS.prototype.mark = function (str, options) { };
    MarkJS.prototype.markRanges = function (ranges, options) { };
    MarkJS.prototype.markRegExp = function (regExp, options) { };
    MarkJS.prototype.unmark = function (markOptions) { };
    return MarkJS;
}());

/**
 * @public
 */
var useMarker = function () {
    var markerRef = react.useRef(null);
    var _a = react.useState(), marker = _a[0], setMarker = _a[1];
    react.useEffect(function () {
        if (markerRef.current) {
            var markJSInstance = new MarkJS__default["default"](markerRef.current);
            setMarker(markJSInstance);
        }
    }, []);
    return {
        marker: marker,
        markerRef: markerRef,
    };
};

exports.MarkJS = MarkJS;
exports.Marker = Marker;
exports.RangesMarker = RangesMarker;
exports.RegExpMarker = RegExpMarker;
exports.useMarker = useMarker;
//# sourceMappingURL=index.js.map
