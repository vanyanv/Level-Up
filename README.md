# Level UP

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Build a Gameified Progression tracker full stack Application using the MERN stack

### Screenshot

![](/images/Final.PNG)

### Links

- Solution URL: [https://github.com/chopsquad/Dicee-Challenge](https://github.com/chopsquad/Dicee-Challenge)
- Live Site URL: [https://chopsquad.github.io/Dicee-Challenge/](https://chopsquad.github.io/Dicee-Challenge/)

## My process

- [x] Create an external javascript file
- [x] Add Dice images
- [x] Create a random number
  - ![Random Numbers](/images/randomNumber.PNG)
- [x] Change the `<img>` to a random dice
  - ![Random Numbers](/images/p1ImgChange.PNG)
- [x] Change both image elements
  - ![Random Numbers](/images/p2ImgChange.PNG)
- [x] Change the title so it displays a winner
  - ![Random Numbers](/images/determiningWinner.PNG)

### Built with

- HTML
- CSS
- MongoDB
- Express
- React
- Node
- Javascript

### What I learned

-How to add an external js file into HTML:

```html
<script src="URL"></script>
```

-If you want to have the external JS file to be run at the end then we add defer to the script:

```html
<script src="URL" defer></script>
<!-- A script tag with defer waits until the entire parser is done and then runs all scripts marked with defer in the order they are encountered. -->
```

-How to add an external image to html

```html
<img
  src="URL of external image"
  alt="something you would say when reading the page t someone over the phone"
/>
```

-_the alt attribute provides alternate text to display when an image is not loaded. It also used to support accessibility_.

-How to get a random number between two integer while also including those integers.

```js
Math.floor(Math.random() * (max - min + 1) + min);
//The maximum is inclusive and the minimum is inclusive
// math.floor rounds down towards negative infinity
// math.ceil rounds up towards positive infinity
```

- How to set the attribute using dom manipulation

```js
//first we using a querySelector to select what we want to change and set it into a variable
let variable = document.querySelector('What we want to select');
//using the manipulation attributes we can make the changes happen
variable.setAttribute(name, value);
// the name is the name of the attribute whose value is it be changed
// the value is what we will changing to.
```

### Continued development

- [ ]Add functions for code that is being repeated.

### Useful resources

- [Resource 1](https://stackoverflow.com/questions/8996852/load-and-execute-order-of-scripts) - This helped me get a better understanding of when and where scripts should be used and how high or low they are in loading priority.
- [Resource 2](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt) - Documentation on the use of alt text and the benefits of using it to help with accessibility.
- [Resource 3](https://stackoverflow.com/questions/14/difference-between-math-floor-and-math-truncate) - To get a better understanding when to use math. functions.
- [Resource 4](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute) - Using setAttribute and the documentation behind it.
- [The Markdown Guide](https://www.markdownguide.org/) important information on how to markdown.

## Author

- Website - [Vardan Vanyan](https://www.your-site.com)
- GitHub - [chopsquad](https://github.com/chopsquad)
