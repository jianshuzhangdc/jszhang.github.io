randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
  
  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.071429)+ "stone";
    const temperature =  Math.round((94-32) * 5 / 9)+ "centigrade";
    newStory = newStory.replace("weight","300 pounds");
    newStory = newStory.replace("temperature", "94 fahrenheit");
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
