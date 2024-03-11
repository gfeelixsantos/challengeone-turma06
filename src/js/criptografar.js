const textArea = document.querySelector('#texto')
const btn_criptografar = document.querySelector('#criptografar')
const btn_descriptografar = document.querySelector('#descriptografar')
const btn_copiar = document.querySelector('body > main > div:nth-child(2) > div > button')

const imgSemMensagem = document.querySelector('body > main > div:nth-child(2) > div > img')
const textAreaResultado = document.querySelector('body > main > div:nth-child(2) > div > textarea')
const textoTitulo = document.querySelector('body > main > div:nth-child(2) > div > h4')

btn_criptografar.addEventListener('click', criptografar)
btn_descriptografar.addEventListener('click', descriptografar)
btn_copiar.addEventListener('click', copiarTexto)

const criptoA = 'ai'
const criptoE = 'enter'
const criptoI = 'imes'
const criptoO = 'ober'
const criptoU = 'ufat'

function criptografar() {

    let texto = ''
    
    for( letra of textArea.value ){
        
        if( letra == 'a' || letra == 'A' ){ letra = criptoA }
        if( letra == 'e' || letra == 'E' ){ letra = criptoE }
        if( letra == 'i' || letra == 'I' ){ letra = criptoI }
        if( letra == 'o' || letra == 'O' ){ letra = criptoO }
        if( letra == 'u' || letra == 'U' ){ letra = criptoU }

        texto += letra

    }
    
    textoTitulo.innerHTML = 'Criptografado com sucesso!'
    textAreaResultado.value = texto

    imgSemMensagem.remove()
    textAreaResultado.removeAttribute('hidden')
    btn_copiar.removeAttribute('hidden')

}

function descriptografar() {

    let texto = textArea.value
    texto = texto.replaceAll(criptoA, 'a')
    texto = texto.replaceAll(criptoE, 'e')
    texto = texto.replaceAll(criptoI, 'i')
    texto = texto.replaceAll(criptoO, 'o')
    texto = texto.replaceAll(criptoU, 'u')
    console.log(texto);
    
    textoTitulo.innerHTML = 'Descriptografado com sucesso!'
    textAreaResultado.value = texto

    imgSemMensagem.remove()
    textAreaResultado.removeAttribute('hidden')
    btn_copiar.removeAttribute('hidden')

}

function copiarTexto(){
    navigator.clipboard.writeText(textAreaResultado.value)
    alert('A mensagem foi copiada para sua área de transferência')
}