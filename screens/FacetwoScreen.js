import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Switch, Button } from 'react-native';
import DateTimePicker from "@react-native-community/datetimepicker";
import { StatusBar } from "expo-status-bar";
import fb from '../assets/fb.png';



export default function FacetwoScreen({ navigation })  {

  const [Enabled, setEnabled] = useState(false);
  const [Enableed, setaEnabled] = useState(false);
  const [Enableeed, setaaEnabled] = useState(false);
  const [Enableeeed, setaaaEnabled] = useState(false);
  const [Enableeeeed, setaaaaEnabled] = useState(false);
  const [Enableeeeeed, setaaaaaEnabled] = useState(false);
  const [Enableeeeeeed, setaaaaaaEnabled] = useState(false);

  const LundiSwitch = () => {
    setEnabled(!Enabled);
  };

  const MardiSwitch = () => {
    setaEnabled(!Enableed);
  };

  const MercrediSwitch = () => {
    setaaEnabled(!Enableeed);
  };

  const JeudiSwitch = () => {
    setaaaEnabled(!Enableeeed);
  };

  const VendrediSwitch = () => {
    setaaaaEnabled(!Enableeeeed);
  };

  const SamediSwitch = () => {
    setaaaaaEnabled(!Enableeeeeed);
  };

  const DimancheSwitch = () => {
    setaaaaaaEnabled(!Enableeeeeeed);
  };

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heure d'utilisation</Text>
      
    
      <View style={styles.switchContainer}>
      <Text style={styles.switchText}>
          Lundi
        </Text>
      <Text style={styles.switchText}>
          07h00 - 21h00
        </Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={Enabled ? '#81b0ff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={LundiSwitch}
          value={Enabled}
        />
        
      </View>
      <View style={styles.switchContainer}>
      <Text style={styles.switchText}>
        Mardi
        </Text>
      <Text style={styles.switchText}>
          07h00 - 21h00
        </Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={Enableed ? '#81b0ff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={MardiSwitch}
          value={Enableed}
        />
        
      </View>
      <View style={styles.switchContainer}>
      <Text style={styles.switchText}>
          Mercredi
        </Text>
      <Text style={styles.switchText}>
        07h00 - 21h00
        </Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={Enableeed ? '#81b0ff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={MercrediSwitch}
          value={Enableeed}
        />
        
      </View>
      <View style={styles.switchContainer}>
      <Text style={styles.switchText}>
          Jeudi
        </Text>
      <Text style={styles.switchText}>
        07h00 - 21h00
        </Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={Enableeeed ? '#81b0ff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={JeudiSwitch}
          value={Enableeeed}
        />
        
      </View>
      <View style={styles.switchContainer}>
      <Text style={styles.switchText}>
          Vendredi
        </Text>
      <Text style={styles.switchText}>
        Aucun
        </Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={Enableeeeed ? '#81b0ff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={VendrediSwitch}
          value={Enableeeeed}
        />
        
      </View>
      <View style={styles.switchContainer}>
      <Text style={styles.switchText}>
          Samedi
        </Text>
      <Text style={styles.switchText}>
        Aucun
        </Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={Enableeeeeed ? '#81b0ff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={SamediSwitch}
          value={Enableeeeeed}
        />
        
      </View>
      <View style={styles.switchContainer}>
      <Text style={styles.switchText}>
          Dimanche
        </Text>
      <Text style={styles.switchText}>
        07h00 - 21h00
        </Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={Enableeeeeeed ? '#81b0ff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={DimancheSwitch}
          value={Enableeeeeeed}
        />
        
      </View>

      <View style={styles.footer}>
            <TouchableOpacity onPress={()=> navigation.navigate('Face1')}>
                <Text >App</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Face2')}>
                <Text style={{color : '#81b0ff', fontWeight : 'bold', fontSize : 16,}}>Heure</Text>
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
    marginTop : 150,
    flexDirection : 'row',
    justifyContent : 'space-evenly',
    paddingVertical : 20,
    width :'100%',
    backgroundColor : 'white',
},
});
