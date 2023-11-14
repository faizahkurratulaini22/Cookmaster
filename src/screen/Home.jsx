
import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        { id: 1, title: 'Makanan Utama', image: 'https://source.unsplash.com/600x600/?food' },
        { id: 2, title: 'Makanan Penutup', image: 'https://source.unsplash.com/600x600/?dessert' },
        { id: 3, title: 'Puding Coklat', image: 'https://source.unsplash.com/600x600/?pudding' },
        { id: 4, title: 'Es Krim Vanilla', image: 'https://source.unsplash.com/600x600/?ice-cream-vanilla' },
        { id: 5, title: 'Es Krim Strawberry', image: 'https://source.unsplash.com/600x600/?strawberry-ice-cream' },
        { id: 6, title: 'Pizza', image: 'https://source.unsplash.com/600x600/?pizza' },
        { id: 7, title: 'Sushi', image: 'https://source.unsplash.com/600x600/?sushi' },
        { id: 8, title: 'Burger', image: 'https://source.unsplash.com/600x600/?burger' },
        { id: 9, title: 'Spaghetti', image: 'https://source.unsplash.com/600x600/?spaghetti' },
        { id: 10, title: 'Salad', image: 'https://source.unsplash.com/600x600/?salad' },
      ],
    };
  }

  renderCategoryItem = ({ item }) => (
  <TouchableOpacity onPress={() => this.handleCategoryPress(item)}>
    <ImageBackground
      style={styles.categoryItem}
      source={{ uri: item.image }}
      imageStyle={{ borderRadius: 10 }}
    >
      <Text style={styles.categoryTitle}>{item.title}</Text>
    </ImageBackground>
  </TouchableOpacity>
);

  handleCategoryPress = (category) => {
    console.log(`Category ${category.title} pressed`);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Kategori Resep</Text>
        <FlatList
          data={this.state.categories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={this.renderCategoryItem}
          horizontal={false}
          numColumns={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#767577',
  },
  categoryItem: {
    flex: 1,
    aspectRatio: 1, 
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden', 
    width: 140,
  },
  categoryTitle: {
    fontSize: 18,
    color: '#fff',
  },
});

export default Home;
