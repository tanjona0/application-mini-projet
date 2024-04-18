import React from 'react-native';
import { Button, Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import splash from '../assets/first.jpg';

export default function FirstScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <View>
            <Image source={splash} style={styles.img} />
        </View>
        <Text style={styles.title}>Faciliter la définition de règles de base pour les enfants et adolescents</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Second')} style={styles.button}>
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
    width:250,
    height: 250,
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
