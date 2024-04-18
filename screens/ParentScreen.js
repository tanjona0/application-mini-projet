import React from 'react-native';
import { Button, Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import splash from '../assets/parent.jpg';

export default function LimitScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <View>
            <Image source={splash} style={styles.img} />
        </View>
        <Text style={styles.title}>Qui utilisera ce téléphone?</Text>
        <View style={styles.btnto}>
            <TouchableOpacity onPress={()=> navigation.navigate('Limit')} style={styles.button}>
                <Text style={styles.buttonText}>Parent</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')} style={styles.button}>
                <Text style={styles.buttonText}>Enfant</Text>
            </TouchableOpacity>
        </View>
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
    width: '40%',
    borderRadius : 15,
    backgroundColor: '#0065ff',
    alignSelf : 'center',
    alignItems : 'center',
    textAlign : 'center',
    marginHorizontal : 16
},
btnto : {
    flexDirection : 'row'
},
buttonText:{
    color: 'white',
    fontSize : 24,
    fontWeight : 'bold',
    padding: 5
}
});
