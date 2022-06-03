import React from "react";
import { StyleSheet,Text,View } from "react-native";
import { TouchableOpacity } from "react-native";

const Type = ({ navigation }) => {
    return (
        <><View style={styles.container}>
            <><View style={styles.parent}>
                    <View style={styles.top}>
                    <Text style={styles.question}>Q. Select your personality type:</Text>
                    </View><View style={styles.options}>
                        <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate("Resulti")}>
                            <Text style={styles.option}>Multitasker</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate("Resulti")}>
                            <Text style={styles.option}>Focused</Text>
                        </TouchableOpacity>
                    </View>
                </View></>
        </View>
        </>
    );
};

export default Type;

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
    }
});