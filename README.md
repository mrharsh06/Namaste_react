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
Ans: CDN Stands for content Delivery Network.It is the system of Distributed Server that deliver web content on the user geographical Location.It also increases the performance and reliability of the system It reduce latency

### What is CrossOrigin?
Ans: It allows you to send request to the multiple servers.It is recommended to use crossorigin when you  are using react by CDN links.

### What is DOM?
Ans: Document Object Model allows us to change the elements of HTML and CSS.We can change the tag wby using javascript eaisly using some commands like getElementbyId.Although it takes to update which might slow your speed.

Virtual Dom is used by React as it takes less time to change.It creates virtual tree and compare with reliabilityDom tree and rendered (reload) only that parts or node of the virtual tree. After comparing the tree with Actual tree and It found shortest path to go to that node and then it reload it takes less time to update the Element.

### What is difference betwen Async and Differ?
Ans: In Async HTML parsing goes on meanwhile fetching of script is done in Background and after that HTML parsing Stops and execution of Scripts starts and then after completion HTML parsing starts again

While on the other hand in Differ Fetching of Scripts is done along with the HTML parsing and Execution of Scripts is done at the end of HTML parsing.