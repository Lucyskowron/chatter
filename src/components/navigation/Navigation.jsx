import styled from "styled-components";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

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
      <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
        <BrandDetails>
          <img
            src={logo}
            alt={logo}
            width="30px"
            height="30px"
            padding-right="12px"
          />
          <div>Open chat</div>
        </BrandDetails>
      </Link>
      <NavigationActions>
        <Link to="/findUsers">
          <button>Follow users</button>
        </Link>
        <button>Log Out</button>
      </NavigationActions>
    </NavigationContainer>
  );
};
