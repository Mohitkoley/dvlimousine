import './contactUs.css';
import { Mail, Phone, Package } from 'lucide-react';

const ContactUs = () => {
  return (
    <>
      <div className="min-h-screen bg-custom-gradient-2 py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
              <div className="text-center space-y-2">
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  Contact Us
                </h1>
                <p className="text-gray-600">Fill out this short form and we will contact you the same business day.</p>
              </div>

              <form className="space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      required
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  />
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
                      placeholder="Enter your email"
                      required
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                      />
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
                      placeholder="Enter your phone number"
                      required
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                      />
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
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all appearance-none bg-white"
                  >
                      <option value="">Select a service</option>
                      <option value="airport">Airport Limousine Service</option>
                      <option value="wedding">Wedding Limousine Service</option>
                      <option value="prom">Prom Limousine Service</option>
                      <option value="winery">Winery Tours</option>
                      <option value="nightsOut">Nights Out on the Town</option>
                      <option value="bachelor">Bachelor and Bachelorette Parties</option>
                      <option value="corporate">Corporate</option>
                  </select>
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">More Info</label>
                  <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us more about your event..."
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none"
                  ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all transform hover:scale-[1.02]">
                  Submit Request
                  </button>
              </form>
              </div>
          </div>
      </div>
    </>
  );
};

export default ContactUs;



{/* <div className='ContactUsContainer'>
<div className="ContactBox xl:w-1/2 w-11/12">
  <div className="title text-gradient">Contact Us</div>
  <div className="formContainer text-xs xl:text-xl">
    <form>

      <div className="formGroup">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />
      </div>

    
      <div className="formGroup">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
      </div>

      
      <div className="formGroup">
        <label htmlFor="phone">Phone Number</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          placeholder="Enter your phone number" 
          pattern="^\+?[1-9]\d{1,14}$" 
          title="Please enter a valid phone number (e.g., +1234567890 or 1234567890)." 
          required 
        />
      </div>

      
      <div className="formGroup selectGroup">
        <label htmlFor="limousineService">Limousine Service</label>
        <div className="selectContainer">
          <select id="limousineService" name="limousineService" required>
            <option value="">Select a service</option>
            <option value="airport">Airport Limousine Service</option>
            <option value="wedding">Wedding Limousine Service</option>
            <option value="prom">Prom Limousine Service</option>
            <option value="winery">Winery Tours</option>
            <option value="nightsOut">Nights Out on the Town</option>
            <option value="bachelor">Bachelor and Bachelorette Parties</option>
            <option value="corporate">Corporate</option>
          </select>
        </div>
      </div>

     
      <div className="formGroup">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" placeholder="Enter your message" required></textarea>
      </div>

    
      <button type="submit" className="submitButton">Submit</button>
    </form>
  </div>
</div>
</div> */}
