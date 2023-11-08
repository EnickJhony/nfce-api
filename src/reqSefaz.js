export async function FetchSefaz() {
  const url =
    'https://sistemas.sefaz.am.gov.br/nfceweb/consultarNFCe.jsp?p=13230222991939000955650460000268981001050009%7C2%7C1%7C1%7CDEDE805D8EBFE059CF76634FA89696F87ECD06BF'


  let textHtml = ''
  
  await fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`A solicitação falhou com status ${response.status}`)
    }
    return response.text() // Converte a resposta para texto
  })
  .then(html => {
    textHtml = html // Aqui você tem o HTML da página
  })
  .catch(error => {
    console.error(`Ocorreu um erro: ${error}`)
  })
  return textHtml
}
