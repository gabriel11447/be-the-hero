import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f5",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  input: {
    height: 46,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginTop: 10,
    paddingHorizontal: 15,
  },
  button: {
    height: 46,
    alignSelf: "stretch",
    backgroundColor: "#e02041",
    borderRadius: 8,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  register: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
  },
  registerButton: {
    flexDirection: "row",
    alignSelf: "center",
  },
  registerText: {
    paddingHorizontal: 8,
    color: "#41414d",
    fontSize: 15,
    fontWeight: "bold",
  },
});
