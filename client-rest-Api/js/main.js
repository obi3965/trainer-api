
   
    let allTrainer = "http://localhost:4000/api/v1/trainers"
   fetch(allTrainer)
   .then(response => {
      return response.json()
   })
   .then(results =>{
      console.log(results)

      let newData = results.slice(0,4)
      let output = '';
      newData.forEach(elements => {
          console.log("elements", elements.trainerName)
          console.log("elements", elements.asset.url)
          output += `
             
              <div class="col-md-3 col-sm-6">
                  <div class="box16">
                      <img src="${elements.asset.url}">
                      <div class="box-content">
                          <h3 class="title">${elements.trainerName}</h3>
                          
                          <ul class="social">
                              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                              <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                              <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div>
              
          
          `;
      });
      document.getElementById('output-1').innerHTML = output;
      
   })
   .catch(error => console.log('error', error));





   document.cookie = "createToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6In;max-age=" + 60*60;
	document.cookie = "floof=1234;max-age=" + 60*60;
	let cookies = {};
	document.cookie.split("; ").forEach(cookie => {
		cookies[cookie.split("=")[0]] = cookie.split("=")[1];
	});
	console.log(cookies);
	fetch("http://localhost:4000/auth/token", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"Authorization": `Bearer ${cookies.createToken}`
		},
		body: "title=Feta&content=Feta er godt, meget feta er meget godt."
	});