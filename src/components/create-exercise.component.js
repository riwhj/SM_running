import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangePlace = this.onChangePlace.bind(this);
    this.onChangeOrganizer = this.onChangeOrganizer.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeDetail = this.onChangeDetail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      image: "",
      place: "",
      organizer: "",
      date: "",
      detail: "",
    
    };
  }


  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeImage(e) {
    this.setState({
      image: e.target.value,
    });
  }
  onChangePlace(e) {
    this.setState({
      place: e.target.value,
    });
  }
  onChangeOrganizer(e) {
    this.setState({
      organizer: e.target.value,
    });
  }
  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }
  onChangeDetail(e) {
    this.setState({
      detail: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      name: this.state.name,
      image: this.state.image,
      place: this.state.place,
      organizer: this.state.organizer,
      detail: this.state.detail,
      date: this.state.date,
    };
    console.log(exercise);

    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then((res) => console.log(res.data));

    window.location = "/run";
  }

  render() {
    return (
      <>
        <div class="container">
          <div class="form-group">
            <form onSubmit={this.onSubmit}>
              <div class="row">
                <div class="col-xl-6 col-lg-6">
                  <div className="form-group">
                    <label>Running Name: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.name}
                      onChange={this.onChangeName}
                      placeholder="กรุณากรอกชื่อรายการวิ่ง"
                    />
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                  <div className="form-group">
                    <label>The place: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.place}
                      onChange={this.onChangePlace}
                      placeholder="กรุณากรอกสถานที่จัดงาน"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-6 col-lg-6">
                  <div className="form-group">
                    <label>organizer: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.organizer}
                      onChange={this.onChangeOrganizer}
                      placeholder="กรุณากรอกผู้จัดงาน"
                    />
                  </div>
                </div>

                <div class="col-xl-6 col-lg-6">
                  <div className="form-group">
                    <label>Date: </label>
                    <div>
                      <DatePicker
                        selected={this.state.date}
                        onChange={this.onChangeDate}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-6 col-lg-6">
                  <div className="form-group">
                    <label>Image: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.image}
                      onChange={this.onChangeImage}
                      placeholder="กรุณากรอกรูปภาพ"
                    />
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                  <div className="form-group">
                    <label>Detail: </label>
                    <textarea
                      type="text"
                      required
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      value={this.state.detail}
                      onChange={this.onChangeDetail}
                      placeholder="กรุณากรอกรายละเอียด"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="submit"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
