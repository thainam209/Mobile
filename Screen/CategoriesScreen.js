import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Cate = ({ Image, name, content, onPress }) => {
  return (
    <View style={styles.productContainer}>
      <TouchableOpacity onPress={onPress}>
        <ImageBackground
          source={Image}
          style={{ flex: 1 }}
          imageStyle={{ width: 80, height: 80, alignItems: 'center', marginLeft: 45, marginTop: 20 }}
        >
          <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray', width: 120, marginTop: 120, marginLeft: 28 }} />
        </ImageBackground>
      </TouchableOpacity>
      <View style={{ marginTop: 120 }}>
        <Text style={{ fontWeight: '600', fontSize: 14, textAlign: 'center', marginTop: 20 }}>{name}</Text>
        <Text style={{ color: '#616A7D', fontWeight: 400, fontSize: 12, textAlign: 'center', marginTop: 10 }}>{content}</Text>
      </View>
    </View>
  );
};

export default function CategoriesScreen({ navigation }) {
  const [selectedTab, setSelectedTab] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
    navigation.navigate(tab);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', marginTop: 60, marginLeft: 20 }}>
          <Text style={{ fontSize: 22, fontWeight: 600, fontFamily: 'Manrope', color: '#F8F9FB' }}>
            Hey, Halal
          </Text>
          <TouchableOpacity onPress={() => setIsSearchVisible(!isSearchVisible)}>
            <Image
              source={require('../assets/icon_search.png')}
              style={{ width: 18, height: 20, marginLeft: 200, marginTop: 3 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ShoppingCart')}>
            <Image
              source={require('../assets/icon_bag.png')}
              style={{ width: 18, height: 20, marginLeft: 50, marginTop: 3 }}
            />
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 50, marginLeft: 20, color: 'white', marginTop: 25, fontWeight: 300 }}>
          Shop
        </Text>
        <Text style={{ fontSize: 50, marginLeft: 20, color: 'white', marginTop: 15, fontWeight: 800 }}>
          By Category
        </Text>
      </View>
      {isSearchVisible && (
        <View style={styles.searchOutsideHeader}>
          <Image
            source={require('../assets/icon_search.png')}
            style={{ width: 20, height: 20, marginLeft: 30 }}
          />
          <TextInput
            placeholder="Search Products or store"
            placeholderTextColor="#8891A5"
            style={{ marginLeft: 10, fontSize: 16, fontWeight: '500', color: '#1A2530', flex: 1 }}
          />
        </View>
      )}
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
          <Cate
            Image={require('../assets/icon_image.png')}
            name="Fishes"
            content="From Sea"
            onPress={() => navigation.navigate('ProductDetails')}
          />
          <Cate
            Image={require('../assets/icon_image.png')}
            name="Meats"
            content="Organic"
            onPress={() => navigation.navigate('ProductDetails')}
          />
          <Cate
            Image={require('../assets/icon_image.png')}
            name="Vegetables"
            content="Organic"
            onPress={() => navigation.navigate('ProductDetails')}
          />
          <Cate
            Image={require('../assets/icon_image.png')}
            name="Fruits"
            content="Fresh & Organic"
            onPress={() => navigation.navigate('ProductDetails')}
          />
          <Cate
            Image={require('../assets/icon_image.png')}
            name="Fruits"
            content="Fresh & Organic"
            onPress={() => navigation.navigate('ProductDetails')}
          />
          <Cate
            Image={require('../assets/icon_image.png')}
            name="Fruits"
            content="Fresh & Organic"
            onPress={() => navigation.navigate('ProductDetails')}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 280,
    backgroundColor: '#2A4BA0',
  },
  searchOutsideHeader: {
    width: 380,
    height: 60,
    backgroundColor: '#F8F9FB',
    borderRadius: 28,
    marginTop: 10,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productContainer: {
    borderRadius: 16,
    width: 170,
    height: 200,
    borderWidth: 1,
    marginLeft: 25,
    marginTop: 30,
    backgroundColor: '#F8F9FB'
  }
}); 