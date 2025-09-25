// // src/pages/contact-us/contact-us.jsx
// import React from 'react';
// import { Button } from '@/components/ui/button';
// import { Card } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Container } from '@/components/common/container';

// const label = 'block text-sm font-medium text-foreground mb-2';
// const field = 'w-full';
// const select =
//   'w-full px-3 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent';
// const sectionTitle = 'text-xl font-semibold '; // Changed: larger font + primary color
// const hr = 'border-t border-border/40 my-4';

// const ContactUs = () => {
//   return (
//     <div className="min-h-screen bg-background py-10">
//       <Container>
//         <div className="text-center mb-6">
//           <h1 className="text-3xl md:text-4xl font-bold ">
//             {' '}
//             {/* Changed: primary color */}
//             <span className="text-primary">Contact</span>Us
//           </h1>
//           <p className="text-sm md:text-base text-muted-foreground mt-2">
//             Thank you for taking the time to contact us. We look forward to
//             connecting with you soon.
//           </p>
//         </div>

//         <div className="max-w-3xl mx-auto">
//           <Card className="p-6 md:p-8 bg-card/70 border border-border/60">
//             {/* Personal Information */}
//             <p className={sectionTitle}>Personal Information</p>
//             <div className={hr} />

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className={label}>Name *</label>
//                 <Input className={field} placeholder="John Smith" required />
//               </div>
//               <div>
//                 <label className={label}>Email *</label>
//                 <Input
//                   className={field}
//                   type="email"
//                   placeholder="john@example.com"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="mt-4">
//               <label className={label}>Phone Number *</label>
//               <Input
//                 className={field}
//                 type="tel"
//                 placeholder="+91XXXXXXXXXX"
//                 required
//               />
//             </div>

//             {/* Reason for Contact */}
//             <p className={`${sectionTitle} mt-8`}>Reason for Contact</p>
//             <div className={hr} />

//             <div>
//               <label className={label}>Reason to contact us *</label>
//               <select className={select} defaultValue="">
//                 <option value="" disabled>
//                   Select a reason
//                 </option>
//                 <option>Schedule a demo</option>
//                 <option>Pricing</option>
//                 <option>Technical support</option>
//                 <option>Partnership</option>
//                 <option>Other</option>
//               </select>
//             </div>

//             {/* Usage Information */}
//             <p className={`${sectionTitle} mt-8`}>Usage Information</p>
//             <div className={hr} />

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className={label}>
//                   What is the monthly call volume? *
//                 </label>
//                 <select className={select} defaultValue="">
//                   <option value="" disabled>
//                     Select call volume
//                   </option>
//                   <option>0 - 1,000</option>
//                   <option>1,001 - 10,000</option>
//                   <option>10,001 - 50,000</option>
//                   <option>50,001 - 250,000</option>
//                   <option>250,000+</option>
//                 </select>
//               </div>
//               <div>
//                 <label className={label}>What is your industry? *</label>
//                 <Input
//                   className={field}
//                   placeholder="e.g., healthcare, finance, etc."
//                   required
//                 />
//               </div>
//             </div>

//             <div className="mt-4">
//               <label className={label}>
//                 Please explain a little more about your use‑case *
//               </label>
//               <Textarea
//                 className="w-full resize-none"
//                 rows={4}
//                 placeholder="e.g., outgoing calls for lead generation, incoming calls for appointment booking, etc."
//                 required
//               />
//             </div>

//             {/* How did you find us? */}
//             <p className={`${sectionTitle} mt-8`}>How did you find us?</p>
//             <div className={hr} />

//             <div>
//               <label className={label}>How did you hear about us? *</label>
//               <p className="text-sm text-muted-foreground mb-3">
//                 Being a startup, it's always good to know the marketing channels
//                 that are working better than others. This way, we can invest in
//                 the ones that work and give you - our valued users - more value
//                 for your money.
//               </p>
//               <select className={select} defaultValue="">
//                 <option value="" disabled>
//                   Select a channel
//                 </option>
//                 <option>Google Search</option>
//                 <option>LinkedIn</option>
//                 <option>YouTube</option>
//                 <option>Referral</option>
//                 <option>Other</option>
//               </select>
//             </div>

//             {/* Submit */}
//             <div className="mt-8">
//               <Button className="w-full h-11 bg-primary hover:bg-primary/90 text-white">
//                 Submit Request
//               </Button>
//             </div>
//           </Card>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default ContactUs;

// ----version 2:--- by doing form validation ---------------------

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Container } from '@/components/common/container';

const label = 'block text-sm font-medium text-foreground mb-2';
const field = 'w-full';
const select =
  'w-full px-3 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent';
