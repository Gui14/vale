document.getElementById('botao').addEventListener('click', function() {
    var inputValue = document.getElementById('input').value;
  
    if (inputValue === "") {
      alert("Por favor, digite a data");
    } else {
      // Redirecionar ou executar a ação desejada
      window.location.href = `https://api.whatsapp.com/send?phone=73982004078&text=Quero meu dia de princesa este dia: ${inputValue}, se vira`;
    }
  });
  