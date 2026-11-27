<script setup>
import { site } from '#shared/data/site.js'
</script>
<template>
  <SimplePage title="À propos" path="/a-propos" :lead="`Qui écrit ${site.name}, et pourquoi.`" :description="`Qui publie ${site.name}, ce que le site fait et ce qu’il ne fait pas.`">
    <p>{{ site.name }} est édité par {{ site.publisher.name }}, développeur web indépendant. Le site aide à choisir un appareil de confort pour la maison sans se perdre dans les fiches commerciales : on part de la pièce, du besoin et des contraintes (bruit, consommation, entretien), puis on regarde quels modèles y répondent.</p>
    <h2>Ce que vous trouverez ici</h2>
    <ul>
      <li>Des guides qui répondent d’abord à la question posée, puis expliquent le détail.</li>
      <li>Des fiches produits construites à partir des caractéristiques officielles, avec leur source et leur date de vérification.</li>
      <li>Des limites écrites noir sur blanc : un appareil n’est jamais parfait pour tout le monde.</li>
    </ul>
    <h2>Ce que vous ne trouverez pas</h2>
    <ul>
      <li>De faux tests ou des notes inventées. Les fiches indiquent quand un appareil n’a pas été utilisé.</li>
      <li>Des prix : ils changent trop vite. Ils sont à vérifier sur la page du marchand.</li>
      <li>Des conseils médicaux. Pour l’asthme, les allergies ou un nourrisson, l’avis d’un professionnel de santé prime.</li>
    </ul>
    <p>Une remarque, une erreur repérée ? <NuxtLink to="/contact">Écrivez-nous</NuxtLink>.</p>
  </SimplePage>
</template>
