'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.store = exports.toast = undefined;var _store = require('./store');var _store2 = _interopRequireDefault(_store);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var store = new _store2.default();
var id = 0;

function toast(item, cb) {
    id += 1;
    store.add(Object.assign({ id: id, onClose: cb }, item));
}exports.

toast = toast;exports.store = store;