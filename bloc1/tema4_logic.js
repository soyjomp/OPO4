const TEST_ID = "tema4"; 
const questions = [
  {
    question: "Quina és la norma europea que regula la protecció de dades?",
    number: 1,
    answers: [
      { text: "Reglament (UE) 2016/679 (RGPD).", correct: true },
      { text: "Directiva 95/46/CE.", correct: false },
      { text: "Llei Orgànica 15/1999.", correct: false },
      { text: "Conveni 108 de l'OCDE.", correct: false }
    ]
  },
  {
    question: "Què s'entén per 'dades de caràcter personal'?",
    number: 2,
    answers: [
      { text: "Qualsevol informació sobre una persona física identificada o identificable.", correct: true },
      { text: "Només la informació que consta en fitxers automatitzats.", correct: false },
      { text: "La informació relativa a persones jurídiques.", correct: false },
      { text: "Dades que no permeten identificar a ningú.", correct: false }
    ]
  },
  {
    question: "Quina de les següents dades es considera 'categoria especial de dades' (dades sensibles)?",
    number: 3,
    answers: [
      { text: "L'adreça postal.", correct: false },
      { text: "L'orientació sexual o les creences religioses.", correct: true },
      { text: "El número de telèfon.", correct: false },
      { text: "La data de naixement.", correct: false }
    ]
  },
  {
    question: "Com ha de ser el consentiment de l'interessat segons el RGPD?",
    number: 4,
    answers: [
      { text: "Lliure, específic, informat i inequívoc.", correct: true },
      { text: "Tàcit i general.", correct: false },
      { text: "Obligatori per a tots els tractaments.", correct: false },
      { text: "Sempre per escrit i notari.", correct: false }
    ]
  },
  {
    question: "Qui és el 'responsable del tractament'?",
    number: 5,
    answers: [
      { text: "La persona que decideix els fins i els mitjans del tractament.", correct: true },
      { text: "La persona que només tracta les dades per compte del responsable.", correct: false },
      { text: "L'interessat que cedeix les seves dades.", correct: false },
      { text: "L'Agència de Protecció de Dades.", correct: false }
    ]
  },
  {
    question: "Quina funció té l'encarregat del tractament?",
    number: 6,
    answers: [
      { text: "Tractar dades per compte del responsable.", correct: true },
      { text: "Determinar la finalitat del tractament.", correct: false },
      { text: "Supervisar el compliment de la llei.", correct: false },
      { text: "Ser el titular de les dades.", correct: false }
    ]
  },
  {
    question: "Què és la pseudonimització?",
    number: 7,
    answers: [
      { text: "Tractament de dades de manera que no es puguin atribuir sense informació addicional.", correct: true },
      { text: "Eliminació permanent de les dades.", correct: false },
      { text: "Còpia de seguretat de les dades.", correct: false },
      { text: "Cifrat de dades de correu electrònic.", correct: false }
    ]
  },
  {
    question: "El dret d'accés permet a l'interessat:",
    number: 8,
    answers: [
      { text: "Obtenir confirmació de si es tracten les seves dades i accedir-hi.", correct: true },
      { text: "Modificar qualsevol dada, sigui verídica o no.", correct: false },
      { text: "Obligar a l'administració a esborrar tot el seu històric.", correct: false },
      { text: "Conèixer les dades de terceres persones.", correct: false }
    ]
  },
  {
    question: "El dret de rectificació es pot exercir quan:",
    number: 9,
    answers: [
      { text: "Les dades siguin inexactes o incompletes.", correct: true },
      { text: "L'interessat no recordi haver donat el consentiment.", correct: false },
      { text: "Les dades ja no són necessàries.", correct: false },
      { text: "El tractament és il·lícit.", correct: false }
    ]
  },
  {
    question: "El dret de supressió ('dret a l'oblit') s'exerceix quan:",
    number: 10,
    answers: [
      { text: "Les dades ja no són necessàries per a la finalitat inicial.", correct: true },
      { text: "L'interessat vol canviar de banc.", correct: false },
      { text: "El tractament és obligatori per llei.", correct: false },
      { text: "Hi ha un interès públic superior.", correct: false }
    ]
  },
  {
    question: "Què és l'AEPD?",
    number: 11,
    answers: [
      { text: "Agència Espanyola de Protecció de Dades.", correct: true },
      { text: "Administració Estatal de Protecció de Dades.", correct: false },
      { text: "Autoritat Europea de Protecció de Dades.", correct: false },
      { text: "Agrupació Espanyola de Privacitat Digital.", correct: false }
    ]
  },
  {
    question: "Les dades relatives a la salut es consideren:",
    number: 12,
    answers: [
      { text: "Dades especialment protegides.", correct: true },
      { text: "Dades de caràcter ordinari.", correct: false },
      { text: "Dades de nivell bàsic.", correct: false },
      { text: "Dades públiques.", correct: false }
    ]
  },
  {
    question: "Qui ha de nomenar un Delegat de Protecció de Dades (DPD) obligatòriament?",
    number: 13,
    answers: [
      { text: "Les autoritats i organismes públics.", correct: true },
      { text: "Només les empreses amb més de 100 treballadors.", correct: false },
      { text: "Qualsevol persona física que tracti dades.", correct: false },
      { text: "Només les ONG.", correct: false }
    ]
  },
  {
    question: "Quina és una funció del Delegat de Protecció de Dades (DPD)?",
    number: 14,
    answers: [
      { text: "Assessorar i supervisar el compliment del RGPD.", correct: true },
      { text: "Aplicar sancions als infractors.", correct: false },
      { text: "Vendre les dades a tercers.", correct: false },
      { text: "Modificar directament les bases de dades.", correct: false }
    ]
  },
  {
    question: "El consentiment pot ser revocat?",
    number: 15,
    answers: [
      { text: "Sí, en qualsevol moment, amb la mateixa facilitat que es va donar.", correct: true },
      { text: "No, és irrevocable.", correct: false },
      { text: "Només després d'un any.", correct: false },
      { text: "Només si el responsable ho accepta.", correct: false }
    ]
  },
  {
    question: "Les dades de menors d'edat:",
    number: 16,
    answers: [
      { text: "Requereixen consentiment dels pares si són menors de 14 anys.", correct: true },
      { text: "Són totalment prohibides.", correct: false },
      { text: "Són tractables sempre sense consentiment.", correct: false },
      { text: "Requereixen el consentiment a partir de 18 anys.", correct: false }
    ]
  },
  {
    question: "Quina és la base jurídica per al tractament de dades en l'àmbit de la Generalitat?",
    number: 17,
    answers: [
      { text: "L'exercici de poders públics o obligació legal.", correct: true },
      { text: "Només el consentiment del ciutadà.", correct: false },
      { text: "El contracte mercantil exclusivament.", correct: false },
      { text: "L'interès comercial de l'administració.", correct: false }
    ]
  },
  {
    question: "L'avaluació d'impacte sobre la protecció de dades (EIPD) es realitza:",
    number: 18,
    answers: [
      { text: "Quan el tractament suposi un risc elevat per als drets i llibertats.", correct: true },
      { text: "Cada mes obligatòriament.", correct: false },
      { text: "Només si l'AEPD ho demana.", correct: false },
      { text: "Només en el sector privat.", correct: false }
    ]
  },
  {
    question: "Què és la bretxa de seguretat?",
    number: 19,
    answers: [
      { text: "Violació de seguretat que ocasiona la destrucció o pèrdua de dades.", correct: true },
      { text: "Un error en el programari de gestió.", correct: false },
      { text: "Una actualització del servidor.", correct: false },
      { text: "Un dret de l'interessat.", correct: false }
    ]
  },
  {
    question: "Què s'ha de fer en cas de bretxa de seguretat?",
    number: 20,
    answers: [
      { text: "Notificar-ho a l'autoritat de control (AEPD/APDCAT) en 72 hores.", correct: true },
      { text: "Esborrar totes les dades del sistema.", correct: false },
      { text: "Esperar a tenir més informació.", correct: false },
      { text: "Ocultar l'incident al ciutadà.", correct: false }
    ]
  },
  {
    question: "Què és el Registre d'Activitats de Tractament (RAT)?",
    number: 21,
    answers: [
      { text: "Un document on es detallen els tractaments que realitza l'entitat.", correct: true },
      { text: "El registre de les sancions imposades.", correct: false },
      { text: "Una llista de correus electrònics.", correct: false },
      { text: "El registre dels ciutadans d'un municipi.", correct: false }
    ]
  },
  {
    question: "El principi de 'limitació de la finalitat' significa:",
    number: 22,
    answers: [
      { text: "Les dades es recullen per finalitats determinades i explícites.", correct: true },
      { text: "Les dades es poden fer servir per qualsevol cosa.", correct: false },
      { text: "Les dades no es poden emmagatzemar mai.", correct: false },
      { text: "Només es poden recollir dades de paper.", correct: false }
    ]
  },
  {
    question: "Què és la minimització de dades?",
    number: 23,
    answers: [
      { text: "Recollir només les dades estrictament necessàries.", correct: true },
      { text: "Recollir totes les dades possibles per si de cas.", correct: false },
      { text: "Utilitzar només lletres minúscules.", correct: false },
      { text: "Reduir la qualitat de les dades.", correct: false }
    ]
  },
  {
    question: "L'APDCAT és:",
    number: 24,
    answers: [
      { text: "L'Autoritat Catalana de Protecció de Dades.", correct: true },
      { text: "L'Agència de Protecció de Dades de Catalunya (organisme estatal).", correct: false },
      { text: "Una entitat bancària.", correct: false },
      { text: "El registre de la propietat.", correct: false }
    ]
  },
  {
    question: "El dret a la portabilitat permet a l'interessat:",
    number: 25,
    answers: [
      { text: "Rebre les seves dades en un format estructurat i transmetre-les a un altre responsable.", correct: true },
      { text: "Portar-se la informació del fitxer de l'Administració a casa.", correct: false },
      { text: "Demanar la còpia en paper d'un fitxer digital.", correct: false },
      { text: "Canviar l'autoritat de control.", correct: false }
    ]
  },
  {
    question: "El principi de 'responsabilitat proactiva' (accountability) exigeix:",
    number: 26,
    answers: [
      { text: "Que el responsable apliqui mesures tècniques i organitzatives per garantir la seguretat.", correct: true },
      { text: "Que el responsable esperi a ser auditat.", correct: false },
      { text: "Que el responsable delegui la seva responsabilitat en l'encarregat.", correct: false },
      { text: "Que les dades siguin públiques per seguretat.", correct: false }
    ]
  },
  {
    question: "Les dades sobre condemnes penals i infraccions:",
    number: 27,
    answers: [
      { text: "Només poden ser tractades per autoritats públiques o sota supervisió oficial.", correct: true },
      { text: "Poden ser tractades per qualsevol persona.", correct: false },
      { text: "No són dades personals.", correct: false },
      { text: "Són dades obertes.", correct: false }
    ]
  },
  {
    question: "La informació que es dóna a l'interessat en el moment de la recollida (clàusula informativa) ha d'incloure:",
    number: 28,
    answers: [
      { text: "La finalitat, la identitat del responsable i el dret a reclamar.", correct: true },
      { text: "Només la marca de l'ordinador que fa servir l'administració.", correct: false },
      { text: "El nom de tots els treballadors del departament.", correct: false },
      { text: "No cal donar informació si les dades són obvies.", correct: false }
    ]
  },
  {
    question: "Què és el tractament 'automatitzat'?",
    number: 29,
    answers: [
      { text: "El que es realitza mitjançant sistemes informàtics.", correct: true },
      { text: "El que es fa a mà en un fitxer de paper.", correct: false },
      { text: "El que fan les màquines de cafè.", correct: false },
      { text: "El que es fa fora de l'oficina.", correct: false }
    ]
  },
  {
    question: "El principi de conservació exigeix que les dades:",
    number: 30,
    answers: [
      { text: "Es conservin durant el temps necessari per a les finalitats del tractament.", correct: true },
      { text: "Es conservin per sempre per precaució.", correct: false },
      { text: "S'esborrin el dia següent de recollir-les.", correct: false },
      { text: "S'entreguin a l'arxiu nacional obligatòriament.", correct: false }
    ]
  },
  {
    question: "Quin dret pot ser limitat per motius d'interès públic?",
    number: 31,
    answers: [
      { text: "Dret d'accés.", correct: false },
      { text: "Dret d'oposició.", correct: true },
      { text: "Dret a no ser objecte de decisions automatitzades.", correct: false },
      { text: "Dret a la identitat.", correct: false }
    ]
  },
  {
    question: "Les mesures de seguretat s'han d'adaptar al:",
    number: 32,
    answers: [
      { text: "Risc que comporta el tractament de les dades.", correct: true },
      { text: "Pressupost de l'empresa de neteja.", correct: false },
      { text: "Número de dies de l'any.", correct: false },
      { text: "Color dels documents.", correct: false }
    ]
  },
  {
    question: "La transferència internacional de dades suposa:",
    number: 33,
    answers: [
      { text: "Enviar dades a un país fora de l'Espai Econòmic Europeu.", correct: true },
      { text: "Enviar dades d'un departament a un altre.", correct: false },
      { text: "El canvi d'idioma de les dades.", correct: false },
      { text: "El trasllat físic d'un ordinador.", correct: false }
    ]
  },
  {
    question: "Dins l'administració, les dades de contacte d'un funcionari (com el correu electrònic oficial):",
    number: 34,
    answers: [
      { text: "Tenen un règim de protecció especial com a dades professionals.", correct: true },
      { text: "Són dades lliurement tractables per qualsevol.", correct: false },
      { text: "Són dades personals i protegides en tot cas.", correct: false },
      { text: "No es consideren dades personals.", correct: false }
    ]
  },
  {
    question: "L'encarregat del tractament ha d'actuar segons:",
    number: 35,
    answers: [
      { text: "Les instruccions documentades del responsable.", correct: true },
      { text: "La seva pròpia discrecionalitat.", correct: false },
      { text: "El que decideixi el Delegat de Protecció de Dades.", correct: false },
      { text: "Les directrius de l'autoritat de control.", correct: false }
    ]
  },
  {
    question: "L'AEPD imposa sancions basant-se en:",
    number: 36,
    answers: [
      { text: "El tipus d'infracció i la gravetat (lleu, greu, molt greu).", correct: true },
      { text: "Un sorteig aleatori.", correct: false },
      { text: "El nombre d'empleats sancionats.", correct: false },
      { text: "La mida de la base de dades.", correct: false }
    ]
  },
  {
    question: "El dret de limitació del tractament implica:",
    number: 37,
    answers: [
      { text: "Que les dades se n'han de bloquejar i només es poden tractar per conservació.", correct: true },
      { text: "Que només es pot accedir a les dades al matí.", correct: false },
      { text: "Que el responsable ha d'esborrar les dades completament.", correct: false },
      { text: "Que l'accés a les dades serà més ràpid.", correct: false }
    ]
  },
  {
    question: "La seguretat de les dades té com a objectiu garantir:",
    number: 38,
    answers: [
      { text: "Confidencialitat, integritat i disponibilitat.", correct: true },
      { text: "Rapidesa, estètica i economia.", correct: false },
      { text: "Publicitat, accessibilitat i gratuïtat.", correct: false },
      { text: "Jerarquia, ordre i control.", correct: false }
    ]
  },
  {
    question: "Les dades de biometria (empremta, reconeixement facial) són:",
    number: 39,
    answers: [
      { text: "Dades de categoria especial.", correct: true },
      { text: "Dades comuns.", correct: false },
      { text: "Dades que no es poden tractar mai.", correct: false },
      { text: "Dades públiques.", correct: false }
    ]
  },
  {
    question: "El DPD pot tenir funcions en una altra entitat?",
    number: 40,
    answers: [
      { text: "Sí, sempre que no hi hagi conflicte d'interessos.", correct: true },
      { text: "No, és una dedicació exclusiva.", correct: false },
      { text: "Només si és funcionari de l'estat.", correct: false },
      { text: "Mai, ha de ser de plantilla.", correct: false }
    ]
  },
  {
    question: "Les dades obtingudes d'una font accessible al públic (ex: internet):",
    number: 41,
    answers: [
      { text: "Han de ser protegides igualment pel RGPD.", correct: true },
      { text: "No estan subjectes a cap control.", correct: false },
      { text: "Poden ser utilitzades per a qualsevol finalitat sense límit.", correct: false },
      { text: "Es consideren dades anonimitzades.", correct: false }
    ]
  },
  {
    question: "L'interessat té dret a retirar el seu consentiment?",
    number: 42,
    answers: [
      { text: "Sí, en qualsevol moment.", correct: true },
      { text: "Només un cop l'any.", correct: false },
      { text: "Mai si el fitxer ja està creat.", correct: false },
      { text: "Només si hi ha una causa justificada.", correct: false }
    ]
  },
  {
    question: "El fitxer de dades és:",
    number: 43,
    answers: [
      { text: "Tot conjunt estructurat de dades personals.", correct: true },
      { text: "Només el document en format Excel.", correct: false },
      { text: "El conjunt d'ordinadors de l'oficina.", correct: false },
      { text: "Només els arxius en paper.", correct: false }
    ]
  },
  {
    question: "La 'integritat' de les dades garanteix que:",
    number: 44,
    answers: [
      { text: "Les dades no han estat alterades sense autorització.", correct: true },
      { text: "Les dades es poden llegir des de qualsevol lloc.", correct: false },
      { text: "Les dades es conserven per sempre.", correct: false },
      { text: "Les dades són fàcils de trobar.", correct: false }
    ]
  },
  {
    question: "Què és la 'disponibilitat' de les dades?",
    number: 45,
    answers: [
      { text: "Capacitat d'accedir a les dades quan sigui necessari.", correct: true },
      { text: "Que les dades estan obertes a tothom.", correct: false },
      { text: "Que les dades estan ben impreses.", correct: false },
      { text: "Que les dades són gratuïtes.", correct: false }
    ]
  },
  {
    question: "Què implica el 'dret a no ser objecte de decisions automatitzades'?",
    number: 46,
    answers: [
      { text: "Dret a no ser sotmès a decisions basades només en el tractament automatitzat que tinguin efectes jurídics.", correct: true },
      { text: "Dret a treballar sempre amb ordinadors.", correct: false },
      { text: "Dret a apagar l'ordinador quan es vulgui.", correct: false },
      { text: "Dret a no fer servir programari lliure.", correct: false }
    ]
  },
  {
    question: "El Delegat de Protecció de Dades (DPD) ha de ser:",
    number: 47,
    answers: [
      { text: "Independent i actua sense rebre instruccions sobre el seu càrrec.", correct: true },
      { text: "Subordinat al responsable del tractament.", correct: false },
      { text: "Elegit pel personal funcionari.", correct: false },
      { text: "Membre del govern de la Generalitat.", correct: false }
    ]
  },
  {
    question: "El principi d'exactitud exigeix que les dades:",
    number: 48,
    answers: [
      { text: "Siguin veraces i estiguin actualitzades.", correct: true },
      { text: "Siguin inventades pel responsable.", correct: false },
      { text: "Estiguin escrites correctament en català.", correct: false },
      { text: "Siguin moltes i variades.", correct: false }
    ]
  },
  {
    question: "Quan un responsable contracta a un encarregat (ex: una empresa externa):",
    number: 49,
    answers: [
      { text: "Han de signar un contracte o acte jurídic vinculant.", correct: true },
      { text: "És suficient amb un acord verbal.", correct: false },
      { text: "No es pot externalitzar cap servei.", correct: false },
      { text: "És el Delegat qui ha de signar el contracte.", correct: false }
    ]
  },
  {
    question: "Les dades de persones mortes:",
    number: 50,
    answers: [
      { text: "Estan excloses del RGPD, però tenen protecció per la LOPDGDD.", correct: true },
      { text: "Són totalment lliures.", correct: false },
      { text: "No s'han d'esborrar mai.", correct: false },
      { text: "Només es tracten per motius d'herència.", correct: false }
    ]
  },
  {
    question: "La 'confidencialitat' vol dir que:",
    number: 51,
    answers: [
      { text: "L'accés a les dades està restringit a persones autoritzades.", correct: true },
      { text: "L'accés a les dades és lliure.", correct: false },
      { text: "Les dades no es poden guardar en ordinadors.", correct: false },
      { text: "Les dades s'han de guardar en una caixa forta.", correct: false }
    ]
  },
  {
    question: "Les imatges de videovigilància (CCTV) són:",
    number: 52,
    answers: [
      { text: "Dades personals.", correct: true },
      { text: "Dades no personals si no surt el nom.", correct: false },
      { text: "Dades públiques.", correct: false },
      { text: "Dades de categoria especial.", correct: false }
    ]
  },
  {
    question: "L'AEPD pot ordenar:",
    number: 53,
    answers: [
      { text: "La cessació o limitació d'un tractament il·lícit.", correct: true },
      { text: "El canvi de govern.", correct: false },
      { text: "La detenció de l'encarregat del tractament.", correct: false },
      { text: "L'augment de sou del DPD.", correct: false }
    ]
  },
  {
    question: "El DPD ha de ser consultat:",
    number: 54,
    answers: [
      { text: "En totes les qüestions relacionades amb la protecció de dades.", correct: true },
      { text: "Només en cas d'incident greu.", correct: false },
      { text: "Mai, és una figura decorativa.", correct: false },
      { text: "Només un cop a l'any.", correct: false }
    ]
  },
  {
    question: "El responsable del tractament ha de mantenir la documentació (RAT) a disposició de:",
    number: 55,
    answers: [
      { text: "L'autoritat de control.", correct: true },
      { text: "Qualsevol persona que la demani per curiositat.", correct: false },
      { text: "La premsa.", correct: false },
      { text: "Només dels sindicats.", correct: false }
    ]
  },
  {
    question: "Què passa si una empresa no compleix el RGPD?",
    number: 56,
    answers: [
      { text: "Pot ser sancionada amb multes elevades.", correct: true },
      { text: "Només rep un avís amigable.", correct: false },
      { text: "S'ha de tancar l'empresa obligatòriament.", correct: false },
      { text: "El director va a la presó sempre.", correct: false }
    ]
  },
  {
    question: "El dret d'oposició permet:",
    number: 57,
    answers: [
      { text: "Oposar-se al tractament de dades en determinades circumstàncies (ex: màrqueting).", correct: true },
      { text: "Oposar-se a pagar impostos.", correct: false },
      { text: "Oposar-se a la feina d'un company.", correct: false },
      { text: "Oposar-se a l'ús d'Internet.", correct: false }
    ]
  },
  {
    question: "Els sistemes de 'seguretat per disseny' volen dir:",
    number: 58,
    answers: [
      { text: "Que la privacitat es té en compte des de l'inici de la creació del sistema.", correct: true },
      { text: "Que la seguretat es posa al final.", correct: false },
      { text: "Que el dissenyador és el responsable.", correct: false },
      { text: "Que només es fa servir programari de disseny.", correct: false }
    ]
  },
  {
    question: "L'informe d'auditoria (en el sector públic, si s'escau):",
    number: 59,
    answers: [
      { text: "Verifica el compliment de les mesures de seguretat.", correct: true },
      { text: "És només per a problemes econòmics.", correct: false },
      { text: "No és obligatori.", correct: false },
      { text: "El fa l'interessat.", correct: false }
    ]
  },
  {
    question: "Quin és el termini màxim per respondre als drets (accés, rectificació...)?",
    number: 60,
    answers: [
      { text: "1 mes (prorrogable a 2 en casos complexos).", correct: true },
      { text: "10 dies hàbils.", correct: false },
      { text: "3 mesos.", correct: false },
      { text: "Sense termini fixat.", correct: false }
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