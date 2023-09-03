import React, { useContext } from "react";
import { BoxContainer, FormContainer, MutedLink, SubmitButton, Input, BoldLink } from "./comon";
import { Marginer } from "../Marginer";
import { AccountContext } from "./accountContext";
export function LoginForm(props) {
   const { switchToSignup } = useContext(AccountContext);

    return <BoxContainer>
        <FormContainer>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">Forgot your password?</MutedLink>
        <Marginer direction="vertical" margin="1.3em" />
        <SubmitButton type="submit">Sign-in</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">Dont't have an account?<BoldLink href="#" onClick={switchToSignup}>Signup</BoldLink></MutedLink>
    </BoxContainer>
}