<script>
import { fly, fade } from "svelte/transition";
import { Check } from "lucide-svelte";
import { wizard } from "../stores/wizard";

import Logo from "../components/Logo.svelte";
import PrimaryButton from "../components/PrimaryButton.svelte";


let features = [
    "Fast setup",
    "Secure",
    "Automatic"
];




function start(){

    wizard.update(state => ({
        ...state,
        step:1
    }));

}

</script>


<div
class="page"
in:fly={{y:40,duration:600}}
>


<Logo />


<h1>
    Welcome to MyApp
</h1>


<p class="description">

Configure everything you need
in just a few simple steps.

</p>



<div class="features">

{#each features as feature,i}

<div
class="pill"
style={`animation-delay:${i*150}ms`}
in:fade
>

<Check size={16}/>

{feature}

</div>

{/each}

</div>



<PrimaryButton
text="Get Started →"
onclick={start}
/>


</div>



<style>

.page {

text-align:center;

}


h1 {

margin-top:35px;

font-size:36px;

letter-spacing:-1px;

}


.description {

margin-top:15px;

color:#a1a1aa;

font-size:17px;

line-height:1.6;

}



.features {

display:flex;

justify-content:center;

gap:10px;

margin:35px 0;

flex-wrap:wrap;

}



.pill {

display:flex;

align-items:center;

gap:7px;

padding:
8px 14px;


border-radius:999px;


background:
rgba(255,255,255,.08);


border:
1px solid rgba(255,255,255,.12);


color:#d4d4d8;


animation:
slide .5s both;

}


@keyframes slide {

from {

opacity:0;

transform:
translateY(20px);

}


to {

opacity:1;

transform:
translateY(0);

}

}



</style>