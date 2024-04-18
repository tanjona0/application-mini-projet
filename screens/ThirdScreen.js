import React from 'react-native';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import splash from '../assets/third.jpg';

export default function ThirdScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <View>
            <Image source={splash} style={styles.img} />
        </View>
        <Text style={styles.title}>Autoriser ou bloquer des Applications</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Fourth')} style={styles.button}>
            <Text style={styles.buttonText}>SUIVANT</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop : 50,
    paddingHorizontal : 22
  },
  img : {
    marginTop : 100,
    width: 250,
    height: 250,
    borderRadius : 20,
    alignSelf: 'center'
  },
  title : {
    fontSize : 24,
    fontWeight : '600',
    color : '#444',
    alignSelf : 'center',
    padding: 54,
    paddingBottom : 24
  },
  button : {
    marginTop : 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '70%',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius : 15,
    backgroundColor: '#0065ff'
},
buttonText:{
    color: 'white',
    fontSize : 24,
    fontWeight : 'bold'
}
});
