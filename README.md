## Message Board Outline

This component serves as a message board and will require the user to 
use oauth2 to post a response message to the blog post.
 
 the messages will be saved as json and saved to a psql db.
 
The UserPost object will consist of the following:

``` 	
ResponsePost: {
	id: Hash			
	auther: String,
	date: Date,
	message: String,
	replies: [UserPost.userid)],
}
```

#### Considerations: 
	The length of the post should be less then the messager with enough 
 	space to share their thoughts. Following the contributor guidelines
 	for StackOverflow, a post will be about 1500 words +/- 500. 

	The average word length is about 5 (rounded). Lets be generous and
	bump that up to 6. If the character count reaches 12000 before it 
 	reaches 2000 words, prevent additional text entries. 
 
 	Message length: 2000 words OR 12000 characters
 
 	The posts should be protected from hate speech. Other than that, the
 	users will be free to post what they want. The creation of 
 	community guidelines will be made and displayed so each user knows
 	what to expect before posting. Hate speech will be clearly defined.
 
	Users that violate these guidelines will not have their messages
	removed. The messages containing hate speech will have the 
 	individual words censored out but the all other data will remain
 	about the author.
 
#### Steps for posting a message:
1. User navigates to /blog
2. Check for a access token in either a cookie or session.
3. If there is a valid, unexpired token, display the information
		to make a post. This includes a profile picture and name.
4. If there there is no valid token, get one from the auth endpoint
		and authenticate the user. When this is complete, display the 
		information to make a post (profile picture, name)
5. The user's name will be prefilled and their focus will be on 
		writing their message. 
6. The word count is checked at each change event, updating the user
		on how many words/chars they have left.
7. Once they are done, they submit their post.
8. Their post is saved to the database and checked for adherence to
		community guidelines.
9. If it passes the guideline check, the message is posted to the
		message board. If it does not, it is still posted to the message
		board, with censored words and the user is emailed and the message
		is given a public label for hate speech. 


#### Creating and Posting my Blog
So, I gave it some thought and I want to be able to manage from a local host
application. The database will be separated, running on its own secure server. 
This will require that my server and database are secure. 

What I will need to do:
1. Create a blog management application.
2. Set up a database for my blog post
3. Retrieve those blogs an populate them within the Blog component.

The MVP for the blog management application will contain service for:
- Creating a title
-	Creating blog content
- creating a unique id based on the date and title
- submitting the blog to the database
- save a local copy of each blog

What it should have in the future:
- Retrieve all blog posts based on given parameters
- Update posts
- Delete posts