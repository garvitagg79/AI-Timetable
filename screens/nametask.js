import React from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ModalPicker } from "../components/ModalPicker";

const NameTask = ({ navigation }) => {
  //const { navigation } = props;
  const [chooseData, setchooseData] = useState("Select");
  const [isModalVisible, setisModalVisible] = useState(false);
  const changeModalVisibilty = (bool) => {
    setisModalVisible(bool);
  };

  const setData = (option) => {
    setchooseData(option);
  };

  global.MyVar = chooseData;

  /*  const DataSet = () => {
        setchooseData(datai)
    }*/

  /*const Press = (choose) => {
        navigation.navigate('Category');
        props.seti(choose);
    }*/

  // const choose = chooseData;

  /* useState(() => {
        DataSet(chooseData);
    }
    )*/

  /*
        navigation.navigate('Urgent', {
            score: chooseData
        })
    */

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => changeModalVisibilty(true)}
        style={styles.TouchableOpacity}
      >
        <Text style={styles.text}>{chooseData}</Text>
      </TouchableOpacity>
      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Category")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Enter</Text>
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        nRequestClose={() => changeModalVisibilty(false)}
      >
        <ModalPicker
          changeModalVisibilty={changeModalVisibilty}
          setData={setData}
        ></ModalPicker>
      </Modal>
    </SafeAreaView>
  );
};

export default NameTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    marginVertical: 20,
    color: "white",
    fontSize: 25,
  },
  TouchableOpacity: {
    backgroundColor: "grey",
    alignSelf: "stretch",
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "#1A759F",
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
});

{
  /*export default NameTask = () => {
    return (
        <><View style={styles.container}>
            <><View style={styles.parent}>
                <View style={styles.top}>
                    <Text style={styles.question}>Q. Name your activity</Text>
                </View>
                <View>
                    <Picker
                        style={styles.picker}
                        selectedValue={pickerValue}
                        onValueChange={(itemvalue)=>setPickerValue(itemvalue)}
                    >
                        <Picker.Item label="Javascript" value="Java" />   
                        <Picker.Item label="Java" value="Jav " />   
                        <Picker.Item label="J" value="J" />   
                    </Picker>
                </View>
            </View></>
        </View>
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
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
        fontWeight: '500',
        color: 'white',
    },
    optionButton: {
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: '#34A0A4',
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    parent: {
        height: '100%',
    },
      boxcontainer: {
        marginVertical: 30,
    },
      button: {
        backgroundColor: '#1A759F',
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },
    box: {
        borderColor: "black",
        borderWidth: 1,
        width: '80%',
        padding: 10,
        alignSelf: 'center',
    },
    picker: {
        width: 300,
        height: 45,
        borderColor: 'red',
        borderWidth: 2,
        backgroundColor: 'red',
    }
});
*/
}
