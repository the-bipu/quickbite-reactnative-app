import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

export default function FeaturedRow({title, description}) {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg">{title}</Text>
            <ArrowRightIcon color="#00CCBB" />
        </View>

        <Text className="text-xs text-gray-500 px-4">{description}</Text>

        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
            }}
            showsHorizontalScrollIndicator={false}
            className="pt-4"
        >

            {/* Restaurant Card */}
            <RestaurantCard 
                id={123}
                imgUrl="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1310&q=80"
                title="Yo! Sushi"
                rating={4.5}
                genre="Japanese"
                address="123 Main Street"
                short_description="This is a Test Description"
                dishes={[]}
                long={20}
                lat={20}
            />

            {/* Restaurant Card */}
            <RestaurantCard 
                id={123}
                imgUrl="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1310&q=80"
                title="Yo! Sushi"
                rating={4.5}
                genre="Japanese"
                address="123 Main Street"
                short_description="This is a Test Description"
                dishes={[]}
                long={20}
                lat={20}
            />
            
            {/* Restaurant Card */}
            <RestaurantCard 
                id={123}
                imgUrl="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1310&q=80"
                title="Yo! Sushi"
                rating={4.5}
                genre="Japanese"
                address="123 Main Street"
                short_description="This is a Test Description"
                dishes={[]}
                long={20}
                lat={20}
            />

        </ScrollView>
    </View>
  )
};