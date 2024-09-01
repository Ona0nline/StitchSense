function showDetails() {
    const itemSelect = document.getElementById('itemSelect');
    const itemDetails = document.getElementById('itemDetails');
    const selectedItem = itemSelect.value;

    let detailsHtml = '';

    switch (selectedItem) {
        case 'beanie':
            detailsHtml = `<h2>Beanie</h2>
                           <p>Our beanies are custom-made in a variety of colors and styles. 
                           Upload your preferred color and style to match your unique taste.</p>
                           
                           <h2>Upload Beanie inspo</h2>
                           <input id="fileInput" type="file">
                           <button onclick="filePreview()">File Preview</button>
                           
                           <div id="filePreview">
                           
                           </div>`;
            break;
        case 'tapestry':
            detailsHtml = `<h2>Tapestry</h2>
                           <p>Explore our custom tapestries, designed to add a personal touch to your space. Each tapestry is uniquely crafted based on your specifications.
                           Upload an image of your inspiration</p>
                           <h2>Upload Tapestry inspo</h2>
                           <input id="fileInput" type="file" onclick="filePreview()">
                           <button onclick="filePreview()">File Preview</button>
                           <div id="filePreview">
                           
                           </div>`;
            break;
        case 'dress':
            detailsHtml = `<h2>Dress</h2>
                           <p>Our custom dresses are tailored to fit your style. 
                           Upload your design preferences and let us create a one-of-a-kind dress just 
                           for you.</p>
                           <h2>Upload Dress Inspo inspo</h2>
                           <input id="fileInput" type="file" onclick="filePreview()">
                           <button onclick="filePreview()">File Preview</button>
                           <div id="filePreview">
                           
                           </div>`;
            break;
        default:
            detailsHtml = '';
    }

    itemDetails.innerHTML = detailsHtml;
}
    function filePreview(){

      const fileInputElem = document.querySelector("#fileInput")
      const filePreviewElem = document.querySelector("#filePreview")

      if (fileInputElem.files.length === "0"){
        filePreviewElem.textContent = "No files selected"
      }

      const file = fileInputElem.files[0]
      const reader = new FileReader()

      reader.onload = function(e) {
        filePreviewElem.innerHTML = `<p>File Name: ${file.name}</p>
                                 <p>File Size: ${file.size} bytes</p>
                                 <img src="${e.target.result}" alt="File Preview" width="300"/>`;
    };

    reader.readAsDataURL(file);
    }

    const levelSelectElem = document.querySelector("#levelSelect")
    const priceDisplay = document.querySelector("#price");
    const levelSelectedElem = levelSelectElem.value;

    