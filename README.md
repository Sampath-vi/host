# host

# Installation 

1. ```git clone git@github.com:Sampath-vi/host.git```
2. ```cd host; npm install; npm start; ``` - The app should start on port 8080.
3. Replace the URL with the one where your remote server is running in [webpack.config.js](https://github.com/Sampath-vi/host/blob/master/webpack.config.js#L47)


# Directory 

- This app consists of a single file which imports and uses the components from the `remote` app.


# Webpack 

- The `remote` url and the exposed file `remoteEntry.js` is being added as a remote for the host app to access the remote resources. 
- Imports inside the app are being mapped to the key in `webpack.config.js` [APP.tsx](https://github.com/Sampath-vi/host/blob/master/src/App.tsx#L3) 
- More on moduleFederation - [module-federation](https://webpack.js.org/concepts/module-federation/)
