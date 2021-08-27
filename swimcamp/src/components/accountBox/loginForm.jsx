import React, { useContext } from "react";
import {
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
  MutedLink,
  BoldLink,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { Link } from "react-router-dom";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Marginer direction="vertical" margin={10} />
      </FormContainer>
      <MutedLink href="#">Forgot your password</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">
        <Link style={{ textDecoration: "none", color: "white" }} to="/home">
          Signin
        </Link>
      </SubmitButton>

      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
