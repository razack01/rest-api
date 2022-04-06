const countriesElem=document.querySelector(".countries")
async function getcountry(){
	const url=await fetch("https://restcountries.com/v3.1/region/europe")
	const res=await url.json()
	console.log(res)
	res.forEach(element=>{
	 	showCountry(element)

	 	})
}

getcountry();
 function showCountry(data){
 	const country=document.createElement("div")
 	country.classList.add("country")
 	country.innerHTML= `<div class="country-image">
 	<div class="outer"><h5 class="name">${data.name.official}</h5></div>
        <img src="${data.flags.png}" alt="">
      </div>
      <div class="country-info">
        <p><strong>Population:</strong>${data.population}</p>
         <p><strong>Region:</strong>${data.region}</p>
        
         <p><strong>Capital:</strong>${data.capital}</p>
      </div>`
      countriesElem.appendChild(country)

 }

