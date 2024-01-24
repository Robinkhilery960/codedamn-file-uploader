
const submit = document.querySelector('input[type="submit"]');  
// Add an event listener to the submit button for the click event
submit.addEventListener("click", function (event) {
  // Prevent the default action of the event (in this case, form submission)
  event.preventDefault(); 
  // Get the file input element from the document
  const inputElement = document.querySelector('input[type="file"]');
  console.log(inputElement.files[0]);
  // Create a new FormData instance
  const formData = new FormData();

  // Append the file to the FormData instance
  formData.append("file", inputElement.files[0]);

  // Send the FormData instance to the server using Fetch
  fetch(`${window.location.href}upload`, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.file);
      // Create a new img element
      var childDiv = document.createElement("div");

      // Set the source of the image
      childDiv.innerText = `Your file is uploaded at ${data.file.path}`;
      childDiv.id="child"
      console.log(childDiv);
      // Add the new image to the div
      document.body.appendChild(childDiv);
    })
    .catch((error) => console.error(error));
});