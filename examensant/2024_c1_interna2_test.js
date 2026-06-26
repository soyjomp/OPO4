const TEST_ID = "2024_c1_interna2_test"; 
const questions = [
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb l’article 15 del Reial decret legislatiu 5/2015, de 30 d’octubre, pel qual s’aprova el Text refós de la Llei de l’estatut bàsic de l’empleat públic, els empleats públics tenen el dret individual que s’exerceix col·lectivament següent:",
    number: 1,
    answers: [
      { text: "A l’exercici de la vaga, amb la garantia del manteniment dels serveis essencials de la comunitat.", correct: true },
      { text: "A les vacances, descansos, permisos i llicències.", correct: false },
      { text: "A rebre protecció eficaç en matèria de seguretat i salut en el travail.", correct: false },
      { text: "A la lliure associació professional.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb l’article 14 del Text refós de la Llei de l’estatut bàsic de l’empleat públic, aprovat pelo Reial decret legislatiu 5/2015, de 30 d’octubre, el dret a participar en la consecució dels objectius atribuïts a la unitat on presta els seus serveis i a ser informat pels seus superiors de les tasques que ha de dur a terme, es considera:",
    number: 2,
    answers: [
      { text: "Un dret de caràcter individual exercit de forma col·lectiva.", correct: false },
      { text: "Un deure dels empleats públics.", correct: false },
      { text: "Un dret de caràcter individual.", correct: true },
      { text: "Un dret de caràcter retributiu.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb l’article 94 del Text refós de la Llei de l’estatut bàsic de l’empleat públic, aprovat pel Reial decret legislatiu 5/2015, de 30 d’octubre, quin dels principis següents no forma part de l’exercici de la potestat disciplinària de les administracions públiques?",
    number: 3,
    answers: [
      { text: "Principi de legalitat i tipicitat de les faltes i sancions, a través de la predeterminació normativa o, en el cas del personal laboral, dels convenis col·lectius.", correct: false },
      { text: "Principi d’irretroactivitat de les disposicions sancionadores favorables i de retroactivitat de les desfavorables al presumpte infractor.", correct: true },
      { text: "Principi de proporcionalitat, aplicable tant a la classificació de les infraccions i sancions com a la seva aplicació.", correct: false },
      { text: "Principi de culpabilitat.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb l’article 16.1 de la Llei 39/2015 d’1 d’octubre, del procediment administratiu comú de les administracions públiques, els organismes públics vinculats o dependents de cada Administració poden disposar del seu propi registre electrònic?",
    number: 4,
    answers: [
      { text: "Sí, i ha de ser plenament interoperable i interconnectat amb el registre electrònic general de l’Administració de la qual depèn.", correct: true },
      { text: "Sí, i ha de ser plenament interoperable i interconnectat amb el registre electrònic general de qualsevol Administració.", correct: false },
      { text: "No, els organismes públics vinculats o dependents de cada Administració no poden disposar del seu propi registre electrònic.", correct: false },
      { text: "Sí, però no cal que sigui plenament interoperable ni interconnectat amb el registre electrònic general de l’Administració de la qual depèn.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb le Decret 76/2020, de 4 d’agost, d’Administració digital, s’entén per digitalització:",
    number: 5,
    answers: [
      { text: "El procés de conversió d'un document en suport paper en una representació digital mitjançant un conjunt de dispositius, programari i procediments. Però tenint en compte que la còpia resultant no té les mateixes garanties d'autenticitat, integritat i disponibilitat que el document original.", correct: false },
      { text: "El procés de conversió d'un document en suport paper en un altre document en suport paper mitjançant un conjunt de dispositius, programari i procediments de manera que la còpia resultant té les mateixes garanties d'autenticitat, integritat i disponibilitat que el document original.", correct: false },
      { text: "El procés de conversió d'un document en suport paper en una representació digital fet amb una fotocopiadora.", correct: false },
      { text: "El procés de conversió d'un document en suport paper en una representació digital mitjançant un conjunt de dispositius, programari i procediments de manera que la còpia resultant té les mateixes garanties d'autenticitat, integritat i disponibilitat que el document original.", correct: true }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb l’article 63.2 del Decret 76/2020, de 4 d’agost, d’Administració digital, amb caràcter general, el termini per destruir els documents originals que hagin estat digitalitzats és de:",
    number: 6,
    answers: [
      { text: "Tres mesos a comptar des de la digitalització, a excepció que l'òrgan responsable de la gestió documental i arxivística estableixi un altre termini.", correct: true },
      { text: "Dos mesos a comptar des de la digitalització, a excepció que l'òrgan responsable de la gestió documental i arxivística estableixi un altre termini.", correct: false },
      { text: "Quatre mesos a comptar des de la digitalització, a excepció que l'òrgan responsable de la gestió documental i arxivística estableixi un altre termini.", correct: false },
      { text: "Dinc mesos a comptar des de la digitalització, a excepció que l'òrgan responsable de la gestió documental i arxivística estableixi un altre termini.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb l’article 95 del Reial decret legislatiu 5/2015, de 30 d’octubre, pel qual s’aprova el Text refós de la Llei de l’Estatut bàsic de l’empleat públic, és una falta disciplinària molt greu:",
    number: 7,
    answers: [
      { text: "La reincidència en faltes lleus.", correct: false },
      { text: "La manca d'assistència al treball injustificada d'un dia.", correct: false },
      { text: "L’incompliment de l’obligació d’atendre els serveis essencials en cas de vaga.", correct: true },
      { text: "El retard, la negligència o el descuit en el compliment de les funcions.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb la Llei 11/1989, de 10 de juliol, de creació de l’Institut Català de les Dones, quina d’aquestes funcions no és una funció de l’Institut Català de les Dones?",
    number: 8,
    answers: [
      { text: "Garantir, en col·laboració amb els departaments afectats, la prestació de serveis específics a favor de les dones.", correct: false },
      { text: "Fomentar i coordinar la prestació de serveis de tot tipus a les dones, mitjançant l'establiment de convenis amb entitats públiques i privades.", correct: false },
      { text: "Dissenyar, impulsar i coordinar les polítiques a favor de la violència masclista.", correct: true },
      { text: "Dissenyar, coordinar i impulsar l'elaboració del Pla estratègic de polítiques d'igualtat de gènere del Govern de la Generalitat, i també fer-ne el seguiment i l'avaluació.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb la Llei 26/2015, de 28 de juliol, de modificació del sistema de protecció a la infància i l’adolescència, és un requisit per a l’accés i l’exercici a les professions, els oficis i les activitats que impliquin contacte habitual amb menors:",
    number: 9,
    answers: [
      { text: "Tenir més de 21 anys.", correct: false },
      { text: "L’aportació d’una certificació negativa del Registre central de delinqüents sexuals.", correct: true },
      { text: "L’aportació d’una certificació positiva del Registre central de delinqüents sexuals.", correct: false },
      { text: "L’aportació d’una declaració responsable de no haver estat condemnat per sentència ferma per algun delicte contra la llibertat i indemnitat sexual.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "En quin d’aquests objectius no es basen les polítiques públiques necessàries per assolir una societat igualitària i respectuosa amb els drets humans, segons el Pla de Govern de la XIV Legislatura?",
    number: 10,
    answers: [
      { text: "Limitar les polítiques de memòria, les conviccions democràtiques i la lluita contra el feixisme i la intolerància.", correct: true },
      { text: "Vetllar pel reconeixement i el respecte de la diferència i garantir la igualtat de tracte i la no discriminació en tots els àmbits.", correct: false },
      { text: "Promoure polítiques de garantia dels drets humans de totes les persones que viuen a Catalunya.", correct: false },
      { text: "Garantir la llibertat religiosa i de consciència així com també la convivència de les diferents esglésies, confessions i comunitats religioses.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb l’article 34.5 de la Llei 11/2014, del 10 d'octubre, per a garantir els drets de lesbianes, gais, bisexuals, transgèneres i intersexuals i per a eradicar l'homofòbia, la bifòbia i la transfòbia, convocar espectacles públics o activitats recreatives que tinguin com a objecte la incitació a l’odi, la violència o la discriminació de les persones LGBTI, sempre que no sigui constitutiu de falta o delicte, és una infracció administrativa:",
    number: 11,
    answers: [
      { text: "Lleu", correct: false },
      { text: "Greu", correct: false },
      { text: "Moderada", correct: false },
      { text: "Molt greu", correct: true }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "L’autoritat o funcionari públic que, sabent-ho, sostregui, destrueixi, inutilitzi o oculti, totalment o parcialment, documents la custòdia dels quals li estigui encomanada amb motiu del càrrec, incorre un delicte de:",
    number: 12,
    answers: [
      { text: "Infidelitat en la custòdia de documents i violació de secrets", correct: true },
      { text: "Custòdia indeguda", correct: false },
      { text: "Tràfic d’influències", correct: false },
      { text: "Odi", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "El funcionari públic o autoritat que influeixi en un altre funcionari públic o autoritat prevalent-se de l’exercici de les facultats del seu càrrec amb l’objectiu d’aconseguir una resolució que li pugui generar directament o indirectament un benefici econòmic per a si mateix o per a un tercer, incorre un delicte de:",
    number: 13,
    answers: [
      { text: "Suborn", correct: false },
      { text: "Prevaricació administrativa", correct: false },
      { text: "Tràfic d’influències", correct: true },
      { text: "Malversació", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb l’article 24 de la Llei orgànica 10/1995, de 23 de novembre, del codi penal, tothom qui per disposició immediata de la llei o per elecció o per nomenament d’una autoritat competent participi en l’exercici de funcions públiques, a l’efecte penal es considera:",
    number: 14,
    answers: [
      { text: "Autoritat", correct: false },
      { text: "Funcionari públic", correct: true },
      { text: "Ciutadà", correct: false },
      { text: "Treballador", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb l’article 439 de la Llei orgànica 10/1995, de 23 de novembre, del codi penal, l’autoritat o funcionari públic que hagi d’intervenir per raó del seu càrrec en qualsevol classe de contracte, assumpte, operació o activitat i s’aprofiti d’aquesta circumstància per forçar o facilitar-se qualsevol forma de participació, directa o per una persona interposada, en aquests negocis o actuacions incorre en:",
    number: 15,
    answers: [
      { text: "La pena de presó de dos a cinc anys, multa de dotze a vint-i-quatre mesos i inhabilitació especial per a ocupació o càrrec públic i per a l’exercici del dret de sufragi passiu per un temps de dos a set anys.", correct: false },
      { text: "La pena de presó de sis mesos a dos anys.", correct: false },
      { text: "La pena de presó de sis mesos a dos anys, multa de dotze a vint-i-quatre mesos i inhabilitació especial per a ocupació o càrrec públic i per a l’exercici del dret de sufragi passiu per un temps de dos a set anys.", correct: true },
      { text: "La inhabilitació especial per a ocupació o càrrec públic i per a l’exercici del dret de sufragi actiu per un temps de dos a set anys.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb l’article 43.2 del Decret 76/2020, de 4 d’agost, d’Administració digital, el Registre electrònic general...",
    number: 16,
    answers: [
      { text: "Assegura el compliment dels requisits i garanties d’integritat, seguretat, normalització i conservació de la documentació que s’hi presenta, des d’aquest moment fins que es lliura a l’òrgan competent.", correct: true },
      { text: "Assegura el compliment dels requisits i garanties d’integritat, seguretat, però no de normalització ni conservació de la documentació que s’hi presenta.", correct: false },
      { text: "Assegura el compliment dels requisits i garanties d’integritat, seguretat i normalització, pero no de conservació de la documentació que s’hi presenta.", correct: false },
      { text: "No assegura el compliment de requisits ni de garanties.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "El dret de la persona interessada a rebre les seves dades personals facilitades a un responsable del tractament en un format estructurat, d’ús comú i lectura mecànica, i a transmetre-les a un altre responsable sense que ho impedeixi el responsable al qual les havia facilitades, sempre que el tractament estigui basat en el consentiment o en un contracte i es porti a terme per mitjans telemàtics, és:",
    number: 17,
    answers: [
      { text: "El dret a la portabilitat de les dades.", correct: true },
      { text: "El dret a la transferència de les dades.", correct: false },
      { text: "El dret a la transmissió de les dades.", correct: false },
      { text: "El dret a la limitació del tractament.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb l’article 37 del Reglament (UE) 2016/679 del Parlament Europeu i del Consell, relatiu a la protecció de les persones físiques pel que fa al tractament de dades personals i a la lliure circulació d’aquestes dades, quina de les afirmacions següents sobre el delegat de protecció de dades és certa?",
    number: 18,
    answers: [
      { text: "El delegat de protecció de dades no pot formar part de la plantilla de l’encarregat del tractament.", correct: false },
      { text: "El delegat de protecció de dades no pot desenvolupar les seves funcions en el marc d’un contracte de serveis.", correct: false },
      { text: "El delegat de protecció de dades pot formar part de la plantilla del responsable o de l'encarregat del tractament o exercir les seves funcions en el marc d’un contracte de serveis.", correct: true },
      { text: "El delegat de protecció de dades sempre ha de formar part de la plantilla de l’encarregat del tractament.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb l’article 33 del Reglament (UE) 2016/679 del Parlament Europeu i del Consell, relatiu a la protecció de les persones físiques pel que fa al tractament de dades personals i a la lliure circulació d’aquestes dades, en cas d’una violació de seguretat de les dades personals, que pugui constituir un risc pels drets i llibertats de les persones físiques, el responsable del tractament:",
    number: 19,
    answers: [
      { text: "Haurà de notificar-la a l’autoritat de control competent a ser possible en un termini màxim de 72 hores després que n’hagi tingut constància.", correct: true },
      { text: "Haurà de notificar-la a l’autoritat de control competent a ser possible en un termini màxim de 24 hores després que n’hagi tingut constància.", correct: false },
      { text: "Haurà de notificar-la a l’autoritat de control competent a ser possible en un termini màxim de 48 hores després que n’hagi tingut constància.", correct: false },
      { text: "No haurà de notificar-la a l’autoritat de control competent en cap cas.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb la normativa vigent en matèria de protecció de dades, en relació amb el delegat de protecció de dades, quina de les afirmacions següents no és certa:",
    number: 20,
    answers: [
      { text: "Un grup empresarial podrà nomenar un únic delegat de protecció de dades sempre que sigui fàcilment accessible des de cada establiment.", correct: false },
      { text: "El responsable o l’encarregat del tractament no poden publicar les dades de contacte del delegat de protecció de dades, però sí que les han de comunicar a l’autoritat de control de manera confidencial.", correct: true },
      { text: "El delegat de protecció de dades serà designat atenent a les seves qualitats professionals i, en particular, als seus coneixements especialitzats del Dret i la pràctica en matèria de protecció de dades i la seva capacitat per portar a terme les funcions.", correct: false },
      { text: "Quan el responsable o l’encarregat del tractament sigui una autoritat o organisme públic, es podrà designar un único delegat de protecció de dades per a diverses d’aquestes autoritats o organismes, tenint en compte la seva estructura organitzativa i grandària.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "Quina de les funcionalitats següents no és pròpia del Onedrive?",
    number: 21,
    answers: [
      { text: "Emmagatzemar arxius al núvol.", correct: false },
      { text: "Crear documents en línia.", correct: false },
      { text: "Compartir i editar documents de treball en línia.", correct: false },
      { text: "Gestionar el correu electrònic.", correct: true }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "Quina de les següents no és una característica pròpia de l’emmagatzematge d’informació al núvol en comparació amb l’emmagatzematge local?",
    number: 22,
    answers: [
      { text: "Més protecció de la informació contra accidents ambientals (incendis, inundacions, etc.) i contra robatoris d’equipament en el domicili personal.", correct: false },
      { text: "Accés als arxius a qualsevol hora i des de qualsevol lloc, sempre que es tingui el dispositiu adequat i connexió a internet.", correct: false },
      { text: "Dependència exclusiva dels sistemes d’emmagatzematge físics del nostre propi ordinador.", correct: true },
      { text: "Possibilitat de configurar les dades a diferents nivells de privacitat (la informació pot ser pública, restringida a algunes persones o només accessible per part del propietari o propietària).", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "Quin dels següents no és un principi de les dades obertes?",
    number: 23,
    answers: [
      { text: "Les dades han d’estar actualitzades i ser comprensibles.", correct: false },
      { text: "Les dades han de ser comparables i interoperables.", correct: false },
      { text: "Les dades han de ser accessibles i fàcils d’utilitzar.", correct: false },
      { text: "Les dades han d’estar tractades i explotades estadísticament.", correct: true }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "La tècnica informàtica que consisteix a analitzar un gran volum d’informació emmagatzemada en diferents bases de dades a fi de deduir patrons de coneixement és:",
    number: 24,
    answers: [
      { text: "La mineria de dades.", correct: true },
      { text: "El data warehouse.", correct: false },
      { text: "El data lake.", correct: false },
      { text: "L’encriptació de dades.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "Què són les metadades?",
    number: 25,
    answers: [
      { text: "Les dades confidencials.", correct: false },
      { text: "Les dades secundàries.", correct: false },
      { text: "Les dades que donen informació sobre una altra dada.", correct: true },
      { text: "Les variables principals d’una base de dades.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "Quina de l’afirmacions següents relatives a l’ús per part d’empreses de bases de dades publicades al portal de dades obertes és correcta?",
    number: 26,
    answers: [
      { text: "Les empreses en cap cas poden fer ús de les bases de dades publicades al portal de dades obertes.", correct: false },
      { text: "Les empreses poden fer ús de les bases de dades publicades al portal de dades obertes únicament amb finalitat de consulta.", correct: false },
      { text: "Les empreses poden fer ús de les bases de dades publicades al portal de dades obertes únicament si en sol·liciten prèviament l’accés.", correct: false },
      { text: "Les empreses poden reutilitzar les bases de dades publicades al portal de dades obertes d’acord amb les llicències i els termes d’ús als quals es trobin subjectes aquestes bases de dades.", correct: true }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "Quin dels següents no és un benefici associat a l’ús de les dades obertes?",
    number: 27,
    answers: [
      { text: "Les dades obertes promouen la participació ciutadana.", correct: false },
      { text: "Les dades obertes faciliten la interoperabilitat entre les diferents administracions.", correct: false },
      { text: "Les dades obertes limiten l’accés a la informació pública per tal d’incrementar-ne la seguretat.", correct: true },
      { text: "Les dades obertes permeten generar un Govern més transparent.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb l’article 2 de la Llei 40/2015, d’1 d’octubre, de règim jurídic del sector públic, assenyaleu quina de les entitats següents té la consideració d’administració pública:",
    number: 28,
    answers: [
      { text: "La Universitat de Barcelona.", correct: false },
      { text: "Un organisme públic dependent de la Diputació de Lleida.", correct: true },
      { text: "Una entitat de dret privat vinculada a l’Administració de la Generalitat.", correct: false },
      { text: "La Universitat Ramon Llull.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "Segons la Constitució espanyola, les administracions públiques actuen d’acord amb els principis de:",
    number: 29,
    answers: [
      { text: "Descentralització, eficàcia, desconcentració, jerarquia i coordinació.", correct: true },
      { text: "Eficàcia, jerarquia, bona fe, descentralització i desconcentració.", correct: false },
      { text: "Transparència, jerarquia, descentralització, coordinació i desconcentració.", correct: false },
      { text: "Descentralització, confiança legítima, coordinació, jerarquia i eficàcia.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "Un advocat que actua com a representant d’una persona jurídica en un procediment administratiu no té el dret a:",
    number: 30,
    answers: [
      { text: "Conèixer l’estat de tramitació del procediment.", correct: false },
      { text: "Relacionar-se a través de mitjans no electrònics amb les administracions públiques.", correct: true },
      { text: "Identificar l’instructor o instructora del procediment.", correct: false },
      { text: "Obtenir una còpia autenticada d’un original que hagi presentat.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb l’article 18 de la Llei 19/2014, del 29 de desembre, de transparència, accés a la informació pública i bon govern, el dret d’accés a la informació pública:",
    number: 31,
    answers: [
      { text: "És condicionat a la concurrència d’un interès personal.", correct: false },
      { text: "Resta subjecte a motivació.", correct: false },
      { text: "Requereix la invocació d’alguna norma.", correct: false },
      { text: "Es pot exercir a partir dels setze anys.", correct: true }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb l’article 21 de la Llei 19/2014, del 29 de desembre, de transparència, accés a la informació pública i bon govern, el dret d’accés a la informació pública:",
    number: 32,
    answers: [
      { text: "Pot restringir-se si la informació té la condició de protegida i així ho estableix expressament una norma amb rang de decret.", correct: false },
      { text: "Pot restringir-se, però no denegar-se, si el coneixement o la divulgació de la informació comporta un perjudici per a la sanció de les infraccions administratives.", correct: false },
      { text: "Pot denegar-se o restringir-se si el coneixement o la divulgació de la informació comporta un perjudici per a la investigació d’una infracció disciplinària.", correct: true },
      { text: "No pot restringir-se si el coneixement o la divulgació de la informació comporta un perjudici a un dret privat legítim.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb l’article 4 de la Llei 39/2015, d’1 d’octubre, del procediment administratiu comú de les administracions públiques, es consideren interessats en un procediment administratiu:",
    number: 33,
    answers: [
      { text: "Qualssevol persones que el promoguin, sense ser titulars de drets o interessos legítims individuals o col·lectius.", correct: false },
      { text: "Aquells, els interessos legítims dels quals, individuals o col·lectius, puguin ser afectats per la resolució i es personin en el procediment una vegada s'hagi dictat la resolució definitiva.", correct: false },
      { text: "Els qui, sense haver iniciat el procediment, tinguin drets que puguin ser afectats per la decisió que s'adopti en aquest.", correct: true },
      { text: "Aquells els drets dels quals puguin ser afectats per la resolució, sense necessitat que es personin en el procediment.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb l’article 28 de la Llei 39/2015, d’1 d’octubre, del procediment administratiu comú de les administracions públiques, en relació amb l’aportació de documents per part de la persona interessada en el procediment administratiu, quina de les afirmacions següents és la correcta:",
    number: 34,
    answers: [
      { text: "Els interessats únicament tenen dret a no aportar documents que ja estiguin en poder de l’Administració actuant, però sí que els hauran d’aportar quan hagin estat elaborats per una Administració diferent a l’actuant.", correct: false },
      { text: "La persona interessada sempre està obligada a aportar la documentació exigida en el marc d’un procediment administratiu tot i que ja estigui en poder de l’Administració.", correct: false },
      { text: "Els interessats tenen dret a no aportar documents que ja estiguin en poder de l’Administració actuant o que hagi elaborat qualsevol altra Administració.", correct: true },
      { text: "Els interessats no poden aportar al procediment administratiu altres documents que no siguin els exigits per les administracions públiques d'acord amb el que disposa la normativa aplicable.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb l’article 58 de la Llei 39/2015, d’1 d’octubre, del procediment administratiu comú de les administracions públiques, en relació amb l’inici del procediment administratiu, assenyaleu quina de les afirmacions següents no és correcta:",
    number: 35,
    answers: [
      { text: "El procediment es pot iniciar d’ofici per denúncia.", correct: false },
      { text: "El procediment es pot iniciar d’ofici a sol·licitud de la persona interessada.", correct: true },
      { text: "El procediment es pot iniciar d’ofici per petició raonada d’altres òrgans.", correct: false },
      { text: "El procediment es pot iniciar d’ofici com a conseqüència d’una ordre superior.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb l’article 80 de la Llei 39/2015, d’1 d’octubre, del procediment administratiu comú de les administracions públiques, llevat de disposició expressa en contra, els informes són:",
    number: 36,
    answers: [
      { text: "Preceptius i vinculants.", correct: false },
      { text: "Preceptius i no vinculants.", correct: false },
      { text: "Facultatius i vinculants.", correct: false },
      { text: "Facultatius i no vinculants.", correct: true }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb l’article 80 de la Llei 39/2015, d’1 d’octubre, del procediment administratiu comú de les administracions públiques, per regla general, els informes s’han d’emetre en el termini de:",
    number: 37,
    answers: [
      { text: "Trenta dies", correct: false },
      { text: "Vint dies", correct: false },
      { text: "Quinze dies", correct: false },
      { text: "Deu dies", correct: true }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "Un ofici és:",
    number: 38,
    answers: [
      { text: "Un document que s'usa per a comunicar continguts relacionats amb la tramitació d'un expedient.", correct: true },
      { text: "Un document intern que acredita l'execució d'un tràmit.", correct: false },
      { text: "Un document en què es fa constar oficialment el contingut d’un registre.", correct: false },
      { text: "Un document interpersonal de contingut general, no previst en la tramitació d’un procediment administratiu.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "Assenyaleu quin dels elements següents no forma part de l’estructura d’una diligència:",
    number: 39,
    answers: [
      { text: "Capçalera", correct: false },
      { text: "Nucli", correct: false },
      { text: "Datació", correct: false },
      { text: "Destinatari", correct: true }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "En relació amb l’estructura de l’acta d’una reunió i pel que fa als assistents, quina de les afirmacions següents és la correcta:",
    number: 40,
    answers: [
      { text: "Els assistents a la reunió s’han de fer constar al final del document, darrera dels acords.", correct: false },
      { text: "No s’hi ha de fer constar el nom de les persones convocades que no hi han assistit.", correct: false },
      { text: "És irrellevant quina posició ocupi el nom de la persona que ha presidit la reunió.", correct: false },
      { text: "S’hi ha de fer constar el nom i els cognoms de les persones que hi han assistit, seguits del càrrec.", correct: true }
    ]
  },
    {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "L’estructura següent: capçalera > destinatari > nucli > signatura electrònica > informacions addicionals >, correspon al model de document administratiu de:",
    number: 41,
    answers: [
      { text: "Carta", correct: false },
      { text: "Diligència", correct: false },
      { text: "Informe", correct: false },
      { text: "Citació", correct: true }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "Un ús del llenguatge que fa difícil imaginar en un àmbit determinat la presència o l’actuació de les dones és un llenguatge:",
    number: 42,
    answers: [
      { text: "Sexista", correct: false },
      { text: "Genèric", correct: false },
      { text: "Androcèntric", correct: true },
      { text: "Misogin", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb l’article 55.4 del Decret 76/2020, de 4 d’agost, d’Administració digital, les persones interessades no obligades a la comunicació electrònica que no disposin dels mitjans d’identificació o signatura electrònica en el procediment administratiu...",
    number: 43,
    answers: [
      { text: "Poden identificar-se i signar mitjançant el sistema de signatura electrònica de qualsevol funcionari, encara que no estigui habilitat, de les oficines d'atenció presencial amb funcions d'assistència en matèria de registre. Per a aquesta actuació, les persones interessades s'han d'identificar davant el funcionari i prestar el seu consentiment exprés.", correct: false },
      { text: "Poden identificar-se i signar mitjançant el sistema de signatura electrònica dels funcionaris habilitats de les oficines d'atenció presencial amb funcions d'assistència en matèria de registre. Per a aquesta actuació, les persones interessades s'han d'identificar davant el funcionari i prestar el seu consentiment exprés.", correct: true },
      { text: "Poden identificar-se i signar mitjançant el sistema de signatura electrònica dels funcionaris habilitats de les oficines d'atenció presencial amb funcions d'assistència en matèria de registre. Per a aquesta actuació, les persones interessades no cal que s’identifiquin davant el funcionari ni que prestin el seu consentiment exprés.", correct: false },
      { text: "Poden identificar-se i signar mitjançant el sistema de signatura electrònica de qualsevol funcionari, encara que no estigui habilitat, de les oficines d'atenció presencial amb funcions d'assistència en matèria de registre. Per a aquesta actuació, les persones interessades no s'han d'identificar davant el funcionari ni prestar el seu consentiment exprés.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D'acord amb el Decret 232/2013, de 15 d’octubre, pel qual es crea la Seu electrònica, quina de les afirmacions següents és la correcta en relació amb la Seu electrònica?",
    number: 44,
    answers: [
      { text: "És l’espai electrònic on hi ha disponible de forma no integrada la informació, els serveis i els tràmits electrònics de l’Administració de la Generalitat. Es regeix per la data i l’hora oficials a Catalunya.", correct: false },
      { text: "És l’espai electrònic on hi ha disponible de forma integrada la informació, els serveis i els tràmits electrònics de l’Administració de la Generalitat. Es regeix per la data i l’hora oficials a Catalunya.", correct: true },
      { text: "És l’espai electrònic on hi ha disponible de forma no integrada la informació, els serveis i els tràmits electrònics de l’Administració de la Generalitat. Es regeix per la data i l’hora oficials a l’Estat espanyol.", correct: false },
      { text: "És l’espai electrònic on hi ha disponible de forma integrada la informació, els serveis i els tràmits electrònics de l’Administració de la Generalitat. Es regeix per la data i l’hora oficials a la Unió Europea.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb l’article 16.3 del Decret 76/2020, de 4 d’agost, d’Administració digital, l’intercanvi de dades mitjançant les plataformes d’interoperabilitat:",
    number: 45,
    answers: [
      { text: "Garanteix la seguretat de la informació que es transmet, però no proporciona mesures per a l’autenticitat.", correct: false },
      { text: "No garanteix la seguretat de la informació que es transmet, i tampoc proporciona mesures per a l’autenticitat.", correct: false },
      { text: "Garanteix la seguretat de la informació que es transmet, i proporciona mesures per a l’autenticitat.", correct: true },
      { text: "La interoperabilitat no és un sistema que permeti l’intercanvi de dades.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "Pel que fa a l’arxiu electrònic de documents, d’acord amb l’article 46.1 de la Llei 40/2015, d’1 d’octubre, de règim jurídic del sector públic, os documents utilitzats en les actuacions administratives:",
    number: 46,
    answers: [
      { text: "S’han d’emmagatzemar per mitjans electrònics, excepte quan no sigui possible.", correct: true },
      { text: "S’han d’emmagatzemar per mitjans físics, excepte quan no sigui possible.", correct: false },
      { text: "S’han d’emmagatzemar per mitjans electrònics, sempre.", correct: false },
      { text: "S’han d’emmagatzemar per mitjans electrònics o físics, és indiferent.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "A qui correspon la titularitat de la seu electrònica, d’acord amb l’article 38.1 de la Llei 40/2015, d’1 d’octubre, de règim jurídic del sector públic?",
    number: 47,
    answers: [
      { text: "A una sola Administració pública en exclusiva.", correct: false },
      { text: "A una Administració pública, o bé a un o diversos organismes públics o entitats de dret públic en l’exercici de les seves competències.", correct: true },
      { text: "A una Administració pública, o bé a un o diversos organismes públics o entitats de dret privat en l’exercici de les seves competències.", correct: false },
      { text: "A una entitat privada, o bé a un o diversos organismes públics o entitats de dret públic en l’exercici de les seves competències.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "En relació amb el dret i l’obligació de relacionar-se electrònicament amb les administracions públiques establerts a l’article 14 de la Llei 39/2015, d’1 d’octubre, del procediment administratiu comú de les administracions públiques, les persones físiques:",
    number: 48,
    answers: [
      { text: "Estan sempre obligades a relacionar-se a través de mitjans electrònics amb les administracions públiques per efectuar qualsevol tràmit d’un procediment administratiu.", correct: false },
      { text: "Poden escollir en tot moment si es comuniquen amb les administracions públiques a través de mitjans electrònics o no, llevat que estiguin obligades a relacionar-s'hi a través de mitjans electrònics. També poden en qualsevol moment modificar el mitjà escollit per comunicar-se.", correct: true },
      { text: "Poden escollir en tot moment si es comuniquen amb les administracions públiques a través de mitjans electrònics o no, llevat que estiguin obligades a relacionar-s'hi a través de mitjans electrònics. Però no poden posteriorment modificar el mitjà escollit per comunicar-se.", correct: false },
      { text: "Estan obligades a relacionar-se a través de mitjans no electrònics amb les administracions públiques per efectuar qualsevol tràmit d’un procediment administratiu.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb l’article 14 de la Llei 39/2015, d’1 d’octubre, del procediment administratiu comú de les administracions públiques, les persones jurídiques estan obligades a relacionar-se a través de mitjans electrònics amb les administracions públiques?",
    number: 49,
    answers: [
      { text: "Sí, sempre.", correct: true },
      { text: "No, mai.", correct: false },
      { text: "Només si així ho decideix la persona jurídica.", correct: false },
      { text: "Sí, i pot canviar d’opinió en qualsevol moment i a partir d’aleshores relacionar-s’hi de manera no electrònica.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb l’article 36 del Decret 76/2020, de 4 d'agost, d'Administració digital, què comprèn l’accés omnicanal de l’Administració de la Generalitat de Catalunya?",
    number: 50,
    answers: [
      { text: "Els canals presencial i telefònic.", correct: false },
      { text: "Només el canal digital.", correct: false },
      { text: "Els canals telefònic i digital.", correct: false },
      { text: "Els canals presencial, telefònic i digital.", correct: true }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb l’article 26.3 de la Llei 39/2015, d’1 d’octubre, del procediment administratiu comú de les administracions públiques, quina de les afirmacions següents és correcta en relació amb la signatura electrònica dels documents emesos per les administracions públiques?",
    number: 51,
    answers: [
      { text: "Tots els documents emesos per les administracions publiques requereixen signatura electrònica, sense excepcions.", correct: false },
      { text: "Cap document emès per les administracions públiques requereix signatura electrònica.", correct: false },
      { text: "No requereixen signatura electrònica els documents electrònics emesos per les administracions públiques que es publiquin amb caràcter merament informatiu, així com els que no formin part d’un expedient administratiu.", correct: true },
      { text: "Només requereixen signatura electrònica els documents electrònics emesos per les administracions públiques que es publiquin amb caràcter merament informatiu, així com els que no formin part d’un expedient administratiu.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "D’acord amb l’article 41 de la Llei 26/2010, del 3 d'agost, de règim jurídic i de procediment de les administracions públiques de Catalunya, quina de les afirmacions següents és la correcta en relació amb els registres administratius?",
    number: 52,
    answers: [
      { text: "Els òrgans de les administracions públiques catalanes han de disposar d’un registre general d’entrada de documents i, si escau, dels registres auxiliars que es considerin necessaris.", correct: false },
      { text: "Els òrgans de les administracions públiques catalanes han de disposar d’un registre general d’entrada i sortida de documents i cap registre auxiliar.", correct: false },
      { text: "Els òrgans de les administracions públiques catalanes han de disposar d’un registre general d’entrada i sortida de documents i, si escau, dels registres auxiliars que es considerin necessaris.", correct: true },
      { text: "Els òrgans de les administracions públiques catalanes han de disposar d’un registre general de sortida de documents i, si escau, dels registres auxiliars que es considerin necessaris.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "El Registre electrònic general es pot consultar a la Seu electrònica de l’Administració de la Generalitat i, d’acord amb l’article 44 del Decret 76/2020 de 4 d'agost, d'Administració digital,:",
    number: 53,
    answers: [
      { text: "Admet la presentació de sol·licituds, escrits i comunicacions únicament en horari de dilluns a divendres de 9 h a 14 h.", correct: false },
      { text: "Admet la presentació de sol·licituds, escrits i comunicacions únicament en horari de dilluns a dissabte de 9 h a 14 h.", correct: false },
      { text: "Admet la presentació de sol·licituds, escrits i comunicacions tots els dies de l’any durant les vint-i-quatre hores.", correct: true },
      { text: "Admet la presentació de sol·licituds, escrits i comunicacions tots els dies de l’any únicament en horari de 9 h a 14 h.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "Segons l’article 39 del Decret 76/2020, de 4 d’agost, d’Administració digital, les oficines d’atenció presencial es classifiquen en:",
    number: 54,
    answers: [
      { text: "Oficines d’atenció ciutadana, i punts de registre i digitalització.", correct: true },
      { text: "Oficines d’atenció ciutadana i oficines de registre contenciós.", correct: false },
      { text: "Punts de registre i digitalització i oficines d’atenció empresarial.", correct: false },
      { text: "Oficines d’atenció empresarial, punts de registre i digitalització, i oficines d’atenció al públic.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 2",
    question: "Els documents amb caràcter d'original en suport paper que hagin estat digitalitzats d'acord amb el que preveu el Decret 76/2020, de 4 d’agost, d’Administració digital...",
    number: 55,
    answers: [
      { text: "S'han de destruir sempre.", correct: false },
      { text: "No s’han de destruir mai.", correct: false },
      { text: "El Decret 76/2020, de 4 d’agost, no regula la destrucció de documents.", correct: false },
      { text: "S'han de destruir si compleixen algun dels requeriments establerts al mateix Decret 76/2020, de 4 d’agost.", correct: true }
    ]
  },
];


// Lògica del Test (Funcions iguals a les teves però adaptades)
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function renderTest() {
  const form = document.getElementById("test-form");
  form.innerHTML = "";
  let currentQuestions;
  const savedOrder = localStorage.getItem(`questions-${TEST_ID}`);
  
  if (savedOrder) {
    currentQuestions = JSON.parse(savedOrder);
  } else {
    currentQuestions = questions.map(q => ({
      ...q,
      answers: shuffleArray([...q.answers])
    }));
    currentQuestions = shuffleArray(currentQuestions);
    localStorage.setItem(`questions-${TEST_ID}`, JSON.stringify(currentQuestions));
  }

  const savedProgress = JSON.parse(localStorage.getItem(`progress-${TEST_ID}`)) || { respuestas: {} };

  currentQuestions.forEach((q, index) => {
    const questionWrapper = document.createElement("div");
    questionWrapper.className = "question";
    questionWrapper.id = `q-container-${index}`;

    const title = document.createElement("h3");
    title.textContent = `${index + 1}. ${q.question}`;
    questionWrapper.appendChild(title);

    const answersWrapper = document.createElement("div");
    answersWrapper.className = "answers";

    q.answers.forEach((a) => {
      const label = document.createElement("label");
      label.className = "answer";
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q${index}`;
      input.value = a.text;
      input.dataset.correct = a.correct;
      
      if (savedProgress.respuestas[`q${index}`] === a.text) {
        input.checked = true;
      }

      label.appendChild(input);
      label.appendChild(document.createTextNode(a.text));
      answersWrapper.appendChild(label);
    });

    questionWrapper.appendChild(answersWrapper);
    form.appendChild(questionWrapper);

    if (savedProgress.respuestas[`q${index}`]) {
        autoCheckAnswer(questionWrapper);
    }
  });

  updateResponseCounter();
}

function autoCheckAnswer(questionEl) {
  const labels = questionEl.querySelectorAll("label");
  labels.forEach(label => {
    const input = label.querySelector("input");
    if (input.checked) {
      label.classList.add(input.dataset.correct === "true" ? "correct" : "incorrect");
    } else {
      label.classList.remove("correct", "incorrect");
    }
  });
}

function updateResponseCounter() {
  const currentQuestions = JSON.parse(localStorage.getItem(`questions-${TEST_ID}`));
  if (!currentQuestions) return;
  const total = currentQuestions.length;
  
  const selectedInputs = document.querySelectorAll("input[type=radio]:checked");
  const selectedCount = selectedInputs.length;

  let correctCount = 0;
  let incorrectCount = 0;

  selectedInputs.forEach(input => {
    if (input.dataset.correct === "true") {
      correctCount++;
    } else {
      incorrectCount++;
    }
  });

  document.getElementById("response-counter").textContent = `📄 Respostes: ${selectedCount}/${total}`;
  document.getElementById("correct-counter").textContent = `✅ Encerts: ${correctCount}`;
  document.getElementById("incorrect-counter").textContent = `❌ Errors: ${incorrectCount}`;
  
  document.getElementById("progress").style.width = `${(selectedCount / total) * 100}%`;

  const respuestas = {};
  selectedInputs.forEach(input => { respuestas[input.name] = input.value; });
  localStorage.setItem(`progress-${TEST_ID}`, JSON.stringify({ total: total, respuestas: respuestas }));
}

function evaluateTest() {
  const questionsDOM = document.querySelectorAll(".question");
  let correctCount = 0;
  let total = questionsDOM.length;

  questionsDOM.forEach((questionEl) => {
    const inputCorrecto = questionEl.querySelector('input[data-correct="true"]');
    const inputMarcado = questionEl.querySelector('input:checked');
    questionEl.querySelectorAll("label").forEach(l => l.classList.remove("correct", "incorrect"));
    inputCorrecto.parentElement.classList.add("correct");

    if (inputMarcado) {
      if (inputMarcado.dataset.correct === "true") correctCount++;
      else inputMarcado.parentElement.classList.add("incorrect");
    }
  });

  const fallos = total - correctCount;
  const nota = ((correctCount / total) * 10).toFixed(2);
  const aprobado = fallos <= 5;

  const scoreDiv = document.getElementById("score");
  scoreDiv.style.display = "block";
  if (aprobado) {
    scoreDiv.innerHTML = `<h2>✅ MISSIÓ COMPLERTA</h2> Nota: ${nota}/10 <br> Errors: ${fallos}`;
    scoreDiv.style.background = "#dcfce7";
    scoreDiv.style.color = "#166534";
  } else {
    scoreDiv.innerHTML = `<h2>❌ GAME OVER</h2> Nota: ${nota}/10 <br> Errors: ${fallos} <br> (Màxim permès: 5)`;
    scoreDiv.style.background = "#fee2e2";
    scoreDiv.style.color = "#991b1b";
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function reiniciarTest() {
    if (confirm("Vols reiniciar la missió? L'ordre de les preguntes canviarà.")) {
        localStorage.removeItem(`questions-${TEST_ID}`);
        localStorage.removeItem(`progress-${TEST_ID}`);
        location.reload();
    }
}

document.addEventListener("change", (e) => {
  if (e.target.matches("input[type=radio]")) {
    updateResponseCounter();
    autoCheckAnswer(e.target.closest(".question"));
  }
});

document.getElementById("submit").addEventListener("click", evaluateTest);
window.addEventListener("DOMContentLoaded", renderTest);