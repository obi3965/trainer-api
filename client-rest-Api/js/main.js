
   
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