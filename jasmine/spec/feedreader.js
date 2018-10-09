/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* loops through each feed in the allFeeds 
         * object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URL is defined and not empty', function() {
            //Loop through allFeeds and check if the url is defined and not null/empty
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


        /* loops through each feed in the allFeeds
         * object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Name is defined and not empty', function() {
            //Loop through allFeeds and check if the name is defined and not null/empty
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    describe('The menu', function() {

        /* 
         * ensures the menu element is hidden by default. 
         */
        //to hold variables
        var body = document.body;
        it('Menu element is hidden by default', function() {
            //Check if the body has a class menu-hidden which is hide the sid emenu by default
            expect($(body).hasClass('menu-hidden')).toBe(true);
        });

        /* ensures the menu changes visibility when the menu
         * icon is clicked. To ensure the menu displays when
         * clicked and it hides when clicked again.
         */
        it('Menu changes visibility when the menu icon is clicked', function() {
            //Test when show the menu
            //Menu is hidden now first click on the button
            $('.menu-icon-link').click();
            //Now the visibility should be false
            expect($(body).hasClass('menu-hidden')).toBe(false);

            //Test when re-click and hide the menu
            $('.menu-icon-link').click();
            //Now the visibility should be false
            expect($(body).hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {

        /* ensures when the loadFeed function is called and
         * completes its work, there is at least a single 
         * .entry element within the .feed container.
         */
        beforeEach(function(done) {
            //After call loadFeed, check if there is at least one entry
            loadFeed(0, done);
        });

        it('After loadFeed() is called, there is at least one .entry', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });

    });

    describe('New Feed Selection', function() {
        /* ensures when a new feed is loaded by the loadFeed function
         * that the content actually changes.
         */

        //Compare old and new contents by using the title
        var oldFeed;
        var newFeed;

        beforeEach(function(done) {
            loadFeed(0, function() {
                //get old title
                oldFeed = $('.feed .entry > h2').html();
                done();
            });
        });

        beforeEach(function(done) {
            loadFeed(1, function() {
                //get new title
                newFeed = $('.feed .entry > h2').html();
                done();
            });
        });

        it('New feed is loaded', function() {
            //compare them, they shouldn't be equal
            expect(newFeed).not.toEqual(oldFeed);
        });
    });
}());