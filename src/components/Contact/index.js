// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Contact = ({
  emailContact,
  nameContact,
  objectDemand,
  contentDemand,
  updateField,
  submitContactRequest,
  emailError,
  nameError,
  objectError,
  contentError,
  validationRequest,
  submitValidation,
  requestSent,
  closeRequest,
  requestModification,
  internalRequestError,
}) => (
  <div id="contact">
    <h1>Demande de contact</h1>
    <p className="neededField">Tous les champs sont obligatoires</p>
    <form>
      <div className="contactField">
        <label htmlFor="nameContact" className={nameError ? '' : 'errorSbumit'}>Votre nom :</label>
        <p className={nameError ? 'hideErrorMessage' : 'showErrorMessage'}>Le format du nom ne convient pas et ne peut être vide</p>
        <input
          type="text"
          name="nameContact"
          id="nameContact"
          className="nameContact"
          value={nameContact}
          onChange={(evt) => updateField('nameContact', evt.target.value)}
        />
      </div>
      <div className="contactField">
        <label htmlFor="emailContact" className={emailError ? '' : 'errorSbumit'}>Email de contact :</label>
        <p className={emailError ? 'hideErrorMessage' : 'showErrorMessage'}>Le format de l'adresse email ne convient pas et ne peut être vide</p>
        <p className="exampleFormat">Format : example@example.com</p>
        <input
          type="email"
          required
          name="emailContact"
          id="emailContact"
          className="emailContact"
          value={emailContact}
          onChange={(evt) => updateField('emailContact', evt.target.value)}
        />
      </div>
      <div className="contactField">
        <label htmlFor="objectDemand" className={objectError ? '' : 'errorSbumit'}>Objet de la demande :</label>
        <p className={objectError ? 'hideErrorMessage' : 'showErrorMessage'}>L'objet de la demande ne peut être vide</p>
        <input
          type="text"
          required
          name="objectDemand"
          id="objectDemand"
          className="objectDemand"
          value={objectDemand}
          onChange={(evt) => updateField('objectDemand', evt.target.value)}
        />
      </div>
      <div className="contactField">
        <label htmlFor="contentDemand" className={contentError ? '' : 'errorSbumit'}>Contenu de la demande :</label>
        <p className={contentError ? 'hideErrorMessage' : 'showErrorMessage'}>Le contenu de la demande ne peut être vide</p>
        <textarea
          name="contentDemand"
          required
          id="contentDemand"
          className="contentDemand"
          rows="5"
          value={contentDemand}
          onChange={(evt) => updateField('contentDemand', evt.target.value)}
        />
      </div>
      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();
          submitContactRequest();
        }}
      >
        Envoyer la demande
      </button>
    </form>
    <div className={validationRequest ? 'validationOverlay' : 'hideValidationMessageOverlay validationOverlay'}>
      <div className={!requestSent && !internalRequestError ? 'messageOverlay' : 'messageOverlay firstMessage'}>
        <h2>Vérification avant envoi</h2>
        <p><strong>Votre nom :</strong> {nameContact}</p>
        <p><strong>Votre email :</strong> {emailContact}</p>
        <p><strong>L'objet de votre demande :</strong> {objectDemand}</p>
        <p><strong>Le contenu de votre demande :</strong> {contentDemand}</p>
        <button
          className="validationRequestButton"
          type="submit"
          onClick={(evt) => {
            evt.preventDefault();
            submitValidation();
          }}
        >
          Valider ma demande
        </button>
        <button className="modificationRequestButton" type="button" onClick={requestModification}>Modifier ma demande</button>
      </div>
      <div className={requestSent && !internalRequestError ? 'messageOverlay' : 'messageOverlay secondMessage'}>
        <h2>Votre demande de contact a bien été envoyée !</h2>
        <button className="validationRequestButton" type="button" onClick={closeRequest}>Fermer cette fenêtre</button>
      </div>
      <div className={!requestSent && internalRequestError ? 'messageOverlay' : 'messageOverlay thirdMessage'}>
        <h2>Une erreur est survenue. Nous sommes désolés pour la gêne occasionnée, veuillez rééssayer plus tard..!</h2>
        <button className="modificationRequestButton" type="button" onClick={closeRequest}>Fermer cette fenêtre</button>
      </div>
    </div>
  </div>
);

Contact.propTypes = {
  emailContact: PropTypes.string.isRequired,
  nameContact: PropTypes.string.isRequired,
  objectDemand: PropTypes.string.isRequired,
  contentDemand: PropTypes.string.isRequired,
  updateField: PropTypes.func.isRequired,
  submitContactRequest: PropTypes.func.isRequired,
  emailError: PropTypes.bool.isRequired,
  nameError: PropTypes.bool.isRequired,
  objectError: PropTypes.bool.isRequired,
  contentError: PropTypes.bool.isRequired,
  validationRequest: PropTypes.bool.isRequired,
  submitValidation: PropTypes.func.isRequired,
  requestSent: PropTypes.bool.isRequired,
  closeRequest: PropTypes.func.isRequired,
  requestModification: PropTypes.func.isRequired,
  internalRequestError: PropTypes.bool.isRequired,
};

// == Export
export default Contact;
