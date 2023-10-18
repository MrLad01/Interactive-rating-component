# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating


### Links

- Solution URL: [](https://github.com/MrLad01/Interactive-rating-component/tree/main/my-project)
- Live Site URL: [](https://mrlad01-interactive-rating-component.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [tailwindCSS](https://tailwindcss.com/) - For styles


### What I learned

I used a ternary function for the page, to say if it is submitted or not. I also wrote a short code to accept the values of the numbers for whatever reason. I was able to broaden my understanding on how to use the codes.


```js
  const [value, setValue] = useState(null);
  const [submitted, SetSubmitted] = useState(null); 
  const handleClick = (e) => {
    e.preventDefault();
    SetSubmitted(value);
  }
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.


### Continued development

I was able to focus more on responsiveness and the styling of a page. It was quite an interesting task.

## Author

- Frontend Mentor - [@MrLad01](https://www.frontendmentor.io/profile/MrLad01)
- Twitter - [@MrLad01](https://www.twitter.com/MrLad01)
