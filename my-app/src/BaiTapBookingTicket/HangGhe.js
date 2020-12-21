import React, { Component } from "react";

export default class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disable = false;
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disable = true;
      }

      return (
        <button key={index} className={`ghe ${cssGheDaDat}`} disabled={disable}>
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return <button className="rowNumber"> {hang.soGhe}</button>;
    });
  };

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div className="ml-3">
          {this.props.hangGhe.hang}
          {this.renderSoHang()}
        </div>
      );
    } else
      return (
        <div>
          {this.props.hangGhe.hang} {this.renderGhe()}
        </div>
      );
  };

  render() {
    return (
      <div
        className="text-left mt-2"
        style={{ fontSize: "25px", marginLeft: "120px" }}
      >
        {this.renderHangGhe()}
      </div>
    );
  }
}
