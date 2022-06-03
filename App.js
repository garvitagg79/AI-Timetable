import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import MyStack from './navigation';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';
import NameTask from './screens/nametask';
import Importance from './screens/importance';
import { useState } from 'react';

const App = () => {
  //const [data,DataSet]=useState('')
  return (
    
      <NavigationContainer>
      <MyStack />
      { /*<NameTask DataSet={ DataSet}/>
      <Importance data={data}/>*/}
      </NavigationContainer>
    
  );
};



export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
