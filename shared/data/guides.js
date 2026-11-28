// Guides et contenus des pages rubriques. Faits généraux sourcés ; aucun test revendiqué.
const SRC = {
  aeration: { label: 'Ministère de la Transition écologique — Qualité de l’air intérieur (aérer au moins 10 minutes par jour)', url: 'https://www.ecologie.gouv.fr/politiques-publiques/qualite-lair-interieur' },
  anses: { label: 'Anses — Qualité de l’air intérieur', url: 'https://www.anses.fr/fr/content/qualit%C3%A9-de-l%E2%80%99air-int%C3%A9rieur' },
  epaMold: { label: 'US EPA — A Brief Guide to Mold, Moisture and Your Home (humidité idéale 30 à 50 %, sous 60 %)', url: 'https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home' },
  epaHumid: { label: 'US EPA — Use and Care of Home Humidifiers (eau, poussière blanche, nettoyage)', url: 'https://www.epa.gov/indoor-air-quality-iaq/use-and-care-home-humidifiers' },
  epaCleaners: { label: 'US EPA — Guide to Air Cleaners in the Home (CADR, HEPA, charbon actif)', url: 'https://www.epa.gov/indoor-air-quality-iaq/guide-air-cleaners-home' },
  aham: { label: 'AHAM Verifide — programme de certification du CADR', url: 'https://ahamverifide.org/' }
}

