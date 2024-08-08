import React, { useEffect, useState } from "react";
import { View, Image, FlatList, StatusBar, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import Spinner from "react-native-loading-spinner-overlay";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import { list } from "./data";
import { Product } from "@/types/product";
import { ProductItem } from "@/components/product-item";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const [areFontsLoaded, setAreFontsLoaded] = useState(false);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
      setAreFontsLoaded(true);
    }
  }, [fontsLoaded]);

  if (!areFontsLoaded) {
    return <Spinner visible={true} overlayColor={"rgb(20, 24, 28)"} />;
  }

  return (
    <SafeAreaProvider style={styles.background}>
      <StatusBar
        barStyle={"dark-content"}
        translucent
        backgroundColor="transparent"
      />
      <FlatList
        ListHeaderComponent={
          <>
            <Image
              source={require("@/assets/hero.jpg")}
              resizeMode="cover"
              style={styles.hero}
            />
          </>
        }
        data={list}
        renderItem={({ item }: { item: Product }) => (
          <View style={styles.itemContainer}>
            <ProductItem product={item} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "rgb(20, 24, 28)",
  },
  hero: {
    width: "100%",
    height: 200,
    marginBottom: 24,
  },
  itemContainer: {
    paddingHorizontal: 20,
  },
});
