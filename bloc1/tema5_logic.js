const TEST_ID = "tema5"; 
const questions = [
  {
    question: "Segons el RGPD, quin és el termini general per donar resposta a una sol·licitud d'exercici de drets?",
    number: 1,
    answers: [
      { text: "15 dies.", correct: false },
      { text: "Un mes.", correct: true },
      { text: "Dos mesos.", correct: false },
      { text: "Tres mesos.", correct: false }
    ]
  },
  {
    question: "Com ha de ser el consentiment per al tractament de dades personals?",
    number: 2,
    answers: [
      { text: "Lliure, específic, informat i inequívoc.", correct: true },
      { text: "Explícit i sempre per escrit.", correct: false },
      { text: "General i tàcit.", correct: false },
      { text: "Només verbal.", correct: false }
    ]
  },
  {
    question: "Quina de les següents NO és una categoria especial de dades?",
    number: 3,
    answers: [
      { text: "Les dades d'afiliació sindical.", correct: false },
      { text: "Les dades relatives a la salut.", correct: false },
      { text: "L'adreça de correu electrònic professional.", correct: true },
      { text: "L'origen ètnic o racial.", correct: false }
    ]
  },
  {
    question: "El Delegat de Protecció de Dades (DPD) és obligatori en el sector públic?",
    number: 4,
    answers: [
      { text: "Sí, en tots els casos.", correct: true },
      { text: "Només si el tractament és a gran escala.", correct: false },
      { text: "No, és opcional.", correct: false },
      { text: "Només si ho decideix el Síndic de Greuges.", correct: false }
    ]
  },
  {
    question: "Qui ha de notificar una violació de seguretat a l'autoritat de control?",
    number: 5,
    answers: [
      { text: "L'interessat.", correct: false },
      { text: "El Delegat de Protecció de Dades.", correct: false },
      { text: "El responsable del tractament.", correct: true },
      { text: "L'encarregat del tractament de forma autònoma.", correct: false }
    ]
  },
  {
    question: "Quin és el termini per notificar una violació de seguretat a l'autoritat de control?",
    number: 6,
    answers: [
      { text: "72 hores.", correct: true },
      { text: "48 hores.", correct: false },
      { text: "Un mes.", correct: false },
      { text: "Deu dies hàbils.", correct: false }
    ]
  },
  {
    question: "El dret a la portabilitat de les dades es pot exercir quan:",
    number: 7,
    answers: [
      { text: "El tractament es basa en el consentiment o en un contracte.", correct: true },
      { text: "El tractament és necessari per a l'exercici de poders públics.", correct: false },
      { text: "El tractament es realitza en paper.", correct: false },
      { text: "El responsable es nega a esborrar les dades.", correct: false }
    ]
  },
  {
    question: "Quina és una mesura de seguretat bàsica en el tractament de dades?",
    number: 8,
    answers: [
      { text: "La pseudonimització i el xifrat.", correct: true },
      { text: "La publicació de totes les dades al web.", correct: false },
      { text: "La destrucció de tots els documents cada 24 hores.", correct: false },
      { text: "L'ús de contrasenyes compartides.", correct: false }
    ]
  },
  {
    question: "El principi de 'responsabilitat proactiva' (accountability) suposa:",
    number: 9,
    answers: [
      { text: "L'obligació d'adoptar mesures per demostrar que es compleix el RGPD.", correct: true },
      { text: "Que el ciutadà s'ha d'informar sol.", correct: false },
      { text: "Que les sancions les paga el DPD Delegat de protecció de dades.", correct: false },
      { text: "Que el tractament ha de ser sempre manual.", correct: false }
    ]
  },
  {
    question: "Dins del dret d'informació, què s'ha d'especificar al moment de recollir les dades?",
    number: 10,
    answers: [
      { text: "La identitat del responsable i la finalitat del tractament.", correct: true },
      { text: "El sou de tots els treballadors de l'entitat.", correct: false },
      { text: "L'historial acadèmic del DPD.", correct: false },
      { text: "Els noms de tots els usuaris del fitxer.", correct: false }
    ]
  },
  {
    question: "El dret de supressió (dret a l'oblit) NO s'aplica quan:",
    number: 11,
    answers: [
      { text: "El tractament és necessari per exercir el dret a la llibertat d'informació.", correct: true },
      { text: "L'interessat retira el consentiment.", correct: false },
      { text: "Les dades ja no són necessàries.", correct: false },
      { text: "El tractament ha estat il·lícit.", correct: false }
    ]
  },
  {
    question: "La notificació de la violació de seguretat als interessats es farà quan:",
    number: 12,
    answers: [
      { text: "La violació comporti un alt risc per als seus drets i llibertats.", correct: true },
      { text: "La violació sigui detectada, sense valorar el risc.", correct: false },
      { text: "Només si la violació afecta a més de 1.000 persones.", correct: false },
      { text: "En tots els casos de violació de seguretat.", correct: false }
    ]
  },
  {
    question: "Quina funció té l'encarregat del tractament?",
    number: 13,
    answers: [
      { text: "Tractar dades per compte del responsable.", correct: true },
      { text: "Decidir els fins del tractament.", correct: false },
      { text: "Exercir l'autoritat de control.", correct: false },
      { text: "Ser el titular de les dades.", correct: false }
    ]
  },
  {
    question: "L'avaluació d'impacte (EIPD) és obligatòria quan:",
    number: 14,
    answers: [
      { text: "El tractament comporti un alt risc per als drets i llibertats.", correct: true },
      { text: "L'empresa vol contractar un nou empleat.", correct: false },
      { text: "Es vol canviar el logotip del departament.", correct: false },
      { text: "Es tracten dades de clients en paper.", correct: false }
    ]
  },
  {
    question: "Què és la minimització de dades?",
    number: 15,
    answers: [
      { text: "Recollir només les dades adequades, pertinents i limitades.", correct: true },
      { text: "Recollir el mínim de dades possible en format paper.", correct: false },
      { text: "Recollir dades de menors d'edat.", correct: false },
      { text: "Esborrar les dades un cop a l'any.", correct: false }
    ]
  },
  {
    question: "En quin cas NO cal que el DPD (Delegat de protecció de dades) estigui a l'organització?",
    number: 16,
    answers: [
      { text: "Sempre és obligatori en l'administració pública.", correct: true },
      { text: "Si l'organització és petita.", correct: false },
      { text: "Si el tractament és molt segur.", correct: false },
      { text: "Si no hi ha dades de salut.", correct: false }
    ]
  },
  {
    question: "Com s'ha de garantir la seguretat en els accessos a dades?",
    number: 17,
    answers: [
      { text: "Mitjançant el control d'identitat i privilegis (perfils d'accés).", correct: true },
      { text: "Deixant la porta de l'oficina oberta.", correct: false },
      { text: "Compartint les contrasenyes per evitar pèrdues.", correct: false },
      { text: "Publicant les claus al portal de transparència.", correct: false }
    ]
  },
  {
    question: "El dret a la limitació del tractament implica que:",
    number: 18,
    answers: [
      { text: "Les dades han de quedar bloquejades.", correct: true },
      { text: "Les dades han de ser esborrades immediatament.", correct: false },
      { text: "Només es pot accedir a les dades des de l'oficina.", correct: false },
      { text: "Les dades deixen de ser personals.", correct: false }
    ]
  },
  {
    question: "Quina és la funció de l'autoritat de control (ex: APDCAT)?",
    number: 19,
    answers: [
      { text: "Vetllar pel compliment del RGPD i sancionar.", correct: true },
      { text: "Tractar les dades dels ciutadans.", correct: false },
      { text: "Substituir al DPD de cada entitat.", correct: false },
      { text: "Gestionar els arxius físics.", correct: false }
    ]
  },
  {
    question: "Si hi ha una bretxa de seguretat, l'encarregat ha de:",
    number: 20,
    answers: [
      { text: "Notificar-ho al responsable del tractament sense dilació.", correct: true },
      { text: "Notificar-ho directament a l'autoritat de control.", correct: false },
      { text: "Notificar-ho als afectats immediatament.", correct: false },
      { text: "No fer res si el risc és baix.", correct: false }
    ]
  },
  {
    question: "Els drets de l'interessat es poden exercir de forma:",
    number: 21,
    answers: [
      { text: "Gratuïta.", correct: true },
      { text: "Costejada per l'interessat.", correct: false },
      { text: "Només mitjançant advocat.", correct: false },
      { text: "Pagant una taxa administrativa.", correct: false }
    ]
  },
  {
    question: "Què és la pseudonimització?",
    number: 22,
    answers: [
      { text: "Tractament que impedeix atribuir les dades a l'interessat sense informació extra.", correct: true },
      { text: "L'anonimització total i irreversible.", correct: false },
      { text: "El canvi de nom de les dades del fitxer.", correct: false },
      { text: "Un tipus de contracte de seguretat.", correct: false }
    ]
  },
  {
    question: "Dins l'administració, quina base legitima el tractament de dades?",
    number: 23,
    answers: [
      { text: "L'exercici d'una missió realitzada en interès públic.", correct: true },
      { text: "L'ànim de lucre.", correct: false },
      { text: "L'opinió dels ciutadans.", correct: false },
      { text: "El consentiment en tots els casos.", correct: false }
    ]
  },
  {
    question: "El  (Delegat de protecció de dades) ha de ser un funcionari obligatòriament?",
    number: 24,
    answers: [
      { text: "No, pot ser personal propi o un contractista extern.", correct: true },
      { text: "Sí, obligatòriament funcionari de carrera.", correct: false },
      { text: "No, ha de ser un informàtic.", correct: false },
      { text: "Sí, ha de ser un càrrec directiu.", correct: false }
    ]
  },
  {
    question: "El principi de 'confidencialitat' implica que:",
    number: 25,
    answers: [
      { text: "Les dades només poden ser conegudes per persones autoritzades.", correct: true },
      { text: "Les dades no poden ser guardades en ordinadors.", correct: false },
      { text: "Les dades han de ser públiques per seguretat.", correct: false },
      { text: "Tots els funcionaris poden accedir a tot.", correct: false }
    ]
  },
  {
    question: "Què passa si una sol·licitud d'exercici de drets és manifestament infundada o excessiva?",
    number: 26,
    answers: [
      { text: "Es pot cobrar un cànon o negar-se a actuar.", correct: true },
      { text: "S'ha d'atendre obligatòriament.", correct: false },
      { text: "S'ha d'enviar a l'autoritat de control.", correct: false },
      { text: "No es pot rebutjar mai.", correct: false }
    ]
  },
  {
    question: "La 'seguretat per disseny' significa:",
    number: 27,
    answers: [
      { text: "Integrar mesures de protecció en el desenvolupament de qualsevol projecte.", correct: true },
      { text: "Posar mesures de seguretat quan el sistema ja funciona.", correct: false },
      { text: "Demanar permís al DPD per dissenyar el sistema.", correct: false },
      { text: "Utilitzar programari de disseny segur.", correct: false }
    ]
  },
  {
    question: "Quina informació es pot ometre en la informació a l'interessat?",
    number: 28,
    answers: [
      { text: "La que ja es té o que, per llei, no cal informar.", correct: true },
      { text: "Cap, tota la informació és obligatòria sempre.", correct: false },
      { text: "Només la direcció postal.", correct: false },
      { text: "Només el número de telèfon.", correct: false }
    ]
  },
  {
    question: "La retenció de dades un cop finalitzat el tractament es regeix pel principi de:",
    number: 29,
    answers: [
      { text: "Limitació del termini de conservació.", correct: true },
      { text: "Minimització.", correct: false },
      { text: "Llibertat de dades.", correct: false },
      { text: "Publicitat activa.", correct: false }
    ]
  },
  {
    question: "Què és un Registre d'Activitats de Tractament (RAT)?",
    number: 30,
    answers: [
      { text: "Un inventari del tractament de dades d'una entitat.", correct: true },
      { text: "Un llistat de ciutadans actius.", correct: false },
      { text: "Una còpia de seguretat.", correct: false },
      { text: "Un informe d'errors del sistema.", correct: false }
    ]
  },
  {
    question: "El DPD té autonomia per:",
    number: 31,
    answers: [
      { text: "Actuar sense rebre instruccions sobre l'exercici de les seves funcions.", correct: true },
      { text: "Canviar els processos de l'organització a voluntat.", correct: false },
      { text: "Acomiadar treballadors.", correct: false },
      { text: "Modificar la llei de protecció de dades.", correct: false }
    ]
  },
  {
    question: "El dret de rectificació s'aplica si:",
    number: 32,
    answers: [
      { text: "Les dades són inexactes.", correct: true },
      { text: "L'interessat vol canviar el seu historial d'adreces.", correct: false },
      { text: "El responsable ho decideix.", correct: false },
      { text: "El DPD ha canviat d'opinió.", correct: false }
    ]
  },
  {
    question: "Com es pot notificar la violació de seguretat als interessats?",
    number: 33,
    answers: [
      { text: "Mitjançant comunicació directa o, si no és possible, per un mitjà d'anunci general.", correct: true },
      { text: "Sempre via correu certificat.", correct: false },
      { text: "Només mitjançant el Diari Oficial.", correct: false },
      { text: "No cal notificar-los mai.", correct: false }
    ]
  },
  {
    question: "La LOPDGDD regula aspectes específics de la protecció de dades a:",
    number: 34,
    answers: [
      { text: "Espanya.", correct: true },
      { text: "Tota la Unió Europea.", correct: false },
      { text: "Només a Catalunya.", correct: false },
      { text: "Només a l'Administració General de l'Estat.", correct: false }
    ]
  },
  {
    question: "Si el tractament es basa en el consentiment, l'interessat pot:",
    number: 35,
    answers: [
      { text: "Retirar-lo en qualsevol moment.", correct: true },
      { text: "Retirar-lo només un cop l'any.", correct: false },
      { text: "Mai retirar-lo un cop donat.", correct: false },
      { text: "Retirar-lo només per causes judicials.", correct: false }
    ]
  },
  {
    question: "Les mesures de seguretat han de garantir la:",
    number: 36,
    answers: [
      { text: "Confidencialitat, integritat i disponibilitat.", correct: true },
      { text: "Rapidesa i estalvi de costos.", correct: false },
      { text: "Publicitat màxima.", correct: false },
      { text: "Estructura jeràrquica.", correct: false }
    ]
  },
  {
    question: "El DPD és un punt de contacte per:",
    number: 37,
    answers: [
      { text: "L'autoritat de control i els interessats.", correct: true },
      { text: "La policia exclusivament.", correct: false },
      { text: "Només la direcció de l'entitat.", correct: false },
      { text: "Els mitjans de comunicació.", correct: false }
    ]
  },
  {
    question: "La responsabilitat del tractament recau en:",
    number: 38,
    answers: [
      { text: "El responsable del tractament.", correct: true },
      { text: "El Delegat de Protecció de Dades.", correct: false },
      { text: "L'autoritat de control.", correct: false },
      { text: "L'encarregat.", correct: false }
    ]
  },
  {
    question: "El dret a la informació pot ser limitat per:",
    number: 39,
    answers: [
      { text: "La normativa vigent en determinats procediments.", correct: true },
      { text: "La decisió arbitrària del DPD.", correct: false },
      { text: "La manca de pressupost.", correct: false },
      { text: "El dret a no llegir la llei.", correct: false }
    ]
  },
  {
    question: "El tractament de dades de menors d'edat a la xarxa requereix consentiment dels pares fins als:",
    number: 40,
    answers: [
      { text: "14 anys.", correct: true },
      { text: "18 anys.", correct: false },
      { text: "16 anys.", correct: false },
      { text: "12 anys.", correct: false }
    ]
  },
  {
    question: "Què s'entén per tractament 'automatitzat'?",
    number: 41,
    answers: [
      { text: "El que es fa mitjançant sistemes informàtics.", correct: true },
      { text: "El que es fa manualment en una carpeta.", correct: false },
      { text: "El tractament de dades orals.", correct: false },
      { text: "La destrucció de dades.", correct: false }
    ]
  },
  {
    question: "El principi d'exactitud exigeix que:",
    number: 42,
    answers: [
      { text: "Les dades siguin correctes i, si cal, actualitzades.", correct: true },
      { text: "Les dades siguin sempre quantitatives.", correct: false },
      { text: "Les dades s'esborrin cada cert temps.", correct: false },
      { text: "Totes les dades siguin públiques.", correct: false }
    ]
  },
  {
    question: "La notificació de bretxa de seguretat s'ha de fer a:",
    number: 43,
    answers: [
      { text: "L'autoritat de control competent.", correct: true },
      { text: "A tots els ciutadans de la comunitat.", correct: false },
      { text: "Al parlament català.", correct: false },
      { text: "A les xarxes socials.", correct: false }
    ]
  },
  {
    question: "Quina de les següents NO és una mesura de seguretat?",
    number: 44,
    answers: [
      { text: "La publicació de la base de dades en un web obert.", correct: true },
      { text: "El control d'accessos físics als servidors.", correct: false },
      { text: "La còpia de seguretat i recuperació.", correct: false },
      { text: "La formació dels empleats en protecció de dades.", correct: false }
    ]
  },
  {
    question: "El DPD ha d'informar i assessorar al responsable sobre:",
    number: 45,
    answers: [
      { text: "Les obligacions del RGPD i d'altres normatives de protecció de dades.", correct: true },
      { text: "La gestió pressupostària de l'entitat.", correct: false },
      { text: "La planificació de vacances del personal.", correct: false },
      { text: "La selecció de proveïdors d'oficina.", correct: false }
    ]
  },
  {
    question: "L'interessat té dret a obtenir una còpia de les seves dades personals:",
    number: 46,
    answers: [
      { text: "Sí, és part del dret d'accés.", correct: true },
      { text: "No, només a visualitzar-les.", correct: false },
      { text: "Només si paga una taxa.", correct: false },
      { text: "Només mitjançant petició notarial.", correct: false }
    ]
  },
  {
    question: "El RGPD s'aplica a:",
    number: 47,
    answers: [
      { text: "Tractaments totalment o parcialment automatitzats.", correct: true },
      { text: "Només a dades en paper.", correct: false },
      { text: "Només a grans empreses.", correct: false },
      { text: "Només a dades recollides a internet.", correct: false }
    ]
  },
  {
    question: "La 'disponibilitat' en protecció de dades fa referència a:",
    number: 48,
    answers: [
      { text: "Poder accedir a les dades quan siguin necessàries.", correct: true },
      { text: "Poder compartir les dades amb tothom.", correct: false },
      { text: "Poder canviar les dades quan vulguis.", correct: false },
      { text: "Poder eliminar les dades ràpidament.", correct: false }
    ]
  },
  {
    question: "Si el tractament té un alt risc i no s'ha fet una EIPD:",
    number: 49,
    answers: [
      { text: "El tractament pot ser il·lícit i sancionable.", correct: true },
      { text: "No passa res, és opcional.", correct: false },
      { text: "S'ha de fer un cop acabat el tractament.", correct: false },
      { text: "És el ciutadà qui ha de reclamar.", correct: false }
    ]
  },
  {
    question: "El dret d'accés permet conèixer:",
    number: 50,
    answers: [
      { text: "La finalitat del tractament i els destinataris de les dades.", correct: true },
      { text: "Totes les dades dels altres interessats.", correct: false },
      { text: "El procediment sancionador intern.", correct: false },
      { text: "Les claus d'accés dels administradors.", correct: false }
    ]
  },
  {
    question: "L'obligació de mantenir un registre de tractaments NO s'aplica a:",
    number: 51,
    answers: [
      { text: "Organitzacions amb menys de 250 empleats, amb algunes excepcions.", correct: true },
      { text: "Totes les empreses del món.", correct: false },
      { text: "Qualsevol entitat pública.", correct: false },
      { text: "Entitats que tracten dades especials.", correct: false }
    ]
  },
  {
    question: "Les dades de salut són considerades:",
    number: 52,
    answers: [
      { text: "Dades de categoria especial.", correct: true },
      { text: "Dades comuns.", correct: false },
      { text: "Dades econòmiques.", correct: false },
      { text: "Dades anonimitzades.", correct: false }
    ]
  },
  {
    question: "L'incompliment del RGPD pot comportar:",
    number: 53,
    answers: [
      { text: "Multes administratives molt elevades.", correct: true },
      { text: "Només sancions penals.", correct: false },
      { text: "L'acomiadament obligatori del responsable.", correct: false },
      { text: "La clausura de l'administració.", correct: false }
    ]
  },
  {
    question: "La seguretat de les dades en el tractament ha de ser:",
    number: 54,
    answers: [
      { text: "Adequada al risc detectat.", correct: true },
      { text: "La màxima possible, sense mirar el cost.", correct: false },
      { text: "Igual per a tots els tractaments.", correct: false },
      { text: "Simplement bàsica.", correct: false }
    ]
  },
  {
    question: "Qui estableix els mitjans del tractament?",
    number: 55,
    answers: [
      { text: "El responsable del tractament.", correct: true },
      { text: "L'encarregat del tractament.", correct: false },
      { text: "L'interessat.", correct: false },
      { text: "El DPD.", correct: false }
    ]
  },
  {
    question: "El dret de rectificació permet:",
    number: 56,
    answers: [
      { text: "Completar dades personals incompletes.", correct: true },
      { text: "Esborrar completament les dades.", correct: false },
      { text: "Canviar la identitat d'una persona.", correct: false },
      { text: "Accedir a informació d'altres.", correct: false }
    ]
  },
  {
    question: "Què és un sistema d'informació segur?",
    number: 57,
    answers: [
      { text: "El que garanteix confidencialitat, integritat i disponibilitat.", correct: true },
      { text: "El que no utilitza internet.", correct: false },
      { text: "El que es fa només en paper.", correct: false },
      { text: "El que funciona molt ràpidament.", correct: false }
    ]
  },
  {
    question: "Les dades de caràcter personal són:",
    number: 58,
    answers: [
      { text: "Qualsevol informació sobre persona física identificada o identificable.", correct: true },
      { text: "Només dades de persones jurídiques.", correct: false },
      { text: "Només dades de persones estrangeres.", correct: false },
      { text: "Informació anònima sense referència.", correct: false }
    ]
  },
  {
    question: "El DPD (Delegat de protecció de dades) ha de cooperar amb:",
    number: 59,
    answers: [
      { text: "L'autoritat de control.", correct: true },
      { text: "Els mitjans de comunicació.", correct: false },
      { text: "Els partits polítics.", correct: false },
      { text: "Cap organisme extern.", correct: false }
    ]
  },
  {
    question: "Si l'autoritat de control requereix informació sobre una violació de seguretat:",
    number: 60,
    answers: [
      { text: "El responsable està obligat a facilitar-la.", correct: true },
      { text: "Es pot negar si és un tema confidencial.", correct: false },
      { text: "Ha d'esperar a l'autorització del DPD (Delegat de protecció de dades).", correct: false },
      { text: "Només l'ha de facilitar si és per correu certificat.", correct: false }
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