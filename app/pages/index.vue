<script setup>
import { site, categories } from '#shared/data/site.js'
import { guides } from '#shared/data/guides.js'
import { productsByCategory } from '#shared/data/products.js'

const featuredGuides = guides.filter(g => g.featured).slice(0, 4)
const counts = Object.fromEntries(categories.map(c => [c.key, productsByCategory(c.key).length]))

usePageSeo({
  title: site.name,
  description: site.description,
  path: '/',
  jsonLd: [
    { '@type': 'WebSite', name: site.name, url: `https://${site.domain}/`, inLanguage: 'fr-FR' },
    { '@type': 'Organization', name: site.name, url: `https://${site.domain}/`, logo: `https://${site.domain}/logo.png`, founder: { '@type': 'Person', name: site.publisher.name } }
  ]
})
</script>

<template>
  <div>
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_15%_0%,#fbe9e3,transparent_70%),radial-gradient(55%_70%_at_95%_10%,#e4eef9,transparent_70%)]" />
      <div class="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 md:pb-24 md:pt-24">
        <p class="text-sm font-semibold uppercase tracking-[0.12em] text-accent-ink">Confort de la maison</p>
        <h1 class="mt-3 max-w-4xl text-[clamp(2.6rem,7vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
          Le bon air,<br><span class="bg-gradient-to-r from-accent via-[#b0603f] to-cool bg-clip-text text-transparent">à la bonne température.</span>
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75 sm:text-xl">
          Humidificateur, chauffage d’appoint, purificateur : on part de votre pièce et de votre besoin, puis on vous montre les appareils qui y répondent vraiment. Fiches vérifiées, limites comprises.
        </p>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-5 sm:px-8" aria-label="Rubriques">
      <div class="grid gap-5 md:grid-cols-3">
        <NuxtLink
          v-for="c in categories" :key="c.slug" :to="`/${c.slug}`"
          class="press group flex flex-col overflow-hidden rounded-[2rem] bg-surface shadow-card transition-shadow duration-200 hover:shadow-lift"
        >
          <div class="aspect-[4/3]"><ProductArt :kind="c.key" :tint="c.tint" :color="c.color" /></div>
          <div class="flex flex-1 flex-col p-6">
            <p class="text-xs font-semibold uppercase tracking-[0.1em]" :style="{ color: c.color }">{{ c.short }}</p>
            <h2 class="mt-1 text-2xl font-semibold tracking-[-0.025em]">{{ c.label }}</h2>
            <p class="mt-2 text-[0.95rem] leading-relaxed text-muted">{{ c.pitch }}</p>
            <p class="mt-auto pt-5 text-sm font-medium">
              <span v-if="counts[c.key]">{{ counts[c.key] }} appareils comparés</span>
              <span class="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
            </p>
          </div>
        </NuxtLink>
      </div>
    </section>

    <section v-if="featuredGuides.length" class="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
      <div class="flex items-end justify-between gap-4">
        <h2 class="text-[clamp(1.7rem,3.4vw,2.5rem)] font-semibold tracking-[-0.03em]">Par où commencer</h2>
        <NuxtLink to="/guides" class="text-sm font-medium text-accent-ink hover:underline">Tous les guides</NuxtLink>
      </div>
      <div class="mt-8 grid gap-5 sm:grid-cols-2">
        <NuxtLink
          v-for="g in featuredGuides" :key="g.slug" :to="`/guides/${g.slug}`"
          class="press group rounded-[var(--radius-card)] bg-surface p-6 shadow-card transition-shadow duration-200 hover:shadow-lift"
        >
          <p class="text-xs font-semibold uppercase tracking-[0.08em] text-muted">{{ g.kicker }}</p>
          <h3 class="mt-2 text-xl font-semibold leading-snug tracking-[-0.02em]">{{ g.title }}</h3>
          <p class="mt-2 text-[0.95rem] leading-relaxed text-muted">{{ g.description }}</p>
        </NuxtLink>
      </div>
    </section>

    <section class="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
      <div class="grid gap-8 rounded-[2rem] bg-ink px-7 py-10 text-white md:grid-cols-3 md:px-12 md:py-14">
        <div class="md:col-span-3">
          <h2 class="text-[clamp(1.6rem,3vw,2.2rem)] font-semibold tracking-[-0.03em]">Comment on travaille</h2>
        </div>
        <div>
          <p class="font-semibold">Les chiffres du fabricant, sourcés</p>
          <p class="mt-2 text-sm leading-relaxed text-white/70">Puissance, débit, CADR, bruit : chaque valeur renvoie à la fiche officielle et à sa date de vérification.</p>
        </div>
        <div>
          <p class="font-semibold">Pas de faux tests</p>
          <p class="mt-2 text-sm leading-relaxed text-white/70">Quand un appareil n’a pas été utilisé, la fiche le dit. Pas de note inventée, pas de « testé en laboratoire ».</p>
        </div>
        <div>
          <p class="font-semibold">Affiliation affichée</p>
          <p class="mt-2 text-sm leading-relaxed text-white/70">Les liens Amazon sont signalés. Ils financent le site sans changer votre prix. <NuxtLink to="/methode" class="underline underline-offset-2">Notre méthode</NuxtLink></p>
        </div>
      </div>
    </section>
  </div>
</template>
