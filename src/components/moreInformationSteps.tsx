import React from 'react'
import step1 from "../../public/step1.png"; 
import step2 from "../../public/step2.png"; 
import step3 from "../../public/step3.png"; 
import step4 from "../../public/step4.png"; 





export default function moreInformationSteps() {
  return (
    <div>

    
   


    <div className="flex flex-col md:flex-row  justify-center  ">
    
        <div className="m-2"> 
        <div className=" w-full  mx-auto bg-white p-4  border-2 border-dashed border-gray-300 
        rounded-md">
              <h6 className='p-2 font-bold text-xl text-[#AA4A00]'>Design & Apllication Details</h6>
                  

                  <table>
                    <tbody>
                      <tr>
                        <td className='p-4 mx-2 text-[#AA4A00]'>Room Type</td>
                        <td className='p-4 my-2 mx-2 text-[#000000]'>Suitable for all: Living room, bedroom, office arid more. </td>
                      </tr>
                      <tr>
                        <td className='p-4 mx-2 text-[#AA4A00]'>Pattern Repeat</td>
                        <td className='p-4 my-2 mx-2 text-[#000000]'>64 cm</td>
                      </tr>
                      <tr>
                        <td className='p-4 mx-2 text-[#AA4A00]'>Pattern Match</td>
                        <td className='p-4 my-2 mx-2 text-[#000000]'>Offset Match</td>
                      </tr>
                      <tr>
                        <td className='p-4 mx-2 text-[#AA4A00]'>Application Guide</td>
                        <td className='p-4 my-2 mx-2 text-[#000000]'>Can be hanged using standard wallpaper glue adhesive.</td>
                      </tr>
                    </tbody>
                  </table>

        </div>
        </div>
    </div>
    </div>
  )
}
