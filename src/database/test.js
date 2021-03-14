const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
  // inserir dados na tabela
  // await saveOrphanage(db, {
  //   lat: '-1.4499331',
  //   lng: '-48.4932628',
  //   name: 'Lar dos meninos',
  //   about:
  //     'Preste assistência a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social.',
  //   whatsapp: '91985342929',
  //   images: [
  //     'https://images.unsplash.com/photo-1601180964546-f5c6ac9fdc14?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
  //     'https://images.unsplash.com/photo-1597791366640-e91489aaf430?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
  //   ].toString(),
  //   instructions:
  //     'Venha se sentir a vontade e traga muito amor e paciência para dar',
  //   opening_hours: 'Horário de visitas Das 18h até 8h',
  //   open_on_weekends: '0',
  // });
  // consultar dados da tabela
  // const selectedOrphanages = await db.all('SELECT * FROM orphanages');
  // console.log(selectedOrphanages);
  // consultar somente 1 orphanato, pelo id
  // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
  // console.log(orphanage);
  // deletar dado da tabela
  // await db.run("DELETE FROM orphanages WHERE id = '3'");
  // await db.run("DELETE FROM orphanages WHERE id = '4'");
});
