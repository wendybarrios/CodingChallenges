// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// function  return surface area nad volume of box as array


// getSize(4,2,6) , [88,48]
// getSize(10,10,10) , [600,1000]


function getSize(width, height, depth){
    // surface area
  let surfaceArea = (2*depth*width) + (2*depth*height) + (2*width*height)
    // volume
  let volume = width*height*depth
  return [surfaceArea,volume]
  }
  
  
                    
  console.log(getSize(4,2,6), [88,48])
  console.log(getSize(10,10,10), [600,1000]) 