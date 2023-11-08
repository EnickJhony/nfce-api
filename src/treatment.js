export function Treatment(text) {
  let fullHtml = text
  let removingHead = fullHtml.replace(/[\s\S]*<head>[\s\S]*<\/head>/,'')
  let supermarketName = removingHead.match(/<div class="txtTopo" id="u20">([^<]*)/)
  console.log(supermarketName[1])
}
