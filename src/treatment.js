export function Treatment(text) {
  let fullHtml = text
  // let removingHead = fullHtml.replace(/[\s\S]*<head>[\s\S]*<\/head>/,'')
  let supermarketName = fullHtml.match(/<div class="txtTopo" id="u20">([^<]*)/)
  let supermarketCNPJ = fullHtml.match(/CNPJ:\W*([^<]*)/)
  let totalPayable = fullHtml.match(/txtMax">*([^<]*)/)
  console.log(supermarketName[1])
  console.log(supermarketCNPJ[1])
  console.log(totalPayable[1])
}