export const guides = [
  {
    "slug": "chauffage-d-appoint-chambre",
    "category": "chauffage",
    "kicker": "Guide",
    "short": "Chauffage d'appoint pour la chambre : quel modèle, et surtout quel bruit",
    "title": "Chauffage d'appoint pour la chambre : quel modèle, et surtout quel bruit",
    "metaTitle": "Chauffage d'appoint chambre : silence, sécurité, puissance",
    "description": "Choisir un chauffage d'appoint pour une chambre : le bruit au coucher, la régulation, les sécurités et la puissance réellement utile. Sélection parmi 6 appareils documentés.",
    "answer": "Pour une chambre, l'ordre des critères n'est pas celui d'un séjour : le bruit passe avant la puissance, puis la régulation (un thermostat électronique tient la température au lieu de chauffer par à-coups), puis les sécurités. Un soufflant de 2 000 W chauffe vite une pièce de 12 m², mais s'entend ; un bain d'huile ou un panneau rayonnant est silencieux et lent.",
    "publishedAt": "2026-11-28",
    "updatedAt": "2026-11-28",
    "products": [
      "taurus-nepal-1500",
      "delonghi-radia-s-easytronic",
      "klarstein-heatpal",
      "rowenta-intense-comfort-aqua",
      "rowenta-vectissimo",
      "rowenta-mini-excel-eco-safe"
    ],
    "body": [
      {
        "p": "En tant que Partenaire Amazon, Le Climat Idéal réalise un bénéfice sur les achats remplissant les conditions requises. Cela ne change pas le prix payé."
      },
      {
        "h2": "1. Les quatre familles, côté chambre"
      },
      {
        "table": {
          "head": [
            "Famille",
            "Bruit",
            "Montée en température",
            "Pour une chambre"
          ],
          "rows": [
            [
              "Soufflant céramique",
              "Ventilateur audible",
              "Immédiate",
              "Réveil ou salle de bain, pas pour dormir"
            ],
            [
              "Convecteur (avec ou sans turbo)",
              "Silencieux hors turbo",
              "Moyenne",
              "Chambre occupée en soirée"
            ],
            [
              "Bain d'huile",
              "Silencieux",
              "Lente",
              "Chambre ou séjour, chaleur stable"
            ],
            [
              "Rayonnant / inertie",
              "Silencieux",
              "Lente, chaleur ressentie à proximité",
              "Chambre petite, ou zone occupée"
            ]
          ]
        }
      },
      {
        "p": "Le soufflant est le seul à faire du bruit par construction : il déplace de l'air. Les trois autres chauffent sans ventilateur, ce qui règle la question du sommeil — sauf que la chaleur met plus longtemps à venir."
      },
      {
        "h2": "2. Ce que valent les six appareils de la sélection"
      },
      {
        "table": {
          "head": [
            "Modèle",
            "Technologie",
            "Puissance",
            "Bruit annoncé",
            "Régulation",
            "Surface annoncée",
            "Poids"
          ],
          "rows": [
            [
              "[Taurus Nepal 1500](/chauffages-d-appoint/taurus-nepal-1500)",
              "Inertie acier/aluminium",
              "1 500 W",
              "Non communiqué (pas de ventilateur)",
              "Électronique, programmation hebdo",
              "14 à 16 m²",
              "4,85 kg"
            ],
            [
              "[De'Longhi RadiaS Easytronic](/chauffages-d-appoint/delonghi-radia-s-easytronic)",
              "Bain d'huile, 12 éléments",
              "2 500 W",
              "Non communiqué (pas de ventilateur)",
              "Électronique, 12 températures",
              "75 m³ ≈ 30 m²",
              "15,7 kg"
            ],
            [
              "[Klarstein HeatPal](/chauffages-d-appoint/klarstein-heatpal)",
              "Rayonnant infrarouge, marbre",
              "1 300 W",
              "Non communiqué (pas de ventilateur)",
              "Thermostat",
              "30 m² annoncés",
              "11,3 kg"
            ],
            [
              "[Rowenta Intense Comfort Aqua](/chauffages-d-appoint/rowenta-intense-comfort-aqua)",
              "Soufflant céramique",
              "1 000 / 2 000 W",
              "29 dB(A) annoncés",
              "Thermostat",
              "35 m² annoncés",
              "2 kg"
            ],
            [
              "[Rowenta Vectissimo Turbo](/chauffages-d-appoint/rowenta-vectissimo)",
              "Convecteur + turbo",
              "1 200 / 2 400 W",
              "Non communiqué",
              "Mécanique",
              "25 m²",
              "4,3 kg"
            ],
            [
              "[Rowenta Mini Excel Eco Safe](/chauffages-d-appoint/rowenta-mini-excel-eco-safe)",
              "Soufflant compact",
              "1 000 / 2 000 W",
              "50 dB(A) en silencieux",
              "Électronique",
              "Non indiquée",
              "1,7 kg"
            ]
          ]
        }
      },
      {
        "p": "Trois remarques sur ces chiffres, tous issus des fiches produit vérifiées le 27/11/2026 :"
      },
      {
        "ul": [
          "**29 dB(A) ne veut pas dire inaudible.** Un niveau sonore se mesure à une distance et sur un régime précis ; sur un soufflant, le chiffre correspond souvent au réglage le plus bas. À pleine puissance, le bruit monte.",
          "**50 dB(A) est un vrai niveau de conversation**, pas un niveau de chambre. C'est cohérent avec l'usage prévu par la fiche : un petit bureau, une chambre d'amis.",
          "**Les surfaces annoncées sont optimistes** dès que l'isolation est moyenne. Une chambre de 12 m² mal isolée se chauffe mieux avec 1 500 W bien régulés qu'avec 2 500 W en marche forcée."
        ]
      },
      {
        "h2": "3. Le gagnant par usage"
      },
      {
        "table": {
          "head": [
            "Votre situation",
            "Appareil",
            "Pourquoi"
          ],
          "rows": [
            [
              "Petite chambre chauffée tous les soirs",
              "Taurus Nepal 1500",
              "Programmation hebdomadaire, détection de fenêtre ouverte, verrouillage enfant, IP24, posable au mur"
            ],
            [
              "Chambre ou séjour jusqu'à 30 m², silence total",
              "De'Longhi RadiaS Easytronic",
              "Aucun ventilateur, chaleur stable après l'arrêt ; lourd et lent, à installer une fois"
            ],
            [
              "Réveil rapide, salle de bain attenante",
              "Rowenta Intense Comfort Aqua",
              "29 dB(A) annoncés au réglage bas, 2 kg, deux puissances"
            ],
            [
              "Pièce de vie, chaleur ressentie sans attendre",
              "Klarstein HeatPal",
              "Rayonnement direct, silencieux ; chauffe ce qu'il « voit », à placer face à la zone occupée"
            ],
            [
              "Chambre d'amis, usage court",
              "Rowenta Mini Excel Eco Safe",
              "Compact et sécurisé, mais 50 dB(A) : à réserver aux moments où l'on ne dort pas"
            ]
          ]
        }
      },
      {
        "p": "Deux appareils ne sont pas retenus pour une chambre : le **Mini Excel** à cause du bruit annoncé, et le **Vectissimo** parce que son thermostat mécanique régule moins finement et que 2 400 W sont difficiles à justifier dans une petite pièce. Ils restent pertinents ailleurs, et leurs fiches le disent."
      },
      {
        "h2": "4. Puissance : le repère, et le piège du circuit"
      },
      {
        "p": "Le repère de dimensionnement courant est de l'ordre de **100 W par m²** pour une hauteur de plafond standard, à ajuster fortement selon l'isolation, le nombre de murs extérieurs et le vitrage. Ce n'est pas une norme : c'est un point de départ pour éviter d'acheter 2 000 W pour 9 m²."
      },
      {
        "p": "Le piège est électrique. Un appareil de :"
      },
      {
        "ul": [
          "**1 000 W** appelle environ 4,3 A ;",
          "**1 500 W** environ 6,5 A ;",
          "**2 000 W** environ 8,7 A ;",
          "**2 500 W** environ 10,9 A."
        ]
      },
      {
        "p": "Sur une prise 16 A, un radiateur de 2 500 W occupe presque toute la ligne. Si la même ligne alimente la chambre et le couloir, le disjoncteur fait son travail — au mauvais moment. Vérifiez ce qui partage le circuit avant de choisir la puissance maximale."
      },
      {
        "p": "Côté consommation, le calcul est direct : 2 000 W pendant 2 h = 4 kWh. Le coût dépend de votre tarif ; le détail de la formule est dans [combien consomme un chauffage d'appoint](/guides/consommation-chauffage-d-appoint)."
      },
      {
        "h2": "5. Questions fréquentes"
      },
      {
        "p": "**Soufflant ou bain d'huile pour dormir ?** Bain d'huile, panneau rayonnant ou inertie : aucun ventilateur, donc aucun bruit de soufflerie. Le soufflant reste utile pour chauffer la pièce avant de se coucher, puis s'éteint."
      },
      {
        "p": "**Quelle puissance pour une chambre de 12 m² ?** Le repère donne environ 1 200 W. Un appareil de 1 500 W régulé fait mieux qu'un 2 000 W qui chauffe par à-coups, surtout si la chambre est bien isolée."
      },
      {
        "p": "**Peut-on le laisser branché toute la nuit ?** Un appareil mobile n'est pas prévu pour fonctionner sans surveillance : suivez la notice du fabricant, ne couvrez jamais l'appareil, et dégagez ce qui se trouve autour. Un appareil fixe et programmable est plus adapté à un usage nocturne régulier."
      },
      {
        "p": "**Et pour une chambre de bébé ?** Trois principes raisonnables : un appareil stable ou fixé hors de portée, une régulation qui évite les à-coups, et les distances de la notice respectées. Aucune source normative n'a été vérifiée sur ce cas précis : à confirmer auprès du fabricant avant l'achat, et à arbitrer avec un professionnel de santé pour un nourrisson."
      },
      {
        "p": "**Pourquoi mon soufflant annoncé à 29 dB(A) fait plus de bruit ?** Parce que la mesure correspond généralement au régime le plus bas, à une distance donnée. Le mode turbo est nécessairement plus bruyant."
      },
      {
        "p": "**Un appareil à 30 m² annoncés suffit-il pour 20 m² ?** En théorie oui, en pratique cela dépend de l'isolation et de la température visée. La surface annoncée est un maximum commercial, pas une garantie de confort."
      },
      {
        "h2": "Sources"
      },
      {
        "ul": [
          "Fiches produit Le Climat Idéal des six appareils cités, valeurs reprises des pages marchand Amazon.fr, vérifiées le 27/11/2026.",
          "Calculs de courant : I = P / U, avec U = 230 V (valeurs arrondies).",
          "Repère de puissance au m² : ordre de grandeur d'usage, sans valeur normative publiée — à ajuster selon le logement."
        ]
      },
      {
        "p": "*Le Climat Idéal n'a pas testé ces appareils. Aucune mesure de bruit, de consommation ou de température n'a été réalisée pour ce guide ; les chiffres cités sont ceux des fabricants, datés à la source.*"
      },
      {
        "p": "Pour le choix par famille d'appareil plutôt que par pièce : [quel chauffage d'appoint électrique choisir](/guides/quel-chauffage-d-appoint-choisir)."
      }
    ]
  },
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
      { h2: 'Les cinq familles, en une phrase chacune' },
      { table: { head: ['Type', 'Comment il chauffe', 'Idéal pour', 'À savoir'], rows: [
        ['Soufflant céramique', 'Un ventilateur pousse l’air sur une résistance', 'Chauffer vite une petite pièce, peu de temps', 'Bruit de ventilation ; la chaleur retombe dès l’arrêt'],
        ['Convecteur', 'L’air chauffé monte et circule naturellement', 'Une pièce d’appoint, usage régulier', 'Air chaud en hauteur, sol qui reste frais'],
        ['Bain d’huile', 'L’huile chauffe puis restitue lentement la chaleur', 'Séjour, chambre, usage de plusieurs heures', 'Lourd, lent à démarrer, silencieux'],
        ['Inertie', 'Un corps (aluminium, céramique, fonte) stocke la chaleur', 'Pièce chauffée tous les jours, souvent fixé au mur', 'Plus il est lourd, plus l’inertie est forte'],
        ['Infrarouge / rayonnant', 'Chauffe les surfaces et les personnes en face', 'Zone occupée précise (bureau, canapé)', 'Moins efficace pour réchauffer tout le volume']
      ] } },
      { h2: 'Partir de l’usage, pas de la puissance' },
      { p: 'La question qui tranche : **combien de temps l’appareil va-t-il tourner ?** Pour un quart d’heure dans la salle de bain, la réactivité d’un soufflant compte plus que tout. Pour une soirée entière, un appareil qui stocke la chaleur évite les cycles marche/arrêt et le souffle d’air.' },
      { p: 'La puissance se lit ensuite : les fabricants annoncent une surface, mais elle suppose une pièce correctement isolée. Dans une pièce ancienne, sous les toits ou très vitrée, visez plus large que la surface réelle.' },
      { h2: 'Les sécurités non négociables' },
      { ul: [
        '**Protection contre la surchauffe** avec coupure automatique.',
        '**Coupure en cas de basculement** pour tout appareil posé au sol, surtout avec enfants ou animaux.',
        '**Thermostat** : sans lui, l’appareil chauffe à pleine puissance en continu.',
        'Branchement **direct sur une prise murale**, sans multiprise : un appareil de 2 000 W et plus sollicite fortement le circuit.',
        'Garder les distances indiquées dans la notice, ne jamais couvrir l’appareil ni y faire sécher du linge.'
      ] },
      { callout: 'Les chauffages d’appoint à combustion (pétrole, gaz) ne sont pas traités ici. Ils dégagent des gaz dans la pièce et imposent une aération et des précautions propres.', title: 'Électrique uniquement' },
      { h2: 'Salle de bain : prudence' },
      { p: 'Dans une salle de bain, la prise doit se trouver loin de la baignoire et de la douche, et l’appareil doit être prévu pour un local humide (indice de protection contre les projections d’eau, indiqué « IPX4 » ou plus, et mention explicite dans la notice). En cas de doute sur l’installation, faites vérifier par un électricien.' },
      { h2: 'Et la consommation ?' },
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
      { h2: 'La formule' },
      { p: '**kWh = puissance en kW × nombre d’heures où la résistance chauffe.** 2 000 W = 2 kW. Avec un thermostat, l’appareil ne chauffe pas en continu : une fois la température atteinte, il alterne marche et arrêt. Le temps de chauffe réel est donc souvent inférieur au temps où l’appareil est allumé.' },
      { table: { head: ['Appareil', 'Durée à pleine puissance', 'Consommation maximale'], rows: [
        ['Soufflant 2 000 W', '30 min', '1 kWh'],
        ['Bain d’huile 2 500 W', '3 h', '7,5 kWh'],
        ['Inertie 1 500 W', '4 h', '6 kWh'],
        ['Infrarouge 1 300 W', '2 h', '2,6 kWh']
      ] } },
      { p: 'Ces chiffres sont des plafonds : avec un thermostat bien réglé, la consommation réelle est plus basse. Pour le coût, utilisez le prix du kWh de votre propre contrat, indiqué sur la facture : il varie selon l’offre et les heures (pleines/creuses).' },
      { h2: 'Ce qui fait vraiment baisser la facture' },
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
      { h2: 'Les trois technologies' },
      { table: { head: ['Technologie', 'Principe', 'Points forts', 'Points faibles'], rows: [
        ['Ultrasons', 'Une membrane vibrante pulvérise l’eau en brume froide', 'Silencieux, faible consommation, peu cher', 'Avec une eau calcaire, dépôt de « poussière blanche » ; nettoyage régulier'],
        ['Évaporation', 'Un ventilateur souffle sur une mèche imbibée', 'Pas de poussière blanche, s’autorégule naturellement', 'Mèche/filtre à remplacer, léger souffle'],
        ['Vapeur chaude', 'L’eau est portée à ébullition', 'Vapeur sans micro-organismes ni minéraux', 'Consommation élevée, vapeur chaude, détartrage']
      ] } },
      { p: 'L’EPA rappelle que les humidificateurs à ultrasons dispersent les minéraux de l’eau du robinet dans l’air, d’où le dépôt blanc sur les meubles. Une eau à faible teneur en minéraux limite ce phénomène et l’entartrage.' },
      { h2: 'Dimensionner : débit et réservoir' },
      { ul: [
        '**Le débit** (en ml/h) indique la quantité d’eau diffusée. C’est la donnée la plus utile pour comparer, quand le fabricant la publie.',
        '**Le réservoir** fixe l’autonomie : 2 à 3 L pour une nuit en chambre, 4 L et plus pour un séjour.',
        '**L’hygrostat** (capteur + arrêt automatique) évite de dépasser le bon taux. C’est le critère que nous jugeons le plus important.'
      ] },
      { h2: 'L’entretien, à anticiper avant l’achat' },
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
    sources: [SRC.epaMold, SRC.aeration, SRC.anses],
    body: [
      { h2: 'Les repères' },
      { table: { head: ['Humidité relative', 'Ce qui se passe', 'Que faire'], rows: [
        ['Moins de 30 %', 'Air sec : gorge et peau irritées, électricité statique, bois qui travaille', 'Humidifier, sans dépasser 50 %'],
        ['30 à 50 %', 'Zone recommandée par l’EPA', 'Rien, sinon aérer chaque jour'],
        ['50 à 60 %', 'Acceptable, à surveiller', 'Aérer, vérifier la ventilation'],
        ['Plus de 60 %', 'Condensation, moisissures, acariens favorisés', 'Ventiler, chercher la cause, déshumidifier si besoin']
      ] } },
      { h2: 'Mesurer avant d’agir' },
      { p: 'Un hygromètre se place à hauteur d’homme, loin d’une fenêtre, d’un radiateur ou de la salle de bain. Relevez-le à différents moments : l’humidité varie avec la cuisine, les douches, le séchage du linge et le chauffage.' },
      { h2: 'Air trop sec en hiver : pourquoi ?' },
      { p: 'L’air froid extérieur contient peu d’eau. Une fois réchauffé à l’intérieur, son humidité relative chute. C’est pourquoi l’air paraît souvent plus sec quand le chauffage tourne fort.' },
      { h2: 'Ne pas oublier d’aérer' },
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
      { h2: 'Le rythme recommandé' },
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
      { h2: 'Le CADR, le seul chiffre qui compte' },
      { p: 'Le **CADR** (Clean Air Delivery Rate) mesure le volume d’air débarrassé des particules par heure. L’EPA le résume ainsi : plus le CADR est élevé, plus l’appareil filtre de particules et plus la pièce qu’il peut servir est grande. Les surfaces annoncées par les fabricants, elles, reposent sur des hypothèses très différentes d’une marque à l’autre.' },
      { h2: 'Dimensionner en 10 secondes' },
      { p: 'Calculez le volume de la pièce (surface × hauteur), puis multipliez par le nombre de renouvellements d’air souhaités par heure. Nous utilisons **5 renouvellements par heure**, un repère proche de la règle utilisée par l’AHAM aux États-Unis.' },
      { table: { head: ['Pièce (sous 2,5 m)', 'Volume', 'CADR conseillé'], rows: [
        ['Chambre de 10 m²', '25 m³', '≈ 125 m³/h'],
        ['Chambre de 15 m²', '37,5 m³', '≈ 190 m³/h'],
        ['Séjour de 25 m²', '62,5 m³', '≈ 310 m³/h'],
        ['Séjour de 40 m²', '100 m³', '≈ 500 m³/h']
      ] } },
      { p: 'Dans les tableaux de comparaison du site, la colonne « surface conseillée » applique ce calcul au CADR publié par le fabricant. Elle est donc souvent plus petite que la surface marketing.' },
      { h2: 'Quel filtre ?' },
      { ul: [
        '**HEPA** : retient la grande majorité des particules fines (pollens, poussières, squames). La classe H13 est la plus courante sur les bons appareils domestiques.',
        '**Charbon actif** : pour les odeurs et certains gaz. L’EPA précise qu’un filtre à particules seul ne traite pas les gaz.',
        '**Ioniseurs, plasma** : fonctions additionnelles ; si vous préférez une filtration strictement mécanique, vérifiez qu’elles se désactivent.'
      ] },
      { h2: 'Le bruit et le coût d’usage' },
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
    sources: [SRC.aeration, SRC.epaCleaners, SRC.anses],
    body: [
      { h2: 'Ce que fait l’aération' },
      { p: 'Ouvrir les fenêtres en grand remplace l’air intérieur par de l’air extérieur. Les pouvoirs publics recommandent de le faire **au moins 10 minutes par jour**, été comme hiver, et pendant les activités qui émettent des polluants (ménage, bricolage, cuisine).' },
      { h2: 'Ce que fait un purificateur' },
      { p: 'Il aspire l’air de la pièce, le fait passer dans des filtres et le rejette. Avec un filtre HEPA, il retient les particules ; avec du charbon actif, une partie des odeurs et des gaz. Il ne renouvelle pas l’air et ne fait pas baisser l’humidité.' },
      { table: { head: ['Situation', 'Aérer', 'Purificateur'], rows: [
        ['Odeurs de cuisine, humidité de douche', 'Oui, en priorité', 'Peu utile'],
        ['Saison des pollens', 'Aux heures les moins chargées', 'Utile, fenêtres fermées'],
        ['Poils et squames d’animaux', 'Oui', 'Utile en complément'],
        ['Fumée extérieure, pic de pollution', 'À limiter', 'Utile, fenêtres fermées']
      ] } },
      { h2: 'Le bon combo' },
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
    quick: [
      { label: 'Usage court', title: 'Soufflant céramique', text: 'Chaleur immédiate pour une salle de bain ou un bureau le matin.' },
      { label: 'Soirée entière', title: 'Bain d’huile ou inertie', text: 'Chaleur stable et silencieuse, qui se prolonge après l’arrêt.' },
      { label: 'Zone précise', title: 'Infrarouge', text: 'Chauffe ce qui est en face : le bureau, le canapé.' }
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
    quick: [
      { label: 'Chambre', title: 'Ultrasons avec capteur', text: 'Silencieux et s’arrête seul au bon taux. Eau peu calcaire conseillée.' },
      { label: 'Eau calcaire', title: 'Évaporation', text: 'Pas de poussière blanche ; mèche à remplacer de temps en temps.' },
      { label: 'Hygiène avant tout', title: 'Vapeur chaude', text: 'L’eau est bouillie. Consomme plus, à tenir hors de portée des enfants.' }
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
    quick: [
      { label: 'Chambre', title: 'CADR 200 à 250 m³/h', text: 'Et un mode nuit vraiment silencieux, sous 25 dB.' },
      { label: 'Séjour', title: 'CADR 350 m³/h et plus', text: 'Pour 25 à 40 m², selon la hauteur sous plafond.' },
      { label: 'Odeurs', title: 'HEPA + charbon actif', text: 'Le HEPA seul ne retient pas les gaz ni les odeurs.' }
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

export const guideBySlug = slug => guides.find(g => g.slug === slug)
export const guidesByCategory = key => guides.filter(g => g.category === key)
