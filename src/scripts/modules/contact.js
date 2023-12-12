const buildContact = () => {
  const contactPage = document.createElement('div');
  const contactContainer = document.createElement('div');
  const contactHeader = document.createElement('h1');
  const contactForm = document.createElement('form');

  const contactFormNameGroup = document.createElement('div');
  const contactFormNameInput = document.createElement('input');
  const contactFormNameLabel = document.createElement('label');

  const contactFormEmailGroup = document.createElement('div');
  const contactFormEmailInput = document.createElement('input');
  const contactFormEmailLabel = document.createElement('label');

  const contactFormMessageGroup = document.createElement('div');
  const contactFormMessageInput = document.createElement('textarea');
  const contactFormMessageLabel = document.createElement('label');

  const contactFormSubmit = document.createElement('button');

  contactPage.setAttribute('id', 'page');
  contactPage.classList.add('contact', 'page');
  contactContainer.classList.add('contact__container');
  contactHeader.classList.add('contact__header');
  contactForm.classList.add('contact__form');

  contactFormNameGroup.classList.add('contact__form-group');
  contactFormNameInput.classList.add('contact__form-input');
  contactFormNameLabel.classList.add('contact__form-label');

  contactFormEmailGroup.classList.add('contact__form-group');
  contactFormEmailInput.classList.add('contact__form-input');
  contactFormEmailLabel.classList.add('contact__form-label');

  contactFormMessageGroup.classList.add('contact__form-group');
  contactFormMessageInput.classList.add('contact__form-input');
  contactFormMessageLabel.classList.add('contact__form-label');

  contactFormSubmit.classList.add('contact__form-submit');

  contactHeader.textContent = 'Contact';

  contactFormNameInput.setAttribute('type', 'text');
  contactFormNameInput.setAttribute('name', 'name');
  contactFormNameInput.setAttribute('id', 'name');
  contactFormNameInput.setAttribute('required', '');
  contactFormNameLabel.setAttribute('for', 'name');
  contactFormNameLabel.textContent = 'Name';

  contactFormEmailInput.setAttribute('type', 'email');
  contactFormEmailInput.setAttribute('name', 'email');
  contactFormEmailInput.setAttribute('id', 'email');
  contactFormEmailInput.setAttribute('required', '');
  contactFormEmailLabel.setAttribute('for', 'email');
  contactFormEmailLabel.textContent = 'Email';

  contactFormMessageInput.setAttribute('name', 'message');
  contactFormMessageInput.setAttribute('id', 'message');
  contactFormMessageInput.setAttribute('required', '');
  contactFormMessageLabel.textContent = 'Message';

  contactFormSubmit.setAttribute('type', 'submit');
  contactFormSubmit.textContent = 'Send';

  contactFormNameGroup.appendChild(contactFormNameLabel);
  contactFormNameGroup.appendChild(contactFormNameInput);

  contactFormEmailGroup.appendChild(contactFormEmailLabel);
  contactFormEmailGroup.appendChild(contactFormEmailInput);

  contactFormMessageGroup.appendChild(contactFormMessageLabel);
  contactFormMessageGroup.appendChild(contactFormMessageInput);

  contactForm.appendChild(contactFormNameGroup);
  contactForm.appendChild(contactFormEmailGroup);
  contactForm.appendChild(contactFormMessageGroup);
  contactForm.appendChild(contactFormSubmit);

  contactContainer.appendChild(contactHeader);
  contactContainer.appendChild(contactForm);

  contactPage.appendChild(contactContainer);

  return contactPage;
}

export default buildContact;