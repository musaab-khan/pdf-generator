'use client'
import React, { useState, useEffect, useRef } from 'react';
import { jsPDF } from 'jspdf';

const UserProfile = ({propFormData}) => {

  const profileRef = useRef(null);


  const generatePDF = () => {
    const element = profileRef.current;

    const pageWidth = 210;
    const pageHeight = 297 + 75;

    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [pageWidth, pageHeight],
    });

    doc.html(element, {
      callback: function (doc) {
        doc.save('user-profile.pdf');
      },
      x: 0,
      y: 0,
      html2canvas: {
        scale: 0.2647,
      },
    });
  };

  return (
    <div>
      {propFormData ? (
        <div className='hidden'>
          <div ref={profileRef} style={{ fontFamily:'Arial', fontSize:'12px', lineHeight:'1.5', width:'210mm', height:'297mm'}} className='m-auto px-[0.8in] py-[0.1in]'>
          <div className='flex gap-4'>
            <div className=' flex flex-col justify-start items-center' style={{lineHeight:'0.8rem', fontSize:"0.7rem"}}>
              <div className=' rounded-lg border-black border-2 space-y-4 pb-2 px-[0.125rem]'>
                <p className=' text-center'>ONLY FOR <br /> PREVIEW</p>
                <p className='  text-center'>NOT FOR <br /> SUBMISSION</p>
              </div>
            </div>
            <div>
              <div className='text-center'>
                <div className='font-bold text-lg'>Board of Intermediate and Secondary Education Rawalpindi</div>
                <h2 className='font-bold text-xl uppercase'>SSC Registeration Form</h2>
                <h2 className='font-bold text-xl uppercase'>Session {`(2022-2024)`}</h2>
              </div>
              <div className='width-full h-[2px] mt-5 bg-black'></div>
              <div className='flex justify-between font-bold'>
                <p>Date/Time: Generated 05/12/2024 17:48:02</p>
                <p>Printed : 05/12/2024 17:49:40</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <h2 className='font-bold text-xl'>Form No - {`${propFormData.formNo}`}</h2>
              <img src={`https://quickchart.io/chart?cht=qr&chs=65x65&chl=${propFormData.formNo}`} alt="" />
              {/* <img src={`https://quickchart.io/chart?cht=qr&chs=50x50&chl=sample124`} alt="" /> */}
            </div>
            <div className="flex justify-between items-center mb-4">
            <h2 className='font-bold text-xl'>Institute Code - {`${propFormData.instituteCode}`}</h2>
              <div className='flex justify-between font-bold'>
                <p>School Roll No: </p>
                <p>{` ${propFormData.schoolRollNumber}`}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className='pb-2 pt-[-0.5rem] uppercase flex items-center bg-slate-300 border-t-[1px] border-black font-bold text-lg'>personal information</div>
            <div className="flex justify-between pb-4">
              <div className='flex flex-col basis-[32%]'>
                <div className='flex text-[15px] mb-[-1rem]'>
                    <h5 className='basis-[44%]'>Name</h5>
                    {/* <p className='uppercase'>{`Musaab`}</p> */}
                    <p className='uppercase'>{`${propFormData.personalInfo.name}`}</p>
                </div>
                <div className='flex text-[15px] mb-[-1rem]'>
                    <h5 className='basis-[44%]'>F Name</h5>
                    <p className='uppercase'>{`${propFormData.personalInfo.fatherName}`}</p>
                </div>
                <div className='flex text-[15px] mb-[-1rem]'>
                    <h5 className='basis-[44%]'>Date of Birth</h5>
                    <p className='uppercase'>{`${propFormData.personalInfo.dob}`}</p>
                </div>
                <div className='flex text-[15px] mb-[-1rem]'>
                    <h5 className='basis-[44%]'>Gender</h5>
                    <p className='uppercase'>{`${propFormData.personalInfo.gender}`}</p>
                </div>
                <div className='flex text-[15px] mb-[-1rem]'>
                    <h5 className='basis-[44%]'>B-FORM No</h5>
                    <p className='uppercase'>{`${propFormData.personalInfo.bFormNo}`}</p>
                </div>
                <div className='flex text-[15px] mb-[-1rem]'>
                    <h5 className='basis-[44%]'>F-CNIC No</h5>
                    <p className='uppercase'>{`${propFormData.personalInfo.fatherCnicNo}`}</p>
                </div>
                <div className='flex text-[15px] mb-[-1rem]'>
                    <h5 className='basis-[44%]'>Speciality</h5>
                    <p className='uppercase'>{`${propFormData.personalInfo.speciality}`}</p>
                </div>
                <div className='flex text-[15px] mb-[-1rem]'>
                    <h5 className='basis-[44%]'>Hafiz</h5>
                    <p className='uppercase'>{`${propFormData.personalInfo.hafiz}`}</p>
                </div>
              </div>
              <div className='flex flex-col justify-end  basis-[32%]'>
                <div className='flex text-[15px] mb-[-1rem]'>
                    <h5 className='basis-[44%]'>Nationality</h5>
                    <p className='uppercase'>{`${propFormData.personalInfo.nationality}`}</p>
                </div>
                <div className='flex text-[15px] mb-[-1rem]'>
                    <h5 className='basis-[44%]'>Religion</h5>
                    <p className='uppercase'>{`${propFormData.personalInfo.religion}`}</p>
                </div>
                <div className='flex text-[15px] mb-[-1rem]'>
                    <h5 className='basis-[44%]'>Orphan</h5>
                    <p className='uppercase'>{`${propFormData.personalInfo.orphan}`}</p>
                </div> 
              </div>
              <div className='flex basis-[32%] justify-between pt-3'>
                  {/* <img src={propFormData.personalInfo.img} className='h-[20mm] w-[20mm]'/> */}
                  <img src={'/assets/profile-pic.jfif'} className='h-[20mm] w-[20mm]'/>
                <div className="w-[22mm] h-[22mm] border-[1px] border-black" ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
          <div className='pb-2 pt-[-0.5rem] uppercase flex items-center bg-slate-300 border-t-[1px] border-black font-bold text-lg'>Contact Information</div>
              <div className="flex pb-4">
              <div className='basis-[32%]'>
                <div className='flex text-[15px] mb-[-1rem]'>
                    <h5 className='basis-[44%]'>Address</h5>
                    <p className='uppercase'>{`${propFormData.contactInfo.address}`}</p>
                </div>
                <div className='flex text-[15px] mb-[-1rem]'>
                    <h5 className='basis-[44%]'>Mobile No</h5>
                    <p className='uppercase'>{`${propFormData.contactInfo.mobileNo}`}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
          <div className='pb-2 pt-[-0.5rem] uppercase flex items-center bg-slate-300 border-t-[1px] border-black font-bold text-lg'>Enrollment information</div>
              
            <div className="flex w-full  justify-between">
              <div className='flex basis-[32%]  text-[15px]'>
                <h5 className='basis-[48%]'>Inst. Adm. <br />Date</h5>
                <p className='uppercase'>{`${propFormData.enrollmentInfo.instAdmDate}`}</p>
              </div>
              <div className='flex  basis-[32%]  text-[15px]'>
                <h5 className='basis-[48%]'>Inst. Adm. <br />No.</h5>
                <p className='uppercase'>{`${propFormData.enrollmentInfo.instAdmNo}`}</p>
              </div>
            </div>
            <div className='flex w-full justify-between'>
            <div className='flex basis-[32%]  text-[15px] mb-[-1rem]'>
                <h5 className='basis-[48%]'>Medium</h5>
                <p className='uppercase'>{`${propFormData.enrollmentInfo.medium}`}</p>
              </div>
              <div className='flex basis-[32%]  text-[15px] mb-[-1rem]'>
                <h5 className='basis-[48%]'>Category</h5>
                <p className='uppercase'>{`${propFormData.enrollmentInfo.category}`}</p>
              </div>
            </div>
            <div className='flex w-full justify-between'>
            <div className='flex basis-[32%]  text-[15px] mb-[-1rem]'>
                <h5 className='basis-[48%]'>Group</h5>
                <p className='underline'>{`${propFormData.enrollmentInfo.group}`}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
              <h4 className="font-bold text-lg pb-4">Subjects</h4>
              <table className="w-full table-auto border-collapse">
                <tbody className='border-[1px] border-black'>
                {propFormData.subjects.map((subject, index) => (
                  <tr key={index} className="border-t-[1px] border-black">
                    <td className='pb-2 text-[15px]'>{`${index+1}. ${subject}`}</td>
                  </tr>
                ))}
                </tbody>
              </table>
          </div>
          <img src="/assets/urdu-testimony.JPG" alt="" />
          <div className='flex w-full h-[13%]'>
            <div className='basis-1/2 flex flex-col'>
              <div className='basis-[35%] border-black border-[1px]'></div>
              <p className='basis-[15%] text-center'> Candidate's Signature In English</p>
              <div className='basis-[35%] border-black border-[1px]'></div>
              <p className='basis-[15%] text-center'> Candidate's Signature In English</p>
            </div>
            <div className='basis-1/2 flex flex-col'>
              <div className='basis-[85%] border-black border-[1px]'></div>
              <p className='basis-[15%] text-center'> Candidate's Signature In English</p>
            </div>
           
          </div>
          <div className='w-full flex justify-end mt-10'>
            <p className='basis-1/3 border-t border-black text-right'>Attestation of Head Institute</p>
          </div>
        </div>
        </div>
        
      ) : (
        <p>Loading user data...</p>
      )}
      <button className='btn rounded-lg bg-blue-500 border-2 p-1 m-auto' onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default UserProfile;
