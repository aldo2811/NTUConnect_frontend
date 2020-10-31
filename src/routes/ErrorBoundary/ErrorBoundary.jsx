import React from "react";
import { connect } from "react-redux";

import Modal from "../../components/Modal";

import { selectErrorJS } from "../../selectors/error.selector";

import * as errorActions from "../../actions/error.action";

const ErrorBoundary = ({ error, resetError, children }) => {
  const onCloseModal = () => {
    resetError();
  };

  return (
    <>
      {error.message && (
        <Modal title="Error" onClose={onCloseModal}>
          {error.message}
        </Modal>
      )}
      {children}
    </>
  );
};

const mapStateToProps = (state) => {
  const error = selectErrorJS(state);
  return { error };
};

const mapDispatchToProps = {
  resetError: errorActions.resetError,
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);
