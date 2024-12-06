'use client'
import React, { useState, useEffect, useRef } from 'react';
import { jsPDF } from 'jspdf';
import bwipjs from 'bwip-js';

const UserProfile = () => {
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
      createdAt: "2024-",
    };
    setUserData(dummyData);
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();

    // Generate barcode as a PNG image using bwip-js
    bwipjs.toCanvas(barcode, {
      bcid: 'code128', // Barcode type (you can choose others like 'ean13', 'code128', etc.)
      text: userData.FORMNO, // Text or data to encode
      scale: 3, // Scale factor
      height: 10, // Height of the barcode
      includetext: true, // Whether to include the text below the barcode
      textxalign: 'center', // Align text in the center
    }, (error, canvas) => {
      if (error) {
        console.error(error);
      } else {
        const imgData = canvas.toDataURL('image/png'); // Convert the canvas to a PNG data URL
        doc.addImage(imgData, 'PNG', 10, 10, 180, 30); // Add the barcode image to the PDF
        doc.save('user-profile.pdf');
      }
    });
  };

  return (
    <div ref={profileRef}>
      <h1>User Profile</h1>
      <p>{userData?.NAME}</p>
      <button onClick={generatePDF}>Generate PDF with Barcode</button>
    </div>
  );
};

export default UserProfile;
