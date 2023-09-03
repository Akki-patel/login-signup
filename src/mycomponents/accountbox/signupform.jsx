import React, { useContext } from "react";
import { BoxContainer, FormContainer, MutedLink, SubmitButton, Input, BoldLink } from "./comon";
import { Marginer } from "../Marginer";
import { AccountContext } from "./accountContext";
export function Signupform(props) {
   const { switchToSignin } = useContext(AccountContext);
    return <BoxContainer>
        <FormContainer>
            <Input type="text" placeholder="Full name" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder=" Confirm Password" />
        </FormContainer>
        <Marginer direction="vertical" margin="1.3em" />
        <SubmitButton type="submit">Sign-in</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">Already have an account?<BoldLink href="#" onClick={switchToSignin}>Signin</BoldLink></MutedLink>
    </BoxContainer>
}