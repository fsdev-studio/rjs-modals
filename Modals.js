import React, { useState } from 'react';
import './App.css';
import 'animate.css';

function Modals({
  top,
  left,
  right,
  width,
  height,
  background,
  animation,
  border,
  modalHeader,
  modalBody,
  show,
  setShowModal
}) {
  const s = show !== null || show !== undefined ? false : show;
  console.log(show); //const [showModal,setShowModal] = useState(show)

  return show ? /*#__PURE__*/React.createElement("div", {
    className: "shadow",
    style: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: top,
      left: left,
      right: right,
      width: width,
      height: height,
      background: background,
      zIndex: 10,
      animation: animation,
      animationDuration: '2s',
      border: border
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: '100%',
      background: 'white'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 1,
      right: 10,
      color: 'black',
      fontSize: 27
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setShowModal(false),
    style: {
      cursor: 'pointer'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'black',
      fontSize: 27,
      margin: 20
    }
  }, modalHeader)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: '100%',
      height: 'auto',
      marginTop: 10
    }
  }, modalBody)) : null;
}

export default Modals;