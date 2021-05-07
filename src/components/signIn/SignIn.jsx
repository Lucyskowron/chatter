import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  /* background:; */
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

export const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container>
      <h2>Please sign in</h2>
      <form>
        <input
          type="text"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></input>
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <input
          type="submit"
          value="Sign in"
          onClick={(e) => {
            e.preventDefault();
            console.log(userName, password);
            axios.post("/login", {
              username: userName,
              password: password,
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          }}
        ></input>
      </form>
      <Button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/register";
        }}
      >
        New to OpenChat? Register
      </Button>
    </Container>
  );
};
