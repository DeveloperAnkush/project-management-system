import * as yup from "yup";

// const commonMessage = "This field is required!";
const emailRequiredError = "Email id is required!";
const emailError = "Enter a valid email address!";
const passwordRequiredError = "Password is required!";
const passwordError = "Password is invalid please enter a valid password!";

const passwordRegExp =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const emailValidation = yup
  .string()
  .required(emailRequiredError)
  .matches(emailRegExp, emailError);

const passwordValidation = yup
  .string()
  .required(passwordRequiredError)
  .min(8, "Enter at least 8 characters.")
  .max(16, "Enter 16 characters as maximum limit.")
  .matches(passwordRegExp, passwordError);

export const loginSchema = yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
});
