import React, { useState } from 'react'
import { View, ScrollView, StyleSheet, Modal } from 'react-native'
import { party } from '../../party'
import NavigationDrawer from './navigationDrawer'
import ButtonOpen from './createPartyButton'
import CreateParty from './newParty'
import AllParty from './allParty'
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#161D1B',
    opacity:1
  },
  modal:{
    flex:1, 
    justifyContent:'center',
    margin:20, 
  }
})

function HomeScreen({navigation}){
  const [open, setOpen] = useState(false)
  const toggleModal = ()=>{setOpen(!open)}
  const closeModal = ()=>{setOpen(false)}
    return(
      <View style={styles.container}>
      <ScrollView >
        <NavigationDrawer navigation={navigation}/>
          {party.map(part =>
          <AllParty
            details={navigation}
            name={part.name} 
            date={part.date} 
            winner={part.winner} 
            hour={part.hour}
          />)}
       </ScrollView>
       <ButtonOpen openModal={toggleModal}/>
       <Modal
        visible={open}
        animationType={'slide'}
        onRequestClose={closeModal}
        transparent={true}
        >
          <View style={styles.modal}>
          <CreateParty close={closeModal}/>
          </View>
       </Modal>
      </View>
    )
  }
  export default HomeScreen