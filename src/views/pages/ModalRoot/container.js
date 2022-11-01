import React from 'react';
import { connect } from 'react-redux';

import { hideModal } from 'state/modal/action';
import ModalRootComponent from 'views/pages/ModalRoot/component';

const ModalRoot = (props) => <ModalRootComponent {...props} />;
// class ModalRoot extends React.Component {
//     render() {
//         return <ModalRootComponent {...this.props} />;
//     }
// }

const mapStateToProps = (state) => ({
    modalType: state.modalReducer.modalType,
    modalProps: state.modalReducer.modalProps,
});

const mapDispatchToProps = {
    onClose: hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalRoot);