# Architecture rules

- Apply UTMify's `elementor-button` compatibility marker to checkout anchors in the sales page's layout effect; it preserves native new-tab navigation and checkout tracking when the page is embedded in another site.
- Handle offer-anchor clicks in the sales page's capture handler to scroll within the page without third-party tracking scripts intercepting internal navigation.