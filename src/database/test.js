const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6555874",
        name:"Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontra em situação de risco e/ou vulnerabilidade social.",
        whatsapp:"989839231",
        images: [
            "https://images.unsplash.com/photo-1588072432904-843af37f03ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga amor e paciência para dar",
        opening_hours: "Hórario de visita das 18h até 8h",
        open_on_weekends: "0"
    })

    // //consultar dados da tabela
    // const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    // console.log(selectedOrphanages)

    // //consultar somente 1 orfanato pelo id auto
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    // console.log(orphanage)

    // //deletar dado da tabela
    // console.log (await db.run("DELETE FROM orphanages WHERE id = '4'"))
})