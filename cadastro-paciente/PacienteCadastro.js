import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { Formik } from "formik";
import { styles } from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { validationSchema } from "./validation";

// Componente para exibir mensagens de erro
const ErrorMessage = ({ errorValue }) => {
  return errorValue ? (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{errorValue}</Text>
    </View>
  ) : null;
};

export default function PacienteCadastro() {
  function onSubmitHandler(values) {
    console.log(values);
    Alert.alert("Cadastro realizado!", `Paciente: ${values.nomePaciente}`);
  }

  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Cadastro de Paciente</Text>
        </View>
        <Formik
          initialValues={{
            nomePaciente: "",
            idade: "",
            peso: "",
            altura: "",
            email: "",
            diagnostico: "",
            dataConsulta: "",
          }}
          onSubmit={onSubmitHandler}
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
                <Text style={styles.label}>Nome do Paciente</Text>
                <TextInput
                  style={styles.input}
                  value={values.nomePaciente}
                  onChangeText={handleChange("nomePaciente")}
                  onBlur={handleBlur("nomePaciente")}
                />
                <ErrorMessage errorValue={touched.nomePaciente && errors.nomePaciente} />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Idade</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  value={values.idade}
                  onChangeText={handleChange("idade")}
                  onBlur={handleBlur("idade")}
                />
                <ErrorMessage errorValue={touched.idade && errors.idade} />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Peso (kg)</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  value={values.peso}
                  onChangeText={handleChange("peso")}
                  onBlur={handleBlur("peso")}
                />
                <ErrorMessage errorValue={touched.peso && errors.peso} />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Altura (cm)</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  value={values.altura}
                  onChangeText={handleChange("altura")}
                  onBlur={handleBlur("altura")}
                />
                <ErrorMessage errorValue={touched.altura && errors.altura} />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                />
                <ErrorMessage errorValue={touched.email && errors.email} />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Diagnóstico</Text>
                <TextInput
                  style={styles.input}
                  value={values.diagnostico}
                  onChangeText={handleChange("diagnostico")}
                  onBlur={handleBlur("diagnostico")}
                />
                <ErrorMessage errorValue={touched.diagnostico && errors.diagnostico} />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Data da Consulta</Text>
                <TextInput
                  style={styles.input}
                  placeholder="DD/MM/AAAA"
                  value={values.dataConsulta}
                  onChangeText={handleChange("dataConsulta")}
                  onBlur={handleBlur("dataConsulta")}
                />
                <ErrorMessage errorValue={touched.dataConsulta && errors.dataConsulta} />
              </View>

              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>CADASTRAR</Text>
              </TouchableOpacity>
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </SafeAreaView>
    </>
  );
}
