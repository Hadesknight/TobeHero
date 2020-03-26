import React from 'react';
import {useNavigation} from '@react-navigation/native'
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import {Feather} from "@expo/vector-icons"

import styles from './styles';
import Logo from '../../assets/logo.png'

export default function Incidents() {
  const navigation = useNavigation()


  function navigateToDetail(){
    navigation.navigate('Details')
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 casos.</Text>
        </Text>
      </View>
      <Text style={styles.title}>Bem Vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>

      <FlatList
        style={styles.incidentList}
        data={[1,2,3,4,5]}
        showsVerticalScrollIndicator={false}
        keyExtractor={incident => String(incident)}
        renderItem={()=>(

          <View style={styles.incidents}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>APAD</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>Cadelinha Atropelada</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>R$120,00</Text> 

            <TouchableOpacity style={styles.detailsButton} onPress={()=>navigateToDetail()}>
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041"/> 
            </TouchableOpacity>
          </View>

        )}
      
      />


     
    
    </View>
  );
}
