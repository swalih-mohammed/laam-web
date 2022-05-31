import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyles";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { WhatsAppButton } from "../HomePage/Elemetns";

const Section = styled.div`
  color: #fff;
  padding: 160px 0;
  padding: 70px 0px;
  background: "#002240";
  display: "flex";
`;

const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${"red"};
`;

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
  /* background-color: "red"; */
`;

const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #f03d4e;
  color: "black";
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

function SectionOne() {
  const { id, token } = useParams();

  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    setError("");
    e.preventDefault();
    console.log(password1, password2);
    if (password1 === "" || password2 === "") {
      setError("Please provide a password");
    } else if (password1 != password2) {
      setError("Password do not match");
    } else {
      console.log("submitting", id, token);
      postChange(password1, password2);
    }
  };

  const postChange = (password1, password2) => {
    setLoading(true);
    axios
      .post("http://127.0.0.1:8000/dj-rest-auth/password/reset/confirm/", {
        //   .post("https://www.laamacademy.com/rest-auth/password/reset/", {
        uid: id,
        token: token,
        new_password1: password1,
        new_password2: password2,
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
        setSuccess(true);
        // dispatch(authSuccess(res));
      })
      .catch((err) => {
        setLoading(false);
        setFailed(true);
        console.log("error in catch passwrod reset", err);
      });
    setLoading(false);
  };

  const handleChangeP1 = (e) => {
    e.preventDefault();
    setPassword1(e.target.value);
  };
  const handleChangeP2 = (e) => {
    e.preventDefault();
    setPassword2(e.target.value);
  };

  return (
    <>
      <Section>
        <Subtitle>{loading ? "loading..." : error ? error : null}</Subtitle>

        {!failed && !success && (
          <Container>
            <Form onSubmit={handleSubmit}>
              <label style={{ color: "black", paddingBottom: 5 }}>
                Password
              </label>
              <Input
                type="name"
                name="password1"
                value={password1}
                onChange={handleChangeP1}
              />
              <label style={{ color: "black", paddingBottom: 5 }}>
                Confirm password
              </label>
              <Input
                type="password"
                name="password2"
                value={password2}
                onChange={handleChangeP2}
              />
              <Button style={{ paddingTop: 10 }}>Submit</Button>
            </Form>
          </Container>
        )}
        {success && (
          <Container>
            <Subtitle style={{ color: "green" }}>Password is changed!</Subtitle>
            <Subtitle style={{ color: "green" }}>
              Please login with your new password
            </Subtitle>
          </Container>
        )}

        {failed && (
          <Container>
            <Subtitle>Request failed, contact support</Subtitle>
            <WhatsAppButton />
          </Container>
        )}
      </Section>
    </>
  );
}

export default SectionOne;
