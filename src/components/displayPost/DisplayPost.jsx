import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: solid 1px grey;
`;

const UserInfo = styled.div`
  display: flex;
`;

export const DisplayPost = () => {
  return (
    <Container>
      <UserInfo>
        <p>You</p>
        <p> - just now</p>
      </UserInfo>
      <p>Hello, Flumpy here</p>
    </Container>
  );
};
