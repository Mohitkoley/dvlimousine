import './contactUs.css';
import { Mail, Phone, Package } from 'lucide-react';
import { useCallback } from 'react';
import { Toaster } from 'react-hot-toast';
import { Button, Form, Input, Radio, Space, notification } from "antd";

const ContactUs = () => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  const onFinish = useCallback(
    async ({ name, email, phone, packages, message }) => {
      try {
        const formUrl =
          "https://docs.google.com/forms/d/e/1FAIpQLSe6vhJPck06vY_89qvlDWixQqAt7OvLsgNqzlAxazz-olOZJQ/formResponse";

        const formData = new URLSearchParams({
          "entry.2005620554": name,
          "entry.1045781291": email,
          "entry.1166974658": phone,
          "entry.1065046570": packages ?? "",
          "entry.839337160": message ?? "",
        });

        fetch(formUrl, {
          method: "POST",
          mode: "no-cors", // Needed to bypass CORS issues
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData,
        })
          .then(() =>
            api.success({
              message: "Your Request has been submitted successfully",
            }),
            form.resetFields()
          )
          .catch((error) => api.error({
            message: error.message,
          }));
      } catch (error) {
        api.error({
          message: error.message,
        });
      }
    },
    [api, form]
  );

  return (
    <>
      {/* Toast Container */}
      <Toaster />
      {contextHolder}
      <div className="min-h-screen bg-custom-gradient-2 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
            <div className="text-center space-y-2">
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Contact Us
              </h1>
              <p className="text-gray-600">Fill out this short form and we will contact you the same business day.</p>
            </div>

            <Form form={form} onFinish={onFinish} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <Form.Item name="name" rules={[{ required: true }]}>
                  <Input className={`block w-full px-4 py-3 rounded-lg border ${'border-gray-300'
                    } shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all`} />
                </Form.Item>
              </div>

              {/* Email and Phone Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4" /> Email
                    </span>
                  </label>
                  <Form.Item name="email" rules={[{ required: true }]}>
                    <Input className={`block w-full px-4 py-3 rounded-lg border ${'border-gray-300'
                      } shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all`} />
                  </Form.Item>
                </div>
                <div className="relative">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4" /> Phone Number
                    </span>
                  </label>
                  <Form.Item name="phone" rules={[{ required: true }]}>
                    <Input className={`block w-full px-4 py-3 rounded-lg border ${'border-gray-300'
                      } shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all`} />
                  </Form.Item>
                </div>
              </div>

              {/* Package Selection */}
              <div className="relative">
                <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-1">
                  <span className="flex items-center gap-2">
                    <Package className="w-4 h-4" /> Select a Service
                  </span>
                </label>
                <Form.Item name="packages" rules={[{ required: true }]}>
                  <Radio.Group className={`block w-full px-4 py-3 rounded-lg border ${'border-gray-300'
                    } shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all appearance-none bg-white`}>
                    <Space direction="vertical">
                      <Radio value="Airport Limousine Service">Airport Limousine Service</Radio>
                      <Radio value="Wedding Limousine Service">Wedding Limousine Service</Radio>
                      <Radio value="Prom Limousine Service">Prom Limousine Service</Radio>
                      <Radio value="Winery Tours">Winery Tours</Radio>
                      <Radio value="Nights Out on the Town">Nights Out on the Town</Radio>
                      <Radio value="Bachelor and Bachelorette Parties">Bachelor and Bachelorette Parties</Radio>
                      <Radio value="Corporate">Corporate</Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
              </div>

              {/* Message Field */}
              <div className="relative">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">More Info</label>
                <Form.Item name="message">
                  <Input className={`block w-full px-4 py-3 rounded-lg border ${'border-gray-300'
                    } shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all`} />
                </Form.Item>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <Button type="primary" className="inline-flex w-full justify-center py-6 px-10 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all" htmlType="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
