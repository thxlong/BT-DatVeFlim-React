import React, { Component } from "react";

export default class ThongTinDatGhe extends Component {
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
            <tbody>
              <td>Tổng tiền</td>
              <td>0</td>
              <td>0</td>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
