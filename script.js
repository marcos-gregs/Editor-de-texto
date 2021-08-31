//Varivies de ambiente:Botões.

const boldBtn = document.querySelector('#bold-btn')
const underlineBtn = document.querySelector('#underline-btn')
const italicBtn = document.querySelector('#italic-btn')
const colorBtn = document.querySelector('#color-btn')

//Var. Ambientes Menu flutante
const newBtn = document.querySelector('#new-btn')
const txtBtn = document.querySelector('#txt-btn')
const pdfBtn = document.querySelector('#pdf-btn')

//Var. de Ambiente: BoxText
const content = document.querySelector('#content')
//Var. de Ambiente: textName
const filename = document.querySelector('#filename-input')


//Config. botão:Negrito
boldBtn.addEventListener('click',()=>
{
    document.execCommand('bold')

})
//Config. botão:Underline
underlineBtn.addEventListener('click',()=>
{
    document.execCommand('underline')

})
//Config. botão:Italico
italicBtn.addEventListener('click',()=>
{
    document.execCommand('italic')

})
//Config. botão:Cor
colorBtn.addEventListener('input',()=>
{
    document.execCommand('foreColor',false ,colorBtn.value)

})

//Config. Menu Flutuante:Novo
newBtn.addEventListener('click',()=>
{
   content.innerHTML =''

})
//Config. Menu Flutuante:Salvar .txt
txtBtn.addEventListener('click',()=>
{
    const a = document.createElement('a')
    const blob = new Blob([content.innerText])
    const dataUrl = URL.createObjectURL(blob)
    a.href= dataUrl
    a.download  = filename.value +".txt"
    a.click()

})
//Config. Menu Flutuante: Salvar .pdf
pdfBtn.addEventListener('click',()=>
{
    html2pdf().from(content) .save(filename.value)

})


