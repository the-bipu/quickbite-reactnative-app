import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { selectBasketItems } from '../features/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';

const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
    const dispatch = useDispatch();

    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {});

        setGroupedItemsInBasket(groupedItems);
    }, [items]);

    const rupeeIndian = Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
    });

  return (
    <SafeAreaView className="flex-1 bg-white pt-5">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-x5">
            <View>
                <Text className="text-lg font-bold text-center">
                    Basket</Text>
                <Text className="text-center text-gray-400">
                    {restaurant.name}</Text>
            </View>

            <TouchableOpacity
                onPress={navigation.goBack}
                className="rounded-full bg-gray-100 absolute top-3 right-5"
            >
                <XCircleIcon color="#00CCBB" height={50} width={50} />
            </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-2">
            <Image source={{
                uri: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }} 
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
            <Text className="flex-1">Deliver in 50-70 min</Text>
            <TouchableOpacity>
                <Text className="text-[#00CCBB]">Change</Text>
            </TouchableOpacity>
        </View>

        <ScrollView>
            {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                <View key={key}>
                    <Text>{items.length}</Text>
                    <Image source={{
                        uri: urlFor(items[0]?.image).url()
                    }} 
                    className="w-12 h-12 rounded-full"
                    />
                    <Text>{items[0]?.name}</Text>

                    <Text>
                        {items[0]?.price}
                    </Text>
                </View>
            ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen