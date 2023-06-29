import styled from "styled-components";

export const Navbar = styled.header`
  header {
    height: 80px;
    width: auto;
    background-color: #FFF;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.6);    
};

.navTitle {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #111517;
    width: 90vw;
    height: 100%;
    text-transform: capitalize;
    margin: auto;  
};

.navTitle p {
   width: 108px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &:hover{
    cursor: pointer;
}
}

/* .darkMode{
  width: 108px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &:hover{
    cursor: pointer;
  }
} */








  
`;
