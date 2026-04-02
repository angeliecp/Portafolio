document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Eliminar clase active de todos los botones
            tabBtns.forEach(b => b.classList.remove('active'));
            // Remover clase active de todos los contenidos
            tabContents.forEach(c => c.classList.remove('active'));

            // Añadir clase active al botón clicado
            btn.classList.add('active');

            // Encontrar el contenido que le corresponde y ponerle active
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });
});
