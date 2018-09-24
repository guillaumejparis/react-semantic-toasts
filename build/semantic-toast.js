'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _semanticUiReact = require('semantic-ui-react');

require('semantic-ui-css/components/message.min.css');
require('semantic-ui-css/components/header.min.css');

var _withTransition = require('./with-transition');var _withTransition2 = _interopRequireDefault(_withTransition);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var icons = {
    info: 'announcement',
    success: 'checkmark',
    error: 'remove',
    warning: 'warning circle' };


function SemanticToast(props) {var
    type = props.type,title = props.title,description = props.description,onClose = props.onClose;
    var icon = props.icon || icons[props.type];

    return (
        _react2.default.createElement(_semanticUiReact.Message, {
            onDismiss: onClose,
            info: type === 'info',
            success: type === 'success',
            error: type === 'error',
            warning: type === 'warning',
            header: title,
            content: description,
            icon: icon,
            floating: true }));


}

SemanticToast.propTypes = {
    type: _propTypes2.default.oneOf(['info', 'success', 'error', 'warning']).isRequired,
    title: _propTypes2.default.string.isRequired,
    description: _propTypes2.default.string.isRequired,
    icon: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]).isRequired,
    onClose: _propTypes2.default.func };


SemanticToast.defaultProps = {
    onClose: undefined };exports.default =


(0, _withTransition2.default)(SemanticToast);