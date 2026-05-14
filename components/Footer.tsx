export default function Footer() {
  return (
    <footer className="bg-[#1C1700] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-px h-4 bg-white/20" />
          <span className="font-serif text-sm font-semibold text-white/70">Client Intelligence</span>
        </div>
        <div className="flex items-center gap-5 text-xs text-white/60">
          <a
            href="https://clientintelligence.ai/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="https://clientintelligence.ai/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="mailto:support@clientintelligence.ai"
            className="hover:text-white/60 transition-colors"
          >
            Contact
          </a>
        </div>
        <p className="text-white/50 text-xs">© 2026 Client Intelligence</p>
      </div>
    </footer>
  )
}
