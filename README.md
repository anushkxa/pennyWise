# PennyWise 

**PennyWise** is a stock trading platform built with modern technologies. Track stocks, analyze markets, execute trades, manage portfolios, and make informed investment decisions.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React Native](https://img.shields.io/badge/React%20Native-0.72-green.svg)](https://reactnative.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen.svg)](https://nodejs.org/)

## Features

- Real time stock quotes & charts
- Portfolio tracking & performance
- Stock screener 
- Secure authentication

## Quick Start

Prerequisites
-Node.js 18+
-React Native CLI
-Android Studio / Xcode
-Alpha Vantage API Key (Free)

## Installation
-Clone the repository
git clone https://github.com/anushkxa/pennyWise.git
-cd pennyWise

# Install dependencies
npm install

# For iOS
cd ios && pod install && cd ..

# Run on Android
npx react-native run-android

# Run on iOS
npx react-native run-ios

##  Environment Setup
Create .env file in root:
-ALPHA_VANTAGE_API_KEY=your_api_key_here
-API_URL=http://localhost:3000/api
-WEBSOCKET_URL=ws://localhost:3000
-APP_ENV=development
