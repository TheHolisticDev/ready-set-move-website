const requirementDialog = {
  en:
    "Before jumping into the first workout, we'll talk about your goals and life situation so I can tailor the training exactly to your needs.",
  de:
    "Bevor wir das erste Mal zusammen trainieren, erfolgt ein persönliches Anamnesegespräch. Dabei ermitteln wir Deine Trainingsziele und Umstände, damit ich Dein Training perfekt auf Dich zuschneiden kann.",
}

const packageProductsCommonTexts = {
  en: [
    "With continuous training you work towards your goals and build a foundation for a healthy life.",
    requirementDialog.en,
  ],
  de: [
    "Regelmäßiges Training bringt Dich Deinen Zielen näher und schafft eine stabile Grundlage für Deine Gesundheit.",
    requirementDialog.de,
  ],
}

const subscriptionProductsCommonTexts = {
  en: [
    ...packageProductsCommonTexts.en,
    "With a subscription you pay in monthly rates, which are lower than the equivalent package prices.",
    "Sessions where the studio is closed due to holidays or other reasons, wont be charged.",
  ],
  de: [
    ...packageProductsCommonTexts.de,
    "Mit einem Abo zahlst du bequem in monatlichen Raten, die niedriger sind als die entsprechenden Paketgesamtpreise.",
    "Einheiten in denen das Studio wegen Urlaub oder aus anderen Gründen geschlossen bleibt, werden dir im jeweiligen Monat nicht berechnet.",
  ],
}

const annualProductsCommonTexts = {
  en: [
    "Commit to your training for a full year and your gains get solidified sustainably.",
    ...subscriptionProductsCommonTexts.en,
  ],
  de: [
    "Zieh Dein Training ein ganzes Jahr lang durch und Deine Erfolge sind Dir nachhaltig sicher.",
    ...subscriptionProductsCommonTexts.de,
  ],
}

const twicePerWeekCommonTexts = {
  en:
    "The all in package. Training two times a week will yield results in no time. Full throttle on your way to success!",
  de:
    "Für Durchstarter. Wenn Du zwei mal pro Woche trainierst, wirst Du schnell Fortschritte sehen. Vollgas auf Deinem Weg zum Erfolg!",
}

const oncePerWeekCommonTexts = {
  en:
    "Training every week will keep you fit and healthy. We can also design your training with supplement sessions at home for even faster gains.",
  de:
    "Jede Woche trainieren hält Dich fit und gesund. Wir können Dein Training auch mit weiteren Trainingseinheiten ergänzen, die Du zu Hause durchführst. So machst Du noch schnellere Fortschritte.",
}

const powerWorkoutCommonTexts = {
  en: [
    "Isometric strength training is highly effective and efficient. Regeneration is so quick, that you can easily practice it every second day.",
    "Using the newly developed ISO chain by Dragon Door, you'll manage a workout worth one hour of traditional strength training in merely 15 minutes. A short warm up and cool down and you are set.",
    "The perfect option if you are short on time but still want to do something for your body.",
    "The ISO chain can also be integrated in the custom tailored personal training sessions. The longer sessions also sport movement and relaxation training for a more holistic experience.",
  ],
  de: [
    "Isometrisches Krafttraining ist hoch effektiv und effizient. Die Regeneration ist dabei so schnell, dass es locker jeden zweiten Tag durchgeführt werden kann.",
    "Mit Hilfe von Dragon Doors neu entwickelter ISO-Chain schaffen wir in 15 Minuten ein Workout, welches mit traditionellem Krafttraining eine Stunde dauern würde. Dazu kommen ein kurzes Warm-Up und Cool-Down.",
    "Die perfekte Option wenn Du es mal eilig hast und trotzdem etwas für Deinen Körper tun willst.",
    "Die ISO-Chain kann in das individuelle Personal Training ebenfalls integriert werden. Die längere Session ergänzt das Training mit Bewegungs- und Entspannungstraining auf ein runderes Paket.",
  ],
}

