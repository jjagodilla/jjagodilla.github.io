// Basic interactions: year, simple form handler and iframe loader for Looker Studio
document.getElementById('year').innerText = new Date().getFullYear();

function handleForm(e){
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };
  // Local demo: show a friendly alert. To actually send email, connect to a server or service (instructions below).
  alert('Thanks, ' + data.name + '! Your message is ready to send (demo).');
  form.reset();
}

function resetForm(){
  const f = document.querySelector('.contact-form');
  if(f) f.reset();
}

function openMail(e) {
    e.preventDefault();
    const form = e.target;
    const name = encodeURIComponent(form.name.value);
    const email = encodeURIComponent(form.email.value);
    const message = encodeURIComponent(form.message.value);
    const mailto = `mailto:jomar.jagodilla@gmail.com?subject=Portfolio%20Message%20from%20${name}&body=From:%20${email}%0D%0A%0D%0A${message}`;
    window.location.href = mailto;
  }

// Quick helper to set your Looker Studio URL to the iframe
// Replace the URL below with your Looker Studio embed link (example: 'https://lookerstudio.google.com/embed/reporting/XXXXX/page/1')
const LOOKER_URL = 'https://lookerstudio.google.com/embed/reporting/ce2c179c-c8ab-4f97-a480-d71a5efd7dda/page/ICJaE'; // <-- paste your Looker Studio embed link between quotes
if(LOOKER_URL){
  const frame = document.getElementById('lookerFrame');
  if(frame) frame.src = LOOKER_URL;
}


