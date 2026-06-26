const TEST_ID = "tema15"; 
const questions = [
  {
    question: "Què s'entén per document administratiu electrònic?",
    number: 1,
    answers: [
      { text: "La informació de qualsevol naturalesa en suport electrònic, generada per una AAPP.", correct: true },
      { text: "Només els documents escanejats en format PDF.", correct: false },
      { text: "Els missatges de correu electrònic privats dels funcionaris.", correct: false },
      { text: "Els documents que han estat impresos i després escanejats.", correct: false }
    ]
  },
  {
    question: "Quin és l'objectiu principal de la gestió documental a la Generalitat?",
    number: 2,
    answers: [
      { text: "Garantir l'autenticitat, fiabilitat, integritat i disponibilitat dels documents.", correct: true },
      { text: "Reduir el nombre de documents al mínim possible.", correct: false },
      { text: "Imprimir tots els documents per seguretat.", correct: false },
      { text: "Emmagatzemar tots els documents sense cap ordre.", correct: false }
    ]
  },
  {
    question: "Què és la signatura electrònica reconeguda?",
    number: 3,
    answers: [
      { text: "La signatura electrònica basada en un certificat qualificat.", correct: true },
      { text: "Una imatge de la firma manuscrita inserida en un document.", correct: false },
      { text: "El número de DNI escrit al final del document.", correct: false },
      { text: "Una contrasenya senzilla de sis dígits.", correct: false }
    ]
  },
  {
    question: "Quina llei catalana regula el Sistema d'Arxius de Catalunya?",
    number: 4,
    answers: [
      { text: "Llei 10/2001, d'arxius i documents.", correct: true },
      { text: "Llei 29/2010, de mitjans electrònics.", correct: false },
      { text: "Llei 19/2014, de transparència.", correct: false },
      { text: "Decret 56/2009, d'administració electrònica.", correct: false }
    ]
  },
  {
    question: "Què garanteix el segell de temps (time stamping) en un document electrònic?",
    number: 5,
    answers: [
      { text: "L'existència de la dada en un moment temporal concret.", correct: true },
      { text: "Que el document ha estat llegit pel destinatari.", correct: false },
      { text: "La velocitat de transmissió del document.", correct: false },
      { text: "Que el document és inalterable per sempre.", correct: false }
    ]
  },
  {
    question: "Segons el Decret 13/2008, què és un expedient electrònic?",
    number: 6,
    answers: [
      { text: "El conjunt de documents electrònics corresponents a un procediment administratiu.", correct: true },
      { text: "Una carpeta compartida on els funcionaris guarden fotos.", correct: false },
      { text: "Un llistat de correus electrònics rebuts en un dia.", correct: false },
      { text: "La base de dades de tots els ciutadans de Catalunya.", correct: false }
    ]
  },
  {
    question: "Què és la 'metadada' en el context de la gestió documental?",
    number: 7,
    answers: [
      { text: "Informació estructurada que descriu i gestiona un document.", correct: true },
      { text: "La mida del fitxer en kilobytes.", correct: false },
      { text: "El nom de l'autor del document sense format.", correct: false },
      { text: "L'adreça web on s'ha publicat el document.", correct: false }
    ]
  },
  {
    question: "Què significa l'autenticitat d'un document?",
    number: 8,
    answers: [
      { text: "Que el document és el que afirma ser.", correct: true },
      { text: "Que el document ha estat redactat en català normatiu.", correct: false },
      { text: "Que el document ha estat aprovat per un notari.", correct: false },
      { text: "Que el document té moltes pàgines.", correct: false }
    ]
  },
  {
    question: "Què és el cicle de vida dels documents?",
    number: 9,
    answers: [
      { text: "Les fases des de la creació fins a l'eliminació o conservació permanent.", correct: true },
      { text: "El temps que tarda un funcionari a trobar un document.", correct: false },
      { text: "La durada de la bateria d'un ordinador.", correct: false },
      { text: "El període de tramitació d'una llei.", correct: false }
    ]
  },
  {
    question: "En quina fase s'eliminen els documents que no tenen valor històric?",
    number: 10,
    answers: [
      { text: "Fase d'esporga (o eliminació reglada).", correct: true },
      { text: "Fase de classificació.", correct: false },
      { text: "Fase d'arxiu històric.", correct: false },
      { text: "Fase de recepció.", correct: false }
    ]
  },
  {
    question: "Què permet la interoperabilitat en la gestió documental?",
    number: 11,
    answers: [
      { text: "Intercanviar documents entre sistemes d'informació diferents.", correct: true },
      { text: "Que tots els ordinadors siguin de la mateixa marca.", correct: false },
      { text: "Que els funcionaris treballin des de casa.", correct: false },
      { text: "Que els documents ocupin menys espai.", correct: false }
    ]
  },
  {
    question: "Què és un 'Codi Segur de Verificació' (CSV)?",
    number: 12,
    answers: [
      { text: "Un codi que permet contrastar la còpia impresa amb l'original electrònic.", correct: true },
      { text: "Una contrasenya per accedir a la intranet.", correct: false },
      { text: "Un sistema de vigilància per càmera.", correct: false },
      { text: "El número de referència d'un expedient judicial.", correct: false }
    ]
  },
  {
    question: "Com s'anomena l'arxiu que conserva documents d'ús habitual o recent?",
    number: 13,
    answers: [
      { text: "Arxiu de gestió (o d'oficina).", correct: true },
      { text: "Arxiu històric.", correct: false },
      { text: "Arxiu central.", correct: false },
      { text: "Arxiu secret.", correct: false }
    ]
  },
  {
    question: "Quin és el darrer pas en el cicle de vida d'un document amb valor històric?",
    number: 14,
    answers: [
      { text: "Transferència a l'Arxiu Històric.", correct: true },
      { text: "Destrucció immediata.", correct: false },
      { text: "Publicació al diari oficial.", correct: false },
      { text: "Esborrat del sistema informàtic.", correct: false }
    ]
  },
  {
    question: "Què garanteix la integritat d'un document electrònic?",
    number: 15,
    answers: [
      { text: "Que el contingut no ha estat alterat.", correct: true },
      { text: "Que el document és llegible per qualsevol persona.", correct: false },
      { text: "Que el document s'ha enviat ràpidament.", correct: false },
      { text: "Que el document té moltes còpies.", correct: false }
    ]
  },
  {
    question: "Segons la Llei 10/2001, qui és responsable dels documents?",
    number: 16,
    answers: [
      { text: "El titular de l'òrgan o unitat administrativa.", correct: true },
      { text: "El ciutadà que sol·licita el document.", correct: false },
      { text: "El departament d'informàtica.", correct: false },
      { text: "L'empresa proveïdora de programari.", correct: false }
    ]
  },
  {
    question: "Què és un sistema de gestió documental?",
    number: 17,
    answers: [
      { text: "L'eina informàtica per gestionar els documents al llarg de tot el seu cicle.", correct: true },
      { text: "Un armari metàl·lic on es guarden papers.", correct: false },
      { text: "El llistat d'assistència dels empleats.", correct: false },
      { text: "Un sistema de correu electrònic.", correct: false }
    ]
  },
  {
    question: "Què és el quadre de classificació?",
    number: 18,
    answers: [
      { text: "L'instrument que ordena els documents jeràrquicament segons les funcions.", correct: true },
      { text: "Una taula de preus de material d'oficina.", correct: false },
      { text: "La llista de funcionaris per departament.", correct: false },
      { text: "Un calendari de festius laborals.", correct: false }
    ]
  },
  {
    question: "Els documents electrònics han d'estar en formats:",
    number: 19,
    answers: [
      { text: "Oberts i que garanteixin la conservació a llarg termini.", correct: true },
      { text: "Que només es puguin obrir amb programari molt car.", correct: false },
      { text: "Format paper exclusivament.", correct: false },
      { text: "Formats propietaris que canvien cada any.", correct: false }
    ]
  },
  {
    question: "Què és una còpia autèntica?",
    number: 20,
    answers: [
      { text: "La còpia amb validesa jurídica d'un document original.", correct: true },
      { text: "Una fotocòpia simple.", correct: false },
      { text: "Un document imprès sense signatura.", correct: false },
      { text: "Un document que no té validesa legal.", correct: false }
    ]
  },
  {
    question: "Què és la signatura electrònica del personal al servei de l'AAPP?",
    number: 21,
    answers: [
      { text: "Un certificat digital d'empleat públic per a tràmits interns.", correct: true },
      { text: "Un segell de goma personal.", correct: false },
      { text: "Una clau que només té el secretari general.", correct: false },
      { text: "Una marca feta amb bolígraf.", correct: false }
    ]
  },
  {
    question: "El document electrònic ha d'incorporar metadades de:",
    number: 22,
    answers: [
      { text: "Context, contingut i estructura.", correct: true },
      { text: "Només la mida del fitxer.", correct: false },
      { text: "Només la data de creació.", correct: false },
      { text: "Informació personal del funcionari.", correct: false }
    ]
  },
  {
    question: "Què és l'esporga documental?",
    number: 23,
    answers: [
      { text: "El procediment reglat per eliminar documents sense valor.", correct: true },
      { text: "El trasllat de documents de despatx.", correct: false },
      { text: "La neteja física dels arxius.", correct: false },
      { text: "La publicació de documents en el web.", correct: false }
    ]
  },
  {
    question: "La signatura electrònica permet l'atribució:",
    number: 24,
    answers: [
      { text: "Del document al seu autor.", correct: true },
      { text: "Del document a un ciutadà qualsevol.", correct: false },
      { text: "De responsabilitat civil a l'AAPP.", correct: false },
      { text: "Del document a un ordinador sense usuari.", correct: false }
    ]
  },
  {
    question: "Què és un repositori?",
    number: 25,
    answers: [
      { text: "El sistema on s'emmagatzemen els documents electrònics de forma segura.", correct: true },
      { text: "Una biblioteca pública.", correct: false },
      { text: "Un tipus de paper de gran qualitat.", correct: false },
      { text: "L'escriptori d'un ordinador.", correct: false }
    ]
  },
  {
    question: "La gestió documental a Catalunya ha de complir el principi de:",
    number: 26,
    answers: [
      { text: "Transparent i accés a la informació.", correct: true },
      { text: "Secretisme i opacitat.", correct: false },
      { text: "Centralització total de tots els papers.", correct: false },
      { text: "Destrucció de tots els documents cada any.", correct: false }
    ]
  },
  {
    question: "Què són les 'taules d'avaluació documental'?",
    number: 27,
    answers: [
      { text: "Instruments que fixen els terminis de conservació i l'eliminació.", correct: true },
      { text: "Taules de reunions de directius.", correct: false },
      { text: "Llistes de preus de lloguer d'espai d'arxiu.", correct: false },
      { text: "Models d'informes tècnics.", correct: false }
    ]
  },
  {
    question: "El document electrònic ha de ser accessible per:",
    number: 28,
    answers: [
      { text: "Les persones amb discapacitats.", correct: true },
      { text: "Només les persones que parlen llengües estrangeres.", correct: false },
      { text: "Només els tècnics informàtics.", correct: false },
      { text: "Només les autoritats polítiques.", correct: false }
    ]
  },
  {
    question: "Què és la signatura electrònica avançada?",
    number: 29,
    answers: [
      { text: "La signatura vinculada de manera única al signant.", correct: true },
      { text: "Una signatura que té dibuixos.", correct: false },
      { text: "Una signatura feta a mà alçada.", correct: false },
      { text: "La signatura de qualsevol persona sense certificat.", correct: false }
    ]
  },
  {
    question: "Quina característica permet assegurar que el document no s'ha modificat?",
    number: 30,
    answers: [
      { text: "La integritat.", correct: true },
      { text: "La facilitat d'ús.", correct: false },
      { text: "La mida del fitxer.", correct: false },
      { text: "L'antiguitat del document.", correct: false }
    ]
  },
  {
    question: "L'Arxiu Nacional de Catalunya (ANC) té la funció de:",
    number: 31,
    answers: [
      { text: "Conservar i difondre el patrimoni documental català.", correct: true },
      { text: "Reparar els ordinadors de la Generalitat.", correct: false },
      { text: "Gestionar el personal funcionari.", correct: false },
      { text: "Escriure les lleis del Parlament.", correct: false }
    ]
  },
  {
    question: "La signatura electrònica es pot verificar?",
    number: 32,
    answers: [
      { text: "Sí, a través de sistemes de validació electrònics.", correct: true },
      { text: "No, és impossible de verificar.", correct: false },
      { text: "Només si es té una còpia en paper.", correct: false },
      { text: "Només per experts en criptografia.", correct: false }
    ]
  },
  {
    question: "Què s'entén per metadades de context?",
    number: 33,
    answers: [
      { text: "Dades sobre l'origen, autoria i procediment del document.", correct: true },
      { text: "La mida del document en octets.", correct: false },
      { text: "La temperatura de la sala d'arxiu.", correct: false },
      { text: "La llista de paraules clau sense sentit.", correct: false }
    ]
  },
  {
    question: "Què es fa amb un document administratiu electrònic quan finalitza el tràmit?",
    number: 34,
    answers: [
      { text: "S'arxiva segons els criteris de gestió documental.", correct: true },
      { text: "S'elimina immediatament.", correct: false },
      { text: "Es regala al ciutadà.", correct: false },
      { text: "Es deixa a l'escriptori de l'ordinador.", correct: false }
    ]
  },
  {
    question: "El document electrònic pot incloure:",
    number: 35,
    answers: [
      { text: "Imatges, vídeos, àudios i textos.", correct: true },
      { text: "Només textos sense formats.", correct: false },
      { text: "Cap tipus d'arxiu multimèdia.", correct: false },
      { text: "Només fitxers en format Word.", correct: false }
    ]
  },
  {
    question: "Què garanteix la disponibilitat del document?",
    number: 36,
    answers: [
      { text: "Que es pot trobar i consultar quan es necessita.", correct: true },
      { text: "Que està disponible només per a directius.", correct: false },
      { text: "Que es pot esborrar quan es vulgui.", correct: false },
      { text: "Que està penjat a les xarxes socials.", correct: false }
    ]
  },
  {
    question: "La normativa sobre gestió documental protegeix:",
    number: 37,
    answers: [
      { text: "El patrimoni documental.", correct: true },
      { text: "Només els documents d'Hisenda.", correct: false },
      { text: "Només els documents del President.", correct: false },
      { text: "Res, els documents no tenen protecció.", correct: false }
    ]
  },
  {
    question: "Un expedient electrònic pot ser parcial?",
    number: 38,
    answers: [
      { text: "No, ha d'estar complet i estructurat.", correct: true },
      { text: "Sí, es pot deixar sense documents.", correct: false },
      { text: "Sí, depèn del dia.", correct: false },
      { text: "No existeixen els expedients parcials.", correct: false }
    ]
  },
  {
    question: "Els documents electrònics poden tenir signatura múltiple?",
    number: 39,
    answers: [
      { text: "Sí, diversos usuaris poden signar un mateix document.", correct: true },
      { text: "No, només una persona pot signar.", correct: false },
      { text: "Només el cap pot signar.", correct: false },
      { text: "La signatura electrònica no permet això.", correct: false }
    ]
  },
  {
    question: "Què és la conservació a llarg termini?",
    number: 40,
    answers: [
      { text: "Mesures perquè els documents siguin llegibles durant anys.", correct: true },
      { text: "Guardar el document a casa.", correct: false },
      { text: "Imprimir moltes còpies per si una es perd.", correct: false },
      { text: "No fer res i esperar que duri.", correct: false }
    ]
  },
  {
    question: "Qui estableix les pautes de la gestió documental a Catalunya?",
    number: 41,
    answers: [
      { text: "La Comissió Nacional d'Accés, Avaluació i Tria Documental.", correct: true },
      { text: "Un consultor extern qualsevol.", correct: false },
      { text: "L'empresa de neteja.", correct: false },
      { text: "Cap organisme públic.", correct: false }
    ]
  },
  {
    question: "La signatura electrònica té:",
    number: 42,
    answers: [
      { text: "Plena validesa jurídica.", correct: true },
      { text: "Només validesa informativa.", correct: false },
      { text: "Validesa només en l'àmbit privat.", correct: false },
      { text: "Cap validesa legal.", correct: false }
    ]
  },
  {
    question: "Els metadades han d'estar en format:",
    number: 43,
    answers: [
      { text: "Estàndard i interoperable.", correct: true },
      { text: "Secret i propietàri.", correct: false },
      { text: "Qualsevol, no importa el format.", correct: false },
      { text: "Paper.", correct: false }
    ]
  },
  {
    question: "Què significa que un document és fiable?",
    number: 44,
    answers: [
      { text: "Que el seu contingut és verídic i reflecteix el fet que documenta.", correct: true },
      { text: "Que té un disseny molt bonic.", correct: false },
      { text: "Que ha estat escrit per un funcionari veterà.", correct: false },
      { text: "Que ha estat publicat moltes vegades.", correct: false }
    ]
  },
  {
    question: "Quina és la funció de l'arxiu central?",
    number: 45,
    answers: [
      { text: "Emmagatzemar documents d'ús poc freqüent dels departaments.", correct: true },
      { text: "Fer fotocòpies ràpides.", correct: false },
      { text: "Atendre el públic per telèfon.", correct: false },
      { text: "Gestionar el personal.", correct: false }
    ]
  },
  {
    question: "La signatura electrònica pot utilitzar certificats:",
    number: 46,
    answers: [
      { text: "De persona física, d'empleat públic o de segell electrònic.", correct: true },
      { text: "Només d'una marca de cotxe.", correct: false },
      { text: "Només si es té una targeta bancària.", correct: false },
      { text: "Cap, no es fan servir certificats.", correct: false }
    ]
  },
  {
    question: "Què és un document electrònic signat?",
    number: 47,
    answers: [
      { text: "Un document amb el fitxer de signatura incrustat o vinculat.", correct: true },
      { text: "Un document amb una foto d'una signatura.", correct: false },
      { text: "Un document que diu 'signat' amb lletres.", correct: false },
      { text: "Un document que porta una etiqueta enganxada.", correct: false }
    ]
  },
  {
    question: "El quadre de classificació és un instrument:",
    number: 48,
    answers: [
      { text: "Obligatori en el sistema de gestió documental.", correct: true },
      { text: "Opcional i poc utilitzat.", correct: false },
      { text: "Que només s'utilitza en arxius petits.", correct: false },
      { text: "Prohibit per llei.", correct: false }
    ]
  },
  {
    question: "Què s'ha de garantir en l'arxiu electrònic?",
    number: 49,
    answers: [
      { text: "La conservació a llarg termini.", correct: true },
      { text: "Que es pugui eliminar sense permís.", correct: false },
      { text: "Que els funcionaris hi entrin a jugar.", correct: false },
      { text: "Res, l'arxiu electrònic no té garanties.", correct: false }
    ]
  },
  {
    question: "Les metadades són imprescindibles per a:",
    number: 50,
    answers: [
      { text: "La recuperació i gestió eficient dels documents.", correct: true },
      { text: "Que el fitxer pesi menys.", correct: false },
      { text: "Que la pantalla brilli més.", correct: false },
      { text: "No serveixen per a res.", correct: false }
    ]
  },
  {
    question: "La gestió documental és responsabilitat de:",
    number: 51,
    answers: [
      { text: "Totes les unitats i empleats de l'AAPP.", correct: true },
      { text: "Només els arxivers.", correct: false },
      { text: "Només el departament d'informàtica.", correct: false },
      { text: "Ningú, es fa sola.", correct: false }
    ]
  },
  {
    question: "Què garanteix el segell electrònic?",
    number: 52,
    answers: [
      { text: "L'autenticitat de l'origen i la integritat del document d'una AAPP.", correct: true },
      { text: "Que el document és el més important de la setmana.", correct: false },
      { text: "Que el funcionari és simpàtic.", correct: false },
      { text: "Cap seguretat, només és estètic.", correct: false }
    ]
  },
  {
    question: "Els documents amb valor històric s'han de:",
    number: 53,
    answers: [
      { text: "Conservar permanentment.", correct: true },
      { text: "Destruir als 10 anys.", correct: false },
      { text: "Eliminar quan canvia el govern.", correct: false },
      { text: "Donar a una ONG.", correct: false }
    ]
  },
  {
    question: "El document administratiu electrònic pot tenir un format:",
    number: 54,
    answers: [
      { text: "Llegible per ordinador.", correct: true },
      { text: "Només en un idioma estranger.", correct: false },
      { text: "Només si és un arxiu molt gran.", correct: false },
      { text: "Cap format, han de ser sense format.", correct: false }
    ]
  },
  {
    question: "La interoperabilitat es basa en:",
    number: 55,
    answers: [
      { text: "L'ús d'estàndards oberts.", correct: true },
      { text: "L'ús de sistemes secrets.", correct: false },
      { text: "La compra de maquinari car.", correct: false },
      { text: "La prohibició d'Internet.", correct: false }
    ]
  },
  {
    question: "L'arxiu històric és el que conserva:",
    number: 56,
    answers: [
      { text: "Documents amb valor històric i cultural.", correct: true },
      { text: "Factures del mes passat.", correct: false },
      { text: "Correu brossa.", correct: false },
      { text: "Documentació provisional.", correct: false }
    ]
  },
  {
    question: "Què permet el certificat d'empleat públic?",
    number: 57,
    answers: [
      { text: "Signar documents en nom de l'administració.", correct: true },
      { text: "Pagar impostos personals.", correct: false },
      { text: "Accedir als comptes bancaris del ciutadà.", correct: false },
      { text: "No permet res.", correct: false }
    ]
  },
  {
    question: "La gestió documental és un pilar de:",
    number: 58,
    answers: [
      { text: "L'administració electrònica i la transparència.", correct: true },
      { text: "La corrupció i el desordre.", correct: false },
      { text: "L'arxiu de les fotos personals.", correct: false },
      { text: "El sistema judicial privat.", correct: false }
    ]
  },
  {
    question: "El cicle de vida del document finalitza quan:",
    number: 59,
    answers: [
      { text: "Es destrueix o es conserva definitivament.", correct: true },
      { text: "El funcionari va de vacances.", correct: false },
      { text: "El document canvia de nom.", correct: false },
      { text: "Es fa una còpia de seguretat.", correct: false }
    ]
  },
  {
    question: "La documentació electrònica ha de ser:",
    number: 60,
    answers: [
      { text: "Localitzable, íntegra i accessible.", correct: true },
      { text: "Amagada i poc accessible.", correct: false },
      { text: "Desordenada.", correct: false },
      { text: "Només en format imprès.", correct: false }
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