const sectionTitle = 'text-xl font-semibold ';
const hr = 'border-t border-border/40 my-4';
const errorStyles = 'text-red-500 blur-[0.4px] text-sm mt-1';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    callVolume: '',
    industry: '',
    useCase: '',
    channel: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.reason) newErrors.reason = 'Please select a reason';
    if (!formData.callVolume)
      newErrors.callVolume = 'Please select call volume';
    if (!formData.industry.trim()) newErrors.industry = 'Industry is required';
    if (!formData.useCase.trim()) newErrors.useCase = 'Use case is required';
    if (!formData.channel) newErrors.channel = 'Please select a channel';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Handle form submission here
      console.log('Form submitted:', formData);
      alert('Thank you! We will contact you soon.');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        reason: '',
        callVolume: '',
        industry: '',
        useCase: '',
        channel: '',
      });
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-10">
      <Container>
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-primary">Contact</span> Us
          </h1>
          <p className="text-sm md:text-base text-muted-foreground  mt-2">
            Thank you for taking the time to contact us. We look forward to
            connecting with you soon.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-6 md:p-8 bg-card/70 border border-border/60">
            <form onSubmit={handleSubmit}>
              {/* Personal Information */}
              <p className={sectionTitle}>Personal Information</p>
              <div className={hr} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={label}>Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={field}
                    placeholder="John Smith"
                  />
                  {errors.name && <p className={errorStyles}>{errors.name}</p>}
                </div>
                <div>
                  <label className={label}>Email *</label>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={field}
                    type="email"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className={errorStyles}>{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label className={label}>Phone Number *</label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={field}
                  type="tel"
                  placeholder="+91XXXXXXXXXX"
                />
                {errors.phone && <p className={errorStyles}>{errors.phone}</p>}
              </div>

              {/* Reason for Contact */}
              <p className={`${sectionTitle} mt-8`}>Reason for Contact</p>
              <div className={hr} />

              <div>
                <label className={label}>Reason to contact us *</label>
                <select
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  className={select}
                >
                  <option value="">Select a reason</option>
                  <option value="demo">Schedule a demo</option>
                  <option value="pricing">Pricing</option>
                  <option value="support">Technical support</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
                {errors.reason && (
                  <p className={errorStyles}>{errors.reason}</p>
                )}
              </div>

              {/* Usage Information */}
              <p className={`${sectionTitle} mt-8`}>Usage Information</p>
              <div className={hr} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={label}>
                    What is the monthly call volume? *
                  </label>
                  <select
                    name="callVolume"
                    value={formData.callVolume}
                    onChange={handleInputChange}
                    className={select}
                  >
                    <option value="">Select call volume</option>
                    <option value="0-1000">0 - 1,000</option>
                    <option value="1001-10000">1,001 - 10,000</option>
                    <option value="10001-50000">10,001 - 50,000</option>
                    <option value="50001-250000">50,001 - 250,000</option>
                    <option value="250000+">250,000+</option>
                  </select>
                  {errors.callVolume && (
                    <p className={errorStyles}>{errors.callVolume}</p>
                  )}
                </div>
                <div>
                  <label className={label}>What is your industry? *</label>
                  <Input
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className={field}
                    placeholder="e.g., healthcare, finance, etc."
                  />
                  {errors.industry && (
                    <p className={errorStyles}>{errors.industry}</p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label className={label}>
                  Please explain a little more about your use‑case *
                </label>
                <Textarea
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleInputChange}
                  className="w-full resize-none"
                  rows={4}
                  placeholder="e.g., outgoing calls for lead generation, incoming calls for appointment booking, etc."
                />
                {errors.useCase && (
                  <p className={errorStyles}>{errors.useCase}</p>
                )}
              </div>

              {/* How did you find us? */}
              <p className={`${sectionTitle} mt-8`}>How did you find us?</p>
              <div className={hr} />

              <div>
                <label className={label}>How did you hear about us? *</label>
                <p className="text-sm text-muted-foreground mb-3">
                  Being a startup, it's always good to know the marketing
                  channels that are working better than others. This way, we can
                  invest in the ones that work and give you - our valued users -
                  more value for your money.
                </p>
                <select
                  name="channel"
                  value={formData.channel}
                  onChange={handleInputChange}
                  className={select}
                >
                  <option value="">Select a channel</option>
                  <option value="google">Google Search</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="youtube">YouTube</option>
                  <option value="referral">Referral</option>
                  <option value="other">Other</option>
                </select>
                {errors.channel && (
                  <p className={errorStyles}>{errors.channel}</p>
                )}
              </div>

              {/* Submit */}
              <div className="mt-8">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 bg-primary hover:bg-primary/90 text-white disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
