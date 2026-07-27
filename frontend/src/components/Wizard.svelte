<script lang="ts">

import { wizard } from "../stores/wizard";
import InstallStep from "../steps/InstallStep.svelte";
import Welcome from "../steps/Welcome.svelte";
import UserInfo from "../steps/UserInfo.svelte";
import Restart from "../steps/Restart.svelte";

$: step = $wizard.step;

</script>


<div class="card">

{#if step === 0}

<Welcome />

{:else if step === 1}

<UserInfo />

{:else if step === 2}

<InstallStep />

{:else if step === 3}

<Restart />

{/if}

</div>



<style>

.card {

width:520px;

padding:40px;

border-radius:28px;


background:
rgba(255,255,255,.08);


backdrop-filter:
blur(25px);


border:
1px solid rgba(255,255,255,.12);


color:white;


box-shadow:
0 30px 80px rgba(0,0,0,.4);

}

</style>