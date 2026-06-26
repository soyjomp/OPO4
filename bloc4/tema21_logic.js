const TEST_ID = "tema21"; 
const questions = [
  {
    question: "Segons el TREBEP, quin és un dret individual exercit col·lectivament dels empleats públics?",
    number: 1,
    answers: [
      { text: "El dret de vaga.", correct: true },
      { text: "El dret a la promoció professional.", correct: false },
      { text: "El dret a la percepció de retribucions.", correct: false },
      { text: "El dret a la jornada laboral.", correct: false }
    ]
  },
  {
    question: "Quin és el principi rector de l'ètica pública segons el TREBEP?",
    number: 2,
    answers: [
      { text: "La integritat.", correct: true },
      { text: "La rapidesa.", correct: false },
      { text: "La jerarquia estricta.", correct: false },
      { text: "La rendibilitat econòmica.", correct: false }
    ]
  },
  {
    question: "Quina de les següents NO és una modalitat de carrera professional?",
    number: 3,
    answers: [
      { text: "Carrera per antiguitat política.", correct: true },
      { text: "Carrera horitzontal.", correct: false },
      { text: "Carrera vertical.", correct: false },
      { text: "Promoció interna.", correct: false }
    ]
  },
  {
    question: "Què implica la carrera horitzontal?",
    number: 4,
    answers: [
      { text: "La progressió en el grau, categoria o esglaó sense canviar de lloc.", correct: true },
      { text: "L'ascens a un lloc de superior responsabilitat.", correct: false },
      { text: "El canvi de grup de classificació.", correct: false },
      { text: "El trasllat a un altre departament.", correct: false }
    ]
  },
  {
    question: "Les faltes disciplinàries es classifiquen en:",
    number: 5,
    answers: [
      { text: "Molt greus, greus i lleus.", correct: true },
      { text: "Administratives i penals.", correct: false },
      { text: "Definitives i temporals.", correct: false },
      { text: "Ordinals i extraordinàries.", correct: false }
    ]
  },
  {
    question: "L'incompliment de la jornada de treball de manera reiterada, quina falta sol constituir?",
    number: 6,
    answers: [
      { text: "Una falta greu.", correct: true },
      { text: "Una falta lleu.", correct: false },
      { text: "Una falta molt greu.", correct: false },
      { text: "No és una falta disciplinària.", correct: false }
    ]
  },
  {
    question: "L'incompliment de les normes sobre incompatibilitats, quina falta constitueix?",
    number: 7,
    answers: [
      { text: "Una falta molt greu.", correct: true },
      { text: "Una falta greu.", correct: false },
      { text: "Una falta lleu.", correct: false },
      { text: "Depèn de la quantitat econòmica.", correct: false }
    ]
  },
  {
    question: "Quina és una sanció que pot imposar-se per faltes molt greus?",
    number: 8,
    answers: [
      { text: "La separació del servei.", correct: true },
      { text: "L'apercebiment.", correct: false },
      { text: "La suspensió de funcions fins a 3 anys.", correct: false },
      { text: "El trasllat forçós.", correct: false }
    ]
  },
  {
    question: "El Codi de conducta dels empleats públics estableix que aquests han d'actuar segons el principi de:",
    number: 9,
    answers: [
      { text: "Neutralitat i imparcialitat.", correct: true },
      { text: "Obediència cega al partit polític.", correct: false },
      { text: "Afinitat amb el superior.", correct: false },
      { text: "Eficiència pressupostària exclusivament.", correct: false }
    ]
  },
  {
    question: "Quin dret de conciliació està reconegut als empleats públics?",
    number: 10,
    answers: [
      { text: "El dret a permisos per lactància o cura de fills.", correct: true },
      { text: "El dret a escollir les vacances segons la conveniència política.", correct: false },
      { text: "El dret a no treballar les tardes.", correct: false },
      { text: "El dret a teletreballar sempre que vulguin.", correct: false }
    ]
  },
  {
    question: "La promoció interna es basa en:",
    number: 11,
    answers: [
      { text: "Mèrit i capacitat, mitjançant proves selectives.", correct: true },
      { text: "Antiguitat exclusiva.", correct: false },
      { text: "Designació directa del superior.", correct: false },
      { text: "El pagament d'una taxa.", correct: false }
    ]
  },
  {
    question: "Quin és el procediment per sancionar una falta molt greu?",
    number: 12,
    answers: [
      { text: "Expedient disciplinari.", correct: true },
      { text: "Procediment abreujat verbal.", correct: false },
      { text: "Acord amistós.", correct: false },
      { text: "Notificació per correu electrònic.", correct: false }
    ]
  },
  {
    question: "La falta de respecte degut als superiors o companys sol ser tipificada com:",
    number: 13,
    answers: [
      { text: "Falta greu.", correct: true },
      { text: "Falta molt greu.", correct: false },
      { text: "Falta lleu.", correct: false },
      { text: "No és falta.", correct: false }
    ]
  },
  {
    question: "El dret a la informació i participació es canalitza a través de:",
    number: 14,
    answers: [
      { text: "Els representants del personal (sindicats).", correct: true },
      { text: "Directament mitjançant el cap de gabinet.", correct: false },
      { text: "Mitjançant assemblees ciutadanes.", correct: false },
      { text: "No existeix aquest dret.", correct: false }
    ]
  },
  {
    question: "El principi de transparència obliga els empleats públics a:",
    number: 15,
    answers: [
      { text: "Donar informació veraç i accessible.", correct: true },
      { text: "Ocultar la informació per seguretat.", correct: false },
      { text: "Publicar dades personals de tercers.", correct: false },
      { text: "Prioritzar els interessos privats.", correct: false }
    ]
  },
  {
    question: "Les sancions disciplinàries han de ser:",
    number: 16,
    answers: [
      { text: "Proporcionades a la gravetat de la falta.", correct: true },
      { text: "Idèntiques per a tots els treballadors.", correct: false },
      { text: "Secretes per evitar conflictes.", correct: false },
      { text: "Aplicades pel sindicat.", correct: false }
    ]
  },
  {
    question: "L'abandonament del servei és considerat una falta:",
    number: 17,
    answers: [
      { text: "Molt greu.", correct: true },
      { text: "Greu.", correct: false },
      { text: "Lleu.", correct: false },
      { text: "Inexistent.", correct: false }
    ]
  },
  {
    question: "Què implica el deure de confidencialitat?",
    number: 18,
    answers: [
      { text: "Guardar secret sobre les dades i informacions que coneixen pel seu càrrec.", correct: true },
      { text: "No parlar mai amb els companys.", correct: false },
      { text: "No utilitzar el telèfon de l'empresa.", correct: false },
      { text: "No tenir cap relació amb el públic.", correct: false }
    ]
  },
  {
    question: "La carrera professional té com a objectiu:",
    number: 19,
    answers: [
      { text: "L'estímul del desenvolupament professional i l'eficiència.", correct: true },
      { text: "L'augment de la despesa pública.", correct: false },
      { text: "La reducció de la jornada laboral.", correct: false },
      { text: "El control polític dels treballadors.", correct: false }
    ]
  },
  {
    question: "Quina és la funció de l'avaluació de l'acompliment?",
    number: 20,
    answers: [
      { text: "Valorar la conducta i el rendiment dels empleats.", correct: true },
      { text: "Controlar el nombre de vegades que van al bany.", correct: false },
      { text: "Justificar l'acomiadament arbitrari.", correct: false },
      { text: "Determinar el sou de l'any següent.", correct: false }
    ]
  },
  {
    question: "Quin dret de l'empleat públic es veu afectat per la publicitat en la selecció?",
    number: 21,
    answers: [
      { text: "El dret a la igualtat en l'accés.", correct: true },
      { text: "El dret a la intimitat.", correct: false },
      { text: "El dret a la vaga.", correct: false },
      { text: "El dret a la lliure elecció de destí.", correct: false }
    ]
  },
  {
    question: "L'ús indegut dels béns públics constitueix una falta:",
    number: 22,
    answers: [
      { text: "Greu o molt greu (segons gravetat).", correct: true },
      { text: "Lleu, en tots els casos.", correct: false },
      { text: "No és una falta.", correct: false },
      { text: "Administrativa només.", correct: false }
    ]
  },
  {
    question: "El dret a la formació contínua és un deure?",
    number: 23,
    answers: [
      { text: "Sí, l'empleat té el dret i el deure d'actualitzar-se.", correct: true },
      { text: "No, és opcional totalment.", correct: false },
      { text: "No, només és un dret.", correct: false },
      { text: "Només si l'Administració obliga.", correct: false }
    ]
  },
  {
    question: "Què és la separació del servei?",
    number: 24,
    answers: [
      { text: "L'extinció de la relació de servei per sanció.", correct: true },
      { text: "Un tipus de trasllat a una altra unitat.", correct: false },
      { text: "Una jubilació anticipada.", correct: false },
      { text: "Una suspensió temporal.", correct: false }
    ]
  },
  {
    question: "La discriminació per raó de gènere en l'àmbit laboral és:",
    number: 25,
    answers: [
      { text: "Falta molt greu.", correct: true },
      { text: "Falta greu.", correct: false },
      { text: "Falta lleu.", correct: false },
      { text: "Sancionable només per la via civil.", correct: false }
    ]
  },
  {
    question: "El procediment disciplinari ha de garantir:",
    number: 26,
    answers: [
      { text: "El dret d'audiència i defensa.", correct: true },
      { text: "La rapidesa per sobre de tot.", correct: false },
      { text: "La decisió exclusiva del superior.", correct: false },
      { text: "La confidencialitat total per a l'acusat.", correct: false }
    ]
  },
  {
    question: "Com es diu el sistema de carrera que suposa el canvi de cos o escala?",
    number: 27,
    answers: [
      { text: "Carrera vertical (Promoció interna).", correct: true },
      { text: "Carrera horitzontal.", correct: false },
      { text: "Carrera lineal.", correct: false },
      { text: "Carrera aleatòria.", correct: false }
    ]
  },
  {
    question: "Les retribucions dels empleats públics es divideixen en:",
    number: 28,
    answers: [
      { text: "Bàsiques i complementàries.", correct: true },
      { text: "Fixes i variables.", correct: false },
      { text: "Salarials i dietes.", correct: false },
      { text: "Nacionals i autonòmiques.", correct: false }
    ]
  },
  {
    question: "El complement de destinació retribueix:",
    number: 29,
    answers: [
      { text: "El nivell del lloc de treball.", correct: true },
      { text: "La dedicació exclusiva.", correct: false },
      { text: "La perillositat.", correct: false },
      { text: "L'antiguitat acumulada.", correct: false }
    ]
  },
  {
    question: "El complement específic retribueix:",
    number: 30,
    answers: [
      { text: "Les condicions particulars de les funcions del lloc.", correct: true },
      { text: "El grup de classificació.", correct: false },
      { text: "L'edat del treballador.", correct: false },
      { text: "Els estudis realitzats.", correct: false }
    ]
  },
  {
    question: "La prescripció de les faltes disciplinàries implica que:",
    number: 31,
    answers: [
      { text: "No poden ser sancionades passat un temps.", correct: true },
      { text: "Es poden sancionar indefinidament.", correct: false },
      { text: "Només es poden sancionar si el superior vol.", correct: false },
      { text: "Es converteixen en faltes lleus.", correct: false }
    ]
  },
  {
    question: "El dret a la negociació col·lectiva correspon a:",
    number: 32,
    answers: [
      { text: "Els sindicats més representatius.", correct: true },
      { text: "Qualsevol treballador individualment.", correct: false },
      { text: "Els alts càrrecs polítics.", correct: false },
      { text: "No existeix la negociació.", correct: false }
    ]
  },
  {
    question: "Com s'ha de conduir un empleat públic amb la ciutadania?",
    number: 33,
    answers: [
      { text: "Amb eficàcia, respecte i diligència.", correct: true },
      { text: "Segons les preferències personals.", correct: false },
      { text: "Amb indiferència total.", correct: false },
      { text: "Segons el rang de la persona.", correct: false }
    ]
  },
  {
    question: "La inhabilitació per a càrrec públic és una sanció que porta aparellada:",
    number: 34,
    answers: [
      { text: "La pèrdua de la condició de funcionari.", correct: true },
      { text: "Una suspensió de sou.", correct: false },
      { text: "Un trasllat de departament.", correct: false },
      { text: "La pèrdua de la nacionalitat.", correct: false }
    ]
  },
  {
    question: "El dret a la jornada de treball té com a límit:",
    number: 35,
    answers: [
      { text: "Les necessitats del servei i la normativa aplicable.", correct: true },
      { text: "La voluntat del funcionari.", correct: false },
      { text: "El que digui el conveni privat.", correct: false },
      { text: "Cap límit.", correct: false }
    ]
  },
  {
    question: "El dret a la llibertat d'expressió dels empleats públics està limitat per:",
    number: 36,
    answers: [
      { text: "El deure de reserva i fidelitat a les institucions.", correct: true },
      { text: "No té cap límit.", correct: false },
      { text: "La prohibició de parlar amb la premsa.", correct: false },
      { text: "Només per ordres del superior.", correct: false }
    ]
  },
  {
    question: "Quina retribució no és bàsica?",
    number: 37,
    answers: [
      { text: "Productivitat.", correct: true },
      { text: "Sou.", correct: false },
      { text: "Triennis.", correct: false },
      { text: "Pagues extres.", correct: false }
    ]
  },
  {
    question: "La reincidència en faltes disciplinàries pot comportar:",
    number: 38,
    answers: [
      { text: "L'agreujament de la sanció.", correct: true },
      { text: "El perdó de la sanció.", correct: false },
      { text: "Cap canvi.", correct: false },
      { text: "Una recompensa.", correct: false }
    ]
  },
  {
    question: "El dret a l'assistència jurídica de l'empleat públic existeix quan:",
    number: 39,
    answers: [
      { text: "L'empleat és demandat per fets relacionats amb el seu servei.", correct: true },
      { text: "L'empleat comet un delicte privat.", correct: false },
      { text: "L'empleat vol demandar el seu cap.", correct: false },
      { text: "L'empleat vol fer un testament.", correct: false }
    ]
  },
  {
    question: "La carrera horitzontal a Catalunya s'associa sovint amb:",
    number: 40,
    answers: [
      { text: "Els nivells de carrera professional reconeguts.", correct: true },
      { text: "Els ascensos polítics.", correct: false },
      { text: "Els canvis de conselleria.", correct: false },
      { text: "La jubilació.", correct: false }
    ]
  },
  {
    question: "La suspensió de funcions de manera provisional pot ser retribuïda?",
    number: 41,
    answers: [
      { text: "Pot comportar la suspensió del pagament de retribucions.", correct: true },
      { text: "Mai, sempre es cobra tot.", correct: false },
      { text: "Sempre es paga el sou, sense suplements.", correct: false },
      { text: "És un permís remunerat.", correct: false }
    ]
  },
  {
    question: "Com s'anomena la sanció que comporta la pèrdua d'un cert nombre de dies de sou i feina?",
    number: 42,
    answers: [
      { text: "Suspensió de funcions.", correct: true },
      { text: "Inhabilitació.", correct: false },
      { text: "Apercebiment.", correct: false },
      { text: "Trasllat forçós.", correct: false }
    ]
  },
  {
    question: "L'ètica pública busca evitar:",
    number: 43,
    answers: [
      { text: "La corrupció i el conflicte d'interessos.", correct: true },
      { text: "L'ús d'ordinadors.", correct: false },
      { text: "La participació en sindicats.", correct: false },
      { text: "El treball en equip.", correct: false }
    ]
  },
  {
    question: "La potesta sancionadora és exercida per:",
    number: 44,
    answers: [
      { text: "L'òrgan competent per nomenar el funcionari o el que preveu la norma.", correct: true },
      { text: "El jutge del barri.", correct: false },
      { text: "Els companys de l'oficina.", correct: false },
      { text: "El ciutadà afectat.", correct: false }
    ]
  },
  {
    question: "Què s'entén per abús d'autoritat?",
    number: 45,
    answers: [
      { text: "L'ús il·legítim de les facultats del càrrec.", correct: true },
      { text: "L'exercici correcte del lideratge.", correct: false },
      { text: "Una manera eficient de gestionar personal.", correct: false },
      { text: "La delegació de tasques.", correct: false }
    ]
  },
  {
    question: "L'empleat públic pot ser sancionat per faltes comeses fora de l'horari?",
    number: 46,
    answers: [
      { text: "Sí, si afecten el prestigi de la funció pública.", correct: true },
      { text: "No, mai.", correct: false },
      { text: "Només si és al mateix edifici.", correct: false },
      { text: "Només si porta uniforme.", correct: false }
    ]
  },
  {
    question: "El dret a la seguretat i salut en el treball inclou:",
    number: 47,
    answers: [
      { text: "La prevenció de riscos laborals.", correct: true },
      { text: "La paga doble d'estiu.", correct: false },
      { text: "L'accés a gimnàs privat gratuït.", correct: false },
      { text: "El dret a no anar a treballar en dies de pluja.", correct: false }
    ]
  },
  {
    question: "La promoció interna pot ser d'un grup de classificació inferior a un de superior?",
    number: 48,
    answers: [
      { text: "Sí, segons el sistema de titulació requerida.", correct: true },
      { text: "No, és impossible.", correct: false },
      { text: "Només si es fa sense examen.", correct: false },
      { text: "Només si el funcionari té molta antiguitat.", correct: false }
    ]
  },
  {
    question: "Quina és la finalitat de l'expedient disciplinari?",
    number: 49,
    answers: [
      { text: "Determinar la veritat dels fets i les possibles responsabilitats.", correct: true },
      { text: "Justificar un acomiadament ràpid.", correct: false },
      { text: "Avisar el funcionari de manera informal.", correct: false },
      { text: "Fer públic el nom de l'infractor.", correct: false }
    ]
  },
  {
    question: "Un deure bàsic de l'empleat públic és:",
    number: 50,
    answers: [
      { text: "El compliment de la Llei i el respecte a la Constitució.", correct: true },
      { text: "El seguiment de les ordres dels caps dels partits polítics.", correct: false },
      { text: "El compliment de qualsevol ordre, encara que sigui il·legal.", correct: false },
      { text: "El deure de fer hores extres gratuïtes.", correct: false }
    ]
  },
  {
    question: "La nul·litat de les ordres de servei es dona quan:",
    number: 51,
    answers: [
      { text: "L'ordre implica la comissió d'un delicte.", correct: true },
      { text: "L'ordre no agrada al funcionari.", correct: false },
      { text: "L'ordre és difícil de complir.", correct: false },
      { text: "L'ordre ve del superior immediat.", correct: false }
    ]
  },
  {
    question: "Les faltes lleus solen presciure en:",
    number: 52,
    answers: [
      { text: "Un període breu (exemple: 1-6 mesos).", correct: true },
      { text: "Mai.", correct: false },
      { text: "10 anys.", correct: false },
      { text: "20 anys.", correct: false }
    ]
  },
  {
    question: "El dret a la carrera professional implica:",
    number: 53,
    answers: [
      { text: "La millora de la categoria o grau amb el temps.", correct: true },
      { text: "L'accés a viatges internacionals.", correct: false },
      { text: "La jubilació automàtica als 50 anys.", correct: false },
      { text: "La designació com a polític.", correct: false }
    ]
  },
  {
    question: "L'ús de la llengua catalana en l'exercici de la funció pública és:",
    number: 54,
    answers: [
      { text: "Un dret i un deure (segons la normativa de normalització lingüística).", correct: true },
      { text: "Una qüestió optativa.", correct: false },
      { text: "Una prohibició administrativa.", correct: false },
      { text: "Només obligatòria per als caps.", correct: false }
    ]
  },
  {
    question: "L'empleat públic pot realitzar hores extraordinàries?",
    number: 55,
    answers: [
      { text: "Només de manera excepcional i per necessitats del servei.", correct: true },
      { text: "Sempre que vulgui per guanyar més.", correct: false },
      { text: "Mai, estan prohibides.", correct: false },
      { text: "Sempre, sense límit.", correct: false }
    ]
  },
  {
    question: "La sanció de trasllat forçós pot implicar canvi de localitat?",
    number: 56,
    answers: [
      { text: "Sí.", correct: true },
      { text: "No, mai.", correct: false },
      { text: "Només si és voluntari.", correct: false },
      { text: "Només si és a la mateixa oficina.", correct: false }
    ]
  },
  {
    question: "El personal directiu té un règim disciplinari:",
    number: 57,
    answers: [
      { text: "Similar al dels altres funcionaris, però amb especialitats.", correct: true },
      { text: "Totalment aliè a la llei.", correct: false },
      { text: "Només es basa en l'acomiadament.", correct: false },
      { text: "Inexistent.", correct: false }
    ]
  },
  {
    question: "Els drets sindicals són exercits per:",
    number: 58,
    answers: [
      { text: "Les centrals sindicals i els delegats de personal.", correct: true },
      { text: "Només pel cap de Recursos Humans.", correct: false },
      { text: "Qualsevol persona externa.", correct: false },
      { text: "Els funcionaris interins exclusivament.", correct: false }
    ]
  },
  {
    question: "Què és un conflicte d'interessos?",
    number: 59,
    answers: [
      { text: "Situació on l'interès privat interfereix amb el deure públic.", correct: true },
      { text: "Una baralla entre dos companys.", correct: false },
      { text: "La diferència d'opinió entre dos departaments.", correct: false },
      { text: "La competència entre sindicats.", correct: false }
    ]
  },
  {
    question: "La carrera professional a la Generalitat es regula principalment pel:",
    number: 60,
    answers: [
      { text: "TREBEP i la normativa de funció pública catalana.", correct: true },
      { text: "Codi de comerç.", correct: false },
      { text: "Reglament d'esports.", correct: false },
      { text: "Contracte laboral privat.", correct: false }
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