# Namaste React (Akshay Saini) Documentation

## Chapter 1 - Inception

### Question 1: What is Emmet?
Ans: Emmet is the plug-in that are used by different text editors to improve the workflow in the code. It is particularly used By HTML,CSS.Here we create a shortcut of multiple line code Which we can use in Future. For example:Boilerplate code of HTML which is used by Exclamation mark and tab in VS Code.
````HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML 5 Boilerplate</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
	<script src="index.js"></script>
  </body>
</html>
````
### Question 2: What is CDN?
Ans: CDN Stands for content Delivery Network.It is the system of Distributed Server that deliver web content on the user geographical Location.It also increases the performance and reliability of the system. It reduce latency

### Question 3: What is CrossOrigin?
Ans: It allows you to send request to the multiple servers.It is recommended to use crossorigin when you  are using react by CDN links.
```sh
<script crossorigin="anonymous|use-credentials">
```

### Question 4: What is DOM?
Ans: Document Object Model allows us to change the elements of HTML and CSS.We can change the tag wby using javascript eaisly using some commands like getElementbyId.Although it takes to update which might slow your speed.

Virtual Dom is used by React as it takes less time to change.It creates virtual tree and compare with reliabilityDom tree and rendered (reload) only that parts or node of the virtual tree. After comparing the tree with Actual tree and It found shortest path to go to that node and then it reload it takes less time to update the Element.

### Question 5: Difference between a Library and Framework?
A: A library is a collection of packages that perform specific operations whereas a framework contains the basic flow and architecture of an application. The major difference between them is the complexity. Libraries contain a number of methods that a developer can just call whenever they write code. React js is library and Angular is Framework.
The framework provides the flow of a software application and tells the developer what it needs and calls the code provided by the developer as required. If a library is used, the application calls the code from the library.

### Question 6: Why is React known as React?
A: React is named React because of its ability to react to changes in data.
React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces.
The name "React" was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.
React is a JavaScript-based UI development library. Facebook and an open-source developer community run it.

### Question 7: What is difference between React and ReactDOM?
A: React is a JavaScript library for building User Interfaces whereas ReactDOM is also JavaScript library that allows React to interact with the DOM.
The react package contains React.createElement(), React.Component, React.Children, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains ReactDOM.render(), and in react-dom/server we have server-side rendering support with ReactDOMServer.renderToString() and ReactDOMServer.renderToStaticMarkup().

### Question 8: What is difference between react.development.js and react.production.js files via CDN?
A: Development is the stage of an application before it's made public while production is the term used for the same application when it's made public.
Development build is several times (maybe 3-5x) slower than the production build.

### Question 9: What is async and defer?
A: Async - The async attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page, and executed as soon as it is available (do not block HTML DOM construction during downloading process ) and don’t wait for anything.
### _Syntax_
```sh
<script src="demo_async.js" async></script>
```

Defer - The defer attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page, and executed after the page has finished parsing(when browser finished DOM construction). The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM.
### _Syntax_
```sh
<script src="demo_defer.js" defer></script>
```

## Chapter 2 - Igniting our app



# 🔗 Let's Connect
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/harsh-chaudhary-563b47199/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/mrharsh06)

