import React from "react";
import Footer from "./footer";
import SubHeader from "./header/sub";

function LayoutWrapper({ children }) {
  return (
    <>
      <SubHeader />
      <div style={{margin:"0 16px"}}>
      {children}
      </div>
      <Footer/>
    </>
  )
}

export default function withLayout(Comp){
  return (props) => {
    return (
      <LayoutWrapper>
        <Comp {...props} />
      </LayoutWrapper>
    );
  };
}
