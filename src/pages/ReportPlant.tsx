import React, { useState } from 'react';
import { Camera, MapPin, FileText, SendHorizonal } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  location: string;
  description: string;
  imageFile: File | null;
  imagePreview: string | null;
}

const ReportPlant: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    location: '',
    description: '',
    imageFile: null,
    imagePreview: null
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Check if file is an image
      if (!file.type.match('image.*')) {
        setError('Please select an image file');
        return;
      }
      
      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('File is too large. Please select an image under 5MB');
        return;
      }
      
      setError('');
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setFormData({
            ...formData,
            imageFile: file,
            imagePreview: event.target.result as string
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.location || !formData.description) {
      setError('Please fill in all required fields');
      return;
    }
    
    if (!formData.imageFile) {
      setError('Please upload an image of the plant');
      return;
    }
    
    // In a real app, you would send this data to a server
    // For demo purposes, we'll just simulate a successful submission
    setTimeout(() => {
      setSubmitted(true);
      setError('');
      // Reset form data except for name and email
      setFormData({
        ...formData,
        location: '',
        description: '',
        imageFile: null,
        imagePreview: null
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-green-50 py-10 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-800">
          Report a Potential Invasive Plant
        </h1>
        <p className="text-xl text-center max-w-3xl mx-auto mb-12 text-gray-700">
          Found a plant you think might be invasive? Submit your information below to help scientists track these species!
        </p>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {submitted ? (
            <div className="p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <SendHorizonal className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-green-800">Thank You!</h2>
              <p className="text-lg mb-6 text-gray-700">
                Your plant report has been submitted successfully. Scientists will review your information to help track invasive species in Kentucky.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-colors"
              >
                Report Another Plant
              </button>
            </div>
          ) : (
            <div className="p-8">
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg">
                    {error}
                  </div>
                )}
                
                <div className="mb-6">
                  <h2 className="text-xl font-bold mb-4 text-green-800 flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Your Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address* (Parent's email if you're under 13)
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h2 className="text-xl font-bold mb-4 text-green-800 flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Plant Location & Details
                  </h2>
                  <div className="mb-4">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Where did you find it?* (Park name, street, or neighborhood)
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                      Plant Description* (What does it look like? How big is it?)
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4 text-green-800 flex items-center gap-2">
                    <Camera className="h-5 w-5" />
                    Upload a Photo
                  </h2>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    {formData.imagePreview ? (
                      <div className="mb-4">
                        <img 
                          src={formData.imagePreview} 
                          alt="Plant preview" 
                          className="max-h-64 mx-auto rounded-lg"
                        />
                        <button 
                          type="button"
                          onClick={() => setFormData({...formData, imageFile: null, imagePreview: null})}
                          className="mt-3 text-sm text-red-600 hover:text-red-800"
                        >
                          Remove Photo
                        </button>
                      </div>
                    ) : (
                      <div className="mb-4">
                        <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                          <Camera className="h-6 w-6 text-green-600" />
                        </div>
                        <p className="text-gray-700 mb-2">Upload a clear photo of the plant</p>
                        <p className="text-gray-500 text-sm">JPG, PNG or GIF files up to 5MB</p>
                      </div>
                    )}
                    <input
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <label 
                      htmlFor="image"
                      className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-green-700 transition-colors"
                    >
                      {formData.imagePreview ? 'Change Photo' : 'Select Photo'}
                    </label>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> By submitting this form, you agree to share your plant observations with scientists and researchers tracking invasive species in Kentucky. No personal information will be publicly shared.
                  </p>
                </div>
                
                <div className="text-center">
                  <button 
                    type="submit"
                    className="px-6 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-transform hover:scale-105"
                  >
                    Submit Plant Report
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportPlant;