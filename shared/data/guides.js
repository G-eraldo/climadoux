// Guides et contenus des pages rubriques. Faits généraux sourcés ; aucun test revendiqué.
const SRC = {
  aeration: { label: 'Ministère de la Transition écologique — Qualité de l’air intérieur (aérer au moins 10 minutes par jour)', url: 'https://www.ecologie.gouv.fr/politiques-publiques/qualite-lair-interieur' },
  epaMold: { label: 'US EPA — A Brief Guide to Mold, Moisture and Your Home (humidité idéale 30 à 50 %, sous 60 %)', url: 'https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home' },
  epaHumid: { label: 'US EPA — Use and Care of Home Humidifiers (eau, poussière blanche, nettoyage)', url: 'https://www.epa.gov/indoor-air-quality-iaq/use-and-care-home-humidifiers' },
  epaCleaners: { label: 'US EPA — Guide to Air Cleaners in the Home (CADR, HEPA, charbon actif)', url: 'https://www.epa.gov/indoor-air-quality-iaq/guide-air-cleaners-home' },
  aham: { label: 'AHAM Verifide — programme de certification du CADR', url: 'https://ahamverifide.org/' }
}

export const guides = [
  // ——— Chauffage ———
  {
    slug: 'quel-chauffage-d-appoint-choisir', category: 'chauffage', featured: true,
    kicker: 'Guide d’achat', short: 'Quel chauffage d’appoint ?',
    title: 'Quel chauffage d’appoint électrique choisir ?',
    metaTitle: 'Quel chauffage d’appoint électrique choisir ?',
    description: 'Soufflant, bain d’huile, convecteur, inertie ou infrarouge : quel type pour quelle pièce et quel usage, et les sécurités à vérifier.',
    publishedAt: '2026-11-27', updatedAt: '2026-11-27',
    answer: 'Pour chauffer vite et peu de temps (salle de bain, bureau le matin), prenez un soufflant céramique. Pour chauffer une pièce plusieurs heures, prenez un bain d’huile ou un radiateur à inertie : plus lents, mais plus stables et silencieux. Dans tous les cas, exigez un thermostat et une coupure de sécurité.',
    products: ['rowenta-intense-comfort-aqua', 'delonghi-radia-s-easytronic', 'taurus-nepal-1500', 'klarstein-heatpal'],
    sources: [],
    body: [
      { h2: 'Quels sont les types de chauffage d’appoint ?' },
      { table: { head: ['Type', 'Comment il chauffe', 'Idéal pour', 'À savoir'], rows: [
        ['Soufflant céramique', 'Un ventilateur pousse l’air sur une résistance', 'Chauffer vite une petite pièce, peu de temps', 'Bruit de ventilation ; la chaleur retombe dès l’arrêt'],
        ['Convecteur', 'L’air chauffé monte et circule naturellement', 'Une pièce d’appoint, usage régulier', 'Air chaud en hauteur, sol qui reste frais'],
        ['Bain d’huile', 'L’huile chauffe puis restitue lentement la chaleur', 'Séjour, chambre, usage de plusieurs heures', 'Lourd, lent à démarrer, silencieux'],
        ['Inertie', 'Un corps (aluminium, céramique, fonte) stocke la chaleur', 'Pièce chauffée tous les jours, souvent fixé au mur', 'Plus il est lourd, plus l’inertie est forte'],
        ['Infrarouge / rayonnant', 'Chauffe les surfaces et les personnes en face', 'Zone occupée précise (bureau, canapé)', 'Moins efficace pour réchauffer tout le volume']
      ] } },
      { h2: 'Comment choisir selon l’usage ?' },
      { p: 'La question qui tranche : **combien de temps l’appareil va-t-il tourner ?** Pour un quart d’heure dans la salle de bain, la réactivité d’un soufflant compte plus que tout. Pour une soirée entière, un appareil qui stocke la chaleur évite les cycles marche/arrêt et le souffle d’air.' },
      { p: 'La puissance se lit ensuite : les fabricants annoncent une surface, mais elle suppose une pièce correctement isolée. Dans une pièce ancienne, sous les toits ou très vitrée, visez plus large que la surface réelle.' },
      { h2: 'Quelles sécurités exiger ?' },
      { ul: [
        '**Protection contre la surchauffe** avec coupure automatique.',
        '**Coupure en cas de basculement** pour tout appareil posé au sol, surtout avec enfants ou animaux.',
        '**Thermostat** : sans lui, l’appareil chauffe à pleine puissance en continu.',
        'Branchement **direct sur une prise murale**, sans multiprise : un appareil de 2 000 W et plus sollicite fortement le circuit.',
        'Garder les distances indiquées dans la notice, ne jamais couvrir l’appareil ni y faire sécher du linge.'
      ] },
      { callout: 'Les chauffages d’appoint à combustion (pétrole, gaz) ne sont pas traités ici. Ils dégagent des gaz dans la pièce et imposent une aération et des précautions propres.', title: 'Électrique uniquement' },
      { h2: 'Peut-on l’utiliser dans une salle de bain ?' },
      { p: 'Dans une salle de bain, la prise doit se trouver loin de la baignoire et de la douche, et l’appareil doit être prévu pour un local humide (indice de protection contre les projections d’eau, indiqué « IPX4 » ou plus, et mention explicite dans la notice). En cas de doute sur l’installation, faites vérifier par un électricien.' },
      { h2: 'Lequel consomme le moins ?' },
      { p: 'Tous les chauffages électriques transforment l’électricité en chaleur avec le même rendement : un appareil de 1 000 W qui tourne une heure consomme 1 kWh, quel que soit son type. Ce qui change la facture, c’est **la durée de fonctionnement** et la qualité de la régulation. Le calcul détaillé est dans [combien consomme un chauffage d’appoint](/guides/consommation-chauffage-d-appoint).' }
    ]
  },
  {
    slug: 'consommation-chauffage-d-appoint', category: 'chauffage', featured: true,
    kicker: 'Budget', short: 'Consommation',
    title: 'Combien consomme un chauffage d’appoint ?',
    description: 'La formule simple pour estimer la consommation d’un chauffage d’appoint électrique, et les leviers qui la font vraiment baisser.',
    publishedAt: '2026-11-27', updatedAt: '2026-11-27',
    answer: 'Consommation (kWh) = puissance (kW) × heures de chauffe effective. Un appareil de 2 000 W qui chauffe une heure à pleine puissance consomme 2 kWh. Multipliez par le prix du kWh indiqué sur votre facture pour obtenir le coût.',
    products: ['taurus-nepal-1500', 'rowenta-mini-excel-eco-safe'],
    body: [
      { h2: 'Comment calculer la consommation ?' },
      { p: '**kWh = puissance en kW × nombre d’heures où la résistance chauffe.** 2 000 W = 2 kW. Avec un thermostat, l’appareil ne chauffe pas en continu : une fois la température atteinte, il alterne marche et arrêt. Le temps de chauffe réel est donc souvent inférieur au temps où l’appareil est allumé.' },
      { table: { head: ['Appareil', 'Durée à pleine puissance', 'Consommation maximale'], rows: [
        ['Soufflant 2 000 W', '30 min', '1 kWh'],
        ['Bain d’huile 2 500 W', '3 h', '7,5 kWh'],
        ['Inertie 1 500 W', '4 h', '6 kWh'],
        ['Infrarouge 1 300 W', '2 h', '2,6 kWh']
      ] } },
      { p: 'Ces chiffres sont des plafonds : avec un thermostat bien réglé, la consommation réelle est plus basse. Pour le coût, utilisez le prix du kWh de votre propre contrat, indiqué sur la facture : il varie selon l’offre et les heures (pleines/creuses).' },
      { h2: 'Comment faire baisser la facture ?' },
      { ul: [
        '**Le thermostat et la programmation** : chauffer seulement quand la pièce est occupée.',
        '**La bonne température** : chaque degré en moins compte ; 19 °C est le repère courant pour une pièce de vie.',
        '**Fermer la porte** de la pièce chauffée.',
        '**Choisir le bon type** : un soufflant laissé allumé toute la soirée chauffe moins confortablement qu’un appareil à inertie pour la même énergie.'
      ] },
      { callout: 'Aucun chauffage électrique ne produit plus de chaleur que l’électricité qu’il consomme. Les « économies » annoncées par les fabricants viennent de la régulation (thermostat, détection d’absence, programmation), pas d’un meilleur rendement.', title: 'Méfiance avec les « jusqu’à 50 % d’économie »' }
    ]
  },

  // ——— Humidificateurs ———
  {
    slug: 'quel-humidificateur-choisir', category: 'humidificateur', featured: true,
    kicker: 'Guide d’achat', short: 'Quel humidificateur ?',
    title: 'Quel humidificateur d’air choisir ?',
    description: 'Ultrasons, évaporation ou vapeur : les vraies différences, le débit à viser selon la pièce et les points d’entretien à anticiper.',
    publishedAt: '2026-11-27', updatedAt: '2026-11-27',
    answer: 'Pour une chambre, un humidificateur à ultrasons avec capteur d’humidité est simple et silencieux, à condition d’utiliser une eau peu calcaire. Si votre eau est dure, préférez l’évaporation (pas de poussière blanche). La vapeur chaude est la plus hygiénique mais consomme nettement plus.',
    products: ['levoit-dual-200s', 'philips-humidificateur-2000-hu2510', 'boneco-s250'],
    sources: [SRC.epaHumid, SRC.epaMold],
    body: [
      { h2: 'Avez-vous vraiment besoin d’humidifier ?' },
      { p: 'Commencez par mesurer : un hygromètre coûte peu et évite d’humidifier à l’aveugle. L’agence américaine de l’environnement (EPA) recommande de rester **sous 60 % d’humidité relative, idéalement entre 30 et 50 %**. En hiver, le chauffage fait souvent descendre l’air intérieur sous ces valeurs. Détails dans [le bon taux d’humidité](/guides/taux-humidite-ideal-maison).' },
      { h2: 'Ultrasons, évaporation ou vapeur : quelle différence ?' },
      { table: { head: ['Technologie', 'Principe', 'Points forts', 'Points faibles'], rows: [
        ['Ultrasons', 'Une membrane vibrante pulvérise l’eau en brume froide', 'Silencieux, faible consommation, peu cher', 'Avec une eau calcaire, dépôt de « poussière blanche » ; nettoyage régulier'],
        ['Évaporation', 'Un ventilateur souffle sur une mèche imbibée', 'Pas de poussière blanche, s’autorégule naturellement', 'Mèche/filtre à remplacer, léger souffle'],
        ['Vapeur chaude', 'L’eau est portée à ébullition', 'Vapeur sans micro-organismes ni minéraux', 'Consommation élevée, vapeur chaude, détartrage']
      ] } },
      { p: 'L’EPA rappelle que les humidificateurs à ultrasons dispersent les minéraux de l’eau du robinet dans l’air, d’où le dépôt blanc sur les meubles. Une eau à faible teneur en minéraux limite ce phénomène et l’entartrage.' },
      { h2: 'Quel débit et quel réservoir choisir ?' },
      { ul: [
        '**Le débit** (en ml/h) indique la quantité d’eau diffusée. C’est la donnée la plus utile pour comparer, quand le fabricant la publie.',
        '**Le réservoir** fixe l’autonomie : 2 à 3 L pour une nuit en chambre, 4 L et plus pour un séjour.',
        '**L’hygrostat** (capteur + arrêt automatique) évite de dépasser le bon taux. C’est le critère que nous jugeons le plus important.'
      ] },
      { h2: 'Quel entretien prévoir ?' },
      { p: 'L’eau stagnante favorise le développement de micro-organismes. L’EPA conseille de vider, sécher et remplir le réservoir chaque jour, et de nettoyer l’appareil tous les trois jours. Un réservoir à large ouverture se nettoie beaucoup plus facilement. Voir [entretenir un humidificateur](/guides/entretenir-humidificateur).' },
      { callout: 'Ne mettez jamais d’huiles essentielles dans le réservoir sauf si la notice le prévoit explicitement (certains modèles ont un tampon dédié). Pour un nourrisson ou une personne asthmatique, demandez conseil à un professionnel de santé.', title: 'Prudence' }
    ]
  },
  {
    slug: 'taux-humidite-ideal-maison', category: 'humidificateur', featured: true,
    kicker: 'Comprendre', short: 'Taux d’humidité idéal',
    title: 'Quel taux d’humidité dans une maison ?',
    description: 'Le taux d’humidité à viser en intérieur, comment le mesurer et que faire quand l’air est trop sec ou trop humide.',
    publishedAt: '2026-11-27', updatedAt: '2026-11-27',
    answer: 'Visez entre 30 et 50 % d’humidité relative, et restez sous 60 % : au-delà, moisissures et acariens se développent plus facilement (recommandation de l’EPA). Mesurez avec un hygromètre avant d’acheter un humidificateur ou un déshumidificateur.',
    products: ['levoit-dual-200s', 'stadler-form-oskar'],
    sources: [SRC.epaMold, SRC.aeration],
    body: [
      { h2: 'Quel taux d’humidité viser ?' },
      { table: { head: ['Humidité relative', 'Ce qui se passe', 'Que faire'], rows: [
        ['Moins de 30 %', 'Air sec : gorge et peau irritées, électricité statique, bois qui travaille', 'Humidifier, sans dépasser 50 %'],
        ['30 à 50 %', 'Zone recommandée par l’EPA', 'Rien, sinon aérer chaque jour'],
        ['50 à 60 %', 'Acceptable, à surveiller', 'Aérer, vérifier la ventilation'],
        ['Plus de 60 %', 'Condensation, moisissures, acariens favorisés', 'Ventiler, chercher la cause, déshumidifier si besoin']
      ] } },
      { h2: 'Comment mesurer l’humidité ?' },
      { p: 'Un hygromètre se place à hauteur d’homme, loin d’une fenêtre, d’un radiateur ou de la salle de bain. Relevez-le à différents moments : l’humidité varie avec la cuisine, les douches, le séchage du linge et le chauffage.' },
      { h2: 'Pourquoi l’air est-il si sec en hiver ?' },
      { p: 'L’air froid extérieur contient peu d’eau. Une fois réchauffé à l’intérieur, son humidité relative chute. C’est pourquoi l’air paraît souvent plus sec quand le chauffage tourne fort.' },
      { h2: 'Faut-il aérer même en hiver ?' },
      { p: 'Les pouvoirs publics recommandent d’ouvrir les fenêtres en grand **au moins 10 minutes par jour**, été comme hiver. Aérer n’assèche pas la maison durablement en hiver, mais renouvelle l’air et évacue l’humidité produite à l’intérieur.' }
    ]
  },
  {
    slug: 'entretenir-humidificateur', category: 'humidificateur',
    kicker: 'Entretien', short: 'Entretien',
    title: 'Entretenir un humidificateur : le bon rythme',
    description: 'Vider, rincer, détartrer : les gestes simples pour qu’un humidificateur reste hygiénique, et l’eau à utiliser.',
    publishedAt: '2026-11-27', updatedAt: '2026-11-27',
    answer: 'Chaque jour : videz, séchez et remplissez le réservoir. Tous les trois jours : nettoyez-le selon la notice. Utilisez une eau peu minéralisée pour limiter tartre et poussière blanche.',
    products: ['philips-humidificateur-2000-hu2510', 'boneco-s250'],
    sources: [SRC.epaHumid],
    body: [
      { h2: 'À quel rythme nettoyer un humidificateur ?' },
      { ul: [
        '**Tous les jours** : vider l’eau restante, sécher, remettre de l’eau propre. L’eau qui stagne favorise les micro-organismes.',
        '**Tous les trois jours** : nettoyer le réservoir et les parties en contact avec l’eau, avec le produit indiqué par le fabricant, puis rincer soigneusement.',
        '**Selon la notice** : remplacer mèche, filtre ou cartouche. Un filtre encrassé humidifie moins et peut devenir un nid à bactéries.',
        '**En fin de saison** : nettoyer, sécher complètement et ranger à vide.'
      ] },
      { h2: 'Quelle eau utiliser ?' },
      { p: 'L’EPA recommande une eau à faible teneur en minéraux (par exemple distillée) pour limiter l’entartrage et, sur les modèles à ultrasons, la poussière blanche. Les modèles à évaporation et à vapeur sont moins concernés par la poussière blanche, mais s’entartrent aussi.' },
      { callout: 'Les produits d’entretien et de détartrage doivent être ceux autorisés par la notice : certains matériaux ou membranes ne supportent pas tous les produits.', title: 'Suivez la notice' }
    ]
  },

  // ——— Purificateurs ———
  {
    slug: 'quel-purificateur-d-air-choisir', category: 'purificateur', featured: true,
    kicker: 'Guide d’achat', short: 'Quel purificateur ?',
    title: 'Quel purificateur d’air choisir ? La règle du CADR',
    metaTitle: 'Quel purificateur d’air choisir ? La règle du CADR',
    description: 'Oubliez la surface annoncée : le CADR dit ce qu’un purificateur filtre vraiment. Comment dimensionner, quel filtre, quel bruit.',
    publishedAt: '2026-11-27', updatedAt: '2026-11-27',
    answer: 'Choisissez d’après le CADR (débit d’air purifié, en m³/h), pas d’après la surface marketing. Repère : CADR ≥ surface × hauteur sous plafond × 5. Pour une chambre de 15 m² sous 2,5 m, visez environ 190 m³/h. Prenez un filtre HEPA, et du charbon actif si les odeurs vous gênent.',
    products: ['levoit-core-300s', 'philips-purificateur-900-ac0950', 'xiaomi-smart-air-purifier-4-lite', 'winix-zero'],
    sources: [SRC.epaCleaners, SRC.aham, SRC.aeration],
    body: [
      { h2: 'Qu’est-ce que le CADR ?' },
      { p: 'Le **CADR** (Clean Air Delivery Rate) mesure le volume d’air débarrassé des particules par heure. L’EPA le résume ainsi : plus le CADR est élevé, plus l’appareil filtre de particules et plus la pièce qu’il peut servir est grande. Les surfaces annoncées par les fabricants, elles, reposent sur des hypothèses très différentes d’une marque à l’autre.' },
      { h2: 'Quel CADR pour quelle pièce ?' },
      { p: 'Calculez le volume de la pièce (surface × hauteur), puis multipliez par le nombre de renouvellements d’air souhaités par heure. Nous utilisons **5 renouvellements par heure**, un repère proche de la règle utilisée par l’AHAM aux États-Unis.' },
      { table: { head: ['Pièce (sous 2,5 m)', 'Volume', 'CADR conseillé'], rows: [
        ['Chambre de 10 m²', '25 m³', '≈ 125 m³/h'],
        ['Chambre de 15 m²', '37,5 m³', '≈ 190 m³/h'],
        ['Séjour de 25 m²', '62,5 m³', '≈ 310 m³/h'],
        ['Séjour de 40 m²', '100 m³', '≈ 500 m³/h']
      ] } },
      { p: 'Dans les tableaux de comparaison du site, la colonne « surface conseillée » applique ce calcul au CADR publié par le fabricant. Elle est donc souvent plus petite que la surface marketing.' },
      { h2: 'Quel filtre choisir ?' },
      { ul: [
        '**HEPA** : retient la grande majorité des particules fines (pollens, poussières, squames). La classe H13 est la plus courante sur les bons appareils domestiques.',
        '**Charbon actif** : pour les odeurs et certains gaz. L’EPA précise qu’un filtre à particules seul ne traite pas les gaz.',
        '**Ioniseurs, plasma** : fonctions additionnelles ; si vous préférez une filtration strictement mécanique, vérifiez qu’elles se désactivent.'
      ] },
      { h2: 'Combien coûte-t-il à l’usage ?' },
      { p: 'Un purificateur est utile s’il tourne longtemps. Regardez le niveau sonore au ralenti (moins de 25 dB pour une chambre), et le prix et la durée de vie du filtre de rechange : c’est le vrai coût sur plusieurs années.' },
      { callout: 'Un purificateur ne remplace ni l’aération quotidienne ni la ventilation du logement. L’EPA indique que les bénéfices sur la santé mesurés dans les études existent mais restent généralement modestes.', title: 'À garder en tête' }
    ]
  },
  {
    slug: 'purificateur-ou-aeration', category: 'purificateur',
    kicker: 'Comprendre', short: 'Purifier ou aérer ?',
    title: 'Purificateur d’air ou aération : que fait chacun ?',
    description: 'Aérer et purifier ne règlent pas les mêmes problèmes. Ce que chacun fait, et quand un purificateur a du sens.',
    publishedAt: '2026-11-27', updatedAt: '2026-11-27',
    answer: 'Aérer renouvelle l’air et évacue humidité et polluants gazeux produits à l’intérieur : c’est la base, au moins 10 minutes par jour. Un purificateur filtre les particules de l’air de la pièce en continu : utile en période de pollens, avec des animaux, ou quand l’air extérieur est pollué.',
    products: ['coway-airmega-100', 'xiaomi-smart-air-purifier-4-pro'],
    sources: [SRC.aeration, SRC.epaCleaners],
    body: [
      { h2: 'Que fait l’aération ?' },
      { p: 'Ouvrir les fenêtres en grand remplace l’air intérieur par de l’air extérieur. Les pouvoirs publics recommandent de le faire **au moins 10 minutes par jour**, été comme hiver, et pendant les activités qui émettent des polluants (ménage, bricolage, cuisine).' },
      { h2: 'Que fait un purificateur ?' },
      { p: 'Il aspire l’air de la pièce, le fait passer dans des filtres et le rejette. Avec un filtre HEPA, il retient les particules ; avec du charbon actif, une partie des odeurs et des gaz. Il ne renouvelle pas l’air et ne fait pas baisser l’humidité.' },
      { table: { head: ['Situation', 'Aérer', 'Purificateur'], rows: [
        ['Odeurs de cuisine, humidité de douche', 'Oui, en priorité', 'Peu utile'],
        ['Saison des pollens', 'Aux heures les moins chargées', 'Utile, fenêtres fermées'],
        ['Poils et squames d’animaux', 'Oui', 'Utile en complément'],
        ['Fumée extérieure, pic de pollution', 'À limiter', 'Utile, fenêtres fermées']
      ] } },
      { h2: 'Comment combiner les deux ?' },
      { p: 'Aérer chaque jour, puis laisser le purificateur en mode automatique dans la pièce où vous passez le plus de temps, souvent la chambre. Pour le choisir, suivez [la règle du CADR](/guides/quel-purificateur-d-air-choisir).' }
    ]
  }
]

