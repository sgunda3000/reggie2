import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">Reggie AI</div>
          <div className="flex items-center space-x-6">
            <Link href="/change-control" className="text-gray-700 hover:text-gray-900">
              Change Control
            </Link>
            <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition">
              Book a Demo
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-block mb-4">
            <span className="bg-primary-100 text-primary-800 px-4 py-1 rounded-full text-sm font-medium">
              Launch YC: Reggie AI: AI-native automation for SOX audits
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Automate Internal Audit Work with AI
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Turn hours of scoping, flowcharting, and control testing into<br />
            review-ready outputs delivered within minutes.
          </p>
          <Link
            href="/change-control"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary-700 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Problems Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Internal audit teams are drowning in manual work
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">High outsourcing costs</h3>
              <p className="text-gray-600">
                Expensive outsourcing when understaffed to handle the manual workload
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Inconsistent documentation</h3>
              <p className="text-gray-600">
                Flowcharts and workpapers vary in quality and format across team members
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Evidence buried in documents</h3>
              <p className="text-gray-600">
                Hours wasted searching through PDFs, screenshots, and policy docs to find support
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Low-value busywork</h3>
              <p className="text-gray-600">
                Too much time on formatting, documentation, and repetitive tasks; and not enough on risk and judgment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            With Reggie AI, audit teams deliver more audits, faster
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Control Testing</h3>
              <p className="text-gray-600">
                Automated control testing and workpaper generation using AI
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Walkthrough Flowchart Generation</h3>
              <p className="text-gray-600">
                Automatically convert walkthrough documentation into process flowcharts and narratives with AI
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SOX Scoping</h3>
              <p className="text-gray-600">
                AI support for audit scoping and risk assessment
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Document Intelligence</h3>
              <p className="text-gray-600">
                Search, analyze, and annotate documents in your document database with AI + web search optionality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <p className="text-gray-700 font-medium">Upload evidence</p>
            </div>
            <div className="hidden md:block text-primary-600 text-2xl">→</div>
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <p className="text-gray-700 font-medium">AI analyzes content</p>
            </div>
            <div className="hidden md:block text-primary-600 text-2xl">→</div>
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <p className="text-gray-700 font-medium">Generate workpaper</p>
            </div>
            <div className="hidden md:block text-primary-600 text-2xl">→</div>
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <p className="text-gray-700 font-medium">Ready for review</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Built for audit-grade accountability
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Evidence-grounded</h3>
              <p className="text-gray-600">
                Outputs tie back to specific documents and excerpts
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Auditor-in-the-loop</h3>
              <p className="text-gray-600">
                Reviewers approve before anything is final
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Consistent formats</h3>
              <p className="text-gray-600">
                Standardized workpapers and documentation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Enterprise-grade security
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Your data is protected with industry-leading security standards
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible deployment options</h3>
              <p className="text-gray-600">
                Reggie AI supports both Reggie-hosted and customer-hosted deployments to meet internal security, privacy, or regulatory needs
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Data Privacy</h3>
              <p className="text-gray-600">
                Customer data is used only to provide the service and is never reused, shared, or retained for model training
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">See Reggie AI in action</h2>
          <p className="text-gray-600 mb-8">
            Get started with NIST 800-53 change control automation today
          </p>
          <Link
            href="/change-control"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary-700 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold text-gray-900 mb-4 md:mb-0">Reggie AI</div>
          <div className="flex space-x-6 text-gray-600">
            <Link href="/change-control" className="hover:text-gray-900">Change Control</Link>
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
          </div>
          <div className="text-gray-600 mt-4 md:mt-0">
            © 2026 Reggie AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
