<?php
    $post = \Admin\Models\Post::find(request()->route()->parameters()['child']);
?>
<meta property="og:title" content="{{ $post->title }}">
<meta property="og:image" content="{{ $post->image }}">
<meta property="og:description" content="{{ strip_tags($post->description) }}">
<meta property="og:url" content="{{ url()->current() }}">
<meta property="og:type" content="article">
<meta name="twitter:card" content="summary">
<meta name="twitter:url" content="{{ url()->current() }}">
<meta name="twitter:title" content="{{ $post->title }}">
<meta name="twitter:image" content="{{ $post->image }}">
<meta name="twitter:description" content="{{ strip_tags($post->description) }}">