# Bat-Signal App (Desafio React Native - DIO)

Aplicativo mobile desenvolvido em **React Native** com **Expo** e **TypeScript**, construído como parte dos desafios práticos da **Formação React Native Developer** na **DIO (Digital Innovation One)**. 

O app simula um sistema de alerta do Cavaleiro das Trevas, permitindo que cidadãos de Gotham solicitem ajuda de forma interativa.

## 🚀 Tecnologias Utilizadas

* **React Native** com **Expo**
* **TypeScript**
* **React Hooks (`useState`)**
* **Styling modularizado** (Gotham Dark Mode)

## 📱 Funcionalidades

* **Tela Inicial (Home):** Interface temática no estilo Gotham Dark Mode (`#0A0A0A`), exibindo o título, a logo oficial do Batman e um botão de destaque para acionar o sinal.
* **Tela de Incidente (Formulário):** Formulário interativo para preenchimento de dados de emergência (Nome, Telefone, Localização e Observações).
* **Feedback ao Usuário:** Validação de campos obrigatórios e exibição de alertas (`Alert`) confirmando o envio do chamado ao Comissário Gordon antes de retornar à tela inicial.

## 📂 Estrutura do Projeto

```text
src/
├── components/
│   ├── BatButton/       # Botão customizado padrão
│   ├── BatForm/         # Formulário de solicitação de socorro
│   ├── BatLogo/         # Componente de exibição da logo
│   └── BatButton/       # (Outros componentes modulares)
├── screens/
│   └── Home/            # Tela principal de boas-vindas
└── assets/
    └── imgs/            # Recursos visuais (batman-logo.png)
```
---
🛠️ Como Executar o Projeto
Clone este repositório:

Bash
git clone [https://github.com/HigorCamposGit/Bat-signal-App.git](https://github.com/HigorCamposGit/Bat-signal-App.git)
Entre na pasta do projeto:

Bash
`cd Bat-signal-App`
Instale as dependências:

Bash
`npm install`
Inicie o servidor de desenvolvimento com o Expo:

Bash
`npx expo start`
Escaneie o `QR Code` gerado usando o aplicativo **Expo Go** no seu celular ou abra em um **emulador compatível**.


---

## 🤝 Conecte-se Comigo
Desenvolvido por Higor Campos.
<p align="center">
  <img src="https://github.com/HigorCamposGit.png" width="100px" style="border-radius: 50%;" alt="Foto de Higor de Campos" /><br />
  <b>Projeto atualizado por:</b> <a href="https://github.com/HigorCamposGit">Higor de Campos</a>
</p>

---
