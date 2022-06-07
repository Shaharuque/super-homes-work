import { Field } from "formik";
import React from "react";
import { animated, useSpring } from "react-spring";
import useMeasure from "react-use-measure";
import { fasterAnimation } from "../animations";
import AnimatedCross from "./animatedCrosshair";
import { FormInputContainer, FormInputWrapper } from "./formInput.styled";

const FormInput = ({
  name,
  placeholder,
  label,
  type,
  validate,
  setValues,
  values,
}) => {
  const [ref, bounds] = useMeasure();
  const [control, setControl] = React.useState({ full: false, show: false });
  const inputRef = React.useRef(name);
  const props = useSpring({
    to: {
      width: control.full ? bounds.width - 8 : 28,
      right: control.full ? 0 : 8,
      left: control.full ? 30 : bounds.width - 8,
    },
    config: fasterAnimation,
  });
  const onclear = () => {
    setControl({ full: true, show: true });
    setTimeout(() => {
      // form.change(name, undefined);
      setValues({ ...values, [name]: "" });
      setControl({ full: false, show: false });
      inputRef.current.focus();
    }, 400);
  };
  React.useEffect(() => {
    if (values[name] !== undefined && values[name] !== "") {
      setControl((prev) => ({ ...prev, show: true }));
    }
    if (values[name] === "" || values[name] === undefined) {
      setControl((prev) => ({ ...prev, show: false }));
    }
  }, [values]);

  return (
    <Field
      name={name}
      auto
      validate={validate}
      children={({ field, meta }) => {
        return (
          <FormInputContainer>
            <label>{label}</label>
            <FormInputWrapper ref={ref}>
              <input
                {...field}
                ref={inputRef}
                placeholder={placeholder}
                type={type}
                autoComplete="false"
              />
              {control.show && (
                <animated.div
                  onClick={onclear}
                  style={props}
                  className="form_button"
                >
                  <AnimatedCross open={control.full} />
                </animated.div>
              )}
            </FormInputWrapper>
            {meta.touched && meta.error && <div>{meta.error}</div>}
          </FormInputContainer>
        );
      }}
    />
  );
};
export default FormInput;
