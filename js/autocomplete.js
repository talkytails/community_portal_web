var askQTag = document.querySelector("#askQTag");
var tagSuggestBox = document.querySelector("#tagSuggestBox");
var tagsPreview = document.querySelector("#tagsPreview");
var askQForm = document.querySelector("#askQForm");

const tagList = [
  "dogs", "dogfood", "dogcereal", "behaviour", "catfood",
  "dogtreats", "dogtoys", "dogtraining", "doghealth", "dogcare",
  "puppies", "puppyfood", "puppytraining", "puppycare",
  "cats", "cattoys", "catcereal", "cathealth", "catcare",
  "petfood", "petcare", "pettoys", "pethealth", "pettraining",
  "animalbehaviour", "animaltraining", "animalhealth"
];

askQTag.addEventListener("input", function () {
  tagSuggestBox.innerHTML = ""; // Clear previous suggestions

  if (askQTag.value === "") {
    tagSuggestBox.style.display = "none";
  }
  else {
    tagSuggestBox.style.display = "flex";
    const query = askQTag.value.toLowerCase();
    for (let i = 0; i < tagList.length; i++) {
      if (tagList[i].startsWith(query)) {
        let tagElement = document.createElement("p");
        tagElement.classList.add("tagSuggestion_name");
        tagElement.id = tagList[i];
        const boldPart = `<strong>${tagList[i].substring(0, query.length)}</strong>`;
        const remainingPart = tagList[i].substring(query.length);
        tagElement.innerHTML = boldPart + remainingPart;

        tagElement.addEventListener("click", function () {
          tagSuggestBox.style.display = "none";
          askQTag.value = "";
          let inlineTagElement = document.createElement("span");
          inlineTagElement.classList.add("inlineTag");
          inlineTagElement.id = "inlTag_" + tagElement.id;
          inlineTagElement.innerHTML = tagElement.id;

          inlineTagElement.addEventListener("click", function (){
            tagsPreview.removeChild(inlineTagElement);
            askQForm.removeChild(document.querySelector("#"+inlineTagElement.id.replace("inlTag_", "tagInp_")));

            //Managing the display of the tagPreview Box.
            if ((document.getElementsByClassName("inlineTag")).length === 0) {tagsPreview.style.display = "none";}
            else {tagsPreview.style.display = "flex";}
          });

          tagsPreview.appendChild(inlineTagElement);

          let inlineTagInput = document.createElement("input");
          inlineTagInput.style.display = "none"
          inlineTagInput.value = tagElement.id;
          inlineTagInput.name = "tagInp_" + tagElement.id;
          inlineTagInput.id = "tagInp_" + tagElement.id;
          askQForm.appendChild(inlineTagInput);

          //Managing the display of the tagPreview Box.
          if ((document.getElementsByClassName("inlineTag")).length === 0) {tagsPreview.style.display = "none";}
          else {tagsPreview.style.display = "flex";}
        });

        tagSuggestBox.appendChild(tagElement);
      }
    }
  }
});