import React from "react";
import { Text, View, TextInput, TouchableOpacity, Button, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

Headers = (props) => {
  var data="SELAMAT DATANG";
  return(
    <View>
      <Text style={{marginTop:20, color:"white", textAlign:"center"}}>Tugas 3 React Native</Text>
      <Text style={{marginBottom:50, fontWeight:"bold", color:"purple", fontSize:20, textAlign:"center"}}>{data}</Text>
    </View>
  );
};

export default Headers;