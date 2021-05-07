import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: solid 1px grey;
`;

export const Follow = () => {
  return (
    <Container>
      <p>user name</p>
      <p>about</p>
      <button>+ Follow</button>
    </Container>
  );
};
