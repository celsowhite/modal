/*----------------------
Imports
----------------------*/

import './polyfills';

/*----------------------
Modal
----------------------*/

export default function modal() {
    
    /*----------------------
    Functions
    ----------------------*/

    /**
    * Open Modal
    *
    * @param   string  modalId       -  ID selector of the modal we want to open.
    * @param   string  modalContent  -  Content to inject into the modal.
    */

    function openModal(modalId, modalContent) {

        const modal = document.querySelector('#' + modalId);

        const modalContentContainer = modal.querySelector('.modal__content');

        // Set The Modal Content

        modalContentContainer.innerHTML = modalContent;

        modal.classList.add('modal--is-open');

        // Dispatch Open Event

        const openEvent = new CustomEvent('open');

        modal.dispatchEvent(openEvent);

    }

    /**
    * Close Modal
    *
    * @param   string  modal  -  Modal element to hide.
    */

    function closeModal(modal) {

        const modalContentContainer = modal.querySelector('.modal__content');

        modal.classList.remove('modal--is-open');

        window.setTimeout(function () {
            modalContentContainer.innerHTML = '';
        }, 500);

        // Dispatch Close Event

        const closeEvent = new CustomEvent('close');

        modal.dispatchEvent(closeEvent);

    }

    /*----------------------
    Event Listeners
    ----------------------*/

    // Modal Triggers

    document.addEventListener('click', function (e) {
        
        const trigger = e.target.closest('.modal-trigger');

        if (trigger) {

            e.preventDefault();

            // Grab the modal info (id and the content we want to show).

            const modalId = trigger.dataset.modalId;

            const modalContent = trigger.querySelector('.modal-content-to-show').innerHTML;

            // Open it up.

            openModal(modalId, modalContent);

        }

    });

    // Modal Close

    document.addEventListener('click', function (e) {

        const modalClose = e.target.closest('.modal-close');

        if (modalClose) {

            e.preventDefault();

            // Find the modal associated with this close action.

            const modal = modalClose.closest('.modal');

            // Close it.

            closeModal(modal);

        }

    });

}