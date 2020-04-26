(function() {

    var body = document.querySelector("body");
    var titre = document.createElement("h1");
        titre.style.textAlign = "center";
        titre.textContent = "Puzzle";
        titre.style.textDecoration = "underline rgba(81, 2, 2, 1)";

    var regle = document.createElement("p");
        regle.innerHTML = "<b>Règle</b> : glisser-déposez en cliquant avec votre <br> souris les pièces pour reconstituer le puzzle.";
        regle.style.fontSize = "20px";
        regle.style.marginLeft = "5%";

        body.prepend(titre);
        body.appendChild(regle);


    var storage = {};

    function init() {

        var elements = document.querySelectorAll('.drag'),
            elementsLength = elements.length;

        for (var i = 0; i < elementsLength; i++) {

            elements[i].addEventListener('mousedown', function (e) {                         // Initialise le drag & drop

                var s = storage;
                    s.target = e.target;
                    s.offsetX = e.clientX - s.target.offsetLeft;
                    s.offsetY = e.clientY - s.target.offsetTop;
            });

            elements[i].addEventListener('mouseup', function() {                            // Termine le drag & drop

                    storage = {};
            });
        }

            document.addEventListener('mousemove', function(e) {                            // Permet le suivi du drag & drop

                var target = storage.target;

                if (target) {
                    target.style.top = e.clientY - storage.offsetY + 'px';
                    target.style.left = e.clientX - storage.offsetX + 'px';
            }
        });
    }

    init();
})();