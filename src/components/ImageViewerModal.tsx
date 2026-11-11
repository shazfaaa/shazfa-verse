import React, { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';

interface ImageViewerModalProps {
  isOpen: boolean;
  title: string;
  subtitle: string;
  imageSrc: string;
  onClose: () => void;
}

export const ImageViewerModal: React.FC<ImageViewerModalProps> = ({
  isOpen,
  title,
  subtitle,
  imageSrc,
  onClose,
}) => {
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'unset';
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl max-h-[90vh] bg-stone-900 text-white rounded-3xl overflow-hidden shadow-2xl border border-stone-800 flex flex-col"
      >
        {/* Top bar */}
        <div className="p-4 px-6 border-b border-stone-800 flex items-center justify-between bg-stone-950/80">
          <div>
            <h3 className="font-syne font-bold text-lg">{title}</h3>
            <p className="text-xs font-mono text-pink-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>{subtitle}</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-stone-800 hover:bg-pink-500 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Frame */}
        <div className="p-4 sm:p-8 flex items-center justify-center overflow-auto max-h-[75vh]">
          <img
            src={imageSrc}
            alt={title}
            className="max-h-[68vh] w-auto object-contain rounded-xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-stone-800 text-stone-400 text-xs font-mono flex items-center justify-between bg-stone-950/60">
          <span>Shazfa Delphinia · Visual Archive</span>
          <span>Tekan ESC untuk menutup</span>
        </div>
      </div>
    </div>
  );
};
