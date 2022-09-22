import axios from 'axios'

export const getImageData = (activeImage) => {
  let imageData = {}
  imageData['src'] = activeImage.src
  imageData['name'] = activeImage.name
  imageData['cls'] = activeImage.selectedClsList || []
  imageData['comment'] = activeImage.comment || ""
  if (activeImage.pixelSize !== undefined)
    imageData['pixelSize'] = {'h': activeImage.pixelSize.h, 'w': activeImage.pixelSize.w}
  
  return imageData
}

export const saveData = (imageData) => {
    axios.post('http://127.0.0.1:5000/save', imageData)
      .then(response => {
        console.log(response);
      })
}

export const saveActiveImage = (activeImage) => {
  if (activeImage === null)
    return

  console.log(activeImage)

  let imageData = getImageData(activeImage)

  axios.post('http://127.0.0.1:5000/activeImage', imageData)
    .then(response => {
      console.log(response)
    })

}

export const splitRegionData = (region) => {
    let regionData = {}
    regionData['cls'] = region.cls
    regionData['comment'] = region.comment
    regionData['tags'] = region.tags
    regionData['id'] = region.id
    if(region.type === "polygon"){
      regionData['type'] = "polygon"
      regionData['points'] = region.points
    }else if(region.type === "box"){
      regionData['type'] = 'box'
      regionData['coords'] = {'h': region.h, 'w': region.w, 'x': region.x, 'y': region.y}
    }else if(region.type === "circle"){
      regionData['type'] = 'circle'
      regionData['coords'] = {'rh': region.h, 'rw': region.w, 'rx': region.x, 'ry': region.y}
    }else{
      console.log('not a type')
    }
  
    return regionData
}