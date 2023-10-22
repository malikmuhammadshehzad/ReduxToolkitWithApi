import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, quantityDecrement} from '../../redux/reducers/CartReducer';

const SingleProduct = ({route}) => {
  const {product} = route.params;
  const dispatch = useDispatch();
  const {cartData} = useSelector(state => state.Cart);
  const [currentCartProduct, setCurrentCardProduct] = useState({});
  console.log('🚀 ~ file: index.js:15 ~ cartData:', cartData);
  console.log('product singleProduct  ', product);

  const addDataToCard = () => {
    dispatch(addToCart(product));
  };
  const decreaseQuantity = () => {
    dispatch(quantityDecrement(product.id));
  };

  useEffect(() => {
    const itemChecking = () => {
      const itemAvailable = cartData.find(item => item.id === product.id);
      if (itemAvailable) {
        setCurrentCardProduct(itemAvailable);
      } else {
        setCurrentCardProduct({});
      }
    };
    itemChecking();
  }, [cartData]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{uri: product.thumbnail}} style={styles.img} />
        {/* {product.images?.map((image, index) => (
        <Image key={index} source={{ uri: image }} resizeMode='contain' style={styles.img} />
      ))
      */}

        <Text style={styles.title}>{product.title}</Text>

        <Text style={styles.description}>{product.description}</Text>
        {currentCartProduct.quantity > 0 ? (
          <View style={styles.twoBtn}>
            <Pressable onPress={decreaseQuantity}>
              <Text style={styles.btn}>-</Text>
            </Pressable>
            <Pressable onPress={addDataToCard}>
              <Text style={styles.btn}>+</Text>
            </Pressable>
            <Pressable>
              <Text style={styles.btn}>{currentCartProduct.quantity}</Text>
            </Pressable>
          </View>
        ) : (
          <Pressable onPress={addDataToCard} style={styles.adToCartBtn}>
            <Text>Add To Cart</Text>
          </Pressable>
        )}
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
  adToCartBtn: {
    backgroundColor: 'coral',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  twoBtn: {
    flexDirection: 'row',
    columnGap: 20,
  },
  btn: {
    fontSize: 50,
  },
});

export default SingleProduct;
