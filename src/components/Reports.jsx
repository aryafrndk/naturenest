import React from 'react';

const reports = [
  {
    id: 1,
    title: 'Impact Report 2023',
    description: 'Read about our impact on local communities and ecosystems throughout the year 2023.',
    link: '#', // Ganti dengan URL laporan yang sesuai
  },
  {
    id: 2,
    title: 'Environmental Sustainability Report',
    description: 'Learn about our efforts to promote environmental sustainability and reduce carbon footprint.',
    link: '#', // Ganti dengan URL laporan yang sesuai
  },
  {
    id: 3,
    title: 'Community Outreach Summary',
    description: 'Explore our community outreach initiatives and the impact on local residents.',
    link: '#', // Ganti dengan URL laporan yang sesuai
  },
  // Tambahkan lebih banyak laporan jika diperlukan
];

const Reports = () => {
  return (
    <section id="reports" className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Latest Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reports.map((report) => (
            <div key={report.id} className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold mb-3">{report.title}</h3>
              <p className="text-gray-700 mb-4">{report.description}</p>
              <a
                href={report.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800 inline-block font-semibold"
              >
                View Report <i className="ml-1 fas fa-external-link-alt"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reports;
