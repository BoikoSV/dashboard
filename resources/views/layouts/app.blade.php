<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset('css/main.css') }}">
    <title>@yield('title')</title>
</head>
<body>
<div class="wrapper">
    <header class="header">
        header
    </header>
    <aside class="aside">
        aside
    </aside>
    <main class="main">
        <div class="container">
            @yield('content')
        </div>
    </main>
</div>


<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
