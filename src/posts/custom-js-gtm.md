---
path: "/blog/how-to-custom-javascript-google-tag-manager"
date: "2019-07-14"
title: "How to Write Custom JavaScript in Google Tag Manager to Track Literally Everything"
image: chip.jpg
author: 'Tom Raley'
---

# Google Tag Manager...Why Even Bother?
When I first started developing websites, I was always more concerned with all the HTML, CSS and JavaScript to make the site look and feel great for an excellent user experience. It wasn't until I started getting some of those basics down that I realized the whole point of doing most of this--websites are oftentimes a marketing function (unless of course you're building a web application that has other functionality). But many web developers who are building websites at work or for clients are doing that so their clients can market their business or services and obtain more customers. 

This means that as a developer, you have to ensure that you are somehow creating more value for your client than they would have had without you. Tracking website activity can give your clients insights into their customer base, what they're looking at on their site, and how they behave before they either make a purchase (or don't) or contact them for more information. This is invaluable and if set up properly, you can create some serious value for your clients without a ton of extra work.

# Tracking All the Things
In order to follow along in this article, you should be familiar with the following and have them implemented on your site:

-[Google Tag Manager](https://tagmanager.google.com)  
-[Google Analytics](https://analytics.google.com)  

If you have these set up and working on your site, implementing custom tracking is a great next step to optimize your analytics game. If you need any help, [Jeff Sauer has an excellent article on how to implement Tag Manager](https://www.jeffalytics.com/google-tag-manager-tutorial/). Note: In order to use custom JavaScript, you must be using Tag Manager.


## Implementing Custom JavaScript Code as a Google Tag Manager Variable
First, you need to save your JavaScript somewhere inside Google Tag Manager (GTM) so that it knows to run your code when Tag Manager runs on your site. Navigate to [Google Tag Manager](https://tagmanager.google.com) and select the appropriate account and container. It is recommended to create a new workspace whenever making changes in Tag Manager, but we are not going to cover that here.

Navigate to the "Variables" section using the left-hand menu, then scroll on down to "User-Defined Variables" and click "New".

From here, you provide your variable with a name and then choose the type of variable. For our purposes here, we will be selecting "JavaScript Variable" as the type. Selecting this provides you with a text area to input custom JavaScript. This can be used for pretty much anything! Two examples might be:

1. Selecting a particular DOM element. For instance, if you want the value of a particular field from a form entry, you can grab that field value using JavaScript like so:
```
document.getElementById('form_field_id').value
```

   This will store the value of that form field in a variable that you can then use in Google Tag Manager.  

2. Another example might be if you want to trigger a special event any time someone clicks a particular link on your site. You would grab that link using:
```
document.getElementById('link_id')
```

   You would then store this in a variable in Google Tag Manager for use as a trigger.

## Using Your Custom Variables
Once you have your JavaScript set to whatever you like, it will be available for you to use as part of a tag in Tag Manager or as a custom dimension in Google Analytics. If you navigate to your Tags in Tag Manager, and go to create a tag, you'll notice that your variable is now available alongside all the other variables that Google supplies you with. Pretty neat! 

This is useful if you'd like to send some custom data from your site over to Analytics to be included in reports. For instance, we recently implemented a custom JavaScript snippet to grab a form field value from form submissions so we could tell what the submission was regarding and are now able to filter out ones that we don't need to see, in order to get better numbers of the ones we care about.

Being able to implement custom JavaScript in Google Analytics and Google Tag Manager can give you absolute insights into what your users are viewing, how they're behaving, and how you can improve your site to maximize user experience.