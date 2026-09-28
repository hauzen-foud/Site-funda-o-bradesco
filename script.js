
/* ==========================================
   WEBSTART
   JAVASCRIPT
========================================== */


/* ==========================================
   MENU PARA CELULAR
========================================== */

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", function () {

    menu.classList.toggle("open");

});


const menuLinks = document.querySelectorAll("#menu a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("open");

    });

});


/* ==========================================
   BOTÃO INTERATIVO
========================================== */

const changeButton = document.getElementById("changeButton");
const message = document.getElementById("message");

changeButton.addEventListener("click", function () {

    message.textContent =
        "Muito bem! Você acabou de usar JavaScript.";

    changeButton.textContent =
        "Funcionou! ✓";

});


/* ==========================================
   BOTÃO VOLTAR AO TOPO
========================================== */

const topButton = document.createElement("button");

topButton.textContent = "↑";

topButton.classList.add("top-button");

topButton.title = "Voltar ao topo";

document.body.appendChild(topButton);


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});


topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ==========================================
   ANO AUTOMÁTICO
========================================== */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


/* ==========================================
   ANIMAÇÃO DOS CARDS
========================================== */

const cards = document.querySelectorAll(
    ".card, .tool, .learning-item"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(function (card) {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(20px)";

    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});

/* ==========================================
   BOTÕES "APRENDER MAIS"
========================================== */

const learnButtons =
    document.querySelectorAll(".learn-button");

learnButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const extraText =
            button.nextElementSibling;

        extraText.classList.toggle("show");

        if (extraText.classList.contains("show")) {

            button.textContent =
                "Mostrar menos";

        } else {

            button.textContent =
                "Aprender mais";

        }

    });

});


/* ==========================================
   LABORATÓRIO WEB
========================================== */

const codeEditor =
    document.getElementById("codeEditor");

const codeResult =
    document.getElementById("codeResult");

const runCode =
    document.getElementById("runCode");


function executeCode() {

    const code = codeEditor.value;

    codeResult.srcdoc = code;

}


runCode.addEventListener("click", executeCode);


/* Executa o exemplo inicial */

executeCode();


/* ==========================================
   COPIAR CÓDIGO
========================================== */

const copyCode =
    document.getElementById("copyCode");


copyCode.addEventListener("click", async function () {

    try {

        await navigator.clipboard.writeText(
            codeEditor.value
        );

        copyCode.textContent =
            "✓ Copiado!";

        setTimeout(function () {

            copyCode.textContent =
                "📋 Copiar";

        }, 1500);

    } catch (error) {

        copyCode.textContent =
            "Não foi possível copiar";

    }

});


/* ==========================================
   SISTEMA DE PROGRESSO
========================================== */

const progressChecks =
    document.querySelectorAll(".progress-check");

const progressFill =
    document.getElementById("progressFill");

const progressText =
    document.getElementById("progressText");


function updateProgress() {

    let completed = 0;

    progressChecks.forEach(function (check) {

        if (check.checked) {

            completed++;

        }

    });


    const percentage =
        Math.round(
            (completed / progressChecks.length) * 100
        );


    progressFill.style.width =
        percentage + "%";


    progressText.textContent =
        percentage + "% concluído";

}


progressChecks.forEach(function (check) {

    check.addEventListener(
        "change",
        updateProgress
    );

});


/* ==========================================
   DICAS
========================================== */

const tips = [

    "Praticar pequenos projetos é uma ótima maneira de entender como as tecnologias funcionam juntas.",

    "Não tente decorar tudo. Entenda para que cada tecnologia serve e pratique.",

    "HTML cria a estrutura, CSS cuida da aparência e JavaScript adiciona comportamento.",

    "Erros fazem parte do desenvolvimento. Aprender a encontrar e corrigir erros é uma habilidade importante.",

    "Comece com projetos pequenos e aumente a dificuldade aos poucos.",

    "Uma boa maneira de aprender programação é modificar um projeto existente e observar o que acontece."

];


const newTip =
    document.getElementById("newTip");

const tipText =
    document.getElementById("tipText");


newTip.addEventListener("click", function () {

    const randomIndex =
        Math.floor(Math.random() * tips.length);

    tipText.textContent =
        tips[randomIndex];

});


/* ==========================================
   TEMA CLARO / ESCURO
========================================== */

const themeButton =
    document.getElementById("themeButton");


themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-theme");


    if (
        document.body.classList.contains("light-theme")
    ) {

        themeButton.textContent = "🌙";

    } else {

        themeButton.textContent = "☀";

    }

});
