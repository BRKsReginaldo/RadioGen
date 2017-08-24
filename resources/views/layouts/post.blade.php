<?php
$post = \Admin\Models\Post::find(request()->route()->parameters()['child']);
?>
<meta property="og:title" content="{{ trim($post->title) }}">
<meta property="og:image" content="{{ trim(request()->getSchemeAndHttpHost().$post->image) }}">
<meta property="og:description" content="{{ str_limit(trim(strip_tags($post->body)), 150) }}">
<meta property="og:url" content="{{ trim(url()->current()) }}">
<meta property="og:type" content="article">
<meta name="twitter:card" content="summary">
<meta name="twitter:url" content="{{ trim(url()->current()) }}">
<meta name="twitter:title" content="{{ trim($post->title) }}">
<meta name="twitter:image" content="{{ trim(request()->getSchemeAndHttpHost().$post->image) }}">
<meta name="twitter:description" content="{{ str_limit(trim(strip_tags($post->body)), 150) }}">