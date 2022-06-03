import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import NameTask from "./nametask";

const Importance = ({ navigation }) => {
  /*const [datai, setdata] = useState('');
    const seti = (choose) => {
        setdata(choose)
    }*/

  //const datai = {datai};

  const select1 = "Yes";
  const select2 = "No";

  const selectoption = (_select) => {
    global.Myimp = _select;
    navigation.navigate("Urgent");
  };

  return (
    <>
      <View style={styles.container}>
        <>
          <View style={styles.parent}>
            <View style={styles.top}>
              <Text style={styles.question}>
                Q. Do you think it is important?
              </Text>
            </View>
            <View style={styles.options}>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => selectoption(select1)}
              >
                <Text style={styles.option}>{select1}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => selectoption(select2)}
              >
                <Text style={styles.option}>{select2}</Text>
              </TouchableOpacity>
              {/*<NameTask
                        seti={seti}
                    />*/}
            </View>
          </View>
        </>
      </View>
    </>
  );
};

export default Importance;

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
});
