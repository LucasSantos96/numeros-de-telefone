// Função chamada ao clicar no botão "Novo telefone"
function newPhone() {
    // Seleciona o formulário com o ID "phones"
    const phoneForm = document.querySelector("form#phones");

    // Clona o primeiro filho (div com label e input)
    // O parâmetro "true" significa que todos os elementos dentro também serão clonados
    const newPhone = phoneForm.children[0].cloneNode(true);

    // Define a posição do novo telefone com base na quantidade de filhos do formulário
    const phonePosition = phoneForm.children.length + 1;

    // Atualiza o texto da label do novo campo para indicar o número do telefone
    newPhone.querySelector("label").innerText = "Telefone " + phonePosition + ":";

    // Limpa o valor do input clonado (evita duplicar dados já preenchidos)
    newPhone.querySelector("input").value = "";

    // Atualiza o id do novo input para manter uma estrutura única (opcional)
    newPhone.querySelector("input").id = "phone" + phonePosition;

    // Adiciona a nova div clonada ao formulário
    phoneForm.appendChild(newPhone);

    // (Opcional) Exibe os elementos do formulário no console para conferência
    console.log(phoneForm.children);
}

// Função chamada ao clicar no botão "Imprimir telefone"
function printPhones() {
    // Inicializa uma variável para armazenar a mensagem
    let message = "";

    // Seleciona todos os inputs com o atributo name="phone"
    const phones = document.querySelectorAll("input[name='phone']");

    // Percorre todos os campos de telefone
    phones.forEach((phone, index) => {
        // Adiciona cada número à mensagem com seu índice
        message += "Telefone " + (index + 1) + ": " + phone.value + "\n";
    });

    // Exibe todos os telefones preenchidos em um alert
    alert(message);
}
