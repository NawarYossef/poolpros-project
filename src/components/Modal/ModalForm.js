import React, { Component } from "react";
import { PoolQuestion } from "./PoolQuestion";
import { SendEmailButton } from "./SendEmailButton";
import CheckMark from "../../assets/checkmark-circle.png";
import Circle from "../../assets/circle-form.png";
import "normalize.css";
import styled from "styled-components";
import "../../styles/main.css";

const Wrapper = styled.div`
  width: 95%;
  margin: 0 auto;
`;
const Form = styled.form`
  background-color: #f6f6f6;
  padding: 20px 10px;
  @media (max-width: 768px) {
    padding: 0px;
    background-color: #ffffff;
  }
`;

const FieldTitle = styled.p`
  margin: 0px;
  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;
const Span = styled.span`
  margin: 0px;
  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

const FieldWrapper = styled.div`
  margin: 0 auto;
  width: 96%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const PhoneNumberInputWrapper = styled.div`
  width: 40.4%;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
  padding-left: 13px;
  @media (max-width: 768px) {
    width: 65%;
    padding-left: 4px;
  }
`;
const Input = styled.input`
  margin: 0 auto;
  padding: 0px;
  width: 94%;
  height: 45px;
  border: 1px solid #d8d8d8;
  margin-top: 4px;
  padding-left: 13px;
  @media (max-width: 768px) {
    padding-left: 4px;
  }
`;
const PhoneNumberInput = styled.input`
  margin: 4px 0 0 13px;
  padding: 0px;
  padding-left: 13px;
  width: 38.4%;
  display: block;
  height: 45px;
  border: 1px solid #d8d8d8;
  @media (max-width: 768px) {
    width: 62.4%;
    margin-left: 4px;
  }
  
`;
const Textarea = styled.input`
  margin: 0 auto;
  padding: 0px;
  width: 94%;
  height: 78px;
  border: 1px solid #d8d8d8;
  margin-top: 4px;
  padding-left: 13px;
`;
const Line = styled.hr`
  clear: both;
  color: #ececec;
  height: 2px;
  border: 0;
  box-shadow: inset 0 12px 12px -14px rgba(0, 0, 0, 0.5);
  margin: 0 auto;
  width: 95%;
`;
export default class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstAndLastName: "",
      phoneNumber: "",
      email: "",
      comments: "",
      hasPool: "yes",
      userIsTyping: false,
      formSubmitValid: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const {
      firstAndLastName,
      phoneNumber,
      email,
      comments,
      hasPool
    } = this.state;
    const userData = {
      firstAndLastName,
      phoneNumber,
      email,
      comments,
      hasPool
    };
    //  this is a mock API call to a server to submit data via POST request
    fetch("someurl/server", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        // assume there is a login system and user has a JWT stored in session
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(userData)
    })
      .then(res => {
        return;
      })
      .catch(err => console.log(err));
  };

  checkBoxHandle = e => {
    if (e.target.value === "no") {
      this.toggleCheckBox(e.target.value);
      this.setState({ hasPool: "no" });
    } else {
      this.toggleCheckBox(e.target.value);
      this.setState({ hasPool: "yes" });
    }
  };

  toggleCheckBox = val => {
    if (val === "yes") {
      document.getElementById("check_2").checked = false;
    } else if (val === "no") {
      document.getElementById("check_1").checked = false;
    }
  };

  render() {
    return (
      <Wrapper>
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor="first-last-name">
            <FieldWrapper>
              <FieldTitle>First and last name</FieldTitle>
              {this.state.firstAndLastName ? (
                <img src={CheckMark} className={"form-img"} alt="" />
              ) : (
                <img src={Circle} className={"form-img"} alt="" />
              )}
            </FieldWrapper>
            <Input
              type="text"
              name="username"
              placeholder={"Jane Smith"}
              onChange={e =>
                this.setState({
                  firstAndLastName: e.target.value,
                  userIsTyping: true
                })
              }
            />
          </label>

          <label htmlFor="phone-number">
            <PhoneNumberInputWrapper>
              <FieldTitle>Phone Number</FieldTitle>
              {this.state.phoneNumber ? (
                <img src={CheckMark} className={"form-img"} alt="" />
              ) : (
                <img src={Circle} className={"form-img"} alt="" />
              )}
            </PhoneNumberInputWrapper>
            <PhoneNumberInput
              className={"phone-number-input"}
              type="number"
              name="number"
              placeholder={"8881234"}
              onChange={e =>
                this.setState({
                  phoneNumber: e.target.value,
                  userIsTyping: true
                })
              }
            />
          </label>
          <label htmlFor="email">
            <FieldWrapper>
              <FieldTitle>Email address</FieldTitle>
              {this.state.email ? (
                <img src={CheckMark} className={"form-img"} alt="" />
              ) : (
                <img src={Circle} className={"form-img"} alt="" />
              )}
            </FieldWrapper>
            <Input
              type="text"
              name="email"
              placeholder={"Janesmith@something.com"}
              onChange={e =>
                this.setState({ email: e.target.value, userIsTyping: true })
              }
            />
          </label>
          <label htmlFor="comments">
            <FieldWrapper>
              <FieldTitle>Comments or questions</FieldTitle>
              <Span>Optional</Span>
            </FieldWrapper>
            <Textarea
              type="text"
              name="comments"
              onChange={e => this.setState({ comments: e.target.value })}
            />
          </label>

          <FieldWrapper>
            <FieldTitle>Do you currently own a pool or a spa?</FieldTitle>
          </FieldWrapper>
          <PoolQuestion checkBoxHandle={this.checkBoxHandle} />
          <Line />
          <SendEmailButton />
        </Form>
      </Wrapper>
    );
  }
}
