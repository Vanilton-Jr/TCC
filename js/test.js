Email.send({
    SecureToken : "d0c2a206-9dee-4b77-9d49-11068e88e624",
    To : 'vaniltonc.coelhojr@gmail.com',
    From : "vcj2dinossauro@gmail.com",
    Subject : "Novo Pedido",
    Body : "And this is the body"
}).then(
  message => alert(message)
);