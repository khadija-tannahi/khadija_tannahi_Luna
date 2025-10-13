/* Create and style the footer element with the current year using DOM manipulation */

const footer = document.createElement('footer');   
document.body.append(footer);
    
const today = new Date();
      //footer.innerHTML = today.getFullYear();

const paragraph = document.createElement('p');
// Set the text content of the paragraph to include the current year
paragraph.innerText = `© Khadija Tannahi ${today.getFullYear()}`;
//paragraph styles
paragraph.style.color = '#E6E2E8';
paragraph.style.margin = 'auto';
paragraph.style.padding = '0.525em 0';
paragraph.style.fontSize = '1.15rem';
paragraph.style.fontWeight = '400';
paragraph.style.fontStyle = 'normal';
paragraph.style.fontFamily = '"Lato", sans-serif';

// Append the paragraph to the footer
footer.appendChild(paragraph);


//add class to footer
footer.classList.add('footer');
//footer styles
footer.style.backgroundColor = '#0C1D2C';
footer.style.padding = '0.625em 0';
footer.style.textAlign = 'center';
footer.style.fontSize = '1.15rem';
footer.style.fontWeight = '700';
footer.style.fontStyle = 'normal';
footer.style.color = '#E6E2E8';
footer.style.fontFamily = '"Lato", sans-serif';


/* Add skills to the skills section dynamically */

const skills = [
  { src :"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg", alt: "HTML5 icon",  title: "HTML5" },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg', alt: 'CSS', title: 'CSS3' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg', alt: 'JavaScript', title: 'JavaScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React', title: 'React' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js/ Express/ MongoDB', title: 'Node.js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg', alt: 'GitHub/ Git', title: 'GitHub/ Git' },
  { src: 'images/responsive-d.png', alt: 'Responsive Design', title: 'Responsive Design' },
];

//select skills section and ul element
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

//loop through skills array and create list items with images
skills.forEach(skill => {
  const listItem = document.createElement('li');
  listItem.style.textAlign = "center";
  listItem.style.listStyle = "none";


  const img = document.createElement('img');
  img.src = skill.src;
  img.alt = skill.alt;
  // img.title = skill.alt;
  img.style.width = '80px';
  img.style.height = '80px';
  img.style.objectFit = 'contain';

  const title = document.createElement('p');
  title.innerText = skill.title;

  title.style.textAlign = "center";
  title.style.fontSize = "0.9rem";
  title.style.marginTop = "0.5em";
  title.style.color = "#0C1D2C";
  title.style.fontWeight = "500";
  title.style.fontFamily = '"Lato", sans-serif';

  listItem.appendChild(img);
  skillsList.appendChild(listItem);
  listItem.appendChild(title);
});



// lesson-12:


// Select the message form by name attribute
const messageForm = document.forms['leave_message'];


// Function to check if message list is empty and hide/show section accordingly
function toggleMessagesSection() {
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    
    if (messageList.children.length === 0) {
        messageSection.style.display = 'none';
    } else {
        messageSection.style.display = 'block';
    }
}


// Hide messages section on page load if empty
toggleMessagesSection();



