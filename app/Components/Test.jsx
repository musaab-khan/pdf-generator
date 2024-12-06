'use client'
import React, { useState, useEffect, useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2pdf from 'html2pdf.js';
import JsBarcode from 'jsbarcode';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const profileRef = useRef(null);  // Reference for the profile content

  // Simulating an API call with hardcoded data (like the one you shared)
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

    // Simulate the API call with a delay (mocking async behavior)
    setTimeout(() => {
      setUserData(dummyData);
    }, 0);
  }, []);

  // Function to generate PDF from HTML content (with selectable text)
  const generatePDF = () => {
    // const doc = new jsPDF();
    // const element = profileRef.current;

    // // Use jsPDF's html() method to extract HTML content and convert it to PDF with selectable text
    // doc.html(element, {
    //   callback: function (doc) {
    //     doc.save('user-profile.pdf');
    //   },
    //   x: 10,
    //   y: 10,
    // });

    const element = profileRef.current;
    const options = {
      filename: 'user-profile.pdf',
      html2canvas: { scale: 1 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
    html2pdf(element, options);
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
        <div ref={profileRef} style={{ fontFamily:'Arial', fontSize:'12px', lineHeight:'1.5', width:'210mm', height:'296mm', border: "1px solid black"}} className='m-auto px-[0.8in] py-[0.2in]'>
          <div className='flex justify-between'>
            <div className=' flex flex-col justify-start items-center' style={{lineHeight:'0.8rem', fontSize:"0.8rem"}}>
              <div className=' rounded-lg border-black border-2 space-y-4 py-1 px-[0.125rem]'>
                <p className=' text-center'>ONLY FOR <br /> PREVIEW</p>
                <p className='  text-center'>NOT FOR <br /> SUBMISSION</p>
              </div>
            </div>
            <div>
              <div className='text-center'>
                <h1 className='font-bold text-lg'>Board of Intermediate and Secondary Education Rawalpindi</h1>
                <h2 className='font-bold text-xl'>SSC Registeration Form</h2>
                <h2 className='font-bold text-xl'>Session {`(2022-2024)`}</h2>
              </div>
              <div className='width-full h-[2px] bg-black'></div>
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
            <h3 className='bg-slate-300 border-t-[1px] border-black'>PERSONAL INFORMATION</h3>
            <div className="flex justify-between">
              <div>
                <div className='flex'>
                    <h5>Name</h5>
                    <p>{`${userData.NAME}`}</p>
                </div>
                <div className='flex'>
                    <h5>F Name</h5>
                    <p>{`${userData.FATHERNAME}`}</p>
                </div>
                <div className='flex'>
                    <h5>Date of Birth</h5>
                    <p>{`${userData.DATEOFBIRTH}`}</p>
                </div>
                <div className='flex'>
                    <h5>Gender</h5>
                    <p>{`${userData.GENDER}`}</p>
                </div>
                <div className='flex'>
                    <h5>B-FORM No</h5>
                    <p>{`${userData.BFORMNO}`}</p>
                </div>
                <div className='flex'>
                    <h5>F-CNIC No</h5>
                    <p>{`${userData.FATHERCNICNO}`}</p>
                </div>
                <div className='flex'>
                    <h5>Speciality</h5>
                    <p>{`NONE`}</p>
                </div>
                <div className='flex'>
                    <h5>F-CNIC No</h5>
                    <p>{`${userData.FATHERCNICNO}`}</p>
                </div>
              </div>
              <div>
                <div className='flex'>
                    <h5>Nationality</h5>
                    <p>{`${userData.NATIONALITY}`}</p>
                </div>
                <div className='flex'>
                    <h5>Religion</h5>
                    <p>{`${userData.RELIGION}`}</p>
                </div>
                <div className='flex'>
                    <h5>Orphan</h5>
                    <p>{`NO`}</p>
                </div> 
              </div>
              <div>
                <div className="photo w-[35mm] h-[45mm] border-[1px] border-black" ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className='bg-slate-300 border-t-[1px] border-black'>CONTACT INFORMATION</h3>
            <div className="flex">
              <div>
                <div className='flex'>
                    <h5>Address</h5>
                    <p>{`${userData.ADDRESS}`}</p>
                </div>
                <div className='flex'>
                    <h5>Mobile No</h5>
                    <p>{`${userData.MOBILENO?userData.MOBILENO:"***********"}`}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <h3 className='bg-slate-300 border-t-[1px] border-black'>CONTACT INFORMATION</h3>
            {/* <div className="flex justify-between">
              <div className='flex'>
                <h5>Inst. Adm. <br />Date</h5>
                <p>11/09/2024</p>
              </div>
              <div className='flex'>
                <h5>Inst. Adm. <br />No.</h5>
                <p>{`${userData.REGISTRATIONNO}`}</p>
              </div>
            </div> */}
            <div className="grid grid-cols-2">
              <div className='flex'>
                <h5>Inst. Adm. <br />Date</h5>
                <p>11/09/2024</p>
              </div>
              <div className='flex'>
                <h5>Inst. Adm. <br />No.</h5>
                <p>{`${userData.REGISTRATIONNO}`}</p>
              </div>
              <div className='flex'>
                <h5>Medium</h5>
                <p>{`${userData.MEDIUM}`}</p>
              </div>
              <div className='flex'>
                <h5>Category</h5>
                <p>{`Regular Admission`}</p>
              </div>
              <div className='flex'>
                <h5>Group</h5>
                <p className='underline'>{`Science Group`}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h3>Subjects</h3>
            <div>
              <ol>
                <li>Urdu</li>
                <li>English</li>
                <li>Science</li>
                <li>Math</li>
                <li>Urdu</li>
                <li>Urdu</li>
                <li>Urdu</li>
                <li>Urdu</li>
              </ol>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
      <button className='btn rounded-lg bg-blue-500 border-2 p-2' onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default UserProfile;
