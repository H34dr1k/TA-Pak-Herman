import React from 'react';
import { StyleSheet, View, Button, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import LinearGradient from 'react-native-linear-gradient';
// import { Svg, Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import Text from './components/customText.js';
import { AppFontLoader } from './components/AppFontLoader.js';

import Intro from './screen/IntroScreen'
import Login from './screen/LoginScreen'
import SignUp1 from './screen/SignUp1'
import SignUp2 from './screen/SignUp2'
import homeScreen1 from './screen/homeScreen1'

const AppNavigator = createStackNavigator({
    Intro: { 
        screen: Intro
    },
    Login: { 
        screen: Login
    },
    SignUp1:{
        screen: SignUp1
    },
    SignUp2:{
        screen: SignUp2
    },
    homeScreen1:{
        screen: homeScreen1
    }
    
},

    {
        initialRouteName: 'Intro',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                // textAlign: 'center',
                // flex: 1,
            }
        }
    },


);

// const AppNavigator = createStackNavigator(
//     {
//         Intro: IntroScreen,
//         Login: LoginScreen,
//     },
//     {
//         initialRouteName: 'Intro',
//         defaultNavigationOptions: {
//             headerStyle: {
//                 backgroundColor: 'blue',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//                 textAlign: 'center',
//                 flex: 1,
//             }
//         }
//     },


// );

export default createAppContainer(AppNavigator);