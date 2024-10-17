const newFormHandler = async (event) => {
  event.preventDefault();

  const driver = document.querySelector('#project-name').value.trim();
  const date = document.querySelector('#project-date').value.trim();
  const description = document.querySelector('#project-desc').value.trim();
  const damage = document.querySelector('#project-damage').value.trim();
  
  if (driver && date && description && damage) {
    const response = await fetch(`/api/jots/`, {
      method: 'POST',
      body: JSON.stringify({ driver, date, description, damage }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);
//   console.log('jot shouls appear');
