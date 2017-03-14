###Create a single page React application:
```
npm install -g create-react-app
create-react-app 'insert_project_name'
cd 'insert_project_name'
npm start
```

###Adding React to an existing project:
```
npm init
npm install --save react react-dom
```

React documentation reccomends enabling es6 and babel to help that help make developement in React simpler.
You can also use RubyMine which is a text editor designed for ruby but it also works great with React and Redux and already has es6 enabled.

###Installing Redux:
```
npm install --save redux
```

###Complimentary Packages for Redux:
```
npm install --save react-redux
npm install --save-dev redux-devtools
```
react-redux is used to connect redux reducers to react components
###Adding Jest tests:
```
npm install --save-dev jest
```
Test Driven Devolopement is high reccommended when using react-redux to write Reducers and actions to change state.

###Complimentary Test Packages for Redux:
```
 npm install --save expect
 npm install deep-freeze
 ```
 These help ensure that testing Redux states and actions are left un-mutated which is extremely important principle in Redux.
 
 
 
 
