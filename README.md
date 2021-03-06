![movingimage](./assets/00-mi-logo.png)

# Front-end developer challenge

The application is a panel control for the videos list. Is possible to add a new video description, edit and delete it. And the list is presented in a table where is also possible to search.

# Solution and tech decisions

As it is a simple application, I will concentrate to make it more performative with a custom clean UI.
To do so, I will not use the material-ui, I will replace it for my customs components build with TailwindCSS.

## Stack

- React (CRA)
- TailwindCSS

### Notes

- The backend can be accessed via http://localhost:3001
- It runs with a package called **_json-server_**, and the data comes from the **_db.json_** file

## Steps to run the project

- Install dependencies with:

`yarn`

- Run both the frontend and backend with:

`yarn start`

### Comments

I know other styling frameworks and libraries, but I choose Tailwind to improve the application performance and for personal learning interest.

In the end, I see that others frameworks, like styled-components, would give a better code organization, reusability, and maybe faster to develop.
But Tailwind was quite easy to learn and use, is an interesting Utility-first approach.
And without a doubt, has better performance than a JS styling framework.
