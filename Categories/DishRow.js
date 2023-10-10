import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { urlFor } from '../sanity';

export default function DishRow({ id, name, description, price, image }) {
  return (
    <TouchableOpacity className="bg-white border p-4 border-gray-200">
      <View className="flex-row">
        <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            {/* Add here currency formatter */}
            <Text className="text-gray-400 mt-1">
                Price Here
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
  )
}