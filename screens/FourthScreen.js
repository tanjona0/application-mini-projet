import React from 'react-native';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import splash from '../assets/fourth.jpg';

export default function FourthScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <View>
            <Image source={splash} style={styles.img} />
        </View>
        <Text style={styles.title}>Localiser rapidement l’appareil de votre enfant

</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Register')} style={styles.button}>
          <Text style={styles.buttonText}>COMMENCER</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop : 50,
    paddingHorizontal : 52
  },
  img : {
    marginTop : 100,
    width:250,
    height: 250,
    borderRadius : 20,
    alignSelf: 'center'
  },
  title : {
    fontSize : 24,
    fontWeight : '600',
    color : '#444',
    alignSelf : 'center',
    padding: 25,
    paddingBottom : 40
  },
  button : {
    marginTop : 30,
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
    fontSize : 20,
    fontWeight : 'bold'
}
});
