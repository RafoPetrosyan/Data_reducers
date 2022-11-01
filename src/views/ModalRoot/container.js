import React from 'react';
import { connect } from 'react-redux';

import { hideModal } from 'state/modal/action';
import ModalRootComponent from './component';

const ModalRoot = (props) => <ModalRootComponent {...props} />;

const mapStateToProps = (state) => ({
    modalType: state.modal.modalType,
    modalProps: state.modal.modalProps,
});

const mapDispatchToProps = {
    onClose: hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalRoot);