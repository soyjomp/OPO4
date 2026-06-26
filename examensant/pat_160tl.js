const TEST_ID = "pat_160tl"; 
const questions = [
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "L'Estatut d'autonomia de Catalunya determina en el seu article 6 que:",
    "number": 1,
    "answers": [
      { "text": "El català és la llengua d'ús normal i preferent de les administracions públiques i dels mitjans de comunicació públics de Catalunya.", "correct": true },
      { "text": "El català és la llengua d'ús exclusiu de les administracions públiques i dels mitjans de comunicació públics de Catalunya.", "correct": false },
      { "text": "El català és la llengua d'ús preferent de les administracions públiques i dels mitjans de comunicació públics i privats de Catalunya.", "correct": false },
      { "text": "El català i el castellà són les llengües d'ús normal i preferent de les administracions públiques i dels mitjans de comunicació públics de Catalunya.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "La Relació de Llocs de Treball (RLT) de l'Administració de la Generalitat de Catalunya:",
    "number": 2,
    "answers": [
      { "text": "És el mateix que la plantilla de personal.", "correct": false },
      { "text": "Ha de ser aprovada pel titular de la Direcció General de la Funció Pública.", "correct": false },
      { "text": "El seu contingut només inclou la denominació i característiques essencials dels llocs i els requisits per ocupar-los.", "correct": false },
      { "text": "És pública i ha d'incloure tots els llocs de funcionaris, laborals i eventuals existents.", "correct": true }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "La Constitució espanyola, en el seu article 103.1, determina que l'Administració pública serveix amb objectivitat els interessos generals i actua d'acord amb els principis:",
    "number": 3,
    "answers": [
      { "text": "D'eficiència, autonomia, descentralització, desconcentració i coordinació, amb submissió plena a la llei i al dret.", "correct": false },
      { "text": "D'eficàcia, autonomia, jerarquia, descentralització i coordinació, amb submissió plena a la llei i al dret.", "correct": false },
      { "text": "D'eficiència, jerarquia, descentralització, desconcentració i coordinació, amb submissió plena a la llei i al dret.", "correct": false },
      { "text": "D'eficàcia, jerarquia, descentralització, desconcentració i coordinació, amb submissió plena a la llei i al dret.", "correct": true }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "D'acord amb la classificació econòmica dels ingressos, als pressupostos de la Generalitat de Catalunya, el capítol VII correspon a:",
    "number": 4,
    "answers": [
      { "text": "Ingressos patrimonials.", "correct": false },
      { "text": "Alienació d'inversions reals.", "correct": false },
      { "text": "Transferències corrents.", "correct": false },
      { "text": "Transferències de capital.", "correct": true }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "La part de la despesa corresponent als exercicis futurs, en despeses d'abast plurianual, ha de ser determinada pel:",
    "number": 5,
    "answers": [
      { "text": "Secretari o secretaria general del Departament competent en matèria de finances.", "correct": false },
      { "text": "Govern, a proposta del conseller o consellera del Departament competent en matèria de finances.", "correct": true },
      { "text": "Conseller o consellera del Departament d'Economia i Finances de forma unilateral.", "correct": false },
      { "text": "Parlament de Catalunya directament en cada expedient ordinari.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "El termini general de prescripció de les accions per a la revocació i reintegrament d'una subvenció atorgada per la Generalitat de Catalunya és de:",
    "number": 6,
    "answers": [
      { "text": "Dos anys.", "correct": false },
      { "text": "Cinc anys.", "correct": false },
      { "text": "Quatre anys.", "correct": true },
      { "text": "Deu anys.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "Com es coneix la capacitat de les organitzacions per compartir i reutilitzar la informació de què disposen en els seus sistemes:",
    "number": 7,
    "answers": [
      { "text": "Principi d'accessibilitat a la informació i als serveis electrònics.", "correct": false },
      { "text": "Interoperabilitat.", "correct": true },
      { "text": "Govern electrònic.", "correct": false },
      { "text": "Multicanalitat.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "D'acord amb el Text Refós de l'Estatut Bàsic de l'Empleat Públic (TREBEP), un funcionari, en complir el sisè trienni, té dret com a mínim a:",
    "number": 8,
    "answers": [
      { "text": "Dos dies addicionals de lliure disposició (un acumulat al tercer trienni i un altre pel sisè).", "correct": true },
      { "text": "Un dia addicional de lliure disposició.", "correct": false },
      { "text": "Tres dies addicionals de lliure disposició.", "correct": false },
      { "text": "Quatre dies addicionals de lliure disposició.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "D'acord amb l'article 114 de la Llei 39/2015, de 1 d'octubre, posen fi a la via administrativa:",
    "number": 9,
    "answers": [
      { "text": "Les resolucions dels recursos extraordinaris de revisió.", "correct": false },
      { "text": "Les resolucions dels recursos d'alçada.", "correct": false },
      { "text": "Les resolucions dels recursos contenciosos administratius.", "correct": false },
      { "text": "Les resolucions dels recursos de reposició (i els propis recursos d'alçada).", "correct": true }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "D'acord amb el Reglament General de Protecció de Dades (RGPD) i la Llei Orgànica 3/2018 (LOPDGDD), en quins casos cal el consentiment dels ciutadans per tractar les seves dades de caràcter personal?",
    "number": 10,
    "answers": [
      { "text": "Només quan siguin relatives a la ideologia, afiliació sindical, religió o creences de l'interessat.", "correct": false },
      { "text": "En tots els casos, llevat que s'hagin recollit amb anterioritat a l'entrada en vigor de les directives europees clàssiques.", "correct": false },
      { "text": "En tots els casos, llevat que la llei de protecció de dades o una altra base legal legítima (com una obligació legal o missió pública) disposi una altra cosa.", "correct": true },
      { "text": "Només quan siguin dades de caràcter sensible relacionades directament amb la salut o l'historial clínic.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "D'acord amb el Text Refós de l'Estatut Bàsic de l'Empleado Públic (TREBEP), l'edat mínima per a l'accés a la funció pública és de:",
    "number": 11,
    "answers": [
      { "text": "16 anys.", "correct": true },
      { "text": "No s'estableix cap edat mínima, només l'edat d'escolarització obligatòria.", "correct": false },
      { "text": "18 anys.", "correct": false },
      { "text": "21 anys.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "D'acord amb la Constitució Espanyola, el Senat proposa al Rei el nomenament de quatre membres del Tribunal Constitucional escollits per majoria:",
    "number": 12,
    "answers": [
      { "text": "De les tres cinquenes parts dels membres de la cambra entre els candidats presentats pels òrgans executius col·legiats de les comunitats autònomes.", "correct": false },
      { "text": "De les tres cinquenes parts dels membres de la cambra entre els candidats presentats per les assemblees legislatives de les comunitats autònomes.", "correct": true },
      { "text": "De dues terceres parts dels membres de la cambra entre els candidats presentats per les assemblees legislatives de les comunitats autònomes.", "correct": false },
      { "text": "De dues terceres parts dels membres de la cambra entre els candidats presentats pels òrgans executius col·legiats de les comunitats autònomes.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "En l'àmbit de la modernització de l'Administració pública, què són les cartes de serveis?",
    "number": 13,
    "answers": [
      { "text": "Documents interns que recullen exclusivament les actuacions dutes a terme per una unitat administrativa durant l'any fiscal.", "correct": false },
      { "text": "Cartes personalitzades que l'Administració envia al ciutadà per informar-lo de l'estat de la seva tramitació en un termini màxim d'un mes.", "correct": false },
      { "text": "Documents públics que informen el ciutadà sobre els serveis i la unitat que els presta, a més d'incloure els compromisos adquirits en la seva prestació i els mecanismes de participació ciutadana per a la seva millora.", "correct": true },
      { "text": "Cartes informatives generals que l'Administració envia de forma massiva a la ciutadania amb els requisits generals per accedir a subvencions.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "D'acord amb la legislació de patrimoni de les administracions públiques, els béns patrimonials de l'Administració de la Generalitat de Catalunya:",
    "number": 14,
    "answers": [
      { "text": "Estan afectats de manera directa i immediata a un ús públic o a un servei públic estatal o autonòmic.", "correct": false },
      { "text": "Són béns de domini públic i, per tant, gaudeixen de la característica de ser completament inalienables.", "correct": false },
      { "text": "Són adquiribles (i alienables) per l'Administració mitjançant qualsevol títol jurídic vàlid en dret.", "correct": true },
      { "text": "Són absolutament inembargables en qualsevol circumstància d'acord amb la jurisprudència constitucional més recent sobre béns públics.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "Segons la Llei 26/2010, del 3 d'agost, de règim jurídic i de procediment de les administracions públiques de Catalunya, els conflictes d'atribucions que puguin sorgir entre òrgans d'un mateix departament de l'Administració de la Generalitat són resolts:",
    "number": 15,
    "answers": [
      { "text": "Pel conseller o consellera del departament corresponent.", "correct": true },
      { "text": "Pel director o directora de serveis de la conselleria de forma vinculant.", "correct": false },
      { "text": "Pel superior jeràrquic comú o, en el seu defecte, per la Comissió Jurídica Assessora.", "correct": false },
      { "text": "Pel secretari o secretària general del departament afectat.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "D'acord amb l'Estatut d'Autonomia de Catalunya vigent, quina d'aquestes matèries és competència exclusiva de la Generalitat?",
    "number": 16,
    "answers": [
      { "text": "Treball i relacions laborals bàsiques de tot el sector privat.", "correct": false },
      { "text": "El primer acolliment de les persones immigrades, que inclou les actuacions sociosanitàries i d'orientació.", "correct": true },
      { "text": "Medi ambient en la seva regulació bàsica i el canvi climàtic.", "correct": false },
      { "text": "Ordenació bàsica global sobre el sector pesquer i les aigües exteriors.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "En el marc del sistema de finançament de les comunitats autònomes, quin d'aquests tributs està cedit totalment (al 100%) a la Generalitat de Catalunya?",
    "number": 17,
    "answers": [
      { "text": "L'impost sobre activitats econòmiques (IAE).", "correct": false },
      { "text": "L'impost especial sobre hidrocarburs.", "correct": false },
      { "text": "L'impost sobre el valor afegit (IVA).", "correct": false },
      { "text": "Els tributs sobre el joc (taxa del joc).", "correct": true }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "D'acord amb l'article 47.1 de la Llei 39/2015, d'1 d'octubre, del procediment administratiu comú, si un òrgan manifestament incompetent per raó de la matèria o del territori dicta un acte administratiu:",
    "number": 18,
    "answers": [
      { "text": "L'acte és nul de ple dret.", "correct": true },
      { "text": "L'acte és vàlid si s'ha publicat en el diari oficial corresponent i no ha estat recorregut.", "correct": false },
      { "text": "L'acte és anul·lable, sens perjudici de la seva possible esmena posterior.", "correct": false },
      { "text": "L'acte és convalidable per l'òrgan jeràrquicament superior competent.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "D'acord amb la normativa de finances públiques de la Generalitat de Catalunya, les subvencions que concedeix l'Administració autonòmica:",
    "number": 19,
    "answers": [
      { "text": "Han de tenir sempre una contraprestació econòmica directa a favor de l'Administració per part de les persones beneficiàries.", "correct": false },
      { "text": "Consisteixen obligatòriament en una disposició de fons públics sense contraprestació directa, subjecta al compliment d'un objectiu o activitat d'utilitat pública.", "correct": true },
      { "text": "Poden ser atorgades de manera discrecional sense necessitat d'assignar o retenir recursos públics previs.", "correct": false },
      { "text": "Han de tenir una finalitat que respongui exclusivament al foment d'activitats de caràcter estrictament privat.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "La participació dels ciutadans de Catalunya en el procés d'elaboració de les lleis del Parlament de Catalunya:",
    "number": 20,
    "answers": [
      { "text": "És un dret reconegut en el títol I (Drets, deures i principis rectors) de l'Estatut d'autonomia de Catalunya.", "correct": true },
      { "text": "És un principi rector dels poders públics establert en el títol I de l'Estatut d'autonomia de Catalunya.", "correct": false },
      { "text": "És un principi rector dels poders públics establert en el títol II de l'Estatut d'autonomia de Catalunya.", "correct": false },
      { "text": "És un dret reconegut en el títol II de l'Estatut d'autonomia de Catalunya.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "En quins dos períodes ordinaris de sessions es reuneix anualment el Congrés dels Diputats segons la Constitució?",
    "number": 21,
    "answers": [
      { "text": "De setembre a desembre i de febrer a juny.", "correct": true },
      { "text": "De febrer a juliol i de setembre a desembre.", "correct": false },
      { "text": "De setembre a desembre i de gener a juny.", "correct": false },
      { "text": "De gener a juny i de setembre a novembre.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "Segons la normativa d'organització de l'Administració de la Generalitat de Catalunya, la creació, modificació o supressió dels departaments i dels òrgans superiors superiors directius (com Comissionats) correspon a:",
    "number": 22,
    "answers": [
      { "text": "Al President de la Generalitat de Catalunya (mitjançant Decret d'estructura).", "correct": true },
      { "text": "Al conseller/a del departament al qual estigui adscrit.", "correct": false },
      { "text": "Al conseller/a competent en matèria de funció pública.", "correct": false },
      { "text": "Al secretari/ària del Govern de la Generalitat.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "Un funcionari de l'Administració de la Generalitat a qui s'atorga una comissió de serveis ordinària a una altra administració pública, respecte de l'Administració de la Generalitat es manté en la situació de:",
    "number": 23,
    "answers": [
      { "text": "Serveis especials.", "correct": false },
      { "text": "Servei en altres administracions públiques (només aplicable si hagués obtingut plaça definitiva per concurs).", "correct": false },
      { "text": "Servei actiu.", "correct": true },
      { "text": "Excedència voluntària per incompatibilitat.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "A quines tres àrees d'aplicació dóna suport la Plataforma d'Integració i Col·laboració Administrativa (PICA)?",
    "number": 24,
    "answers": [
      { "text": "A la tramitació en línia, a la validació de documentació signada electrònicament i a l'arxiu d'aquesta.", "correct": false },
      { "text": "A la interoperabilitat, a la validació de la documentació signada electrònicament i a l'arxiu d'aquesta.", "correct": false },
      { "text": "A la interoperabilitat, a la tramitació en línia i a la integració dels sistemes de gestió dels departaments de la Generalitat.", "correct": true },
      { "text": "A la tramitació en línia, a la interoperabilitat i a la validació de la documentació signada electrònicament.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "D'acord amb l'article 84 de la Llei 39/2015, de 1 d'octubre, posen fi al procediment administratiu:",
    "number": 25,
    "answers": [
      { "text": "La resolució, el desistiment, la renúncia al dret en què es fonamenta la sol·licitud i la declaració de caducitat.", "correct": true },
      { "text": "El desistiment, la caducitat, l'aplanament i la renúncia al dret en què es fonamenta la sol·licitud.", "correct": false },
      { "text": "La resolució, el desistiment, l'aplanament i la renúncia al dret en què es fonamenta la sol·licitud.", "correct": false },
      { "text": "La resolució, el desistiment, la caducitat i la prescripció.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "D'acord amb l'article 42.2 de la Llei 39/2015, de 1 d'octubre, en les notificacions en paper, si el primer intent resulta infructuós, s'ha de fer un segon intent en una hora diferent dins dels:",
    "number": 26,
    "answers": [
      { "text": "2 dies següents.", "correct": false },
      { "text": "3 dies següents.", "correct": true },
      { "text": "5 dies següents.", "correct": false },
      { "text": "7 dies següents.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "L'article 32 de la Llei 40/2015, de 1 d'octubre, estableix que els particulars tindran dret a ser indemnitzats de tota lesió en els seus béns o drets per responsabilitat patrimonial, llevat dels casos de:",
    "number": 27,
    "answers": [
      { "text": "De necessitat.", "correct": false },
      { "text": "D'interès nacional.", "correct": false },
      { "text": "D'urgència.", "correct": false },
      { "text": "De força major.", "correct": true }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "D'acord amb la Llei 39/2015, de 1 d'octubre, constitueix un supòsit de terminació que lliura de l'obligació general de dictar resolució expressa convencional:",
    "number": 28,
    "answers": [
      { "text": "El pacte o conveni que posi fi al procediment.", "correct": true },
      { "text": "La renúncia del dret.", "correct": false },
      { "text": "La prescripció.", "correct": false },
      { "text": "La caducitat.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "Quines són les activitats que constitueixen l'anomenat 'Cicle de millora' o 'Cicle de Deming' (PDCA)?",
    "number": 29,
    "answers": [
      { "text": "Planificar, comunicar, implicar i actuar.", "correct": false },
      { "text": "Planificar, comunicar, realitzar i controlar.", "correct": false },
      { "text": "Planificar, realitzar, actuar i corregir.", "correct": false },
      { "text": "Planificar, realitzar, controlar/verificar i actuar.", "correct": true }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "D'acord amb el Text Refós de la Llei General de la Seguretat Social, els graus de la incapacitat permanent són:",
    "number": 30,
    "answers": [
      { "text": "Total, especial, absoluta i gran invalidesa.", "correct": false },
      { "text": "Parcial, total, absoluta i gran invalidesa.", "correct": true },
      { "text": "Parcial, total, irreversible i gran invalidesa.", "correct": false },
      { "text": "Parcial, funcional, total i gran invalidesa.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "Quin termini general preveu l'article 83 de la Llei 39/2015, de 1 d'octubre, en relació amb el tràmit d'informació pública?",
    "number": 31,
    "answers": [
      { "text": "Un termini no inferior a 20 dies hàbils.", "correct": true },
      { "text": "Un termini no inferior a 30 dies.", "correct": false },
      { "text": "Un termini no inferior a 15 dies.", "correct": false },
      { "text": "Un termini no inferior a 10 dies.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "D'acord amb l'article 48 de la Llei 39/2015, de 1 d'octubre, són anul·lables:",
    "number": 32,
    "answers": [
      { "text": "Els actes de l'Administració que lesionin drets i llibertats susceptibles d'empara constitucional.", "correct": false },
      { "text": "Els actes de l'Administració que siguin constitutius d'infracció penal o es dictin a conseqüència d'aquesta.", "correct": false },
      { "text": "Els actes de l'Administració que tinguin un contingut impossible.", "correct": false },
      { "text": "Els actes de l'Administració que incorrin en qualsevol infracció de l'ordenament jurídic, fins i tot la desviació de poder.", "correct": true }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "D'acord amb la Llei 26/2010 (LRJP-Cat), en casos d'absència, de vacant o de malaltia del secretari d'un òrgan col·legiat, i si no hi ha suplent designat, aquest és substituït provisionalment per:",
    "number": 33,
    "answers": [
      { "text": "El vocal més jove.", "correct": false },
      { "text": "El membre de l'òrgan col·legiat que acordin els seus assistents o designi el president.", "correct": true },
      { "text": "Pel vocal amb menys antiguitat a l'Administració pública.", "correct": false },
      { "text": "Pel vocal de més edat de la sessió.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "D'acord amb l'article 124 de la Llei 39/2015, de 1 d'octubre, el termini per interposar el recurs potestatiu de reposició contra un acte exprés és de:",
    "number": 34,
    "answers": [
      { "text": "Un mes.", "correct": true },
      { "text": "Dos mesos.", "correct": false },
      { "text": "Tres mesos.", "correct": false },
      { "text": "Quinze dies.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "És un procediment ordinari d'adjudicació de contractes del sector públic segons la Llei 9/2017 (LCSP):",
    "number": 35,
    "answers": [
      { "text": "El concurs de projectes amb jurat.", "correct": false },
      { "text": "El procediment restringit (al costat de l'obert).", "correct": true },
      { "text": "El diàleg competitiu excepcional.", "correct": false },
      { "text": "El procediment negociat amb publicitat.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "D'acord amb la normativa de funció pública de la Generalitat de Catalunya, els llocs de treball que comporten l'exercici de funcions que impliquen la participació directa o indirecta en l'exercici de les potestats públiques són reservats exclusivament a:",
    "number": 36,
    "answers": [
      { "text": "Personal laboral o funcionaris de carrera, indistintament.", "correct": false },
      { "text": "Funcionaris de carrera.", "correct": true },
      { "text": "Funcionaris de carrera exclusivament dels cossos del grup A1.", "correct": false },
      { "text": "Personal eventual de confiança directiva.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "Tenen la consideració de contractes administratius, segons la Llei 9/2017, de contractes del sector públic (LCSP):",
    "number": 37,
    "answers": [
      { "text": "Tots els contractes subscrits per qualsevol ens, organisme o entitat del sector públic comercial.", "correct": false },
      { "text": "Tots els contractes privats de les entitats adjudicadores.", "correct": false },
      { "text": "Els contractes de concessió d'obres, d'obres, de subministraments, de serveis i de concessió de serveis subscrits per una Administració Pública.", "correct": true },
      { "text": "Tots els contractes mercantils finançats amb fons europeus.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "Dins de l'estat de despeses dels pressupostos de la Generalitat de Catalunya, els ingressos derivats de la prestació de serveis no previstos inicialment poden donar lloc a:",
    "number": 38,
    "answers": [
      { "text": "La retenció de saldos pressupostaris consolidats.", "correct": false },
      { "text": "La generació de crèdits.", "correct": true },
      { "text": "La liquidació forçosa de crèdits ordinaris.", "correct": false },
      { "text": "La incorporació de romanents de crèdit de l'exercici següent.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "Quin departament de la Generalitat té assignades les competències històriques i executives en matèria d'arxius i patrimoni documental de Catalunya?",
    "number": 39,
    "answers": [
      { "text": "El Departament de la Presidència.", "correct": false },
      { "text": "El Departament de Cultura.", "correct": true },
      { "text": "El Departament de Justícia i Qualitat Democràtica.", "correct": false },
      { "text": "El Departament d'Economia i Finances.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "Segons l'Estatut d'autonomia de Catalunya, els consells de vegueria es configuren normativament per a què:",
    "number": 40,
    "answers": [
      { "text": "Substitueixin legalment les diputacions provincials.", "correct": true },
      { "text": "Substitueixin de forma immediata les comarques.", "correct": false },
      { "text": "Siguin òrgans de gestió privativa exclusivament judicial.", "correct": false },
      { "text": "Es creïn de forma voluntària com a mancomunitats intermunicipals.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "Segons el règim disciplinari del vigent Text Refós de l'Estatut Bàsic de l'Empleat Públic (TREBEP), les infraccions lleus comeses pels funcionaris prescriuen:",
    "number": 41,
    "answers": [
      { "text": "Als 6 mesos.", "correct": true },
      { "text": "Als 12 mesos.", "correct": false },
      { "text": "Als 2 mesos.", "correct": false },
      { "text": "Als 3 mesos.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "Les sessions extraordinàries del Parlament de Catalunya poden ser convocades pel seu president o presidenta, per acord de la Diputació Permanent, entre altres supòsits:",
    "number": 42,
    "answers": [
      { "text": "A proposta de la Mesa de forma unilateral.", "correct": false },
      { "text": "A petició de tres grups parlamentaris o d'una quarta part dels diputats.", "correct": false },
      { "text": "A petició de grups parlamentaris o de diputats que en representin la majoria absoluta.", "correct": true },
      { "text": "A proposta d'una desena part dels seus diputats de forma directa.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "D'acord amb l'article 12 de la Llei 40/2015, de 1 d'octubre, de règim jurídic del sector públic, la delegació de signatura:",
    "number": 43,
    "answers": [
      { "text": "Altera la competència de l'òrgan delegant i per a la seva validesa es requereix publicació en el diari oficial.", "correct": false },
      { "text": "No altera la competència de l'òrgan delegant i per a la seva validesa es requereix publicació en el diari oficial.", "correct": false },
      { "text": "No altera la competència de l'òrgan delegant i per a la seva validesa no es requereix la seva publicació.", "correct": true },
      { "text": "Altera la competència de l'òrgan delegant i per a la seva validesa no es requereix publicació.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "D'acord amb l'article 1.1 de la Constitució espanyola, Espanya es constitueix en un Estat social i democràtic de dret, que propugna com a valors superiors del seu ordenament jurídic:",
    "number": 44,
    "answers": [
      { "text": "La llibertat, la justícia, la seguretat i el pluralisme polític.", "correct": false },
      { "text": "La llibertat, la justícia, la igualtat i el pluralisme polític.", "correct": true },
      { "text": "La llibertat, la justícia, la igualtat i la seguretat.", "correct": false },
      { "text": "La llibertat, la justícia i la seguretat general.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "El dret d'accés a la informació pública i als documents dels procediments acabats, d'acord amb la Llei 19/2014 de transparència de Catalunya i la Llei 39/2015:",
    "number": 45,
    "answers": [
      { "text": "Implica el dret d'obtenir còpies o certificats dels documents, previ pagament de les taxes o exaccions establertes legalment, si s'escau.", "correct": true },
      { "text": "Implica el dret d'obtenir còpies o certificats dels documents, sense que es pugui establir mai cap taxa per a l'expedició física.", "correct": false },
      { "text": "Implica el dret d'obtenir exclusivament còpies o certificats dels documents catalogats com d'interès històric, cultural o científic.", "correct": false },
      { "text": "No implica el dret d'obtenir còpies o certificats, sinó únicament l'examen visual de l'expedient.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "Les inscripcions fetes al Registre Electrònic d'Empreses Licitadores (RELI) de la Generalitat de Catalunya tenen una validesa:",
    "number": 46,
    "answers": [
      { "text": "D'un ano.", "correct": false },
      { "text": "De quatre anys.", "correct": false },
      { "text": "De dos anys.", "correct": false },
      { "text": "Indefinida, sens perjudici de l'obligació de mantenir-les degudament actualitzades si varien les circumstàncies.", "correct": true }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "La Sindicatura de Comptes de Catalunya depèn orgànicament:",
    "number": 47,
    "answers": [
      { "text": "Del Departament de la Presidència.", "correct": false },
      { "text": "De la Intervenció General de la Generalitat.", "correct": false },
      { "text": "Del Govern de la Generalitat de Catalunya.", "correct": false },
      { "text": "Del Parlament de Catalunya.", "correct": true }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "El compromís o disposició de la despesa en l'àmbit de la comptabilitat pública de la Generalitat correspon al document comptable:",
    "number": 48,
    "answers": [
      { "text": "D (Disposició).", "correct": true },
      { "text": "A (Autorització).", "correct": false },
      { "text": "P (Proposta de pagament).", "correct": false },
      { "text": "O (Obligació).", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "En el cas que la Intervenció Delegada de la Generalitat discrepi amb el fons o amb la forma dels actes, expedients o documents examinats en l'exercici de la funció interventora, quina actuació ha de dur a terme?",
    "number": 49,
    "answers": [
      { "text": "Emettre una resolució denegatòria ferma en via administrativa.", "correct": false },
      { "text": "Formular les seves objeccions per escrit mitjançant un 'reparament'.", "correct": true },
      { "text": "Dictar una instrucció d'obligat compliment a l'òrgan afectat.", "correct": false },
      { "text": "Elevar l'expedient directament al conseller/a del departament corresponent sense cap tràmit previ.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-TL",
    "question": "De conformitat amb el model actual de funcionament dels registres electrònics regulat a l'article 16 de la Llei 39/2015, l'assentament de tot document obligatori registrat ha d'incloure com a mínim:",
    "number": 50,
    "answers": [
      { "text": "Un número d'ordre individualitzat, la data i hora d'obertura oficial, la identificació clara de l'interessat i l'òrgan destinatari.", "correct": true },
      { "text": "Que s'identifiquin el destinatari, el lloc físic de lliurament i la data manuscrita.", "correct": false },
      { "text": "Únicament la signatura digital d'un funcionari públic que actuï com a testimoni o testimoni electrònic.", "correct": false },
      { "text": "Que s'identifiqui amb claredat l'assumpte general del document sense necessitat d'identificar l'emissor de forma fefaent.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST RESERVA - 160-TL",
    "question": "D'acord amb la Llei 50/1997, del Govern, les comissions delegades del Govern de l'Estat són creades, modificades o suprimides:",
    "number": 1,
    "answers": [
      { "text": "Per Reial decret del president del Govern, a proposta del Consell de Ministres.", "correct": false },
      { "text": "Per Reial decret del president del Govern, un cop escoltat el Consell de Ministres.", "correct": false },
      { "text": "Per Reial decret del Consell de Ministres, un cop escoltat el president del Govern.", "correct": false },
      { "text": "Per Reial decret del Consell de Ministres, a proposta del president del Govern.", "correct": true }
    ]
  },
  {
    "theme": "PAT; QUEST RESERVA - 160-TL",
    "question": "D'acord amb l'article 40.4 de la Llei 39/2015, de 1 d'octubre, del procediment administratiu comú, tota notificació s'ha de cursar dins el termini de:",
    "number": 2,
    "answers": [
      { "text": "Cinc dies a partir de la data en què l'acte s'hagi dictat.", "correct": false },
      { "text": "Deu dies a partir de la data en què l'acte s'hagi dictat.", "correct": true },
      { "text": "Quinze dies a partir de la data en què l'acte s'hagi dictat.", "correct": false },
      { "text": "Vint dies a partir de la data en què l'acte s'hagi dictat.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST RESERVA - 160-TL",
    "question": "Els béns patrimonials de l'Administració de la Generalitat de Catalunya que són immobles:",
    "number": 3,
    "answers": [
      { "text": "S'han d'inscriure a l'inventari general del patrimoni de la Generalitat que gestiona de manera directa el Departament de la Presidència.", "correct": false },
      { "text": "S'han d'inscriure al Registre de la Cambra de la Propietat del municipi on estiguin ubicats obligatòriament.", "correct": false },
      { "text": "S'han d'inscriure al Registre de la Propietat que correspongui, d'acord amb el règim establert a la Llei hipotecària.", "correct": true },
      { "text": "S'han d'inscriure al Registre Municipal de Béns de les Administracions Públiques exonerats del pagament de l'IAE.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST RESERVA - 160-TL",
    "question": "A què corresponen les sigles TIC?",
    "number": 4,
    "answers": [
      { "text": "Teories dels instruments de comunicació.", "correct": false },
      { "text": "Tecnologies dels instruments de comunicació.", "correct": false },
      { "text": "Tecnologies de la informació i la comunicació.", "correct": true },
      { "text": "Tractats de la innovació i la comunicació.", "correct": false }
    ]
  },

];

// -------------------------
// UTIL: SHUFFLE
// -------------------------
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// -------------------------
// ESTADO GLOBAL
// -------------------------
let activeQuestions = [];
let currentIndex = 0;
let correctCount = 0;
let incorrectCount = 0;
let hasAnswered = false;
let originalTotal = 0; // 🔥 NUEVO: Guarda el total real del test al empezar

const REAPEAR_OFFSET = 3;

// -------------------------
// DOM
// -------------------------
const quizCard = document.getElementById('quiz-card');
const themeHeaderContainer = document.getElementById('theme-header-container');
const globalThemeTitle = document.getElementById('global-theme-title');
const resultsCard = document.getElementById('results-card');
const scoreboard = document.getElementById('scoreboard');

const displayTestId = document.getElementById('display-test-id');
const currentIdxTxt = document.getElementById('current-index');
const totalQuestionsTxt = document.getElementById('total-questions');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const topRestartBtn = document.getElementById('top-restart-btn');

const liveCorrect = document.getElementById('live-correct');
const liveIncorrect = document.getElementById('live-incorrect');
const liveRemaining = document.getElementById('live-remaining');

// -------------------------
// INIT
// -------------------------
function initTest(forceRestart = false) {

  const saved = loadProgress();

  // 🔥 CONTINUAR TEST
  if (!forceRestart && saved) {
    showUI();
    showQuestion();
    return;
  }

  // 🔥 REINICIO TOTAL
  currentIndex = 0;
  correctCount = 0;
  incorrectCount = 0;

  activeQuestions = shuffleArray(questions).map(q => ({
    ...q,
    answers: shuffleArray(q.answers)
  }));
  
  // 🔥 NUEVO: Guardamos cuántas preguntas tiene el test original antes de cualquier fallo
  originalTotal = activeQuestions.length;

  saveProgress();

  showUI();
  showQuestion();
}

// -------------------------
// UI BASE
// -------------------------
function showUI() {
  displayTestId.textContent = TEST_ID;

  quizCard.style.display = 'block';
  themeHeaderContainer.style.display = 'block';
  scoreboard.style.display = 'flex';
  resultsCard.style.display = 'none';

  updateScoreboard();
}

// -------------------------
// SCOREBOARD
// -------------------------
function updateScoreboard() {
  // 🔥 FIJADO: Ahora muestra siempre el total inicial fijo
  totalQuestionsTxt.textContent = originalTotal; 
  liveCorrect.textContent = correctCount;
  liveIncorrect.textContent = incorrectCount;

  // 🔥 FIJADO: Calculamos el progreso real sobre el total original.
  // "currentIndex" representa cuántas preguntas del flujo principal ha ido superando.
  let answered = currentIndex + (hasAnswered ? 1 : 0);
  
  // Las restantes bajan de manera estricta basándose en el total original.
  let remaining = originalTotal - answered;

  liveRemaining.textContent = Math.max(0, remaining);
}

// -------------------------
// PREGUNTA
// -------------------------
function showQuestion() {
  hasAnswered = false;
  nextBtn.style.display = 'none';
  answersContainer.innerHTML = '';

  const q = activeQuestions[currentIndex];

  currentIdxTxt.textContent = currentIndex + 1;
  questionText.textContent = q.question;
  globalThemeTitle.textContent = q.theme || "TEMA GENERAL";

  q.answers.forEach(ans => {
    const btn = document.createElement('button');
    btn.classList.add('answer-btn');
    btn.textContent = ans.text;
    btn.dataset.correct = ans.correct;
    btn.onclick = selectAnswer;
    answersContainer.appendChild(btn);
  });

  updateScoreboard();
}

// -------------------------
// RESPUESTA
// -------------------------
function selectAnswer(e) {
  if (hasAnswered) return;
  hasAnswered = true;

  const btn = e.target;
  const correct = btn.dataset.correct === 'true';

  if (correct) {
    btn.classList.add('correct');
    correctCount++;
  } else {
    btn.classList.add('incorrect');
    incorrectCount++;

    Array.from(answersContainer.children).forEach(b => {
      if (b.dataset.correct === 'true') b.classList.add('correct');
    });

    // 🔥 REPASO ERROR (Se sigue insertando al final para repasar, pero ya no rompe los contadores)
    const duplicated = {
      ...activeQuestions[currentIndex],
      answers: shuffleArray(activeQuestions[currentIndex].answers)
    };

    const target = currentIndex + REAPEAR_OFFSET + 1;

    if (target >= activeQuestions.length) {
      activeQuestions.push(duplicated);
    } else {
      activeQuestions.splice(target, 0, duplicated);
    }
  }

  Array.from(answersContainer.children).forEach(b => b.disabled = true);

  updateScoreboard();
  nextBtn.style.display = 'block';

  saveProgress();
}

// -------------------------
// SIGUIENTE
// -------------------------
nextBtn.onclick = () => {
  currentIndex++;

  if (currentIndex >= activeQuestions.length) {
    showResults();
    return;
  }

  saveProgress();
  showQuestion();
};

// -------------------------
// RESULTADOS
// -------------------------
function showResults() {
  clearProgress();

  quizCard.style.display = 'none';
  themeHeaderContainer.style.display = 'none';
  scoreboard.style.display = 'none';
  resultsCard.style.display = 'block';

  document.getElementById('final-correct').textContent = correctCount;
  document.getElementById('final-incorrect').textContent = incorrectCount;
}

// -------------------------
// REINICIO
// -------------------------
restartBtn.onclick = () => {
  clearProgress();
  initTest(true);
};

topRestartBtn.onclick = () => {
  clearProgress();
  initTest(true);
};

// -------------------------
// STORAGE
// -------------------------
function saveProgress() {
  localStorage.setItem(
    `test_progress_${TEST_ID}`,
    JSON.stringify({
      currentIndex,
      correctCount,
      incorrectCount,
      activeQuestions,
      originalTotal // 🔥 NUEVO: Guardamos el total original en LocalStorage
    })
  );
}

function loadProgress() {
  const saved = localStorage.getItem(`test_progress_${TEST_ID}`);
  if (!saved) return false;

  const data = JSON.parse(saved);

  currentIndex = data.currentIndex;
  correctCount = data.correctCount;
  incorrectCount = data.incorrectCount;
  activeQuestions = data.activeQuestions;
  originalTotal = data.originalTotal || data.activeQuestions.length; // 🔥 NUEVO: Recuperamos el total original

  return true;
}

function clearProgress() {
  localStorage.removeItem(`test_progress_${TEST_ID}`);
}

// -------------------------
// START (IMPORTANTE)
// -------------------------
document.addEventListener("DOMContentLoaded", () => {
  initTest();
});