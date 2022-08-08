<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon">
    <title>Слайдер</title>
    <link rel="stylesheet" href="slider.css">
</head>
<body>

<?php

    $slides = glob($_SERVER['DOCUMENT_ROOT'] . '/slides/*');
    $count = count($slides);
    $start = 1;
?>

<div class="slider">
    <div class="slides">
            <? for($i = 0; $i < $count; $i++): ?>
                <img class="slide <? if($i == $start-1) { echo 'active'; } ?>" src="<? echo '/slides/' . explode('/slides/', $slides[$i])[1]; ?>">
            <? endfor; ?>
        <div class="navigation">
            <a class="prev" onclick="switchSlide(-1, 1)">&#10094;</a>
            <a class="next" onclick="switchSlide(1, 1)">&#10095;</a>
        </div>
    </div>
    <div class="dots">
        <? for($d = 1; $d < $count + 1; $d++): ?>
            <span class="dot <? if($d == $start) { echo 'active'; } ?>" onclick="switchSlide(<?= $d; ?>)"></span>
        <? endfor; ?>
    </div>
</div>

</body>

    <script type="text/javascript">

        const settings = {

            slide: <?= $start; ?>,
            auto: true,
            time: 5000,
            delay: 10000
        }

    </script>
    <script src="slider.js"></script>
</html>