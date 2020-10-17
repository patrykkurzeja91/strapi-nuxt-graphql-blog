# Strapi Starter Nuxt Blog

Nuxt starter for creating a blog with Strapi.

This starter allows you to try Strapi with Nuxt with the example of a simple blog. It is fully customizable and due to the fact that it is open source, fully open to contributions. Do not hesitate to add new features etc ...

You may want to know how to develop such a starter by your own! This starter is actually the result of this [tutorial](https://strapi.io/blog/build-a-blog-using-nuxt-strapi-and-apollo)


### Deploy the backend

To deploy the Strapi instance you'll need:

- [An Heroku account](https://signup.heroku.com/) for free
- [A Cloudinary account for saving images](https://cloudinary.com/users/register/free) for free

Once you have created these accounts you can deploy your instance by clicking on this button

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/strapi/strapi-starter-blog)

[Here](https://github.com/strapi/strapi-starter-blog) is the repository of the backend of this starter

### Features

- 2 Content types: Article, Category
- 2 Created articles
- 3 Created categories
- Permissions set to `true` for article and category
- Responsive design using UIkit

### Pages

- "/blog" display every articles
- "/blog/article/:slug" display one article
- "/blog/category/:slug" display articles depending on the category

### Getting started

**Backend**

See full instructions [here](https://github.com/strapi/strapi-starter-blog)

**Frontend**

```bash
git clone https://github.com/patrykkurzeja91/strapi-nuxt-graphql-blog.git
cd strapi-nuxt-graphql-blog
```

#### Start the frontend server

```bash
# Using yarn
yarn install
yarn deve

# Using npm
npm install
npm run dev
```

Nuxt server is running here => [http://localhost:3000](http://localhost:3000)

Enjoy this starter
