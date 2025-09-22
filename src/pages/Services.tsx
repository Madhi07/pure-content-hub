import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import servicesBg from "../assets/services-bg.jpg";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-surface-primary to-surface-secondary">
        <div className="container-max section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-text-secondary">
              Comprehensive technology solutions designed to accelerate your business growth 
              and digital transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-surface-primary">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="card p-8 hover:scale-105 transition-transform duration-200">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-purple rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-text-primary mb-4">{service.title}</h3>
                    <p className="text-text-secondary mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-text-secondary">
                          <svg className="w-5 h-5 text-brand-blue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-surface-secondary">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
              Our Process
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              We follow a proven methodology to ensure your project delivers exceptional results 
              on time and within budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-surface-tertiary -z-10"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">{step.title}</h3>
                <p className="text-text-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-purple">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business and achieve your goals.
          </p>
          <a href="/contact" className="bg-white text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
            Get Free Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const services = [
  {
    title: "Web Development",
    description: "Create powerful, responsive websites and web applications that engage users and drive conversions.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    features: [
      "Custom website design and development",
      "E-commerce platform integration",
      "Content management systems",
      "Performance optimization",
      "SEO and accessibility compliance"
    ]
  },
  {
    title: "Mobile App Development",
    description: "Build native and cross-platform mobile applications that provide exceptional user experiences.",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    features: [
      "iOS and Android native apps",
      "Cross-platform development",
      "UI/UX design optimization",
      "App store deployment",
      "Ongoing maintenance and updates"
    ]
  },
  {
    title: "Cloud Solutions",
    description: "Migrate to the cloud and leverage scalable infrastructure for improved performance and cost efficiency.",
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    features: [
      "Cloud migration strategy",
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Cloud security implementation",
      "Cost optimization and monitoring"
    ]
  },
  {
    title: "Data Analytics",
    description: "Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    features: [
      "Data warehouse design",
      "Business intelligence dashboards",
      "Predictive analytics models",
      "Real-time data processing",
      "Custom reporting solutions"
    ]
  },
  {
    title: "AI & Machine Learning",
    description: "Integrate artificial intelligence and machine learning capabilities to automate processes and gain competitive advantages.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    features: [
      "Custom AI model development",
      "Natural language processing",
      "Computer vision solutions",
      "Process automation",
      "Recommendation systems"
    ]
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive security solutions and best practices implementation.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    features: [
      "Security audits and assessments",
      "Penetration testing",
      "Security policy development",
      "Compliance management",
      "Incident response planning"
    ]
  }
];

const processSteps = [
  {
    title: "Discovery",
    description: "We analyze your business needs, goals, and technical requirements to create a comprehensive project roadmap."
  },
  {
    title: "Design",
    description: "Our team creates detailed designs and prototypes that align with your brand and user experience expectations."
  },
  {
    title: "Development",
    description: "We build your solution using industry best practices, agile methodologies, and continuous testing."
  },
  {
    title: "Deployment",
    description: "We deploy your solution and provide training and support to ensure successful adoption and ongoing success."
  }
];

export default Services;