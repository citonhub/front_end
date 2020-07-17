<?php
return [
    /*
    |--------------------------------------------------------------------------
    | Default Image Paths and Settings
    |--------------------------------------------------------------------------
    |
    |
    | We set the config here so that we can keep our controllers clean.
    | Configure each image type with an image path.
    |
    */
      

        'postImage' => [
            'destinationFolder'     => '/imgs/posts/',
            'destinationThumbnail'      => '/imgs/posts/thumbnails/',
            'thumbPrefix'           => 'thumb-',
            'imagePath'             => '/imgs/posts/',
            'thumbnailPath'         => '/imgs/posts/thumbnails/thumb-',
           'thumbHeight'           => 100,
            'thumbWidth'            => 100,
             'imgHeight'           => 350,
            'imgWidth'            => 350
        ],
        'spaceImage'=> [
            'destinationFolder'     => '/imgs/space/',
            'destinationThumbnail'      => '/imgs/space/thumbnails/',
            'thumbPrefix'           => 'thumb-',
            'imagePath'             => '/imgs/space/',
            'thumbnailPath'         => '/imgs/space/thumbnails/thumb-',
           'thumbHeight'           => 100,
            'thumbWidth'            => 100,
             'imgHeight'           => 350,
            'imgWidth'            => 350
        ],
        'profileImage'=>[
            'destinationFolder'     => '/imgs/profile/',
            'destinationThumbnail'      => '/imgs/profile/thumbnails/',
            'thumbPrefix'           => 'thumb-',
            'imagePath'             => '/imgs/profile/',
            'thumbnailPath'         => '/imgs/profile/thumbnails/thumb-',
           'thumbHeight'           => 100,
            'thumbWidth'            => 100,
             'imgHeight'           => 350,
            'imgWidth'            => 350
        ]
        
   
];