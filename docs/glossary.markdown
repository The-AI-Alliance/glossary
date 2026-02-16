---
layout: none
title: glossary-old
nav_order: 100
has_children: false
---
<html>
	<head>
		{% comment %}
		We would like to redirect to the new page, but keep the hash to navigate to the
		term. This is the hack we used, adapted from StackOverflow:
		// Source - https://stackoverflow.com/a/31604335
		// Posted by dakab
		// Retrieved 2026-02-16, License - CC BY-SA 3.0

		And this hack was used to compose the tags with JavaScript:
		// Source - https://stackoverflow.com/a/18982299
		// Posted by T.J. Crowder, modified by community. See post 'Timeline' for change history
		// Retrieved 2026-02-16, License - CC BY-SA 4.0

		What we want:
		<meta http-equiv="refresh" content="0; url=.../#hash">
		<link rel="canonical" href=".../#hash" />
		{% endcomment %}

		<script type="text/javascript">
			newURL = "{{site.baseurl}}/" + document.location.search + document.location.hash;
			console.log(newURL);

			var meta = document.createElement('meta');
			meta.httpEquiv = "refresh";
			meta.content = "0";
			meta.url = newURL;
			document.getElementsByTagName('head')[0].appendChild(meta);
			console.log(meta);
			var link = document.createElement('link');
			link.rel = "canonical";
			link.href = newURL;
			document.getElementsByTagName('head')[0].appendChild(link);
			console.log(link);
		</script>
	</head>
	<body></body>
</html>
