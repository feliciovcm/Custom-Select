# Custom Select

<!---Esses são exemplos. Veja https://shields.io para outras pessoas ou para personalizar este conjunto de escudos. Você pode querer incluir dependências, status do projeto e informações de licença aqui--->

![GitHub repo size](https://img.shields.io/github/repo-size/feliciovcm/Custom-Select?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/feliciovcm/Custom-Select?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/feliciovcm/Custom-Select?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/feliciovcm/Custom-Select?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/feliciovcm/Custom-Select?style=for-the-badge)

<img src="/public/layout.png" alt="Exemplo Layout">

> This repository is an example of a custom select field component using React.js, styled-components, and typescript.

### Enhancements

This project is still in development and is open to ideas. The next updates will be focused on making it more generic.

- [x] Accept any title and the options to show it or not.
- [x] Accept any array of object that have properties name and id.
- [ ] Implement props to choose the color schema.

## 💻 Prerequisites

Before start installation, make sure you attend the following requirements:

<!---Estes são apenas requisitos de exemplo. Adicionar, duplicar ou remover conforme necessário--->

- In order to run the project in your local machine you need to have `<node.js 10.15.3>` or above installed

## 🚀 Installing

To install the <Custom-Select>, follow the instructions below:

Clone the repository in a directory of your preference.

Install node dependencies needed to the project execute:

```
yarn intall
```

## ☕ Using <Custom-Select>

To start using <Custom-Select>, follow the steps:

```
yarn start
```

This project is a front-end only application, that runs on port 3000.

## API

### Select props

| name | description | type | default |
| --- | --- | --- | --- |
| id | html id to set on the component wrapper | String | '' |
| isMulti | whether can select multiple or single choices | Boolean | False |
| maxMenuItemsDisplay | number of items to show on the dropdown list | Number | 8 |
| maxWidth | max-width applied to the component wrapper | String or Number | '34.375rem' |
| minWidth | min-width applied to the component wrapper | String or Number | '22.6875rem' |
| mobileScreen | whether is mobile height (40px) or not (44px) | Boolean | False |
| name | html name to set on the component wrapper | String | '' |
| onChange | called when select an option or input value change(combobox) | function(value, option:Option/Array<Option>) | - |
| options | array of options to display on the dropdown list | Array<Option> | - |
| showListItemsSubtitle | whether display or not the options subtitle prop | Boolean | False |
| showSubtitle | whether display or not the subtitle | Boolean | False |
| showTitle | whether display or not the title | Boolean | False |
| title | the title of the component displayed on top of the component wrapper | String | 'Opções' |

| nome | descrição | tipo | padrão |
| --- | --- | --- | --- |
| id | id html a ser definido no container do componente | String | '' |
| isMulti | se pode selecionar múltiplas ecolhas ou única escolha | Boolean | False |
| maxMenuItemsDisplay | número de itens a serem exibidos na lista de escolhas | Number | 8 |
| maxWidth | largura máxima aplicada ao container do componente | String ou Number | '34 .375rem '|
| minWidth | largura mínima aplicada ao container do componente | String ou Number | '22 .6875rem '|
| mobileScreen | se é a altura do celular (40px) ou não (44px) | Boolean | False |
| name | nome html a ser definido no container do componente | String | '' |
| onChange | chamado ao selecionar uma opção ou alteração do valor de entrada (combobox) | Function(value, option: Option / Array <Option>) | - |
| options | conjunto de opções para exibir na lista de escolhas | Array <Option> | - |
| showListItemsSubtitle | se exibir ou não o subtítulo das opções | Boolean | False |
| showSubtitle | se exibir ou não a legenda | Boolean | False |
| showTitle | se exibir ou não o título | Boolean | False |
| title | o título do componente exibido na parte superior do container do componente | String | 'Opções' |



## 📫 Contributing for <Custom-Select>

<!---Se o seu README for longo ou se você tiver algum processo ou etapas específicas que deseja que os contribuidores sigam, considere a criação de um arquivo CONTRIBUTING.md separado--->

For contributions <Custom-Select>, follow the steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch>`.
3. Make your updates and commit: `git commit -m '<commit_message>'`
4. Merge the branch: `git push origin <Custom-Select> / <master>`
5. Create a pull request.

As an alternative, see Github documentation on [how to create a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).


[⬆ Voltar ao topo](#Custom-Select)<br>
