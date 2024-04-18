import React from 'react-native';
import { Button, Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import splash from '../assets/Limit.jpg';

export default function LimitScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <View>
            <Image source={splash} style={styles.img} />
        </View>
        <Text style={styles.title}>Prêt à être administrateur de famille? </Text>
        <Text style={{fontSize : 20}}>- Définir les durée limites d’utilisation en journée ou pendant la nuit.</Text>
        <Text style={{fontSize : 20}}>- Autoriser ou bloquer des Applications</Text>
        <Text style={{fontSize : 20}}>- Localiser rapidement l’appareil de votre enfant</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Face1')} style={styles.button}>
            <Text style={styles.buttonText}>Je suis prêt</Text>
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
    marginTop : 70,
    width:150,
    height: 150,
    borderRadius : 100,
    alignSelf: 'center'
  },
  title : {
    fontSize : 24,
    fontWeight : '600',
    color : '#444',
    alignSelf : 'center',
    padding: 25,
    paddingBottom : 24,
    paddingTop : 50
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
    fontSize : 24,
    fontWeight : 'bold'
}
});
