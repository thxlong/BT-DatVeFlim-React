import React, { Component, Fragment } from "react";
import HangGhe from "./HangGhe";
import ThongTinDatGhe from "./ThongTinDatGhe";
import "./BaiTapBookingTicket.css";
import danhSachGheData from "../Data/danhSachGhe.json";

export default class BaiTapBookingTicket extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <Fragment key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </Fragment>
      );
    });
  };

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
          // backgroundRepeat: "no-repeat",
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
              <div className="col-8 text-center text-light">
                <span className="display-4">Hàng ghế</span>
                <div
                  className="mt-5 text-warning "
                  style={{ fontSize: "25px" }}
                >
                  Màn hình
                </div>
                <div
                  className="d-flex mt-1"
                  style={{
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <div className="screen"></div>
                </div>
                {this.renderHangGhe()}
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
