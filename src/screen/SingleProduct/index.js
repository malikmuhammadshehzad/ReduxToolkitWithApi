import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

const SingleProduct = ({route}) => {
  const {product} = route.params;
  console.log('product singleProduct  ', product);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: product.thumbnail }} style={styles.img} />
        {/* {product.images?.map((image, index) => (
        <Image key={index} source={{ uri: image }} resizeMode='contain' style={styles.img} />
      ))
      */}

        <Text style={styles.title}>{product.title}</Text>

        <Text style={styles.description}>{product.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 350,
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
});

export default SingleProduct;
