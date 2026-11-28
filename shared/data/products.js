// Catalogue Le Climat Idéal. ASIN contrôlés un par un sur amazon.fr le 27 novembre 2026 (titre = modèle exact, offre en stock).
// Caractéristiques : fiche Amazon.fr (points clés et titre) sauf mention contraire ; les valeurs incohérentes
// des tableaux Amazon ne sont pas reprises. Donnée absente = non publiée. Aucun prix, aucune note.
// Fiches documentaires : aucun de ces appareils n'a été testé par l'éditeur.
const checkedAt = '2026-11-27'
const amazon = asin => ({ sourceUrl: `https://www.amazon.fr/dp/${asin}`, sourceLabel: 'fiche produit Amazon.fr' })

const raw = [
  // ——— Chauffages d'appoint ———
  {
    slug: 'rowenta-intense-comfort-aqua', category: 'chauffage', brand: 'Rowenta', model: 'Intense Comfort Aqua SO9350F0', name: 'Rowenta Intense Comfort Aqua', asin: 'B0FGXXCJHM',
    type: 'Soufflant céramique',
    bestFor: 'Pour chauffer vite une pièce d’appoint ou une salle de bain le matin, avec un mode éco à 1 000 W.',
    keySpecs: [['Puissance', '1 000 / 2 000 W'], ['Surface annoncée', '35 m²'], ['Bruit annoncé', '29 dB(A)'], ['Poids', '2 kg']],
    table: { type: 'Soufflant céramique', power: '2 000 W', surface: '35 m²', thermostat: 'Oui' },
    specs: [['Technologie', 'Soufflant céramique'], ['Puissance', '1 000 W (Éco) / 2 000 W (Turbo)'], ['Surface annoncée', '35 m²'], ['Thermostat', 'Oui'], ['Niveau sonore annoncé', '29 dB(A), selon Rowenta'], ['Poids', '2 kg'], ['Sécurité', 'Protection contre la surchauffe'], ['Réparabilité', 'Engagement Rowenta 15 ans, garantie 2 ans']],
    strengths: ['Chaleur immédiate, idéale pour un usage court', 'Deux puissances dont un palier à 1 000 W', 'Léger et facile à déplacer'],
    limits: ['Un soufflant chauffe l’air, pas les murs : la chaleur retombe vite à l’arrêt', 'Le chiffre de 29 dB(A) correspond vraisemblablement au réglage le plus bas', 'Aucune mention d’un dispositif antichute sur la fiche'],
    verdict: [{ p: 'Un soufflant compact pensé pour les besoins ponctuels : réchauffer une salle de bain avant la douche, un bureau pendant deux heures. Pour chauffer une pièce toute la soirée, un bain d’huile ou un radiateur à inertie restitue une chaleur plus stable. Voir [quel chauffage d’appoint choisir](/guides/quel-chauffage-d-appoint-choisir).' }]
  },
  {
    slug: 'rowenta-mini-excel-eco-safe', category: 'chauffage', brand: 'Rowenta', model: 'Mini Excel Eco Safe SO9266F0', name: 'Rowenta Mini Excel Eco Safe', asin: 'B09B7NYDJ7',
    type: 'Soufflant céramique compact',
    bestFor: 'Pour un petit bureau ou une chambre d’amis : très compact, avec thermostat électronique et hors-gel.',
    keySpecs: [['Puissance', '1 000 / 2 000 W'], ['Thermostat', 'Électronique'], ['Bruit annoncé', '50 dB(A) en silencieux'], ['Poids', '1,7 kg']],
    table: { type: 'Soufflant céramique', power: '2 000 W', surface: null, thermostat: 'Électronique' },
    specs: [['Technologie', 'Soufflant céramique'], ['Puissance', '1 000 W / 2 000 W'], ['Surface annoncée', 'Non indiquée'], ['Thermostat', 'Électronique'], ['Niveau sonore annoncé', '50 dB(A) en position silencieuse'], ['Poids', '1,7 kg'], ['Sécurité', 'Double sécurité surchauffe avec arrêt automatique'], ['Autres', 'Fonction hors-gel, filtre lavable, poignée']],
    strengths: ['Format très compact et léger', 'Thermostat électronique plus précis qu’une molette mécanique', 'Double sécurité contre la surchauffe'],
    limits: ['Plus bruyant que la plupart des soufflants récents, même en silencieux', 'Surface conseillée non communiquée', 'L’« économie jusqu’à 50 % » est une allégation du fabricant, sans protocole publié'],
    verdict: [{ p: 'Un dépanneur compact et bien sécurisé. Son niveau sonore le réserve plutôt aux pièces où l’on ne dort pas.' }]
  },
  {
    slug: 'rowenta-vectissimo', category: 'chauffage', brand: 'Rowenta', model: 'Vectissimo CO3035F1', name: 'Rowenta Vectissimo Turbo', asin: 'B008P6YDN6',
    type: 'Convecteur avec turbo',
    bestFor: 'Pour une pièce jusqu’à 25 m² à chauffer sur une longue durée, avec une ventilation turbo pour la montée en température.',
    keySpecs: [['Puissance', '1 200 / 2 400 W'], ['Surface annoncée', '25 m²'], ['Thermostat', 'Mécanique'], ['Poids', '4,3 kg']],
    table: { type: 'Convecteur', power: '2 400 W', surface: '25 m²', thermostat: 'Mécanique' },
    specs: [['Technologie', 'Convecteur mobile avec turbo ventilé'], ['Puissance', '1 200 W / 2 400 W'], ['Surface annoncée', '25 m²'], ['Thermostat', 'Mécanique, position antigel'], ['Programmation', 'Non'], ['Poids', '4,3 kg'], ['Garantie', '1 an selon la fiche']],
    strengths: ['Puissance élevée pour monter vite en température', 'Fonctionne silencieusement sans le turbo', 'Simple : pas d’électronique à configurer'],
    limits: ['Thermostat mécanique : régulation moins fine', 'Sécurité surchauffe et antichute non mentionnées sur la fiche', '2 400 W : vérifier que le circuit électrique le supporte avec les autres appareils'],
    verdict: [{ p: 'Un convecteur classique et robuste. Il convient à une pièce d’appoint chauffée plusieurs heures, sans recherche de régulation fine.' }]
  },
  {
    slug: 'delonghi-radia-s-easytronic', category: 'chauffage', brand: 'De’Longhi', model: 'RadiaS Easytronic TRRS1225', name: 'De’Longhi RadiaS Easytronic', asin: 'B0DKC85RYT',
    type: 'Bain d’huile',
    bestFor: 'Pour un séjour ou une grande chambre : chaleur douce et durable, thermostat électronique, 12 éléments.',
    keySpecs: [['Puissance', '2 500 W'], ['Volume annoncé', '75 m³ (≈ 30 m²)'], ['Thermostat', 'Électronique'], ['Poids', '15,7 kg']],
    table: { type: 'Bain d’huile', power: '2 500 W', surface: '≈ 30 m²', thermostat: 'Électronique' },
    specs: [['Technologie', 'Radiateur à bain d’huile, 12 éléments'], ['Puissance', '2 500 W'], ['Volume annoncé', '75 m³ (≈ 30 m² sous 2,5 m de plafond)'], ['Thermostat', 'Électronique Easytronic, 12 températures, 3 zones'], ['Sécurité', 'Thermostat de sécurité, fonction antigel'], ['Poids', '15,7 kg'], ['Mobilité', 'Roulettes pliantes intégrées']],
    strengths: ['Chaleur douce qui continue après l’arrêt grâce à l’huile', 'Silencieux : aucun ventilateur', 'Régulation électronique précise'],
    limits: ['Lourd (15,7 kg) et lent à chauffer', 'Paliers de puissance non indiqués sur la fiche', 'Puissance élevée à surveiller sur la facture si utilisé longtemps'],
    verdict: [{ p: 'Le choix « confort » de la sélection pour une grande pièce occupée toute la soirée. Il met du temps à chauffer mais la chaleur est stable et silencieuse.' }]
  },
  {
    slug: 'taurus-nepal-1500', category: 'chauffage', brand: 'Taurus', model: 'Nepal 1500 (TT1503)', name: 'Taurus Nepal 1500', asin: 'B0FV93VKPY',
    type: 'Radiateur à inertie',
    bestFor: 'Pour une petite pièce chauffée régulièrement : programmation hebdomadaire, détection de fenêtre ouverte, fixation murale possible.',
    keySpecs: [['Puissance', '1 500 W'], ['Surface annoncée', '14 à 16 m²'], ['Programmation', 'Hebdomadaire'], ['Poids', '4,85 kg']],
    table: { type: 'Inertie', power: '1 500 W', surface: '14–16 m²', thermostat: 'Électronique, programmable' },
    specs: [['Technologie', 'Inertie, corps acier et éléments aluminium'], ['Puissance', '1 500 W, modulation Triac'], ['Surface annoncée', '14 à 16 m²'], ['Thermostat', 'Électronique 5 à 30 °C, écran LCD'], ['Programmation', 'Minuterie 24 h et programmation hebdomadaire (3 programmes)'], ['Modes', 'Confort, Éco, Hors-gel 7 °C, Nuit'], ['Sécurité', 'Surchauffe, anti-basculement, verrouillage enfant, détection de fenêtre ouverte'], ['Protection', 'IP24'], ['Poids', '4,85 kg'], ['Installation', 'Murale ou sur pieds (support et roulettes fournis)']],
    strengths: ['Programmation complète, rare à ce format', 'Sécurités nombreuses dont le verrouillage enfant', 'Utilisable au mur comme sur roulettes'],
    limits: ['Inertie modérée : ni cœur céramique ni fonte', 'Réservé aux petites pièces', 'Les « 30 % d’économie » sont une allégation du fabricant'],
    verdict: [{ p: 'Le plus « intelligent » de la sélection sans appli : il se programme comme un radiateur fixe. Bon candidat pour une petite chambre ou un bureau chauffé tous les jours.' }]
  },
  {
    slug: 'klarstein-heatpal', category: 'chauffage', brand: 'Klarstein', model: 'HeatPal ACO11-90400', name: 'Klarstein HeatPal (marbre)', asin: 'B07JG98GLC',
    type: 'Panneau infrarouge',
    bestFor: 'Pour une chaleur rayonnante silencieuse dans une pièce de vie, avec une plaque en marbre qui stocke la chaleur.',
    keySpecs: [['Puissance', '1 300 W'], ['Surface annoncée', '30 m²'], ['Technologie', 'Rayonnant + marbre'], ['Poids', '11,3 kg']],
    table: { type: 'Infrarouge', power: '1 300 W', surface: '30 m²', thermostat: 'Oui' },
    specs: [['Technologie', 'Panneau rayonnant infrarouge, accumulation dans une plaque de marbre'], ['Puissance', '1 300 W'], ['Surface annoncée', '30 m²'], ['Thermostat', 'Oui'], ['Sécurité', 'Coupure anti-basculement, protection surchauffe, antigel sous 3 °C'], ['Poids', '11,3 kg'], ['Câble', '1,8 m']],
    strengths: ['Silencieux, chaleur rayonnante ressentie rapidement à proximité', 'Coupure anti-basculement', 'Restitue un peu de chaleur après l’arrêt'],
    limits: ['La surface de 30 m² paraît optimiste pour 1 300 W dans une pièce mal isolée', 'Lourd pour un appareil mobile', 'Les « plus de 90 % de chaleur utilisée » sont une allégation du vendeur'],
    verdict: [{ p: 'Une alternative élégante au bain d’huile, plus légère en consommation. Mieux vaut le placer près de la zone occupée : le rayonnement chauffe d’abord ce qu’il « voit ».' }]
  },

  // ——— Humidificateurs ———
  {
    slug: 'levoit-classic-160', category: 'humidificateur', brand: 'Levoit', model: 'Classic 160 (LUH-A251-WEU)', name: 'Levoit Classic 160', asin: 'B0G2LPXFKF',
    type: 'Ultrasons, brume froide',
    bestFor: 'Pour une chambre jusqu’à 20 m² : simple, silencieux, sans appli ni réglage compliqué.',
    keySpecs: [['Réservoir', '2,5 L'], ['Surface annoncée', '20 m²'], ['Bruit annoncé', '23 dB'], ['Autonomie', 'Jusqu’à 25 h']],
    table: { tech: 'Ultrasons', tank: '2,5 L', surface: '20 m²', noise: '23 dB', hygro: 'Non indiqué' },
    specs: [['Technologie', 'Ultrasons, brume froide orientable à 360°'], ['Réservoir', '2,5 L, remplissage par le haut'], ['Surface annoncée', '20 m²'], ['Autonomie', 'Jusqu’à 25 h'], ['Niveau sonore annoncé', '23 dB'], ['Puissance', '17 W'], ['Hygrostat', 'Non mentionné sur la fiche'], ['Sécurité', 'Arrêt automatique réservoir vide']],
    strengths: ['Très simple à utiliser', 'Remplissage par le haut, plus pratique à nettoyer', 'Faible consommation électrique'],
    limits: ['Pas de capteur d’humidité mentionné : risque de trop humidifier sans hygromètre', 'Ultrasons : poussière blanche possible avec une eau calcaire', 'Débit non communiqué'],
    verdict: [{ p: 'Un bon premier humidificateur de chambre. Associez-le à un hygromètre pour rester sous 50–60 % : voir [le bon taux d’humidité](/guides/taux-humidite-ideal-maison).' }]
  },
  {
    slug: 'levoit-dual-200s', category: 'humidificateur', brand: 'Levoit', model: 'Dual 200S (LUH-D302S-WEU)', name: 'Levoit Dual 200S', asin: 'B0DQP1G2B2',
    type: 'Ultrasons, brume froide',
    bestFor: 'Pour une chambre ou un bureau : capteur d’humidité, mode automatique et pilotage depuis le téléphone.',
    keySpecs: [['Réservoir', '3 L'], ['Surface annoncée', '10 à 27 m²'], ['Bruit annoncé', '19 dB'], ['Mode auto', 'Oui (capteur)']],
    table: { tech: 'Ultrasons', tank: '3 L', surface: '10–27 m²', noise: '19 dB', hygro: 'Oui' },
    specs: [['Technologie', 'Ultrasons, brume froide'], ['Réservoir', '3 L'], ['Surface annoncée', '10 à 27 m²'], ['Autonomie', '12 à 25 h'], ['Niveau sonore annoncé', '19 dB'], ['Puissance', '24 W'], ['Hygrostat', 'Capteur intégré, mode automatique'], ['Connectivité', 'Appli VeSync, Alexa'], ['Consommables', 'Éponges-filtres (2 fournies)']],
    strengths: ['Mode automatique qui régule selon l’humidité mesurée', 'Très discret selon la fiche', 'Pilotage à distance'],
    limits: ['Éponges-filtres à remplacer', 'Ultrasons : préférer une eau peu calcaire', 'Débit non communiqué'],
    verdict: [{ p: 'Le meilleur compromis de la sélection pour une chambre si vous voulez un appareil qui s’arrête seul au bon taux d’humidité.' }]
  },
  {
    slug: 'philips-humidificateur-2000-hu2510', category: 'humidificateur', brand: 'Philips', model: 'HU2510/10 (Série 2000)', name: 'Philips Humidificateur 2000', asin: 'B09ZBJ4HWL',
    type: 'Évaporation',
    bestFor: 'Pour éviter la poussière blanche des ultrasons : évaporation naturelle, 190 ml/h, pièces jusqu’à 31 m².',
    keySpecs: [['Débit', '190 ml/h'], ['Surface annoncée', '31 m²'], ['Réservoir', '2 L'], ['Bruit annoncé', '32 dB(A)']],
    table: { tech: 'Évaporation', tank: '2 L', surface: '31 m²', noise: '32 dB(A)', hygro: 'Non indiqué' },
    specs: [['Technologie', 'Évaporation (NanoCloud)'], ['Débit', '190 ml/h'], ['Réservoir', '2 L'], ['Surface annoncée', '31 m²'], ['Autonomie', '10,5 h'], ['Niveau sonore annoncé', '32 dB(A), mesure du fabricant'], ['Puissance', '11 W'], ['Sécurité', 'Arrêt automatique réservoir vide'], ['Consommables', 'Mèche d’humidification à racheter']],
    strengths: ['Pas de poussière blanche, même avec l’eau du robinet', 'Débit publié, ce qui permet de dimensionner', 'Très faible consommation'],
    limits: ['Mèche à remplacer régulièrement', 'Réservoir de 2 L : remplissage fréquent', 'Pas de capteur d’humidité mentionné'],
    verdict: [{ p: 'L’évaporation est la technologie la plus « tranquille » au quotidien : pas de brume visible, pas de dépôt blanc. Un bon choix si votre eau est calcaire.' }]
  },
  {
    slug: 'stadler-form-oskar', category: 'humidificateur', brand: 'Stadler Form', model: 'Oskar O-020', name: 'Stadler Form Oskar', asin: 'B002WGLQS0',
    type: 'Évaporation',
    bestFor: 'Pour un séjour jusqu’à 50 m² : évaporation avec hygrostat intégré et mode nuit.',
    keySpecs: [['Surface annoncée', '50 m²'], ['Réservoir', '3,5 L'], ['Hygrostat', 'Intégré'], ['Puissance', '18 W']],
    table: { tech: 'Évaporation', tank: '3,5 L', surface: '50 m²', noise: null, hygro: 'Oui' },
    specs: [['Technologie', 'Évaporation'], ['Réservoir', '3,5 L, remplissage possible en marche'], ['Surface annoncée', '50 m²'], ['Hygrostat', 'Intégré'], ['Puissance', '18 W'], ['Confort', 'Mode nuit, LED à intensité réglable'], ['Entretien', 'Rappel de changement de filtre ; 2 filtres et Hygiene Tabs fournis'], ['Sécurité', 'Arrêt automatique réservoir vide']],
    strengths: ['Hygrostat intégré : il vise un taux plutôt que de tourner en continu', 'Grande surface annoncée pour un évaporatif', 'Pas de poussière blanche'],
    limits: ['Débit et niveau sonore non communiqués', 'Filtres à racheter', 'Design ancien, modèle commercialisé depuis longtemps'],
    verdict: [{ p: 'Un évaporatif éprouvé pour les grandes pièces. Faute de débit publié, il est difficile de le comparer précisément aux autres.' }]
  },
  {
    slug: 'levoit-oasismist-lv450s', category: 'humidificateur', brand: 'Levoit', model: 'LV450S OasisMist (LUH-O451S-WEU)', name: 'Levoit OasisMist LV450S', asin: 'B0FZK91FS5',
    type: 'Ultrasons, brume froide ou chaude',
    bestFor: 'Pour un séjour jusqu’à 40 m² : grand réservoir de 4,5 L, débit élevé et choix brume froide ou chaude.',
    keySpecs: [['Débit', '550 ml/h'], ['Surface annoncée', '40 m²'], ['Réservoir', '4,5 L'], ['Bruit annoncé', '26 dB']],
    table: { tech: 'Ultrasons (froid/chaud)', tank: '4,5 L', surface: '40 m²', noise: '26 dB', hygro: 'Non précisé' },
    specs: [['Technologie', 'Ultrasons, brume froide ou chaude'], ['Débit', '550 ml/h'], ['Réservoir', '4,5 L'], ['Surface annoncée', '40 m²'], ['Autonomie', 'Jusqu’à 45 h (brume froide, débit minimal)'], ['Niveau sonore annoncé', '26 dB'], ['Puissance', '280 W (vraisemblablement en brume chaude)'], ['Connectivité', 'Appli VeSync'], ['Consommables', 'Cartouche de déminéralisation']],
    strengths: ['Débit le plus élevé de la sélection', 'Grand réservoir, peu de remplissages', 'Brume chaude possible'],
    limits: ['Consommation bien plus élevée en brume chaude', 'Cartouche à prévoir', 'Présence d’un capteur d’humidité non confirmée sur la fiche'],
    verdict: [{ p: 'Pour les grandes pièces très sèches. Les huiles essentielles vont uniquement dans le tampon prévu, jamais dans le réservoir.' }]
  },
  {
    slug: 'boneco-s250', category: 'humidificateur', brand: 'Boneco', model: 'S250 (réf. 44901)', name: 'Boneco S250', asin: 'B077SVZCQT',
    type: 'Vapeur chaude',
    bestFor: 'Pour une humidification hygiénique : l’eau est portée à ébullition, sans filtre ni poussière blanche.',
    keySpecs: [['Débit', '300 g/h'], ['Surface', '≈ 40 m²'], ['Réservoir', '3 L'], ['Puissance', '145 / 285 W']],
    table: { tech: 'Vapeur', tank: '3 L', surface: '≈ 40 m²', noise: '< 42 dB', hygro: 'Oui' },
    specs: [['Technologie', 'Vaporisateur (eau portée à ébullition)'], ['Débit', '300 g/h (manuel Boneco)'], ['Réservoir', '3 L'], ['Surface', '≈ 40 m² (430 ft² sur la fiche)'], ['Niveau sonore', 'Moins de 42 dB (manuel Boneco)'], ['Puissance', '145 W / 285 W (manuel Boneco)'], ['Hygrostat', 'Contrôle d’humidité réglable, arrêt automatique'], ['Filtre', 'Aucun'], ['Entretien', 'Détartrage régulier']],
    strengths: ['Vapeur sans bactéries ni poussière blanche', 'Aucun consommable filtrant', 'Régulation de l’humidité'],
    limits: ['Consommation électrique nettement plus élevée qu’un ultrasons', 'Plus bruyant (ébullition)', 'Vapeur chaude : à éloigner des enfants'],
    verdict: [{ p: 'Le choix « hygiène » : l’ébullition règle la question de l’eau stagnante. En contrepartie, il consomme bien plus et il faut le détartrer.' }],
    sourceUrl: 'https://manualslib.es/manual/704471/Boneco-S250.html?page=4', sourceLabel: 'manuel Boneco S250 et fiche Amazon.fr'
  },

  // ——— Purificateurs d'air ———
  {
    slug: 'levoit-core-300s', category: 'purificateur', brand: 'Levoit', model: 'Core 300S', name: 'Levoit Core 300S', asin: 'B0FDL66FYH',
    type: 'HEPA connecté',
    bestFor: 'Pour une chambre : capteur PM2.5, mode automatique et pilotage depuis le téléphone.',
    keySpecs: [['CADR', '240 m³/h'], ['Capteur', 'PM2.5 laser'], ['Bruit mini', '22 à 25 dB'], ['Conso. mini', '7 W']],
    table: { cadr: '240 m³/h', surface: '≈ 19 m² *', filter: 'HEPA', noise: '22–25 dB' },
    specs: [['Filtration', 'HEPA (classe non précisée sur la fiche)'], ['CADR particules', '240 m³/h'], ['Surface annoncée', '50 m² (renouvellement lent, voir guide)'], ['Capteur', 'PM2.5 laser, mode automatique'], ['Niveau sonore', '22 dB (titre) / 25 dB (tableau)'], ['Consommation', '7 W au minimum'], ['Connectivité', 'Appli VeSync, Alexa, Google Assistant'], ['Filtre de rechange', 'Core 300-RF']],
    strengths: ['Mode automatique piloté par un vrai capteur de particules', 'Très discret au ralenti', 'Écosystème d’appli complet'],
    limits: ['La surface de 50 m² suppose un brassage lent : comptez plutôt une chambre', 'Classe HEPA non précisée', 'Deux valeurs de bruit différentes sur la fiche'],
    verdict: [{ p: 'Un excellent format de chambre. Pour dimensionner sans se fier aux surfaces commerciales, voir [la règle du CADR](/guides/quel-purificateur-d-air-choisir).' }]
  },
  {
    slug: 'philips-purificateur-900-ac0950', category: 'purificateur', brand: 'Philips', model: 'Série 900 AC0950/10', name: 'Philips Purificateur 900', asin: 'B0DJPC37LR',
    type: 'HEPA + charbon actif',
    bestFor: 'Pour une chambre ou un bureau : très silencieux au ralenti, filtre HEPA avec couche de charbon actif.',
    keySpecs: [['CADR', '250 m³/h'], ['Bruit mini', '20,5 dB'], ['Filtre', 'HEPA + charbon'], ['Conso. max', '23 W']],
    table: { cadr: '250 m³/h', surface: '≈ 20 m² *', filter: 'HEPA + charbon', noise: '20,5 dB' },
    specs: [['Filtration', 'HEPA NanoProtect 3 couches + charbon actif'], ['CADR particules', '250 m³/h'], ['Surface annoncée', '65 m²'], ['Niveau sonore mini', '20,5 dB'], ['Consommation maximale', '23 W (21 W dans le tableau)'], ['Connectivité', 'Appli Air+'], ['Filtre de rechange', 'FY0910, environ 12 mois'], ['Certification', 'ECARF']],
    strengths: ['Le plus silencieux de la sélection au ralenti', 'Charbon actif pour les odeurs', 'Indicateur de remplacement du filtre'],
    limits: ['Type de capteur non précisé', 'Surface annoncée très optimiste au regard du CADR', 'Filtre à racheter chaque année environ'],
    verdict: [{ p: 'Un purificateur de chambre discret et bien filtré. Le CADR, pas la surface annoncée, indique sa vraie capacité.' }]
  },
  {
    slug: 'coway-airmega-100', category: 'purificateur', brand: 'Coway', model: 'Airmega 100', name: 'Coway Airmega 100', asin: 'B0CRDT4F7F',
    type: 'HEPA sans appli',
    bestFor: 'Pour qui ne veut ni appli ni compte : mode auto, anneau lumineux de qualité d’air, très silencieux.',
    keySpecs: [['CADR', '244 m³/h'], ['Bruit mini', '19,8 dB'], ['Filtre', 'HEPA + charbon'], ['Appli', 'Aucune']],
    table: { cadr: '244 m³/h', surface: '≈ 19 m² *', filter: 'HEPA + charbon', noise: '19,8 dB' },
    specs: [['Filtration', 'Préfiltre + HEPA + filtre désodorisant au charbon actif'], ['CADR particules', '244 m³/h'], ['Surface annoncée', '51 m² (en 30 min) ; 63 m² dans le tableau'], ['Capteur', 'Qualité de l’air (type non précisé), mode auto'], ['Niveau sonore mini', '19,8 dB'], ['Consommation', '25 W'], ['Connectivité', 'Aucune (fonctionne sans Wi-Fi ni compte)'], ['Filtre', 'Environ 12 mois'], ['Certifications', 'ECARF, Quiet Mark']],
    strengths: ['Aucune appli ni compte à créer', 'Très discret au ralenti', 'Indicateur lumineux lisible'],
    limits: ['Pas de pilotage à distance', 'Deux surfaces contradictoires sur la fiche', 'Type de capteur non précisé'],
    verdict: [{ p: 'La simplicité avant tout : on le branche, il tourne en automatique. Idéal pour une chambre ou une personne peu à l’aise avec les applis.' }]
  },
  {
    slug: 'xiaomi-smart-air-purifier-4-lite', category: 'purificateur', brand: 'Xiaomi', model: 'Smart Air Purifier 4 Lite', name: 'Xiaomi Smart Air Purifier 4 Lite', asin: 'B09QX6JN98',
    type: 'HEPA H13 + charbon',
    bestFor: 'Pour une pièce de vie moyenne : CADR de 360 m³/h, filtre H13 3-en-1 et capteurs PM2.5, température, humidité.',
    keySpecs: [['CADR', '360 m³/h'], ['Filtre', 'HEPA H13 3-en-1'], ['Bruit', '33,4 à 61 dB'], ['Conso. max', '33 W']],
    table: { cadr: '360 m³/h', surface: '≈ 29 m² *', filter: 'H13 + charbon', noise: '33,4 dB' },
    specs: [['Filtration', '3-en-1 : préfiltre + HEPA H13 + charbon actif'], ['CADR particules', '360 m³/h'], ['CADR formaldéhyde', '120 m³/h'], ['Surface annoncée', '43 m²'], ['Capteurs', 'PM2.5 laser, température, humidité'], ['Niveau sonore', '33,4 dB (mini) à 61 dB (maxi)'], ['Consommation', '33 W'], ['Connectivité', 'Appli Xiaomi Home, Alexa, Google'], ['Filtre', '6 à 12 mois'], ['Certification', 'TÜV Rheinland Allergy Care']],
    strengths: ['Bon CADR pour une pièce de vie', 'Filtre H13 clairement indiqué', 'Capteurs complets'],
    limits: ['Plus bruyant au ralenti que les modèles de chambre', 'Filtre à remplacer assez souvent', 'Dépend de l’appli Xiaomi pour les réglages avancés'],
    verdict: [{ p: 'Un bon rapport CADR / encombrement pour un séjour moyen. Pour une chambre, sa veille à 33 dB peut gêner les dormeurs sensibles.' }]
  },
  {
    slug: 'winix-zero', category: 'purificateur', brand: 'Winix', model: 'Zero (AZBU330-HWE)', name: 'Winix Zero', asin: 'B07JDQNWLG',
    type: 'HEPA H13 + charbon',
    bestFor: 'Pour un grand séjour : CADR de 390 m³/h, filtration H13 avec préfiltre lavable, sans appli.',
    keySpecs: [['CADR', '390 m³/h'], ['Filtre', 'HEPA H13 + charbon'], ['Bruit mini', '27,4 dB'], ['Conso. max', '70 W']],
    table: { cadr: '390 m³/h', surface: '≈ 31 m² *', filter: 'H13 + charbon', noise: '27,4 dB' },
    specs: [['Filtration', 'Préfiltre lavable + charbon actif + HEPA H13'], ['CADR particules', '390 m³/h'], ['Surface annoncée', '99 m²'], ['Capteur', 'Qualité de l’air, mode auto'], ['Vitesses', '5 dont veille'], ['Niveau sonore mini', '27,4 dB'], ['Consommation maximale', '70 W'], ['Connectivité', 'Aucune (commande tactile)'], ['Option', 'Module PlasmaWave']],
    strengths: ['Gros débit pour les grandes pièces', 'Préfiltre lavable qui prolonge le filtre principal', 'Pas d’appli nécessaire'],
    limits: ['Encombrant et assez lourd', 'Consommation maximale élevée', 'La surface de 99 m² suppose un brassage très lent'],
    verdict: [{ p: 'Pour un séjour ouvert. Le module PlasmaWave est annoncé sans ozone nocif par Winix ; si vous préférez une filtration purement mécanique, vérifiez dans la notice comment le désactiver.' }]
  },
  {
    slug: 'xiaomi-smart-air-purifier-4-pro', category: 'purificateur', brand: 'Xiaomi', model: 'Smart Air Purifier 4 Pro (BHR5056EU)', name: 'Xiaomi Smart Air Purifier 4 Pro', asin: 'B09KB7T1VL',
    type: 'HEPA + charbon, haut débit',
    bestFor: 'Pour les grands volumes ou les épisodes de pollen : le CADR le plus élevé de la sélection, 500 m³/h.',
    keySpecs: [['CADR', '500 m³/h'], ['Capteurs', 'PM2.5 + PM10'], ['Bruit maxi', '64 dB'], ['Conso.', '50 W']],
    table: { cadr: '500 m³/h', surface: '≈ 40 m² *', filter: 'HEPA + charbon', noise: '—' },
    specs: [['Filtration', 'Préfiltre + filtre haute efficacité + charbon actif, ioniseur'], ['CADR particules', '500 m³/h'], ['Surface annoncée', '60 m² (104 m² dans les points clés)'], ['Capteurs', 'PM2.5 laser et PM10'], ['Niveau sonore maxi', '64 dB'], ['Consommation', '50 W'], ['Connectivité', 'Appli Xiaomi Home'], ['Certification', 'TÜV Allergy Care']],
    strengths: ['Débit le plus élevé de la sélection', 'Capteur PM10 en plus du PM2.5', 'Bonne réactivité en mode auto'],
    limits: ['Bruyant à pleine puissance', 'Classe H13 non précisée sur la fiche française', 'Niveau sonore minimal non publié officiellement'],
    verdict: [{ p: 'Le choix « grande pièce » : à pleine vitesse pendant un épisode de pollen, puis en auto. Placez-le loin des chambres si vous le faites tourner fort.' }]
  }
]

export const products = raw.map(p => ({ sourceUrl: amazon(p.asin).sourceUrl, sourceLabel: amazon(p.asin).sourceLabel, ...p, checkedAt }))

export const productBySlug = slug => products.find(p => p.slug === slug)
export const productsByCategory = key => products.filter(p => p.category === key)