// Pages rubriques (hubs).
export const hubs = {
  chauffage: {
    h1: 'Chauffages d’appoint électriques',
    metaTitle: 'Chauffage d’appoint électrique : comparatif et guide',
    description: 'Soufflant, bain d’huile, convecteur, inertie, infrarouge : six chauffages d’appoint comparés sur leurs caractéristiques officielles, avec leurs limites.',
    lead: 'Six appareils, cinq technologies. Le bon choix dépend surtout de la durée pendant laquelle vous allez chauffer.',
    updatedAt: '2026-11-28',
    picks: [
      { label: 'Salle de bain, usage court', slug: 'rowenta-intense-comfort-aqua', why: 'Soufflant céramique 1 000 / 2 000 W : chaleur immédiate, léger (2 kg).' },
      { label: 'Séjour, toute la soirée', slug: 'delonghi-radia-s-easytronic', why: 'Bain d’huile 2 500 W, thermostat électronique : chaleur douce, stable et silencieuse.' },
      { label: 'Petite pièce, tous les jours', slug: 'taurus-nepal-1500', why: 'Inertie 1 500 W programmable à la semaine, détection de fenêtre ouverte.' }
    ],
    selectionNote: 'Caractéristiques relevées sur les fiches officielles le 27 novembre 2026. Fiches documentaires : appareils non testés par l’éditeur.',
    compare: [{ key: 'type', label: 'Type' }, { key: 'power', label: 'Puissance max' }, { key: 'surface', label: 'Surface annoncée' }, { key: 'thermostat', label: 'Thermostat' }],
    body: [
      { p: 'Trois questions suffisent dans la plupart des cas : **combien de temps** l’appareil va tourner, **quelle taille** fait la pièce (et est-elle bien isolée), et **qui** l’occupe (enfants, animaux, sommeil).' },
      { ul: ['Moins d’une heure : soufflant céramique.', 'Plusieurs heures : bain d’huile ou inertie.', 'Un poste fixe (bureau, canapé) : infrarouge orienté vers vous.', 'Toujours : thermostat, sécurité surchauffe, coupure antibasculement.'] },
      { p: 'Le détail des technologies, la salle de bain et les sécurités sont dans le [guide complet](/guides/quel-chauffage-d-appoint-choisir) ; le calcul de la facture dans [combien consomme un chauffage d’appoint](/guides/consommation-chauffage-d-appoint).' }
    ],
    faq: [
      { q: 'Quel est le chauffage d’appoint le plus économique ?', a: 'À puissance égale, tous les chauffages électriques consomment la même énergie par heure de chauffe. Le plus économique est celui qui chauffe le moins longtemps pour votre confort : thermostat précis, programmation, et type adapté à la durée d’usage.' },
      { q: 'Peut-on laisser un chauffage d’appoint allumé la nuit ?', a: 'Seulement si la notice le permet, avec un appareil doté d’un thermostat, d’une sécurité surchauffe et d’une coupure antibasculement, placé à distance des textiles. Un appareil à inertie ou à bain d’huile s’y prête mieux qu’un soufflant.' },
      { q: 'Quelle puissance pour une pièce de 20 m² ?', a: 'Les fabricants annoncent souvent 1 500 à 2 000 W pour 20 m² dans une pièce isolée. Prévoyez davantage pour une pièce ancienne, sous les toits ou très vitrée.' },
      { q: 'Faut-il éviter les multiprises ?', a: 'Oui. Un chauffage de 2 000 W et plus doit être branché directement sur une prise murale, câble entièrement déroulé, comme l’indiquent la plupart des notices.' }
    ]
  },
  humidificateur: {
    h1: 'Humidificateurs d’air',
    metaTitle: 'Humidificateur d’air : comparatif et guide d’achat',
    description: 'Ultrasons, évaporation ou vapeur : six humidificateurs comparés sur débit, réservoir, surface et bruit, avec leurs contraintes d’entretien.',
    lead: 'Air sec du chauffage, gorge irritée au réveil ? Visez 30 à 50 % d’humidité, et choisissez la technologie selon votre eau et votre tolérance à l’entretien.',
    updatedAt: '2026-11-28',
    picks: [
      { label: 'Chambre', slug: 'levoit-dual-200s', why: 'Ultrasons avec capteur d’humidité : s’arrête seul au bon taux, 19 dB annoncés.' },
      { label: 'Eau calcaire', slug: 'philips-humidificateur-2000-hu2510', why: 'Évaporation, pas de poussière blanche, débit publié de 190 ml/h.' },
      { label: 'Hygiène avant tout', slug: 'boneco-s250', why: 'Vapeur chaude : l’eau est bouillie, aucun filtre. Consomme davantage.' }
    ],
    selectionNote: 'Caractéristiques relevées le 27 novembre 2026, surtout sur les fiches Amazon.fr (les sites fabricants n’étaient pas lisibles). Appareils non testés par l’éditeur.',
    compare: [{ key: 'tech', label: 'Technologie' }, { key: 'tank', label: 'Réservoir' }, { key: 'surface', label: 'Surface annoncée' }, { key: 'noise', label: 'Bruit annoncé' }, { key: 'hygro', label: 'Hygrostat' }],
    body: [
      { p: 'Avant tout, **mesurez** l’humidité avec un hygromètre : si elle est déjà au-dessus de 50 %, un humidificateur n’est pas la solution.' },
      { ul: ['Eau du robinet calcaire : évaporation ou vapeur, pour éviter la poussière blanche.', 'Chambre : un modèle silencieux avec capteur d’humidité et arrêt automatique.', 'Grande pièce : regardez le débit (ml/h) et un réservoir de 4 L ou plus.', 'Entretien : un réservoir à large ouverture, à vider chaque jour.'] },
      { p: 'Les trois technologies sont comparées en détail dans le [guide complet](/guides/quel-humidificateur-choisir), et les gestes d’hygiène dans [entretenir un humidificateur](/guides/entretenir-humidificateur).' }
    ],
    faq: [
      { q: 'Quel taux d’humidité viser ?', a: 'Entre 30 et 50 %, et toujours sous 60 % selon l’agence américaine de l’environnement (EPA). Au-delà, moisissures et acariens sont favorisés.' },
      { q: 'Qu’est-ce que la poussière blanche ?', a: 'Les minéraux de l’eau du robinet, dispersés par les humidificateurs à ultrasons, qui se déposent sur les meubles. Une eau peu minéralisée ou un modèle à évaporation l’évite.' },
      { q: 'Peut-on mettre des huiles essentielles ?', a: 'Uniquement dans le compartiment ou le tampon prévu par le fabricant, jamais dans le réservoir sauf mention explicite de la notice.' },
      { q: 'Un humidificateur dans la chambre d’un bébé ?', a: 'Demandez l’avis d’un professionnel de santé. Si vous en utilisez un, évitez la vapeur chaude à portée de main, et respectez strictement le nettoyage quotidien.' }
    ]
  },
  purificateur: {
    h1: 'Purificateurs d’air',
    metaTitle: 'Purificateur d’air : comparatif CADR et guide',
    description: 'Six purificateurs d’air HEPA comparés sur leur CADR réel, leur filtre et leur bruit, avec la surface qu’ils peuvent vraiment traiter.',
    lead: 'Pollens, poussière, animaux : un purificateur se choisit d’après son CADR. Nous recalculons la surface conseillée pour que vous compariez sur une même base.',
    updatedAt: '2026-11-28',
    picks: [
      { label: 'Chambre', slug: 'philips-purificateur-900-ac0950', why: 'CADR 250 m³/h, 20,5 dB au ralenti, HEPA + charbon actif.' },
      { label: 'Séjour moyen', slug: 'xiaomi-smart-air-purifier-4-lite', why: 'CADR 360 m³/h, filtre H13 3-en-1, capteurs PM2.5.' },
      { label: 'Grande pièce, pollens', slug: 'xiaomi-smart-air-purifier-4-pro', why: 'CADR 500 m³/h, le plus élevé de la sélection, capteurs PM2.5 et PM10.' }
    ],
    selectionNote: 'CADR et caractéristiques relevés le 27 novembre 2026. * Surface conseillée calculée par nos soins pour 5 renouvellements d’air par heure sous 2,5 m de plafond.',
    compare: [{ key: 'cadr', label: 'CADR' }, { key: 'surface', label: 'Surface conseillée *' }, { key: 'filter', label: 'Filtre' }, { key: 'noise', label: 'Bruit au ralenti' }],
    body: [
      { p: 'Calculez le **CADR nécessaire** : surface × hauteur sous plafond × 5. Puis choisissez le filtre et le niveau de bruit selon la pièce.' },
      { ul: ['Chambre : CADR adapté et moins de 25 dB au ralenti.', 'Séjour ouvert : CADR de 350 m³/h et plus.', 'Odeurs, cuisine, tabac : filtre HEPA associé à du charbon actif.', 'Coût réel : prix et durée de vie du filtre de rechange.'] },
      { p: 'La méthode et ses limites sont détaillées dans le [guide du CADR](/guides/quel-purificateur-d-air-choisir). Et n’oubliez pas [d’aérer chaque jour](/guides/purificateur-ou-aeration).' }
    ],
    faq: [
      { q: 'Quelle différence entre CADR et surface annoncée ?', a: 'Le CADR est un débit mesuré (m³/h d’air débarrassé des particules). La surface annoncée dépend d’hypothèses propres à chaque marque. Pour comparer, divisez le CADR par 12,5 : vous obtenez la surface traitée à 5 renouvellements par heure sous 2,5 m.' },
      { q: 'Faut-il le laisser tourner en permanence ?', a: 'Un purificateur n’agit que lorsqu’il tourne. Le mode automatique, piloté par un capteur de particules, est le plus pratique : il accélère quand l’air se charge et ralentit ensuite.' },
      { q: 'Tous les combien changer le filtre ?', a: 'Selon le fabricant, souvent tous les 6 à 12 mois. Le prix du filtre de rechange fait partie du coût réel de l’appareil.' },
      { q: 'Un purificateur aide-t-il contre les allergies ?', a: 'Il réduit la quantité de particules en suspension dans la pièce, dont les pollens. L’EPA note des bénéfices mesurés mais généralement modestes. Il complète, sans les remplacer, les conseils de votre médecin.' }
    ]
  }
}

