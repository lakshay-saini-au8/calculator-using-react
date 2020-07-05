import React, { Component } from "react";
import CalcButton from "./CalcButton";
import "../css/Calc.css";
class Calc extends Component {
  state = {
    input: "",
    result: 0,
    current: "",
  };
  getValue = (value) => {
    if (!isNaN(value)) {
      this.setState({ current: this.state.current + value });
    } else if (value === "C") {
      this.setState({ input: "", result: 0, current: "" });
    } else if (value === "=") {
      this.setState((preState) => {
        return {
          input: "",
          // eslint-disable-next-line
          result: eval(
            `${preState.result}${
              preState.input[preState.input.length - 1] === undefined
                ? "+"
                : preState.input[preState.input.length - 1]
            }${preState.current === "" ? "0" : preState.current}`
          ),
          current: "",
        };
      });
    } else {
      this.setState((preState) => {
        if (preState.input === "") {
          return {
            input:
              `${
                this.state.result === 0 ? this.state.current : this.state.result
              }` + value,
            result: `${
              preState.result === 0 ? `${preState.current}` : this.state.result
            }`,
            current: "",
          };
        } else if (
          isNaN(preState.input[preState.input.length - 1]) === isNaN(value) &&
          this.state.current === ""
        ) {
          return {
            input: this.state.input.slice(0, -1) + value,
            current: "",
          };
        } else {
          return {
            input: this.state.input + preState.current + value,
            // eslint-disable-next-line
            result: eval(
              `${preState.result}${preState.input[preState.input.length - 1]}${
                preState.current
              }`
            ),
            current: "",
          };
        }
      });
    }
  };

  render() {
    return (
      <div className="Calc">
        <div className="Calc__display">
          <div className="Calc__display--prev">
            <p>{this.state.input}</p>
          </div>
          <div className="Calc__display--res">
            <p>
              {this.state.current === ""
                ? this.state.result
                : this.state.current}
            </p>
          </div>
        </div>
        <div className="Calc__grid">
          <div className="Clac__grid--item grid--1">
            <CalcButton getValue={this.getValue} text="C" />
            <CalcButton getValue={this.getValue} text="%" />
            <CalcButton getValue={this.getValue} text="/" />
            <CalcButton getValue={this.getValue} text="*" />
          </div>
          <div className="Clac__grid--item grid--2">
            <CalcButton getValue={this.getValue} text="7" />
            <CalcButton getValue={this.getValue} text="8" />
            <CalcButton getValue={this.getValue} text="9" />
            <CalcButton getValue={this.getValue} text="-" />
          </div>
          <div className="Clac__grid--item grid--3">
            <CalcButton getValue={this.getValue} text="4" />
            <CalcButton getValue={this.getValue} text="5" />
            <CalcButton getValue={this.getValue} text="6" />
            <CalcButton getValue={this.getValue} text="+" />
          </div>
          <div className="Clac__grid--item grid--4">
            <CalcButton getValue={this.getValue} text="1" />
            <CalcButton getValue={this.getValue} text="2" />
            <CalcButton getValue={this.getValue} text="3" />
            <CalcButton getValue={this.getValue} text="." />
          </div>
          <div className="Clac__grid--item grid--5">
            <CalcButton getValue={this.getValue} text="0" />
            <CalcButton getValue={this.getValue} text="=" />
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
