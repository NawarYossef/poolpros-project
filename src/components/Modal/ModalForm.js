import React, { Component } from 'react';
import { PoolQuestion } from './PoolQuestion';
import { SendEmailButton } from "./SendEmailButton";
import CheckMark from '../../assets/checkmark-circle.png';
import Circle from '../../assets/circle-form.png';
import 'normalize.css';
import styled from 'styled-components';
import '../../styles/main.css';

const Wrapper = styled.div`
width:  95%;
margin: 0 auto;
`
const Form = styled.form`
background-color: #f6f6f6;
padding-top: 30px;
`

const FieldTitle = styled.p`
margin: 0px;
`

const FieldWrapper = styled.div`
margin: 0 auto;
width: 96%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 20px;
`

const PhoneNumberInputWrapper = styled.div`
width: 40.4%;
display: flex;
margin-top: 20px;
justify-content: space-between;
align-items: center;
padding-left: 13px;
`
const Input = styled.input`
margin: 0 auto;
padding: 0px;
width: 94%;
height: 45px;
border: 1px solid #d8d8d8;
margin-top: 4px;
padding-left: 13px;
`
const PhoneNumberInput = styled.input`
margin: 4px 0 0 13px;
padding: 0px;
padding-left: 13px;
width: 38.4%;
display: block;
height: 45px;
border: 1px solid #d8d8d8;
`
const Textarea = styled.input`
margin: 0 auto;
padding: 0px;
width: 94%;
height: 78px;
border: 1px solid #d8d8d8;
margin-top: 4px;
padding-left: 13px;
`
const Line = styled.hr`
color: #ececec;
height: 2px;
border: 0;
box-shadow: inset 0 12px 12px -14px rgba(0, 0, 0, 0.5);
margin: 0 auto;
width: 94%;
`
export default class ModalForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstAndLastName: '',
      phoneNumber: '',
      email: '',
      comments: '',
      userOwnsPool: false,
      userIsTyping: false,
      formSubmitValid: false,
    }
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Wrapper>
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor="first-last-name">
            <FieldWrapper>
              <FieldTitle>First and last name</FieldTitle>
              { this.state.firstAndLastName ? 
                <img src={CheckMark} className={'form-img'} alt="" /> : 
                <img src={Circle} className={'form-img'} alt="" />
              }
            </FieldWrapper>
            <Input
              type="text"
              name="username"
              placeholder={"Jane Smith"}
              onChange={(e) => this.setState({ firstAndLastName: e.target.value, userIsTyping: true })}
            />
          </label>

          <label htmlFor="phone-number">
            <PhoneNumberInputWrapper>
              <FieldTitle>Phone Number</FieldTitle>
              { this.state.phoneNumber ? 
                <img src={CheckMark} className={'form-img'} alt="" /> : 
                <img src={Circle} className={'form-img'} alt="" />
              }
            </PhoneNumberInputWrapper>
            <PhoneNumberInput className={"phone-number-input"}
              type="text"
              name="number"
              placeholder={"8881234"}
              onChange={(e) => this.setState({ phoneNumber: e.target.value, userIsTyping: true })}
            />
          </label>
          <label htmlFor="email">
            <FieldWrapper>
              <FieldTitle>Email address</FieldTitle>
              { this.state.email ? 
                <img src={CheckMark} className={'form-img'} alt="" /> : 
                <img src={Circle} className={'form-img'} alt="" />
              }
            </FieldWrapper>
            <Input
              type="text"
              name="email"
              placeholder={"Janesmith@something.com"}
              onChange={(e) => this.setState({ email: e.target.value, userIsTyping: true })}
            />

          </label>
          <label htmlFor="comments">
            <FieldWrapper>
              <FieldTitle>Comments or questions</FieldTitle>
              <span>Optional</span>
            </FieldWrapper>
            <Textarea
              type="text"
              name="comments"
              onChange={(e) => this.setState({ comments: e.target.value })}
            />
          </label>

          <FieldWrapper>
            <FieldTitle>Do you currently own a pool or a spa?</FieldTitle>
            <span>Optional</span>
          </FieldWrapper>
          <PoolQuestion />
          <Line />
          <SendEmailButton />
        </Form>
      </Wrapper>
    );
  }
}