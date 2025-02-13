import './contactUs.css';
import { Mail, Phone, Package } from 'lucide-react';
import { useState, useCallback } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    message: ""
  });

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        if (!/^[a-zA-Z\s]*$/.test(value)) return 'Name can only contain letters and spaces';
        return '';

      case 'email':
        if (!value) return 'Email is required';
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          return 'Invalid email address';
        }
        return '';

      case 'phone':
        if (!value) return 'Phone number is required';
        if (!/^\d{10}$/.test(value)) {
          return 'Phone number must be exactly 10 digits';
        }
        return '';

      case 'package':
        if (!value) return 'Please select a package';
        return '';

      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';

      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // For phone field, only allow numeric values
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '');
      if (numericValue.length <= 10) { // Limit to 10 digits
        setFormData({ ...formData, [name]: numericValue });
        const error = validateField(name, numericValue);
        setErrors(prev => ({ ...prev, [name]: error }));
      }
      return;
    }
    
    setFormData({ ...formData, [name]: value });
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;
    let errorMessages = [];

    // Validate all fields
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      newErrors[key] = error;
      if (error) {
        isValid = false;
        errorMessages.push(error);
      }
    });

    setErrors(newErrors);

    if (!isValid) {
      // Show toast with the first error message
      toast.error(errorMessages[0], {
        duration: 4000,
        position: 'top-center',
      });
    }

    return isValid;
  };

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const loadingToast = toast.loading('Sending your message...');

    try {
      const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe6vhJPck06vY_89qvlDWixQqAt7OvLsgNqzlAxazz-olOZJQ/formResponse";
      
      const formBody = new URLSearchParams({
        "entry.2005620554": formData.name,
        "entry.1045781291": formData.email,
        "entry.1166974658": formData.phone,
        "entry.1065046570": formData.package,
        "entry.839337160": formData.message,
      });

      await fetch(`${formUrl}?${formBody.toString()}`, {
        method: "GET",
        mode: "no-cors",
      });
      
      toast.dismiss(loadingToast);
      toast.success('Thank you! Your message has been sent successfully.', {
        duration: 5000,
        position: 'top-center',
        style: {
          background: '#4F46E5',
          color: '#fff',
        },
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        package: "",
        message: ""
      });
      setErrors({
        name: "",
        email: "",
        phone: "",
        package: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.dismiss(loadingToast);
      toast.error('There was an error sending your message. Please try again.', {
        duration: 5000,
        position: 'top-center',
      });
    }
  }, [formData, validateForm]);

  return (
    <>
      {/* Toast Container */}
      <Toaster />
      
      <div className="min-h-screen bg-custom-gradient-2 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
            <div className="text-center space-y-2">
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Contact Us
              </h1>
              <p className="text-gray-600">Fill out this short form and we will contact you the same business day.</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              {/* Name Field */}
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`block w-full px-4 py-3 rounded-lg border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Email and Phone Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4" /> Email
                    </span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={`block w-full px-4 py-3 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
                <div className="relative">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4" /> Phone Number
                    </span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter 10 digit phone number"
                    pattern="\d*"
                    inputMode="numeric"
                    maxLength="10"
                    className={`block w-full px-4 py-3 rounded-lg border ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    } shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Package Selection */}
              <div className="relative">
                <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-1">
                  <span className="flex items-center gap-2">
                    <Package className="w-4 h-4" /> Select a Package
                  </span>
                </label>
                <select
                  id="package"
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  className={`block w-full px-4 py-3 rounded-lg border ${
                    errors.package ? 'border-red-500' : 'border-gray-300'
                  } shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all appearance-none bg-white`}
                >
                  <option value="">Select a service</option>
                  <option value="Airport Limousine Service">Airport Limousine Service</option>
                  <option value="Wedding Limousine Service">Wedding Limousine Service</option>
                  <option value="Prom Limousine Service">Prom Limousine Service</option>
                  <option value="winery">Winery Tours</option>
                  <option value="Winery Tours">Nights Out on the Town</option>
                  <option value="Bachelor and Bachelorette Parties">Bachelor and Bachelorette Parties</option>
                  <option value="Corporate">Corporate</option>
                </select>
                {errors.package && (
                  <p className="mt-1 text-sm text-red-600">{errors.package}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="relative">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">More Info</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us more about your event..."
                  className={`block w-full px-4 py-3 rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
