import {StyleSheet} from "react-native"
export const styles = StyleSheet.create({
    topSafeArea: {
      backgroundColor: "#3498db"
    },
    container: {
      flex: 1,
      backgroundColor: "#f9f9f9",
    },
    header: {
      height: 60,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#3498db"
    },
    headerText: {
      color: "white",
      fontSize: 18
    },
    formGroup : {
      marginBottom: 10
    },
    label: {
      color: "#7d7e79",
      fontSize: 16,
      lineHeight: 30
    },
    input: {
      height: 50,
      paddingHorizontal: 20,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: "#e3e3e3",
      backgroundColor: "#fff",
      marginHorizontal: 10
    },
    button: {
      marginTop: 20,
      backgroundColor: "#2980b9",
      padding: 15,
      borderRadius: 15,
      marginHorizontal: 10
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 18,
      textAlign: "center"
    },
    errorContainer: {
      marginVertical: 5
    },
    errorText: {
      color: "#ff7675"
    }
})