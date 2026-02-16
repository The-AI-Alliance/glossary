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

		Actually, the more proper way is to use these tags, but my attempts
		to make this work failed!
		<meta http-equiv="refresh" content="0; url=.../#hash">
		<link rel="canonical" href=".../#hash" />
		{% endcomment %}

		<script type="text/javascript">
			newURL = "{{site.baseurl}}/" + document.location.search + document.location.hash;
			document.location.href = newURL;
		</script>
	</head>
	<body>
	</body>
</html>
