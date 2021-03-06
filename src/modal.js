/*----------------------
Imports
----------------------*/

import './polyfills';

/*----------------------
Modal
----------------------*/

export default function modal(customSettings = {}) {

    /*----------------------
    Settings
    ----------------------*/

    const defaultSettings = {
        modalElement: '.modal',
        modalTriggerElement: '.modal-trigger',
        modalCloseElement: '.modal-close',
        modalContentElement: '.modal__content',
        modalContents: '.modal-content-to-show',
        modalOpenClass: 'modal--is-open'
    };

    const settings = {...defaultSettings, ...customSettings};

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

        const modalContentContainer = modal.querySelector(settings.modalContentElement);

        // Set the modal content if there was content passed to this function

        if(modalContent && modalContentContainer) {
            modalContentContainer.innerHTML = modalContent;
        }

        modal.classList.add(settings.modalOpenClass);

        // Dispatch Open Event

        const openEvent = new CustomEvent('open');

        modal.dispatchEvent(openEvent);

    }

    /**
    * Close Modal
    *
    * @param   string  modalId       -  ID selector of the modal we want to open.
    */

    function closeModal(modalId) {

        // Elements

        const modal = document.querySelector('#' + modalId);

        // Remove the open class from the modal.

        modal.classList.remove(settings.modalOpenClass);

        // Dispatch Close Event

        const closeEvent = new CustomEvent('close');

        modal.dispatchEvent(closeEvent);

    }

    /*----------------------
    Event Listeners
    ----------------------*/

    // Modal Triggers

    document.addEventListener('click', function (e) {

        const trigger = e.target.closest(settings.modalTriggerElement);

        if (trigger) {

            e.preventDefault();

            // Grab the modal ID.

            const modalId = trigger.dataset.modalId;

            // Grab the content element.

            const modalContentElement = trigger.querySelector(settings.modalContents);

            // If there is a content element within the modal trigger then that will be the content set in the modal.

            const modalContent = modalContentElement ? modalContentElement.innerHTML : '';

            // Open it up.

            openModal(modalId, modalContent);

        }

    });

    // Modal Close

    document.addEventListener('click', function (e) {

        const modalClose = e.target.closest(settings.modalCloseElement);

        if (modalClose) {

            e.preventDefault();

            const modalId = modalClose.dataset.modalId;

            // If an id data attribute exists on this close element then close the modal with that id property.

            if(modalId) {

                closeModal(modalId);

            }

            // Else no id data attribute was provided then find the closest modal. The close symbol likely exists within the modal element.

            else {

                // Find the modal associated with this close action.

                const modal = modalClose.closest(settings.modalElement);

                // Close it.

                closeModal(modal.id);

            }

        }

    });

}