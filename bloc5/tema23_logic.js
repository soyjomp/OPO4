const TEST_ID = "tema23"; 
const questions = [
  {
    question: "En què consisteix fonamentalment el delicte de prevaricació administrativa?",
    number: 1,
    answers: [
      { text: "Dictar, a sabudes, una resolució arbitrària en un assumpte administratiu.", correct: true },
      { text: "Acceptar un regal a canvi d'un favor.", correct: false },
      { text: "Utilitzar influències per obtenir un contracte.", correct: false },
      { text: "Malversar fons públics.", correct: false }
    ]
  },
  {
    question: "Quina és l'element subjectiu necessari per al delicte de prevaricació?",
    number: 2,
    answers: [
      { text: "L'actuació a sabudes de la injustícia de la resolució.", correct: true },
      { text: "L'existència d'un perjudici econòmic demostrable.", correct: false },
      { text: "La participació de tercers.", correct: false },
      { text: "La finalitat exclusiva d'enriquiment personal.", correct: false }
    ]
  },
  {
    question: "El delicte de suborn (cohecho) es caracteritza per:",
    number: 3,
    answers: [
      { text: "L'acceptació d'un present o oferta per realitzar un acte injust o ometre un acte degut.", correct: true },
      { text: "L'ús de la força per obtenir documents.", correct: false },
      { text: "La suplantació d'identitat d'un funcionari.", correct: false },
      { text: "L'abús d'autoritat sense contraprestació econòmica.", correct: false }
    ]
  },
  {
    question: "El delicte de tràfic d'influències es comet quan:",
    number: 4,
    answers: [
      { text: "S'influeix en un funcionari prevalent-se de situacions personals per obtenir un benefici.", correct: true },
      { text: "S'accepta un suborn directe en efectiu.", correct: false },
      { text: "Es dicta una resolució contrària a la llei.", correct: false },
      { text: "S'apropien fons públics.", correct: false }
    ]
  },
  {
    question: "Qui pot ser autor d'un delicte de prevaricació administrativa?",
    number: 5,
    answers: [
      { text: "L'autoritat o funcionari públic.", correct: true },
      { text: "Qualsevol ciutadà particular.", correct: false },
      { text: "Només els càrrecs electes.", correct: false },
      { text: "Només els treballadors laborals.", correct: false }
    ]
  },
  {
    question: "Si un particular ofereix un suborn a un funcionari, el particular també comet delicte?",
    number: 6,
    answers: [
      { text: "Sí, és el delicte de suborn passiu del particular.", correct: true },
      { text: "No, només el funcionari.", correct: false },
      { text: "Només si el funcionari accepta.", correct: false },
      { text: "No, és una instigació no punible.", correct: false }
    ]
  },
  {
    question: "El delicte de tràfic d'influències requereix que el benefici final s'obtingui?",
    number: 7,
    answers: [
      { text: "No, és un delicte de mera activitat (l'acció d'influir ja és punible).", correct: true },
      { text: "Sí, és un delicte de resultat.", correct: false },
      { text: "Només si el benefici és superior a 50.000 euros.", correct: false },
      { text: "Només si el funcionari cedeix a la influència.", correct: false }
    ]
  },
  {
    question: "Quina és la pena principal per al delicte de prevaricació administrativa?",
    number: 8,
    answers: [
      { text: "Inhabilitació especial per a ocupació o càrrec públic.", correct: true },
      { text: "Pena de presó de 10 a 20 anys.", correct: false },
      { text: "Multa equivalent al doble del benefici.", correct: false },
      { text: "Pena de mort.", correct: false }
    ]
  },
  {
    question: "Es considera suborn si el regal s'accepta després d'haver realitzat l'acte degut?",
    number: 9,
    answers: [
      { text: "Sí, és suborn impropi.", correct: true },
      { text: "No, és un regal d'agraïment legal.", correct: false },
      { text: "Només si és un regal de gran valor.", correct: false },
      { text: "No, el suborn només és previ.", correct: false }
    ]
  },
  {
    question: "El tràfic d'influències pot cometre'l un particular?",
    number: 10,
    answers: [
      { text: "Sí.", correct: true },
      { text: "No, només funcionaris.", correct: false },
      { text: "Només si és un familiar d'un càrrec públic.", correct: false },
      { text: "Només si és advocat.", correct: false }
    ]
  },
  {
    question: "Què s'entén per 'resolució' en el delicte de prevaricació?",
    number: 11,
    answers: [
      { text: "Un acte administratiu amb transcendència jurídica externa o interna.", correct: true },
      { text: "Qualsevol conversa informal entre funcionaris.", correct: false },
      { text: "Un informe tècnic sense efectes jurídics.", correct: false },
      { text: "Una idea o projecte no plasmat en document.", correct: false }
    ]
  },
  {
    question: "Com es diu el delicte de no perseguir els delictes coneguts pel funcionari?",
    number: 12,
    answers: [
      { text: "Omissió del deure d'impedir delictes o de promoure'n la persecució.", correct: true },
      { text: "Prevaricació passiva.", correct: false },
      { text: "Encobriment administratiu.", correct: false },
      { text: "Desobediència funcional.", correct: false }
    ]
  },
  {
    question: "En el tràfic d'influències, la 'influència' ha de ser:",
    number: 13,
    answers: [
      { text: "Persuasiva, per aconseguir una resolució que generi un benefici.", correct: true },
      { text: "Basada sempre en amenaces físiques.", correct: false },
      { text: "Només realitzada per telèfon.", correct: false },
      { text: "Inexistent.", correct: false }
    ]
  },
  {
    question: "Pot ser autor de prevaricació un funcionari que no té poder de decisió?",
    number: 14,
    answers: [
      { text: "No, ha de tenir la competència o capacitat d'emetre resolucions.", correct: true },
      { text: "Sí, sempre.", correct: false },
      { text: "Només si el seu cap l'hi ordena.", correct: false },
      { text: "Sí, si és un funcionari de carrera.", correct: false }
    ]
  },
  {
    question: "Què és el 'cohecho' impropi?",
    number: 15,
    answers: [
      { text: "Acceptar un regal en consideració al càrrec, sense un acte específic a canvi.", correct: true },
      { text: "Un error en la comptabilitat pública.", correct: false },
      { text: "Acceptar suborns només en espècies.", correct: false },
      { text: "Un tipus de tràfic d'influències menor.", correct: false }
    ]
  },
  {
    question: "La prevaricació és un delicte contra:",
    number: 16,
    answers: [
      { text: "L'Administració Pública.", correct: true },
      { text: "El patrimoni privat.", correct: false },
      { text: "La intimitat de les persones.", correct: false },
      { text: "La seguretat viària.", correct: false }
    ]
  },
  {
    question: "L'ús de documents falsos per obtenir una resolució favorable és un tipus de:",
    number: 17,
    answers: [
      { text: "Falsedat documental (sovint lligat a prevaricació o estafa).", correct: true },
      { text: "Tràfic d'influències.", correct: false },
      { text: "Suborn propi.", correct: false },
      { text: "Prevaricació per omissió.", correct: false }
    ]
  },
  {
    question: "En quina llei s'estableixen aquests delictes?",
    number: 18,
    answers: [
      { text: "Codi Penal.", correct: true },
      { text: "Llei de procediment administratiu.", correct: false },
      { text: "TREBEP.", correct: false },
      { text: "Estatut d'Autonomia.", correct: false }
    ]
  },
  {
    question: "És punible l'intent de tràfic d'influències?",
    number: 19,
    answers: [
      { text: "Sí, la llei castiga el tràfic d'influències fins i tot sense resultat.", correct: true },
      { text: "No, només si el benefici s'obté.", correct: false },
      { text: "Només si hi ha diners pel mig.", correct: false },
      { text: "No, és un acte preparatori impune.", correct: false }
    ]
  },
  {
    question: "El funcionari que accepta un suborn per fer un acte que NO és injust, comet delicte?",
    number: 20,
    answers: [
      { text: "Sí, suborn impropi o propi segons el cas.", correct: true },
      { text: "No.", correct: false },
      { text: "Només si el regal és molt car.", correct: false },
      { text: "Només si el seu cap ho sap.", correct: false }
    ]
  },
  {
    question: "Què es busca protegir amb els delictes contra l'Administració?",
    number: 21,
    answers: [
      { text: "L'honestedat i el bon funcionament de l'Administració.", correct: true },
      { text: "L'estalvi de despesa pública.", correct: false },
      { text: "La jerarquia interna dels departaments.", correct: false },
      { text: "La rapidesa en la tramitació.", correct: false }
    ]
  },
  {
    question: "L'autoritat que es nega obertament a complir una resolució judicial comet:",
    number: 22,
    answers: [
      { text: "Delicte de desobediència.", correct: true },
      { text: "Prevaricació.", correct: false },
      { text: "Malversació.", correct: false },
      { text: "Tràfic d'influències.", correct: false }
    ]
  },
  {
    question: "El suborn propi es refereix a:",
    number: 23,
    answers: [
      { text: "Realitzar un acte contrari als deures del càrrec per un regal o diners.", correct: true },
      { text: "Un suborn entre dos funcionaris del mateix nivell.", correct: false },
      { text: "Regals que el funcionari fa al seu cap.", correct: false },
      { text: "Un suborn realitzat per una empresa pública.", correct: false }
    ]
  },
  {
    question: "Si el funcionari torna el suborn abans de ser descobert, es pot eximir de pena?",
    number: 24,
    answers: [
      { text: "Pot haver-hi atenuants, però no exempció total automàtica.", correct: true },
      { text: "Sí, queda totalment impune.", correct: false },
      { text: "No té cap efecte.", correct: false },
      { text: "Només si el torna amb interessos.", correct: false }
    ]
  },
  {
    question: "El tràfic d'influències pot utilitzar les relacions amb altres funcionaris?",
    number: 25,
    answers: [
      { text: "Sí, és la base del delicte.", correct: true },
      { text: "No, ha de ser només amb el polític.", correct: false },
      { text: "Només si són de diferents administracions.", correct: false },
      { text: "Mai.", correct: false }
    ]
  },
  {
    question: "Com s'anomena la prevaricació de jutges o magistrats?",
    number: 26,
    answers: [
      { text: "Prevaricació judicial.", correct: true },
      { text: "Prevaricació administrativa especial.", correct: false },
      { text: "Desobediència judicial.", correct: false },
      { text: "Malversació jurisdiccional.", correct: false }
    ]
  },
  {
    question: "Què és la 'influència' en el delicte de tràfic d'influències?",
    number: 27,
    answers: [
      { text: "L'aptitud per fer que el funcionari actuï segons el desig de l'influenciador.", correct: true },
      { text: "Una pressió física inexistent.", correct: false },
      { text: "Un acte administratiu formal.", correct: false },
      { text: "Una simple recomanació tècnica.", correct: false }
    ]
  },
  {
    question: "El suborn es pot cometre mitjançant?",
    number: 28,
    answers: [
      { text: "Diners, regals, favors o qualsevol mena d'avantatge.", correct: true },
      { text: "Només diners en efectiu.", correct: false },
      { text: "Només mitjançant transferència bancària.", correct: false },
      { text: "Només prometent llocs de treball.", correct: false }
    ]
  },
  {
    question: "Pot un funcionari ser castigat per prevaricació si l'ordre era manifestament il·legal?",
    number: 29,
    answers: [
      { text: "Sí, el funcionari té el deure de no complir ordres il·legals.", correct: true },
      { text: "No, si l'ordre ve d'un superior.", correct: false },
      { text: "Només si el funcionari rep un benefici personal.", correct: false },
      { text: "No, la culpa és del superior.", correct: false }
    ]
  },
  {
    question: "L'acceptació d'un suborn té com a efecte col·lateral sobre el funcionari?",
    number: 30,
    answers: [
      { text: "La inhabilitació per a càrrec públic.", correct: true },
      { text: "El premi a la jubilació.", correct: false },
      { text: "La promoció automàtica.", correct: false },
      { text: "El canvi de despatx.", correct: false }
    ]
  },
  {
    question: "Es considera tràfic d'influències l'ús de la relació amb un funcionari?",
    number: 31,
    answers: [
      { text: "Sí, quan es pretén obtenir un benefici a través d'aquesta relació.", correct: true },
      { text: "No, només si hi ha diners pel mig.", correct: false },
      { text: "Només si el funcionari és d'alt rang.", correct: false },
      { text: "Mai, és relació social.", correct: false }
    ]
  },
  {
    question: "L'Administració pot personar-se en un procés penal contra un funcionari prevaricador?",
    number: 32,
    answers: [
      { text: "Sí, com a part perjudicada (acusació).", correct: true },
      { text: "No, mai.", correct: false },
      { text: "Només si ho ordena el jutge.", correct: false },
      { text: "Només si és un alt càrrec.", correct: false }
    ]
  },
  {
    question: "Què passa si una resolució administrativa es pot recórrer?",
    number: 33,
    answers: [
      { text: "El fet que sigui recursible no elimina el caràcter delictiu de la prevaricació.", correct: true },
      { text: "El recurs anul·la el delicte.", correct: false },
      { text: "La prevaricació només existeix si no hi ha recurs.", correct: false },
      { text: "El recurs és la sanció administrativa.", correct: false }
    ]
  },
  {
    question: "Qui pot ser autor d'un suborn?",
    number: 34,
    answers: [
      { text: "Tant el funcionari (subornat) com el particular (subornador).", correct: true },
      { text: "Només el funcionari.", correct: false },
      { text: "Només els polítics.", correct: false },
      { text: "Només les empreses.", correct: false }
    ]
  },
  {
    question: "En què es diferencia el tràfic d'influències del suborn?",
    number: 35,
    answers: [
      { text: "El tràfic no requereix un pagament al funcionari, el suborn sí.", correct: true },
      { text: "Són el mateix.", correct: false },
      { text: "El suborn és menys greu.", correct: false },
      { text: "El tràfic d'influències no es castiga.", correct: false }
    ]
  },
  {
    question: "Quina és la finalitat d'un informe tècnic fals en un procediment?",
    number: 36,
    answers: [
      { text: "Orientar la resolució de manera il·legal (podent ser prevaricació).", correct: true },
      { text: "Agilitzar la feina.", correct: false },
      { text: "Donar una opinió personal.", correct: false },
      { text: "Ajudar el ciutadà.", correct: false }
    ]
  },
  {
    question: "Què és la 'inhabilitació especial'?",
    number: 37,
    answers: [
      { text: "Pena que impedeix l'exercici de funcions públiques.", correct: true },
      { text: "Pena que impedeix anar a la feina.", correct: false },
      { text: "Pena que suposa la pèrdua de nacionalitat.", correct: false },
      { text: "Pena que implica la prohibició de sortir de la ciutat.", correct: false }
    ]
  },
  {
    question: "La prevaricació es pot cometre per negligència?",
    number: 38,
    answers: [
      { text: "No, ha de ser dolosa (a sabudes).", correct: true },
      { text: "Sí, si és molt greu.", correct: false },
      { text: "Només si hi ha danys físics.", correct: false },
      { text: "Sí, en tots els casos.", correct: false }
    ]
  },
  {
    question: "El delicte de prevaricació administrativa es consuma quan:",
    number: 39,
    answers: [
      { text: "La resolució és dictada.", correct: true },
      { text: "El ciutadà rep la notificació.", correct: false },
      { text: "El ciutadà es queixa.", correct: false },
      { text: "La resolució s'executa totalment.", correct: false }
    ]
  },
  {
    question: "La pena per tràfic d'influències pot incloure?",
    number: 40,
    answers: [
      { text: "Multa i presó.", correct: true },
      { text: "Només exili.", correct: false },
      { text: "Només una amonestació verbal.", correct: false },
      { text: "Pèrdua de drets civils.", correct: false }
    ]
  },
  {
    question: "Què s'entén per càrrec públic a efectes penals?",
    number: 41,
    answers: [
      { text: "Qui participa en l'exercici de funcions públiques.", correct: true },
      { text: "Només els alcaldes.", correct: false },
      { text: "Només els funcionaris de carrera.", correct: false },
      { text: "Només els ministres.", correct: false }
    ]
  },
  {
    question: "Es castiga el tràfic d'influències si és a canvi d'un benefici econòmic?",
    number: 42,
    answers: [
      { text: "Sí, és una circumstància agreujant.", correct: true },
      { text: "No, això és suborn.", correct: false },
      { text: "Només si el benefici és per al funcionari.", correct: false },
      { text: "No, és una forma d'estalvi.", correct: false }
    ]
  },
  {
    question: "L'omissió de perseguir un delicte per part d'un funcionari és:",
    number: 43,
    answers: [
      { text: "Un delicte contra l'Administració de Justícia.", correct: true },
      { text: "Prevaricació administrativa.", correct: false },
      { text: "Falta lleu.", correct: false },
      { text: "Tràfic d'influències.", correct: false }
    ]
  },
  {
    question: "És el mateix prevaricació que corrupció?",
    number: 44,
    answers: [
      { text: "La prevaricació és una forma (delicte) de corrupció.", correct: true },
      { text: "Són conceptes oposats.", correct: false },
      { text: "La corrupció és només econòmica, la prevaricació no.", correct: false },
      { text: "No tenen res a veure.", correct: false }
    ]
  },
  {
    question: "En el delicte de suborn, qui comet 'suborn passiu'?",
    number: 45,
    answers: [
      { text: "El funcionari que accepta o sol·licita l'avantatge.", correct: true },
      { text: "El particular que ofereix l'avantatge.", correct: false },
      { text: "El jutge que sentencia.", correct: false },
      { text: "El ciutadà que ho denuncia.", correct: false }
    ]
  },
  {
    question: "El tràfic d'influències pot ser realitzat per una persona que diu ser influent?",
    number: 46,
    answers: [
      { text: "Sí, encara que no tingui influència real.", correct: true },
      { text: "No, ha de tenir influència real.", correct: false },
      { text: "Només si li creuen.", correct: false },
      { text: "Mai.", correct: false }
    ]
  },
  {
    question: "El delicte de prevaricació protegeix la legalitat de:",
    number: 47,
    answers: [
      { text: "La funció pública.", correct: true },
      { text: "Els interessos del partit de govern.", correct: false },
      { text: "Els interessos de les grans empreses.", correct: false },
      { text: "La rapidesa administrativa.", correct: false }
    ]
  },
  {
    question: "Què és un acte degut en relació al suborn?",
    number: 48,
    answers: [
      { text: "L'acte que el funcionari està obligat per llei a fer.", correct: true },
      { text: "Un acte personal.", correct: false },
      { text: "Un acte que no li correspon per competència.", correct: false },
      { text: "Un acte que decideix no fer.", correct: false }
    ]
  },
  {
    question: "La prevaricació pot ser comesa per silenci administratiu?",
    number: 49,
    answers: [
      { text: "Si el silenci és a sabudes arbitrari per evitar el compliment de la norma.", correct: true },
      { text: "No, el silenci és automàtic.", correct: false },
      { text: "Només si el silenci perjudica el ciutadà.", correct: false },
      { text: "No, mai.", correct: false }
    ]
  },
  {
    question: "El suborn propi té penes més elevades que l'impropi?",
    number: 50,
    answers: [
      { text: "Sí.", correct: true },
      { text: "No.", correct: false },
      { text: "Són iguals.", correct: false },
      { text: "Cap dels dos té pena.", correct: false }
    ]
  },
  {
    question: "La inhabilitació per prevaricació pot ser absoluta?",
    number: 51,
    answers: [
      { text: "Sí, en casos d'especial gravetat.", correct: true },
      { text: "No, només especial.", correct: false },
      { text: "Mai.", correct: false },
      { text: "Només si hi ha presó.", correct: false }
    ]
  },
  {
    question: "El tràfic d'influències pot ser una conducta professional?",
    number: 52,
    answers: [
      { text: "No, el dret penal no considera el tràfic d'influències com a professional.", correct: true },
      { text: "Sí, és una tècnica de gestió.", correct: false },
      { text: "Sí, si ets gestor.", correct: false },
      { text: "Depèn de la quantitat.", correct: false }
    ]
  },
  {
    question: "Què és el delicte de 'malversació'?",
    number: 53,
    answers: [
      { text: "Apropiació o desviament de fons públics.", correct: true },
      { text: "Una forma de tràfic d'influències.", correct: false },
      { text: "Una forma de prevaricació.", correct: false },
      { text: "Un delicte menor contra la propietat.", correct: false }
    ]
  },
  {
    question: "Com s'anomena la resolució arbitrària que no té fonament legal?",
    number: 54,
    answers: [
      { text: "Resolució injusta.", correct: true },
      { text: "Resolució discutible.", correct: false },
      { text: "Resolució ineficient.", correct: false },
      { text: "Resolució administrativa.", correct: false }
    ]
  },
  {
    question: "És necessari que hi hagi dany econòmic per a la prevaricació?",
    number: 55,
    answers: [
      { text: "No, n'hi ha prou amb la infracció de l'ordenament jurídic.", correct: true },
      { text: "Sí, obligatòriament.", correct: false },
      { text: "Només si el dany és gran.", correct: false },
      { text: "Només si el benefici és gran.", correct: false }
    ]
  },
  {
    question: "El suborn és un delicte contra?",
    number: 56,
    answers: [
      { text: "La Administració Pública.", correct: true },
      { text: "La economia nacional.", correct: false },
      { text: "La propietat privada.", correct: false },
      { text: "La seguretat ciutadana.", correct: false }
    ]
  },
  {
    question: "El tràfic d'influències es pot donar en processos de contractació pública?",
    number: 57,
    answers: [
      { text: "Sí, és un dels àmbits més comuns.", correct: true },
      { text: "No, la contractació és automàtica.", correct: false },
      { text: "Mai.", correct: false },
      { text: "Només si els import són petits.", correct: false }
    ]
  },
  {
    question: "Les penes per aquests delictes es recullen en el Codi Penal?",
    number: 58,
    answers: [
      { text: "Sí.", correct: true },
      { text: "No, en una llei especial.", correct: false },
      { text: "En el Reglament del Funcionari.", correct: false },
      { text: "En la Constitució.", correct: false }
    ]
  },
  {
    question: "Qui té la competència per jutjar aquests delictes?",
    number: 59,
    answers: [
      { text: "Els jutjats i tribunals d'instrucció i penals.", correct: true },
      { text: "Els serveis jurídics del departament.", correct: false },
      { text: "El Parlament.", correct: false },
      { text: "El Síndic de Greuges.", correct: false }
    ]
  },
  {
    question: "El tràfic d'influències requereix que l'influenciador i l'influenciat es coneguin?",
    number: 60,
    answers: [
      { text: "No necessàriament, la relació pot ser indirecta.", correct: true },
      { text: "Sí, és indispensable.", correct: false },
      { text: "Només si són familiars.", correct: false },
      { text: "Només si són socis.", correct: false }
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