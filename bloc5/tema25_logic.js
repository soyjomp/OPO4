const TEST_ID = "tema25"; 
const questions = [
  {
    question: "Quina és la primera fase del cicle de vida de les dades?",
    number: 1,
    answers: [
      { text: "Captura o generació.", correct: true },
      { text: "Emmagatzematge.", correct: false },
      { text: "Publicació.", correct: false },
      { text: "Arxiu.", correct: false }
    ]
  },
  {
    question: "Què s'entén per dades obertes (Open Data)?",
    number: 2,
    answers: [
      { text: "Dades accessibles lliurement, sense restriccions d'ús o patents.", correct: true },
      { text: "Dades que només poden consultar els funcionaris.", correct: false },
      { text: "Dades que es venen a empreses privades.", correct: false },
      { text: "Dades protegides per la llei de secrets oficials.", correct: false }
    ]
  },
  {
    question: "En quina fase del cicle de vida s'aplica el control de qualitat i validació?",
    number: 3,
    answers: [
      { text: "Manteniment o processament.", correct: true },
      { text: "Captura.", correct: false },
      { text: "Arxiu.", correct: false },
      { text: "Distribució.", correct: false }
    ]
  },
  {
    question: "Què és la mineria de dades (Data Mining)?",
    number: 4,
    answers: [
      { text: "Procés d'extracció d'informació oculta i útil a partir de grans volums de dades.", correct: true },
      { text: "Procés d'esborrar dades velles del sistema.", correct: false },
      { text: "Procés de còpia de seguretat en núvol.", correct: false },
      { text: "Procés de digitalització de documents en paper.", correct: false }
    ]
  },
  {
    question: "Quin és un requisit fonamental perquè les dades obertes siguin realment útils?",
    number: 5,
    answers: [
      { text: "Que siguin en formats llegibles per màquina.", correct: true },
      { text: "Que estiguin impreses en paper.", correct: false },
      { text: "Que siguin dades privades de ciutadans.", correct: false },
      { text: "Que estiguin en un fitxer d'imatge no editable.", correct: false }
    ]
  },
  {
    question: "Què implica l'anonimització de les dades?",
    number: 6,
    answers: [
      { text: "Processar les dades perquè no es pugui identificar l'interessat.", correct: true },
      { text: "Publicar les dades amb el nom i DNI complet.", correct: false },
      { text: "Esborrar les dades per sempre.", correct: false },
      { text: "Guardar les dades en una carpeta privada.", correct: false }
    ]
  },
  {
    question: "Quina és l'última fase del cicle de vida de les dades segons models estàndard?",
    number: 7,
    answers: [
      { text: "Destrucció o arxiu definitiu.", correct: true },
      { text: "Captura.", correct: false },
      { text: "Anàlisi.", correct: false },
      { text: "Publicació.", correct: false }
    ]
  },
  {
    question: "Quin tipus de dades s'han d'excloure de les polítiques d'Open Data?",
    number: 8,
    answers: [
      { text: "Dades protegides per la normativa de protecció de dades personals.", correct: true },
      { text: "Dades meteorològiques.", correct: false },
      { text: "Dades sobre el transport públic.", correct: false },
      { text: "Dades sobre el pressupost municipal.", correct: false }
    ]
  },
  {
    question: "Què permet la interoperabilitat en les dades?",
    number: 9,
    answers: [
      { text: "Que sistemes diferents puguin intercanviar i utilitzar dades entre si.", correct: true },
      { text: "Que una dada només es pugui llegir en un sol programa.", correct: false },
      { text: "Que la dada no es pugui copiar.", correct: false },
      { text: "Que la dada sigui sempre en format PDF.", correct: false }
    ]
  },
  {
    question: "La mineria de dades és una branca de:",
    number: 10,
    answers: [
      { text: "La intel·ligència artificial i l'estadística.", correct: true },
      { text: "La gestió de recursos humans.", correct: false },
      { text: "La redacció administrativa.", correct: false },
      { text: "La seguretat física dels edificis.", correct: false }
    ]
  },
  {
    question: "Quin és l'objectiu de la governança de dades?",
    number: 11,
    answers: [
      { text: "Garantir la qualitat, integritat i seguretat de les dades durant tot el seu cicle.", correct: true },
      { text: "Només reduir el cost dels servidors.", correct: false },
      { text: "Augmentar el nombre d'usuaris del sistema.", correct: false },
      { text: "Obligar a tothom a usar un sol programa.", correct: false }
    ]
  },
  {
    question: "En el context de l'Open Data, què significa 'llegible per màquina'?",
    number: 12,
    answers: [
      { text: "Que el format permet que una aplicació informàtica tracti les dades directament.", correct: true },
      { text: "Que la dada només la pot llegir un ordinador molt antic.", correct: false },
      { text: "Que només es pot llegir des d'una impressora.", correct: false },
      { text: "Que és un document escanejat en format imatge.", correct: false }
    ]
  },
  {
    question: "Quina és la funció de les metadades?",
    number: 13,
    answers: [
      { text: "Proporcionar informació sobre altres dades (descripció, origen, format).", correct: true },
      { text: "Esborrar la informació principal.", correct: false },
      { text: "Ser la dada més important de totes.", correct: false },
      { text: "Cap, no tenen cap utilitat.", correct: false }
    ]
  },
  {
    question: "Com s'anomena la tècnica per descobrir patrons en les dades?",
    number: 14,
    answers: [
      { text: "Mineria de dades.", correct: true },
      { text: "Copia de seguretat.", correct: false },
      { text: "Indexació de dades.", correct: false },
      { text: "Compressió de fitxers.", correct: false }
    ]
  },
  {
    question: "El cicle de vida de les dades comença amb la recollida. Quina és la següent etapa habitual?",
    number: 15,
    answers: [
      { text: "Processament o neteja.", correct: true },
      { text: "Publicació massiva.", correct: false },
      { text: "Destrucció immediata.", correct: false },
      { text: "Venda a tercers.", correct: false }
    ]
  },
  {
    question: "Per què és important netejar les dades?",
    number: 16,
    answers: [
      { text: "Per eliminar duplicats, errors i dades inconsistents.", correct: true },
      { text: "Perquè ocupin menys espai a la memòria RAM.", correct: false },
      { text: "Perquè canviïn de nom.", correct: false },
      { text: "Perquè siguin més segures davant hackers.", correct: false }
    ]
  },
  {
    question: "Què significa 'Dades FAIR'?",
    number: 17,
    answers: [
      { text: "Findable, Accessible, Interoperable, Reusable (Localitzables, Accessibles, Interoperables, Reutilitzables).", correct: true },
      { text: "Fast, Automatic, Intelligent, Real.", correct: false },
      { text: "Free, Active, Informative, Relevant.", correct: false },
      { text: "Folder, Archive, Integrated, Registered.", correct: false }
    ]
  },
  {
    question: "Quin portal utilitza la Generalitat per publicar les seves dades obertes?",
    number: 18,
    answers: [
      { text: "gencat.cat/dadesobertes.", correct: true },
      { text: "facebook.com.", correct: false },
      { text: "google.com.", correct: false },
      { text: "wikipedia.org.", correct: false }
    ]
  },
  {
    question: "La publicació de dades obertes es basa en el principi de:",
    number: 19,
    answers: [
      { text: "Transparència i accés a la informació pública.", correct: true },
      { text: "Exclusivitat per al govern.", correct: false },
      { text: "Secret administratiu.", correct: false },
      { text: "Venda de dades per finançar el pressupost.", correct: false }
    ]
  },
  {
    question: "Què és un dataset (conjunt de dades)?",
    number: 20,
    answers: [
      { text: "Una col·lecció de dades estructurades que representen una informació concreta.", correct: true },
      { text: "Una carpeta plena de virus.", correct: false },
      { text: "Un programa per navegar per Internet.", correct: false },
      { text: "Una tècnica de seguretat.", correct: false }
    ]
  },
  {
    question: "Quin risc pot comportar la mineria de dades mal aplicada?",
    number: 21,
    answers: [
      { text: "L'ús indegut de dades personals i la vulneració de privacitat.", correct: true },
      { text: "Que s'esborrin els ordinadors.", correct: false },
      { text: "Que Internet vagi més lent.", correct: false },
      { text: "Que el programari es torni obsolet.", correct: false }
    ]
  },
  {
    question: "Les dades obertes han d'estar sota una llicència que permeti:",
    number: 22,
    answers: [
      { text: "La seva reutilització.", correct: true },
      { text: "La seva prohibició d'ús.", correct: false },
      { text: "La seva còpia privada il·legal.", correct: false },
      { text: "La seva destrucció immediata.", correct: false }
    ]
  },
  {
    question: "Què és la 'neteja de dades' (data cleaning)?",
    number: 23,
    answers: [
      { text: "Identificar i corregir dades incorrectes o incompletes.", correct: true },
      { text: "Donar format de text a un gràfic.", correct: false },
      { text: "Fer una còpia de seguretat del disc dur.", correct: false },
      { text: "Canviar les dades de lloc.", correct: false }
    ]
  },
  {
    question: "En el cicle de vida, què passa a la fase d'arxiu?",
    number: 24,
    answers: [
      { text: "Les dades es guarden a llarg termini per consulta futura o legal.", correct: true },
      { text: "Les dades es venen.", correct: false },
      { text: "Les dades es publiquen a Internet per a tothom.", correct: false },
      { text: "Les dades s'eliminen sense cap registre.", correct: false }
    ]
  },
  {
    question: "Què és un format propietari?",
    number: 25,
    answers: [
      { text: "Un format d'arxiu que requereix programari privat per ser obert.", correct: true },
      { text: "Un format universal lliure.", correct: false },
      { text: "Un document fet a mà.", correct: false },
      { text: "Un format que tothom pot modificar lliurement.", correct: false }
    ]
  },
  {
    question: "L'anàlisi de dades ajuda principalment a:",
    number: 26,
    answers: [
      { text: "Prendre decisions basades en evidències.", correct: true },
      { text: "Amagar problemes de gestió.", correct: false },
      { text: "Reduir el nombre de treballadors.", correct: false },
      { text: "Modificar la llei per decret.", correct: false }
    ]
  },
  {
    question: "Quina d'aquestes és una característica clau de les dades obertes?",
    number: 27,
    answers: [
      { text: "Gratuïtat (o cost marginal zero).", correct: true },
      { text: "Preu elevat per accedir-hi.", correct: false },
      { text: "Restricció d'accés per edat.", correct: false },
      { text: "Limitació d'ús a un sol territori.", correct: false }
    ]
  },
  {
    question: "Com es diu el fenomen de gran volum de dades i alta velocitat?",
    number: 28,
    answers: [
      { text: "Big Data.", correct: true },
      { text: "Small Data.", correct: false },
      { text: "Cloud computing.", correct: false },
      { text: "Digitalització simple.", correct: false }
    ]
  },
  {
    question: "Què permet la mineria de dades als governs?",
    number: 29,
    answers: [
      { text: "Identificar tendències, riscos i millorar serveis públics.", correct: true },
      { text: "Espiar les converses dels ciutadans sense permís.", correct: false },
      { text: "Modificar resultats electorals.", correct: false },
      { text: "Eliminar les obligacions legals.", correct: false }
    ]
  },
  {
    question: "Per què les dades obertes han d'estar en formats oberts?",
    number: 30,
    answers: [
      { text: "Per evitar la dependència d'un únic proveïdor de programari.", correct: true },
      { text: "Perquè ocupen més espai al servidor.", correct: false },
      { text: "Perquè són més difícils de descarregar.", correct: false },
      { text: "Perquè així es poden vendre millor.", correct: false }
    ]
  },
  {
    question: "Què implica el principi 'Open by default'?",
    number: 31,
    answers: [
      { text: "Que les dades públiques han d'estar obertes excepte si hi ha motius legals per no fer-ho.", correct: true },
      { text: "Que tot està prohibit per defecte.", correct: false },
      { text: "Que només es pot obrir la informació si ho demana un jutge.", correct: false },
      { text: "Que les dades s'esborren per defecte.", correct: false }
    ]
  },
  {
    question: "L'anonimització és un procés de:",
    number: 32,
    answers: [
      { text: "Privacitat de les dades.", correct: true },
      { text: "Publicitat extrema.", correct: false },
      { text: "Venda de dades personals.", correct: false },
      { text: "Arxiu físic en paper.", correct: false }
    ]
  },
  {
    question: "Quina és una font comuna de dades per a l'Open Data?",
    number: 33,
    answers: [
      { text: "Registres administratius, estadístiques i sensors públics.", correct: true },
      { text: "Converses telefòniques privades.", correct: false },
      { text: "Llistes de clients d'empreses privades.", correct: false },
      { text: "Dades secretes de defensa.", correct: false }
    ]
  },
  {
    question: "En la mineria de dades, el terme 'modelització' fa referència a:",
    number: 34,
    answers: [
      { text: "L'aplicació d'algoritmes per trobar patrons en les dades.", correct: true },
      { text: "Dibuixar els resultats en un full de paper.", correct: false },
      { text: "Esborrar el conjunt de dades.", correct: false },
      { text: "Fer una còpia de seguretat.", correct: false }
    ]
  },
  {
    question: "Què és el cicle de vida de les dades?",
    number: 35,
    answers: [
      { text: "El conjunt d'etapes per les quals passa una dada des que es crea fins que s'elimina.", correct: true },
      { text: "El temps que triga un usuari a obrir un fitxer.", correct: false },
      { text: "El nombre d'anys que viu un funcionari.", correct: false },
      { text: "L'actualització del sistema operatiu.", correct: false }
    ]
  },
  {
    question: "Quina és la utilitat d'un portal d'Open Data?",
    number: 36,
    answers: [
      { text: "Centralitzar l'accés a dades públiques per a la seva reutilització.", correct: true },
      { text: "Guardar contrasenyes d'usuaris.", correct: false },
      { text: "Controlar qui entra a l'edifici.", correct: false },
      { text: "Vendre productes de l'Administració.", correct: false }
    ]
  },
  {
    question: "La 'validació' de dades en el cicle de vida serveix per:",
    number: 37,
    answers: [
      { text: "Assegurar que les dades compleixen les regles definides.", correct: true },
      { text: "Donar-les per vàlides sense mirar-les.", correct: false },
      { text: "Esborrar-les si són moltes.", correct: false },
      { text: "Canviar la data de creació.", correct: false }
    ]
  },
  {
    question: "Què significa que una dada estigui 'estructurada'?",
    number: 38,
    answers: [
      { text: "Que està organitzada en taules, camps i registres (com a bases de dades).", correct: true },
      { text: "Que està desordenada sense cap lògica.", correct: false },
      { text: "Que ocupa molt espai al disc.", correct: false },
      { text: "Que és un text escrit a mà sense cap format.", correct: false }
    ]
  },
  {
    question: "Què pot fer un ciutadà amb les dades obertes d'una Administració?",
    number: 39,
    answers: [
      { text: "Reutilitzar-les per crear noves aplicacions o serveis.", correct: true },
      { text: "Prohibir que els altres les mirin.", correct: false },
      { text: "Vendre-les com a propietat privada seva.", correct: false },
      { text: "Modificar els originals oficials de l'Administració.", correct: false }
    ]
  },
  {
    question: "Com s'anomena la visualització de dades?",
    number: 40,
    answers: [
      { text: "Representació gràfica d'informació.", correct: true },
      { text: "Eliminació de la dada.", correct: false },
      { text: "Arxiu històric.", correct: false },
      { text: "Mineria tèxtil.", correct: false }
    ]
  },
  {
    question: "El terme 'Open Government' inclou les dades obertes com a pilar de:",
    number: 41,
    answers: [
      { text: "Transparència, participació i col·laboració.", correct: true },
      { text: "Secret i opacitat.", correct: false },
      { text: "Control jeràrquic estricte.", correct: false },
      { text: "Restricció informativa.", correct: false }
    ]
  },
  {
    question: "En quin format seria millor publicar una llista de dades obertes?",
    number: 42,
    answers: [
      { text: "CSV o JSON.", correct: true },
      { text: "Un full imprès en un PDF protegida contra còpia.", correct: false },
      { text: "Una foto d'una pissarra.", correct: false },
      { text: "Un arxiu d'àudio.", correct: false }
    ]
  },
  {
    question: "Què permet la fase d'anàlisi de dades?",
    number: 43,
    answers: [
      { text: "Interpretar les dades per extreure conclusions.", correct: true },
      { text: "Esborrar el registre original.", correct: false },
      { text: "Canviar l'autor del document.", correct: false },
      { text: "Guardar la dada a l'arxiu històric.", correct: false }
    ]
  },
  {
    question: "La mineria de dades pot ajudar a detectar?",
    number: 44,
    answers: [
      { text: "Fraus, patrons de comportament o anomalies.", correct: true },
      { text: "El temps que fa demà sense dades.", correct: false },
      { text: "Com millorar el mobiliari d'oficina.", correct: false },
      { text: "La ubicació de tots els ciutadans en temps real.", correct: false }
    ]
  },
  {
    question: "Quina és la relació entre dades obertes i protecció de dades?",
    number: 45,
    answers: [
      { text: "Són compatibles si les dades obertes han estat prèviament anonimitzades.", correct: true },
      { text: "Són incompatibles absolutament.", correct: false },
      { text: "La protecció de dades no importa en l'obertura.", correct: false },
      { text: "Les dades obertes són les mateixes que les dades personals.", correct: false }
    ]
  },
  {
    question: "Què és un 'catàleg de dades'?",
    number: 46,
    answers: [
      { text: "Inventari que descriu els conjunts de dades disponibles en un portal.", correct: true },
      { text: "Una llista de correus electrònics privats.", correct: false },
      { text: "Un catàleg de material d'oficina.", correct: false },
      { text: "Un manual de procediment sancionador.", correct: false }
    ]
  },
  {
    question: "En la fase d'emmagatzematge, què és vital?",
    number: 47,
    answers: [
      { text: "Garantir la seguretat i disponibilitat de les dades.", correct: true },
      { text: "Pagar un preu alt per l'espai.", correct: false },
      { text: "No fer mai còpies de seguretat.", correct: false },
      { text: "Esborrar les dades cada setmana.", correct: false }
    ]
  },
  {
    question: "Què és la 'Netesa' en la mineria de dades?",
    number: 48,
    answers: [
      { text: "Etapa prèvia per eliminar dades errònies o soroll.", correct: true },
      { text: "Passar l'aspiradora a l'edifici.", correct: false },
      { text: "Esborrar tots els discos durs.", correct: false },
      { text: "Canviar l'idioma dels arxius.", correct: false }
    ]
  },
  {
    question: "Les dades obertes formen part de l'estratègia de?",
    number: 49,
    answers: [
      { text: "Govern obert (Open Government).", correct: true },
      { text: "Secretisme oficial.", correct: false },
      { text: "Gestió privada tancada.", correct: false },
      { text: "Restricció informativa.", correct: false }
    ]
  },
  {
    question: "Què és un format obert?",
    number: 50,
    answers: [
      { text: "Format amb especificacions públiques que permeten l'accés sense restriccions.", correct: true },
      { text: "Format que només funciona amb un pagament.", correct: false },
      { text: "Format que no es pot llegir.", correct: false },
      { text: "Format antic que ja no existeix.", correct: false }
    ]
  },
  {
    question: "L'anàlisi de dades pot ser?",
    number: 51,
    answers: [
      { text: "Descriptiva, diagnòstica, predictiva o prescriptiva.", correct: true },
      { text: "Només manual.", correct: false },
      { text: "Només verbal.", correct: false },
      { text: "Inexistent.", correct: false }
    ]
  },
  {
    question: "La reutilització de dades obertes és?",
    number: 52,
    answers: [
      { text: "Un dret ciutadà reconegut en el marc de la transparència.", correct: true },
      { text: "Un acte il·legal.", correct: false },
      { text: "Una activitat reservada als informàtics.", correct: false },
      { text: "Una pràctica poc recomanada.", correct: false }
    ]
  },
  {
    question: "Què són les dades mestres (master data)?",
    number: 53,
    answers: [
      { text: "Dades bàsiques, fonamentals i compartides en tota l'organització.", correct: true },
      { text: "Dades de poca importància.", correct: false },
      { text: "Dades temporals que s'esborren cada dia.", correct: false },
      { text: "Dades dels correus brossa.", correct: false }
    ]
  },
  {
    question: "Què és el cicle de vida en un sistema d'informació?",
    number: 54,
    answers: [
      { text: "El procés des de la planificació fins a la retirada del sistema.", correct: true },
      { text: "El temps que el personal descansa.", correct: false },
      { text: "El procés d'imprimir tots els papers.", correct: false },
      { text: "Cap, no existeix.", correct: false }
    ]
  },
  {
    question: "La protecció de dades (RGPD) obliga a:",
    number: 55,
    answers: [
      { text: "Garantir la seguretat i privacitat de les dades personals.", correct: true },
      { text: "Publicar tots els noms a Internet.", correct: false },
      { text: "Vendre les dades personals.", correct: false },
      { text: "Esborrar qualsevol dada sense control.", correct: false }
    ]
  },
  {
    question: "Què aporta l'ús de dades obertes a l'Administració?",
    number: 56,
    answers: [
      { text: "Major rendició de comptes i millora de l'eficiència.", correct: true },
      { text: "Major opacitat i distància amb el ciutadà.", correct: false },
      { text: "Pèrdua de confiança pública.", correct: false },
      { text: "Més costos de gestió.", correct: false }
    ]
  },
  {
    question: "En mineria de dades, què significa 'patró'?",
    number: 57,
    answers: [
      { text: "Una regularitat o tendència observada en les dades.", correct: true },
      { text: "Un error d'escriptura.", correct: false },
      { text: "Un virus informàtic.", correct: false },
      { text: "Un nom de persona.", correct: false }
    ]
  },
  {
    question: "El model de dades serveix per?",
    number: 58,
    answers: [
      { text: "Representar l'estructura i relacions de les dades.", correct: true },
      { text: "Dibuixar cartells decoratius.", correct: false },
      { text: "Esborrar el contingut dels fitxers.", correct: false },
      { text: "Augmentar el consum d'energia.", correct: false }
    ]
  },
  {
    question: "Com es diu el procés d'integrar dades de fonts diverses?",
    number: 59,
    answers: [
      { text: "Integració de dades (o ETL: Extract, Transform, Load).", correct: true },
      { text: "Esborrat massiu.", correct: false },
      { text: "Impressió en paper.", correct: false },
      { text: "Arxiu oblidat.", correct: false }
    ]
  },
  {
    question: "La qualitat de les dades es mesura mitjançant:",
    number: 60,
    answers: [
      { text: "Exactitud, integritat, coherència i puntualitat.", correct: true },
      { text: "La quantitat de paper gastat.", correct: false },
      { text: "El temps que el servidor està apagat.", correct: false },
      { text: "La quantitat de gent que les pot llegir al mateix temps.", correct: false }
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