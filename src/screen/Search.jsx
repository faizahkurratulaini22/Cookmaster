// SearchScreen.js
import React, { Component } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

class SearchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      searchResults: [
        { id: 1, title: 'Resep Mie Goreng', image: 'https://source.unsplash.com/600x600/?mie-goreng' },
        { id: 2, title: 'Resep Nasi Goreng', image: 'https://source.unsplash.com/600x600/?nasi-goreng' },
        { id: 3, title: 'Resep Sate Ayam', image: 'https://source.unsplash.com/600x600/?sate-ayam' },
        { id: 4, title: 'Resep Capcay', image: 'https://source.unsplash.com/600x600/?capcay' },
      ],
    };
  }

  handleSearch = () => {
    console.log('Searching for:', this.state.searchQuery);
    const results = this.state.searchResults.filter((item) =>
      item.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );
    this.setState({ searchResults: results });
  };

  renderSearchResultItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.handleResultPress(item)}>
      <ImageBackground
        style={styles.resultItem}
        source={{ uri: item.image }}
        imageStyle={{ borderRadius: 10 }}
      >
        <Text style={styles.resultTitle}>{item.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );

  handleResultPress = (result) => {
    console.log(`Result ${result.title} pressed`);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="Cari resep makanan..."
          onChangeText={(text) => this.setState({ searchQuery: text })}
          onSubmitEditing={this.handleSearch}
        />
        <FlatList
          data={this.state.searchResults}
          keyExtractor={(item) => item.id.toString()}
          renderItem={this.renderSearchResultItem}
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
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  resultItem: {
    flex: 1,
    aspectRatio: 1,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    width: 300,
  },
  resultTitle: {
    fontSize: 18,
  },
});

export default SearchScreen;
