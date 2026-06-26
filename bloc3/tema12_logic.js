const TEST_ID = "tema12"; 
const questions = [
  {
    question: "Què és la seu electrònica segons la Llei 40/2015?",
    number: 1,
    answers: [
      { text: "L'adreça electrònica disponible per als ciutadans a través de xarxes de telecomunicacions.", correct: true },
      { text: "L'ordinador personal de cada funcionari.", correct: false },
      { text: "Un servidor privat de correu electrònic.", correct: false },
      { text: "Un espai físic habilitat a les oficines de registre.", correct: false }
    ]
  },
  {
    question: "La titularitat de la seu electrònica correspon:",
    number: 2,
    answers: [
      { text: "A l'Administració Pública, òrgan o entitat titular.", correct: true },
      { text: "A l'empresa de programari que la gestiona.", correct: false },
      { text: "Al Departament d'Informàtica, exclusivament.", correct: false },
      { text: "A qualsevol ciutadà que la consulti.", correct: false }
    ]
  },
  {
    question: "L'actuació administrativa automatitzada és aquella realitzada:",
    number: 3,
    answers: [
      { text: "Íntegrament per mitjans electrònics sense intervenció humana directa.", correct: true },
      { text: "Pel funcionari de forma manual a l'ordinador.", correct: false },
      { text: "Mitjançant l'ús de signatures manuscrites.", correct: false },
      { text: "Per un robot físic a les dependències administratives.", correct: false }
    ]
  },
  {
    question: "Quin sistema s'utilitza per a l'actuació administrativa automatitzada?",
    number: 4,
    answers: [
      { text: "Segell electrònic d'Administració Pública o codi segur de verificació.", correct: true },
      { text: "La signatura manual del secretari.", correct: false },
      { text: "El segell de goma oficial.", correct: false },
      { text: "La contrasenya personal del cap de servei.", correct: false }
    ]
  },
  {
    question: "La interoperabilitat en el context electrònic significa:",
    number: 5,
    answers: [
      { text: "La capacitat dels sistemes d'intercanviar informació i utilitzar-la.", correct: true },
      { text: "La impossibilitat de connectar dos ordinadors diferents.", correct: false },
      { text: "La prohibició d'usar programari lliure.", correct: false },
      { text: "L'obligació de fer servir sempre el mateix ordinador.", correct: false }
    ]
  },
  {
    question: "Què és un sistema d'identificació de les administracions públiques?",
    number: 6,
    answers: [
      { text: "Segell electrònic basat en certificat electrònic reconegut.", correct: true },
      { text: "El logotip de la Generalitat al paper.", correct: false },
      { text: "El nom de l'administració al sobre.", correct: false },
      { text: "La targeta d'identificació del funcionari.", correct: false }
    ]
  },
  {
    question: "Com s'ha de garantir l'autenticitat dels documents electrònics en l'arxiu?",
    number: 7,
    answers: [
      { text: "Mitjançant tècniques de signatura electrònica i metadades.", correct: true },
      { text: "Fotocopiats en paper.", correct: false },
      { text: "Desant-los en una carpeta compartida sense seguretat.", correct: false },
      { text: "Guardant-los en un CD de forma manual.", correct: false }
    ]
  },
  {
    question: "L'intercanvi electrònic de dades en entorns tancats es caracteritza per:",
    number: 8,
    answers: [
      { text: "Garantir la seguretat i confidencialitat de la informació transferida.", correct: true },
      { text: "Ser accessible per a qualsevol persona d'Internet.", correct: false },
      { text: "No utilitzar cap tipus de signatura.", correct: false },
      { text: "Ser totalment ineficient.", correct: false }
    ]
  },
  {
    question: "La signatura electrònica del personal al servei de l'Administració pot ser:",
    number: 9,
    answers: [
      { text: "Certificat electrònic de personal empleat públic.", correct: true },
      { text: "Una foto escanejada de la signatura.", correct: false },
      { text: "Una paraula clau escrita a la paret.", correct: false },
      { text: "El número de DNI escrit al document.", correct: false }
    ]
  },
  {
    question: "Quina funció té el Portal d'Internet?",
    number: 10,
    answers: [
      { text: "Punt d'accés que permet l'accés a la informació i serveis públics.", correct: true },
      { text: "L'única via legal per tramitar expedients sancionadors.", correct: false },
      { text: "Un espai reservat només per a polítics.", correct: false },
      { text: "Una xarxa interna de telefonia.", correct: false }
    ]
  },
  {
    question: "L'arxiu electrònic de documents ha de garantir:",
    number: 11,
    answers: [
      { text: "La conservació, integritat i disponibilitat dels documents.", correct: true },
      { text: "Que ningú pugui consultar mai els documents.", correct: false },
      { text: "La destrucció automàtica de dades cada mes.", correct: false },
      { text: "L'accés lliure a tots els documents classificats.", correct: false }
    ]
  },
  {
    question: "Què permet el Codi Segur de Verificació (CSV)?",
    number: 12,
    answers: [
      { text: "Comprovar la integritat i autenticitat d'un document electrònic.", correct: true },
      { text: "Canviar les dades de la resolució a voluntat.", correct: false },
      { text: "Accedir al compte bancari de l'interessat.", correct: false },
      { text: "Bloquejar l'accés a la seu electrònica.", correct: false }
    ]
  },
  {
    question: "L'assegurament de la signatura electrònica s'encarrega de:",
    number: 13,
    answers: [
      { text: "Garantir la seva validesa i vigència durant el període de conservació.", correct: true },
      { text: "Que el fitxer ocupi menys espai.", correct: false },
      { text: "Que el funcionari no pugui signar massa documents.", correct: false },
      { text: "Fer-la més bonica estèticament.", correct: false }
    ]
  },
  {
    question: "L'ús de mitjans electrònics per part de l'Administració ha de respectar:",
    number: 14,
    answers: [
      { text: "El principi de neutralitat tecnològica.", correct: true },
      { text: "El principi de prioritat de les eines de pagament.", correct: false },
      { text: "El principi d'obligatorietat del paper.", correct: false },
      { text: "El principi de secretisme digital.", correct: false }
    ]
  },
  {
    question: "Quina norma regula el funcionament electrònic del sector públic a nivell estatal?",
    number: 15,
    answers: [
      { text: "Llei 40/2015, de règim jurídic del sector públic.", correct: true },
      { text: "Llei de procediment civil.", correct: false },
      { text: "Llei d'educació.", correct: false },
      { text: "La Constitució Europea.", correct: false }
    ]
  },
  {
    question: "La seu electrònica s'ha d'identificar mitjançant:",
    number: 16,
    answers: [
      { text: "Certificat de seu electrònica o segell electrònic.", correct: true },
      { text: "El logotip de l'empresa proveïdora.", correct: false },
      { text: "Un simple títol a la pàgina web.", correct: false },
      { text: "Una adreça de correu gmail.", correct: false }
    ]
  },
  {
    question: "L'actuació automatitzada ha de ser:",
    number: 17,
    answers: [
      { text: "Prèviament definida per l'Administració.", correct: true },
      { text: "Aleatòria i inesperada.", correct: false },
      { text: "Decretada en cada moment pel funcionari.", correct: false },
      { text: "Amagada als interessats.", correct: false }
    ]
  },
  {
    question: "En l'actuació automatitzada, qui és el responsable?",
    number: 18,
    answers: [
      { text: "L'òrgan competent.", correct: true },
      { text: "L'enginyer informàtic.", correct: false },
      { text: "El ciutadà que rebi la notificació.", correct: false },
      { text: "L'empresa de serveis de núvol.", correct: false }
    ]
  },
  {
    question: "Què s'entén per segell electrònic?",
    number: 19,
    answers: [
      { text: "Un tipus de signatura electrònica per a persones jurídiques o òrgans.", correct: true },
      { text: "Un segell de goma físic escanejat.", correct: false },
      { text: "Una imatge de marca personal.", correct: false },
      { text: "Un codi de barres d'un producte.", correct: false }
    ]
  },
  {
    question: "Què permet l'intercanvi electrònic de dades?",
    number: 20,
    answers: [
      { text: "L'accés a dades entre diferents administracions per evitar tràmits.", correct: true },
      { text: "La publicació de dades personals en xarxes socials.", correct: false },
      { text: "L'eliminació de qualsevol control de seguretat.", correct: false },
      { text: "El pagament de taxes mitjançant missatges de text.", correct: false }
    ]
  },
  {
    question: "Què significa que la seu electrònica sigui un 'punt d'accés'?",
    number: 21,
    answers: [
      { text: "Que és la porta d'entrada per als serveis públics electrònics.", correct: true },
      { text: "Que només s'hi pot entrar amb cita prèvia física.", correct: false },
      { text: "Que és un lloc per comprar productes oficials.", correct: false },
      { text: "Que és una botiga d'aplicacions mòbils.", correct: false }
    ]
  },
  {
    question: "La signatura electrònica del personal públic s'utilitza per:",
    number: 22,
    answers: [
      { text: "Identificar l'autor de l'acte administratiu.", correct: true },
      { text: "Jugar a videojocs a la feina.", correct: false },
      { text: "Canviar l'horari laboral sense permís.", correct: false },
      { text: "Accedir a informació confidencial d'altres persones sense motiu.", correct: false }
    ]
  },
  {
    question: "Com es garanteix la integritat dels documents a l'arxiu electrònic?",
    number: 23,
    answers: [
      { text: "Mitjançant sistemes que detectin qualsevol alteració.", correct: true },
      { text: "Guardant-los en un disc dur extern sense claus.", correct: false },
      { text: "Imprimint-los cada dia.", correct: false },
      { text: "Confiant en la memòria del funcionari.", correct: false }
    ]
  },
  {
    question: "L'interoperabilitat s'estructura en diversos nivells, un d'ells és:",
    number: 24,
    answers: [
      { text: "Organitzatiu.", correct: true },
      { text: "Físic (fusteria).", correct: false },
      { text: "Emocional.", correct: false },
      { text: "Publicitari.", correct: false }
    ]
  },
  {
    question: "El certificat electrònic de personal empleat públic ha d'incloure:",
    number: 25,
    answers: [
      { text: "El nom, cognoms i número d'identificació de l'empleat.", correct: true },
      { text: "La signatura manuscrita digitalitzada.", correct: false },
      { text: "L'adreça de casa seva.", correct: false },
      { text: "El seu compte de facebook.", correct: false }
    ]
  },
  {
    question: "L'actuació automatitzada ha d'estar disponible a:",
    number: 26,
    answers: [
      { text: "La seu electrònica corresponent.", correct: true },
      { text: "En un arxiu físic al soterrani.", correct: false },
      { text: "Al mòbil personal del ciutadà.", correct: false },
      { text: "En una pàgina web externa no oficial.", correct: false }
    ]
  },
  {
    question: "Què és un document electrònic?",
    number: 27,
    answers: [
      { text: "Informació de qualsevol naturalesa en suport electrònic.", correct: true },
      { text: "Un llibre imprès en paper reciclat.", correct: false },
      { text: "Una fotografia feta amb càmera analògica.", correct: false },
      { text: "Un registre verbal gravat en una cinta de casset.", correct: false }
    ]
  },
  {
    question: "L'Administració ha de facilitar l'accés a la seu electrònica:",
    number: 28,
    answers: [
      { text: "Durant les 24 hores del dia, 7 dies a la setmana.", correct: true },
      { text: "Només quan el funcionari està a la oficina.", correct: false },
      { text: "Només de dilluns a divendres en horari laboral.", correct: false },
      { text: "Només si es paga una taxa addicional.", correct: false }
    ]
  },
  {
    question: "La validesa de la signatura electrònica depèn de:",
    number: 29,
    answers: [
      { text: "La confiança en el certificat i l'entitat emissora.", correct: true },
      { text: "La velocitat de l'Internet de l'usuari.", correct: false },
      { text: "L'opinió del cap de servei.", correct: false },
      { text: "La qualitat del monitor de l'ordinador.", correct: false }
    ]
  },
  {
    question: "L'arxiu electrònic ha de permetre:",
    number: 30,
    answers: [
      { text: "La recuperació de documents al llarg del temps.", correct: true },
      { text: "Que els documents desapareguin per fer espai.", correct: false },
      { text: "La modificació lliure de les dades.", correct: false },
      { text: "La consulta pública per part de qualsevol persona sense permisos.", correct: false }
    ]
  },
  {
    question: "Com s'assegura que un document electrònic no ha estat modificat?",
    number: 31,
    answers: [
      { text: "Mitjançant signatura electrònica i empremta digital.", correct: true },
      { text: "Tancant-lo en una carpeta amb contrasenya simple.", correct: false },
      { text: "Mirant-lo sovint per veure si canvia.", correct: false },
      { text: "Fent una còpia en un USB que pot fallar.", correct: false }
    ]
  },
  {
    question: "Què és un entorn tancat de comunicació?",
    number: 32,
    answers: [
      { text: "Una xarxa amb mesures de seguretat que restringeix l'accés.", correct: true },
      { text: "Un correu electrònic obert a tothom.", correct: false },
      { text: "Un bar on es reuneixen els polítics.", correct: false },
      { text: "Una pàgina web d'informació turística.", correct: false }
    ]
  },
  {
    question: "La signatura electrònica garanteix:",
    number: 33,
    answers: [
      { text: "L'autenticitat, integritat i no repudi.", correct: true },
      { text: "La velocitat de descàrrega de fitxers.", correct: false },
      { text: "Que el fitxer sigui molt lleuger.", correct: false },
      { text: "Que es pugui obrir en qualsevol programa.", correct: false }
    ]
  },
  {
    question: "L'Administració ha de garantir la protecció de dades en:",
    number: 34,
    answers: [
      { text: "Totes les actuacions i arxius electrònics.", correct: true },
      { text: "Cap, ja que no hi ha dades personals.", correct: false },
      { text: "Només quan se'ls recorda des de la UE.", correct: false },
      { text: "Només en les comunicacions internes.", correct: false }
    ]
  },
  {
    question: "Un certificat electrònic caducat:",
    number: 35,
    answers: [
      { text: "No és vàlid per signar.", correct: true },
      { text: "Funciona millor per la seva antiguitat.", correct: false },
      { text: "Només serveix per a documents poc importants.", correct: false },
      { text: "Es renova automàticament sense avisar.", correct: false }
    ]
  },
  {
    question: "Els sistemes d'identificació de les administracions poden incloure:",
    number: 36,
    answers: [
      { text: "Segell electrònic.", correct: true },
      { text: "Una signatura a mà alçada.", correct: false },
      { text: "Un segell de goma digitalitzat.", correct: false },
      { text: "El número de telèfon de l'usuari.", correct: false }
    ]
  },
  {
    question: "L'actuació automatitzada ha d'estar publicada a:",
    number: 37,
    answers: [
      { text: "La seu electrònica corresponent.", correct: true },
      { text: "Al Diari Oficial, només si el cap vol.", correct: false },
      { text: "En cap lloc, és interna.", correct: false },
      { text: "Al tauler d'anuncis físic.", correct: false }
    ]
  },
  {
    question: "L'interoperabilitat facilita:",
    number: 38,
    answers: [
      { text: "La cooperació entre Administracions.", correct: true },
      { text: "L'aïllament informàtic.", correct: false },
      { text: "L'ús exclusiu de papers.", correct: false },
      { text: "La competència deslleial.", correct: false }
    ]
  },
  {
    question: "Què s'arxiva electrònicament?",
    number: 39,
    answers: [
      { text: "Documents i expedients administratius.", correct: true },
      { text: "Fotos de les vacances del personal.", correct: false },
      { text: "Musica i vídeos privats.", correct: false },
      { text: "Correu brossa.", correct: false }
    ]
  },
  {
    question: "La seu electrònica és:",
    number: 40,
    answers: [
      { text: "Responsabilitat de l'Administració titular.", correct: true },
      { text: "Responsabilitat del ciutadà.", correct: false },
      { text: "Responsabilitat de la premsa.", correct: false },
      { text: "De ningú en concret.", correct: false }
    ]
  },
  {
    question: "L'actuació automatitzada s'usa per:",
    number: 41,
    answers: [
      { text: "Gestionar volums grans de tràmits.", correct: true },
      { text: "Redactar cartes personals.", correct: false },
      { text: "Fer informes creatius.", correct: false },
      { text: "Prendre decisions polítiques personals.", correct: false }
    ]
  },
  {
    question: "La signatura electrònica pot ser utilitzada per:",
    number: 42,
    answers: [
      { text: "Empleats públics i ciutadans (segons el cas).", correct: true },
      { text: "Només pel President.", correct: false },
      { text: "Només pels tècnics informàtics.", correct: false },
      { text: "Per tothom sense certificat.", correct: false }
    ]
  },
  {
    question: "Què permet el certificat de seu?",
    number: 43,
    answers: [
      { text: "Identificar la seu i establir comunicacions segures.", correct: true },
      { text: "Accedir al compte de l'empleat.", correct: false },
      { text: "Fer publicitat de la seu.", correct: false },
      { text: "Cap funció especial.", correct: false }
    ]
  },
  {
    question: "L'arxiu electrònic ha de complir amb:",
    number: 44,
    answers: [
      { text: "La normativa sobre patrimoni documental.", correct: true },
      { text: "Només amb la normativa de moda.", correct: false },
      { text: "Cap normativa especial.", correct: false },
      { text: "Les regles de cada departament.", correct: false }
    ]
  },
  {
    question: "Què es necessita per accedir a la seu?",
    number: 45,
    answers: [
      { text: "Mitjans d'accés i identificació vàlids.", correct: true },
      { text: "Ser funcionari obligatòriament.", correct: false },
      { text: "Pagar una entrada.", correct: false },
      { text: "Tenir una clau de metall.", correct: false }
    ]
  },
  {
    question: "Què protegeix l'intercanvi electrònic?",
    number: 46,
    answers: [
      { text: "La integritat de les dades.", correct: true },
      { text: "L'ocultació d'informació.", correct: false },
      { text: "La destrucció de dades.", correct: false },
      { text: "El retard de les dades.", correct: false }
    ]
  },
  {
    question: "Què és un certificat electrònic?",
    number: 47,
    answers: [
      { text: "Document signat per un prestador que vincula dades d'identificació.", correct: true },
      { text: "Un títol universitari digital.", correct: false },
      { text: "Una targeta de crèdit.", correct: false },
      { text: "Un missatge de salutació.", correct: false }
    ]
  },
  {
    question: "L'actuació automatitzada ha de complir amb:",
    number: 48,
    answers: [
      { text: "La legalitat vigent.", correct: true },
      { text: "La conveniència personal.", correct: false },
      { text: "Cap normativa.", correct: false },
      { text: "El que digui el cap.", correct: false }
    ]
  },
  {
    question: "La interoperabilitat és:",
    number: 49,
    answers: [
      { text: "Una obligació legal de les AAPP.", correct: true },
      { text: "Una opció lliure i voluntària.", correct: false },
      { text: "Una prohibició estatal.", correct: false },
      { text: "Una idea sense importància.", correct: false }
    ]
  },
  {
    question: "Com s'assegura la signatura electrònica?",
    number: 50,
    answers: [
      { text: "Mitjançant la validació dels certificats.", correct: true },
      { text: "Fent servir signatures antigues.", correct: false },
      { text: "Escrivint el nom a mà.", correct: false },
      { text: "No es pot assegurar.", correct: false }
    ]
  },
  {
    question: "La seu electrònica pot contenir:",
    number: 51,
    answers: [
      { text: "Serveis, tràmits i informació.", correct: true },
      { text: "Només enllaços a jocs.", correct: false },
      { text: "Fotos sense relació amb l'AAPP.", correct: false },
      { text: "Dades de tercers sense permís.", correct: false }
    ]
  },
  {
    question: "Què és el segell electrònic?",
    number: 52,
    answers: [
      { text: "Signatura d'una administració.", correct: true },
      { text: "Signatura d'un ciutadà.", correct: false },
      { text: "Una eina per tallar paper.", correct: false },
      { text: "Un segell de correus.", correct: false }
    ]
  },
  {
    question: "L'actuació automatitzada permet:",
    number: 53,
    answers: [
      { text: "Agilitzar el procediment.", correct: true },
      { text: "Complicar les coses.", correct: false },
      { text: "Perdre documents.", correct: false },
      { text: "Fer tràmits il·legals.", correct: false }
    ]
  },
  {
    question: "Qui estableix les condicions de seguretat?",
    number: 54,
    answers: [
      { text: "L'Administració en la seva política de seguretat.", correct: true },
      { text: "Cadascú al seu gust.", correct: false },
      { text: "No hi ha condicions.", correct: false },
      { text: "Les empreses privades.", correct: false }
    ]
  },
  {
    question: "La seu electrònica ha de ser accessible?",
    number: 55,
    answers: [
      { text: "Sí, per a tothom.", correct: true },
      { text: "Només per a experts.", correct: false },
      { text: "No, és restringida.", correct: false },
      { text: "Només en horari d'oficina.", correct: false }
    ]
  },
  {
    question: "Què permet l'arxiu?",
    number: 56,
    answers: [
      { text: "Gestionar els documents de forma segura.", correct: true },
      { text: "Esborrar-ho tot.", correct: false },
      { text: "Perdre'n el control.", correct: false },
      { text: "Guardar-los al calaix.", correct: false }
    ]
  },
  {
    question: "La signatura permet:",
    number: 57,
    answers: [
      { text: "Identificar l'autor.", correct: true },
      { text: "Amagar l'identitat.", correct: false },
      { text: "Fer tràmits anònims.", correct: false },
      { text: "No fer res.", correct: false }
    ]
  },
  {
    question: "L'intercanvi de dades és:",
    number: 58,
    answers: [
      { text: "Un eix del funcionament electrònic.", correct: true },
      { text: "Una molèstia innecessària.", correct: false },
      { text: "Una opció perillosa.", correct: false },
      { text: "Prohibit per llei.", correct: false }
    ]
  },
  {
    question: "L'actuació automatitzada:",
    number: 59,
    answers: [
      { text: "Està subjecta a control.", correct: true },
      { text: "No té cap control.", correct: false },
      { text: "És lliure.", correct: false },
      { text: "És secreta.", correct: false }
    ]
  },
  {
    question: "La seu és:",
    number: 60,
    answers: [
      { text: "La referència per als ciutadans.", correct: true },
      { text: "Una distracció.", correct: false },
      { text: "Inexistent.", correct: false },
      { text: "Opcional.", correct: false }
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
  
  document.getElementById("response-counter").textContent = `Respostes: ${selectedCount}/${total}`;
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