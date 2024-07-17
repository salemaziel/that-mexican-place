import React from "react";

const PrivacyPage = () => (
    <div className="w-full px-8 mx-auto mt-4 md:max-w-2xl lg:max-w-3xl md:mt-12 ">
      <h1 className='mb-4 text-2xl text-center'><strong>Privacy Policy</strong></h1>
      <p>
        This privacy policy applies to the That Mexican Place website (hereby referred to as
        "Website") for mobile devices that was created by That Mexican Place (hereby referred to as
        "Service Provider") as a Free service. This service is intended for use "AS IS".
      </p>
      <br />
      <strong>Information Collection and Use</strong>
      <p>
        The Website collects information when you download and use it. This information may include
        information such as
      </p>
      <ul>
        <li>Your device's Internet Protocol address (e.g. IP address)</li>
        <li>
          The pages of the Website that you visit, the time and date of your visit, the time spent
          on those pages
        </li>
        <li>The time spent on the Website</li>
        <li>The operating system you use on your mobile device</li>
      </ul>
      <p />
      <br />
      <p>
        The Website does not gather precise information about the location of your mobile device.
      </p>
      <br />
      <p>
        The Service Provider may use the information you provided to contact you from time to time
        to provide you with important information, required notices and marketing promotions.
      </p>
      <br />
      <p>
        For a better experience, while using the Website, the Service Provider may require you to
        provide us with certain personally identifiable information, including but not limited to
        name, email, phone number. The information that the Service Provider request will be
        retained by them and used as described in this privacy policy.
      </p>
      <br />
      <strong>Third Party Access</strong>
      <p>
        Only aggregated, anonymized data is periodically transmitted to external services to aid the
        Service Provider in improving the Website and their service. The Service Provider may share
        your information with third parties in the ways that are described in this privacy
        statement.
      </p>
      <div>
        <br />
        <p>
          Please note that the Website utilizes third-party services that have their own Privacy
          Policy about handling data. Below are the links to the Privacy Policy of the third-party
          service providers used by the Website:
        </p>
        <ul>
          {/* Google Analytics Privacy Policy link */}
            <li>
                <a
                    href="https://www.google.com/policies/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Google Analytics
                </a>
            </li>
            {/* Google Tag Manager Privacy Policy link */}
            <li>
                <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Google Tag Manager
                </a>
            </li>
          
        </ul>
      </div>
      <br />
      <p>
        The Service Provider may disclose User Provided and Automatically Collected Information:
      </p>
      <ul>
        <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
        <li>
          when they believe in good faith that disclosure is necessary to protect their rights,
          protect your safety or the safety of others, investigate fraud, or respond to a government
          request;
        </li>
        <li>
          with their trusted services providers who work on their behalf, do not have an independent
          use of the information we disclose to them, and have agreed to adhere to the rules set
          forth in this privacy statement.
        </li>
      </ul>
      <p />
      <br />
      <strong>Opt-Out Rights</strong>
      <p>
        You can stop all collection of information by the Website easily by not using it. 
      </p>
      <br />
      <strong>Data Retention Policy</strong>
      <p>
        The Service Provider will retain User Provided data for as long as you use the Website and
        for a reasonable time thereafter. If you'd like them to delete User Provided Data that you
        have provided via the Website, please contact them at contact@viadelweb.com and they will
        respond in a reasonable time.
      </p>
      <br />
      <strong>Children</strong>
      <p>
        The Service Provider does not use the Website to knowingly solicit data from or market to
        children under the age of 13.
      </p>
      <div>
        <br />
        <p>
          The Website does not address anyone under the age of 13. The Service Provider does not
          knowingly collect personally identifiable information from children under 13 years of age.
          In the case the Service Provider discover that a child under 13 has provided personal
          information, the Service Provider will immediately delete this from their servers. If you
          are a parent or guardian and you are aware that your child has provided us with personal
          information, please contact the Service Provider (contact@viadelweb.com) so that they will
          be able to take the necessary actions.
        </p>
      </div>
      {/**/}
      <br />
      <strong>Security</strong>
      <p>
        The Service Provider is concerned about safeguarding the confidentiality of your
        information. The Service Provider provides physical, electronic, and procedural safeguards
        to protect information the Service Provider processes and maintains.
      </p>
      <br />
      <strong>Changes</strong>
      <p>
        This Privacy Policy may be updated from time to time for any reason. The Service Provider
        will notify you of any changes to the Privacy Policy by updating this page with the new
        Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as
        continued use is deemed approval of all changes.
      </p>
      <br />
      <p>This privacy policy is effective as of 2024-07-03</p>
      <br />
      <strong>Your Consent</strong>
      <p>
        By using the Website, you are consenting to the processing of your information as set forth
        in this Privacy Policy now and as amended by us.
      </p>
      <br />
      <strong>Contact Us</strong>
      <p>
        If you have any questions regarding privacy while using the Website, or have questions about
        the practices, please contact the Service Provider via email at contact@viadelweb.com.
      </p>
    </div>
);

export default PrivacyPage;