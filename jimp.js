const jimp = require('jimp')

async function main() {

let fonte = await jimp.loadFont(jimp.FONT_SANS_32_BLACK)
let mask = await jimp.read('mascara.png')
//let avatar = await jimp.read('Desocupado.jpg')
let fundo = await jimp.read('fundo.png')


jimp.read('https://cdn.discordapp.com/attachments/711478609902305294/712597345480736840/0bc4560d3f3999e17869fca8c0f5ff17.gif').then(avatar => {
    avatar.resize(130, 130)
    mask.resize(130, 130)
    avatar.mask(mask)
    fundo.print(fonte, 170, 175, 'Soraya')
    fundo.composite(avatar,10, 20).write('beta.png')
  })
  .catch(err => {
    console.log('Erro ao carregar a imagem')
  });

}
main()