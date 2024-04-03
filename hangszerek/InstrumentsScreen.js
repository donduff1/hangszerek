/*
* File: InstrumentScreen.js
* Author: Decker Borisz
* Copyright: 2024, Decker Borisz
* Group: Szoft II
* Date: 2024-04-03
* Github: https://github.com/donduff1/hangszerek
* Licenc: GNU GPL
*/

import React, { useState } from 'react';
import { ScrollView, Pressable, StyleSheet, Text, View } from 'react-native';

export default function InstrumentsScreen() {
  const instrumentHost = "http://localhost:3000/";
  const instrumentEndpoint = "hangszerek";
  const instrumentUrl = `${instrumentHost}${instrumentEndpoint}`;

  const [instruments, setInstruments] = useState([]);

  function getInstruments() {
    fetch(instrumentUrl)
      .then(response => response.json())
      .then(result => {
        setInstruments(result);
        console.log(result)
      })
      .catch(error => console.error("Error fetching instruments data:", error));
  }

  return (
    <ScrollView contentContainerStyle={styles.container} >
      <Text style={styles.title}>Hangszerek</Text>

      <Pressable onPress={getInstruments} style={styles.button}>
        <Text style={styles.buttonText}>Hangszerek lekérése</Text>
      </Pressable>

      {instruments.map((instrument, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{instrument.Név}</Text>
          <Text style={styles.cardText}>Típus: {instrument.Típus}</Text>
          <Text style={styles.cardText}>Márka: {instrument.Márka}</Text>
          <Text style={styles.cardText}>Év: {instrument.Év}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#dfe6e9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#6a0dad',
  },
  button: {
    backgroundColor: '#6a0dad',
    padding: 10,
    borderRadius: 8,
    marginVertical: 8,
    width: '200px',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#d8b4fe',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    width: '75%',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#4a148c',
  },
  cardText: {
    fontSize: 14,
    marginBottom: 4,
    color: '#7e57c2', 
  },
});


