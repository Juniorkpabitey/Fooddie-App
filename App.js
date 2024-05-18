import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Appbar, Searchbar, Card, Paragraph } from 'react-native-paper';

export default function App() {
  const [meals, setMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMeals, setFilteredMeals] = useState([]);
  const url ="https://www.themealdb.com/api/json/v1/1/categories.php";


  const getMeals = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setMeals(data.categories);
  }

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

  return (
    <View style={styles.container}>
      <Appbar>
        <Appbar.Content
          title="Fooddie"
          style={styles.title}
        />
      </Appbar>
      <Text style={styles.subtitle}>Taste with Dali</Text>
      <Searchbar 
        placeholder='Search meal category'
        value={searchQuery}
        onChangeText={onChangeSearch}
      />
      <ScrollView>
        {
          filteredMeals.map(meal => (
            <Card key={meal.idCategory}>
              <Card.Cover source={{ uri: meal.strCategoryThumb }}/>
              <Card.Title title={meal.strCategory}/>
              <Card.Content>
                <Paragraph>{meal.strCategoryDescription}</Paragraph>
              </Card.Content>
            </Card>
          ))
        }
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flex: 1, // Expand to take available space
    justifyContent: 'center', // Align content vertically
    paddingLeft: 125,
    paddingTop:35,
  },
  subtitle: {
    fontSize: 12,
    alignSelf: 'center',
    marginBottom: 10, // Adjust as needed for spacing
  },
});
