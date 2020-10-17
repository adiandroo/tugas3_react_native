import React, { Component } from "react"
import { Text, View, TextInput, TouchableOpacity, Button, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen"; 

export default class Barang extends Component {
constructor(props){
  super(props);
  this.state={
  jumlah: 0
};
}

handleJumlah = () => {
    if (this.state.jumlah >= 0) {
        this.setState({ 
            jumlah: this.state.jumlah + 1
        });
    } else {
        alert("Jumlah Tidak Boleh Kurang Dari 0");
    }
};

handleKurang = () => {
    this.setState({
      jumlah: this.state.jumlah - 1
    });
  }

  render() {
  const {jumlah} = this.state;
  return (
    <View>
      <View style={{flex: 1,flexDirection: 'row'}}>
    <Text style={{textAlign: "center", marginLeft: 290, alignItems: "stretch"}}>Jumlah : {jumlah}</Text>
    </View>
    <View style={{flex:1, alignItems: "center"}}>
    <Text style={{fontSize: 21, marginTop: 20}}>Silahkan Tekan Tombol Dibawah</Text>
    </View>
    <View style={{flex: 1,flexDirection: 'row'}}>
    <TouchableOpacity onPress={this.handleJumlah} style={styles.buttonPlus}>
        <Text style={{color:"white"}}>+</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={this.handleKurang} style={styles.buttonMinus}>
        <Text style={{color:"white"}}>-</Text>
    </TouchableOpacity>
    </View>
    <Text style={{textAlign: "center", marginTop: 50, fontSize: 50, color: "blue"}}>{jumlah}</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    buttonPlus: {
      backgroundColor: "green",
      padding:10,
      paddingHorizontal:40,
      marginTop: 20,
      marginLeft: 50,
      alignItems: "center"
    },
    buttonMinus: {
        backgroundColor: "red",
        padding:10,
        marginTop: 20,
        paddingHorizontal:40,
        marginLeft:50,
        alignItems: "center"
    }
  });