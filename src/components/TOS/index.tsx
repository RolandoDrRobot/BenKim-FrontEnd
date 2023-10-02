import React, { useContext }  from 'react';
import Navbar from '../Navbar/index';
import FooterApp from '../FooterApp/index';
import './main.css';

function TOS() {

  return (
    <>
      <Navbar />
      <section className="TOS py-5 my-4">
        <div className="container py-5">
          <div className="text-left pb-5">
            <strong className='pb-4'>
              Last Updated: 10/02/2023
            </strong>
            <h2><span>Terms of Service</span></h2> 
            <p> 
              This App is intended for use by testers who are interested in exploring and providing feedback on its functionality. Please read these Terms of Service carefully before using the App.
              <br /><br />
              <strong className='d-block mb-2'>
                Acceptance of Terms
              </strong>
              By using the App, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the App.
              <br /><br />
              <strong className='d-block mb-2'>
                Access and Use
              </strong>
              a. You must be a registered tester to access and use the App.
              b. You are responsible for maintaining the confidentiality of your account information and password.
              c. You must not share your account credentials or access to the App with others.
              d. You agree to provide accurate, current, and complete information during the registration process.
              <br /><br />
              <strong className='d-block mb-2'>
                Purpose of the App
              </strong>
              a. The App is designed solely for the purpose of storing and managing information related to Bitcoin transactions.
              b. The App is not intended for commercial use or financial transactions involving actual Bitcoin.
              <br /><br />
              <strong className='d-block mb-2'>
                Feedback
              </strong>
              a. Testers are encouraged to provide feedback, suggestions, and bug reports to help improve the App.
              b. All feedback and suggestions provided to the App are considered non-confidential and can be used at our discretion for development and improvement purposes.
              <br /><br />
              <strong className='d-block mb-2'>
                Intellectual Property
              </strong>     
              a. All content, including but not limited to text, graphics, logos, and software, provided in the App is the property of Rolando Arguello and Monster Bitcions.
              b. You may not reproduce, distribute, or create derivative works from any content within the App without our prior written consent.
              <br /><br />
              <strong className='d-block mb-2'>
                Termination
              </strong>
              a. We reserve the right to terminate or suspend your access to the App at our discretion, without notice, for any reason.
              b. Upon termination, all provisions of these Terms which by their nature should survive termination will survive, including but not limited to intellectual property rights and limitations of liability.
              <br /><br />
              <strong className='d-block mb-2'>
                Limitation of Liability
              </strong>
              a. The App is provided "as is" and "as available," without any warranties, express or implied.
              b. We will not be liable for any indirect, consequential, incidental, punitive, or special damages arising out of or in connection with your use of the App.
              <br /><br />
              <strong className='d-block mb-2'>
                Modifications to Terms
              </strong>
              a. We may update and modify these Terms at any time, and such changes will be effective upon posting on the App.
              b. It is your responsibility to review these Terms periodically for any updates or changes.
              <br /><br />
              <strong className='d-block mb-2'>
                Governing Law
              </strong>
              These Terms shall be governed by and construed in accordance with the laws of America, Europe and Asia, without regard to its conflict of law principles.
            </p>
          </div>
          <div className="text-left">
            <h2><span>Privacy Policy</span></h2> 
            <p> 
              This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our app. Please take the time to read this Privacy Policy carefully.
              <br /><br />
              <strong className='d-block mb-2'>
                Information We Collect
              </strong>
              a. User-Provided Information: When you use Monster Bitcoins, you may provide us with information related to Bitcoin transactions. This information may include transaction details, wallet addresses, and any other data related to your Bitcoin activities within the app.
              <br /><br />
              <strong className='d-block mb-2'>
                Use of Information
              </strong>
              a. Testing and Improvement: We collect and use the information you provide solely for the purpose of testing and improving the functionality of Monster Bitcoins. This includes identifying and fixing bugs, enhancing features, and optimizing performance.
              <br /><br />
              <strong className='d-block mb-2'>
                Data Security
              </strong>
              a. Data Protection: We take reasonable measures to protect the information you provide from unauthorized access, disclosure, alteration, or destruction. However, please be aware that no method of data transmission over the internet or electronic storage is completely secure.
              <br /><br />
              <strong className='d-block mb-2'>
                Third-Party Services
              </strong>
              a. No Sharing: We do not share the information you provide through Monster Bitcoins with third-party services, advertisers, or other external entities.
              <br /><br />
              <strong className='d-block mb-2'>
                Cookies and Analytics
              </strong>     
              a. Usage Data: Monster Bitcoins may use cookies and similar tracking technologies to collect usage data for the purpose of analyzing and improving our app's performance. This data is aggregated and does not personally identify you.
              <br /><br />
              <strong className='d-block mb-2'>
                Children's Privacy
              </strong>
              a. Not Intended for Children: Monster Bitcoins is not intended for use by individuals under the age of 18. We do not knowingly collect or solicit personal information from children.
              <br /><br />
              <strong className='d-block mb-2'>
                Changes to Privacy Policy
              </strong>
              a. Updates: We may update this Privacy Policy to reflect changes in our data practices or legal requirements. Any changes will be effective when we post the revised Privacy Policy on the app.
              <br /><br />
              If you have any questions or concerns about these Terms, please contact us at becomedevelopermonster@gmail.com.
              <br /><br />
              By using the App, you acknowledge that you have read, understood, and agree to these Terms. Thank you for being a tester and providing valuable feedback to improve our App.
            </p>
          </div>
        </div>
      </section>
      <FooterApp />
    </>
  )
}

export default TOS;
