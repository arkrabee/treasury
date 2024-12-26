
   
   // Modal Functions
        function showModal(title, message) {
            const modal = document.getElementById('modal');
            const modalTitle = document.getElementById('modal-title');
            const modalMessage = document.getElementById('modal-message');

            modalTitle.textContent = title;
            modalMessage.textContent = message;

            modal.classList.add('show');
            modal.style.animation = 'popIn 0.4s forwards';
        }

        function closeModal() {
            const modal = document.getElementById('modal');
            // const darkOverlay = document.getElementById('dark-overlay');

            modal.style.animation = 'popOut 0.4s forwards';
            setTimeout(() => {
                modal.classList.remove('show');
                modal.style.animation = '';
            }, 400);
            
        }