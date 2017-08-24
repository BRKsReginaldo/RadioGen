<?php
$schedule = \Admin\Models\Schedule::find(request()->route()->parameters()['child']);
?>
<meta property="og:title" content="{{ trim($schedule->name) }}">
<meta property="og:image" content="{{ trim(request()->getSchemeAndHttpHost().$schedule->image) }}">
<meta property="og:description" content="{{ str_limit(trim(strip_tags($schedule->description)), 150) }}">
<meta property="og:url" content="{{ trim(url()->current()) }}">
<meta property="og:type" content="article">
<meta name="twitter:card" content="summary">
<meta name="twitter:url" content="{{ trim(url()->current()) }}">
<meta name="twitter:title" content="{{ trim($schedule->name) }}">
<meta name="twitter:image" content="{{ trim(request()->getSchemeAndHttpHost().$schedule->image) }}">
<meta name="twitter:description" content="{{ str_limit(trim(strip_tags($schedule->description)), 150) }}">
