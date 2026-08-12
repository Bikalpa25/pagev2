import React from 'react';
import { PortfolioProfile } from '../types';
import { X, Printer, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: PortfolioProfile;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-4xl bg-slate-100 border border-slate-300 shadow-2xl my-6 rounded-xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-slate-900 text-white shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-bold tracking-widest uppercase font-mono text-white">
              BIKALPA CHAULAGAIN — OFFICIAL CV
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold tracking-wider uppercase rounded-lg transition-all cursor-pointer flex items-center gap-1.5 shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper Canvas - ALWAYS Pure White Background */}
        <div className="p-8 sm:p-14 overflow-y-auto bg-white text-slate-900 font-sans space-y-6 print:p-0 print:overflow-visible">
          
          {/* Header Name & Contact Info */}
          <div className="text-center pb-4 border-b border-slate-300">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Bikalpa Chaulagain
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-medium text-slate-700 mt-2">
              <a href="mailto:bikalpa.ch1@gmail.com" className="hover:underline text-indigo-700 font-mono">
                bikalpa.ch1@gmail.com
              </a>
              <span className="text-slate-400">•</span>
              <span className="font-mono text-slate-800">(+977) 9862154898</span>
              <span className="text-slate-400">•</span>
              <a href="https://www.bikalpachaulagain.com.np" target="_blank" rel="noopener noreferrer" className="hover:underline text-indigo-700 font-mono">
                www.bikalpachaulagain.com.np
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-bold tracking-tight uppercase text-slate-900 border-b-2 border-slate-900 pb-0.5 mb-3">
              Education
            </h2>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-baseline font-semibold">
                <div>
                  <strong className="text-slate-900">Kathmandu University</strong> – Bachelor in Mechanical Engineering <span className="font-mono text-slate-800">GPA: 3.36</span>
                </div>
                <div className="font-mono text-slate-600 shrink-0 ml-2">June 2024</div>
              </div>

              <div className="flex justify-between items-baseline font-semibold">
                <div>
                  <strong className="text-slate-900">Manmohan Memorial Polytechnic</strong> – Diploma in Mechanical Engineering
                </div>
                <div className="font-mono text-slate-600 shrink-0 ml-2">July 2016</div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-sm font-bold tracking-tight uppercase text-slate-900 border-b-2 border-slate-900 pb-0.5 mb-3">
              Projects
            </h2>

            <div className="space-y-4 text-xs">
              
              {/* Project 1 */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900 mb-1">
                  <span>Principal Investigator (PI), NAST Multi-Disciplinary Research Grant - Kathmandu University</span>
                  <span className="font-mono text-slate-600 font-semibold shrink-0 ml-2">Sept 2025 - Jun 2026</span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-slate-800 leading-relaxed">
                  <li>Led a NAST-funded Project to develop a low-cost, locally manufactured TENS device,</li>
                  <li>Engineered a rechargeable TENS/EMS prototype using local electronics, custom PCBs, and PETG 3D printing, Reduced consumer cost to by 45% creating an affordable alternative to imported machines,</li>
                  <li>Partnered with Dhulikhel Hospital physiotherapists for clinical trials and Compliance testing.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900 mb-1">
                  <span>Recycled Plastic Sheets and beams for Furniture Industry</span>
                  <span className="font-mono text-slate-600 font-semibold shrink-0 ml-2">Jan 2022 – Feb 2024</span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-slate-800 leading-relaxed">
                  <li>Developed prototypes of Recycled HDPE table utilizing a heat press method,</li>
                  <li>Employed an extrusion machine to create beams from recycled HDPE, integrating them into structural components for 3D printers after secondary machining operations,</li>
                  <li>Explored methods to repurpose mixed non-recyclable plastic materials into flower pots using epoxy resin.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900 mb-1">
                  <span>Integration of Condition Monitoring system Nepalese Manufacturing Industries</span>
                  <span className="font-mono text-slate-600 font-semibold shrink-0 ml-2">Aug 2023 – June 2024</span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-slate-800 leading-relaxed">
                  <li>Developed a wireless IOT system to read and record in real-time, the current and vibration signature data as a final year Engineering Project.</li>
                  <li>Integrated the Developed system to a 24 Hours continuous rolling machine at Chaudhary Group Industrial Park(CGIP), Nawalparasi and Plastic Extrusion Machine at Yeti Plastic Industries, Kavre.</li>
                  <li>Implemented Machine Learning algorithms to identify potential anomalies or degradation trends indicative of impending equipment failures.</li>
                </ul>
              </div>

              {/* Project 4 */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900 mb-1">
                  <span>Automatic Showering System – TIZIG Pharmaceuticals</span>
                  <span className="font-mono text-slate-600 font-semibold shrink-0 ml-2">Nov 2024 – Jan 2025</span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-slate-800 leading-relaxed">
                  <li>Designed and fabricated an automatic showering system using locally available electronic components and 3D printing technology.</li>
                  <li>Replaced a commercial product with the custom system, demonstrating cost-effectiveness and adaptability to local resources on an individual contract basis.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-sm font-bold tracking-tight uppercase text-slate-900 border-b-2 border-slate-900 pb-0.5 mb-3">
              Work Experience
            </h2>

            <div className="space-y-4 text-xs">
              
              {/* Exp 1 */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900 mb-1">
                  <span>3D Modelling Instructor(part time), GyanHub pvt. Ltd.– kathmandu</span>
                  <span className="font-mono text-slate-600 font-semibold shrink-0 ml-2">Aug 2025 – Aug 2026</span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-slate-800 leading-relaxed">
                  <li>Delivered online 3D modelling training to more than 80 students in a batch.</li>
                  <li>Covered part and assembly design, technical drawings, and parametric modeling; batches are ongoing.</li>
                </ul>
              </div>

              {/* Exp 2 */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900 mb-1">
                  <span>Co-founder, Nepal Fil Solutions – Dhulikhel, Kavrepalanchowk</span>
                  <span className="font-mono text-slate-600 font-semibold shrink-0 ml-2">jan 2022 – ongoing</span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-slate-800 leading-relaxed">
                  <li>Co-founded a sustainable materials startup converting recycled PLA and Polypropylene (PP) into high-grade 3D printing filaments.</li>
                  <li>Collaborated with the Kathmandu University Design Lab on the UK Frontiers Project, handling the manufacturing testing and evaluation of affordable PP prosthetic sockets via 3D printing.</li>
                  <li>Led R&D on Patient-Specific Instrumentation (PSI) for Total Knee Replacement (TKR), collaborating with clinical orthopedic partners to design, 3D print, and test custom surgical cutting jigs.</li>
                </ul>
              </div>

              {/* Exp 3 */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900 mb-1">
                  <span>Co-founder, Regen Nepal – Dhulikhel, Kavrepalanchowk</span>
                  <span className="font-mono text-slate-600 font-semibold shrink-0 ml-2">Jan 2022 – ongoing</span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-slate-800 leading-relaxed">
                  <li>Created prototype models of a Table, Beam, and Flower pots utilizing Recycled plastic materials using Heatpress and Extrusion techniques aiming to start a sustainable business venture.</li>
                  <li>Got Selected as a Top 15 business idea in nationwide Kathmandu Metro idea & innovation program.</li>
                  <li>Explored the operational mechanism of business ventures and learned about the process of seeking investments.</li>
                  <li>Designed and manufactured 10+ product varieties for various programs and organizations, delivering on demand using digital manufacturing equipment such as CNC laser, CNC milling, and 3D printers.</li>
                </ul>
              </div>

              {/* Exp 4 */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900 mb-1">
                  <span>Research Assistant, Design lab at Kathmandu University– Dhulikhel, Kavrepalanchowk</span>
                  <span className="font-mono text-slate-600 font-semibold shrink-0 ml-2">Sept 2024 – Feb 2025</span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-slate-800 leading-relaxed">
                  <li>Contributed to research on Nepal's humanitarian response systems for the "AI in Humanitarian Action" project with University College London.</li>
                  <li>Collected and analyzed data on Current status of disaster response and technology needs in Nepal.</li>
                  <li>Engaged with government and private stakeholders to explore AI solutions for disaster management.</li>
                </ul>
              </div>

              {/* Exp 5 */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900 mb-1">
                  <span>Vice-President, Engineers Without Borders-KU chapter – Dhulikhel, Kavrepalanchowk</span>
                  <span className="font-mono text-slate-600 font-semibold shrink-0 ml-2">Oct 2023 – Sept 2024</span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-slate-800 leading-relaxed">
                  <li>Started a New chapter of an international organization at Kathmandu University with an initiative to make a sustainable transformation in the community.</li>
                  <li>Visited various autism clinics and schools in Kathmandu Valley to gain insights into the disorder and explore potential team-driven solutions for support and intervention.</li>
                </ul>
              </div>

              {/* Exp 6 */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900 mb-1">
                  <span>Engineering Intern, ASAP Incorporated – Balkot, Bhaktapur</span>
                  <span className="font-mono text-slate-600 font-semibold shrink-0 ml-2">Feb 2024 – Apr 2024</span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-slate-800 leading-relaxed">
                  <li>Supervised Medical Gas Pipeline System(MGPS) work at Dhulikhel hospital implementing workarounds to complete the requested Modifications in constrained time and budget.</li>
                  <li>Worked on designing 3D printed Surgical Guides for TKR surgery, using CT scanned Images.</li>
                  <li>Administered Inventory Management and handled other office tasks.</li>
                </ul>
              </div>

              {/* Exp 7 */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900 mb-1">
                  <span>UNG Researcher, Design lab at Kathmandu University– Dhulikhel, Kavrepalanchowk</span>
                  <span className="font-mono text-slate-600 font-semibold shrink-0 ml-2">July 2020 – Jan 2024</span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-slate-800 leading-relaxed">
                  <li>Utilized and operated 3D printers, proficient in FDM technologies, familiar with SLA Technologies contributing to various design and prototyping tasks.</li>
                  <li>Operated the Boxford CNC Machine, acquiring experience in CNC machining processes for precise prototyping.</li>
                  <li>Gained insights into partnership dynamics and team coordination for effective project delivery.</li>
                  <li>Engaged in diverse small projects like Box-sorting Mechanism, 5DoF Robotic arm using Forward Kinematics, FES unit, and others developing Hands-on and problem-solving skills.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Publications */}
          <div>
            <h2 className="text-sm font-bold tracking-tight uppercase text-slate-900 border-b-2 border-slate-900 pb-0.5 mb-3">
              Publications
            </h2>
            <p className="text-xs text-slate-800 leading-relaxed">
              • Karki, P. J., Subedi, A., Gaihre, A., <strong>Chaulagain, B.</strong>, Shrestha, S., & Chitrakar, S. (2021). <em>Comparative Numerical and Experimental Study of Golden Angle and Conventional Agitator Impellers</em>. Kathmandu University Journal of Science Engineering and Technology, 15(2).{' '}
              <a href="https://doi.org/10.70530/kuset.v15i2.514" target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover:underline font-mono">
                https://doi.org/10.70530/kuset.v15i2.514
              </a>
            </p>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-sm font-bold tracking-tight uppercase text-slate-900 border-b-2 border-slate-900 pb-0.5 mb-3">
              Skills
            </h2>
            <div className="text-xs text-slate-800 space-y-1 font-mono">
              <div><strong>Hardware:</strong> Soldering, Welding, Lathe Machine, Drill, 3D Printing and 3D scanning</div>
              <div><strong>Design Tools:</strong> SolidWorks (CSWA Certified - ID: C-LEHGTUYDWK), Fusion360, Rhino 3D, 3D Slicer</div>
              <div><strong>Programming Languages:</strong> Python, C++</div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

