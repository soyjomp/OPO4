const TEST_ID = "tema16"; 
const questions = [
  {
    question: "Quina és la funció principal d'un certificat administratiu?",
    number: 1,
    answers: [
      { text: "Donar fe d'un fet o situació constatada per l'òrgan emissor.", correct: true },
      { text: "Instruir un procediment sancionador.", correct: false },
      { text: "Realitzar una comunicació entre diferents administracions.", correct: false },
      { text: "Establir una norma de caràcter general.", correct: false }
    ]
  },
  {
    question: "Com s'anomena la part d'una acta on es reflecteix el que ha passat en la reunió?",
    number: 2,
    answers: [
      { text: "Cos o contingut.", correct: true },
      { text: "Antecedents.", correct: false },
      { text: "Capçalera.", correct: false },
      { text: "Diligència.", correct: false }
    ]
  },
  {
    question: "Quina és la forma correcta d'evitar el sexisme en l'ús de càrrecs?",
    number: 3,
    answers: [
      { text: "Utilitzar termes genèrics com 'la persona titular' o 'la direcció'.", correct: true },
      { text: "Emprar sempre el masculí perquè inclou el femení.", correct: false },
      { text: "Alternar obligatòriament en cada frase el masculí i el femení.", correct: false },
      { text: "Afegir sempre el cognom de la persona després del càrrec.", correct: false }
    ]
  },
  {
    question: "En una carta administrativa, on es col·loca habitualment la referència?",
    number: 4,
    answers: [
      { text: "A la part superior, a prop de la capçalera.", correct: true },
      { text: "Al peu de pàgina.", correct: false },
      { text: "Just abans de la signatura.", correct: false },
      { text: "Al final del document, a l'annex.", correct: false }
    ]
  },
  {
    question: "Què ha de constar obligatòriament en l'encapçalament d'una acta?",
    number: 5,
    answers: [
      { text: "Lloc, data i hora de la reunió.", correct: true },
      { text: "Els sous de tots els assistents.", correct: false },
      { text: "L'esborrany de la propera llei.", correct: false },
      { text: "L'adreça particular dels assistents.", correct: false }
    ]
  },
  {
    question: "En llenguatge no sexista, què és preferible evitar?",
    number: 6,
    answers: [
      { text: "Els salts tipogràfics com 'els/les alumnes'.", correct: true },
      { text: "L'ús de col·lectius com 'el professorat'.", correct: false },
      { text: "L'ús de formes neutres com 'la persona responsable'.", correct: false },
      { text: "La menció explícita de gèneres quan és necessari.", correct: false }
    ]
  },
  {
    question: "Un certificat ha d'estar signat per:",
    number: 7,
    answers: [
      { text: "La persona que té la competència per donar fe del fet.", correct: true },
      { text: "Qualsevol funcionari de l'oficina.", correct: false },
      { text: "El ciutadà que el sol·licita.", correct: false },
      { text: "Tots els funcionaris del departament.", correct: false }
    ]
  },
  {
    question: "En una carta administrativa, què és la 'fórmula de cortesia'?",
    number: 8,
    answers: [
      { text: "La salutació o comiat formal.", correct: true },
      { text: "L'exposició dels motius de la carta.", correct: false },
      { text: "El número de registre de sortida.", correct: false },
      { text: "El logotip de la Generalitat.", correct: false }
    ]
  },
  {
    question: "Què és una diligència en un document administratiu?",
    number: 9,
    answers: [
      { text: "Una anotació per fer constar un tràmit o un fet puntual.", correct: true },
      { text: "Un recurs contra una resolució.", correct: false },
      { text: "La part final d'una llei.", correct: false },
      { text: "Una notificació judicial.", correct: false }
    ]
  },
  {
    question: "Com s'ha de tractar el llenguatge en la documentació administrativa?",
    number: 10,
    answers: [
      { text: "Clar, precís, accessible i respectuós amb la diversitat.", correct: true },
      { text: "Molt tècnic, barroc i allunyat del ciutadà.", correct: false },
      { text: "Col·loquial i informal per guanyar proximitat.", correct: false },
      { text: "En llatí i llenguatge jurídic arcaic.", correct: false }
    ]
  },
  {
    question: "Quin és el document que recull els acords d'un òrgan col·legiat?",
    number: 11,
    answers: [
      { text: "L'acta.", correct: true },
      { text: "El certificat.", correct: false },
      { text: "L'informe.", correct: false },
      { text: "La providència.", correct: false }
    ]
  },
  {
    question: "En el llenguatge inclusiu, què s'entén per 'doblet'?",
    number: 12,
    answers: [
      { text: "L'ús repetitiu de masculí i femení (els i les, ciutadans i ciutadanes).", correct: true },
      { text: "L'ús exclusiu del gènere neutre.", correct: false },
      { text: "L'ús de termes abstractes com 'la direcció'.", correct: false },
      { text: "La utilització d'acrònims.", correct: false }
    ]
  },
  {
    question: "Quina part de l'acta conté els punts de l'ordre del dia?",
    number: 13,
    answers: [
      { text: "L'ordre del dia inicial.", correct: true },
      { text: "El tancament de l'acta.", correct: false },
      { text: "L'annex d'assistents.", correct: false },
      { text: "Les signatures finals.", correct: false }
    ]
  },
  {
    question: "Quina és una característica bàsica de la redacció administrativa?",
    number: 14,
    answers: [
      { text: "La formalitat i la claredat.", correct: true },
      { text: "L'ambigüitat en els terminis.", correct: false },
      { text: "L'absència de puntuació.", correct: false },
      { text: "La utilització de jerga poc comprensible.", correct: false }
    ]
  },
  {
    question: "Quin document s'utilitza per demanar informació interna entre unitats?",
    number: 15,
    answers: [
      { text: "La nota interior o comunicació interna.", correct: true },
      { text: "El certificat.", correct: false },
      { text: "L'anunci.", correct: false },
      { text: "La sentència.", correct: false }
    ]
  },
  {
    question: "Què cal evitar en la redacció de documents administratius?",
    number: 16,
    answers: [
      { text: "Els termes sexistes i les construccions que exclouen gèneres.", correct: true },
      { text: "La utilització de la llengua catalana.", correct: false },
      { text: "L'ús de frases curtes i clares.", correct: false },
      { text: "L'ús de termes que expressin jerarquia.", correct: false }
    ]
  },
  {
    question: "Qui signa l'acta d'una reunió?",
    number: 17,
    answers: [
      { text: "El secretari o secretària, amb el vistiplau de la presidència.", correct: true },
      { text: "Només el ciutadà que ha assistit.", correct: false },
      { text: "Tots els ciutadans del municipi.", correct: false },
      { text: "El funcionari de registre d'entrada.", correct: false }
    ]
  },
  {
    question: "El llenguatge inclusiu a l'Administració té com a objectiu:",
    number: 18,
    answers: [
      { text: "Fer visible la presència de dones i homes en tots els àmbits.", correct: true },
      { text: "Complicar innecessàriament la redacció dels textos.", correct: false },
      { text: "Evitar l'ús del català.", correct: false },
      { text: "Diferenciar els sous entre gèneres.", correct: false }
    ]
  },
  {
    question: "En una carta, l'avantfirma és:",
    number: 19,
    answers: [
      { text: "La indicació del càrrec o funció de qui signa.", correct: true },
      { text: "La data de l'enviament.", correct: false },
      { text: "La salutació inicial.", correct: false },
      { text: "L'adreça del destinatari.", correct: false }
    ]
  },
  {
    question: "Què és un document administratiu de comunicació?",
    number: 20,
    answers: [
      { text: "El que posa en coneixement d'altres òrgans o persones determinades decisions.", correct: true },
      { text: "Un document que només serveix per destruir-lo.", correct: false },
      { text: "Un document que conté una norma reglamentària.", correct: false },
      { text: "Un document judicial d'obligat compliment.", correct: false }
    ]
  },
  {
    question: "Com s'ha de redactar un certificat per ser objectiu?",
    number: 21,
    answers: [
      { text: "Limitant-se a fer constar les dades i fets verificats.", correct: true },
      { text: "Donant opinions personals sobre la persona.", correct: false },
      { text: "Utilitzant un llenguatge ple d'adjectius positius.", correct: false },
      { text: "Afegint rumors escoltats a l'oficina.", correct: false }
    ]
  },
  {
    question: "Quina és una alternativa al sexisme en el llenguatge?",
    number: 22,
    answers: [
      { text: "Utilitzar col·lectius (la plantilla, el personal, la ciutadania).", correct: true },
      { text: "Sempre emprar l'article masculí.", correct: false },
      { text: "Escriure el text sense cap tipus de subjecte.", correct: false },
      { text: "Emprar abreviatures inintel·ligibles.", correct: false }
    ]
  },
  {
    question: "L'ordre del dia d'una acta ha d'especificar:",
    number: 23,
    answers: [
      { text: "Els temes que es tractaran en la reunió.", correct: true },
      { text: "La història de la Generalitat.", correct: false },
      { text: "El pressupost personal de l'alcalde.", correct: false },
      { text: "El temps de descans dels assistents.", correct: false }
    ]
  },
  {
    question: "Què ha de contenir sempre una carta oficial?",
    number: 24,
    answers: [
      { text: "Lloc, data, remitent, destinatari i cos del missatge.", correct: true },
      { text: "La signatura de tots els funcionaris de la unitat.", correct: false },
      { text: "Un segell d'or de l'Administració.", correct: false },
      { text: "L'horari personal del secretari.", correct: false }
    ]
  },
  {
    question: "La redacció administrativa ha de ser:",
    number: 25,
    answers: [
      { text: "Formal però comprensible.", correct: true },
      { text: "Enrevessada i confusa.", correct: false },
      { text: "Exclusivament oral.", correct: false },
      { text: "Poc precisa.", correct: false }
    ]
  },
  {
    question: "Els documents administratius tenen com a objectiu final:",
    number: 26,
    answers: [
      { text: "Gestionar l'activitat administrativa amb eficàcia.", correct: true },
      { text: "Donar feina als funcionaris.", correct: false },
      { text: "Confondre al ciutadà.", correct: false },
      { text: "Fomentar el consum de paper.", correct: false }
    ]
  },
  {
    question: "Un certificat mai ha de contenir:",
    number: 27,
    answers: [
      { text: "Valoracions subjectives o apreciacions personals.", correct: true },
      { text: "Dades identificatives del titular.", correct: false },
      { text: "La signatura del competent.", correct: false },
      { text: "El segell de l'òrgan emissor.", correct: false }
    ]
  },
  {
    question: "En les actes, l'apartat de 'desenvolupament' serveix per:",
    number: 28,
    answers: [
      { text: "Fer constar les intervencions i els resultats de les votacions.", correct: true },
      { text: "Escriure la llista de la compra de l'oficina.", correct: false },
      { text: "Guardar els tiquets de despeses.", correct: false },
      { text: "Publicar les fotos de la reunió.", correct: false }
    ]
  },
  {
    question: "Per què és important el llenguatge no sexista?",
    number: 29,
    answers: [
      { text: "Per respectar el principi d'igualtat i no discriminació.", correct: true },
      { text: "Perquè obliga a escriure més pàgines.", correct: false },
      { text: "Perquè és obligatori per fer publicitat.", correct: false },
      { text: "No té cap importància real.", correct: false }
    ]
  },
  {
    question: "La 'referència' en una carta serveix per:",
    number: 30,
    answers: [
      { text: "Identificar l'assumpte o número d'expedient al qual es refereix.", correct: true },
      { text: "Saber el nom del carrer de l'oficina.", correct: false },
      { text: "Indicar el preu de la tramesa.", correct: false },
      { text: "Donar una salutació extra.", correct: false }
    ]
  },
  {
    question: "L'estil administratiu es caracteritza per:",
    number: 31,
    answers: [
      { text: "L'ús de frases ordenades i una terminologia precisa.", correct: true },
      { text: "L'abús d'interjeccions i exclamacions.", correct: false },
      { text: "L'ús de llenguatge poètic o metafòric.", correct: false },
      { text: "La improvisació en la redacció.", correct: false }
    ]
  },
  {
    question: "L'ús de gèneres gramaticals neutres és una tècnica per:",
    number: 32,
    answers: [
      { text: "Evitar el sexisme en la redacció.", correct: true },
      { text: "Fer el document més llarg.", correct: false },
      { text: "Confondre al destinatari.", correct: false },
      { text: "Complir amb una normativa estètica.", correct: false }
    ]
  },
  {
    question: "Les actes han de ser un registre:",
    number: 33,
    answers: [
      { text: "Fidel i objectiu d'una reunió.", correct: true },
      { text: "Subjectiu dels sentiments dels assistents.", correct: false },
      { text: "Parcial segons qui hagi guanyat la votació.", correct: false },
      { text: "On només es posa el que un vol.", correct: false }
    ]
  },
  {
    question: "Un certificat ha de portar obligatòriament:",
    number: 34,
    answers: [
      { text: "El segell de l'Administració.", correct: true },
      { text: "Una fotografia de qui ho sol·licita.", correct: false },
      { text: "El número de telèfon personal del funcionari.", correct: false },
      { text: "La signatura del ciutadà.", correct: false }
    ]
  },
  {
    question: "Una nota interior s'utilitza per a:",
    number: 35,
    answers: [
      { text: "Comunicacions entre diferents departaments d'una mateixa AAPP.", correct: true },
      { text: "Comunicar-se amb una empresa privada.", correct: false },
      { text: "Publicar una llei en el DOGC.", correct: false },
      { text: "Deixar un missatge a un familiar.", correct: false }
    ]
  },
  {
    question: "En la redacció administrativa, s'ha d'evitar:",
    number: 36,
    answers: [
      { text: "La repetició innecessària de paraules.", correct: true },
      { text: "L'ús de la llengua catalana estàndard.", correct: false },
      { text: "La cortesia formal.", correct: false },
      { text: "La precisió terminològica.", correct: false }
    ]
  },
  {
    question: "Què és la capçalera d'una carta?",
    number: 37,
    answers: [
      { text: "La part superior amb l'identificador de l'organisme.", correct: true },
      { text: "La firma al final del document.", correct: false },
      { text: "L'adreça del destinatari al sobre.", correct: false },
      { text: "Les dades de contacte del servei de correus.", correct: false }
    ]
  },
  {
    question: "L'ús de formes com 'les persones interessades' en comptes de 'els interessats' és:",
    number: 38,
    answers: [
      { text: "Un recurs de llenguatge inclusiu.", correct: true },
      { text: "Un error gramatical greu.", correct: false },
      { text: "Una falta de respecte a la llei.", correct: false },
      { text: "Una forma de ser més tècnic.", correct: false }
    ]
  },
  {
    question: "Com s'anomena l'informe que acompanya sovint una decisió administrativa?",
    number: 39,
    answers: [
      { text: "Document d'instrucció o informe justificatiu.", correct: true },
      { text: "Carta de comiat.", correct: false },
      { text: "Acta de naixement.", correct: false },
      { text: "Providència judicial.", correct: false }
    ]
  },
  {
    question: "En una reunió, qui redacta l'acta?",
    number: 40,
    answers: [
      { text: "El secretari o secretària.", correct: true },
      { text: "El president o presidenta.", correct: false },
      { text: "El funcionari més jove.", correct: false },
      { text: "Cualquier persona que hi vulgui participar.", correct: false }
    ]
  },
  {
    question: "Els documents administratius han de seguir una estructura:",
    number: 41,
    answers: [
      { text: "Normalitzada per facilitar-ne la lectura i el tràmit.", correct: true },
      { text: "Inventada per cada funcionari.", correct: false },
      { text: "Diferent cada cop que s'escriu.", correct: false },
      { text: "Totalment lliure i sense ordre.", correct: false }
    ]
  },
  {
    question: "Què ha d'evitar el llenguatge administratiu modern?",
    number: 42,
    answers: [
      { text: "L'abús de fórmules arcaiques i poc clares.", correct: true },
      { text: "La utilització de verbs d'acció.", correct: false },
      { text: "La claredat en les instruccions.", correct: false },
      { text: "La brevetat en els missatges.", correct: false }
    ]
  },
  {
    question: "Què és la 'fórmula de tancament' d'una carta?",
    number: 43,
    answers: [
      { text: "Un comiat formal abans de la signatura.", correct: true },
      { text: "L'adreça postal del destinatari.", correct: false },
      { text: "La data de presentació.", correct: false },
      { text: "La signatura del superior jeràrquic.", correct: false }
    ]
  },
  {
    question: "Per què s'usen els col·lectius (el professorat, l'alumnat)?",
    number: 44,
    answers: [
      { text: "Per ser més inclusius i neutres.", correct: true },
      { text: "Perquè sonen més importants.", correct: false },
      { text: "Perquè no tenen gènere gramatical.", correct: false },
      { text: "Per estalviar espai en el full.", correct: false }
    ]
  },
  {
    question: "Quina part de l'acta és on es donen per aprovats els temes?",
    number: 45,
    answers: [
      { text: "L'apartat d'acords.", correct: true },
      { text: "L'apartat d'antecedents.", correct: false },
      { text: "L'ordre del dia.", correct: false },
      { text: "El títol del document.", correct: false }
    ]
  },
  {
    question: "El llenguatge administratiu ha de ser precís per:",
    number: 46,
    answers: [
      { text: "Evitar confusions i garanties jurídiques.", correct: true },
      { text: "Complir amb la moda literària.", correct: false },
      { text: "Fer creure que sabem molt.", correct: false },
      { text: "No deixar marge per al dubte.", correct: false }
    ]
  },
  {
    question: "Un document administratiu ha de ser sempre:",
    number: 47,
    answers: [
      { text: "Autèntic, integrit i fidel a la veritat.", correct: true },
      { text: "Extens i complicat.", correct: false },
      { text: "Molt subjectiu.", correct: false },
      { text: "Anònim.", correct: false }
    ]
  },
  {
    question: "Què s'ha de fer amb les dades personals en un document públic?",
    number: 48,
    answers: [
      { text: "Protegir-les segons la normativa vigent.", correct: true },
      { text: "Publicar-les sempre a Internet.", correct: false },
      { text: "Donar-les a qualsevol persona que les demani.", correct: false },
      { text: "Utilitzar-les per a finalitats privades.", correct: false }
    ]
  },
  {
    question: "L'ús de formes neutres (la direcció, la prefectura) és:",
    number: 49,
    answers: [
      { text: "Un bon recurs per a l'ús de llenguatge no sexista.", correct: true },
      { text: "Una manera d'evitar parlar de càrrecs.", correct: false },
      { text: "Obligatori en totes les cartes.", correct: false },
      { text: "Un error greu en la redacció.", correct: false }
    ]
  },
  {
    question: "Quina és la funció de la signatura en un document?",
    number: 50,
    answers: [
      { text: "Identificar i validar el document per part del responsable.", correct: true },
      { text: "Fer bonic el document.", correct: false },
      { text: "Emplenar l'espai que sobra al final.", correct: false },
      { text: "No té cap funció pràctica.", correct: false }
    ]
  },
  {
    question: "Els documents administratius han d'utilitzar:",
    number: 51,
    answers: [
      { text: "Terminologia pròpia de la matèria.", correct: true },
      { text: "Paraules en altres idiomes constantment.", correct: false },
      { text: "Paraules de diferents dialectes.", correct: false },
      { text: "Un llenguatge molt complicat.", correct: false }
    ]
  },
  {
    question: "L'acta és un document que dóna fe de:",
    number: 52,
    answers: [
      { text: "El que ha estat tractat i decidit en una reunió.", correct: true },
      { text: "El que ha pensat cada assistent.", correct: false },
      { text: "El que ha passat al carrer durant la reunió.", correct: false },
      { text: "La història personal del secretari.", correct: false }
    ]
  },
  {
    question: "La claredat en els documents administratius és un dret de:",
    number: 53,
    answers: [
      { text: "La ciutadania.", correct: true },
      { text: "L'Administració.", correct: false },
      { text: "Els funcionaris.", correct: false },
      { text: "Les empreses privades.", correct: false }
    ]
  },
  {
    question: "Les notes interiors solen ser documents:",
    number: 54,
    answers: [
      { text: "Breus i concrets.", correct: true },
      { text: "Extensos i molt llargs.", correct: false },
      { text: "Molt formals i cerimoniosos.", correct: false },
      { text: "Poc fiables.", correct: false }
    ]
  },
  {
    question: "El llenguatge inclusiu evita:",
    number: 55,
    answers: [
      { text: "L'invisibilitat d'un dels sexes en els textos.", correct: true },
      { text: "La comprensió per part de tothom.", correct: false },
      { text: "L'ús de la llengua correcta.", correct: false },
      { text: "La formalitat administrativa.", correct: false }
    ]
  },
  {
    question: "Què s'ha d'indicar en un certificat?",
    number: 56,
    answers: [
      { text: "Lloc, data, òrgan que el signa i el fet certificat.", correct: true },
      { text: "Només la signatura.", correct: false },
      { text: "La biografia de qui l'emet.", correct: false },
      { text: "Cap dada personal.", correct: false }
    ]
  },
  {
    question: "Com s'ha d'escriure el nom d'un càrrec administratiu?",
    number: 57,
    answers: [
      { text: "Normalment amb majúscules inicials en determinats casos.", correct: true },
      { text: "Sempre amb totes les lletres en minúscula.", correct: false },
      { text: "Sempre amb totes les lletres en majúscula.", correct: false },
      { text: "No s'ha d'escriure mai el nom del càrrec.", correct: false }
    ]
  },
  {
    question: "La precisió terminològica en un document administratiu serveix per:",
    number: 58,
    answers: [
      { text: "Garantir la seguretat jurídica.", correct: true },
      { text: "Donar-se aires de saviesa.", correct: false },
      { text: "Que el document sembli vell.", correct: false },
      { text: "Que ningú l'entengui.", correct: false }
    ]
  },
  {
    question: "Els documents administratius han de ser accessibles:",
    number: 59,
    answers: [
      { text: "Per a tota la ciutadania, incloses les persones amb discapacitat.", correct: true },
      { text: "Només per als professionals del sector.", correct: false },
      { text: "Només quan l'Administració té temps.", correct: false },
      { text: "Mai, són secrets.", correct: false }
    ]
  },
  {
    question: "El llenguatge administratiu de la Generalitat ha de complir:",
    number: 60,
    answers: [
      { text: "La normativa lingüística del català i les guies d'estil pròpies.", correct: true },
      { text: "Només la normativa gramatical de qualsevol llengua.", correct: false },
      { text: "Cap normativa, cada departament fa el que vol.", correct: false },
      { text: "Únicament la normativa d'altres estats.", correct: false }
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