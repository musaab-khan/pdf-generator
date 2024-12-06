'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Form = () => {
  const [formData, setFormData] = useState({
    formNo: '',
    instituteCode: '',
    schoolRollNumber: '',
    personalInfo: {
      name: '',
      fatherName: '',
      dob: '',
      gender: '',
      bFormNo: '',
      fatherCnicNo: '',
      nationality: '',
      speciality: '',
      religion: '',
      hafiz: 'no',
      orphan: 'no',
      img:''
    },
    contactInfo: {
      address: '',
      mobileNo: '',
    },
    enrollmentInfo: {
      instAdmDate: '',
      instAdmNo: '',
      medium: '',
      category: '',
      group: '',
    },
    subjects: [],
  });

  const scienceSubjects = [
    'Translation of Holy Quran',
    'Urdu',
    'English',
    'Islamiat',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'Computer',
  ];

  const artsSubjects = [
    'Translation of Holy Quran',
    'Urdu',
    'English',
    'Islamiat',
    'Mathematics',
    'Home Economics',
    'Physical Education',
    'Islamiat Optional',
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        personalInfo: {
          ...formData.personalInfo,
          [name]: checked ? 'yes' : 'no',
        },
      });
    } else if (name.includes('personalInfo') || name.includes('contactInfo') || name.includes('enrollmentInfo')) {
      const section = name.split('.')[0];
      const field = name.split('.')[1];
      setFormData({
        ...formData,
        [section]: {
          ...formData[section],
          [field]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleGroupChange = (e) => {
    const group = e.target.value;
    setFormData({
      ...formData,
      enrollmentInfo: {
        ...formData.enrollmentInfo,
        group,
      },
      subjects: group === 'Science' ? scienceSubjects : artsSubjects,
    });
  };

  // const router = useRouter();

  const handleSubmit = (e) => {
    // e.preventDefault();
    // // Navigate to the '/userProfile' route after form submission
    // router.push({
    //   pathname: '/UserData',
    //   state: { formData } // Passing form data through router state
    // });

    console.log(formData)
  };

  return (
    <div className="max-w-4xl my-5 mx-auto p-6 bg-slate-100 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-2xl font-bold">Form No:</label>
          <input
            type="text"
            name="formNo"
            value={formData.formNo}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl"
          />
        </div>

        <div>
          <label className="block text-2xl font-bold">Institute Code:</label>
          <input
            type="text"
            name="instituteCode"
            value={formData.instituteCode}
            onChange={handleChange}
            className="mt-1  text-xl p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-2xl font-bold">School Roll Number:</label>
          <input
            type="text"
            name="schoolRollNumber"
            value={formData.schoolRollNumber}
            onChange={handleChange}
            className="mt-1 text-xl p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Personal Info */}
        <div className="border-t border-black pt-4">
          <h2 className="text-2xl font-bold mb-2">Personal Info</h2>
          <label className="block text-xl font-semibold">Name:</label>
          <input
            type="text"
            name="personalInfo.name"
            value={formData.personalInfo.name}
            onChange={handleChange}
            className="mt-1 text-xl p-2 w-full border rounded-lg"
          />

          <label className="block mt-4 text-xl font-semibold">Father's Name:</label>
          <input
            type="text"
            name="personalInfo.fatherName"
            value={formData.personalInfo.fatherName}
            onChange={handleChange}
            className="mt-1 text-xl p-2 w-full border rounded-lg"
          />

          <label className="block mt-4 text-xl font-semibold">Date of Birth:</label>
          <input
            type="date"
            name="personalInfo.dob"
            value={formData.personalInfo.dob}
            onChange={handleChange}
            className="mt-1 text-xl p-2 w-full border rounded-lg"
          />

          <label className="block mt-4 text-xl font-semibold">Gender:</label>
          <select
            name="personalInfo.gender"
            value={formData.personalInfo.gender}
            onChange={handleChange}
            className="mt-1 text-xl p-2 w-full border rounded-lg"
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <label className="block mt-4 text-xl font-semibold">B-Form No:</label>
          <input
            type="text"
            name="personalInfo.bFormNo"
            value={formData.personalInfo.bFormNo}
            onChange={handleChange}
            className="mt-1 text-xl p-2 w-full border rounded-lg"
          />

          <label className="block mt-4 text-xl font-semibold">Father's CNIC No:</label>
          <input
            type="text"
            name="personalInfo.fatherCnicNo"
            value={formData.personalInfo.fatherCnicNo}
            onChange={handleChange}
            className="mt-1 text-xl p-2 w-full border rounded-lg"
          />

          <label className="block mt-4 text-xl font-semibold">Nationality:</label>
          <input
            type="text"
            name="personalInfo.nationality"
            value={formData.personalInfo.nationality}
            onChange={handleChange}
            className="mt-1 text-xl p-2 w-full border rounded-lg"
          />

          <label className="block mt-4 text-xl font-semibold">Speciality:</label>
          <input
            type="text"
            name="personalInfo.speciality"
            value={formData.personalInfo.speciality}
            onChange={handleChange}
            className="mt-1 text-xl p-2 w-full border rounded-lg"
          />

          <label className="block mt-4 text-xl font-semibold">Religion:</label>
          <input
            type="text"
            name="personalInfo.religion"
            value={formData.personalInfo.religion}
            onChange={handleChange}
            className="mt-1 text-xl p-2 w-full border rounded-lg"
          />

          <label className="block mt-4 text-xl font-semibold">Hafiz:</label>
          <select
            name="personalInfo.gender"
            value={formData.personalInfo.hafiz}
            onChange={handleChange}
            className="mt-1 text-xl p-2 w-full border rounded-lg"
          >
            <option value="">Select</option>
            <option value="Male">Yes</option>
            <option value="Female">No</option>
          </select>
          <label className="block mt-4 text-xl font-semibold">Orphan:</label>
          <select
            name="personalInfo.gender"
            value={formData.personalInfo.orphan}
            onChange={handleChange}
            className="mt-1 text-xl p-2 w-full border rounded-lg"
          >
            <option value="">Select</option>
            <option value="Male">Yes</option>
            <option value="Female">No</option>
          </select>

          <label className="block mt-4 text-xl font-semibold">Upload your Image:</label>
          <input
            type="file"
            accept='img/*'
            name="personalInfo.religion"
            value={formData.personalInfo.img}
            onChange={handleChange}
            className="mt-1 text-xl p-2 w-full border rounded-lg"
          />
          </div>

        {/* Contact Info */}
        <div className="border-t border-black pt-4">
          <h2 className="text-2xl font-bold mb-2">Contact Info</h2>

          <label className="block text-xl font-semibold">Address:</label>
          <input
            type="text"
            name="contactInfo.address"
            value={formData.contactInfo.address}
            onChange={handleChange}
            className="mt-1 text-xl p-2 w-full border rounded-lg"
          />

          <label className="block mt-4 text-xl font-semibold">Mobile No:</label>
          <input
            type="text"
            name="contactInfo.mobileNo"
            value={formData.contactInfo.mobileNo}
            onChange={handleChange}
            className="mt-1 text-xl p-2 w-full border rounded-lg"
          />
        </div>


        {/* Enrollment Info */}
        <div className="border-t border-black pt-4">
          <h2 className="text-2xl font-bold mb-2">Enrollment Info</h2>

          {/* Institute Admission Date */}
          <label className="block text-xl font-semibold">Institute Admission Date:</label>
          <input
            type="date"
            name="enrollmentInfo.instAdmDate"
            value={formData.enrollmentInfo.instAdmDate}
            onChange={handleChange}
            className="mt-1 text-xl p-2 w-full border rounded-lg"
          />

          {/* Institute Admission No */}
          <label className="block mt-4 text-xl font-semibold">Institute Admission No:</label>
          <input
            type="text"
            name="enrollmentInfo.instAdmNo"
            value={formData.enrollmentInfo.instAdmNo}
            onChange={handleChange}
            className="mt-1 text-xl p-2 w-full border rounded-lg"
          />

          {/* Medium (English/Urdu) */}
          <label className="block mt-4 text-xl font-semibold">Medium (English/Urdu):</label>
          <select
            name="enrollmentInfo.medium"
            value={formData.enrollmentInfo.medium}
            onChange={handleChange}
            className="mt-1 text-xl p-2 w-full border rounded-lg"
          >
            <option value="">Select Medium</option>
            <option value="English">English</option>
            <option value="Urdu">Urdu</option>
          </select>

          {/* Category (Fresh/Repetition) */}
          <label className="block mt-4 text-xl font-semibold">Category (Fresh/Repetition):</label>
          <select
            name="enrollmentInfo.category"
            value={formData.enrollmentInfo.category}
            onChange={handleChange}
            className="mt-1 text-xl p-2 w-full border rounded-lg"
          >
            <option value="">Select Category</option>
            <option value="Fresh">Fresh</option>
            <option value="Repetition">Repetition</option>
          </select>

          {/* Group (Science/Arts) */}
          <label className="block mt-4 text-xl font-semibold">Group (Science/Arts):</label>
          <select
            name="enrollmentInfo.group"
            value={formData.enrollmentInfo.group}
            onChange={handleGroupChange}
            className="mt-1 text-xl p-2 w-full border rounded-lg"
          >
            <option value="">Select Group</option>
            <option value="Science">Science</option>
            <option value="Arts">Arts</option>
          </select>

          {/* Subjects (Dynamic based on Group selection) */}
          <div className="mt-4">
            <label className="block text-xl font-semibold">Subjects:</label>
            {formData.subjects.map((subject, index) => (
              <div key={index} className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id={`subject-${index}`}
                  name={`subject-${subject}  text-xl`}
                  className="mr-2"
                  checked={formData.subjects.includes(subject)}
                  onChange={() => handleSubjectChange(subject)}
                />
                <label htmlFor={`subject-${index}`}>{subject}</label>
              </div>
            ))}
          </div>
        </div>


        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
