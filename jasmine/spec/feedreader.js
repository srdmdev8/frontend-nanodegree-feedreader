/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
 
 /*These tests were not easy to for me to complete, so I used the Udacity forums
 for hints and tips which eventually got me to completion.*/

$(function() {
    /*This describes my "RSS Feeds" test suite.*/
    describe('RSS Feeds', function() {
        /*This test makes sure that the allFeeds variable has been defined and
         that it is not empty.*/
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*This test loops through each feed in the allFeeds object and ensures it
         has a URL defined and that the URL is not empty.*/
         it('should have a URL defined and not empty', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           });

         });


        /*This test loops through each feed in the allFeeds object and ensures it
         has a name defined and that the name is not empty.*/
         it('should have a name defined and not empty', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           });
         });
    });


    /*This describes "The Menu" test suite.*/
    describe('The Menu', function() {


        /*This test ensures that the menu element is
         * hidden by default.*/
         it('should be hidden by default', function() {
             expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /*This test ensures that the menu changes
          visibility when the menu icon is clicked.*/
          it('should display/hide when clicked', function() {
              $('a.menu-icon-link').trigger('click');
              expect($('body').hasClass('menu-hidden')).toBe(false);

              $('a.menu-icon-link').trigger('click');
              expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });

    /*This is my test suite for "Initial Entries".*/
    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, function() {
              done();
            });
        });

        /*This test ensures that when the loadFeed function is called and completes
         its work, there is at least a single .entry element within the .feed
         container.*/
         it('has at least one entry', function(done) {
             expect($('.feed .entry').length).toBeGreaterThan(0);
             done();
         });
    });

    /*This is my test suite for "New Feed Selection".*/
    describe('New Feed Selection', function() {

        /*This test ensures that when a new feed is loaded by the loadFeed function
         that the content actually changes.*/
         var firstFeed;
         var nextFeed;

         beforeEach(function(done) {
             loadFeed(0, function() {
               firstFeed = $('.feed').html();
               loadFeed(1, function() {
                  nextFeed = $('.feed').html();
                  done();
               });
             });
         });

         it('Loads new feed', function(done) {
             expect(firstFeed).not.toEqual(nextFeed);
             done();
         });
    });
}());
