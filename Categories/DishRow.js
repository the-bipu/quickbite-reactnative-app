import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { urlFor } from '../sanity';
import { useDispatch, useSelector } from 'react-redux';

import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from '../features/basketSlice';

export default function DishRow({ id, name, description, price, image }) {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const rupeeIndian = Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
  });

  const addItemsToBasket = () => {
    dispatch(addToBasket({id, name, description, price, image}))
  };

  const removeItemFromBasket = () => {
    if(!items.length > 0) return;

    dispatch(removeFromBasket({ id }));
  }

  return (

    <>
    <TouchableOpacity 
    onPress={() => setIsPressed(!isPressed)}
    className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}>
      <View className="flex-row">
        <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            {/* Add here currency formatter */}
            <Text className="text-gray-400 mt-1">
              {rupeeIndian.format(price)}
            </Text>
        </View>

        <View className="flex-row items-center">
            <Image
                style={{
                    borderWidth: 1,
                    borderColor: "#F3F3F4",
                    borderRadius: 10,
                }}
                source={{ uri: urlFor(image).url() }}
                className="h-20 w-20 bg-gray-300 p-4"
            />
        </View>
      </View>
    </TouchableOpacity>

    {isPressed && (
      <View className="bg-white px-4">
        <View className="flex-row items-center space-x-2 pb-3">
          <TouchableOpacity 
            disabled={!items.length}
            onPress={removeItemFromBasket}
          >
              <MinusCircleIcon 
                color={items.length > 0 ? "#00CCBB" : "gray"}
                size={40}
              />
          </TouchableOpacity>

            <Text>{items.length}</Text>

          <TouchableOpacity onPress={addItemsToBasket}>
              <PlusCircleIcon 
                color="#00CCBB"
                size={40}
              />
          </TouchableOpacity>
        </View>
      </View>
    )}
    </>
  )
}