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
              