import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = ({ navigation }: any) => {
  const storageOptions = [
    {
      id: 1,
      title: 'AsyncStorage',
      subtitle: 'Simple key-value storage',
      description: 'Perfect for storing small data like user preferences',
      icon: '💾',
      screen: 'AsyncStorage',
      color: '#3498db',
    },
    {
      id: 2,
      title: 'SQLite',
      subtitle: 'Relational database storage',
      description: 'Best for complex data and queries',
      icon: '🗄️',
      screen: 'SqlLite',
      color: '#e74c3c',
    },
    {
      id: 3,
      title: 'Paper',
      subtitle: 'Cloud storage',
      description: 'Great for storing large data like documents',
      icon: '📦',
      screen: 'Paper',
      color: '#f1c40f',
    },
  ];

  const handleNavigation = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Storage Demo 📱</Text>
        <Text style={styles.title}>Choose Storage Type</Text>
        <Text style={styles.subtitle}>Select how you want to store data</Text>
      </View>

      {/* Storage Options */}
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {storageOptions.map(option => (
          <TouchableOpacity
            key={option.id}
            style={styles.card}
            onPress={() => handleNavigation(option.screen)}
            activeOpacity={0.7}
          >
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: option.color + '15' },
              ]}
            >
              <Text style={styles.icon}>{option.icon}</Text>
            </View>

            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{option.title}</Text>
              <Text style={styles.cardSubtitle}>{option.subtitle}</Text>
              <Text style={styles.cardDescription}>{option.description}</Text>
            </View>

            <View
              style={[styles.arrowContainer, { backgroundColor: option.color }]}
            >
              <Text style={styles.arrow}>→</Text>
            </View>
          </TouchableOpacity>
        ))}

        {/* Info Section */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>ℹ️ About Storage</Text>
          <Text style={styles.infoText}>
            • <Text style={styles.infoBold}>AsyncStorage:</Text> Great for
            simple data like settings, tokens, and user preferences
          </Text>
          <Text style={styles.infoText}>
            • <Text style={styles.infoBold}>SQLite:</Text> Ideal for structured
            data, complex queries, and large datasets
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  greeting: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#95a5a6',
  },
  contentContainer: {
    padding: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  icon: {
    fontSize: 32,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7f8c8d',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 12,
    color: '#95a5a6',
    lineHeight: 18,
  },
  arrowContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  arrow: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  infoCard: {
    backgroundColor: '#e8f4f8',
    padding: 20,
    borderRadius: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
    marginTop: 8,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 13,
    color: '#34495e',
    lineHeight: 22,
    marginBottom: 8,
  },
  infoBold: {
    fontWeight: '600',
    color: '#2c3e50',
  },
});

export default HomeScreen;
