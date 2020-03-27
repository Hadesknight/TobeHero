import React from 'react';
import {Feather} from '@expo/vector-icons'
import * as MailComposer from 'expo-mail-composer'
import {useNavigation, useRoute} from '@react-navigation/native'
import { View , Text, FlatList, Image, TouchableOpacity, Linking} from 'react-native';



import Logo from '../../assets/logo.png'
import styles  from './styles';

export default function Details() {

  const navigation = useNavigation()
  const route = useRoute()

  const incident = route.params.incidents

  

  const message = `Olá APAD, Estou entrando em contato pois gostaira de ajudar no caso '${incident.title}' com o valor de R$ ${incident.value},00 `

  function backToHome(){
    navigation.goBack()
  }


  function sendMail(){
    MailComposer.composeAsync({
      subject: `Herói do Caso: ${incident.title}`,
      recipients:[`${incident.email}`],
      body: message
    })

  }

  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)

  }

  return (
    <View style={styles.container}>
    <View style={styles.header}>
        <Image source={Logo} />
       <TouchableOpacity onPress={()=>backToHome()}>
         <Feather name="arrow-left" size={28} color="#e02041"/>
       </TouchableOpacity>
      </View>

    



    <FlatList  
      data={[incident]}
      keyExtractor={incident => String(incident.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <>

          <View style={styles.incidents} >
            <Text style={[styles.incidentProperty, {marginTop:0}]}>Caso:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>Descrição:</Text>
            <Text style={styles.incidentValue}>{incident.description}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>R${incident.value},00</Text> 

          <View style={styles.contactbox}>

          </View>
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
        </>

        
      )}
    
    />








      { /**
      <View style={styles.incidents}>

            <Text style={[styles.incidentProperty, {marginTop:0}]}>Caso:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>Descrição:</Text>
            <Text style={styles.incidentValue}>{incident.description}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>R${incident.value},00</Text> 

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
      </View> */}

    </View>
  );
}