// FAQ des fiches produits : réponses construites à partir des données de la fiche, sans ajout.
export function productFaq(p) {
  const t = p.table
  const tested = { q: `Le ${p.name} a-t-il été testé par Le Climat Idéal ?`, a: 'Non. Cette fiche est documentaire : elle s’appuie sur les caractéristiques publiées par le fabricant ou le marchand, avec leur source et leur date de vérification.' }
  if (p.category === 'chauffage') {
    const w = Number(String(t.power).replace(/\D/g, ''))
    return [
      { q: `Quelle surface chauffe le ${p.name} ?`, a: t.surface ? `${t.surface} selon le fabricant, pour une pièce correctement isolée. Prévoyez plus large dans une pièce ancienne, sous les toits ou très vitrée.` : 'Le fabricant ne publie pas de surface conseillée. Réservez-le à une petite pièce ou à un usage ponctuel.' },
      { q: `Combien consomme le ${p.name} ?`, a: `À pleine puissance (${t.power}), il consomme ${(w / 1000).toLocaleString('fr-FR')} kWh par heure de chauffe. Avec le thermostat, la consommation réelle est plus faible. Multipliez par le prix du kWh de votre contrat pour obtenir le coût.` },
      { q: `Le ${p.name} a-t-il un thermostat ?`, a: `${t.thermostat}.` },
      tested
    ]
  }
  if (p.category === 'humidificateur') {
    return [
      { q: `Pour quelle surface le ${p.name} est-il prévu ?`, a: `${t.surface} selon le fabricant, avec un réservoir de ${t.tank}.` },
      { q: `Le ${p.name} s’arrête-t-il au bon taux d’humidité ?`, a: t.hygro === 'Oui' ? 'Oui : il dispose d’un hygrostat ou d’un capteur d’humidité qui régule son fonctionnement.' : 'La fiche ne confirme pas d’hygrostat. Utilisez un hygromètre pour rester entre 30 et 50 % d’humidité.' },
      { q: `Quelle technologie utilise le ${p.name} ?`, a: `${t.tech}. Les modèles à ultrasons peuvent laisser une poussière blanche avec une eau calcaire ; l’évaporation et la vapeur l’évitent.` },
      tested
    ]
  }
  const cadr = Number(String(t.cadr).replace(/\D/g, ''))
  return [
    { q: `Pour quelle pièce le ${p.name} convient-il ?`, a: `Avec un CADR de ${t.cadr}, il renouvelle 5 fois par heure l’air d’environ ${Math.round(cadr / 12.5)} m² sous 2,5 m de plafond. C’est notre repère de calcul ; la surface annoncée par le fabricant est souvent plus grande.` },
    { q: `Quel filtre utilise le ${p.name} ?`, a: `${t.filter}. Le prix et la durée de vie du filtre de rechange font partie du coût réel.` },
    { q: `Le ${p.name} est-il silencieux ?`, a: t.noise && t.noise !== '—' ? `${t.noise} au ralenti selon le fabricant. Pour une chambre, visez moins de 25 dB.` : 'Le niveau sonore au ralenti n’est pas publié officiellement.' },
    tested
  ]
}

export const guideBySlug = slug => guides.find(g => g.slug === slug)
export const guidesByCategory = key => guides.filter(g => g.category === key)
