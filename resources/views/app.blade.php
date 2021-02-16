<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

        <title>prueba laravel-inertia</title>

        <!-- Fonts
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">-->

        <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
        <script src="{{ mix('/js/app.js') }}" defer></script>
    </head>
    <body class="hold-transition skin-blue sidebar-mini">
        <div class="wrapper">
            <div>
                @include('layouts.header')
            </div>

            <div>
                @include('layouts.control_sidebar')
                @include('layouts.sidebar')
            </div>

            <div class="content-wrapper">
                @include('layouts.content')
                <!-- Main content -->
                <section class="content">
                        <div>
                            @inertia
                        </div>
                </section>
            </div>

            <div>
                @include('layouts.footer')
            </div>
        </div>
    </body>
</html>
