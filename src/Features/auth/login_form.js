// @ts-nocheck
import { Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { animated, useTransition } from "react-spring";
import { fasterAnimation } from "../../Misc/animations";
import FormInput from "../../Misc/components/formInput";
import {
  composeValidators,
  minLength,
  mustBeNumber,
  required,
} from "../../Misc/formvaildators";
import { login, loginSendOtp } from "../../Redux/reducers/login";
import {
  LoginFormWrapper,
  LoginPageContainer,
  OtpButtonConatiner,
} from "./login_form.styled";

const LoginForm = () => {
  const loginstate = useSelector((state) => state.login);
  const [showLogin, setshowLogin] = React.useState(false);
  const [showOtpContainer, setshowOtpContainer] = React.useState(false);
  const dispatcher = useDispatch();
  const navigate = useNavigate();
  const transitions = useTransition(showLogin, {
    from: { y: -9999 },
    enter: { y: 0 },
    leave: { y: -9999 },
    reverse: showLogin,
    config: fasterAnimation,
  });
  React.useEffect(() => {
    if (loginstate.data.status === true) {
      navigate("/", { replace: true });
    }
  }, [loginstate]);

  return (
    <LoginPageContainer>
      <Formik
        initialValues={{ employee_id: "", password: "", otp: "" }}
        validateOnMount
        onSubmit={(e) => {
          dispatcher(login(e));
        }}
      >
        {({ setValues, values, errors, isSubmitting, ...rest }) => {
          setshowLogin(
            !errors.employee_id &&
              !errors.password &&
              !errors.otp &&
              !isSubmitting
          );
          setshowOtpContainer(!errors.employee_id && !errors.password);

          return (
            <LoginFormWrapper>
              <h1 className="login_form_header">Hello</h1>
              <FormInput
                validate={composeValidators(
                  required,
                  mustBeNumber,
                  minLength(5)
                )}
                name="employee_id"
                placeholder="Employee ID"
                type="text"
                label="Employee ID"
                setValues={setValues}
                values={values}
              />
              <FormInput
                validate={required}
                name="password"
                placeholder="Password"
                type="password"
                label="Password"
                setValues={setValues}
                values={values}
              />
              {showOtpContainer && (
                <OtpButtonConatiner>
                  {errors.otp && (
                    <button
                      type="button"
                      onClick={() => {
                        if (!errors.employee_id && !errors.password) {
                          dispatcher(loginSendOtp(values));
                        } else {
                          rest.setTouched({
                            ...values,
                            employee_id: true,
                            password: true,
                          });
                        }
                      }}
                      className="send_otp_button"
                    >
                      Send OTP
                    </button>
                  )}
                  <FormInput
                    validate={composeValidators(
                      required,
                      mustBeNumber,
                      minLength(4)
                    )}
                    name="otp"
                    placeholder="OTP"
                    type="text"
                    label="OTP"
                    setValues={setValues}
                    values={values}
                  />
                </OtpButtonConatiner>
              )}
              {transitions(
                (styles, item) =>
                  item && (
                    <animated.button style={styles} type="submit">
                      Submit
                    </animated.button>
                  )
              )}
            </LoginFormWrapper>
          );
        }}
      </Formik>
    </LoginPageContainer>
  );
};
export default LoginForm;
