const imageNotAvailablePath = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'

import placeHolderImage from '../../resources/placeholder.jpg'

function imagePath(path, extension) {
  const imageVariant = 'landscape_xlarge'
  return `${path}/${imageVariant}.${extension}`
}

export function imageUri(thumbnail) {
  return thumbnail.path === imageNotAvailablePath
    ? placeHolderImage
    : { uri: imagePath(thumbnail.path, thumbnail.extension) }
}
