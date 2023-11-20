React Scrimba course

# My React App

This is a simple React application created manually without using create-react-app. It includes a basic setup with Webpack, Babel, and the webpack-dev-server for local development.

## Getting Started (Manual Set-up)

To run the project locally, follow these steps:

### Prerequisites

- Node.js and npm should be installed on your machine.

### Installation

Clone this repository:
   ```bash
   git clone https://github.com/your-username/your-react-app.git
   cd your-react-app
   ```

### Initialize Your Project:

Create a new directory for your project and initialize it as an npm project:

```npm init -y

```

### Install Required Packages:

Install necessary packages such as React, ReactDOM, Webpack, Babel, and development-related tools:

```npm install react react-dom webpack webpack-cli webpack-dev-server @babel/core @babel/preset-env @babel/preset-react babel-loader html-webpack-plugin --save-dev

```
### Create Project Structure:

Create a basic folder structure for your React app:

"""
    my-react-app/
    ├── src/
    │   ├── index.js
    │   └── components/
    │       └── App.js
    ├── public/
    │   └── index.html
    ├── webpack.config.js
    └── package.json

"""

### Configure Babel:

Create a Babel configuration file named .babelrc in your project root:

```// .babelrc
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```

### Configure Webpack:

Create a Webpack configuration file named webpack.config.js:

```// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 3000,
        open: true,
    },
};

```

### Create HTML Template:

- Create an index.html file in the public folder:

### Write Your React Code:

- Create an src/index.js file to render your React app:
- Create your main App component in src/components/App.js:

### Run Your App:

Add a start script in your package.json to run the development server:
```// package.json
{
    "scripts": {
        "start": "webpack serve --mode=development"
    }
}
```

### npm start
