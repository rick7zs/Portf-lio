export default function PowerBIModal({ open, onClose, url }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-xl">
      {/* Botão fechar */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-[1000]
                   px-5 py-2 rounded-full text-sm
                   bg-white/10 text-white
                   hover:bg-white/20 transition"
      >
        Fechar ✕
      </button>

      {/* Container iframe */}
      <div className="w-full h-full pt-16">
        <iframe
          src={url}
          title="Dashboard Power BI"
          className="w-full h-full border-none"
          allowFullScreen
        />
      </div>
    </div>
  );
}
