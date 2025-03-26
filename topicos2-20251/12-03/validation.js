import * as Yup from "yup"

export const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"), 
    email: Yup.string()
                .email("Enter a valid email")
                .required("Please enter a registered email"),
    password: Yup.string()
                .required("")
                .min(6, "Password must have at least 6 characteres"),
    confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null], 
        "Password and Confirm Password are not the same"),
})