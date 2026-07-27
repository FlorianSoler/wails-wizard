<script>
import { fly } from "svelte/transition";
</script>


<div class="page" in:fly={{x:40}}>

<h1>
Restart Required
</h1>

<p>
Everything is ready.
A restart is required before continuing.
</p>


<button>
Restart Now
</button>

</div>


<style>

.page {
text-align:center;
color:white;
}

button {

margin-top:30px;

padding:15px 40px;

border-radius:15px;

border:none;

background:white;

cursor:pointer;

}

</style>