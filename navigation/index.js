import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/home';
import Quiz from '../screens/quiz';
import Result from '../screens/result';
import Know from '../screens/know';
import NameTask from '../screens/nametask';
import Category from '../screens/categoory';
import Importance from '../screens/importance';
import Urgent from '../screens/urgency';
import Spend from '../screens/spendmax';
import Productive from '../screens/productive';
import Type from '../screens/type';
import Time from '../screens/timetable';
import Resulti from '../screens/resulti';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Quiz" component={Quiz} />
            <Stack.Screen name="Result" component={Result} />
            <Stack.Screen name="Know" component={Know} />
            <Stack.Screen name="NameTask" component={NameTask} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="Importance" component={Importance} />
            <Stack.Screen name="Urgent" component={Urgent} />
            <Stack.Screen name="Spend" component={Spend} />
            <Stack.Screen name="Productive" component={Productive} />
            <Stack.Screen name="Type" component={Type} />
            <Stack.Screen name="Time" component={Time} />
             <Stack.Screen name="Resulti" component={Resulti} />
        </Stack.Navigator>
    );
}

export default MyStack;