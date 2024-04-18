import React from 'react-native';
import { Button, Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import splash from '../assets/second.png';

export default function SecondScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <View>
            <Image source={splash} style={styles.img} />
        </View>
        <Text style={styles.title}>Définir les durée limites d’utilisation en journée ou pendant la nuit

</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Third')} style={styles.button}>
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
    borderRadius : 100,
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
    marginTop : 10,
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
