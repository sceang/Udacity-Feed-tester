/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    /* This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('all feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('urls are defined', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            };
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('names are defined', function() {
            for (var i = 0; i <allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    /* New test suite named "The menu" */
    describe('The menu', function() {

        /* Test that ensures the menu element is hidden by default. */
        it('menu element is hidden', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* Test that ensures the menu changes
         * visibility when the menu icon is clicked.
         */
        it('menu displays and hides when clicked', function () {
            let menuIcon = $('a.menu-icon-link');
            menuIcon.click();
                expect($('body').hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
                expect($('body').hasClass('menu-hidden')).toBe(true);
        });
});

    /* New test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('at lease has a single entry', function(done) {
            expect($('.feed .entry').length).not.toBe(0);
            done();
        });
    });

    /* New test suite named "New Feed Selection" */
    describe('New Feed Selection', function () {
        let initialFeed, newFeed;

        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                initialFeed = $('.feed').html();

                loadFeed(1, function() {
                    done();
                });
            });
        });

        it('new feed is not the same as initial feed', function (done) {
            let newFeed = $('.feed').html();
            expect(newFeed).not.toBe(initialFeed);
            done();
        });
    });
}());
