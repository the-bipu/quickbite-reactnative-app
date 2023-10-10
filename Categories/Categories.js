import { View, Text, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import CategoryCard from './CategoryCard';
import client, { urlFor } from '../sanity';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client.fetch(
      `
      *[_type == "category"]
      `
    ).then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >

      {categories?.map((item) => (
        <CategoryCard 
          key={item._id}
          imgUrl={urlFor(item.image).width(200).url()} 
          title={item.name}
        />
      ))}

      {/* <CategoryCard 
        imgUrl="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1380&q=80" 
        title="Trial 1" 
      />

      <CategoryCard 
        imgUrl="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1381&q=80" 
        title="Trial 1" 
      />

      <CategoryCard 
        imgUrl="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80" 
        title="Trial 1" 
      />

      <CategoryCard 
        imgUrl="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
        title="Trial 1" 
      />

      <CategoryCard 
        imgUrl="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1310&q=80" 
        title="Trial 1" 
      /> */}

    </ScrollView>
  )
}