import React from "react";
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import AlertExample from "@/components/example/AlertExample"; // Fixed typo
import CustomerAlertExample from "../../components/example/CustomAlertExample"; // Fixed typo

const products = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: 'สินค้า' + (i + 1) // Corrected name
}));

export default function ProductGrid() {
  const { width } = useWindowDimensions();

  let columns = 1;
  if (width >= 1200) columns = 8;
  else if (width >= 992) columns = 6;
  else if (width >= 768) columns = 3;

  const gap = 8;
  const itemWidth = (width - gap * (columns - 1) - 16) / columns;

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
      {/* Example alert components */}
      <AlertExample />
      <CustomerAlertExample />

      {/* Render product items in grid */}
      <View style={styles.gridContainer}>
        {products.map(product => (
          <View
            key={product.id}
            style={[
              styles.productItem,
              { width: itemWidth, marginBottom: gap },
            ]}
          >
            <Text>{product.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    padding: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  productItem: {
    height: 100,
    backgroundColor: '#f0f0f0',
    marginRight: 8, // spacing between items
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
