'use client'

import React, { useState } from 'react'
import {
  FaUser,
  FaCalendarAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaBriefcase,
  FaRupeeSign,
  FaGlobeAmericas,
  FaUserTie,
  FaHeart,
  FaGraduationCap,
  FaClock,
  FaPercentage,
  FaIdBadge,
  FaHistory,
  FaBuilding,
  FaPaperPlane,
} from 'react-icons/fa';
import Image from 'next/image';
import { formimg } from '@/assets';

const initialState = {
  name: '',
  dob: '',
  email: '',
  contact: '',
  experience: '',
  salary: '',
  country: '',
  fatherName: '',
  fatherOccupation: '',
  maritalStatus: '',
  qualification: '',
  passingYear: '',
  marks12: '',
  marks10: '',
  currentDesignation: '',
  previousDesignation: '',
  previousCompany: '',
}

function Field({ label, icon, children }:any) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-sm font-medium tracking-wide text-slate-600">
        <span className="text-color2">{icon}</span>
        {label}
      </span>
      {children}
    </label>
  )
}

const inputClass =
  'w-full rounded-xl border border-slate-500 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 shadow-sm transition focus:border-color2 focus:outline-none focus:ring-2 focus:ring-color2/20'

function Page() {
  const [form, setForm] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e:any) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
    setSubmitted(true)
    // TODO: wire this up to your API / email endpoint
    console.log(form)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 px-4 pt-14 pb-28 sm:px-6 lg:px-8 relative">
        <Image src={formimg} alt="form" className="absolute bottom-0 right-0 h-44 md:h-96 z-10 object-contain w-max  pointer-events-none" />
      <div className="mx-auto max-w-4xl relative z-20">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full bg-color2/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-color2">
            Free Consultation
          </span>
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Evaluation Form
          </h1>
          <p className="mt-3 text-sm text-slate-500 sm:text-base">
            Fill in your details below and our immigration experts will get back to you shortly.
          </p>
        </div>

        {/* Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-zinc-300">

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 sm:p-10">
            <Field label="Name" icon={<FaUser />}>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={inputClass}
                required
              />
            </Field>

            <Field label="Date Of Birth" icon={<FaCalendarAlt />}>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </Field>

            <Field label="Email" icon={<FaEnvelope />}>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={inputClass}
                required
              />
            </Field>

            <Field label="Contact Number" icon={<FaPhoneAlt />}>
              <input
                type="tel"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="+91 00000 00000"
                className={inputClass}
                required
              />
            </Field>

            <Field label="Total Experience" icon={<FaBriefcase />}>
              <input
                type="text"
                name="experience"
                value={form.experience}
                onChange={handleChange}
                placeholder="e.g. 3 years"
                className={inputClass}
              />
            </Field>

            <Field label="Annual Salary" icon={<FaRupeeSign />}>
              <input
                type="text"
                name="salary"
                value={form.salary}
                onChange={handleChange}
                placeholder="e.g. 6,00,000"
                className={inputClass}
              />
            </Field>

            <Field label="Preferred Country" icon={<FaGlobeAmericas />}>
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                className={inputClass}
                required
              >
                <option value="">Select a country</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="Singapore">Singapore</option>
                <option value="UAE">UAE</option>
              </select>
            </Field>

            {/* <Field label="Fathers' Name" icon={<FaUserTie />}>
              <input
                type="text"
                name="fatherName"
                value={form.fatherName}
                onChange={handleChange}
                placeholder="Father's name"
                className={inputClass}
              />
            </Field>

            <Field label="Fathers' Occupation" icon={<FaBuilding />}>
              <input
                type="text"
                name="fatherOccupation"
                value={form.fatherOccupation}
                onChange={handleChange}
                placeholder="Father's occupation"
                className={inputClass}
              />
            </Field> */}

            <Field label="Marital Status" icon={<FaHeart />}>
              <select
                name="maritalStatus"
                value={form.maritalStatus}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
              </select>
            </Field>

            <Field label="Highest Qualification" icon={<FaGraduationCap />}>
              <select
                name="qualification"
                value={form.qualification}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select qualification</option>
                <option value="Ph.D">Ph.D</option>
                <option value="Masters">Masters</option>
                <option value="Bachelors">Bachelors</option>
                <option value="Diploma">Diploma</option>
                <option value="Class 12">Class 12</option>
                <option value="Class 10">Class 10</option>
              </select>
            </Field>

            <Field label="Passing Year" icon={<FaClock />}>
              <input
                type="text"
                name="passingYear"
                value={form.passingYear}
                onChange={handleChange}
                placeholder="e.g. 2022"
                className={inputClass}
              />
            </Field>

            {/* <Field label="Marks Obtained in Class 12" icon={<FaPercentage />}>
              <input
                type="text"
                name="marks12"
                value={form.marks12}
                onChange={handleChange}
                placeholder="e.g. 85%"
                className={inputClass}
              />
            </Field>

            <Field label="Marks Obtained in Class 10" icon={<FaPercentage />}>
              <input
                type="text"
                name="marks10"
                value={form.marks10}
                onChange={handleChange}
                placeholder="e.g. 90%"
                className={inputClass}
              />
            </Field> */}

            <Field label="Current Designation" icon={<FaIdBadge />}>
              <input
                type="text"
                name="currentDesignation"
                value={form.currentDesignation}
                onChange={handleChange}
                placeholder="Your current role"
                className={inputClass}
              />
            </Field>

            {/* <Field label="Previous Designation" icon={<FaHistory />}>
              <input
                type="text"
                name="previousDesignation"
                value={form.previousDesignation}
                onChange={handleChange}
                placeholder="Your previous role"
                className={inputClass}
              />
            </Field> */}

            <Field label=" Company Name" icon={<FaBuilding />}>
              <input
                type="text"
                name="previousCompany"
                value={form.previousCompany}
                onChange={handleChange}
                placeholder="Current employer"
                className={inputClass}
              />
            </Field>

            {/* Submit */}
            <div className="sm:col-span-2 mt-2 flex flex-col items-center gap-3">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-color2 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-color2/30 transition hover:bg-[#0a3450] active:scale-[0.99] sm:w-auto sm:px-10"
              >
                Send <FaPaperPlane className="text-xs" />
              </button>

              {submitted && (
                <p className="text-sm font-medium text-emerald-600">
                  Thank you! Your evaluation form has been submitted.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Page