export const products = [
  {
    en: {
      pricing: "90 € / session",
      fullPrice: "in rates of 840 € per month",
      description: ["2x per week", "anual subscription"],
      title: "Sustainable full throttle",
      details: [twicePerWeekCommonTexts.en, ...annualProductsCommonTexts.en],
      slug: "two-sessions-per-week-anual-subscription",
    },
    de: {
      pricing: "90 € / Einheit",
      fullPrice: "Zahlung monatlich 840 €",
      description: ["2x pro Woche", "Laufzeit ein Jahr"],
      title: "Nachhaltig Gas geben",
      details: [twicePerWeekCommonTexts.de, ...annualProductsCommonTexts.de],
      slug: "zwei-einheiten-pro-woche-jahresabo",
    },
  },
  {
    en: {
      pricing: "100 € / session",
      fullPrice: "in rates of 466 € per month",
      description: ["1x per week", "anual subscription"],
      title: "Sustainably energized",
      details: [oncePerWeekCommonTexts.en, ...annualProductsCommonTexts.en],
      slug: "one-session-per-week-anual-subscription",
    },
    de: {
      pricing: "100 € / Einheit",
      fullPrice: "Zahlung monatlich 466 €",
      description: ["1x pro Woche", "Laufzeit ein Jahr"],
      title: "Nachhaltiger Energieschub",
      details: [oncePerWeekCommonTexts.de, ...annualProductsCommonTexts.de],
      slug: "eine-einheit-pro-woche-jahresabo",
    },
  },
  {
    en: {
      pricing: "110 € / session",
      fullPrice: "in rates of 1026 € per month",
      description: ["2x per week", "3 months subscription"],
      title: "Full throttle",
      details: [
        twicePerWeekCommonTexts.en,
        ...subscriptionProductsCommonTexts.en,
      ],
      slug: "two-sessions-per-week-three-months-subscription",
    },
    de: {
      pricing: "110 € / Einheit",
      fullPrice: "Zahlung monatlich 1026 €",
      description: ["2x pro Woche", "Laufzeit 3 Monate"],
      title: "Gas geben",
      details: [
        twicePerWeekCommonTexts.de,
        ...subscriptionProductsCommonTexts.de,
      ],
      slug: "zwei-einheiten-pro-woche-drei-monats-abo",
    },
  },
  {
    en: {
      pricing: "120 € / session",
      fullPrice: "in rates of 560 € per month",
      description: ["1x per week", "3 months subscription"],
      title: "Get energized",
      details: [
        oncePerWeekCommonTexts.en,
        ...subscriptionProductsCommonTexts.en,
      ],
      slug: "one-session-per-week-three-months-subscription",
    },
    de: {
      pricing: "120 € / Einheit",
      fullPrice: "Zahlung monatlich 560 €",
      description: ["1x pro Woche", "Laufzeit 3 Monate"],
      title: "Energieschub",
      details: [
        oncePerWeekCommonTexts.de,
        ...subscriptionProductsCommonTexts.de,
      ],
      slug: "eine-einheit-pro-woche-drei-monats-abo",
    },
  },
  {
    en: {
      pricing: "120 € / session",
      fullPrice: "1200 € up front",
      description: ["1200 € including preparation dialogue"],
      title: "10 sessions",
      details: [
        "After 10 training sessions you will see first results if you exercise twice a week.",
        "A good mode can also be to come by the studio once a week and supplement your training with another session at home. That way I'll accompany you for a whole 2½ month on your path.",
        ...packageProductsCommonTexts.en,
        "With the package deal you safe money while still having the felxibility to organise your training sessions however fits best into your schedule.",
      ],
      slug: "ten-sessions-package-deal",
    },
    de: {
      pricing: "120 € / Einheit",
      fullPrice: "1200 € im Voraus",
      description: ["1200 € inklusive Anamnesegespräch"],
      title: "10er Paket",
      details: [
        "Nach 10 Trainingseinheiten siehst Du bereits erste Erfolge, wenn Du 5 Wochen lang 2x die Woche zum Training kommst.",
        "Ein guter Modus kann auch sein, dass Du 1x pro Woche im Studio trainierst und Dein Training noch mit einer Einheit ergänzt, die Du zu Hause durchführst. So begleite ich Dich ganze 2½ Monate auf Deinem Trainingsweg.",
        ...packageProductsCommonTexts.de,
        "Beim Paketangebot sparst Du und bewahrst Dir dennoch die Flexibilität Deine Trainingseinheiten frei zu verteilen.",
      ],
      slug: "zehner-paket",
    },
  },
  {
    en: {
      pricing: "130 € / session",
      fullPrice: "650 € up front",
      description: ["650 € including preparation dialogue"],
      title: "5 sessions",
      details: [
        "Five session build a good knowledge foundation. Afterwards you know everything to rocket start your training.",
        "You can also come by a few times to get your form checked and your workout plan optimised.",
        ...packageProductsCommonTexts.en,
      ],
      slug: "five-sessions-package-deal",
    },
    de: {
      pricing: "130 € / Einheit",
      fullPrice: "650 € im Voraus",
      description: ["650 € inklusive Anamnesegespräch"],
      title: "5er Paket",
      details: [
        "Fünf Trainingseinheiten eignen sich gut dazu Trainingsgrundlagen zu schaffen. Danach hast Du alles an der Hand um allein durchzustarten.",
        "Denkbar ist auch, dass Du in regelmäßigen Abständen für ein Check-Up vorbeischaust. Dann überprüfen wir Deine Form und passen Deinen Trainingsplan an Deine Fortschritte an.",
        ...packageProductsCommonTexts.de,
      ],
      slug: "fuenfer-paket",
    },
  },
  {
    en: {
      pricing: "140 € / session",
      fullPrice: "140 € up front",
      description: ["full felxibility", "personalized workout"],
      title: "Single Session",
      details: [
        "The single session provides the possibility to do a few sessions without a big commitment.",
        "Other options would be to create a personal workout plan to follow along on your own or reviewing your training progress and adapting an existing plan.",
        requirementDialog.en,
      ],
      slug: "single-session",
    },
    de: {
      pricing: "140 € / Einheit",
      fullPrice: "140 € im Voraus",
      description: ["Volle Flexibilität", "persönlicher Trainingsplan"],
      title: "Einzeleinheit",
      details: [
        "Die Einzelstunde bietet Dir die Möglichkeit völlig ungebunden erstmal ein paar Trainingseinheiten durchzuführen.",
        "Auch die Erstellung eines persönlichen Trainingsplans für ein später selbst durchgeführtes Training oder die Überprüfung Deiner Trainingserfolge und eine entsprechende Anpassung des aktuellen Trainingsplans können im Rahmen von Einzelstunden erfolgen.",
        requirementDialog.de,
      ],
      slug: "einzeleinheit",
    },
  },
  {
    en: {
      pricing: "40 € / session",
      fullPrice: "40 € each extended session",
      description: ["extend your booked session by 30 minutes"],
      title: "Extra Time",
      details: [
        "You need a more intense strength training? Adding a longer mobility part sounds good? If you want to address more topics or train more intensely in a specific direction, you can extend an already booked session.",
        "Please make clear you need extra time when setting the appointment, so I can modify the session accordingly. It can also be booked reoccuring for a package or subscription.",
      ],
      slug: "extra-time",
    },
    de: {
      pricing: "40 € / Einheit",
      fullPrice: "40 € je verlängerter Einheit",
      description: ["je 30 Minuten Verlängerung für eine gebuchte Einheit"],
      title: "Zusatzzeit",
      details: [
        "Richtig intensives Krafttraining? Noch einen Mobilitypart dazu? Wenn Du mehr Themenfelder abdecken oder intensiver trainieren möchtest, kannst Du eine bereits gebuchte Einheite für einen günstigen Stundenpreis verlängern.",
        "Bitte gib die Verlängerung bei der Terminabsprache an, damit ich die Einheit richtig einplanen kann. Zusatzzeit kann auch dauerhaft für eines der Pakete oder Abos gebucht werden.",
      ],
      slug: "zusatzzeit",
    },
  },
  {
    en: {
      pricing: "40 € / session",
      fullPrice: "in rates of 373 € per month",
      description: [
        "strength in only 30 minutes",
        "2x per week",
        "annual subscription",
      ],
      title: "Power Workout",
      details: [...powerWorkoutCommonTexts.en, ...annualProductsCommonTexts.en],
      slug: "power-workout-anual-subscription",
    },
    de: {
      pricing: "40 € / Einheit",
      fullPrice: "Zahlung monatlich 373 €",
      description: [
        "Kraftaufbau in nur 30 Minuten",
        "2x pro Woche",
        "Laufzeit 1 Jahr",
      ],
      title: "Power Workout",
      details: [...powerWorkoutCommonTexts.de, ...annualProductsCommonTexts.de],
      slug: "power-workout-jahresabo",
    },
  },
  {
    en: {
      pricing: "50 € / session",
      fullPrice: "in rates of 466 € per month",
      description: [
        "strength in only 30 minutes",
        "2x per week",
        "3 months subscription",
      ],
      title: "Power Workout",
      details: [
        ...powerWorkoutCommonTexts.en,
        ...subscriptionProductsCommonTexts.en,
      ],
      slug: "power-workout-three-months-subscription",
    },
    de: {
      pricing: "50 € / Einheit",
      fullPrice: "Zahlung monatlich 466 €",
      description: [
        "Kraftaufbau in nur 30 Minuten",
        "2x pro Woche",
        "Laufzeit 3 Monate",
      ],
      title: "Power Workout",
      details: [
        ...powerWorkoutCommonTexts.de,
        ...subscriptionProductsCommonTexts.de,
      ],
      slug: "power-workout-drei-monats-abo",
    },
  },
  {
    en: {
      pricing: "40 € once",
      fullPrice: "one time 40 € up front",
      description: ["Try it first"],
      title: "Introduction Workout",
      details: [
        "Trust and sympathy are key factors for successful personal training. A test session (after a brief dialogue about your goals) is the perfect opportunity to get to know each other and see if we're a fit.",
        "Or maybe you don't even know if you want to engage in personal training and want to see what the benefits are with a general test training session.",
      ],
      slug: "introduction-workout",
    },
    de: {
      pricing: "40 € einmalig",
      fullPrice: "Einmalig 40 € im Voraus",
      description: ["Kennenlernen und ausprobieren"],
      title: "Probetraining",
      details: [
        "Vertrauen und Sympathie sind Schlüsselelemente für ein erfolgreiches Personal Training. Ein Testtraining nach einer kurzen Absprache der Ziele, bietet die ideale Möglichkeit um sich kennenzulernen und zu schauen ob die Chemie stimmt.",
        "Vielleicht weißt Du aber auch noch gar nicht ob Personal Training überhaupt etwas für Dich ist und willst Dich durch ein allgemeines Testtraining davon überzeugen.",
      ],
      slug: "probetraining",
    },
  },
  // {
  //   en: {
  //     pricing: "40 €",
  //     fullPrice: "40 €",
  //     description: ["for body weight strength training"],
  //     title: "Online Workout Plan",
  //     details: [
  //       "You don't mind training on your own and know exactly what you want to achieve, but you lack the idea of how to traing strength and muscle building effectively? Then all you need is a good workout plan.",
  //       "After syncing with each other online, I'll set up a workout plan that can be done with simple equipment at home. A pull up bar and rings are benefitial for your performance but not necessarily required.",
  //     ],
  //     slug: "online-workout-plan",
  //   },
  //   de: {
  //     pricing: "40 €",
  //     fullPrice: "40 €",
  //     description: ["für Dein Body Weight Krafttraining zu Hause"],
  //     title: "Trainingsplan (online)",
  //     details: [
  //       "Du hast kein Problem damit Dich zum Training zu motivieren und hast auch schon eine Idee was Du erreichen möchtest? Dir fehlt jedoch die richtige Idee wie Du effektiv Kraft und Muskelaufbau trainieren kannst?",
  //       "Dann brauchst Du vielleicht nur den richtigen Trainingsplan.",
  //       "Nach einem kurzen online Austausch per Mail, baue ich Dir einen Trainingsplan zusammen der mit einfachen Mitteln auch zu Hause umgesetzt werden kann. Von Vorteil für Deine Performance (aber nicht zwingend notwendig) sind eine Klimmzugstange oder Ringe.",
  //     ],
  //     slug: "online-trainingsplan",
  //   },
  // },
  {
    en: {
      pricing: "price by arrangement",
      fullPrice: "price by arrangement",
      description: ["workshops and special pricing"],
      title: "Company offer",
      details: [
        "For companies we offer workshops and special pricing for employee perks.",
      ],
      slug: "company-offer",
    },
    de: {
      pricing: "Preise auf Anfrage",
      fullPrice: "Preise auf Anfrage",
      description: ["Workshops und Sonderkonditionen"],
      title: "Firmenangebote",
      details: [
        "Für Firmen bieten wir spezielle Workshops und Sonderkonditionen für Belegschaftspakete.",
      ],
      slug: "firmenangebot",
    },
  },
]
