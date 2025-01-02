import React from 'react'






export default function moreInformation() {
  return (
        <div className="">
        <div className="w-full lg:w-3/5 mx-auto bg-white p-4  border-2 border-dashed border-gray-300 rounded-md">
              <h6 className='p-2 font-bold text-xl text-[#AA4A00]'>Storage & Usage Guide</h6>
                  

                  <table>
                    <tbody>
                      <tr>
                        <td className='p-4 mx-2 text-[#AA4A00]'>Storage</td>
                        <td className='p-4 my-2 mx-2 text-[#000000]'>Keep in a dry, well-ventilated area, store away from moisture</td>
                      </tr>
                      <tr>
                        <td className='p-4 mx-2 text-[#AA4A00]'>Net Weight</td>
                        <td className='p-4 my-2 mx-2 text-[#000000]'>1200 g</td>
                      </tr>
                      <tr>
                        <td className='p-4 mx-2 text-[#AA4A00]'>Coverage</td>
                        <td className='p-4 my-2 mx-2 text-[#000000]'>Usually 3 rolls are sufficient for
                        one  standard wall</td>
                      </tr>
                    </tbody>
                  </table>

        </div>
        </div>
  )
}
