"use client"

import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useState } from "react"

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  category: yup.array().min(1, "Select at least one category"),
  languages: yup.array().min(1, "Select at least one language"),
  fee: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
})

const categories = ["Singer", "Dancer", "DJ", "Speaker"]
const languages = ["Hindi", "English", "Marathi", "Tamil"]
const feeRanges = ["₹5,000 - ₹10,000", "₹10,000 - ₹20,000", "₹20,000+"]

export default function ArtistForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      category: [],
      languages: [],
    },
  })

  const onSubmit = (data: any) => {
    console.log("Submitted Data:", data)
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {submitted && (
        <div className="p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 rounded-lg flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Artist submitted successfully!
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("name")}
            className={`block w-full rounded-lg border ${errors.name ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-indigo-500'} focus:ring-2 focus:border-transparent p-2.5 bg-white dark:bg-gray-700`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
          )}
        </div>

        {/* Location Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("location")}
            className={`block w-full rounded-lg border ${errors.location ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-indigo-500'} focus:ring-2 focus:border-transparent p-2.5 bg-white dark:bg-gray-700`}
          />
          {errors.location && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.location.message}</p>
          )}
        </div>
      </div>

      {/* Bio Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Bio <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register("bio")}
          rows={4}
          className={`block w-full rounded-lg border ${errors.bio ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-indigo-500'} focus:ring-2 focus:border-transparent p-2.5 bg-white dark:bg-gray-700`}
        />
        {errors.bio && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.bio.message}</p>
        )}
      </div>

      {/* Category Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Category <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center space-x-2 p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer">
              <input
                type="checkbox"
                value={cat}
                {...register("category")}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-500 rounded"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">{cat}</span>
            </label>
          ))}
        </div>
        {errors.category && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.category.message}</p>
        )}
      </div>

      {/* Languages Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Languages Spoken <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {languages.map((lang) => (
            <label key={lang} className="flex items-center space-x-2 p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer">
              <input
                type="checkbox"
                value={lang}
                {...register("languages")}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-500 rounded"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">{lang}</span>
            </label>
          ))}
        </div>
        {errors.languages && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.languages.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Fee Range Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Fee Range <span className="text-red-500">*</span>
          </label>
          <select 
            {...register("fee")} 
            className={`block w-full rounded-lg border ${errors.fee ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-indigo-500'} focus:ring-2 focus:border-transparent p-2.5 bg-white dark:bg-gray-700`}
          >
            <option value="">Select Fee Range</option>
            {feeRanges.map((fee, i) => (
              <option key={i} value={fee}>{fee}</option>
            ))}
          </select>
          {errors.fee && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.fee.message}</p>
          )}
        </div>

        {/* Profile Image Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Profile Image (Optional)
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600/50">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Upload photo</p>
              </div>
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
        >
          Complete Registration
        </button>
      </div>
    </form>
  )
}