// Add event listener to handle form submit
messageForm.addEventListener('submit', function(event) {
    // Prevent default form submission (page refresh)
    event.preventDefault();
    
    // Get values from form fields
    const usersName = event.target.name.value;
    const usersEmail = event.target.email.value;
    const usersMessage = event.target.message.value;
    
    // Log values to console
    console.log('Name:', usersName);
    console.log('Email:', usersEmail);
    console.log('Message:', usersMessage);
    
    // Select the messages section by id
    const messageSection = document.getElementById('messages');
    
    // Query for the ul element within the messages section
    const messageList = messageSection.querySelector('ul');
    
    // Create a new list item element
    const newMessage = document.createElement('li');
    
    // Set the inner HTML with user information
    newMessage.innerHTML = `
        <a href="mailto:${usersEmail}">${usersName}</a>
        <span class="message-text"> - ${usersMessage}</span>
    `;

    // Create edit button
    const editButton = document.createElement('button');
    editButton.innerText = 'edit';
    editButton.type = 'button';
    editButton.className = 'edit-btn';

    // Add event listener to edit button
    editButton.addEventListener('click', function() {
      console.log('Edit button clicked!');


        // Find the message text span
        const messageTextSpan = newMessage.querySelector('.message-text');
        console.log('Message span found:', messageTextSpan);
        
        // Get current message (remove the " - " prefix)
        const currentMessage = messageTextSpan.textContent.replace(' - ', '');
       

         // Create an input field for inline editing
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.value = currentMessage;
        inputField.className = 'edit-input';
        
        // Create Save button
        const saveButton = document.createElement('button');
        saveButton.innerText = 'save';
        saveButton.type = 'button';
        saveButton.className = 'save-btn';
        
        // Create Cancel button
        const cancelButton = document.createElement('button');
        cancelButton.innerText = 'cancel';
        cancelButton.type = 'button';
        cancelButton.className = 'cancel-btn';
        
        // Replace the message text with input field
        messageTextSpan.replaceWith(inputField);
        
        // Hide edit button and remove button temporarily
        editButton.style.display = 'none';
        removeButton.style.display = 'none';
        
        // Add save and cancel buttons
        newMessage.appendChild(saveButton);
        newMessage.appendChild(cancelButton);
        
        // Focus on the input field
        inputField.focus();
        inputField.select();
        
        // Save function
        function saveEdit() {
            const newText = inputField.value.trim();
            
            if (newText !== '') {
                // Create new span with updated message
                const newSpan = document.createElement('span');
                newSpan.className = 'message-text';
                newSpan.textContent = ' - ' + newText;
                
                // Replace input with updated span
                inputField.replaceWith(newSpan);
                
                // Remove save and cancel buttons
                saveButton.remove();
                cancelButton.remove();
                
                // Show edit and remove buttons again
                editButton.style.display = 'inline-block';
                removeButton.style.display = 'inline-block';
            }
        }
        
        // Cancel function
        function cancelEdit() {
            // Create span with original message
            const originalSpan = document.createElement('span');
            originalSpan.className = 'message-text';
            originalSpan.textContent = ' - ' + currentMessage;
            
            // Replace input with original span
            inputField.replaceWith(originalSpan);
            
            // Remove save and cancel buttons
            saveButton.remove();
            cancelButton.remove();
            
            // Show edit and remove buttons again
            editButton.style.display = 'inline-block';
            removeButton.style.display = 'inline-block';
        }
        
        // Add event listeners for save and cancel
        saveButton.addEventListener('click', saveEdit);
        cancelButton.addEventListener('click', cancelEdit);
        
        // Save on Enter key
        inputField.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                saveEdit();
            } else if (e.key === 'Escape') {
                cancelEdit();
            }
        });
   
    });


    
    // Create remove button
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.className = 'remove-btn';
    
    // Add event listener to remove button
    removeButton.addEventListener('click', function() {
        // Find the button's parent element (the li)
        const entry = removeButton.parentNode;
        // Remove the entry from the DOM
        entry.remove();

        // Check if we need to hide the messages section
        toggleMessagesSection();
    });

    // Append edit button to the new message
    newMessage.appendChild(editButton);
    
    // Append remove button to the new message
    newMessage.appendChild(removeButton);
    
    // Append new message to the message list
    messageList.appendChild(newMessage);


    // Show the messages section since we now have messages
    toggleMessagesSection();
    
    // Clear the form fields
    messageForm.reset();
});


 // lesson-13

//  // Fetch GitHub repositories
// fetch('https://api.github.com/users/khadija-tannahi/repos')
//   .then(response => response.json())
//   .then(repositories => {
//     console.log(repositories);
    
//     // Select the projects section and list
//     const projectSection = document.getElementById('projects');
//     const projectList = projectSection.querySelector('ul');
    
//     // Loop through repositories and create list items
//     for (let i = 0; i < repositories.length; i++) {
//       const project = document.createElement('li');
//       project.innerText = repositories[i].name;
//       projectList.appendChild(project);
//     }
//   })
//   .catch(error => {
//     console.error('Error fetching repositories:', error);
//     // Display error message to user
//     const projectSection = document.getElementById('projects');
//     projectSection.innerHTML += '<p>Unable to load projects at this time.</p>';
//   });


// update lesson 13:


