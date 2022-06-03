import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { State, TextInput } from "react-native-gesture-handler";
import Urgent from "./urgency";

const Spend = ({ navigation }) => {
  var [max, setName] = useState("2 hours");
  global.MyMax = max;
  return (
    <>
      <View style={styles.container}>
        <>
          <View style={styles.parent}>
            <View style={styles.top}>
              <Text style={styles.question}>
                Q. How much time you want to alot in hours?
              </Text>
            </View>
            <View style={styles.boxcontainer}>
              <TextInput
                style={styles.box}
                placeholder="digit only"
                onChangeText={(val) => setName(val)}
              />
              <Text>name : {max}</Text>
              <View style={styles.bottom}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate("Productive")}
                >
                  <Text style={styles.buttonText}>Enter</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </>
      </View>
    </>
  );
};

export default Spend;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  question: {
    fontSize: 28,
  },
  option: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "#34A0A4",
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  parent: {
    height: "100%",
  },
  boxcontainer: {
    marginVertical: 30,
  },
  button: {
    backgroundColor: "#1A759F",
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  box: {
    borderColor: "black",
    borderWidth: 1,
    width: "80%",
    padding: 10,
    alignSelf: "center",
  },
});
