// Détourage par luminance : l'image est shootée sur noir pur, donc
// alpha = courbe(luminance). Tout pixel au-dessus de ~lum 32 est opaque,
// le fond (lum 0-5) devient transparent, transition douce entre les deux.
import sharp from 'sharp'

const SRC = process.argv[2]
const OUT = process.argv[3]

const mask = await sharp(SRC)
  .greyscale()
  .linear(8, -16)
  .blur(0.6)
  .toColourspace('b-w')
  .raw()
  .toBuffer({ resolveWithObject: true })

// NB : pas de removeAlpha() ici — il s'appliquerait en fin de pipeline
// libvips et supprimerait le canal que joinChannel vient d'ajouter.
const out = await sharp(SRC)
  .joinChannel(mask.data, {
    raw: {
      width: mask.info.width,
      height: mask.info.height,
      channels: 1,
    },
  })
  .webp({ quality: 82, alphaQuality: 90 })
  .toFile(OUT)

console.log(`OK ${out.width}x${out.height} -> ${OUT} (${Math.round(out.size / 1024)} Ko)`)
