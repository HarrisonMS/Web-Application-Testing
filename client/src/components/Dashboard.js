import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
`

const Dashboard = props => {
  return(
    <ButtonWrapper>
    <button>we should need some buttons</button>
    <button>we should need some buttons</button>
    <button>we should need some buttons</button>
    <button>we should need some buttons</button>
    <button>we should need some buttons</button>
    </ButtonWrapper>
  )
}
export default Dashboard;