<script>
export let text = "Continue";
export let onclick;
</script>


<button onclick={onclick}>

<span>
{text}
</span>

</button>


<style>

button {

    width:100%;

    padding:16px;

    border-radius:16px;

    border:none;

    cursor:pointer;

    font-size:16px;

    font-weight:600;

    background:white;

    color:black;

    transition:
        transform .2s,
        box-shadow .2s;

}


button:hover {

    transform:
        translateY(-3px);

    box-shadow:
        0 15px 40px rgba(255,255,255,.15);

}


button:active {

    transform:
        scale(.97);

}

</style>