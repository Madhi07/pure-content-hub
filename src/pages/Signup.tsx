import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    company: "",
    jobTitle: "",
    industry: "",
    companySize: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    website: "",
    howDidYouHear: "",
    projectInterest: [],
    budget: "",
    marketingEmails: false,
    productUpdates: true,
    termsAccepted: false,
    privacyAccepted: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'projectInterest') {
        setFormData(prev => ({
          ...prev,
          projectInterest: checked 
            ? [...prev.projectInterest, value]
            : prev.projectInterest.filter(item => item !== value)
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: checked
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    if (!formData.termsAccepted || !formData.privacyAccepted) {
      alert("Please accept the terms and privacy policy!");
      return;
    }

    // Handle signup logic here
    console.log("Signup attempt:", formData);
    alert("Account created successfully! Please check your email for verification.");
  };

  const projectInterests = [
    "Web Development",
    "Mobile App Development",
    "Cloud Solutions",
    "Data Analytics",
    "AI & Machine Learning",
    "Cybersecurity",
    "Digital Transformation",
    "Consultation"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 bg-gradient-to-br from-surface-primary to-surface-secondary py-12">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-text-primary mb-4">Create Your Account</h1>
              <p className="text-xl text-text-secondary">Join TechFlow and start transforming your business today</p>
            </div>

            {/* Signup Form */}
            <div className="card p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h2 className="text-xl font-semibold text-text-primary mb-6">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-text-primary mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-text-primary mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="Enter your last name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                </div>

                {/* Account Security */}
                <div>
                  <h2 className="text-xl font-semibold text-text-primary mb-6">Account Security</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-text-primary mb-2">
                        Password *
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="Create a strong password"
                        minLength={8}
                      />
                      <p className="text-xs text-text-muted mt-1">Must be at least 8 characters long</p>
                    </div>
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-text-primary mb-2">
                        Confirm Password *
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="Confirm your password"
                      />
                    </div>
                  </div>
                </div>

                {/* Company Information */}
                <div>
                  <h2 className="text-xl font-semibold text-text-primary mb-6">Company Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="jobTitle" className="block text-sm font-medium text-text-primary mb-2">
                        Job Title
                      </label>
                      <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="Your job title"
                      />
                    </div>
                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-text-primary mb-2">
                        Industry
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">Select your industry</option>
                        <option value="technology">Technology</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="finance">Finance & Banking</option>
                        <option value="retail">Retail & E-commerce</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="education">Education</option>
                        <option value="real-estate">Real Estate</option>
                        <option value="consulting">Consulting</option>
                        <option value="nonprofit">Non-Profit</option>
                        <option value="government">Government</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="companySize" className="block text-sm font-medium text-text-primary mb-2">
                        Company Size
                      </label>
                      <select
                        id="companySize"
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">Select company size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="501-1000">501-1000 employees</option>
                        <option value="1000+">1000+ employees</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="website" className="block text-sm font-medium text-text-primary mb-2">
                        Company Website
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="https://www.yourcompany.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Location Information */}
                <div>
                  <h2 className="text-xl font-semibold text-text-primary mb-6">Location</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-text-primary mb-2">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">Select country</option>
                        <option value="us">United States</option>
                        <option value="ca">Canada</option>
                        <option value="uk">United Kingdom</option>
                        <option value="au">Australia</option>
                        <option value="de">Germany</option>
                        <option value="fr">France</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-text-primary mb-2">
                        State/Province
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="State or province"
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-text-primary mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium text-text-primary mb-2">
                        ZIP/Postal Code
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="ZIP code"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Interests */}
                <div>
                  <h2 className="text-xl font-semibold text-text-primary mb-6">Project Interests</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projectInterests.map((interest) => (
                      <div key={interest} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          id={interest}
                          name="projectInterest"
                          value={interest}
                          checked={formData.projectInterest.includes(interest)}
                          onChange={handleChange}
                          className="w-4 h-4 text-brand-blue border-surface-tertiary rounded focus:ring-brand-blue"
                        />
                        <label htmlFor={interest} className="text-sm text-text-secondary">
                          {interest}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h2 className="text-xl font-semibold text-text-primary mb-6">Additional Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-text-primary mb-2">
                        Expected Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="over-100k">Over $100,000</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="howDidYouHear" className="block text-sm font-medium text-text-primary mb-2">
                        How did you hear about us?
                      </label>
                      <select
                        id="howDidYouHear"
                        name="howDidYouHear"
                        value={formData.howDidYouHear}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">Select an option</option>
                        <option value="google-search">Google Search</option>
                        <option value="social-media">Social Media</option>
                        <option value="referral">Referral from colleague</option>
                        <option value="advertisement">Online Advertisement</option>
                        <option value="event">Conference/Event</option>
                        <option value="partner">Partner Company</option>
                        <option value="blog">Blog/Article</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Preferences */}
                <div>
                  <h2 className="text-xl font-semibold text-text-primary mb-6">Communication Preferences</h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="marketingEmails"
                        name="marketingEmails"
                        checked={formData.marketingEmails}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 text-brand-blue border-surface-tertiary rounded focus:ring-brand-blue"
                      />
                      <label htmlFor="marketingEmails" className="text-sm text-text-secondary">
                        I would like to receive marketing emails about TechFlow's services, industry insights, and special offers.
                      </label>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="productUpdates"
                        name="productUpdates"
                        checked={formData.productUpdates}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 text-brand-blue border-surface-tertiary rounded focus:ring-brand-blue"
                      />
                      <label htmlFor="productUpdates" className="text-sm text-text-secondary">
                        Send me product updates and important account notifications.
                      </label>
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div>
                  <h2 className="text-xl font-semibold text-text-primary mb-6">Terms & Conditions</h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="termsAccepted"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                        required
                        className="mt-1 w-4 h-4 text-brand-blue border-surface-tertiary rounded focus:ring-brand-blue"
                      />
                      <label htmlFor="termsAccepted" className="text-sm text-text-secondary">
                        I agree to TechFlow's <Link to="/terms" className="text-brand-blue hover:text-brand-purple transition-colors">Terms of Service</Link> *
                      </label>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="privacyAccepted"
                        name="privacyAccepted"
                        checked={formData.privacyAccepted}
                        onChange={handleChange}
                        required
                        className="mt-1 w-4 h-4 text-brand-blue border-surface-tertiary rounded focus:ring-brand-blue"
                      />
                      <label htmlFor="privacyAccepted" className="text-sm text-text-secondary">
                        I acknowledge that I have read and understood TechFlow's <Link to="/privacy" className="text-brand-blue hover:text-brand-purple transition-colors">Privacy Policy</Link> *
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Create Account
                </button>
              </form>

              {/* Login Link */}
              <div className="mt-8 text-center">
                <p className="text-text-secondary">
                  Already have an account?{' '}
                  <Link to="/login" className="text-brand-blue font-medium hover:text-brand-purple transition-colors">
                    Sign in here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Signup;