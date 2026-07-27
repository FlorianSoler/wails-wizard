<script lang="ts">
import { fly } from "svelte/transition";
import { wizard } from "../stores/wizard";
import { User, Lock, Info } from "lucide-svelte";

let username = "";
let password = "";

function continueNext() {

    wizard.update(state => ({
        ...state,
        username,
        password,
        step: 2
    }));

}

</script>


<div
class="page"
in:fly={{ x:40, duration:400 }}
>


<h1>
    Tell us about yourself
</h1>


<p class="subtitle">
    This information helps us configure your environment.
</p>



<div class="field">

<label>
    <User size={18}/>
    Username
</label>


<input
bind:value={username}
placeholder="Enter your name"
/>


<div class="hint">

<Info size={15}/>

Used to personalize your installation.

</div>


</div>



<div class="field">

<label>
    <Lock size={18}/>
    Session password
</label>


<input
type="password"
bind:value={password}
placeholder="Create a password"
/>


<div class="hint">

<Info size={15}/>

Used to protect your local session.

</div>


</div>



<button
disabled={!username || !password}
onclick={continueNext}
>

Continue →

</button>


</div>



<style>

.page {

color:white;

}


h1 {

font-size:30px;

margin-bottom:10px;

}


.subtitle {

color:#a1a1aa;

margin-bottom:35px;

}


.field {

margin-bottom:25px;

}


label {

display:flex;

align-items:center;

gap:8px;

margin-bottom:10px;

font-weight:600;

}


input {

width:100%;

box-sizing:border-box;

padding:14px 16px;

border-radius:14px;

border:

1px solid rgba(255,255,255,.15);


background:

rgba(0,0,0,.25);


color:white;

font-size:16px;

outline:none;

}


input:focus {

border-color:#3b82f6;

}



.hint {

display:flex;

align-items:center;

gap:6px;

margin-top:8px;

font-size:13px;

color:#a1a1aa;

}



button {

width:100%;

padding:15px;

margin-top:15px;

border-radius:15px;

border:none;

font-size:16px;

font-weight:600;

cursor:pointer;

background:white;

color:black;

transition:.2s;

}


button:hover:not(:disabled){

transform:
translateY(-2px);

}


button:disabled {

opacity:.35;

cursor:not-allowed;

}

</style>