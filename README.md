# Rick And Morty App

This project is a React Native application provides a user-friendly interface focused on displaying information about the "Rick and Morty" TV series. 

Overall, the project follows a typical structure for a React Native application, with navigation, state management using Redux, and reusable components. It appears to be a project related to displaying and managing data about characters, episodes, and locations, with settings functionality included.

Here's a summary of the key components and functionalities:

# Dependencies: 

- The project relies on various dependencies including React Navigation for navigation, Axios for making HTTP requests, Redux for state management, and Jest for testing.

# Navigation: 

- It uses React Navigation for navigation between different screens. The main navigation structure is defined in the RootNavigator.

# API Integration: 

- Axios is utilized to interact with the Rick and Morty API. The base URL and endpoints are defined for accessing characters, episodes, and locations.

#  Character Details: 

- The CharacterDetails component fetches and displays detailed information about a specific character. It includes data such as gender, species, status, origin, and location. It also displays the first featured episode the character appeared in.

# Filtering Characters: 

- The FilterCharacters component allows users to filter characters based on gender and status. Users can apply filters and see the updated character list accordingly.

# Character List: 

- The Characters component displays a list of characters. It fetches characters based on the applied filters and allows users to load more characters as they scroll down.

# Search Characters: 

- The SearchCharacters component enables users to search for characters by name. It updates the character list based on the search input.

# Navigation Setup:

- The project uses React Navigation for navigation between different screens.
- Navigation is set up with a bottom tab navigator (TabNavigator) and a native stack navigator (RootNavigator).
- The bottom tab navigator contains screens for characters, episodes, locations, and settings.

# Redux Configuration:

- Redux is used for state management in the application.
- There's a Redux store configured with a root reducer combining multiple reducers.
- Middleware like Redux Thunk is applied for handling asynchronous actions.

# Redux Reducers:

- There are reducers defined for managing characters-related state.
- Reducers handle actions like fetching characters, updating parameters, loading more data, and handling errors.

# Redux Actions:

- Actions are defined for fetching characters list, fetching character details, resetting data, updating parameters, and loading more characters.
- Asynchronous API requests are made within these actions using Axios or similar libraries.

# Components:

- Various reusable components are defined throughout the project.
- Components include custom buttons, header icons, character cards, gender icons, status icons, and spinners.

# Screens:

- Screens are organized into folders based on their functionality (e.g., characters, episodes).
- Each screen typically consists of JSX code defining the UI layout and functionality.

# Styling:

- Styles are defined using React Native StyleSheet or similar approaches.
- There are general styles for screens (ScreenStyle), buttons, icons, and character cards.

<img src="rick-morty.gif" width="400" >