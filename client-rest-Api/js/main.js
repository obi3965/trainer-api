
   
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





   document.cookie = "Token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6InVzZXIxIiwicGFzc3dvcmQiOiIkMmEkMTUkNUNCd3lhQ21xblVLODUxWFlYaThLLmY4RUFkanFraUQuN2h4RDkzSTRIOGdWR2NBazdhLi4iLCJ1c2VyRmlyc3ROYW1lIjpudWxsLCJ1c2VyTGFzdE5hbWUiOm51bGwsImNyZWF0ZWRBdCI6IjIwMjAtMDMtMDhUMTk6MDY6NDIuMzgyWiIsInVwZGF0ZWRBdCI6IjIwMjAtMDMtMDhUMTk6MDY6NDIuMzgyWiJ9LCJpYXQiOjE1ODM2OTQ5NTEsImV4cCI6MTU4MzY5ODU1MX0.bP1g83FK4SIy_oZcMaLiBZ_116MnBufcXSD0LtE5dP8;max-age=" + 60*60;
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
			"Authorization": `Bearer ${cookies.Token}`
		},
		
    }).then(res =>{
        return res.json
    }).then(data =>{
        console.log(data)
    })
    


    //TO GET ALL CLASSES
   let allClasses = "http://localhost:4000/api/v1/classes";
   fetch(allClasses)
   .then(res => {
    return res.json()
 })
 .then(data =>{
    let classData = data.slice(0,5)
     let classOutput = '';
     classData.forEach(classList =>{
         console.log(classList.className)
         console.log(classList.classDescription)
         console.log(classList.classDay)
         console.log(classList.classTime)
         console.log(classList.maxParticipants)
     })
     classOutput += ` 
     `;
    console.log(data)
     })



    //  fetch("http://localhost:4000/api/v1/users", {
	// 	method: "POST",
	// 	headers: {
	// 		"Content-Type": 'Content-Type: application/x-www-form-urlencoded',
			
	// 	},
		
    // }).then(res =>{
    //     return res.json
    // }).then(userdata =>{
    //     console.log(userdata)
    // })
     
