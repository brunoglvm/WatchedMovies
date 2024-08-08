import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

import { fontFamily as fonts } from "@/styles/fontFamily";

import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export function ProductItem(props: Props) {
  function handleAddToCart() {
    alert("Você está comprando: " + props.product.name);
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: props.product.image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{props.product.name}</Text>
        <Text style={styles.price}>R$ {props.product.price.toFixed(2)}</Text>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.9}
          onPress={handleAddToCart}
        >
          <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 120,
  },
  info: {
    flex: 1,
  },
  name: {
    color: "#ffffff",
    fontSize: 20,
    fontFamily: fonts.medium,
    marginBottom: 8,
  },
  price: {
    color: "#008CBA",
    fontSize: 16,
    fontFamily: fonts.regular,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#008CBA",
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: fonts.medium,
  },
});
