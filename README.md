# Restful Notes App
Simple restful application notes

## Steps - how to use the program

1. First download / git clone this repo first.
2. If it is already, run the program by opening cmd and then entering the file directory, and if you download the nodejs software first in the link [nodejs](https://nodejs.org/).And if you have already opened cmd, please type the command as follows
```
npm install -g <package_name>
```
because we use many libraries, such as express, cors, querystring, and lodas.isempty. Then we just install it, we just type the command below in CMD
```
npm install --global <package_name>
```
The code above is installing the package globally, which means we don't need to install the package again when we create a new folder / new project.

3. If the package is ready, it's time to use the program. First we type in the CMD command
```
node index.js
```
4. When finished, the program will run marked with the appearance of ** console.log ** that reads as shown below<br>
![alt text](https://raw.githubusercontent.com/maslow123/restful-notes-app/master/documentation/cap-1.JPG)
5. And if it's like the picture above, the next step is that we start by opening the tool called ** POSTMAN **, which is very necessary for making APIs. Because by using ** POSTMAN ** we can check in realtime in making API.<br>

![alt text](https://raw.githubusercontent.com/maslow123/restful-notes-app/master/documentation/cap-2.JPG)

6. If you have opened the tools, the next step is to select the GET method and enter the port that is ** localhost: 3000 / notes **

7. If we press the send button, if we open the notes parameter, with port 3000, which is the data contained in the database with a number of 10 data, and displays the current status of the server and so on.<br>

![alt text](https://raw.githubusercontent.com/maslow123/restful-notes-app/master/documentation/cap-3.JPG)
8. Next, if we write the query string after ***notes*** parameters like for example :
```
localhost:3000/notes?id=3
```
then the resulting data in the form of notes that have an id value = 3, as shown below
![alt text](https://raw.githubusercontent.com/maslow123/restful-notes-app/master/documentation/cap-4.JPG)
*why is the value totalPages = null? because we haven't filled in / entered querystring for pages and limits*

9.Here we use query string, for the meaning of querystring in my own opinion, that is, we can send data through url queries, for more details like the url below
```
localhost:3000/notes?pages=1&limit=3
```

![alt text](https://raw.githubusercontent.com/maslow123/restful-notes-app/master/documentation/cap-5.JPG)

*The url above has a query string that is pages = 1 & limit = 3 which function is for **make the first page containing data in the table description***

10. In addition, please try the URL
```
localhost:3000/notes?search=bandung
```
and see the results.

11.As for the method **GET**, we can use methods **POST** by entering the url as below<br>
![alt text](https://raw.githubusercontent.com/maslow123/restful-notes-app/master/documentation/cap-6.JPG)
*what's the function for the url above? * Its function is to send data that we enter in the POSTMAN body, into the table database description where the value is input according to the key name. And if it works then ... try to conclude yourself.

12. Besides that if you want to delete data, we can follow enter this url
```
localhost:3000/notes/{the id note you want to delete}
```
* don't forget to change the method from **POST** to be **DELETE**

13. And for the update, the way is almost the same as POST which distinguishes it, if the update (PATCH) he has to add one more parameter after the end point **notes**, for more convenience, look carefully at the picture below.<br>

![alt text](https://raw.githubusercontent.com/maslow123/restful-notes-app/master/documentation/cap-7.JPG)

*here I want to change the previous sentence "I want trip to jogja" => "I want trip to bandung" and don't forget to enter the parameters after notes, the parameter that is filled in is the id of that data.*

14. Finished.


