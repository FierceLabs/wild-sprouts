"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import {
  FaCheckCircle,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa"

export default function ContactPage() {
  const searchParams = useSearchParams()

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    childAge: "",
    interest: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  // Auto-select interest from URL parameter
  useEffect(() => {
    const interest = searchParams.get("interest")
    if (interest === "tour") {
      setFormState(prev => ({ ...prev, interest: "tour" }))
    }
  }, [searchParams])

  const handleChange = e => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const formData = new URLSearchParams()
    formData.append("form-name", "contact")
    Object.entries(formState).forEach(([key, value]) => {
      formData.append(key, value)
    })

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormState({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          childAge: "",
          interest: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    }

    setIsSubmitting(false)
  }

  return (
    <div className="bg-beige-b1 pt-32">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container px-4 mx-auto text-center">
          <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-orange-o1 font-medium uppercase rounded-2xl">
            Get In Touch
          </span>
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-g1 font-bold font-serif tracking-tighter">
            Contact Us
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-g1 font-medium">
            We'd love to hear from you! Whether you're interested in enrollment,
            have questions about our programs, or want to schedule a tour, we're
            here to help.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            {/* Contact Form */}
            <div className="w-full lg:w-2/3 px-4 mb-12 lg:mb-0">
              <div className="bg-beige-b1 rounded-2xl p-8">
                <h2 className="mb-6 text-3xl md:text-4xl text-gray-g1 font-bold font-serif">
                  Send Us a Message
                </h2>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg flex items-center">
                    <FaCheckCircle className="text-green-600 text-xl mr-3" />
                    <div>
                      <p className="font-semibold text-green-800">
                        Message sent successfully!
                      </p>
                      <p className="text-green-700 text-sm">
                        We'll get back to you as soon as possible.
                      </p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-400 rounded-lg">
                    <p className="font-semibold text-red-800">
                      Something went wrong.
                    </p>
                    <p className="text-red-700 text-sm">
                      Please try again or email us directly.
                    </p>
                  </div>
                )}

                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Honeypot field for spam prevention */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don't fill this out: <input name="bot-field" />
                    </label>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block mb-2 text-sm font-semibold text-gray-g1"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formState.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-coolGray-900 border border-coolGray-300 rounded-lg focus:ring-2 focus:ring-green-g1 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block mb-2 text-sm font-semibold text-gray-g1"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formState.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-coolGray-900 border border-coolGray-300 rounded-lg focus:ring-2 focus:ring-green-g1 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-semibold text-gray-g1"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-coolGray-900 border border-coolGray-300 rounded-lg focus:ring-2 focus:ring-green-g1 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-semibold text-gray-g1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-coolGray-900 border border-coolGray-300 rounded-lg focus:ring-2 focus:ring-green-g1 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="childAge"
                      className="block mb-2 text-sm font-semibold text-gray-g1"
                    >
                      Child's Age
                    </label>
                    <select
                      id="childAge"
                      name="childAge"
                      value={formState.childAge}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-coolGray-900 border border-coolGray-300 rounded-lg focus:ring-2 focus:ring-green-g1 focus:border-transparent"
                    >
                      <option value="">Select age</option>
                      <option value="2">2 years old</option>
                      <option value="3">3 years old</option>
                      <option value="4">4 years old</option>
                      <option value="5">5 years old</option>
                      <option value="6">6 years old</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="block mb-2 text-sm font-semibold text-gray-g1"
                    >
                      I'm interested in... *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formState.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-coolGray-900 border border-coolGray-300 rounded-lg focus:ring-2 focus:ring-green-g1 focus:border-transparent"
                    >
                      <option value="">Please select</option>
                      <option value="tour">Scheduling a tour</option>
                      <option value="enrollment">Enrollment information</option>
                      <option value="programs">Learning about programs</option>
                      <option value="general">General questions</option>
                      <option value="employment">
                        Employment opportunities
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-semibold text-gray-g1"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-coolGray-900 border border-coolGray-300 rounded-lg focus:ring-2 focus:ring-green-g1 focus:border-transparent"
                      placeholder="Tell us a bit about your family and what you're looking for..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 text-lg font-semibold text-white bg-green-g1 hover:bg-[#5a6b50] disabled:bg-gray-400 disabled:cursor-not-allowed rounded-lg shadow-lg transition-all duration-500"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="w-full lg:w-1/3 px-4">
              <div className="space-y-6">
                {/* Contact Info Card */}
                <div className="bg-gray-g1 rounded-2xl p-6 text-white">
                  <h3 className="text-2xl font-bold font-serif mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-start mb-2">
                        <FaEnvelope className="text-white mr-3 text-xl mt-1" />
                        <div>
                          <p className="font-semibold">Email</p>
                          <a
                            href="mailto:hello@wildsprouts.com"
                            className="text-orange-o1 hover:underline"
                          >
                            hello@wildsprouts.com
                          </a>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start mb-2">
                        <FaMapMarkerAlt className="text-white mr-3 text-xl mt-1" />
                        <div>
                          <p className="font-semibold">Address</p>
                          <p className="text-gray-300">
                            2125 E. Star Ln
                            <br />
                            Meridian, ID 83646
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start mb-2">
                        <FaClock className="text-white mr-3 text-xl mt-1" />
                        <div>
                          <p className="font-semibold">Program Hours</p>
                          <p className="text-gray-300">
                            Monday - Thursday
                            <br />
                            9:30 AM - 1:30 PM
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start mb-2">
                        <FaPhone className="text-white mr-3 text-xl mt-1" />
                        <div>
                          <p className="font-semibold">School Year</p>
                          <p className="text-gray-300">
                            September - May
                            <br />
                            (Labor Day to Memorial Day)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Brightwheel Link */}
                <div className="bg-orange-o1 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">Current Families</h3>
                  <p className="mb-4 text-sm">
                    Access daily updates, photos, and communicate with staff
                    through Brightwheel.
                  </p>
                  <a
                    href="https://mybrightwheel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full py-3 px-4 text-center bg-white text-orange-o1 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Login to Brightwheel →
                  </a>
                </div>

                {/* Social Media */}
                <div className="bg-beige-b1 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-g1 mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/wildsproutshomesteadschool"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-gray-g1 text-white rounded-full hover:bg-green-g1 transition-all duration-500"
                    >
                      <FaFacebookF className="text-lg" />
                    </a>
                    <a
                      href="https://www.instagram.com/wildsproutshomesteadschool/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-gray-g1 text-white rounded-full hover:bg-green-g1 transition-all duration-500"
                    >
                      <FaInstagram className="text-lg" />
                    </a>
                  </div>
                  <p className="mt-4 text-sm text-coolGray-500">
                    See what's happening at the homestead! Follow us for daily
                    updates, photos, and nature education tips.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-20 bg-gray-g1">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="mb-6 text-4xl md:text-5xl text-white font-bold font-serif tracking-tighter">
              Visit Our Homestead
            </h2>
            <p className="text-lg text-gray-300 font-medium">
              We're located at 2125 E. Star Ln in Meridian, Idaho. Tours are
              available by appointment during our school year (September through
              May) - we'd love to show you around!
            </p>
          </div>

          {/* Google Maps Embed */}
          <div className="bg-beige-b1 rounded-2xl p-8">
            <div className="w-full h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.5!2d-116.35!3d43.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s2125+E+Star+Ln%2C+Meridian%2C+ID+83646!5e0!3m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wild Sprouts Homestead School - 2125 E. Star Ln, Meridian, ID 83646"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Scheduling Section */}
      <section id="tour" className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-green-g1 font-medium uppercase rounded-2xl">
                Schedule a Visit
              </span>
              <h2 className="mb-6 text-4xl md:text-5xl text-gray-g1 font-bold font-serif tracking-tighter">
                Come Visit Us
              </h2>
              <p className="text-lg md:text-xl text-coolGray-500 font-medium">
                The best way to experience Wild Sprouts is to visit us in
                person. Tours typically last about an hour and give you a chance
                to see our homestead, meet our animals, and ask questions.
              </p>
            </div>

            <div className="bg-beige-b1 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-g1 mb-6">
                What to Expect During Your Tour
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-green-g1 mr-3 text-xl font-bold">
                    1.
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-g1 mb-1">
                      Welcome & Introduction
                    </h4>
                    <p className="text-coolGray-500">
                      We'll start with a brief overview of our philosophy and
                      approach to nature-based education.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-green-g1 mr-3 text-xl font-bold">
                    2.
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-g1 mb-1">
                      Homestead Tour
                    </h4>
                    <p className="text-coolGray-500">
                      Visit our gardens, animal areas, outdoor classroom spaces,
                      and indoor facilities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-green-g1 mr-3 text-xl font-bold">
                    3.
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-g1 mb-1">
                      Meet the Animals
                    </h4>
                    <p className="text-coolGray-500">
                      Say hello to Cooper the horse, sheep Marvin and Maynard,
                      Roo and the girls, bunnies Leo and Tootsie, Dixie the cat,
                      and Bear the dog (your child is welcome!).
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-green-g1 mr-3 text-xl font-bold">
                    4.
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-g1 mb-1">
                      Program Details & Q&A
                    </h4>
                    <p className="text-coolGray-500">
                      Learn about schedules, curriculum, tuition, and have all
                      your questions answered.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg">
                <p className="text-sm text-coolGray-600 mb-2">
                  <strong>Tours Available:</strong> Tuesday and Thursday
                  mornings at 10:00 AM, or by special appointment
                </p>
                <p className="text-sm text-coolGray-600">
                  <strong>Please note:</strong> We limit tours to preserve the
                  calm learning environment for our current students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-beige-b1">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-6 text-4xl md:text-5xl text-gray-g1 font-bold font-serif tracking-tighter">
            Have Questions?
          </h2>
          <p className="mb-8 text-lg md:text-xl text-gray-g1 font-medium max-w-2xl mx-auto">
            Check out our FAQ page for answers to common questions, or reach out
            directly - we're always happy to chat!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#faq"
              className="inline-block py-5 px-7 text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-g1 hover:bg-[#5a6b50] focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-g1 rounded-md shadow-sm transition-all duration-500"
            >
              View FAQ
            </a>
            <a
              href="/programs"
              className="inline-block py-5 px-7 text-base md:text-lg leading-4 text-coolGray-800 hover:text-white font-medium text-center bg-white hover:bg-green-g1 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm transition-all duration-500"
            >
              See Our Day
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
