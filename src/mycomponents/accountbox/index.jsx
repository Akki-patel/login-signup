import React, { useState } from "react";
import { styled } from "styled-components";
import { LoginForm } from "./loginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { Signupform } from "./signupform";

const BoxContainer = styled.div`
width:280px;
min-height:600px;
display:flex;
flex-direction:column;
border-radius:19px;
background-color:#fff;
box-shadow:0 0 2px rgba(15,15,15,0.25);
position:relative;
overflow:hidden;
`;

const BackDrop = styled(motion.div)`
width: 160%;
height: 550px;
position: absolute;
display: flex;
flex-direction: column;
border-radius: 50%;
top:-290px;
left:-70px;
transform:rotate(60deg);
background:rgb(241,196,15);
background-color: linear-gradient(
  58deg,
  rgba(241,196,15,1) 20%,
  rgba(243,172,18,1) 100%
);
`;

const Topcontainer = styled.div`
width: 100%;
height: 250px;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 0 1.8em;
padding-bottom: 5em;
`;

const HeaderContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
position:absolute;
top:65px;
`;

const HeaderText = styled.h2`
font-size:30px;
font-weight:600;
line-height:1.24;
color:#fff;
z-index:10;
font-family: 'Exo 2', sans-serif;
margin:0;
`;

const SmallText = styled.h5`
font-size:15px;
font-weight:500;
color:#fff;
font-family: 'Exo 2', sans-serif;
margin:0;
margin-top:7px;
`;
const InnerContainer = styled.div`
  width  :100% ;
  display: flex;
  flex-direction: column;

`;
const backdropvarients = {
    expanded: {
        width: "233%",
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)"
    },
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)"
    }
}

const expandigTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
}

export function AccountBox(props) {
    const [isExpanded, setExpended] = useState(false);
    const [active, setActive] = useState("signin");

    const playExpandingAnimation = () => {
        setExpended(true);
        setTimeout(() => {
            setExpended(false);
        }, expandigTransition.duration * 1000 - 1500);
    }
    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signup");
        }, 400);
    }
    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signin");
        }, 400);
    }
    const contextValue = { switchToSignup, switchToSignin };
    return (
        <AccountContext.Provider value={contextValue}>
            <BoxContainer>
                <Topcontainer>
                    <BackDrop initial={false} animate={isExpanded ? "expanded" : "collapsed"} variants={backdropvarients} transition={expandigTransition} />
                    {active==="signin" && <HeaderContainer>
                        <HeaderText>
                            Welcome
                        </HeaderText>
                        <HeaderText>
                            Back
                        </HeaderText>
                        <SmallText>Please Sign-in to continue!</SmallText>
                    </HeaderContainer>}
                    {active==="signup" && <HeaderContainer>
                        <HeaderText>
                            Cerate
                        </HeaderText>
                        <HeaderText>
                            Account
                        </HeaderText>
                        <SmallText>Please Sign-up to continue!</SmallText>
                    </HeaderContainer>}
                </Topcontainer>
                <InnerContainer>
                    {active === "signin" && <LoginForm />}
                    {active === "signup" && <Signupform />}
                </InnerContainer>
            </BoxContainer>
        </AccountContext.Provider>
    );
}