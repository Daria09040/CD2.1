import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView,Image } from 'react-native';

export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      <Text style={{fontWeight:"bold", top: 15, color:"black", fontSize:25, front:'courier'}}>Журнал Bright {'\n'} </Text>
      <View style={styles.box}>
        <Text style={{color:'blue', fontSize: 15, top:20, left: 32}}>Новости</Text>
        <Image style={{width: 300, height: 200, top: 50, right: 32}} source={{uri: "https://attuale.ru/wp-content/uploads/2019/01/elitefon.ru_12527.jpg"}} />
        <Text style={{position:'absolute', top: 270,left:23,fontWeight:"bold", color:"black", fontSize:25}}>Помощь себе при стрессе</Text>
        <Text style={{position:'absolute' ,top: 320,left:23,fontWeight:"normal", color:"black", fontSize:18}}>
          1. Возьмите паузу.{'\n'}
          2. Витаминотерапия.{'\n'}
          3. Правильное питание. {'\n'}
          4. Ароматерапия.{'\n'}
          5. Психологическая помощь. {'\n'}
          6. Экстрим. {'\n'}
          7. Займитесь спортом. {'\n'}
          8. Древнейшая система - йога.{'\n'}
          9. Чаще улыбайтесь. {'\n'}
        </Text>
      </View>
                    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#DDABDD',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  box: {
    flex: 0,
    backgroundColor:'#FFCAC9',
    width: 350,
    height: 650,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative'
  },

});
