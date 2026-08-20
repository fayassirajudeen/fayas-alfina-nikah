<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Fayaz & Alfina | Nikah Invitation</title>

<meta name="description" content="The Nikah invitation of Fayaz Sirajudeen & Alfina Salim">

<style>

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Playfair+Display:wght@400;500;600&family=Montserrat:wght@300;400;500&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: #f6f0e7;
    color: #3d3329;
    font-family: "Montserrat", sans-serif;
    overflow-x: hidden;
}

:root {
    --gold: #a88952;
    --darkgold: #80652f;
    --cream: #f6f0e7;
    --ivory: #fffdf9;
    --brown: #46382c;
}

/* ---------- GLOBAL ---------- */

section {
    position: relative;
    padding: 90px 20px;
    overflow: hidden;
}

.container {
    width: min(900px, 100%);
    margin: auto;
    text-align: center;
}

.gold-line {
    width: 100px;
    height: 1px;
    background: var(--gold);
    margin: 25px auto;
}

.eyebrow {
    font-size: 11px;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: var(--gold);
}

.title {
    font-family: "Cormorant Garamond", serif;
    font-size: clamp(45px, 9vw, 82px);
    font-weight: 500;
    color: var(--brown);
}

.subtitle {
    font-family: "Cormorant Garamond", serif;
    font-size: 25px;
    color: #756552;
}

.button {
    display: inline-block;
    padding: 15px 32px;
    border: 1px solid var(--gold);
    color: white;
    background: var(--darkgold);
    text-decoration: none;
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: .3s;
}

.button:hover {
    background: #59471f;
    transform: translateY(-3px);
}

/* ---------- ORNAMENT ---------- */

.ornament {
    color: var(--gold);
    font-size: 25px;
    letter-spacing: 8px;
}

/* ---------- HERO ---------- */

.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    background:
        radial-gradient(
            circle at center,
            rgba(255,255,255,.95),
            rgba(246,240,231,.85)
        );
}

.hero::before,
.hero::after {
    content: "";
    position: absolute;
    width: 260px;
    height: 260px;
    border: 1px solid rgba(168,137,82,.35);
    border-radius: 50%;
}

.hero::before {
    top: -120px;
    left: -120px;
}

.hero::after {
    bottom: -120px;
    right: -120px;
}

.hero-content {
    max-width: 850px;
    animation: fadeUp 1.5s ease;
}

.bismillah {
    font-size: 34px;
    color: var(--darkgold);
    margin-bottom: 35px;
    direction: rtl;
}

.invite {
    font-family: "Cormorant Garamond", serif;
    font-size: 24px;
    color: #786b5b;
    margin-top: 20px;
}

.names {
    font-family: "Cormorant Garamond", serif;
    font-size: clamp(58px, 12vw, 105px);
    line-height: .9;
    font-weight: 500;
    color: var(--brown);
    margin: 28px 0;
}

.names span {
    display: block;
    font-family: "Playfair Display", serif;
    font-size: 34px;
    color: var(--gold);
    margin: 20px 0;
}

.hero-date {
    font-size: 13px;
    letter-spacing: 4px;
    color: #645647;
    margin-top: 25px;
}

.hero-button {
    margin-top: 40px;
}

/* ---------- INTRO ---------- */

.intro {
    background: var(--ivory);
}

.intro-text {
    max-width: 700px;
    margin: auto;
    font-family: "Cormorant Garamond", serif;
    font-size: 25px;
    line-height: 1.7;
    color: #625548;
}

/* ---------- DETAILS ---------- */

.details {
    background: #f1e7d9;
}

