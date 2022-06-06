<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon">
    <title>Слайдер</title>
    <link rel="stylesheet" href="slider.css">
</head>
<body>

<?php

$slides = glob($_SERVER['DOCUMENT_ROOT'] . '/slides/*');
$count = count($slides);

?>
    
<div class="slider">
    <div class="slides">
            <? foreach($slides as $slide): ?>
                <div class="slide"><img src="<? echo '/slides/' . explode('/slides/', $slide)[1]; ?>"></div>
            <? endforeach; ?>
        <div class="navigation">
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
    </div>
    <div class="dots">
        <? for($i = 1; $i < $count + 1; $i++): ?>
            <span class="dot" onclick="currentSlide(<? echo $i; ?>)"></span>
        <? endfor; ?>
    </div>
</div>

</body>

    <script type="text/javascript">

        const sliderSettings = {

            startIndex: 1,
            navigationIndex: 1,
            limit: <? echo $count; ?>,
            auto: true,
            time: 5000,
            delay: 10000
        }

    </script>
    <script src="slider.js"></script>
</html>