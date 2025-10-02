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




  