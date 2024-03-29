
# FoodGuardian

## Overview

The FoodGuardian is a mobile app designed to connect food providers with surplus meals to individuals and organizations in need. The goal is to prevent the wastage of unused food on a large scale by facilitating the sharing of excess food resources.

## Features

### Mobile App Platform

- **User Profiles:** Create profiles for food donors and receivers with relevant information.
- **Food Listing and Requests:** Allow food providers to list surplus food items; enable receivers to browse, search, and request items.
- **Real-Time Notifications:** Notify donors about new requests and alert receivers when their request is accepted.
- **Communication Channel:** In-app messaging system for coordination between donors and receivers.
- **Geo-Location Services:** Utilize GPS to display nearby food listings and assist donors in specifying pickup points accurately.
- **Analytics and Insights:** Provide data analytics to track food waste reduction, donations made, and impact achieved.

### AI-ML Integration

- **Price Prediction:** AI model predicts the price of donations.
- **Quality Monitoring:** Monitor food quality based on type and expiry provided by the donor.
- **Rating System:** Provide a rating score to donors based on the AI model's analysis.
- **Demand Analysis:** Update the model for demand analysis and prediction of food.

## Design Principles

- **User-Centered Design:** Prioritize user needs for an intuitive experience.
- **Consistency:** Maintain a consistent design for a cohesive user experience.
- **Visual Hierarchy:** Guide user attention with design elements.
- **Simplicity and Minimalism:** Keep the design clean and clutter-free.
- **Feedback and Response:** Provide immediate feedback for user actions.
- **Information Architecture:** Organize information logically.
- **Mobile-First Design:** Focus on a mobile-friendly design.
- **Transparency:** Include detailed information in food listings to build trust.

## Tech Stack

- **Frontend:** React Native
- **Backend:** Firebase (Real-time notifications, Database hosting)
- **AI/ML Integration:** FastAPI for AI model implementation

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed
- [npm](https://www.npmjs.com/) (Node Package Manager) installed
- [React Native](https://reactnative.dev/) installed
- [Firebase](https://firebase.google.com/) account for backend services
- [FastAPI](https://fastapi.tiangolo.com/) for AI/ML model implementation

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/food-sharing-platform.git
    cd food-sharing-platform
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

### Configuration

1. **Firebase Setup:**

    - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
    - Obtain your Firebase configuration details and update them in `firebaseConfig.js`.

    ```javascript
    // src/firebaseConfig.js

    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID",
    };

    export default firebaseConfig;
    ```

2. **FastAPI Setup:**

    - Set up FastAPI for AI/ML integration. Refer to [FastAPI Documentation](https://fastapi.tiangolo.com/) for installation and configuration.

### Running the App

1. **Run the app on Android:**

    ```bash
    npx react-native run-android
    ```

2. **Run the app on iOS:**

    ```bash
    npx react-native run-ios
    ```

3. **Open the app on your device/emulator and start sharing food resources!**

## Contributing

Contributions are welcome! Please follow the [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [PCCOE License](LICENSE).

## Acknowledgments

- Special thanks to contributors and the open-source community.
- **Firebase:**
  - We acknowledge [Firebase](https://firebase.google.com/) for providing a comprehensive set of tools and services, including real-time databases, authentication, and ML Kit. Firebase has played a crucial role in enabling seamless backend functionalities for our food sharing platform.

- **FastAPI:**
  - We extend our gratitude to the [FastAPI](https://fastapi.tiangolo.com/) team for developing an outstanding web framework for building APIs with Python. FastAPI has empowered us to integrate AI/ML models seamlessly and efficiently into our mobile app, contributing to the success of our food sharing platform.



