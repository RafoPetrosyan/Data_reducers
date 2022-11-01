import React from 'react';
import {Modal} from "antd";
import PropTypes from "prop-types";

const ExampleModal = ({ onClose, title }) => (
    <Modal title={title} onCancel={onClose} open>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Modal>
);

ExampleModal.defaultProps = {
    onClose: undefined,
    title: '',
};

ExampleModal.propTypes = {
    onClose: PropTypes.func,
    title: PropTypes.string,
};

export default ExampleModal;