# Root project details

### Table of Contents
1. [About](#About)
	1. Projects
	1. Blogs
2. [Structure](#Structure)
	1. Authentication
3. Maintenance
	1.	Authentication
	1. Database
	1. Blogs

## Structure

### Authentication
To be able to post a reply to any of the blogs, a user must login with an 
authenticatoin provider. The authentication method used is [OAuth2.0](https://oauth.net/2/).

The authentication providers implemented:
- GitHub
- Google
- Twitter
- LinkedIn (in progress)
- Facebook (in progress)

Once a user has successfully logged in, any returns to the site should 
automatically find the user with the provided token.

If a user wishes to remove the token, they will be able to log out. The site
does not require the user to log in to view the content. A log in action is
will only be required if the user wishes to add their thoughts to the blog
posts. For this reason, a log in option in the nav bar is not required.
