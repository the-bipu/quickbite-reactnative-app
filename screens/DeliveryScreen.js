import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { XMarkIcon } from 'react-native-heroicons/outline';
import * as Progress from 'react-native-progress'
import MapView, { Marker } from 'react-native-maps';

const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5 pt-10">
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                {/* <XMarkIcon color="white" size={30} /> */}
                <Text className="font-light text-white text-lg">Go Back</Text>
            </TouchableOpacity>
            <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-1 rounded-md p-6 z-50 shadow-md">
            <View className="flex-row justify-between">
                <View>
                    <Text className="text-lg text-gray-400">
                        Estimated Arrival
                    </Text>
                    <Text className="text-4xl font-bold">45-50 Minutes</Text>
                </View>
                <Image 
                    source={{
                        uri: "https://img.freepik.com/free-vector/delivery-service-illustrated-concept_23-2148505082.jpg?w=740&t=st=1699213465~exp=1699214065~hmac=4006c8ec381088fa98cd7cc02dc900d1f5bc12dff19223ed8099a9a585eb6874"
                    }} 
                    className="w-20 h-20" 
                />
            </View>

            <Progress.Bar size={30} indeterminate={true} color='#00CCBB' />


            <Text className="mt-3 text-gray-500">
                Your order at {restaurant.name} is being prepared.
            </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        }}
        mapType='mutedStandard'
        className="flex-1 -mt-10 z-0"
      >
        <Marker 
            coordinate={{
                latitude: restaurant.lat,
                longitude: restaurant.long,
            }}
            title={restaurant.name}
            description={restaurant.short_description}
            identifier='origin'
            pinColor='#00CCBB'
        />
      </MapView>

        <SafeAreaView 
            className="bg-white flex-row items-center space-x-5 h-24"
        >
            <Image 
                source={{
                    uri: "https://images.unsplash.com/photo-1635620201965-38f8ae7dd9df?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxVQkFLb1Q4cTFYUXx8ZW58MHx8fHx8"
                }} 
                className="w-12 h-12 ml-5 p-4 rounded-full bg-gray-300"
            />
            <View className="flex-1">
                <Text className="text-xl font-bold">Jonny Blaze</Text>
                <Text className="text-gray-400">Your Rider</Text>
            </View>

            <View className="bg-[#00CCBB] w-12 h-12 mr-5 flex items-center justify-center rounded-full">
                <Text className="text-[#fff] text-lg font-bold">
                    Call
                </Text>
            </View>
        </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen