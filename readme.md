# Week Two - Advanced Presentation

Last week we focussed on HTML semantics and document architecture with slight emphasis on presentation. The project assignment for the second week is going to assume that you have learned and mastered the basics of semantic HTML and we are going to focus on advanced presentation skills. 

We want this assignment to feel like a 'week on the job.' And by that we mean, we will provide a completed comp and an expected outcome specification. It is up to you to deliver on this project specification.

## The Comp

You can download the view that you are to complete [here](https://dl.dropboxusercontent.com/u/5658310/cf-project-2/the-comp.psd). It is provided as a Photoshop format, if you do not have access to Photoshop, other applications like Pixelmator are able to open these layered files as well.


## The spec

As a product owner, I need a responsive, clickable prototype of the design deliverable. The final prototype must be visible in a desktop browser, as well perform well on a mobile device. 

Prototype is to use best practices in coding HTML/CSS as there is the potential that some or all of the code will made it into production. 

Aside from images as content, all visual assets should be produced via CSS or typography. The only background image asset allowed will be the main page header. 

## The catch

The expectation is a mobile first UI that will operate well on a handheld device. The provided comp is a desktop view, so you will need to apply your creative skills to address the mobile UI version. 

Images in this project are provided as content, not part of the design. Keep this in mind as you will need to address RWD solution for images as content in the view. 

### Requirements 

1. Semantically correct HTML is required as this will be the model for prod app integration
1. Thing in terms of '*components*'; if all parts of the UI were lego blocks, who would you code that?
1. Images are to be cropped correctly and compression is to take performance into account
1. Project is to take a 'mobile first' approach to Responsive Web Design, next breakpoint snap expected at standard desktop width
1. All CSS measurements should use elastic units unless a pixel specific unit is required for both mobile and desktop
1. All code should be written from the perspective if running on a server. Relative paths to files (`../image.png)` will not be admissible to the assignment
1. Run your project from a server
	* Python
		* [Python simple server](http://www.anotheruiguy.com/ux-design-dev/_book/learning-computers/pyserver.html)
		* No special setup and runs great
	* Node w/Express
		* [node-sass-boilerplate](https://github.com/anotheruiguy/node-sass-boilerplate)
		* Ignore the stuff with Sass and Grunt, we will cover that later, but you can use the Express framework and the Node server script to serve up static content if you desire

### Constraints 

1. Must work in all major browsers of latest versions;
	* Desktop (IE Edge, Safari, Chrome and Firefox)
	* Handheld (Safari on iOS, Chrome on Lollipop)
1. All interactions must be clearly functional
1. Links to other views need not be functional, but must look like links
1. JavaScript is NOT to be used

__DO NOT__ fence yourself in with invisible constraints. Unless it is specifically listed and/or we discussed it in lecture, there is not an expectation to meet an objective that has not been set. 

## The expectation 

In the last assignment we covered the concepts behind semantic and modular HTML. This project assignment is engineered to build on top of those principals and work in more advanced presentation skills, to include RWD. 

SOURCES & COLLABORATORS
-Authored by Sredna Kunowski & Brian Finck

Stackoverflow
-Use <figure> element for icons? html5
-Keeping a string of text together on one line by Jsous
-CSS Title with Horizontal Line on either side by Romain Pellerin

MDN
-HTML element reference
-<hgroup>
-menu tag
-<menuitem>
-HTML forms guide

W3Schools
-HTML <nav> Tag
-HTML <button> type Attribute
-HTML Containers
-html images

MrColes blog
-How to use ampersands in HTML: to encode or not to encode?

Icomoon.com
-Got these icons from the site:facebook,twitter,dribble,linkedin,googleplus, circles left and right.

CSS tricks
-How to make a triangle in css,https://css-tricks.com/snippets/css/css-triangle/

-Contact form code from James Georde at http://www.sitepoint.com/style-web-forms-css/
- html placeholders, Placeholder text in an input field with CSS only (no JavaScript) by david jones

good morning all! Did some grading last night and am feeling pretty good over all. You all are trying new things and it's showing! That's awesome.

The Git commits are WAY BETTER! Well done.

So. HTML and semantics: covered.

CSS; naming, initial organization, and core conventions: covered.

What's next? Time to turn things up. Going into this week we are going to start using power tools. As you get into the pro Dev world, one things that has become a standard is the use of Sass. We will talk about the role Sass plays and touch on other semi-popular solutions for large scale CSS management.

Next thing we will cover this week is core jQuery. Again, let's discuss its role and alternate semi-popular solutions.

Along the way we will continue to discuss more soft skills around Git and get you used to using Gulp as part of a project build system.

This weeks assignment is going to be pretty 'simple'. We are looking for two things;

1) refactor all your CSS to Sass
2) introduce dynamic jQuery elements to the app

The scope of this is for you to stick with your previous pair partner, make the improvements suggested in your last assignment, complete what you didn't in the last assignment and add the new tech/processes/development solutions we are covering.

Simply make a NEW feature branch from last week's project and this will be your new MASTER. Follow all the same practices you did last week, branching/merging/comments, but NEVER COMMIT TO MASTER.

Name this new branch: `w3-a3__sass-and-jquery`

Again, as soon as you start, create the PR with '(wip)' in the title and submit to that as you go along.

New Git things I'm looking for is a GOOD summary statement in the PR. Description of the feature updates and screen shots.

Also, this project MUST BE RESPONSIVE! If you didn't finish that last week, it must be part of this project.

Welcome to week 3!

-https://learn.jquery.com/using-jquery-core/document-ready/
-https://learn.jquery.com/about-jquery/how-jquery-works/
-http://stackoverflow.com/questions/19980659/css-short-border-line
-http://stackoverflow.com/questions/6669846/css-input-field-text-color-of-inputted-text


