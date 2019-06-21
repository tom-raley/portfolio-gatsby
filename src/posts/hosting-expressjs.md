---
path: "/blog/how-to-host-nodejs-azure"
date: "2019-06-21"
title: "How to Host Your NodeJS and ExpressJS API on Azure"
image: nodejs_azure.png
author: 'Tom Raley'
---

I recently began migrating one of the web applications I work on from [CakePHP](https://cakephp.org/) over to React and Node. Problem is, the server we host on only supports up to Node version 6.11. This presented a number of challenges, as things like [create-react-app](https://github.com/facebook/create-react-app) and [GatsbyJS](https://www.gatsbyjs.org/) don't support versions that far back. After figuring out how to start a React app from scratch, I needed a place to host it. Turns out our hosting platform doesn't allow you to SSH into the server, so again I had a problem--how do I host a React app and actually get the API portion of my Node and ExpressJS to run on the server?

Enter Microsoft Azure
-------
After getting a recommendation from a friend, I looked into [Microsoft Azure](https://azure.microsoft.com/en-us/) and turns out, it was exactly what we needed. We already had an Azure account since we use Bing search to power our application. After reading the docs, I decided to give it a go.

I researched a bit and read through the section on how to ["Create a Node.js web app in Azure"](https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-nodejs) which was immensely helpful. 

First, I had to create a production copy of all of my back end files, since I had previously had them as part of the same folder as my front end code. Once I separated these, I went back into Microsoft Azure Portal and clicked on "App Services" and created a new app. I selected the NodeJS version (6.11), gave it a name, and I was ready to go.

Deploying With Git
----
Since I'm familiar with Git already, I decided that was a better option than using FTP. I set up a new user under "FTP/Credentials" and then connected my local folder containing my back end files to this remote repository. I went ahead and pushed the files and waited for the server to build the app.

The nice thing about Azure is that it will automatically download and install all the necessary dependencies from your `package.json`, then it will run either a custom build command, or by default will look for a `server.js` file in your root and run `node server.js` for you to get your Express or Node app up and running. Easy peasy!

The Dreaded CORS Policy
----
I was excited to check out the functionality of the routes I had created for my API. When I loaded the app, the JSON I had set up was all there! Perfect.

I went back into my local React app, did an `npm start` and was excited to see my front end code populate with all the back end data. Lo and behold, it did not load. I checked the console only to find a CORS policy error. Ugh.

If you've worked with APIs in the past, you've likely run into these types of errors before. Basically, unless the API server is sending a header indicating your request is ok, many browsers will automatically block your request for security reasons. This is generally a good thing, but frustrating during development. Back to the drawing board.


Bringing it Home
----
I did some research and ended up installing [npm cors](https://www.npmjs.com/package/cors). This makes it very easy to set the CORS policy. I followed their docs, set my CORS policy on my Express server to allow requests, and pushed my new code to Azure. It looked similar to this:

```
var cors = require('cors')

app.use(cors())
app.options('*', cors())
```

Pretty simple!

And it worked! To my amazement, when I pushed the new back end code and went back to my code on the front end, spun up a local React server, there it was! I had officially created an API, pushed it to Microsoft Azure, and had all of our MariaDB data for use on my front end React application.

I hope this helps someone looking for how to deploy their own Express and Node applications, especially when you're faced with having to use older technology. Feel free to [find me on Twitter](https://twitter.com/tom_raley) if you have any more questions!