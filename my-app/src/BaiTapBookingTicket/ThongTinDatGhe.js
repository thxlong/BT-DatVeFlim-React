import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../Redux/actions/BaiTapDatVeAction";

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <h1>DANH SÁCH GHẾ BẠN CHỌN</h1>
        <div className="mt-5">
          <button className="gheDuocChon"></button>
          <span style={{ fontSize: "25px" }}>Ghế đã đặt</span>
          <br />
          <button className="gheDangChon"></button>
          <span style={{ fontSize: "25px" }}>Ghế đang đặt</span>
          <br />
          <button style={{ marginLeft: "0px" }} className="ghe"></button>
          <span style={{ fontSize: "25px" }}>Ghế chưa đặt</span>
          <br />
        </div>

        <div className="mt-5">
          <table className="table text-light" border="2">
            <thead>
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Huỷ</th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia.toLocaleString()}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                        }}
                      >
                        Huỷ
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>

            <tfoot>
              <tr className="text-warning">
                <td></td>
                <td>Tổng tiền</td>
                <td>
                  {this.props.danhSachGheDangDat
                    .reduce((tongTien, gheDangDat, index) => {
                      return (tongTien += gheDangDat.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(ThongTinDatGhe);
