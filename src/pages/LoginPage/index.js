import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React, { useState } from "react";
import Input from "../../components/InputLoginForm";
import Button from "../../components/Button";
import styled from "styled-components";
import "./index.scss";
import EyeInvisible from "../../assets/images/EyeInvisible.png";
// import VisibilityIcon from "@mui/icons-material/Visibility";
import CoforgeLogo from "../../assets/images/Coforge-logo-Coral-Blue2.png";
import DQXLogo from "../../assets/images//DQXpress.png";

const LoginCardDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10%;
  position: relative;
  font-family: var(--font-family);
`;

const LoginCard = styled.div`
  width: 460px;
  padding: 15px 30px 15px 30px;
  background-color: #082340;
  color: #ffffff;
  border-radius: 8px;

  ForgotPasswordText {
    text-align: center;
  }

  h3 {
    text-align: center;
    font-weight: 500;
    font-size: 30px;
    margin: 0px;
  }

  p {
    font-size: 18px;
    margin-bottom: 5px;
  }

  div {
    margin-bottom: 15px;
  }
`;

const ForgotPasswordText = styled.div`
  text-align: center;

  span {
    color: #ff7a45;
    border-bottom: 1px solid #ff7a45;
    cursor: pointer;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginPage = ({ onLogin }) => {
  const [creds, setCreds] = useState({
    userName: "",
    passWord: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const showPassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleInput = (e, key) => {
    setCreds({
      ...creds,
      [key]: e.target.value,
    });
  };

  const handleLogin = () => {
    // Perform authentication logic here
    if (creds.userName === "admin" && creds.passWord === "password") {
      setIsLoggedIn(true);
      onLogin(creds.userName, creds.passWord);
    }
  };

  return (
    <div>
      <HeaderContainer>
        <img src={CoforgeLogo} alt="Logo"></img>
        <img src={DQXLogo} alt="log" />
      </HeaderContainer>
      <LoginCardDiv>
        <LoginCard>
          <h3 className="login-card">Log In</h3>
          <div>
            <p>Please Select Your Role</p>
            <div>
              <RadioGroup
                row
                aria-labelledby="demo-form-control-label-placement"
                name="position"
                defaultValue="top"
              >
                <FormControlLabel
                  value="end"
                  control={
                    <Radio
                      sx={{
                        color: "white",
                        "&.Mui-checked": {
                          color: "blue",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 20,
                        },
                      }}
                    />
                  }
                  label="Administrator"
                />

                <FormControlLabel
                  value="end1"
                  control={
                    <Radio
                      sx={{
                        color: "white",
                        "&.Mui-checked": {
                          color: "blue",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 20,
                        },
                      }}
                    />
                  }
                  label="Employee"
                />
              </RadioGroup>
            </div>
          </div>
          <Input
            labelText="UserName"
            value={creds.userName}
            onChange={(e) => handleInput(e, "userName")}
          />
          <Input
            type="password"
            labelText="Password"
            value={creds.passWord}
            onChange={(e) => handleInput(e, "passWord")}
            suffix={
              isPasswordVisible ? (
                <span>
                  <img src={""} alt="v" onClick={showPassword} />
                </span>
              ) : (
                <span>
                  <img src={EyeInvisible} alt="" onClick={showPassword} />
                </span>
              )
            }
          />
          <Button
            name="Continue"
            color="#ffffff"
            onClick={handleLogin}
            backgroundColor={`var(--button-background-color)`}
          />
          <ForgotPasswordText>
            <span>Forgot Password</span>
          </ForgotPasswordText>
          <ForgotPasswordText>
            <p>
              Do you have an account? <span>Sign Up Here.</span>
            </p>
          </ForgotPasswordText>
        </LoginCard>
      </LoginCardDiv>
    </div>
  );
};

export default LoginPage;
