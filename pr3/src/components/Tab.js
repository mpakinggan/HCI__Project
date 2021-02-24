import React, { Component } from "react";
import './style.css';

function Tab (props) {

  const addstyle = () => {
    if(props.out.id == props.activeTab) {
      return {color: "#333", backgroundColor: "white", textalign: "center", padding: "14px 16px"}
    } else {
      return {display: "block", color: "black",textalign: "center", padding: "14px 16px"}
    }
  };

  console.log(props)
  return (
    <div style = {addstyle()} onClick = {props.ctab.bind(this,props.out.id)} > {props.out.title} </div>
  );
}

export default Tab;