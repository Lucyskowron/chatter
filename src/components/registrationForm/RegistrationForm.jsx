import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: #AA453E;
`;

export const RegistrationForm = () => {
  return (
    <>
      <h2>Register</h2>
      <form>
        <input type="text" value="UserName"></input>
        <input type="text" value="Password"></input>
        <input type="text" value="Tell us something about yourself"></input>
        <input type="submit" value="Register"></input>
      </form>
      <Button href="/">Already registered? Log In</Button>
    </>
  );
};
