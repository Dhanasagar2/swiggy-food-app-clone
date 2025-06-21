hello hello react

#namastefood

//Components
/\*
*Header
-logo
-Nav Items
*Body
-Search
-Restaurent Container
-Restaurent cards
-image, name of restaurent, Star rating, cuisines, delivery time.  
\
*Footer
- -Copy right
  -Links
  -Address
  -Contact
  \*
  /full understanding of the code structure flow is

"Home Page
│
├── 🧊 Restaurant Cards rendered (each with a resId)
│
└── 🍴 Click on a Restaurant Card ➡ Route changes to: /restaurant/:resId
│
└── 🧠 useParams() extracts that `resId` from URL (like "12345")
│
└── 📦 useRestaurantMenu(resId) gets called
│
└── 📡 MENU_API(resId) builds the full Swiggy API URL
│
└── 🛍 fetch() retrieves full menu of that restaurant
│
└── 🥘 RestaurantMenu component renders: - Name - Cuisines - Cost - Menu Items
"

# REDUX TOOL KIT

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice(cart Slice)
- Dispatch an Action
- selector

# Types of testing (developer)

-unit testing
-integration testing
-end to end testing or (e2e) testing

# setting up testing in our app

- install react testing library
- install jest
- intsall babel dependencies
- configure.babel
- configure parcel config file to disable default babel transpilation
- jest configuration by npx jest --init
- install jsdom library
- install @babel/preset-react - to make jsx in test cases
- include @babel/preset-react inside my babel.config.js
- install npm i -D @testing-library/jest-dom
