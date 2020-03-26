import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native'
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import {Feather} from "@expo/vector-icons"

import api from '../../services/api'

import styles from './styles';
import Logo from '../../assets/logo.png'

export default function Incidents() {

  const [incidents, setIncidents] = useState([])
  const [total, setTotal] = useState(0)
  const navigation = useNavigation()


  useEffect(()=>{
    async function LoadProfile(){
      const response = await api.get('incidents')
      

      setIncidents(response.data)
      setTotal(response.headers['x-total-count'])
    }

    LoadProfile()
  },[])

  function navigateToDetail(){
    navigation.navigate('Details')
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos.</Text>
        </Text>
      </View>
      <Text style={styles.title}>Bem Vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>

      <FlatList
        style={styles.incidentList}
        data={incidents}
        showsVerticalScrollIndicator={false}
        keyExtractor={incident => String(incident.id)}
        renderItem={({item})=>(

          <View style={styles.incidents}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{item.name}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{item.title}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>R${item.value},00</Text> 

            <TouchableOpacity style={styles.detailsButton} onPress={()=>navigateToDetail(item.id)}>
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041"/> 
            </TouchableOpacity>
          </View>

        )}
      
      />


     
    
    </View>
  );
}
