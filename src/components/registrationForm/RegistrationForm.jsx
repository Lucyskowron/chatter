import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  flex-direction: column;
  max-width: 50%;
`;

const Text = styled.div`
  border-bottom: 1px solid grey;
`;

const FormContainer = styled.div`
  justify-content: center;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: #aa453e;
  &:hover {
    text-decoration: underline;
  }
`;

export const RegistrationForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [about, setAbout] = useState("");
  const history = useHistory();
  return (
    <Container>
      <Text>
        <h2>Register</h2>
      </Text>
      <FormContainer>
        <form>
          <input
            type="text"
            placeholder="UserName"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder="Tell us something about yourself"
            value={about}
            onChange={(e) => {
              setAbout(e.target.value);
            }}
          ></input>
          <button
            type="submit"
            // value="Register"
            onClick={(e) => {
              e.preventDefault();
              console.log(userName, password, about);
              axios
                .post("/users", {
                  username: userName,
                  password: password,
                  about: about,
                })
                .then(() => {
                  localStorage.setItem("authToken", "bamboo")
                  history.push("/")
                }
                )
                .then(function (response) {
                  console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                });
            }}
          ></button>
        </form>
        <Button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Already registered? Log In
        </Button>
      </FormContainer>
    </Container>
  );
};
