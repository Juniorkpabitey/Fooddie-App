import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text, TextInput, Button, Image } from 'react-native';
import { Appbar, Card, Paragraph, Searchbar } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { auth } from './firebase';


export default function App() {
  const [meals, setMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email, password)
      .catch(error => alert(error.message));
  };

  const handleSignUp = () => {
    auth.createUserWithEmailAndPassword(email, password)
      .catch(error => alert(error.message));
  };

  const handleLogout = () => {
    auth.signOut();
  };

  const getMeals = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMeals(data.categories);
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  };

  useEffect(() => {
    getMeals();
  }, []);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredMeals(meals);
    } else {
      const filtered = meals.filter(meal =>
        meal.strCategory.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMeals(filtered);
    }
  }, [searchQuery, meals]);

  const onChangeSearch = query => setSearchQuery(query);

  if (!user) {
    return (
      <View style={styles.authContainer}>
        <Image
          source={require('./assets/logo.png')} // Adjust the path as needed
          style={styles.logo}
        />
        <Text style={styles.authTitle}>Welcome to Fooddie</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholderTextColor="#888"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#888"
        />
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={handleLogin} color="#BF1E2D" />
          <Button title="Sign Up" onPress={handleSignUp} color="#BF1E2D" />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Appbar>
        <Appbar.Content title="Fooddie" style={styles.title} />
        <Appbar.Action icon="logout" onPress={handleLogout} />
      </Appbar>
      <Text style={styles.subtitle}>Taste with Dali</Text>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder='Search meal category'
          value={searchQuery}
          onChangeText={onChangeSearch}
          style={styles.searchbar}
        />
      </View>
      <ScrollView>
        {filteredMeals.map(meal => (
          <Card key={meal.idCategory}>
            <Card.Cover source={{ uri: meal.strCategoryThumb }} />
            <Card.Title title={meal.strCategory} />
            <Card.Content>
              <Paragraph>{meal.strCategoryDescription}</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 110,
    paddingTop: 35,
  },
  subtitle: {
    fontSize: 12,
    alignSelf: 'center',
    marginBottom: 10,
  },
  searchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  searchbar: {
    width: '80%', // Adjust this value as needed
  },
  authContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  authTitle: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    borderRadius: 4,
  },
  buttonContainer: {
    width: '80%',
    marginTop: 10,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});
