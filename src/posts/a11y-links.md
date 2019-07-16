---
path: "/blog/making-icon-links-accessible"
date: "2019-07-01"
title: "An Easy Fix to Make Sure Your Icon Links Are Accessible"
image: globe.jpg
author: 'Tom Raley'
---

## Link Accessibility On the Web
Accessibility is oftentimes something that gets left to the end of a project--an afterthought. This can be a sad reality for many people using screen readers when they encounter a page that hasn't fully thought out accessibility and the page is nearly impossible to navigate. We should all be thinking more seriously about making sure that all users have a great experience on the web!

There are a few simple things you can do to make sure your site is as accessible as possible. Running a [Lightouse Audit](https://developers.google.com/web/tools/lighthouse/) is a great first step to seeing what issues you may have and where your website excels.

When I recently ran a Lighthouse test on my personal site, it kept telling me my links did not have discernible text. Finally, I was able to pinpoint the problem links--my social media icons in the nav bar and footer of my site had no text! When a screen reader would get to those links, it would simply say "Link" without any indication as to what it was linking to.

After some research, I found a best practice via [A11y-101's amazing documentation on developing accessible websites](https://a11y-101.com), specifically their section on [Icons and links](https://a11y-101.com/development/icons-and-links).

## Visually Hidden Class
Essentially, they recommend inserting a `<span>` element into your `<a>` tags that contains the text of what the link is. Add the class `visually-hidden` to your `<span>`, then add the following CSS to your stylesheet or inline:

```
.visually-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.visually-hidden:focus {
    clip: auto;
    height: auto;
    overflow: auto;
    position: absolute;
    width: auto;
}
```

This will allow you to provide descriptive text of what your link is so that screen readers will pick it up, but won't affect the design of your website and you can still use icons as links. Once I implemented this, Lighthouse was happy and I now have a 100/100 for accessibility when I run a report.

I highly recommend checking out the rest of the articles that a11y-101 offers, as they are great resources for all things accessibility!