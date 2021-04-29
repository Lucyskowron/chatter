import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: #AA453E;
`;

export const SignIn = () => {
  return (
    <>
      <h2>Please sign in</h2>
      <form>
        <input type="text" value="UserName"></input>
        <input type="text" value="Password"></input>
        <input type="submit" value="Sign in"></input>
      </form>
      <Button>New to OpenChat? Register</Button>
    </>
  );
};