// Fetch GitHub repositories
        fetch('https://api.github.com/users/khadija-tannahi/repos')
            .then(response => response.json())
            .then(repositories => {
                console.log(repositories);
                
                // Select the projects track
                const projectTrack = document.querySelector('.projects-track');
                
                // Filter out forked repositories and sort by updated date
                const originalRepos = repositories
                    .filter(repo => !repo.fork)
                    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
                
                // Loop through repositories and create cards
                originalRepos.forEach(repo => {
                    const projectCard = document.createElement('a');
                    projectCard.href = repo.html_url;
                    projectCard.target = '_blank';
                    projectCard.rel = 'noopener noreferrer';
                    projectCard.className = 'project-card';

                    // Get description or provide default
                    const description = repo.description || 'No description available';

                    // Check for custom images
                    const customImages = {
                        'khadija_tannahi_Luna': 'my_picture.jpg',
                        'form-validation': 'form.jpg',
                        'grade-converter': 'grade.jpg',
                        'open-api-weather':'Weather.png',
                        'new-england-js':'newEngland_js.jpeg',
                        'new-england-facts-dom':'new-england-states.jpeg',
                        '':''
                    };

                    let imageContent;
                    if (customImages[repo.name]) {
                        imageContent = `<img src="images/${customImages[repo.name]}" alt="${repo.name} image">`;
                    } else {
                        imageContent = `<span class="project-icon">📦</span>`;
                    }

                    projectCard.innerHTML = `
                        <div class="project-image">
                            ${imageContent}
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">${repo.name}</h3>
                            <p class="project-description">${description}</p>
                            <span class="project-link">View on GitHub →</span>
                        </div>
                    `;

                    projectTrack.appendChild(projectCard);
                });
                
                // Slider functionality for desktop only
                const projectTrackElement = document.querySelector('.projects-track');
                const prevBtn = document.querySelector('.prev-btn');
                const nextBtn = document.querySelector('.next-btn');
                const sliderControls = document.querySelector('.slider-controls');

                let currentIndex = 0;

                function updateSliderPosition() {
                    const cardWidth = 280 + 20; // card width + gap
                    projectTrackElement.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
                    prevBtn.disabled = currentIndex === 0;
                    nextBtn.disabled = currentIndex >= originalRepos.length - 3;
                }

                function showSliderControls() {
                    if (window.innerWidth >= 1025 && originalRepos.length > 3) {
                        projectTrackElement.classList.add('slider-mode');
                        projectTrackElement.parentElement.classList.add('slider-mode');
                        sliderControls.classList.add('active');
                    } else {
                        projectTrackElement.classList.remove('slider-mode');
                        projectTrackElement.parentElement.classList.remove('slider-mode');
                        sliderControls.classList.remove('active');
                    }
                }

                prevBtn.addEventListener('click', () => {
                    if (currentIndex > 0) {
                        currentIndex--;
                        updateSliderPosition();
                    }
                });

                nextBtn.addEventListener('click', () => {
                    if (currentIndex < originalRepos.length - 3) {
                        currentIndex++;
                        updateSliderPosition();
                    }
                });

                // Handle window resize
                window.addEventListener('resize', showSliderControls);

                // Initial setup
                showSliderControls();
                updateSliderPosition();
            })
            .catch(error => {
                console.error('Error fetching repositories:', error);
                const projectSection = document.getElementById('projects');
                const errorMsg = document.createElement('p');
                errorMsg.textContent = 'Unable to load projects at this time.';
                errorMsg.style.color = '#B78F90';
                projectSection.appendChild(errorMsg);
            });
// end of lesson 13
  


// Dark Mode Toggle Implementation

// Create CSS custom properties for colors
const lightModeColors = {
  '--bg-primary': '#E6E2E8',
  '--bg-secondary': '#f8f9fa',
  '--text-primary': '#0C1D2C',
  '--text-secondary': '#174572',
  '--accent-dark': '#981735',
  '--accent-light': '#B78F90',
  '--card-bg': '#0C1D2C',
  '--card-text': '#E6E2E8'
};

const darkModeColors = {
  '--bg-primary': '#0f1419',
  '--bg-secondary': '#1a1f2e',
  '--text-primary': '#e8e8e8',
  '--text-secondary': '#a8c5dd',
  '--accent-dark': '#6b9fb1',
  '--accent-light': '#8fb3c8',
  '--card-bg': '#1a1f2e',
  '--card-text': '#e8e8e8'
};

// Initialize dark mode from localStorage
function initDarkMode() {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
    applyColors(darkModeColors);
  } else {
    applyColors(lightModeColors);
  }
  updateToggleButton();
}

// Apply colors using CSS custom properties
function applyColors(colorScheme) {
  Object.entries(colorScheme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
}

// Toggle dark mode
function toggleDarkMode() {
  const isDarkMode = document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
  
  if (isDarkMode) {
    applyColors(darkModeColors);
  } else {
    applyColors(lightModeColors);
  }
  
  updateToggleButton();
}

// Update toggle button appearance
function updateToggleButton() {
  const toggle = document.getElementById('dark-mode-toggle');
  const isDarkMode = document.body.classList.contains('dark-mode');
  toggle.textContent = isDarkMode ? '☀️' : '🌙';
  toggle.setAttribute('aria-pressed', isDarkMode);
}

// Create and insert toggle button into header
function createToggleButton() {
  const header = document.querySelector('header');
  const toggle = document.createElement('button');
  toggle.id = 'dark-mode-toggle';
  toggle.className = 'dark-mode-toggle';
  toggle.setAttribute('aria-label', 'Toggle dark mode');
  toggle.setAttribute('aria-pressed', 'false');
  toggle.innerHTML = '🌙';
  
  toggle.addEventListener('click', toggleDarkMode);
  header.appendChild(toggle);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  createToggleButton();
  initDarkMode();
});



// End of Dark Mode Toggle Implementation