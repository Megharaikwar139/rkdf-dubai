import React from 'react';
import { Download, FileText, Shield } from 'lucide-react';

export const DownloadsPage: React.FC = () => {
  const downloads = [
    { title: 'RKDF University Dubai Comprehensive Prospectus 2027', size: '12.4 MB', type: 'PDF' },
    { title: 'Undergraduate Programmes & Course Specs Catalog', size: '4.8 MB', type: 'PDF' },
    { title: 'Postgraduate & Executive MBA Syllabus Guide', size: '3.6 MB', type: 'PDF' },
    { title: 'Tuition Fee Schedules & Scholarship Regulations', size: '1.2 MB', type: 'PDF' },
    { title: 'UAE Student Visa Sponsorship Guidelines & Checklist', size: '920 KB', type: 'PDF' },
    { title: 'Student Residence Handbook & DIAC Housing Map', size: '2.1 MB', type: 'PDF' },
  ];

  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto space-y-16">
      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-terracotta block mb-2">
          Official Documents & Handbooks
        </span>
        <h1 className="type-h1 text-ink mb-4">Prospectus & Downloads</h1>
        <p className="type-body">
          Download high-resolution official prospectuses, fee regulations, housing maps, and admission requirements in PDF format.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {downloads.map((d, i) => (
          <div
            key={i}
            className="bg-cloud p-6 rounded-card border border-black/5 shadow-sm flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-sand text-terracotta">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-ink mb-0.5">{d.title}</h4>
                <span className="text-xs text-ink-55 font-mono">{d.type} · {d.size}</span>
              </div>
            </div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert(`Initiating download for ${d.title}`);
              }}
              className="p-2.5 rounded-full bg-sand/40 hover:bg-sand text-ink transition-colors"
              title="Download File"
            >
              <Download className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
