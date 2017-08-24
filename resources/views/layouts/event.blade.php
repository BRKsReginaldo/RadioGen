<?php
$event = \Admin\Models\Event::find(request()->route()->parameters()['event']);
?>
<meta property="og:title" content="{{ trim($event->title) }}">
<meta property="og:image" content="{{ trim(request()->getSchemeAndHttpHost().$event->image) }}">
<meta property="og:description" content="{{ str_limit(trim(strip_tags($event->body)), 150) }}">
<meta property="og:url" content="{{ trim(url()->current()) }}">
<meta property="og:type" content="article">
<meta name="twitter:card" content="summary">
<meta name="twitter:url" content="{{ trim(url()->current()) }}">
<meta name="twitter:title" content="{{ trim($event->title) }}">
<meta name="twitter:image" content="{{ trim(request()->getSchemeAndHttpHost().$event->image) }}">
<meta name="twitter:description" content="{{ str_limit(trim(strip_tags($event->body)), 150) }}">
