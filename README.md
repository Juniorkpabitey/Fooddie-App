# Fooddie App

Fooddie is a React Native application designed to help users explore various meal categories. This app fetches data from the MealDB API, allowing users to search and view meal categories with ease.

## Features

- **User Authentication**: Users can sign up and log in using Firebase Authentication.
- **Fetch Meal Categories**: Retrieves meal categories from the MealDB API.
- **Search Functionality**: Allows users to search for meal categories.
- **Responsive UI**: Utilizes React Native Paper components for a consistent and attractive design.

## Screenshot

![App Screenshot](./assets/Screenshot1.png)
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

4. **Set up Firebase**:
    - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
    - Add an app to your Firebase project and copy the configuration.
    - Create a `.env` file in the root directory and add your Firebase configuration details:
      ```env
      REACT_APP_FIREBASE_API_KEY=your_api_key
      REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
      REACT_APP_FIREBASE_PROJECT_ID=your_project_id
      REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
      REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
      REACT_APP_FIREBASE_APP_ID=your_app_id
      REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
      ```

5. **Start the application**:
    ```bash
    npm start
    ```

## Usage

1. **User Authentication**:
   - **Sign Up**: Create a new account using email and password.
   - **Log In**: Access the app with your email and password.

2. **Search Meal Categories**: Use the search bar at the top to filter meal categories by name.

3. **View Meal Details**: Scroll through the list to view different meal categories. Each category displays an image and a description.

## Code Overview

### Components

- **App**: The main component that sets up the application structure.
- **SignUp**: Component for user sign-up.
- **Login**: Component for user login.
- **Appbar**: Displays the app title and logout button.
- **Searchbar**: Allows users to input a search query.
- **Card**: Displays individual meal categories with images and descriptions.

### State Management

- **meals**: Stores the list of meal categories fetched from the API.
- **searchQuery**: Stores the current search query input by the user.
- **filteredMeals**: Stores the list of meal categories filtered based on the search query.
- **user**: Stores the authenticated user information.

### API Integration

The application fetches meal categories from the following URL:
```js
const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
