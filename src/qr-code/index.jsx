// import React, { useState } from 'react'
// import QRCode from 'react-qr-code'

// function QRcodeGenerator() {

//   const [qrCode, setQrCode] = useState('')
//   const [input, setInput] = useState('')

//   function handleGenerateQrCode() {

//     setQrCode(input)
//     setInput('')

//   }

//   return (
//     <div className=''>
//       <h1>QR code Generator</h1>
//       <div>
//         <input
//            onChange={(e) => setInput(e.target.value)}
//            type="text"
//            name='qr-code' 
//            value={input} 
//            placeholder='Enter your value'
//         />
//         <button 
//            disabled={input && input.trim() !== '' ? false : true}    onClick={handleGenerateQrCode}>Generate</button>
//       </div>
//       <div>
//         <QRCode id='qr-code-value' value={qrCode} size={400}
//           bgColor="white" />
//       </div>
//     </div>
//   )
// }

// export default QRcodeGenerator





import React, { useState } from 'react'
import QRCode from 'react-qr-code'

function QrGenerator() {

 const [input,setInput]=useState('')
 const [qrValue,setQrValue]=useState('')

 function handleClick(){
   setQrValue(input)
   setInput('')
 }

  return (
    <>
       
         <input type="text" 
            placeholder='enter value'
            onChange={(e)=>setInput(e.target.value)}
            value={input}
        />
         <button disabled={input && input.trim() === '' ? true : false} onClick={handleClick}>Generate </button>
        <div>
           <QRCode value={qrValue}/>
        </div>
    </>
  )
}

export default QrGenerator
