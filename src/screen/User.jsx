
import React, { Component } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, Image } from 'react-native';

class UserSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      receiveRecipeNotifications: true,
      darkMode: false,
    };
  }

  handleSwitchToggle = (setting) => {
    this.setState((prevState) => ({
      [setting]: !prevState[setting],
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.profileImage}
            source={require('../image/profile.jpeg')}
            resizeMode="cover"
          />
          <Text style={styles.title}>Pengaturan Pengguna</Text>
        </View>

        <TouchableOpacity style={styles.profileButton} onPress={() => console.log('Profile button pressed')}>
          <Text style={styles.profileButtonText}>Lihat Profil Saya</Text>
        </TouchableOpacity>

        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Notifikasi Resep</Text>
          <Switch
            value={this.state.receiveRecipeNotifications}
            onValueChange={() => this.handleSwitchToggle('receiveRecipeNotifications')}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={this.state.receiveRecipeNotifications ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Mode Gelap</Text>
          <Switch
            value={this.state.darkMode}
            onValueChange={() => this.handleSwitchToggle('darkMode')}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={this.state.darkMode ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    borderWidth : 1,
    borderColor: '#767577',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#767577',
  },
  profileButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  profileButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingLabel: {
    fontSize: 18,
    color: '#767577',
  },
});

export default UserSettings;
