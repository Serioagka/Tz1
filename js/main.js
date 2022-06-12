
document.addEventListener("DOMContentLoaded", () => {

  const url = ' https://randomuser.me/api/ ';
  
  let fullname = document.getElementById('fullname');
  
  fetch(url)
        .then(handleErrors)
        .then(parseJSON)
        .then(updateProfile)
        .catch(printError)
  
  function parseJSON(res) {
      return res.json();
    }
    
    function handleErrors (res){
    if(!res.ok){
      throw error(res.status);
    }
    console.log(res);
    return res;
  }
  
    function updateProfile(profile) {
      fullname.innerHTML = profile.results[0].name.title + " " + profile.results[0].name.first + " " + profile.results[0].name.last;
      return 1;
    }
  
    function printError(error) {
      console.log(error);
    }
  
  }
  )
  