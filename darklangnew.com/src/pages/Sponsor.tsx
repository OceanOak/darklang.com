import React from 'react';

const SponsorshipTier = ({ title, price, description, features, buttonText, highlighted = false }) => (
  <div className={`rounded-lg overflow-hidden border ${highlighted ? 'border-purple-lbg' : 'border-gray-200'} ${highlighted ? 'shadow-md' : 'shadow-sm'}`}>
    <div className={`p-6 ${highlighted ? 'bg-purple-lbg text-white' : 'bg-white text-black-custom'}`}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="flex items-baseline mb-4">
        <span className="text-2xl font-extrabold">${price}</span>
        <span className="ml-1 text-sm opacity-80">/month</span>
      </div>
      <p className={`text-sm ${highlighted ? 'text-white opacity-90' : 'text-gray-custom'}`}>{description}</p>
    </div>
    <div className="bg-white p-6">
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="h-5 w-5 text-purple-lbg flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm text-gray-custom">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-2 px-4 rounded-md transition-colors ${highlighted
          ? 'bg-white text-purple-lbg border border-purple-lbg hover:bg-purple-50'
          : 'bg-purple-lbg text-white hover:bg-purple-secondary'
          }`}
      >
        {buttonText}
      </button>
    </div>
  </div>
);

const Sponsor = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <header className="text-center mb-16">
        <h1 className="text-3xl font-bold mb-4 text-black-custom">Sponsor Darklang</h1>
        <p className="text-lg text-gray-custom max-w-2xl mx-auto">
          Support the future of backend development. Your sponsorship helps us build and maintain Darklang as an open-source platform.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-3 mb-16">
        <SponsorshipTier
          title="Bronze"
          price="100"
          description="Perfect for individuals and small teams who want to support Darklang."
          features={[
            "Name and logo on our website",
            "Early access to beta features",
            "Community recognition",
            "Monthly newsletter"
          ]}
          buttonText="Become Bronze Sponsor"
        />

        <SponsorshipTier
          title="Silver"
          price="500"
          description="Ideal for growing companies that rely on Darklang for their projects."
          features={[
            "Everything in Bronze",
            "Logo in documentation",
            "Priority support",
            "Quarterly strategy call",
            "Sponsor badge for your website"
          ]}
          buttonText="Become Silver Sponsor"
          highlighted={true}
        />

        <SponsorshipTier
          title="Gold"
          price="1,000"
          description="For businesses that want to make a significant impact on Darklang's development."
          features={[
            "Everything in Silver",
            "Logo in CLI output",
            "Feature prioritization input",
            "Private Slack channel",
            "Custom workshop session",
            "Co-marketing opportunities"
          ]}
          buttonText="Become Gold Sponsor"
        />
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Custom Sponsorship</h2>
        <p className="text-center text-gray-custom mb-6">
          Looking for a custom sponsorship package or have specific requirements?
          We're happy to work with you to create a sponsorship that aligns with your goals.
        </p>
        <div className="text-center">
          <button className="px-6 py-3 bg-purple-lbg text-white rounded-md hover:bg-purple-secondary transition-colors">
            Contact Us
          </button>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Our Sponsors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="h-20 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-gray-400">Sponsor Logo</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsor;