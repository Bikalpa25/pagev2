import React, { useState } from 'react';
import { PortfolioProfile } from '../types';
import { 
  FileText, 
  ExternalLink, 
  Copy, 
  Check, 
  BookOpen, 
  Award, 
  Sparkles 
} from 'lucide-react';

interface PublicationsSectionProps {
  profile: PortfolioProfile;
}

export const PublicationsSection: React.FC<PublicationsSectionProps> = ({ profile }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyCitation = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="publications" className="py-20 border-b border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="mb-10 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase font-mono">
              Academic Research & Literature
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
            Peer-Reviewed Publications
          </h2>
          <p className="text-slate-600 text-sm mt-2 max-w-2xl">
            Journal articles and research on mechanical engineering, predictive machine learning condition monitoring, and bio-medical devices.
          </p>
        </div>

        {/* Publication Cards */}
        <div className="space-y-6">
          {(profile?.publications || []).map((pub, idx) => {
            const citationText = `${pub.authors}, "${pub.title}," ${pub.journal}, ${pub.citation || pub.date}.`;

            return (
              <div
                key={pub.id || idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold font-mono text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-md uppercase">
                        Journal Article
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {pub.date}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {pub.title}
                    </h3>

                    <div className="text-xs font-semibold text-slate-600 mb-2">
                      Authors: <span className="text-slate-900 font-bold">{pub.authors}</span>
                    </div>

                    <div className="text-xs text-amber-800 font-medium font-serif">
                      Published in: {pub.journal}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleCopyCitation(pub.id, citationText)}
                      className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                      title="Copy APA Citation"
                    >
                      {copiedId === pub.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-500" />
                          <span>Copy Citation</span>
                        </>
                      )}
                    </button>

                    {pub.doiOrLink && (
                      <a
                        href={pub.doiOrLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <span>Read Article</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Formatted Citation Footer */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-mono text-slate-500 leading-relaxed">
                  <span className="text-slate-400 uppercase text-[10px] font-bold block mb-1">Citation Format:</span>
                  {citationText}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
