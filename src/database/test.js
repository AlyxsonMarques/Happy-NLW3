const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db =>  
{

	await saveOrphanage(db, 
	{
        lat: "-23.5410615",
        lng: "-46.2091663",

        name: "Lar dos Coders",

        about: "Presta assitência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
        
        whatsapp: "34823",
        
        images:
        [
        	"https://images.unsplash.com/photo-1601664249612-ea3c1a39476c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",

        	"https://images.unsplash.com/photo-1600980808440-cb2bb5b82860?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
        ].toString(),

        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",

        opening_hours: "Horário de visitas Das 18h até 8h",

        opening_on_weekends: "1"

    });

	const selectedOrphanages = await db.all("SELECT * FROM orphanages")
	console.log(selectedOrphanages);
	const orphanage = await db.all('SELECT * from orphanages WHERE id = "1"');
	console.log(orphanage);
	




	})