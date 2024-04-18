import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import fb from '../assets/fb.png';
import insta from '../assets/instagram.png';
import twitt from '../assets/twitter.png';
import chrome from '../assets/messenger.png';


export default function FacetwoScreen({ navigation })  {

 


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Localisation</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop : 40,
    alignItems : 'center'
  },
  title: {
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
    flexDirection : 'row',
    justifyContent : 'space-evenly',
    paddingVertical : 20,
    top : 190,
    width :'100%',
    backgroundColor : 'white',
},
});
