import { View, Text, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    CogIcon,
 } from 'react-native-heroicons/outline';

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle:"Anupma",
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-1">

        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2 px-3">
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

        <View  className="flex-row items-center space-x-2 pb-2 mx-4 px-3">
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

    </SafeAreaView>
  )
}