.detail-grid {
    max-width: 760px;
    margin: 45px auto 0;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.card {
    background: rgba(255,255,255,.65);
    padding: 35px 20px;
    border: 1px solid rgba(168,137,82,.3);
}

.card-icon {
    font-size: 25px;
    margin-bottom: 15px;
}

.card h3 {
    font-family: "Cormorant Garamond", serif;
    font-size: 27px;
    font-weight: 500;
    color: var(--brown);
}

.card p {
    margin-top: 7px;
    font-size: 13px;
    color: #746658;
}

/* ---------- COUNTDOWN ---------- */

.countdown {
    background: var(--brown);
    color: white;
}

.countdown .eyebrow {
    color: #d5b878;
}

.countdown .title {
    color: #fffaf2;
}

.countdown-grid {
    max-width: 650px;
    margin: 45px auto 0;

    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 12px;
}

.count {
    padding: 22px 5px;
    border-top: 1px solid rgba(213,184,120,.5);
    border-bottom: 1px solid rgba(213,184,120,.5);
}

.count-number {
    display: block;
    font-family: "Cormorant Garamond", serif;
    font-size: 42px;
    color: #d8bc7d;
}

.count-label {
    font-size: 9px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #eee1cc;
}

/* ---------- VENUE ---------- */

.venue {
    background: var(--ivory);
}

.venue-card {
    max-width: 650px;
    margin: 40px auto 0;
    padding: 50px 25px;

    border: 1px solid rgba(168,137,82,.4);

    background:
        linear-gradient(
            rgba(255,255,255,.8),
            rgba(255,255,255,.8)
        );
}

.venue-name {
    font-family: "Cormorant Garamond", serif;
    font-size: 35px;
    color: var(--brown);
}

.venue-location {
    margin-top: 10px;
    color: #756658;
}

.map-button {
    margin-top: 30px;
}

/* ---------- FAMILY ---------- */

.family {
    background: #f1e7d9;
}

.family-grid {
    max-width: 650px;
    margin: 40px auto 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
}

.family-card {
    padding: 30px 15px;
}

.family-card h3 {
    font-family: "Cormorant Garamond", serif;
    font-size: 30px;
    color: var(--brown);
}

.family-card p {
    margin-top: 10px;
    line-height: 1.8;
    font-size: 13px;
    color: #746658;
}

/* ---------- DUA ---------- */

.dua {
    background: var(--ivory);
}

.arabic {
    font-size: 30px;
    color: var(--darkgold);
    direction: rtl;
    line-height: 2;
}

.dua-text {
    max-width: 650px;
    margin: 25px auto;

    font-family: "Cormorant Garamond", serif;
    font-size: 23px;
    line-height: 1.8;
    color: #645548;
}

/* ---------- FOOTER ---------- */

footer {
    background: #30271f;
    color: white;
    padding: 60px 20px;
    text-align: center;
}

.footer-names {
    font-family: "Cormorant Garamond", serif;
    font-size: 45px;
}

footer p {
    margin-top: 10px;
    font-size: 11px;
    letter-spacing: 2px;
    color: #cbbd9e;
}

/* ---------- ANIMATION ---------- */

@keyframes fadeUp {

    from {
        opacity: 0;
        transform: translateY(25px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }

}

/* ---------- MOBILE ---------- */

@media(max-width:650px) {

    section {
        padding: 70px 18px;
    }

    .names {
        font-size: 62px;
    }

    .names span {
        font-size: 28px;
    }

    .detail-grid,
    .family-grid {
        grid-template-columns: 1fr;
    }

    .countdown-grid {
        grid-template-columns: repeat(2,1fr);
    }

    .intro-text {
        font-size: 22px;
    }

}

</style>
</head>

<body>

<!-- ================= HERO ================= -->

<section class="hero">

<div class="hero-content">

<div class="bismillah">
بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
</div>

<div class="eyebrow">
Nikah Invitation
</div>

<div class="gold-line"></div>

<p class="invite">
Together with the blessings of our families
</p>

<div class="names">
Fayaz
<span>♥</span>
Alfina
</div>

<div class="ornament">
✦ ❖ ✦
</div>

<p class="hero-date">
SUNDAY · 13 JUNE 2027 · 11:30 AM
</p>

<a href="#invitation" class="button hero-button">
Open Invitation
</a>

</div>

</section>


<!-- ================= INVITATION ================= -->

<section class="intro" id="invitation">

<div class="container">

<div class="eyebrow">
With love and gratitude
</div>

<h2 class="title">
Our Nikah
</h2>

<div class="gold-line"></div>

<p class="intro-text">
With the grace and blessings of Allah,
we joyfully invite you to be part of
the beginning of our beautiful journey
together.
</p>

<div class="ornament" style="margin-top:35px;">
✦ ❖ ✦
</div>

</div>

</section>


<!-- ================= DETAILS ================= -->

<section class="details">

<div class="container">

<div class="eyebrow">
Save the Date
</div>

<h2 class="title">
The Celebration
</h2>

<div class="gold-line"></div>

<div class="detail-grid">

<div class="card">

<div class="card-icon">◈</div>

<h3>
Sunday
</h3>

<p>
13 June 2027
</p>

</div>


<div class="card">

<div class="card-icon">◷</div>

<h3>
Nikah
</h3>

<p>
11:30 AM
</p>

</div>


<div class="card">

<div class="card-icon">♢</div>

<h3>
Bride
</h3>

<p>
Alfina Salim
</p>

</div>


<div class="card">

<div class="card-icon">♢</div>

<h3>
Groom
</h3>

<p>
Fayaz Sirajudeen
</p>

</div>

</div>

</div>

</section>


<!-- ================= COUNTDOWN ================= -->

<section class="countdown">

<div class="container">

<div class="eyebrow">
The countdown begins
</div>

<h2 class="title">
Until Our Nikah
</h2>

<div class="gold-line"></div>

<div class="countdown-grid">

<div class="count">
<span class="count-number" id="days">0</span>
<span class="count-label">Days</span>
</div>

<div class="count">
<span class="count-number" id="hours">0</span>
<span class="count-label">Hours</span>
</div>

<div class="count">
<span class="count-number" id="minutes">0</span>
<span class="count-label">Minutes</span>
</div>

<div class="count">
<span class="count-number" id="seconds">0</span>
<span class="count-label">Seconds</span>
</div>

</div>

</div>

</section>


<!-- ================= VENUE ================= -->

<section class="venue">

<div class="container">

<div class="eyebrow">
Join us
</div>

<h2 class="title">
The Venue
</h2>

<div class="gold-line"></div>

<div class="venue-card">

<div class="venue-name">
Rajiv Gandhi Auditorium
</div>

<div class="venue-location">
Edathala · Aluva · Kerala
</div>

<a
href="https://maps.app.goo.gl/ra2fGxRcK1VBk8Zk7"
target="_blank"
class="button map-button"
>
Open Google Maps
</a>

</div>

</div>

</section>


<!-- ================= FAMILY ================= -->

<section class="family">

<div class="container">

<div class="eyebrow">
With the blessings of
</div>

<h2 class="title">
Our Families
</h2>

<div class="gold-line"></div>

<div class="family-grid">

<div class="family-card">

<h3>
Groom's Family
</h3>

<p>
PK Sirajudeen<br>
& Family
</p>

</div>

<div class="family-card">

<h3>
Bride's Family
</h3>

<p>
Salim<br>
& Family
</p>

</div>

</div>

</div>

</section>


<!-- ================= DUA ================= -->

<section class="dua">

<div class="container">

<div class="eyebrow">
A Prayer For Us
</div>

<h2 class="title">
Duas & Blessings
</h2>

<div class="gold-line"></div>

<div class="arabic">
وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
</div>

<p class="dua-text">
May Allah bless our marriage with love,
mercy, peace and happiness, and guide us
through every chapter of our life together.
</p>

<div class="ornament">
✦ ❖ ✦
</div>

<p style="margin-top:25px;">
Please remember us in your duas.
</p>

</div>

</section>


<!-- ================= FOOTER ================= -->

<footer>

<div class="footer-names">
Fayaz ♥ Alfina
</div>

<p>
13 JUNE 2027 · OUR NIKAH
</p>

<p>
With love, gratitude & duas
</p>

</footer>


<script>

/* COUNTDOWN */

const weddingDate =
new Date("June 13, 2027 11:30:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if(distance <= 0) {

        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("minutes").innerHTML = "0";
        document.getElementById("seconds").innerHTML = "0";

        return;
    }

    const days =
    Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours =
    Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds =
    Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

updateCountdown();

setInterval(updateCountdown, 1000);

</script>

</body>
</html>