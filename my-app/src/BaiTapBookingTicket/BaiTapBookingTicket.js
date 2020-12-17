import React, { Component } from "react";
import HangGhe from "./HangGhe";
import ThongTinDatGhe from "./ThongTinDatGhe";
import "./BaiTapBookingTicket.css";

export default class BaiTapBookingTicket extends Component {
  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url(./img/bgmovie.jpg)",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 display-4 text-warning text-center">
                <HangGhe />
                <div className="mt-5" style={{ fontSize: "25px" }}>
                  Màn hình
                </div>
                <div
                  className="d-flex flex-row mt-1"
                  style={{ justifyContent: "center" }}
                >
                  <div className="screen"></div>
                </div>
              </div>

              <div className="col-4 text-light">
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
