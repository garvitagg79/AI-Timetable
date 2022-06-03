import React, {useState} from "react";
import { Image,StyleSheet,Text,View } from "react-native";
import NameTask from "./nametask";
import Importance from "./importance";

const Parent = () => {
    const [datai, DataSet] = useState('');
    return (
        <><NameTask DataSet={DataSet} />
            <Importance datai={datai} /></>
    );
};

export default Parent;

