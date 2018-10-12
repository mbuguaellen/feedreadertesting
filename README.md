# FeedReaderTesting

It is a web-based application that reads RSS feeds. The main objective is implementing Jasmine testing. 


## Why this Project?

As Udacity said in this project requirement, Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.


## How to run

git clone https://mbuguaellen.github.io/feedreadertesting/

open feed-reader-testing repository.

open index.html with your browser.

There should be 7 specs,0 failures at the bottom of the html page.

### Testing Parts:

* The allFeeds is defined & allFeeds length is greater than 0.
* Each feed element inside allFeeds has a url key & url value isn't empty.
* Each feed element inside allFeeds has a name key & name value isn't empty.
* Side left menu is hidden by default. 
* Toggle button shows the left hidden menu and re-click it hides the menu again. 
* loadFeed() function completes its work by adding at least a single entry element in feed.
* Test if new feed is loaded when change by comparing the old and new title. 
