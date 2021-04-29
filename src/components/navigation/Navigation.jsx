import styled from "styled-components";
import logo from "../../images/logo.png";

const NavigationContainer = styled.div`
  display: flex;
  background-color: #aa453e;
`;

const BrandDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 0.5;
  margin: 12px;
`;

const NavigationActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 0.5;
  margin: 12px;
`;

export const Navigation = () => {
  return (
    <NavigationContainer>
      <BrandDetails>
        <img src={logo} alt={logo} width="30px" height="30px" padding-right="12px" />
        <div>Open chat</div>
      </BrandDetails>
      <NavigationActions>
        <div>Follow users</div>
        <button>Log Out</button>
      </NavigationActions>
    </NavigationContainer>
  );
};
