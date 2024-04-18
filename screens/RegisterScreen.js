import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { AntDesign }from '@expo/vector-icons';

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Creer un compte</Text>
      <TextInput 
        style={styles.Input}
        keyboardType="email-address"
        placeholder="Adresse e-mail" />
      <TextInput 
        style={styles.Input}
        autoCorrect={false}
        secureTextEntry={true}
        textContentType="password"
        placeholder="Mot de passe" />
        <TextInput 
        style={styles.Input}
        autoCorrect={false}
        secureTextEntry={true}
        textContentType="password"
        placeholder="Re-entrer Mot de passe" />
      <Button title="S'inscrire" />
      <Text style={styles.text}>Deja inscrit?</Text>
      <Button 
        color={"gray"}
        onPress={() => navigation.navigate('Login')}
        title="Connecter" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop : 50,
    paddingHorizontal : 12
  },
  Input : {
    marginBottom : 20,
    borderWidth : 1,
    borderColor : '#333',
    borderRadius : 8,
    padding : 12
  },
  text : {
    fontSize : 18,
    padding : 12,
    textAlign : 'center'
  },
  title : {
    fontSize : 24,
    fontWeight : '600',
    color : '#444',
    alignSelf : 'center',
    paddingBottom : 24
  },
  img : {
    width:170,
    height: 100
  }
});
