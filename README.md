
This is a React Native Assessment to show movies listing

Note: You have to create .env file at root of the project for API_URL, API_TOKEN and IMAGE_PATH

To run code or install application, please follow below steps


1. Download the application and run npm i (add --legacy-peer-deeps if required) 
2. use npm run ios to run on ios and npm run android to run on android

Plugins and Libraries used
1. For Redux : @reduxjs/toolkit, react-redux
2. API call : axios
3. Bi-lingual Handling : i18next, react-i18next
4. React forms : react-hook-form
5. Data encoding : react-native-base64
6. Keys Security : react-native-config
7. Data persistance : redux-persist
8. Styled components : styled-component

Application flow:
- Login Screen : 
   1. User have to enter correct email address, password format
   2. Login button is enabled only on proper entry of both the fields
   3. User can change the language from top left corner 
   4. After clicking on Login button the email and password will be stored the persisted reducer (userProfile), were password will be encoded to base64 before saving it

- Home Screen
   1. After successfull login this will be the default screen for every user interaction from now, even after killing the app
   2. User can change the language from top left corner, this will call the api's again with selected language
   3. API_URL, API_TOKEN and IMAGE_PATH all these are stored in .env file for to support multiple dev environment
   4. On scrolling the list further the data will be loaded by pagination (lazy loading)
   5. User can tap on logout from top right corner to clear his stored credentials and re-login
 
![Simulator Screenshot - iPhone 14 - 2024-04-18 at 16 04 35](https://github.com/Pratik525/MovieData/assets/11808965/e46d5834-b003-42ca-ab9f-3dc914933c5c)
![Simulator Screenshot - iPhone 14 - 2024-04-18 at 16 04 39](https://github.com/Pratik525/MovieData/assets/11808965/45584782-5094-446e-b9d3-a82d99cc9f7f)
![Simulator Screenshot - iPhone 14 - 2024-04-18 at 16 04 42](https://github.com/Pratik525/MovieData/assets/11808965/dea393dd-9630-4730-ba17-389b446b2b9d)
![Simulator Screenshot - iPhone 14 - 2024-04-18 at 16 04 45](https://github.com/Pratik525/MovieData/assets/11808965/87b7dd01-ed09-493d-9878-4f6fc5535c23)
![Simulator Screenshot - iPhone 14 - 2024-04-18 at 16 04 56](https://github.com/Pratik525/MovieData/assets/11808965/66d2d23c-6f41-4076-a470-a1a2108c1001)
![Simulator Screenshot - iPhone 14 - 2024-04-18 at 16 05 04](https://github.com/Pratik525/MovieData/assets/11808965/f1414ed4-6689-40d0-a8f2-30b51f6a1767)
![Simulator Screenshot - iPhone 14 - 2024-04-18 at 16 05 19](https://github.com/Pratik525/MovieData/assets/11808965/b6f2791b-1d4f-491a-8682-ba430c5767df)
