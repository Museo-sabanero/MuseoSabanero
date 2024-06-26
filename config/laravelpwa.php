<?php

return [

    'name' => 'Museo del sabanero',
    'manifest' => [
        'name' => env('APP_NAME', 'MS'),
        'short_name' => 'Museo del sabanero',
        'start_url' => '/',
        'background_color' => 'white',
        'theme_color' => '#232B5D',
        'display' => 'standalone',
        'orientation'=> 'any',
        'status_bar'=> 'black',
        'description' => 'MS app',
        'icons' => [
            '72x72' => [
                'path' => '/images/icons/logo72.png',
                'purpose' => 'any'
            ],
            '96x96' => [
                'path' => '/images/icons/logo96.png',
                'purpose' => 'any'
            ],
            '128x128' => [
                'path' => '/images/icons/icon-128x128.png',
                'purpose' => 'any'
            ],
            '144x144' => [
                'path' => '/images/icons/logo144.png',
                'purpose' => 'any'
            ],
            '152x152' => [
                'path' => '/images/icons/icon-152x152.png',
                'purpose' => 'any'
            ],
            '168x168' => [
                'path' => '/images/icons/logo168.png',
                'purpose' => 'any'
            ],
            '192x192' => [
                'path' => '/images/icons/logo192.png',
                'purpose' => 'any'
            ],
            '384x384' => [
                'path' => '/images/icons/icon-384x384.png',
                'purpose' => 'any'
            ],
            '512x512' => [
                'path' => '/images/icons/logo512.png',
                'purpose' => 'any'
            ],
        ],
        'splash' => [
            '640x1136' => '/images/icons/splash-640x1136.png',
            '750x1334' => '/images/icons/splash-750x1334.png',
            '828x1792' => '/images/icons/splash-828x1792.png',
            '1125x2436' => '/images/icons/splash-1125x2436.png',
            '1242x2208' => '/images/icons/splash-1242x2208.png',
            '1242x2688' => '/images/icons/splash-1242x2688.png',
            '1536x2048' => '/images/icons/splash-1536x2048.png',
            '1668x2224' => '/images/icons/splash-1668x2224.png',
            '1668x2388' => '/images/icons/splash-1668x2388.png',
            '2048x2732' => '/images/icons/splash-2048x2732.png',
        ],
        'shortcuts' => [
            [
                'name' => 'Museo del sabanero',
                'description' => 'MUSEO DEL SABANERO',
                'url' => '/shortcutlink1',
                'icons' => [
                    "src" => "/images/icons/icon-72x72.png",
                    "purpose" => "any"
                ]
            ],
            [
                'name' => 'Museo del sabanero',
                'description' => 'MUSEO DEL SABANERO',
                'url' => '/shortcutlink2'
            ]
        ],
        'custom' => []
    ]
];
