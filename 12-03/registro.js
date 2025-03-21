import {SafeAreaView, View, Text, TextInput, TouchableOpacity} from "react-native"
import {Formik} from "formik"
import {styles} from "./styles"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import { validationSchema } from "./validation"
// componente visual que retorna uma View com o erro
const ErrorMessage = ({errorValue}) => {
  return errorValue ? (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}> {errorValue} </Text>
    </View>
  ) : 
  null
}

export default function Registro(){
    function onSubmitHandler(values) {
      console.log(values)
    }
    return (
        <>
          <SafeAreaView style={styles.topSafeArea}/>
          <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}> Register </Text>
            </View>
            <Formik
              initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                  confirmPassword: ""
              }}
              onSubmit={(values, actions) => {
                onSubmitHandler(values, actions)
              }}
              validationSchema={validationSchema}
              >
              {({
                handleSubmit,
                handleChange,
                values,
                errors,
                touched,
                handleBlur,
              }) => (
              <KeyboardAwareScrollView>
                <View style={styles.formGroup}>
                  <Text style={styles.label}> First Name </Text>
                  <TextInput style={styles.input} value={values.firstName} onChangeText={handleChange("firstName")}
                            onBlur={handleBlur("firstName")}/>
                  <ErrorMessage errorValue={touched.firstName && errors.firstName}/>
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.label}> Last Name </Text>
                  <TextInput style={styles.input} value={values.lastName} onChangeText={handleChange("lastName")}/>
                </View> 
                <View style={styles.formGroup}>
                  <Text style={styles.label}> Email </Text>
                  <TextInput style={styles.input}  value={values.email} onChangeText={handleChange("email")}
                            onBlur={handleBlur("email")}/>
                  <ErrorMessage errorValue={touched.email && errors.email}/>
                </View> 
                <View style={styles.formGroup}>
                  <Text style={styles.label}> Password </Text>
                  <TextInput style={styles.input} value={values.password} onChangeText={handleChange("password")}
                            onBlur={handleBlur("password")}
                            secureTextEntry={true}/>
                  <ErrorMessage errorValue={touched.password && errors.password}/>
                </View>  
                <View style={styles.formGroup}>
                  <Text style={styles.label}> Confirm Password </Text>
                  <TextInput style={styles.input} value={values.confirmPassword} 
                      onChangeText={handleChange("confirmPassword")}
                      onBlur={handleBlur("confirmPassword")}
                      secureTextEntry={true}
                  />
                  <ErrorMessage errorValue={touched.confirmPassword && errors.confirmPassword}/>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}> SUBMIT </Text>
                </TouchableOpacity>
              </KeyboardAwareScrollView>
              )}
            </Formik>
          </SafeAreaView>
        </>
    )
}