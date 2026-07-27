<div class="background">

<div class="orb blue"></div>

<div class="orb purple"></div>

<div class="grid"></div>

</div>


<style>

.background {

position:fixed;

inset:0;

background:#09090b;

overflow:hidden;

}


.orb {

position:absolute;

width:600px;

height:600px;

border-radius:50%;

filter:blur(140px);

opacity:.35;

animation:
move 12s infinite alternate;

}


.blue {

background:#2563eb;

top:-200px;

left:-200px;

}


.purple {

background:#9333ea;

bottom:-200px;

right:-200px;

animation-delay:3s;

}



@keyframes move {

from {

transform:
translate(0);

}

to {

transform:
translate(100px,50px);

}

}

</style>