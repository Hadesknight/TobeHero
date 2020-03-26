import React from 'react';
import {Feather} from '@expo/vector-icons'
import * as MailComposer from 'expo-mail-composer'
import {useNavigation} from '@react-navigation/native'
import { View , Text, Image, TouchableOpacity, Linking} from 'react-native';



import Logo from '../../assets/logo.png'
import styles  from './styles';

export default function Details() {

  const navigation = useNavigation()

  const message = "Olá APAD, Estou entrando em contato pois gostaira de ajudar no caso 'Cadelinha Atropelada' com o valor de R$120,00 "

  function backToHome(){
    navigation.goBack()
  }


  function sendMail(){
    MailComposer.composeAsync({
      subject: 'Herói do Caso: Cadelinha Atropelada',
      recipients:['fernandorato.0@hotmail.com'],
      body: message
    })

  }

  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=5533991519995&text=${message}`)

  }

  return (
    <View style={styles.container}>
    <View style={styles.header}>
        <Image source={Logo} />
       <TouchableOpacity onPress={()=>backToHome()}>
         <Feather name="arrow-left" size={28} color="#e02041"/>
       </TouchableOpacity>
      </View>

      <View style={styles.incidents}>

            <Text style={[styles.incidentProperty, {marginTop:0}]}>ONG:</Text>
            <Text style={styles.incidentValue}>APAD</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>Cadelinha Atropelada</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>R$120,00</Text> 

      </View>


      <View style={styles.contactbox}>
        <Text style={styles.heroTitle}>Salve o Dia</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={()=>sendWhatsapp()}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.action} onPress={()=>sendMail()}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
  );
}
