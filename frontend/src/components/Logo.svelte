<script>
    import { Sparkles } from "lucide-svelte";
</script>

<div class="logo">
    <Sparkles size={42} strokeWidth={1.5}/>
</div>


<style>
.logo {
    width:100px;
    height:100px;

    display:flex;
    align-items:center;
    justify-content:center;

    margin:auto;

    border-radius:30px;

    background:
        linear-gradient(
            135deg,
            #3b82f6,
            #9333ea
        );

    color:white;

    animation:
        float 4s ease-in-out infinite;

    box-shadow:
        0 20px 80px rgba(59,130,246,.35);
}


@keyframes float {

    0%,100% {
        transform:translateY(0);
    }

    50% {
        transform:translateY(-12px);
    }

}

</style>