# Fooddie App

Fooddie is a React Native application designed to help users explore various meal categories. This app fetches data from the MealDB API, allowing users to search and view meal categories with ease.

## Features

- **Fetch Meal Categories**: Retrieves meal categories from the MealDB API.
- **Search Functionality**: Allows users to search for meal categories.
- **Responsive UI**: Utilizes React Native Paper components for a consistent and attractive design.

## Screenshot

![App Screenshot](./assets/screenshot.png)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/juniorkpabitey/fooddie-app.git
    ```
   
2. **Navigate to the project directory**:
    ```bash
    cd fooddie-app
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Start the application**:
    ```bash
    npm start
    ```

## Usage

1. **Search Meal Categories**: Use the search bar at the top to filter meal categories by name.
2. **View Meal Details**: Scroll through the list to view different meal categories. Each category displays an image and a description.

## Code Overview

### Components

- **App**: The main component that sets up the application structure.
- **Appbar**: Displays the app title.
- **Searchbar**: Allows users to input a search query.
- **Card**: Displays individual meal categories with images and descriptions.

### State Management

- **meals**: Stores the list of meal categories fetched from the API.
- **searchQuery**: Stores the current search query input by the user.
- **filteredMeals**: Stores the list of meal categories filtered based on the search query.

### API Integration

The application fetches meal categories from the following URL:
```js
const url ="https://www.themealdb.com/api/json/v1/1/categories.php";
```



## Contributing

If anyone would love to contribute to this project, please follow these steps:

1. **Fork the repository**.
2. **Create a new branch**:
    ```bash
    git checkout -b feature-branch
    ```
3. **Make your changes**.
4. **Commit your changes**:
    ```bash
    git commit -m "Add some feature"
    ```
5. **Push to the branch**:
    ```bash
    git push origin feature-branch
    ```
6. **Create a pull request**.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React Native](https://reactnative.dev/)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [MealDB API](https://www.themealdb.com/api.php)

