import React, { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from "react-native-heroicons/outline";

import Categories from '../components/categories/Categories';


export default function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])


  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
        source={{ uri: 'https://links.papareact.com/wru' }}
        className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />
        <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs"> Livrer maintenant !</Text>
            <Text className="font-bold text-gray-400 text-xl">
                Localisation
                <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Header */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
        <MagnifyingGlassIcon size={20} color="gray"/>
        <TextInput
        placeholder='restaurants'
        keyboardType='default' />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView
      className="bg-gray-100"
      contentContainerStyle={{
        paddingBottom: 100,
      }} >
        {/* Categories */}
        <Categories />


        {/* Featured Rows */} 
      </ScrollView>


    </SafeAreaView>
  )
}