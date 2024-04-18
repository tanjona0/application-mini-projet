import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      
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
      <Button title="connecter" onPress={() => navigation.navigate('Parent')} />
      <Text style={styles.text}>Pas encore inscrit?</Text>
      <Button 
        color={"gray"}
        onPress={() => navigation.navigate('Register')}
        title="S'inscrire" />
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
  }
});
