<script lang="ts">
import { onMount } from "svelte";
import { fly } from "svelte/transition";
import { Check, LoaderCircle } from "lucide-svelte";
import { wizard } from "../stores/wizard";


let progress = 0;

let tasks = [
    "Checking system",
    "Creating workspace",
    "Installing components",
    "Configuring services",
    "Finalizing setup"
];


let currentTask = 0;


onMount(() => {

    const timer = setInterval(() => {

        if (progress < 100) {

            progress += Math.floor(Math.random() * 8) + 2;


            if(progress > 100)
                progress = 100;


            if(progress % 20 < 5 && currentTask < tasks.length-1)
            {
                currentTask++;
            }

        }
        else {

            clearInterval(timer);


            setTimeout(()=>{

                wizard.update(state => ({
                    ...state,
                    step:3
                }));

            },1000);

        }


    },500);


    return () => clearInterval(timer);

});


</script>


<div
class="page"
in:fly={{x:40}}
>


<h1>
Preparing your environment
</h1>


<p>
Please wait while we configure everything.
</p>



<div class="tasks">

{#each tasks as task,index}


<div
class:active={index===currentTask}
class:done={index<currentTask}
class="task"
>

{#if index < currentTask}

<Check size={18}/>

{:else if index===currentTask}

<LoaderCircle
size={18}
class="spin"
/>

{:else}

<div class="empty"></div>

{/if}


<span>
{task}
</span>


</div>


{/each}

</div>




<div class="progress">


<div
class="bar"
style={`width:${progress}%`}
></div>


</div>


<div class="percent">

{progress}%

</div>


</div>



<style>

.page {

text-align:center;

}


h1 {

font-size:30px;

}


p {

color:#a1a1aa;

margin-bottom:35px;

}


.tasks {

text-align:left;

margin-bottom:35px;

}


.task {

display:flex;

align-items:center;

gap:12px;

padding:14px;

border-radius:12px;

color:#71717a;

transition:.3s;

}


.task.active {

background:
rgba(255,255,255,.08);

color:white;

}


.task.done {

color:#22c55e;

}


.empty {

width:18px;

height:18px;

border-radius:50%;

border:2px solid #3f3f46;

}


.progress {

height:12px;

background:#27272a;

border-radius:99px;

overflow:hidden;

}


.bar {

height:100%;

background:
linear-gradient(
90deg,
#3b82f6,
#9333ea
);

transition:
width .4s ease;

}


.percent {

margin-top:15px;

font-size:20px;

font-weight:bold;

}


.spin {

animation:
spin 1s linear infinite;

}


@keyframes spin {

from {
transform:rotate(0deg);
}

to {
transform:rotate(360deg);
}

}

</style>