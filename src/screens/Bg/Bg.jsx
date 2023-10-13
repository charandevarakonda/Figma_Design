import React from "react";
import { Picture } from "../../components/Picture";
import "./style.css";

export const Bg = () => {
  return (
    <div className="bg">
      <div className="overlap">
        <div className="overlap-group">
          <img
            className="find-partners-cas"
            alt="Find partners cas"
            src="https://c.animaapp.com/it6wbxkW/img/find-partners--cas--available-online@2x.png"
          />
          <p className="CONNECT-with-us">
            <span className="text-wrapper">CONNECT </span>
            <span className="span">
              with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance
              support
            </span>
          </p>
          <div className="div">
            <div className="search-button">
              <div className="overlap-group-2">
                <div className="text-wrapper-2">Search by name</div>
                <div className="overlap-2">
                  <div className="rectangle" />
                  <div className="text-wrapper-3">Search</div>
                </div>
              </div>
            </div>
            <img className="vector" alt="Vector" src="https://c.animaapp.com/it6wbxkW/img/vector-1.svg" />
            <div className="left">
              <div className="frame">
                <Picture className="picture-instance" />
              </div>
              <div className="picture-wrapper">
                <Picture className="design-component-instance-node" />
              </div>
              <div className="picture-instance-wrapper">
                <Picture className="picture-2" />
              </div>
            </div>
          </div>
        </div>
        <img className="top-bar" alt="Top bar" src="https://c.animaapp.com/it6wbxkW/img/top-bar@4x.png" />
      </div>
    </div>
  );
};
