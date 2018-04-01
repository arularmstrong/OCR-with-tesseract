
function processimg(name) {
	
    Tesseract.recognize(name)
         .then(function(result) {
            document.getElementById("display")
                    .innerText = result.text;
					var content=result.text;
					callserver(content,name);

		 });
}

function callserver(content,name)
{

	   name = name.substring(0, name.indexOf('.'));
        $.post("http://localhost:3000/save", {
         contents:content,
		 fname:name
        });
}