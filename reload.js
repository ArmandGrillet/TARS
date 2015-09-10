function checkNewTweets() {
	if ((document.readyState != 'interactive') && (document.getElementsByClassName('js-new-tweets-bar').length > 0)) { // New tweets!
		document.getElementsByClassName('js-new-tweets-bar')[0].click(); // Showing the new tweets.
		window.setTimeout(checkNewTweets, 5000);
	} else {
		window.setTimeout(checkNewTweets, 1500);
	}
}

(function() {
	window.setTimeout(checkNewTweets, 5000);
})();