import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle:"Anupma",
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* <Text className="text-red-500">HomeScreen</Text> */}

      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/6833/6833605.png'
            }}
            className="h-8 w-8 bg-gray-300 p-4 rounded-full"
        />

        <View>
          <Text className="font-bold text-gray-400 text-xs">Deliever Now!</Text>
          <Text className="font-bold text-xl">Current Location</Text>
      </View>
      </View>
    </SafeAreaView>
  )
}