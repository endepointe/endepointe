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
Flow:
-> Site checks if authorization token is present as a cookie
-> If there is a cookie, get the profile
-> If no cookie is found, do nothing
-> When a user chooses to make a blog post, they must first be authenticated
		with one of the providers listed below. 
-> If their cookie is present, they will be shown their profile name and the
		button to reply to post.
-> If their cookie is not present, they will be shown the options to 
		authenticate with one of the providers listed below.
-> Once they have been authenticated, they will be directed to the reply 
		page.

The authentication method used is [OAuth2.0](https://oauth.net/2/).

The authentication providers implemented:
- GitHub
- Google
- Twitter
- LinkedIn (in progress)
- Facebook (in progress)

If a user wishes to remove the token, they will be able to log out. The site
does not require the user to log in to view the content. A log in action 
will only be required if the user wishes to add their thoughts to the blog
posts. For this reason, a log in option in the nav bar is not required.
