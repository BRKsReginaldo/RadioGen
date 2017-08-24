<?php
    $post = \Admin\Models\Post::find(request()->route()->parameters()['child']);
?>
<meta property="og:title" content="{{ $post->title }}">
<meta property="og:image" content="{{ request()->getSchemeAndHttpHost().$post->image }}">
<meta property="og:description" content="{{ str_limit(strip_tags($post->body), 150) }}">
<meta property="og:url" content="{{ url()->current() }}">
<meta property="og:type" content="article">
<meta name="twitter:card" content="summary">
<meta name="twitter:url" content="{{ url()->current() }}">
<meta name="twitter:title" content="{{ $post->title }}">
<meta name="twitter:image" content="{{ request()->getSchemeAndHttpHost().$post->image }}">
<meta name="twitter:description" content="{{ str_limit(strip_tags($post->body), 150) }}">