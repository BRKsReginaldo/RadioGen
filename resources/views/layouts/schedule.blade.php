<?php
    $schedule = \Admin\Models\Schedule::find(request()->route()->parameters()['child']);      
?>
<meta property="og:title" content="{{ $schedule->name }}">
<meta property="og:image" content="{{ $schedule->image }}">
<meta property="og:url" content="{{ url()->current() }}">
<meta property="og:type" content="article">
<meta name="twitter:card" content="summary">
<meta name="twitter:url" content="{{ url()->current() }}">
<meta name="twitter:title" content="{{ $schedule->name }}">
<meta name="twitter:image" content="{{ $schedule->image }}">
