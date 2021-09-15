# Gatsby Setup

## Hello World Starter

https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-hello-world

## Folder Structure

1.  src
    - assets
      - scss
      - images
    - components
    - constants
    - templates
    - pages

## Installing SCSS support

1. https://www.gatsbyjs.com/docs/how-to/styling/sass/

## Bootstrap

1. npm install bootstrap
2. create src/assets/scss/main.scss
3. create src/assets/scss/vendors/\_bootstrap.scss
4. https://getbootstrap.com/docs/5.1/customize/sass/ use this site to copy and paste the template. You can replace "../node_modules/" with "~" as it means the same thing
5. Import your other partials into this file that effect bootstrap
6. Import bootstrap into "gatsby-browser.js"

## Naming conventions

1.  pages should be lowercased to match slug
2.  components should be sentence cased.

## Gatsby Web Fonts

1.  https://www.gatsbyjs.com/plugins/gatsby-plugin-webfonts/?=web%20fonts

## Layout Module

1.  In the components folder create a "Layout.js" This file accepts children prop.
2.  Create a Header.js and Footer.js to wrap site and import it into Layout.js
3.  Another approach to this is simpler in the long run because it programmatically wraps all the pages called gatsby browser api.

## Images

1.  Create folder "src/assets/images"
2.  Install [gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image)
3.  Use StaticImage if images are used exactly the same and don't change. If the image is dynamic or being imported through props use GatsbyImage
4.  To apply classes to image itself use "imgClassName" prop
5.  Static images you pass "src" prop
6.  Gatsby image pass "image" prop
7.  Static images when you pass the src prop you can't pass it in a dynamic value with curlys you need to just type out the path to where the image is located.
8.  Sometimes it doesnt make sense to use StaticImage bc if you're using an svg its already small file size and importing it the normal react way is easier.

## SVG Library

[UnDraw](https://undraw.co/)

## Active styles for current page

1.  use activeClassName prop and pass it a class value

## Sticky Footer

All the wrapper elements on the page, html, wrapper etc need to be display flex with 100% height. The footer element can then user margin top auto to have it float to the bottom

## Loading Environment Variables

https://www.gatsbyjs.com/plugins/gatsby-source-contentful

1.  .env.development
2.  .env.production

## Creating Pages dynamically

https://www.gatsbyjs.com/docs/creating-and-modifying-pages/

Either option for creating pages isnt necesarrily better than one another its good to know both.

## File System API

Notes: Faster, less control

1.  Create a file within the pages folder and it must be named the same name that is in graphql but remove the word "all" from the name. This file will be used as the template to create new pages dynamically. Then you can choose which field you want gatsby to base the slug off of. For instance if you choose the title, gatsby will run a query behind the scenes for recipes and create pages for all recipes and base the slug off title.

## Gatsby Node API

Notes: More complicated, more control

1.  Create a template folder in src
2.  Create a file called gatsby-node.js and place it at root of site.
3.  Everytime you do something in gatsby node you have to restart server
4.  When you create a query you need to wrap it in parenthesis.
5.  First thing we do is execute a query and store the data we get back into a variable.
6.  Then we access the data and drill down to the specific property we want to iterate over.
7.  We perform a for each loop and the use the createPage action and pass it properties of path, component, and context. This will then generate pages for each of these items.
8.  We need to be able to access component path using
    - const path = require("path")

## Headless CMS

1.  Make sure pages are set to have unique values
2.  Consider if the site values will be constantly changing sometimes its better to not put every little thing into the headless CMS and instead manage it locally within the project instead.

## Icons

1.  [React icons](https://react-icons.github.io/react-icons)

## Query Variables

Query variables allow you to pass in variables dynamically into your queries. We need this for create dynamic templates because when you make a query in your page for the data we need to pass in the title as a query variable to perform our second query. This is what brings in the rest of the page data.

## Forms

1. Use Formspree

## SEO

1. Install [Gatsby plugin react helmet](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet)
2. Create a component called SEO and pass it the appropriate prop values

## Webhooks

Imagine youre in a scenario where you make a content update in your headless cms. The build process wont trigger automatically, you will have to go into either netlify or your local app and redeploy with new content.

1. Go to build hooks in settings netlify, copy the value it gives you
2. Go to contentful and paste in the url into the webhooks section
3. Now when any changes are made a post request is sent to netlify to rebuild the app.

## Favicon

https://favicon.io/

1. Place in static folder

## Gatsby Browser - Wrap Layout component

In order to wrap your entire site with layout component programmatically

1.  Create gatsby-browser.js
2.  https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/ follows steps for wrapPageElement.
3.  Create a gatsby-ssr.js file and place the same content from gatsby browser in it.

## Creating constants

1.  You can create constants for instance an array of objects to build out navbar and then just import that file into other parts of your application.
2.  You can also place components inside of an object when you loop through something. For instance i could have an array of objects. On each item in the array i have a components that is a property on there.

## StaticImage SVG Gotcha

Control the height of the image using its width in css. If you explicitly set a height then you might face clipping issues.

## Passing props

If a value is not available within a component. For instance passing a title you can inside the return just do {title || "Default title"}
