import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    CogIcon,
 } from 'react-native-heroicons/outline';
import Categories from '../Categories/Categories';
import FeaturedRow from '../Categories/FeaturedRow';
import client from '../sanity';


export default function HomeScreen() {
  const navigation = useNavigation();
  const [featuredRestaurants, setFeaturedRestaurants] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle:"Anupma",
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await client.fetch(`*[_type == "featured"] {
          ...,
          restaurants[] -> {
            ...,
            dishes[]->
          }
        }`);
        setFeaturedRestaurants(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchRestaurants();
  }, []);

  
  console.log(featuredRestaurants);

  return (
    <SafeAreaView className="bg-white pt-1">

        {/* Header */}
        <View className="flex-row pb-3 mx-1 items-center space-x-2 px-3">
          <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/6833/6833605.png'
              }}
              className="h-8 w-8 bg-gray-300 p-4 rounded-full"
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliever Now!
            </Text>

            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>

          </View>

          <UserIcon size={35} color="#00CCBB" />
        </View>

        <View  className="flex-row items-center space-x-2 pb-2 mx-1 px-3">
          <View className="flex-row space-x-2 p-3 flex-1 bg-gray-300">
            <MagnifyingGlassIcon color="gray" size={20} />
            <TextInput
              placeholder='Restaurants and cuisines'
              keyboardType='default'
              style={{ fontSize: 17, color: 'black'}}
              placeholderTextColor='gray'
            />
          </View>
          
          <CogIcon color="#00CCBB" />
        </View>

        {/* Body */}
        <ScrollView 
          className="bg-gray-100"
          contentContainerStyle={{
            paddingBottom: 100,
          }}
        >
          {/* Categories */}
          <Categories />

          {featuredRestaurants?.map((item) => (
            <FeaturedRow
              key={item._id}
              id={item._id}
              title={item.name}
              description={item.short_description}
            />
          ))}

          {/* Featured */}
          {/* <FeaturedRow
          id="123"
            title="Featured"
            description="Paid Placements for our partners"
          /> */}

          {/* Tasty Discounts */}
          {/* <FeaturedRow
          id="124"
            title="Tasty Discounts"
            description="Paid Placements for our partners"
          /> */}

          {/* Offers near you */}
          {/* <FeaturedRow
          id="125"
            title="Offers near you"
            description="Paid Placements for our partners"
          /> */}

        </ScrollView>

    </SafeAreaView>
  )
}