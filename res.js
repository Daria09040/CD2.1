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
        <Text style={{position:'absolute', top: 250,left:23,fontWeight:"bold", color:"black", fontSize:25}}>Превращаем стресс в {'\n'}своего помощника</Text>
        <Text style={{position:'absolute' ,top: 330,left:23,fontWeight:"normal", color:"black", fontSize:22,}}>
        Исследователи Йельского {'\n'}
        университета заявляют, что {'\n'}
        люди, которые рассматривают{'\n'}
        стресс, как возможность {'\n'}
        личностного роста, отмечают{'\n'}
        улучшение качества жизни.{'\n'}
        {'\n'}
        Сегодня узнаем, как это {'\n'}
        работает и как увидеть {'\n'}
        положительные стороны {'\n'}
        стресса.
        </Text>
      </View>
                    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9C9C9C',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  box: {
    flex: 0,
    backgroundColor:'#E8E8E8',
    width: 350,
    height: 650,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative'
  },
});
