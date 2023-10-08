import { View, Text, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import client from '../sanity';

export default function FeaturedRow({id, title, description}) {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        client.fetch(
            `*[ _type == "featured" && _id == $id ] {
                ...,
                restaurants[] -> {
                ...,
                dishes[]->,
                    type-> {
                        name
                    }
                },
            }[0]
            `, 
            { id }
            )
            .then((data) => {
                setRestaurants(data?.restaurants);
            });
    }, [id]);
      
    // console.log(restaurants);

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
            {restaurants?.map((item) => (
                <RestaurantCard 
                    key={item._id}
                    id={item._id}
                    imgUrl={item.image}
                    address={item.address}
                    name={item.name}
                    dishes={item.dishes}
                    rating={item.rating}
                    short_description={item.short_description}
                    genre={item.type?.name}
                    long={item.long}
                    lat={item.lat}
                />
            ))}

        </ScrollView>
    </View>
  )
};