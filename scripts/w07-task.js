const res = await fetch("https://libretranslate.com/translate", {
	method: "POST",
	body: JSON.stringify({
		q: "heartbeat",
		source: "auto",
		target: "es",
		format: "text",
		api_key: ""
	}),
	headers: { "Content-Type": "application/json" }
});

console.log(await res.json());

new Def.Autocompleter.Search('condition',
 'https://clinicaltables.nlm.nih.gov/api/conditions/v3/search');
          
import autoComplete from "@tarekraafat/autocomplete.js";

const autoCompleteJS = new autoComplete({ config });

var heart_terms = ['heart disease', 'heart murmur', 'heart attack', 'heart doctor', 'high blood pressure', 'high cholesterol'];
var brain_terms = ['brain tumor', 'brain aneurism', 'struck', 'headache', 'seizure', 'neuropaty'];
var lung_terms = ['lung issue', 'breathing problem', 'shortness of breath', 'wheezing', 'asfixia', 'choking'];
var endocrinology_terms = ['diabetes', 'hypothyroidism', 'insuline resistance', 'TRT', 'estrogen', 'progesteron'];





function autocompleteMatch(input) {
  if (input == '') {
    return [];
  }
  var reg = new RegExp(input)
  return search_terms.filter(function(term) {
	  if (term.match(reg)) {
  	  return term;
	  }
  });
}

function showResults(val) {
  res = document.getElementById("result");
  res.innerHTML = '';
  let list = '';
  let terms = autocompleteMatch(val);
  for (i=0; i<terms.length; i++) {
    list += '<li>' + terms[i] + '</li>';
  }
  res.innerHTML = '<ul>' + list + '</ul>';
}