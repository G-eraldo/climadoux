// Identité et structure du site. Les contenus vivent dans products.js et guides.js.
export const site = {
  name: 'Climadoux',
  domain: 'climadoux.fr',
  tagline: 'Le bon air, à la bonne température.',
  description: 'Guides d’achat et fiches claires pour choisir un humidificateur, un chauffage d’appoint ou un purificateur d’air adapté à votre pièce.',
  themeColor: '#faf7f2',
  publisher: {
    name: 'Gérald François',
    company: 'La Fabrique du Code — Gérald François, entrepreneur individuel',
    rcs: 'R.C.S. d’Amiens : 994 074 458',
    siret: '994 074 458 00010',
    address: '11 rue de la Gare, 80360 Guillemont, France',
    email: 'contact@lafabriqueducode.fr',
    phone: '07 67 26 53 66',
    phoneHref: '+33767265366'
  },
  host: {
    name: 'IONOS SARL',
    address: '7 place de la Gare, BP 70109, 57200 Sarreguemines Cedex, France',
    phone: '0805 54 21 80'
  }
}

// key = valeur de `category` dans les produits/guides ; slug = segment d'URL.
export const categories = [
  {
    key: 'chauffage',
    slug: 'chauffages-d-appoint',
    label: 'Chauffages d’appoint',
    singular: 'chauffage d’appoint',
    short: 'Chauffer',
    pillarGuide: 'quel-chauffage-d-appoint-choisir',
    color: '#c8553d',
    tint: '#fbe9e3',
    pitch: 'Une pièce froide, une salle de bain à réchauffer vite, un bureau d’hiver.'
  },
  {
    key: 'humidificateur',
    slug: 'humidificateurs',
    label: 'Humidificateurs',
    singular: 'humidificateur',
    short: 'Humidifier',
    pillarGuide: 'quel-humidificateur-choisir',
    color: '#2f6fb3',
    tint: '#e4eef9',
    pitch: 'Air sec du chauffage, nez irrité, bois qui craque : viser 30 à 50 % d’humidité.'
  },
  {
    key: 'purificateur',
    slug: 'purificateurs-d-air',
    label: 'Purificateurs d’air',
    singular: 'purificateur d’air',
    short: 'Purifier',
    pillarGuide: 'quel-purificateur-d-air-choisir',
    color: '#3f7f5f',
    tint: '#e3f1e9',
    pitch: 'Pollens, poussière, poils d’animaux, fumées : filtrer l’air de la pièce.'
  }
]

export const categoryBySlug = slug => categories.find(c => c.slug === slug)
export const categoryByKey = key => categories.find(c => c.key === key)

export const legalLinks = [
  { to: '/a-propos', label: 'À propos' },
  { to: '/methode', label: 'Notre méthode' },
  { to: '/affiliation', label: 'Affiliation' },
  { to: '/contact', label: 'Contact' },
  { to: '/mentions-legales', label: 'Mentions légales' },
  { to: '/confidentialite', label: 'Confidentialité' }
]
