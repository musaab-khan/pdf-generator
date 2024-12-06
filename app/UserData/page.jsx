'use client'
import React, { useState, useEffect, useRef } from 'react';
import { jsPDF } from 'jspdf';
import { useRouter } from 'next/router';
import JsBarcode from 'jsbarcode';

const UserProfile = () => {
  // const router = useRouter();

  // const { state } = router.query;

  // const { formData } = state; 

  // console.log('form data:', formData)

  const [userData, setUserData] = useState(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const dummyData = {
      ID: 1,
      FORMNO: "2720979",
      APPEARINGCATEGORY: "Partial Appear",
      LEVEL: "SSC",
      SSCROLLNO: "312312",
      NAME: "DANIYAL AHMED",
      FATHERNAME: "SDAASDAS",
      DATEOFBIRTH: "0000-00-00",
      PHONENO: "",
      WPNO: "",
      GENDER: "Male",
      BFORMNO: "ASDASDASDA",
      FATHERCNICNO: "ASDASDA",
      REGISTRATIONNO: "23123`323123123",
      REGION: "Urban",
      DISABILITY: "No",
      NATIONALITY: "Pakistani",
      MEDIUM: "English",
      IDENTIFICATIONMARK: "",
      RELIGION: "Muslim",
      HAFIZQURAN: false,
      ADDRESS: "XCASDASDSA",
      DISTRICT: "Lahore",
      MOBILENO: "",
      IMAGE: null,
      FINALCENTER: null,
      DESCR: null,
      ROLLNO: null,
      RESIDENTIALADD1: null,
      EXAM: null,
      ZIP_CODE: "ASDASDA",
      STATE: "ASDASD",
      CITY: "ASDASDAS",
      EMAIL: null,
      PHOTO: null,
      createdAt: "2024-12-05T12:28:40.000Z",
      updatedAt: "2024-12-05T12:28:40.000Z",
    };

    setTimeout(() => {
      setUserData(dummyData);
    }, 0);
  }, []);

  const generatePDF = () => {
    const element = profileRef.current;

    const pageWidth = 210;
    const pageHeight = 297 + 105;

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

  const barcodeRef = useRef(null);

  useEffect(() => {
    if (barcodeRef.current && userData.FORMNO) {
      JsBarcode(barcodeRef.current, userData.FORMNO,{
        displayValue: false,
        height: 50,
      });
    }
  }, [userData]);

  return (
    <div>
      <h1>User Profile</h1>
      {userData ? (
        <div ref={profileRef} style={{ fontFamily:'Arial', fontSize:'12px', lineHeight:'1.5', width:'210mm', height:'297mm'}} className='m-auto px-[0.8in] py-[0.1in] border-black border-[1px]'>
          <div className='flex justify-between'>
            <div className=' flex flex-col justify-start items-center' style={{lineHeight:'0.8rem', fontSize:"0.8rem"}}>
              <div className=' rounded-lg border-black border-2 space-y-4 pt-1 pb-1 px-[0.125rem]'>
                <p className=' text-center'>ONLY FOR <br /> PREVIEW</p>
                <p className='  text-center'>NOT FOR <br /> SUBMISSION</p>
              </div>
            </div>
            <div>
              <div className='text-center'>
                <div className='font-bold text-lg'>Board of Intermediate and Secondary Education Rawalpindi</div>
                <h2 className='font-bold text-xl'>SSC Registeration Form</h2>
                <h2 className='font-bold text-xl'>Session {`(2022-2024)`}</h2>
              </div>
              <div className='width-full h-[2px] mt-5 bg-black'></div>
              <div className='flex justify-between'>
                <p>Date/Time: Generated 05/12/2024 17:48:02</p>
                <p>Printed : 05/12/2024 17:49:40</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <h2>Form No - {`${userData.FORMNO}`}</h2>
              <svg ref={barcodeRef}></svg>
            </div>
          </div>
          <div className="flex flex-col">
            <div className='p-1 flex items-center bg-slate-300 border-t-[1px] border-black'>PERSONAL INFORMATION</div>
            <div className="flex justify-between">
              <div className='flex flex-col basis-[30%]'>
                <div className='flex '>
                    <h5 className='basis-[40%]'>Name</h5>
                    <p>{`${userData.NAME}`}</p>
                </div>
                <div className='flex '>
                    <h5 className='basis-[40%]'>F Name</h5>
                    <p>{`${userData.FATHERNAME}`}</p>
                </div>
                <div className='flex '>
                    <h5 className='basis-[40%]'>Date of Birth</h5>
                    <p>{`${userData.DATEOFBIRTH}`}</p>
                </div>
                <div className='flex '>
                    <h5 className='basis-[40%]'>Gender</h5>
                    <p>{`${userData.GENDER}`}</p>
                </div>
                <div className='flex '>
                    <h5 className='basis-[40%]'>B-FORM No</h5>
                    <p>{`${userData.BFORMNO}`}</p>
                </div>
                <div className='flex '>
                    <h5 className='basis-[40%]'>F-CNIC No</h5>
                    <p>{`${userData.FATHERCNICNO}`}</p>
                </div>
                <div className='flex '>
                    <h5 className='basis-[40%]'>Speciality</h5>
                    <p>{`NONE`}</p>
                </div>
                <div className='flex '>
                    <h5 className='basis-[40%]'>F-CNIC No</h5>
                    <p>{`${userData.FATHERCNICNO}`}</p>
                </div>
              </div>
              <div className='flex flex-col justify-end  basis-[30%]'>
                <div className='flex '>
                    <h5 className='basis-[40%]'>Nationality</h5>
                    <p>{`${userData.NATIONALITY}`}</p>
                </div>
                <div className='flex '>
                    <h5 className='basis-[40%]'>Religion</h5>
                    <p>{`${userData.RELIGION}`}</p>
                </div>
                <div className='flex '>
                    <h5 className='basis-[40%]'>Orphan</h5>
                    <p>{`NO`}</p>
                </div> 
              </div>
              <div className='flex basis-[30%] justify-between pt-3'>
                  <img src='/assets/profile-pic.jfif' className='h-[22mm] w-[19mm]'/>
                <div className=" w-[22mm] h-[25mm] border-[1px] border-black" ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
          <div className='p-1 flex items-center bg-slate-300 border-t-[1px] border-black'>CONTACT INFORMATION</div>
            <div className="flex">
              <div className='basis-[30%]'>
                <div className='flex '>
                    <h5 className='basis-[40%]'>Address</h5>
                    <p>{`${userData.ADDRESS}`}</p>
                </div>
                <div className='flex '>
                    <h5 className='basis-[40%]'>Mobile No</h5>
                    <p>{`${userData.MOBILENO?userData.MOBILENO:"***********"}`}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
          <div className='p-1 flex items-center bg-slate-300 border-t-[1px] border-black'>ENROLLMENT INFORMATION</div>
            
            <div className="flex w-full  justify-between">
              <div className='flex basis-[30%]'>
                <h5 className='basis-[48%]'>Inst. Adm. <br />Date</h5>
                <p>11/09/2024</p>
              </div>
              <div className='flex  basis-[30%]'>
                <h5 className='basis-[48%]'>Inst. Adm. <br />No.</h5>
                <p>{`${userData.REGISTRATIONNO}`}</p>
              </div>
            </div>
            <div className='flex w-full justify-between'>
            <div className='flex basis-[30%]'>
                <h5 className='basis-[48%]'>Medium</h5>
                <p>{`${userData.MEDIUM}`}</p>
              </div>
              <div className='flex basis-[30%]'>
                <h5 className='basis-[48%]'>Category</h5>
                <p>{`Regular Admission`}</p>
              </div>
            </div>
            <div className='flex w-full justify-between'>
            <div className='flex basis-[30%]'>
                <h5 className='basis-[48%]'>Group</h5>
                <p className='underline'>{`Science Group`}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
              <h4 className="font-semibold">Subjects</h4>
              <table className="w-full table-auto border-collapse">
                <tbody className='border-[1px] border-black'>
                  <tr className="border-t-[1px] border-black">
                    <td className='pb-2'>Mathematics</td>
                  </tr>
                  <tr className="border-t-[1px] border-black">
                    <td className='pb-2'>Science</td>
                  </tr>
                  <tr className="border-t-[1px] border-black">
                    <td className='pb-2'>History</td>
                  </tr>
                  <tr className="border-t-[1px] border-black">
                    <td className='pb-2'>Mathematics</td>
                  </tr>
                  <tr className="border-t-[1px] border-black">
                    <td className='pb-2'>Science</td>
                  </tr>
                  <tr className="border-t-[1px] border-black">
                    <td className='pb-2'>History</td>
                  </tr>
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
      ) : (
        <p>Loading user data...</p>
      )}
      <button className='btn rounded-lg bg-blue-500 border-2 p-1' onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default UserProfile;
