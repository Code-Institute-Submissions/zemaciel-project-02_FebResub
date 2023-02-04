
# Movie Quotes Quiz

![](/assets/readme/responsive.png)

[Live Site](https://zemaciel.github.io/project-02/)

This website is a Quiz Game produced as the Second Portfolio Project (JavaScript Essentials) for the Diploma in Full Stack Software Development course at [Code Institute](https://codeinstitute.net/ie/).
This is an updated version of the first submitted project.
<br>
<br>
<br>

# Table of content

<!-- TOC start -->
- [Movie Quotes Quiz](#movie-quotes-quiz)
  * [Site Goals](#site-goals)
  * [Design](#design)
    + [Colours](#colours)
    + [Typography](#typography)
    + [Logo and Favicon](#logo-and-favicon)
  * [Existing Features](#existing-features)
    + [Heading](#heading)
    + [Game Area](#game-area)
    + [EndGame](#endgame)
    + [Footer](#footer)
  * [Future Features](#future-features)
    + [Improve feedback for correct and incorrect answers](#improve-feedback-for-correct-and-incorrect-answers)
    + [Improve the design ](#improve-the-design)
    + [Player name and sharing score](#player-name-and-sharing-score)
  * [Testing](#testing)
    + [HTML Validator](#html-validator)
    + [CSS Validator](#css-validator)
    + [Lighthouse Testing](#lighthouse-testing)
  * [Main Languages and Applications Used](#main-languages-and-applications-used)
  * [Deployment](#deployment)
  * [Credits](#credits)
    + [Quiz Tutorials and Codes](#quiz-tutorials-and-codes)
    + [Javascript Learning Resources](#javascript-learning-resources)
    + [Other learning resources:](#other-learning-resources)
    + [Movie Quotes](#movie-quotes)
  * [Acknowledgements ](#acknowledgements)
<!-- TOC end -->


## Site Goals
The main goal is to test the users' knowledge of famous movie quotes. Hence, the site displays a line with a movie quotation and four boxes underneath, each containing a movie title, where only one corresponds to the correct answer. The user is asked to match 10 quotes.
<br>Originally there were two areas exhibiting information about the game: a counter, indicating the number of the current question and the number of total questions, and the score card showing how many points the user gets. This updated version also displays a progress bar and an instant feedback to indicate if the user selection was correct or not: the background color of the score card changes to green or red.
The site gives 10 points for each correct answer.


## Design
The idea behind this website's modest and unpretentious design is to evoke the appearance of a sheet of pager in the typewriting machine of a  screenplay writer. 
The background image displays the texture of a sheet of paper, and the heading font looks like a typewriting machine.
<br>Following the same concept, the colours are also limited to red and black, the only colour options for one using a typewriter, and white. 
Everything is arranged in a single column, which is simple to read and display on different screen devices. 

### Colours

* Dark Grey: #222222 
* Red: #A20C0C
<br>
![](/assets/readme/color.png)

### Typography
There are only two font families in use on this website. Special Elite, which resembles the typography of an old-typewrite machine font,  is used for the headings, and Lato, a sans-serif font with good legibility, is used in the smaller lines of text.<br>
![](/assets/readme/typography.png)

### Logo and Favicon

![logo](/assets/readme/logo_movie_quote.png)

* I designed the logo and the favicon using Adobe Illustrator. The symbol a speech bubble with an icon from [Font Awesome](https://fontawesome.com/).
* The favicon was exported as favicon using [favicon.io](https://favicon.io/)
<br>![favicon](/assets/readme/icon.png)


## Existing Features

### Heading
The heading contains the title of the page and an icon. This section is not modified during the game. 


### Game Area
This section contains the quiz itself. It is constituted of the following:
a quote (question)
four movie titles (alternatives)
number of the current quiz and total of questions
scorecard (displayed after the first quiz is answered)

The user is asked to match 10 quotes to the famous movie they are from. 
The quotes and film titles are listed on the javascript file. Each movie quote has a multiple-choice of four possible movie titles. 
Underneath, the number of the current question and the total of questions is displayed, indicating the game's progress.
After the first quiz, a scorecard shows how many points the user has got— each question is worth 10 points. 
Once the user selects an alternative, the quiz advances to the next question until the end. 

### EndGame
When the users  anwsers the 10th quiz, the game area changes. 
The quote, alternatives and the current quiz number are no longer displayed. Instead, the Game Area only shows the score and a goodbye message. 

After 10 seconds, the Game Area returns to the original state, and the score resets. 

### Footer
The minimalist footer contains only three icons for the author's website, LinkedIn and GitHub.

## Future Features
The site, at its current state, presents a fully working simple quiz game. 
While working on this project, I got ideas for making it more interesting. However, these features would add more complexity to the code and take more time to complete. So I listed a few of those ideas as future features.

### Improve feedback for correct and incorrect answers
The only feedback the user receives indicating whether he answered correctly is the scorecard's points. That could be more elaborate to make the site more attractive. Some suggestions would be:
* Play different sounds for a correct or incorrect answer. To stay on theme, it could be the sound of a typewriting bell for a correct answer and a kneading paper sound for the wrong one.
* Play the audio or video clip with the original movie quote just after the user selects the solution.
* When clicking or tapping the wrong alternative, instead of going straight to the next question, the site could highlight the correct one in one colour (green, for example), highlight the wrong selected option in another colour (red), and fade the colours of the other alternatives. 
### Improve the design 
Although I appreciate a simple design, this one could use more graphs. Perhaps a photograph of a typewriting machine with the central section of the site as a sheet of paper. 

### Player name and sharing score
A feature to help promote the site would be allowing the user to share his score and invite friends to play.
Before starting the quiz, the user would input his name. After playing, the site would generate a personalised message, showing the user's name and score, with buttons to share the quiz result on social media channels, Whats App and email.



## Testing

I have manually tested the site on Chrome and Firefox on desktop computers with different screen sizes ( 27" and 13") on Chrome and Firefox on Android phones and tablet, and also using google dev tools.

### JSHitnt
All the Java Script files were checked on [JShint.com](https://jshint.com/). The major issues, like missing semicolons or unused variables, were fixed. However, there are still warnings that undefined and unused variables were present on the script.js. As those variables are part of other files in this app, I've ignored these warrings and the ones regarding the ES6 version. 


### HTML Validator
No errors were returned when passing through the [W3C Validator](https://validator.w3.org/).
There was only a warning regarding an empty h2 heading, in which the JavaScript code would add the content.
<br>
![](/assets/readme/html_validator.png)

### CSS Validator
No errors were returned when passing through the [Jigsaw validator](https://jigsaw.w3.org/css-validator/)
<br>
![](/assets/readme/css_validator.png)

### Lighthouse Testing
Lighthouse gave a performance score inferior to 89 points. However, in all other criteria, the score was about 90.
<br> 
![](/assets/readme/lightouse.png)


## Main Languages and Applications Used
* HTML5
* CSS3
* JavaScript
* [Google Fonts](https://fonts.google.com/)
* Font Awesome
* GitPod
* GitHub
* VS Studio Code
* [Favicon](https://favicon.io/)
* [Font Awesome](https://fontawesome.com/)

## Deployment
The site was deployed to GitHub pages.
In the GitHub repository, go to Settings.
Of the drop-down menu, select the Master Branch
Click" Save"
The page reloads with the link to the project: https://zemaciel.github.io/project-02/


## Credits
As this is the first time I am learning Javascript, I sought other learning resources to complement my studies. Colt Steele and Stephen Grider's courses on Udemy and CoderLipi classes on YouTube were particularly helpful.
<br>
I have researched several online quizzes developed in JavaScript and quiz tutorials on building this project, including projects of other Code Institute students. Among all the sources I came across, a video class by Professor Edson Braga was one that I followed to structure the JavaScrip code for this quiz.

### Quiz Tutorials and Codes
* Edson Braga, Application in Java Script, Quiz (Portuguese) [Class 20](https://youtu.be/Ph_1k5d1y_s) 
and [Class 21](https://www.youtube.com/watch?v=zQe2wXmO0p8&list=PLnex8IkmReXxZEXje06kW1uCwm5iC8M_Z&index=22).
* James Q Quick, [Build a Quiz App with HTML, CSS, and JavaScript](https://www.youtube.com/playlist?list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx). 
* lizac9 [Black & White Horror Film Quiz](https://github.com/lizac9/project2-bn-horror-film)
* Aleksander Kisielewicz, [007 Quiz Game  – Project 2](https://github.com/alexkisielewicz/quiz-game)


### Other learning resources:
* Kevin Powel, [Dealing with hover on mobile](https://www.youtube.com/watch?v=uuluAyw9AI0)
* css-tricks.com, [Setting page Footer](https://css-tricks.com/couple-takes-sticky-footer/)
* Colt Steele and Stephen Grider: [The Modern Javascript Bootcamp Course](https://www.udemy.com/course/javascript-beginners-complete-tutorial/)
* Stack Overflow: [Change the text of a span element using JavaScript?](https://stackoverflow.com/questions/1358810/how-do-i-change-the-text-of-a-span-element-using-javascript)
* Stack Overflow: [Adding an img element to a div with javascript](https://stackoverflow.com/questions/7802744/adding-an-img-element-to-a-div-with-javascript)
* Stack Overflow, [Github Pages website favicon not showing](https://stackoverflow.com/questions/46163065/github-pages-website-favicon-not-showing)
* [MDM](https://developer.mozilla.org/en-US/)
* [W3 Schools](https://www.w3schools.com/)

### Movie Quotes
* [Ameican Film Institute](https://www.afi.com/afis-100-years-100-movie-quotes/)
* [The Top 50 Famous Movie Quotes](https://blog.hubspot.com/sales/famous-movie-quotes)

### Gif Images
* [Giphy](https://giphy.com/)

## Acknowledgements 
* Martina Terlevic, my mentor for the guidance. 
* Special thanks to my colleagues on Slack for sharing valuable learning sources and their struggles during this course phase.  
