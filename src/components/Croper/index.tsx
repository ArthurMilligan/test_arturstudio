import React, { useCallback, useState } from 'react'

import Cropper from 'react-easy-crop'
import s from './croper.module.scss'



const Croper = () => {
  const [imgSrc, setImgSrc] = useState('')

  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
    console.log(croppedArea, croppedAreaPixels)
  }, [])

  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.addEventListener('load', () =>
        setImgSrc(reader.result?.toString() || ''),
      )
      reader.readAsDataURL(e.target.files[0])
    }
  }


  return (
    <div className={s.croper}>
        <div className={s.croper__fileSelect}>
            <input type="file" accept="image/*" onChange={onSelectFile} />
        </div>
        <div className={s.croper__container}>
        {imgSrc&&<Cropper
          image={imgSrc}
          crop={crop}
          zoom={zoom}
          aspect={4 / 3}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />}
        </div>
         <div className={s.croper__panel}>
        {imgSrc&&<input
          type="range"
          value={zoom}
          min={1}
          max={3}
          step={0.1}
          aria-labelledby="Zoom"
          onChange={(e) => {
            setZoom(+e.target.value)
          }}
        />}
      </div>
    </div>
  )
}

export default Croper;
