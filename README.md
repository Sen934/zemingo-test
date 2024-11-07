## Available Scripts

In the project directory, you can run:

### `npm start`

### before starting create .env and add variables from .env.example

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## High-level software design diagram

                             +-------------------+
                             |     React App     |
                             +-------------------+
                                     |
                  +------------------+------------------+
                  |                                     |
           +-------------+                      +-------------+
           |             |                      |  lib        |
           |     App     |                      | (Helpers,   |
           |             |                      | Constants)  |
           +-------------+                      +-------------+
                  |
    +-------------+------------+
    |           Pages          |
    |(Inventory, CreateProduct)|        
    +-------------+------------+
                  |
    +--------+---------------------------+
             |                          |
       +-----+------+          +--------+-------+
       |    UI      |          |     common     |             
       |            |          |(product select)| 
       +-------------           --------------+             
                 +                                
            +-------------+                
            |   API       |                 
            | (Models,    |                 
            | react-query |
            |       hooks)|                 




Components:
1. App - — everything that makes the app run — routing, global styles, providers.
2. Pages - our full 2 pages (inventory and create product)
3. common - reused business-related implementations of product features. Product and Quantity components don't have to be there - they're just for an example
4. UI (if needed) - components for possible future design system, not tied to any business context
5. API - would consist of: models (typescript types) copying backend response and some hooks for api, abstracted over react-query
6. lib - some utils, helpers, constants, etc.

Note: state management seems to be simple enough to be covered by react-query