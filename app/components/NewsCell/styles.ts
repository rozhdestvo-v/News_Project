import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  newsCell: {
    height: 300,
    width: '100%',
    backgroundColor: '#cfcfcf',
    marginBottom: 20,
    borderRadius: 12,
    position: 'relative',
    justifyContent: 'flex-end'
  },
  image: {
    height: 300,
    width: '100%',
    borderRadius: 12
  },
  text: {
    position: "absolute",
    bottom: 0,
    color: '#fff',
    fontWeight: '800',
    fontSize: 32,
    margin: 12
  }
})