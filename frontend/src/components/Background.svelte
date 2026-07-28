<div class="background">
	<div class="orb blue"></div>
	<div class="orb purple"></div>
</div>

<style>
.background {
	position: fixed;
	inset: 0;
	overflow: hidden;
	background: #09090b;
	pointer-events: none;
	z-index: -1;
}


/* Shared orb style */
.orb {
	position: absolute;
	width: 650px;
	height: 650px;
	border-radius: 50%;

	/* No filter blur - WebKitGTK hates this */
	background-repeat: no-repeat;

	/* Only animate transforms */
	transform: translate3d(0,0,0);
}


/* Blue glow */
.blue {
	top: -280px;
	left: -280px;

	background:
		radial-gradient(
			circle,
			rgba(37,99,235,0.45) 0%,
			rgba(37,99,235,0.25) 30%,
			transparent 70%
		);

	animation: blueMove 14s ease-in-out infinite alternate;
}


/* Purple glow */
.purple {
	right: -280px;
	bottom: -280px;

	background:
		radial-gradient(
			circle,
			rgba(147,51,234,0.45) 0%,
			rgba(147,51,234,0.25) 30%,
			transparent 70%
		);

	animation: purpleMove 16s ease-in-out infinite alternate;
	animation-delay: 2s;
}


/* Only transform changes */
@keyframes blueMove {
	from {
		transform: translate3d(0,0,0);
	}

	to {
		transform: translate3d(80px,40px,0);
	}
}


@keyframes purpleMove {
	from {
		transform: translate3d(0,0,0);
	}

	to {
		transform: translate3d(-80px,-40px,0);
	}
}


/* Reduce animation on low power devices */
@media (prefers-reduced-motion: reduce) {
	.orb {
		animation: none;
	}
}
</style>