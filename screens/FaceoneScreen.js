import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import fb from '../assets/fb.png';
import insta from '../assets/instagram.png';
import twitt from '../assets/twitter.png';
import chrome from '../assets/messenger.png';
import whatsapp from '../assets/whatsapp.png';
import Milimilitari from '../assets/milimilitari.png';


export default function FaceoneScreen({ navigation })  {

  const [isEnabled, setIsEnabled] = useState(false);
  const [Enabled, setEnabled] = useState(false);
  const [NoEnabled, setaEnabled] = useState(false);
  const [NooEnabled, setaaEnabled] = useState(false);
  const [NoooEnabled, setaaaEnabled] = useState(false);
  const [NooooEnabled, setaaaaEnabled] = useState(false);


  const facebookSwitch = () => {
    setIsEnabled(!isEnabled);
  };
  const instagramSwitch = () => {
    setaEnabled(!NoEnabled);
  };
  const twitterSwitch = () => {
    setEnabled(!Enabled);
  };
  const ChromeSwitch = () => {
    setaaEnabled(!NooEnabled);
  };
  const whatsappSwitch = () => {
    setaaaEnabled(!NoooEnabled);
  };
  const milimilitariSwitch = () => {
    setaaaaEnabled(!NooooEnabled);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Application autorisée</Text>
      <View style={styles.switchContainer}>
      <Image source={fb} style={styles.img} />
        <Text style={styles.switchText}>
          Facebook
        </Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#81b0ff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={facebookSwitch}
          value={isEnabled}
        />
        
      </View>
      <View style={styles.switchContainer}>
        <Image source={insta} style={styles.img} />
        <Text style={styles.switchText}>
          Instagram
        </Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={NoEnabled ? '#81b0ff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={instagramSwitch}
          value={NoEnabled}
        />
        
      </View>
      <View style={styles.switchContainer}>
        <Image source={twitt} style={styles.img} />
        <Text style={styles.switchText}>
          Twitter
        </Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={Enabled ? '#81b0ff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={twitterSwitch}
          value={Enabled}
        />
        
      </View>
      <View style={styles.switchContainer}>
        <Image source={chrome} style={styles.img} />
        <Text style={styles.switchText}>
          Messenger
        </Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={NooEnabled ? '#81b0ff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={ChromeSwitch}
          value={NooEnabled}
        />
        
      </View>
      <View style={styles.switchContainer}>
        <Image source={whatsapp} style={styles.img} />
        <Text style={styles.switchText}>
          whatsapp
        </Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={NoooEnabled ? '#81b0ff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={whatsappSwitch}
          value={NoooEnabled}
        />
  
      </View>
      <View style={styles.switchContainer}>
        <Image source={Milimilitari} style={styles.img} />
        <Text style={styles.switchText}>
          Milimilitarii
        </Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={NooooEnabled ? '#81b0ff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={milimilitariSwitch}
          value={NooooEnabled}
        />
  
      </View>
      
      <View style={styles.footer}>
            <TouchableOpacity onPress={()=> navigation.navigate('Face1')}>
                <Text style={{color : '#81b0ff', fontWeight : 'bold', fontSize : 16,}}>App</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Face2')}>
                <Text>Heure</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Face3')}>
                <Text>Localisaton</Text>
            </TouchableOpacity>
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop : 20,
    alignItems : 'center'
  },
  title: {
    marginTop : 50,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom : 10
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 0,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    borderTopWidth : 1,
    borderBottomWidth : 1
  },
  switchText: {
    fontSize: 16,
  },
  img : {
    width : 50,
    height : 50,
  },
  footer : {
    marginTop : 210,
    flexDirection : 'row',
    justifyContent : 'space-evenly',
    paddingVertical : 20,
    width :'100%',
    backgroundColor : 'white',
},
});
