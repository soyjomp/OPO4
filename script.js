const MAX_ERRORS_ALLOWED = 5;

// --- GESTIÓ DE DESPLEGABLES (ACORDIÓ COMPATIBLE) ---
const blocks = document.querySelectorAll('.block-card');
blocks.forEach(block => {
    block.addEventListener('toggle', () => {
        if (block.open) {
            // Guardar en el localStorage quin bloc s'ha obert (per si es recarrega la pàgina)
            localStorage.setItem("last_opened_block", block.id);
            
            // Tancar els altres
            blocks.forEach(other => { 
                if (other !== block) other.open = false; 
            });
        }
    });
});

// --- LÒGICA DE PROGRÉS I INTERFICIE DE L'USUARI (UI) ---
function updateUI() {
    let totalPassed = 0;
    const topicCards = document.querySelectorAll('.topic-card');

    topicCards.forEach(card => {
        const topicId = card.getAttribute('data-topic');
        const rawProgress = localStorage.getItem(`progress-${topicId}`);
        const rawQuestions = localStorage.getItem(`questions-${topicId}`);
        
        // Reset complet de les classes d'estat dinàmiques
        card.classList.remove('passed', 'failed');

        if (rawProgress && rawQuestions) {
            const progress = JSON.parse(rawProgress);
            const questions = JSON.parse(rawQuestions);
            
            const respostesFetes = Object.keys(progress.respuestas || {}).length;
            const totalPreguntes = progress.total || 40;

            // CÀLCUL D'ERRORS EN TEMPS REAL
            let errors = 0;
            if (progress.respuestas) {
                Object.keys(progress.respuestas).forEach(key => {
                    const index = parseInt(key.replace('q', ''));
                    const answerText = progress.respuestas[key];
                    
                    // Comprovar si la resposta guardada és correcta o errònia
                    const question = questions[index];
                    if (question) {
                        const isCorrect = question.answers.find(a => a.text === answerText)?.correct;
                        if (isCorrect === false) errors++;
                    }
                });
            }

            // Actualització numèrica de les preguntes contestades
            const scoreText = card.querySelector('.score-text');
            if (scoreText) scoreText.innerText = `${respostesFetes}/${totalPreguntes}`;
            
            // Actualització visual de la barra de progrés interna
            const bar = card.querySelector('.bar-fill');
            if (bar) bar.style.width = (respostesFetes / totalPreguntes * 100) + '%';

            // ASIGNACIÓ DE COLOReS SEGONS EL RENDIMENT
            if (respostesFetes > 0) {
                if (errors > MAX_ERRORS_ALLOWED) {
                    card.classList.add('failed');
                } else if (respostesFetes === totalPreguntes) {
                    // Completa amb èxit (Missió Complerta) si s'han fet totes amb un màxim de 5 errors
                    card.classList.add('passed');
                    totalPassed++;
                }
            }
        } else {
            // Si no hi ha dades al localStorage d'aquest tema, el tornem a l'estat inicial de 0/40
            const scoreText = card.querySelector('.score-text');
            if (scoreText) scoreText.innerText = `0/40`;
            const bar = card.querySelector('.bar-fill');
            if (bar) bar.style.width = '0%';
        }
    });

    // Actualitza el marcador de fites globals de la capçalera
    const globalCounter = document.getElementById('pass-count');
    if (globalCounter) globalCounter.innerText = totalPassed;
}

// --- RESET GENERAL DE LA PARTIDA ---
function resetAllProgress() {
    if (confirm("Segur que vols esborrar tot el progrés de l'oposició? Aquesta acció no es pot desfer.")) {
        localStorage.clear();
        window.location.reload();
    }
}

// --- HOOKS D'ESDEVENIMENTS DE CÀRREGA ---
// Escolta si es modifica el progrés des d'altres pestanyes del navegador
window.addEventListener('storage', updateUI);

// Actualització immediata en obrir o fer focus a la web
window.onload = updateUI;
window.onfocus = updateUI;