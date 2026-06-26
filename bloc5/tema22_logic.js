const TEST_ID = "tema22"; 
const questions = [
  {
    question: "Quina llei regula la igualtat efectiva de dones i homes a Catalunya?",
    number: 1,
    answers: [
      { text: "La Llei 17/2015.", correct: true },
      { text: "La Llei 11/2014.", correct: false },
      { text: "La Llei 19/2014.", correct: false },
      { text: "La Llei 5/2008.", correct: false }
    ]
  },
  {
    question: "Què s'entén per discriminació directa?",
    number: 2,
    answers: [
      { text: "Quan una persona és tractada de manera menys favorable per raó de sexe.", correct: true },
      { text: "Quan una disposició neutra posa una persona en desavantatge.", correct: false },
      { text: "L'assetjament sexual.", correct: false },
      { text: "La violència psicològica.", correct: false }
    ]
  },
  {
    question: "Què s'entén per discriminació indirecta?",
    number: 3,
    answers: [
      { text: "Situació en què una disposició neutra posa una persona en desavantatge per raó de sexe.", correct: true },
      { text: "Tracte desfavorable exprés per raó de gènere.", correct: false },
      { text: "La negació de vacances per maternitat.", correct: false },
      { text: "La retribució salarial desigual per la mateixa feina.", correct: false }
    ]
  },
  {
    question: "La Llei 11/2014 té per objecte garantir els drets de quin col·lectiu?",
    number: 4,
    answers: [
      { text: "LGBTI (lesbianes, gais, bisexuals, transgèneres i intersexuals).", correct: true },
      { text: "Exclusivament dones.", correct: false },
      { text: "Persones amb discapacitat.", correct: false },
      { text: "Persones grans.", correct: false }
    ]
  },
  {
    question: "Què és la transversalitat de gènere?",
    number: 5,
    answers: [
      { text: "Integrar la perspectiva de gènere en totes les polítiques i accions públiques.", correct: true },
      { text: "Crear un departament només per a dones.", correct: false },
      { text: "Fer cursos de formació puntuals.", correct: false },
      { text: "La paritat només en els llocs de comandament.", correct: false }
    ]
  },
  {
    question: "Quin principi implica que les dones i els homes tenen la mateixa valoració en tots els àmbits?",
    number: 6,
    answers: [
      { text: "Principi d'igualtat de tracte i d'oportunitats.", correct: true },
      { text: "Principi de jerarquia.", correct: false },
      { text: "Principi d'equitat salarial estricta.", correct: false },
      { text: "Principi de favoritisme positiu.", correct: false }
    ]
  },
  {
    question: "L'assetjament sexual és considerat:",
    number: 7,
    answers: [
      { text: "Una forma de discriminació per raó de sexe.", correct: true },
      { text: "Una falta lleu.", correct: false },
      { text: "Un conflicte laboral sense transcendència disciplinària.", correct: false },
      { text: "Una opinió personal.", correct: false }
    ]
  },
  {
    question: "Què prohibeix específicament la Llei 11/2014?",
    number: 8,
    answers: [
      { text: "La discriminació per orientació sexual o identitat de gènere.", correct: true },
      { text: "El matrimoni entre persones del mateix sexe.", correct: false },
      { text: "La presència de col·lectius LGTBI en la funció pública.", correct: false },
      { text: "L'ús de determinats termes al Parlament.", correct: false }
    ]
  },
  {
    question: "Els plans d'igualtat a l'Administració són:",
    number: 9,
    answers: [
      { text: "Instruments per fixar objectius i mesures per eliminar la discriminació.", correct: true },
      { text: "Programes de voluntariat sense compromís legal.", correct: false },
      { text: "Actes de promoció celebrats cada 8 de març.", correct: false },
      { text: "Normes internes sense obligació de seguiment.", correct: false }
    ]
  },
  {
    question: "L'acció positiva consisteix en:",
    number: 10,
    answers: [
      { text: "Mesures temporals per corregir situacions de desigualtat de fet.", correct: true },
      { text: "Favoreix sempre el sexe masculí.", correct: false },
      { text: "Una sanció econòmica als departaments.", correct: false },
      { text: "Contractar persones sense experiència.", correct: false }
    ]
  },
  {
    question: "L'homofòbia és:",
    number: 11,
    answers: [
      { text: "Rebuig o discriminació contra persones homosexuals.", correct: true },
      { text: "El mateix que la transfòbia.", correct: false },
      { text: "Un comportament permès en l'àmbit privat.", correct: false },
      { text: "La por als espais tancats.", correct: false }
    ]
  },
  {
    question: "Què és la identitat de gènere?",
    number: 12,
    answers: [
      { text: "La vivència interna i individual del gènere tal com cadascú la sent.", correct: true },
      { text: "El sexe biològic amb què es neix.", correct: false },
      { text: "L'orientació cap a altres persones.", correct: false },
      { text: "La imatge que els altres projecten sobre tu.", correct: false }
    ]
  },
  {
    question: "Quina obligació tenen les administracions davant actes de discriminació LGTBI?",
    number: 13,
    answers: [
      { text: "Adoptar mesures per prevenir-los i erradicar-los.", correct: true },
      { text: "Ignorar-los si no hi ha denúncia judicial.", correct: false },
      { text: "Multar el col·lectiu afectat.", correct: false },
      { text: "Deixar que les parts ho resolguin pel seu compte.", correct: false }
    ]
  },
  {
    question: "Com s'anomena la discriminació per assumir el rol de gènere d'algú?",
    number: 14,
    answers: [
      { text: "Discriminació per raó de gènere.", correct: true },
      { text: "Discriminació per edat.", correct: false },
      { text: "Assetjament moral.", correct: false },
      { text: "Discriminació neutra.", correct: false }
    ]
  },
  {
    question: "Els protocols de prevenció de l'assetjament sexual busquen:",
    number: 15,
    answers: [
      { text: "Establir procediments clars d'actuació i protecció de les víctimes.", correct: true },
      { text: "Identificar les persones més atractives.", correct: false },
      { text: "Evitar que es parli de relacions personals.", correct: false },
      { text: "Dificultar la feina dels càrrecs directius.", correct: false }
    ]
  },
  {
    question: "La Llei 17/2015 promou la paritat en:",
    number: 16,
    answers: [
      { text: "Òrgans col·legiats i processos de selecció.", correct: true },
      { text: "Exclusivament al Parlament.", correct: false },
      { text: "Només en les escoles.", correct: false },
      { text: "Només en l'empresa privada.", correct: false }
    ]
  },
  {
    question: "Què s'entén per perspectiva de gènere?",
    number: 17,
    answers: [
      { text: "Analitzar com les estructures socials afecten de manera diferent dones i homes.", correct: true },
      { text: "Donar prioritat sempre a les dones.", correct: false },
      { text: "Excloure els homes de les decisions.", correct: false },
      { text: "Analitzar només les dades biològiques.", correct: false }
    ]
  },
  {
    question: "La transfòbia es dirigeix contra:",
    number: 18,
    answers: [
      { text: "Les persones transgènere o transexuals.", correct: true },
      { text: "Tothom qui no és heterosexual.", correct: false },
      { text: "Persones amb discapacitat física.", correct: false },
      { text: "La gent jove.", correct: false }
    ]
  },
  {
    question: "El llenguatge inclusiu en l'Administració pretén:",
    number: 19,
    answers: [
      { text: "Evitar el sexisme en les comunicacions i documents.", correct: true },
      { text: "Complicar la redacció dels textos legals.", correct: false },
      { text: "Obligar a canviar tot el diccionari.", correct: false },
      { text: "Reduir l'espai dels documents.", correct: false }
    ]
  },
  {
    question: "L'assetjament per raó de sexe es pot produir per:",
    number: 20,
    answers: [
      { text: "Comportaments relacionats amb el sexe d'una persona que atempten contra la seva dignitat.", correct: true },
      { text: "Ser massa simpàtic amb un company.", correct: false },
      { text: "Una crítica objectiva al treball fet.", correct: false },
      { text: "Tenir opinions polítiques diferents.", correct: false }
    ]
  },
  {
    question: "La conciliació de la vida laboral i familiar té una finalitat de:",
    number: 21,
    answers: [
      { text: "Corresponsabilitat entre dones i homes.", correct: true },
      { text: "Només ajudar a les mares.", correct: false },
      { text: "Reduir la productivitat laboral.", correct: false },
      { text: "Augmentar el temps de descans.", correct: false }
    ]
  },
  {
    question: "En quina llei catalana s'aborda específicament l'eradicació de la LGTBIfòbia?",
    number: 22,
    answers: [
      { text: "Llei 11/2014.", correct: true },
      { text: "Llei 17/2015.", correct: false },
      { text: "Estatut d'Autonomia.", correct: false },
      { text: "Llei 39/2015.", correct: false }
    ]
  },
  {
    question: "L'assetjament sexual requereix per ser constitutiu de falta:",
    number: 23,
    answers: [
      { text: "Que la conducta sigui no desitjada i ofensiva per a la víctima.", correct: true },
      { text: "Que hi hagi testimonis presencials.", correct: false },
      { text: "Que hi hagi un contracte signat.", correct: false },
      { text: "Que l'assetjador sigui superior jeràrquic.", correct: false }
    ]
  },
  {
    question: "Quin és un indicador de desigualtat de gènere laboral?",
    number: 24,
    answers: [
      { text: "La bretxa salarial.", correct: true },
      { text: "L'absentisme per malaltia comuna.", correct: false },
      { text: "El canvi de despatx.", correct: false },
      { text: "L'horari de dinar.", correct: false }
    ]
  },
  {
    question: "La no-discriminació per orientació sexual és un dret reconegut a:",
    number: 25,
    answers: [
      { text: "La normativa vigent de funció pública i les lleis d'igualtat.", correct: true },
      { text: "Només al dret internacional.", correct: false },
      { text: "Només en les empreses privades.", correct: false },
      { text: "En cap normativa concreta.", correct: false }
    ]
  },
  {
    question: "El protocol d'assetjament ha de garantir:",
    number: 26,
    answers: [
      { text: "Confidencialitat, rapidesa i protecció de la persona afectada.", correct: true },
      { text: "Fer un judici públic immediat.", correct: false },
      { text: "La intervenció dels mitjans de comunicació.", correct: false },
      { text: "La mediació obligatòria sense límit de temps.", correct: false }
    ]
  },
  {
    question: "Què és la discriminació interseccional?",
    number: 27,
    answers: [
      { text: "Discriminació que es produeix per la confluència de diversos factors (sexe, raça, etc.).", correct: true },
      { text: "La discriminació entre dos departaments.", correct: false },
      { text: "Discriminació per tenir una opinió política.", correct: false },
      { text: "Discriminació geogràfica.", correct: false }
    ]
  },
  {
    question: "Les accions d'informació i sensibilització són:",
    number: 28,
    answers: [
      { text: "Obligatòries per a les administracions per promoure la igualtat.", correct: true },
      { text: "Opcionals i sense pressupost.", correct: false },
      { text: "Només dirigides al personal administratiu.", correct: false },
      { text: "Innecessàries si ja hi ha lleis.", correct: false }
    ]
  },
  {
    question: "Quina és una mesura de conciliació?",
    number: 29,
    answers: [
      { text: "Flexibilitat horària i permisos per cura de familiars.", correct: true },
      { text: "Obligació de fer hores extres.", correct: false },
      { text: "Prohibició de parlar de temes familiars.", correct: false },
      { text: "Reducció de sou per ser mare.", correct: false }
    ]
  },
  {
    question: "El principi de presumpció d'innocència es manté en els processos d'assetjament?",
    number: 30,
    answers: [
      { text: "Sí, i es protegeix alhora la integritat de la víctima.", correct: true },
      { text: "No, en aquests casos s'anul·la.", correct: false },
      { text: "Només si l'acusat és el cap.", correct: false },
      { text: "Només si la víctima té proves gràfiques.", correct: false }
    ]
  },
  {
    question: "L'expressió de gènere fa referència a:",
    number: 31,
    answers: [
      { text: "Com manifestem el nostre gènere a través de la roba, la conducta, etc.", correct: true },
      { text: "La nostra orientació cap a altres persones.", correct: false },
      { text: "El nostre sexe biològic.", correct: false },
      { text: "La nostra opinió sobre les lleis.", correct: false }
    ]
  },
  {
    question: "Què vol dir l'assetjament per raó de sexe?",
    number: 32,
    answers: [
      { text: "Assetjament motivat pel sexe d'una persona.", correct: true },
      { text: "Assetjament per motius laborals.", correct: false },
      { text: "Assetjament entre dos treballadors del mateix sexe.", correct: false },
      { text: "No existeix aquest concepte.", correct: false }
    ]
  },
  {
    question: "La Llei 11/2014 estableix un règim:",
    number: 33,
    answers: [
      { text: "Sancionador per a les discriminacions LGTBI.", correct: true },
      { text: "Exclusivament consultiu.", correct: false },
      { text: "Només per a menors d'edat.", correct: false },
      { text: "Que no preveu sancions.", correct: false }
    ]
  },
  {
    question: "El terme 'persona transgènere' implica:",
    number: 34,
    answers: [
      { text: "Identitat de gènere diferent del sexe assignat en néixer.", correct: true },
      { text: "Una malaltia mental segons la llei catalana.", correct: false },
      { text: "Una orientació sexual específica.", correct: false },
      { text: "Un tipus d'assetjament laboral.", correct: false }
    ]
  },
  {
    question: "La discriminació per raó de sexe en l'accés a l'ocupació pública és:",
    number: 35,
    answers: [
      { text: "Una vulneració de la Constitució i de les lleis d'igualtat.", correct: true },
      { text: "Permesa en casos d'excepcionalitat.", correct: false },
      { text: "Una opinió de l'òrgan selector.", correct: false },
      { text: "Legal en certs departaments.", correct: false }
    ]
  },
  {
    question: "L'obligació de les administracions de fomentar la igualtat és:",
    number: 36,
    answers: [
      { text: "Un mandat legal de compliment obligatori.", correct: true },
      { text: "Una recomanació europea.", correct: false },
      { text: "Només una declaració d'intencions.", correct: false },
      { text: "Un programa de formació puntual.", correct: false }
    ]
  },
  {
    question: "Les dades estadístiques en les administracions públiques han d'estar:",
    number: 37,
    answers: [
      { text: "Desagregades per sexe.", correct: true },
      { text: "Agrupades per sexe i edat.", correct: false },
      { text: "Prohibides per raons de protecció de dades.", correct: false },
      { text: "Exclusivament centrades en l'edat.", correct: false }
    ]
  },
  {
    question: "Què ha de fer un empleat públic davant una sospita d'assetjament?",
    number: 38,
    answers: [
      { text: "Seguir el protocol establert en el seu organisme.", correct: true },
      { text: "Explicar-ho als companys de cafè.", correct: false },
      { text: "Ignorar-ho completament.", correct: false },
      { text: "Confrontar directament l'assetjador.", correct: false }
    ]
  },
  {
    question: "La discriminació positiva es pot aplicar en:",
    number: 39,
    answers: [
      { text: "Convocatòries d'accés per corregir desequilibris.", correct: true },
      { text: "Sempre que hi hagi molts candidats.", correct: false },
      { text: "Només quan el cap ho decideix.", correct: false },
      { text: "Mai, la discriminació sempre és prohibida.", correct: false }
    ]
  },
  {
    question: "Les accions LGTBIfòbiques es poden sancionar mitjançant:",
    number: 40,
    answers: [
      { text: "El procediment sancionador previst a la llei 11/2014.", correct: true },
      { text: "Només un avís verbal.", correct: false },
      { text: "Només una carta d'exculpació.", correct: false },
      { text: "Cap via administrativa.", correct: false }
    ]
  },
  {
    question: "La igualtat formal és:",
    number: 41,
    answers: [
      { text: "La igualtat davant la llei.", correct: true },
      { text: "La igualtat en les condicions de vida.", correct: false },
      { text: "La igualtat econòmica.", correct: false },
      { text: "La igualtat en la feina.", correct: false }
    ]
  },
  {
    question: "La igualtat real o material és:",
    number: 42,
    answers: [
      { text: "L'absència de discriminació en la vida real i l'equiparació d'oportunitats.", correct: true },
      { text: "Només el text escrit a la Constitució.", correct: false },
      { text: "Una utopia no buscada per l'Administració.", correct: false },
      { text: "La igualtat de sou entre homes i dones només en els alts càrrecs.", correct: false }
    ]
  },
  {
    question: "El Codi de conducta dels empleats públics promou:",
    number: 43,
    answers: [
      { text: "La no-discriminació i el tracte respectuós.", correct: true },
      { text: "La jerarquia sobre la igualtat.", correct: false },
      { text: "L'anonimat en les relacions públiques.", correct: false },
      { text: "La priorització del gènere en la selecció.", correct: false }
    ]
  },
  {
    question: "La violència masclista inclou:",
    number: 44,
    answers: [
      { text: "Diverses formes de violència (física, sexual, psicològica, etc.).", correct: true },
      { text: "Només la violència física.", correct: false },
      { text: "Només la violència a la llar.", correct: false },
      { text: "Només els assassinats.", correct: false }
    ]
  },
  {
    question: "L'Administració ha d'actuar davant la discriminació:",
    number: 45,
    answers: [
      { text: "D'ofici, sense necessitat de denúncia en casos greus.", correct: true },
      { text: "Només si hi ha una sentència judicial.", correct: false },
      { text: "Mai, és un tema privat.", correct: false },
      { text: "Només si el sindicat reclama.", correct: false }
    ]
  },
  {
    question: "Què garanteix la llibertat d'orientació sexual?",
    number: 46,
    answers: [
      { text: "La possibilitat d'expressar i viure la sexualitat sense discriminació.", correct: true },
      { text: "L'obligació de fer-la pública.", correct: false },
      { text: "El dret a criticar els altres.", correct: false },
      { text: "El dret a no treballar amb segons qui.", correct: false }
    ]
  },
  {
    question: "La discriminació per raó de sexe es pot produir en la formació professional?",
    number: 47,
    answers: [
      { text: "Sí, i s'ha d'evitar.", correct: true },
      { text: "No, en la formació no hi ha gènere.", correct: false },
      { text: "És legal si el curs és molt difícil.", correct: false },
      { text: "Mai s'ha donat el cas.", correct: false }
    ]
  },
  {
    question: "El concepte de bretxa salarial fa referència a:",
    number: 48,
    answers: [
      { text: "La diferència entre la remuneració mitjana d'homes i dones.", correct: true },
      { text: "La diferència d'edat de jubilació.", correct: false },
      { text: "L'horari d'entrada a la feina.", correct: false },
      { text: "La distància al lloc de treball.", correct: false }
    ]
  },
  {
    question: "Les persones intersexuals tenen:",
    number: 49,
    answers: [
      { text: "Característiques biològiques que no s'ajusten als patrons típics.", correct: true },
      { text: "Un sexe no reconegut per la llei.", correct: false },
      { text: "Prohibició d'accedir a la funció pública.", correct: false },
      { text: "Necessitat d'un certificat mèdic constant.", correct: false }
    ]
  },
  {
    question: "L'assetjament sexual pot ser realitzat per:",
    number: 50,
    answers: [
      { text: "Qualsevol persona, independentment del seu rang.", correct: true },
      { text: "Només pel cap immediat.", correct: false },
      { text: "Només pel personal masculí.", correct: false },
      { text: "Només per persones alienes a l'Administració.", correct: false }
    ]
  },
  {
    question: "La política de gènere en la Generalitat pretén:",
    number: 51,
    answers: [
      { text: "Assolir la igualtat efectiva entre homes i dones.", correct: true },
      { text: "Fer desaparèixer les diferències biològiques.", correct: false },
      { text: "Canviar l'horari de totes les oficines.", correct: false },
      { text: "Només afavorir la maternitat.", correct: false }
    ]
  },
  {
    question: "El principi d'igualtat en la funció pública està consagrat en:",
    number: 52,
    answers: [
      { text: "La Constitució Espanyola i l'Estatut d'Autonomia.", correct: true },
      { text: "Només en les lleis de cada departament.", correct: false },
      { text: "En cap lloc legalment vinculant.", correct: false },
      { text: "En un manual d'estil intern.", correct: false }
    ]
  },
  {
    question: "La violència institucional contra el col·lectiu LGTBI implica:",
    number: 53,
    answers: [
      { text: "El tracte discriminatori per part de les administracions.", correct: true },
      { text: "Una baralla al carrer sense més.", correct: false },
      { text: "Un conflicte laboral privat.", correct: false },
      { text: "La falta de pressupost per a cultura.", correct: false }
    ]
  },
  {
    question: "Els plans d'igualtat han de tenir:",
    number: 54,
    answers: [
      { text: "Un diagnòstic de situació, objectius i mesures de seguiment.", correct: true },
      { text: "Només la signatura del cap.", correct: false },
      { text: "Una vigència de 20 anys.", correct: false },
      { text: "Cap necessitat de seguiment.", correct: false }
    ]
  },
  {
    question: "Què és la discriminació directa?",
    number: 55,
    answers: [
      { text: "El tracte menys favorable basat en el sexe.", correct: true },
      { text: "L'assetjament moral per temes laborals.", correct: false },
      { text: "El resultat inesperat d'una norma neutra.", correct: false },
      { text: "Una situació on tothom guanya el mateix.", correct: false }
    ]
  },
  {
    question: "El dret a la igualtat impedeix:",
    number: 56,
    answers: [
      { text: "Qualsevol tracte diferenciat sense justificació objectiva i raonable.", correct: true },
      { text: "Que les dones treballin en oficines.", correct: false },
      { text: "L'aplicació de qualsevol llei.", correct: false },
      { text: "La realització de cursos de formació.", correct: false }
    ]
  },
  {
    question: "Les persones transgènere poden:",
    number: 57,
    answers: [
      { text: "Exigir el respecte a la seva identitat de gènere.", correct: true },
      { text: "Ser obligades a seguir el seu sexe biològic.", correct: false },
      { text: "Tenir menys drets que la resta.", correct: false },
      { text: "Ser discriminades en la selecció pública.", correct: false }
    ]
  },
  {
    question: "Què s'entén per tracte no discriminatori?",
    number: 58,
    answers: [
      { text: "El tracte igualitari sense biaixos de gènere o orientació.", correct: true },
      { text: "Tractar tothom com si fossin amics.", correct: false },
      { text: "No parlar mai amb ningú.", correct: false },
      { text: "Donar diners a tothom.", correct: false }
    ]
  },
  {
    question: "La Llei 11/2014 busca combatre:",
    number: 59,
    answers: [
      { text: "L'homofòbia, la bifòbia i la transfòbia.", correct: true },
      { text: "Només el racisme.", correct: false },
      { text: "Només la violència contra les dones.", correct: false },
      { text: "La manca de personal en les oficines.", correct: false }
    ]
  },
  {
    question: "La perspectiva de gènere ha d'estar present en:",
    number: 60,
    answers: [
      { text: "Totes les polítiques públiques.", correct: true },
      { text: "Només en les polítiques socials.", correct: false },
      { text: "Només en les polítiques de recursos humans.", correct: false },
      { text: "En cap política, ja que ha de ser neutral.", correct: false }
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