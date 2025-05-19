import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FavouriteScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', marginTop: 60, marginLeft: 20 }}>
          <Text style={{ fontSize: 22, fontWeight: 600, fontFamily: 'Manrope', color: '#F8F9FB' }}>
            Hey, Halal
          </Text>
        </View>
        <Text style={{ fontSize: 50, marginLeft: 20, color: 'white', marginTop: 25, fontWeight: 300 }}>
          Your
        </Text>
        <Text style={{ fontSize: 50, marginLeft: 20, color: 'white', marginTop: 15, fontWeight: 800 }}>
          Favourites
        </Text>
      </View>
      <View style={styles.scrollContent}>
        <Text style={styles.message}>No favorites yet!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 280,
    backgroundColor: '#2A4BA0',
  },
  scrollContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  message: {
    fontSize: 16,
    color: '#616A7D',
    marginTop: 20,
    textAlign: 'center',
  },
}); 