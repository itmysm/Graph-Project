<template>
  <div class="content w-full min-h-screen bg-[#12181e] flex flex-col items-center justify-center">
    <svg class="w-20 h-20">
      <g id="loader-3">
        <rect id="bg" fill="none" x="0" y="0" width="80" height="80"></rect>
        <g
          class="linechart-loader"
          transform="translate(13.000000, 25.000000)"
          stroke="#CBCDD2"
          stroke-width="2"
        >
          <polyline
            class="linechart"
            points="0.747315209 24.6458138 7.44456625 29.6458138 14.1418173 10.6458138 20.8390683 15.6458138 27.5363194 17.6458138 34.2335704 25.6458138 38.9308215 2.6458138 46.6280725 15.6458138 50.8543411 10.4098828 54.3253236 0.645813797"
          ></polyline>
        </g>
      </g>
    </svg>
  </div>
</template>

<style lang="scss" scoped>

@keyframes dash {
  0% {
    stroke-dasharray: 0 300;
    stroke-dashoffset: -150;
    opacity: 0.1;
  }

  50% {
    stroke-dasharray: 300 300;
    stroke-dashoffset: 0;
    opacity: 0.8;
  }

  100% {
    stroke-dasharray: 0 300;
    stroke-dashoffset: 0;
    opacity: 0.1;
  }
}

@keyframes dash-fill {
  0% {
    stroke-dasharray: 0 300;
    stroke-dashoffset: -150;
    opacity: 0.1;
  }

  25% {
    fill: transparent;
  }

  50% {
    stroke-dasharray: 300 300;
    stroke-dashoffset: 0;
    fill: #1c252e;
    opacity: 0.8;
  }

  75% {
    stroke-dasharray: 300 300;
    stroke-dashoffset: 0;
    fill: #1c252e;
    opacity: 0.8;
  }

  100% {
    stroke-dasharray: 0 300;
    stroke-dashoffset: 0;
    fill: #1c252e;
    opacity: 0.1;
  }
}

.linechart-loader {
  .linechart {
    transform: scale(1.2);
    stroke-dasharray: 42 300;
    stroke-dashoffset: -150;
    animation: dash 3s linear infinite reverse;
    animation-delay: 0.2s;
    fill: transparent;
  }
}
</style>
