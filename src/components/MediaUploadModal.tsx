import React, { useState, useRef } from 'react';
import { PortfolioProfile, Project, ProjectMedia } from '../types';
import { X, Upload, Image as ImageIcon, Video, Link as LinkIcon, Check, Plus, AlertCircle } from 'lucide-react';

interface MediaUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: PortfolioProfile;
  initialProjectId?: string;
  onAddMediaToProject: (projectId: string, newMedia: ProjectMedia) => void;
}

export const MediaUploadModal: React.FC<MediaUploadModalProps> = ({
  isOpen,
  onClose,
  profile,
  initialProjectId,
  onAddMediaToProject
}) => {
  if (!isOpen) return null;

  const [selectedProjectId, setSelectedProjectId] = useState<string>(
    initialProjectId || (profile.projects[0]?.id || '')
  );
  const [mediaType, setMediaType] = useState<'image' | 'gif'>('image');
  const [urlInput, setUrlInput] = useState('');
  const [captionInput, setCaptionInput] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    const isGif = file.type === 'image/gif' || file.name.endsWith('.gif');
    if (isGif) setMediaType('gif');
    else setMediaType('image');

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        const resultStr = event.target.result as string;
        setPreviewUrl(resultStr);
        setUrlInput(resultStr);
        if (!captionInput) {
          setCaptionInput(file.name.replace(/\.[^/.]+$/, ''));
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setUrlInput(val);
    setPreviewUrl(val);
    if (val.toLowerCase().endsWith('.gif')) {
      setMediaType('gif');
    }
  };

  const handleSave = () => {
    const finalUrl = previewUrl || urlInput;
    if (!finalUrl || !selectedProjectId) return;

    const newMedia: ProjectMedia = {
      id: `media-${Date.now()}`,
      url: finalUrl,
      caption: captionInput || 'Uploaded project media',
      type: mediaType,
      isCover: false
    };

    onAddMediaToProject(selectedProjectId, newMedia);
    
    // Reset and close
    setUrlInput('');
    setCaptionInput('');
    setPreviewUrl(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#121212]/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#121212] border border-[#121212] dark:border-[#333] shadow-2xl my-8 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#F7F7F7] dark:bg-[#181818] border-b border-[#E5E5E5] dark:border-[#2A2A2A]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#121212] dark:bg-white inline-block"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-[#121212] dark:text-white">
              UPLOAD PICTURES OR GIFS
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#121212] dark:text-white border border-[#E5E5E5] dark:border-[#333] hover:bg-[#121212] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          
          {/* Project Target Dropdown */}
          <div>
            <label className="block text-[10px] font-bold tracking-widest uppercase text-[#888] mb-1">
              TARGET PROJECT *
            </label>
            <select
              value={selectedProjectId}
              onChange={(e) => setSelectedProjectId(e.target.value)}
              className="w-full p-3 bg-[#F7F7F7] dark:bg-[#181818] border border-[#E5E5E5] dark:border-[#333] text-xs font-mono text-[#121212] dark:text-white focus:outline-none focus:border-[#121212]"
            >
              {profile.projects.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title} ({p.category})
                </option>
              ))}
            </select>
          </div>

          {/* Drag and drop zone */}
          <div>
            <label className="block text-[10px] font-bold tracking-widest uppercase text-[#888] mb-1">
              SELECT FILE (IMAGE OR GIF)
            </label>
            
            <div
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`p-8 border-2 border-dashed text-center cursor-pointer transition-colors ${
                dragActive
                  ? 'border-[#121212] bg-[#F0F0F0] dark:border-white dark:bg-[#222]'
                  : 'border-[#E5E5E5] dark:border-[#333] bg-[#F7F7F7] dark:bg-[#181818] hover:border-[#121212]'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,.gif"
                onChange={handleFileChange}
                className="hidden"
              />

              <Upload className="w-8 h-8 mx-auto text-[#888] mb-2" />
              <p className="text-xs font-mono font-bold text-[#121212] dark:text-white">
                Drag & Drop high-res pictures or GIF animations here
              </p>
              <p className="text-[10px] font-mono text-[#888] mt-1">
                Supports PNG, JPG, WEBP, and animated GIF formats
              </p>
            </div>
          </div>

          {/* Or Paste Direct URL */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <LinkIcon className="w-3.5 h-3.5 text-[#888]" />
              <label className="text-[10px] font-bold tracking-widest uppercase text-[#888]">
                OR PASTE IMAGE / GIF URL
              </label>
            </div>
            <input
              type="url"
              value={urlInput}
              onChange={handleUrlChange}
              placeholder="https://example.com/my-3d-printing-prototype.gif"
              className="w-full p-3 bg-[#F7F7F7] dark:bg-[#181818] border border-[#E5E5E5] dark:border-[#333] text-xs font-mono text-[#121212] dark:text-white focus:outline-none focus:border-[#121212]"
            />
          </div>

          {/* Caption */}
          <div>
            <label className="block text-[10px] font-bold tracking-widest uppercase text-[#888] mb-1">
              MEDIA CAPTION / DESCRIPTION
            </label>
            <input
              type="text"
              value={captionInput}
              onChange={(e) => setCaptionInput(e.target.value)}
              placeholder="e.g. 3D printing in action with recycled PP filament"
              className="w-full p-3 bg-[#F7F7F7] dark:bg-[#181818] border border-[#E5E5E5] dark:border-[#333] text-xs font-mono text-[#121212] dark:text-white focus:outline-none focus:border-[#121212]"
            />
          </div>

          {/* Live Media Preview */}
          {previewUrl && (
            <div className="p-4 bg-[#121212] text-white border border-[#121212]">
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#AAA] mb-2">LIVE PREVIEW</div>
              <div className="h-48 flex items-center justify-center bg-black overflow-hidden">
                <img src={previewUrl} alt="Preview" className="max-h-full max-w-full object-contain" />
              </div>
              <p className="text-xs font-mono text-center mt-2 text-amber-400">
                {captionInput || 'Uploaded media preview'} ({mediaType.toUpperCase()})
              </p>
            </div>
          )}

          {/* Save Action */}
          <div className="pt-4 border-t border-[#E5E5E5] dark:border-[#333] flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 border border-[#E5E5E5] dark:border-[#333] text-xs font-bold tracking-widest uppercase text-[#121212] dark:text-white hover:bg-[#F7F7F7] transition-colors cursor-pointer"
            >
              CANCEL
            </button>

            <button
              disabled={!previewUrl && !urlInput}
              onClick={handleSave}
              className="px-6 py-2.5 bg-[#121212] text-white dark:bg-white dark:text-[#121212] text-xs font-bold tracking-widest uppercase hover:bg-[#333] transition-colors disabled:opacity-40 cursor-pointer flex items-center gap-2"
            >
              <Check className="w-4 h-4" />
              <span>SAVE TO PROJECT</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
