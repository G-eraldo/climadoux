<script setup>
// Rendu générique « studio » par famille d'appareil : sans marque ni logo, jamais présenté comme photo du produit.
const props = defineProps({
  kind: { type: String, required: true }, // chauffage | humidificateur | purificateur
  tint: { type: String, default: '#f3efe8' },
  color: { type: String, default: '#c8553d' }
})
const uid = `pa-${props.kind}-${useId()}`.replace(/[^a-zA-Z0-9-]/g, '')
</script>

<template>
  <svg viewBox="0 0 400 300" role="img" :aria-label="`Illustration générique : ${kind}`" class="block h-full w-full">
    <defs>
      <radialGradient :id="`${uid}-bg`" cx="50%" cy="30%" r="80%">
        <stop offset="0" stop-color="#ffffff" />
        <stop offset="1" :stop-color="tint" />
      </radialGradient>
      <linearGradient :id="`${uid}-body`" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#d9d6d1" />
        <stop offset=".28" stop-color="#ffffff" />
        <stop offset=".7" stop-color="#f1eee9" />
        <stop offset="1" stop-color="#c9c5bf" />
      </linearGradient>
      <linearGradient :id="`${uid}-acc`" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" :stop-color="color" stop-opacity=".9" />
        <stop offset="1" :stop-color="color" />
      </linearGradient>
      <filter :id="`${uid}-blur`" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="10" /></filter>
    </defs>
    <rect width="400" height="300" :fill="`url(#${uid}-bg)`" />
    <ellipse cx="200" cy="262" rx="96" ry="12" fill="#1d1d1f" opacity=".14" :filter="`url(#${uid}-blur)`" />

    <!-- Radiateur à bain d'huile : ailettes verticales -->
    <g v-if="kind === 'chauffage'">
      <rect v-for="i in 7" :key="i" :x="112 + (i - 1) * 25" y="78" width="21" height="170" rx="10" :fill="`url(#${uid}-body)`" stroke="#cfcac3" stroke-width="1" />
      <rect x="108" y="96" width="184" height="6" rx="3" fill="#d6d1ca" />
      <rect x="108" y="228" width="184" height="6" rx="3" fill="#d6d1ca" />
      <rect x="248" y="58" width="44" height="22" rx="7" fill="#2b2b2e" />
      <circle cx="262" cy="69" r="5" :fill="color" />
      <circle cx="279" cy="69" r="3" fill="#8b8b90" />
      <rect x="118" y="248" width="8" height="14" rx="3" fill="#8b8b90" />
      <rect x="274" y="248" width="8" height="14" rx="3" fill="#8b8b90" />
      <path d="M150 50c-6-10 6-14 0-24M200 46c-6-10 6-14 0-24M250 50c-6-10 6-14 0-24" :stroke="color" stroke-opacity=".35" stroke-width="3" fill="none" stroke-linecap="round" />
    </g>

    <!-- Humidificateur : réservoir et brume -->
    <g v-else-if="kind === 'humidificateur'">
      <path d="M150 250 L160 110 Q200 92 240 110 L250 250 Z" :fill="`url(#${uid}-body)`" stroke="#cfcac3" />
      <path d="M163 160 L237 160 L244 236 L156 236 Z" :fill="color" opacity=".16" />
      <path d="M163 160 Q200 168 237 160" :stroke="color" stroke-opacity=".45" stroke-width="2" fill="none" />
      <rect x="182" y="96" width="36" height="12" rx="6" fill="#2b2b2e" />
      <circle cx="200" cy="222" r="5" :fill="color" />
      <g :stroke="color" stroke-opacity=".28" stroke-width="10" fill="none" stroke-linecap="round" :filter="`url(#${uid}-blur)`">
        <path d="M200 92c-10-18 14-26 2-46" />
        <path d="M206 88c14-12 6-32 22-40" />
      </g>
      <path d="M200 92c-8-16 12-22 2-40M206 88c12-10 5-28 19-35" stroke="#ffffff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".9" />
    </g>

    <!-- Purificateur : colonne et grille -->
    <g v-else-if="kind === 'purificateur'">
      <rect x="148" y="62" width="104" height="188" rx="30" :fill="`url(#${uid}-body)`" stroke="#cfcac3" />
      <g fill="#bdb8b1">
        <template v-for="row in 9" :key="row">
          <circle v-for="col in 6" :key="col" :cx="166 + (col - 1) * 13.6" :cy="118 + (row - 1) * 13" r="2.6" />
        </template>
      </g>
      <rect x="164" y="74" width="72" height="28" rx="14" fill="#2b2b2e" />
      <circle cx="184" cy="88" r="5" :fill="color" />
      <rect x="196" y="85" width="28" height="6" rx="3" fill="#6c6c71" />
      <path d="M160 52q40-22 80 0" :stroke="color" stroke-opacity=".35" stroke-width="3" fill="none" stroke-linecap="round" />
      <path d="M172 40q28-14 56 0" :stroke="color" stroke-opacity=".22" stroke-width="3" fill="none" stroke-linecap="round" />
    </g>
  </svg>
</template>
