import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
constructor() {
    this.lazyImages = $(".lazyload");
    this.siteheader = $(".site-header");
    this.headerTriggerElement = $(".large-hero__title");
    this.createHeaderWaypoint();
    this.pageSections = $(".page-section");
    this.headerLinks = $(".primary-nav a")
    this.createPageSectionWaypoints();
    this.addSmoothScrooling();
    this.refreshWayPoints();
}

refreshWayPoints() {
    this.lazyImages.on('load', function() {
        Waypoint.refreshAll();
    })
}

addSmoothScrooling() {
    this.headerLinks.smoothScroll();
}

createHeaderWaypoint() {
    var that = this;
    new Waypoint({
        element: this.headerTriggerElement[0],
        handler: function(direction) {
            if (direction == "down") {
                that.siteheader.addClass("site-header--dark")

            } else {
                that.siteheader.removeClass("site-header--dark")
            }
        }
        });
    }

    createPageSectionWaypoints() {
        var that = this;
        this.pageSections.each(function() {
            var currentPageSection = this;
            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if (direction == "down") {
                            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");   
                        }
                },
                offset: "18%"
            });

            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if (direction == "up") {
                            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");   
                        }
                },
                offset: "-40%"
            });
        });
    }
}

export default StickyHeader;