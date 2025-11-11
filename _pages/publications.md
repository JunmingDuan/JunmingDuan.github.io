---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 3
---

<!-- reference: https://github.com/inukshuk/jekyll-scholar/issues/157 -->

{% capture numJournalPapers %} {% bibliography_count --query @article or @misc %} {% endcapture %}

<div class="publications">
  <div style="counter-reset:bibitem {{numJournalPapers|plus:1}}"></div>
  {% bibliography --query @article or @misc %}
</div>

