<?php
    $event = \Admin\Models\Event::find(request()->route()->parameters()['event']);      
?>
<meta property="og:title" content="{{ $event->title }}">
<meta property="og:image" content="{{ $event->image }}">
<meta property="og:description" content="{{ strip_tags($event->description) }}">
<meta property="og:url" content="{{ url()->current() }}">
<meta property="og:type" content="article">
<meta name="twitter:card" content="summary">
<meta name="twitter:url" content="{{ url()->current() }}">
<meta name="twitter:title" content="{{ $event->title }}">
<meta name="twitter:image" content="{{ $event->image }}">
<meta name="twitter:description" content="{{ strip_tags($event->description) }}">
