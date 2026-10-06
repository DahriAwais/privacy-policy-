import React, { useState, useEffect } from 'react';
import {
  Shield,
  ShieldCheck,
  Lock,
  Mail,
  Copy,
  Check,
  Printer,
  Share2,
  ExternalLink,
  Sun,
  Moon,
  Gamepad2,
  Search,
  ArrowUp,
  FileText,
  UserX,
  CameraOff,
  MicOff,
  MapPinOff,
  FolderX,
  Database,
  Radio,
  EyeOff,
  Info,
  Calendar,
  Sparkles,
  HelpCircle,
  Users
} from 'lucide-react';

interface SectionItem {
  id: string;
  number: string;
  title: string;
  icon: React.ReactNode;
}

const SECTIONS: SectionItem[] = [
  { id: 'section-1', number: '1', title: 'Introduction', icon: <Info className="w-4 h-4" /> },
  { id: 'section-2', number: '2', title: 'Information We Collect', icon: <EyeOff className="w-4 h-4" /> },
  { id: 'section-3', number: '3', title: 'How We Use Your Information', icon: <Gamepad2 className="w-4 h-4" /> },
  { id: 'section-4', number: '4', title: 'Advertising & Third-Party Services', icon: <Radio className="w-4 h-4" /> },
  { id: 'section-5', number: '5', title: 'Data Sharing', icon: <Lock className="w-4 h-4" /> },
  { id: 'section-6', number: '6', title: "Children's Privacy", icon: <Users className="w-4 h-4" /> },
  { id: 'section-7', number: '7', title: 'Data Security', icon: <ShieldCheck className="w-4 h-4" /> },
  { id: 'section-8', number: '8', title: 'Data Retention and Deletion', icon: <Database className="w-4 h-4" /> },
  { id: 'section-9', number: '9', title: 'Changes to This Privacy Policy', icon: <Calendar className="w-4 h-4" /> },
  { id: 'section-10', number: '10', title: 'Contact Us', icon: <Mail className="w-4 h-4" /> },
  { id: 'section-11', number: '11', title: 'Your Consent', icon: <Sparkles className="w-4 h-4" /> },
];

const PERMISSIONS_LIST = [
  { name: 'Account Registration or Login', icon: <UserX className="w-4 h-4 text-emerald-400" />, desc: 'Play immediately without registration' },
  { name: 'Name, Email or Phone Number', icon: <EyeOff className="w-4 h-4 text-emerald-400" />, desc: 'No personal identification collected' },
  { name: 'Device Contacts', icon: <Lock className="w-4 h-4 text-emerald-400" />, desc: 'Never accesses your contact list' },
  { name: 'Camera Access', icon: <CameraOff className="w-4 h-4 text-emerald-400" />, desc: 'No photo or video capture permissions' },
  { name: 'Microphone Access', icon: <MicOff className="w-4 h-4 text-emerald-400" />, desc: 'No audio recording permissions' },
  { name: 'Location Access (GPS)', icon: <MapPinOff className="w-4 h-4 text-emerald-400" />, desc: 'No geolocation tracking' },
  { name: 'Photos & Files Access', icon: <FolderX className="w-4 h-4 text-emerald-400" />, desc: 'No file system or gallery access' },
  { name: 'Other Device Permissions', icon: <Shield className="w-4 h-4 text-emerald-400" />, desc: 'Zero intrusive hardware privileges' },
];

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('section-1');
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showRawModal, setShowRawModal] = useState<boolean>(false);
  const [showCopiedRaw, setShowCopiedRaw] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Track scroll position for progress bar & active section
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
      setShowScrollTop(totalScroll > 400);

      const sectionElements = SECTIONS.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('trendwibemedia@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const plainTextDocument = `Privacy Policy

Effective Date: October 6, 2026

Game Name: 3D Arrow Escape
Developer: Muhammad_Awais09
Contact Email: trendwibemedia@gmail.com

1. Introduction
Welcome to 3D Arrow Escape, a casual puzzle and brain exercise game developed by Muhammad_Awais09.
We respect your privacy. 3D Arrow Escape is designed to be a simple game for entertainment and brain-training purposes. We do not require you to create an account, and we do not directly collect or store personal information on our own servers.

2. Information We Collect
We do not directly collect, store, or require personal information from users.
The game does not require:
- Account registration or login
- Name, email address, or phone number
- Contacts
- Camera access
- Microphone access
- Location access
- User-uploaded photos or files
- Any other device permissions
The game does not operate its own database or backend server for collecting user information.

3. How We Use Your Information
Since we do not directly collect personal information, we do not use personal information for our own purposes.
3D Arrow Escape is simply designed to provide users with a fun puzzle and brain exercise experience.

4. Advertising and Third-Party Services
We use Google AdMob to display advertisements within the game. Advertising helps us keep the game free for users.
AdMob and its advertising partners may collect or process certain information, such as an advertising identifier, IP address, device information, and other technical information, in accordance with their own privacy policies and applicable laws.
Depending on applicable settings, permissions, and regulations, advertisements may be personalized or non-personalized.
We do not directly collect, store, or control this advertising information on our own servers.
For more information about how Google handles data in its advertising services, please review Google's privacy information.

5. Data Sharing
We do not sell, rent, or directly share users' personal information with third parties because we do not collect personal information ourselves.
However, third-party services such as Google AdMob may independently process information necessary to provide advertising services. Their data practices are governed by their own policies.

6. Children's Privacy
3D Arrow Escape is a general-audience puzzle and brain exercise game and is intended to be suitable for users of different age groups.
We do not knowingly collect personal information from children or other users.
Because advertisements are provided by Google AdMob, advertising and data practices may be subject to Google's policies and applicable laws regarding children and users of different ages.

7. Data Security
Because we do not operate a system that collects or stores users' personal information, we do not maintain a personal user-data database.
Third-party services used by the game, such as Google AdMob, are responsible for the security and processing of data they collect or process under their respective policies.

8. Data Retention and Deletion
We do not directly collect or store personal user information, so we do not retain personal information on our own servers.
If you have questions about information processed by Google AdMob, please refer to Google's privacy resources and available privacy controls.

9. Changes to This Privacy Policy
We may update this Privacy Policy from time to time to reflect changes to the game, third-party services, or applicable legal requirements.
Any updated Privacy Policy will be posted on this page with a revised effective date.

10. Contact Us
If you have any questions or concerns about this Privacy Policy or 3D Arrow Escape, you can contact us at:
Email: trendwibemedia@gmail.com

11. Your Consent
By installing or using 3D Arrow Escape, you acknowledge that you have read and understood this Privacy Policy.
If you do not agree with this Privacy Policy, please do not use the game.`;

  const copyPlainText = () => {
    navigator.clipboard.writeText(plainTextDocument);
    setShowCopiedRaw(true);
    setTimeout(() => setShowCopiedRaw(false), 2500);
  };

  const filteredSections = SECTIONS.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.number.includes(searchQuery)
  );

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
      }`}
    >
      {/* Scroll Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent no-print">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500 transition-all duration-75"
          style={{ width: `${Math.min(100, Math.max(0, scrollProgress * 100))}%` }}
        />
      </div>

      {/* Top Navigation Bar */}
      <header
        className={`sticky top-0 z-40 border-b backdrop-blur-md no-print ${
          darkMode
            ? 'bg-slate-950/85 border-slate-800/80 shadow-lg shadow-black/20'
            : 'bg-white/90 border-slate-200/90 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo / Game Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-md shadow-emerald-500/25 ring-2 ring-emerald-400/20">
              <span className="text-white font-extrabold text-base tracking-tighter">3D</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base sm:text-lg tracking-tight">3D Arrow Escape</span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Game Policy
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">Developer: Muhammad_Awais09</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Plain text / Markdown view (super useful for Google Play Console submission) */}
            <button
              onClick={() => setShowRawModal(true)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                darkMode
                  ? 'bg-slate-800/90 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
              title="View & copy plain text for Google Play Console"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden md:inline">Raw Text</span>
            </button>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                darkMode
                  ? 'bg-slate-800/90 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
              title="Print document or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Print / PDF</span>
            </button>

            {/* Share / Copy Link */}
            <button
              onClick={handleCopyLink}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                darkMode
                  ? 'bg-slate-800/90 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
              title="Copy link to clipboard"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Share</span>
                </>
              )}
            </button>

            {/* Dark/Light mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg text-slate-400 transition-colors ${
                darkMode
                  ? 'bg-slate-800/80 hover:bg-slate-700 hover:text-slate-200 border border-slate-700'
                  : 'bg-slate-100 hover:bg-slate-200 hover:text-slate-800 border border-slate-200'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Hero Header */}
      <div
        className={`relative overflow-hidden border-b ${
          darkMode
            ? 'bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-slate-800/80'
            : 'bg-gradient-to-b from-emerald-50/60 via-slate-50 to-white border-slate-200'
        }`}
      >
        {/* Glow ambient circle background */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 relative z-10">
          <div className="flex flex-col items-start gap-4">
            {/* Meta Tags / Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Official Privacy Document
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-slate-400 bg-slate-800/40 border border-slate-700/60">
                <Calendar className="w-3.5 h-3.5 text-teal-400" />
                Effective Date: October 6, 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-slate-400 bg-slate-800/40 border border-slate-700/60">
                <Radio className="w-3.5 h-3.5 text-indigo-400" />
                Google AdMob Compliant
              </span>
            </div>

            {/* Title & Description */}
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                Privacy Policy for{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  3D Arrow Escape
                </span>
              </h1>
              <p className={`mt-3 text-base sm:text-lg leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Clear, transparent, and user-first privacy standards. We respect your rights and ensure your brain-puzzle gaming experience is free from intrusive data collection.
              </p>
            </div>

            {/* Quick Metadata Card */}
            <div
              className={`w-full mt-4 p-4 sm:p-5 rounded-2xl border backdrop-blur-sm grid grid-cols-1 sm:grid-cols-3 gap-4 ${
                darkMode ? 'bg-slate-900/60 border-slate-800/90' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div>
                <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Game Title</span>
                <p className="mt-1 text-sm font-bold flex items-center gap-1.5">
                  <Gamepad2 className="w-4 h-4 text-emerald-400" />
                  3D Arrow Escape
                </p>
              </div>

              <div>
                <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Developer</span>
                <p className="mt-1 text-sm font-bold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-teal-400" />
                  Muhammad_Awais09
                </p>
              </div>

              <div>
                <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Contact Email</span>
                <div className="mt-1 flex items-center gap-2">
                  <a
                    href="mailto:trendwibemedia@gmail.com"
                    className="text-sm font-bold text-emerald-400 hover:text-emerald-300 hover:underline truncate"
                  >
                    trendwibemedia@gmail.com
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 rounded hover:bg-slate-700/50 text-slate-400 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* At-a-Glance Executive Summary 4-Grid */}
            <div className="w-full mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div
                className={`p-3.5 rounded-xl border flex items-start gap-3 ${
                  darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200/80 shadow-xs'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 text-emerald-400 border border-emerald-500/20">
                  <UserX className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-emerald-400">Zero Accounts</h4>
                  <p className="text-xs text-slate-400 mt-0.5">No login, registration, or profile info required.</p>
                </div>
              </div>

              <div
                className={`p-3.5 rounded-xl border flex items-start gap-3 ${
                  darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200/80 shadow-xs'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center shrink-0 text-teal-400 border border-teal-500/20">
                  <CameraOff className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-teal-400">No Permissions</h4>
                  <p className="text-xs text-slate-400 mt-0.5">No camera, microphone, GPS or storage access.</p>
                </div>
              </div>

              <div
                className={`p-3.5 rounded-xl border flex items-start gap-3 ${
                  darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200/80 shadow-xs'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0 text-indigo-400 border border-indigo-500/20">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-indigo-400">No User Database</h4>
                  <p className="text-xs text-slate-400 mt-0.5">We operate no backend server collecting user records.</p>
                </div>
              </div>

              <div
                className={`p-3.5 rounded-xl border flex items-start gap-3 ${
                  darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200/80 shadow-xs'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0 text-cyan-400 border border-cyan-500/20">
                  <Radio className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-cyan-400">Google AdMob</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Transparent ads to keep the game free for all.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout with Sticky Sidebar TOC */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Table of Contents */}
          <aside className="lg:col-span-4 sticky top-20 no-print">
            <div
              className={`rounded-2xl border p-5 backdrop-blur-sm transition-all ${
                darkMode ? 'bg-slate-900/70 border-slate-800 shadow-xl shadow-black/20' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/60 mb-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Table of Contents</span>
                </div>
                <span className="text-xs font-medium text-slate-400">11 Sections</span>
              </div>

              {/* Quick Search inside TOC */}
              <div className="relative mb-3">
                <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter sections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border outline-none transition-all ${
                    darkMode
                      ? 'bg-slate-950/60 border-slate-800 text-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                      : 'bg-slate-50 border-slate-200 text-slate-700 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600'
                  }`}
                />
              </div>

              {/* Navigation links */}
              <nav className="space-y-1 max-h-[55vh] overflow-y-auto pr-1">
                {filteredSections.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-all group ${
                        isActive
                          ? darkMode
                            ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                            : 'bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold'
                          : darkMode
                          ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      <span
                        className={`w-5 h-5 rounded-md flex items-center justify-center text-[11px] font-bold shrink-0 transition-colors ${
                          isActive
                            ? 'bg-emerald-500 text-slate-950'
                            : darkMode
                            ? 'bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-slate-200'
                            : 'bg-slate-200 text-slate-600 group-hover:bg-slate-300'
                        }`}
                      >
                        {section.number}
                      </span>
                      <span className="truncate">{section.title}</span>
                    </a>
                  );
                })}
              </nav>

              {/* Contact Developer Quick Action Box */}
              <div
                className={`mt-4 pt-4 border-t ${
                  darkMode ? 'border-slate-800 text-slate-300' : 'border-slate-200 text-slate-600'
                }`}
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Need support?</span>
                  <a
                    href="mailto:trendwibemedia@gmail.com"
                    className="font-semibold text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-1"
                  >
                    Email Awais <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Policy Document Content */}
          <main className="lg:col-span-8 space-y-8">
            {/* 1. Introduction */}
            <section
              id="section-1"
              className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold flex items-center justify-center text-sm">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Introduction</h2>
              </div>

              <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <p>
                  Welcome to <strong className={darkMode ? 'text-white' : 'text-slate-900'}>3D Arrow Escape</strong>, a casual puzzle and brain exercise game developed by <strong className="text-emerald-400">Muhammad_Awais09</strong>.
                </p>
                <p>
                  We respect your privacy. <strong className={darkMode ? 'text-white' : 'text-slate-900'}>3D Arrow Escape</strong> is designed to be a simple game for entertainment and brain-training purposes. We do not require you to create an account, and we do not directly collect or store personal information on our own servers.
                </p>

                <div
                  className={`p-4 rounded-xl border flex items-start gap-3 mt-4 ${
                    darkMode ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-200' : 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  }`}
                >
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm">
                    <strong>Core Privacy Guarantee:</strong> You can download, launch, and play 3D Arrow Escape without ever giving us your personal identity or creating any user profile.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Information We Collect */}
            <section
              id="section-2"
              className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 font-bold flex items-center justify-center text-sm">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Information We Collect</h2>
              </div>

              <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <p className="font-medium">
                  We do not directly collect, store, or require personal information from users.
                </p>

                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    The game does not require:
                  </span>

                  {/* Grid representation of what is NOT collected */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
                    {PERMISSIONS_LIST.map((item, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl border flex items-start gap-3 ${
                          darkMode ? 'bg-slate-950/50 border-slate-800/80' : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                          {item.icon}
                        </div>
                        <div>
                          <span className={`text-xs sm:text-sm font-semibold block ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                            {item.name}
                          </span>
                          <span className="text-[11px] text-slate-400">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={`p-4 rounded-xl border flex items-start gap-3 mt-4 ${
                    darkMode ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-100 border-slate-200'
                  }`}
                >
                  <Database className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm">
                    <strong>Zero Remote Database Architecture:</strong> The game does not operate its own database or backend server for collecting user information.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. How We Use Your Information */}
            <section
              id="section-3"
              className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold flex items-center justify-center text-sm">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">How We Use Your Information</h2>
              </div>

              <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <p>
                  Since we do not directly collect personal information, we do not use personal information for our own purposes.
                </p>
                <p>
                  <strong className={darkMode ? 'text-white' : 'text-slate-900'}>3D Arrow Escape</strong> is simply designed to provide users with a fun puzzle and brain exercise experience.
                </p>
              </div>
            </section>

            {/* 4. Advertising and Third-Party Services */}
            <section
              id="section-4"
              className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold flex items-center justify-center text-sm">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Advertising and Third-Party Services</h2>
              </div>

              <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <p>
                  We use <strong className="text-amber-400 font-semibold">Google AdMob</strong> to display advertisements within the game. Advertising helps us keep the game free for users.
                </p>
                <p>
                  AdMob and its advertising partners may collect or process certain information, such as an advertising identifier, IP address, device information, and other technical information, in accordance with their own privacy policies and applicable laws.
                </p>
                <p>
                  Depending on applicable settings, permissions, and regulations, advertisements may be personalized or non-personalized.
                </p>
                <p>
                  We do not directly collect, store, or control this advertising information on our own servers.
                </p>
                <p>
                  For more information about how Google handles data in its advertising services, please review Google's privacy information.
                </p>

                {/* Third Party External Links Card */}
                <div
                  className={`mt-4 p-4 rounded-xl border ${
                    darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-amber-50/50 border-amber-200/60'
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Official Google & AdMob Privacy Resources:
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors"
                    >
                      Google Privacy Policy <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href="https://policies.google.com/technologies/ads"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 border border-teal-500/30 transition-colors"
                    >
                      Google Ad Technologies <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href="https://adssettings.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 border border-indigo-500/30 transition-colors"
                    >
                      Manage Google Ad Settings <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Data Sharing */}
            <section
              id="section-5"
              className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold flex items-center justify-center text-sm">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Data Sharing</h2>
              </div>

              <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <div
                  className={`p-4 rounded-xl border flex items-center gap-3 font-semibold ${
                    darkMode ? 'bg-slate-950/60 border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-200 text-slate-800'
                  }`}
                >
                  <Lock className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>We do NOT sell, rent, or monetize your personal information.</span>
                </div>
                <p>
                  We do not sell, rent, or directly share users' personal information with third parties because we do not collect personal information ourselves.
                </p>
                <p>
                  However, third-party services such as Google AdMob may independently process information necessary to provide advertising services. Their data practices are governed by their own policies.
                </p>
              </div>
            </section>

            {/* 6. Children's Privacy */}
            <section
              id="section-6"
              className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20 font-bold flex items-center justify-center text-sm">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Children's Privacy</h2>
              </div>

              <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <p>
                  <strong className={darkMode ? 'text-white' : 'text-slate-900'}>3D Arrow Escape</strong> is a general-audience puzzle and brain exercise game and is intended to be suitable for users of different age groups.
                </p>
                <p>
                  We do not knowingly collect personal information from children or other users.
                </p>
                <p>
                  Because advertisements are provided by Google AdMob, advertising and data practices may be subject to Google's policies and applicable laws regarding children and users of different ages.
                </p>
              </div>
            </section>

            {/* 7. Data Security */}
            <section
              id="section-7"
              className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold flex items-center justify-center text-sm">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Data Security</h2>
              </div>

              <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <p>
                  Because we do not operate a system that collects or stores users' personal information, we do not maintain a personal user-data database.
                </p>
                <p>
                  Third-party services used by the game, such as Google AdMob, are responsible for the security and processing of data they collect or process under their respective policies.
                </p>
              </div>
            </section>

            {/* 8. Data Retention and Deletion */}
            <section
              id="section-8"
              className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 font-bold flex items-center justify-center text-sm">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Data Retention and Deletion</h2>
              </div>

              <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <p>
                  We do not directly collect or store personal user information, so we do not retain personal information on our own servers.
                </p>
                <p>
                  If you have questions about information processed by Google AdMob, please refer to Google's privacy resources and available privacy controls.
                </p>

                <div
                  className={`p-4 rounded-xl border text-xs sm:text-sm mt-3 ${
                    darkMode ? 'bg-slate-950/60 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <p className="font-semibold text-emerald-400 mb-1">Tip: How to reset your Advertising ID on Android</p>
                  <p>
                    You can reset your device advertising ID anytime on your Android device by going to:
                    <br />
                    <code className="text-xs bg-slate-800 px-2 py-0.5 rounded text-teal-300 mt-1 inline-block">
                      Settings → Google → Ads → Reset Advertising ID
                    </code>
                  </p>
                </div>
              </div>
            </section>

            {/* 9. Changes to This Privacy Policy */}
            <section
              id="section-9"
              className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold flex items-center justify-center text-sm">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Changes to This Privacy Policy</h2>
              </div>

              <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes to the game, third-party services, or applicable legal requirements.
                </p>
                <p>
                  Any updated Privacy Policy will be posted on this page with a revised effective date.
                </p>
              </div>
            </section>

            {/* 10. Contact Us */}
            <section
              id="section-10"
              className={`p-6 sm:p-8 rounded-2xl border transition-all relative overflow-hidden ${
                darkMode
                  ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/20 border-emerald-500/40 shadow-xl'
                  : 'bg-white border-emerald-300 shadow-md'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold flex items-center justify-center text-sm">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Contact Us</h2>
              </div>

              <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <p>
                  If you have any questions or concerns about this Privacy Policy or 3D Arrow Escape, you can contact us at:
                </p>

                {/* Email Box */}
                <div
                  className={`p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                    darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Developer Official Email</span>
                      <span className="text-sm sm:text-base font-bold text-emerald-400 select-all">
                        trendwibemedia@gmail.com
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={handleCopyEmail}
                      className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                        darkMode
                          ? 'bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700'
                          : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
                      }`}
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Email</span>
                        </>
                      )}
                    </button>

                    <a
                      href="mailto:trendwibemedia@gmail.com?subject=Inquiry%20regarding%203D%20Arrow%20Escape%20Privacy%20Policy"
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-md shadow-emerald-500/25"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send Email</span>
                    </a>
                  </div>
                </div>

                <p className="text-xs text-slate-400">
                  Developer: <strong className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Muhammad_Awais09</strong> • Direct response within 24-48 business hours.
                </p>
              </div>
            </section>

            {/* 11. Your Consent */}
            <section
              id="section-11"
              className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 font-bold flex items-center justify-center text-sm">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Your Consent</h2>
              </div>

              <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <p>
                  By installing or using <strong className={darkMode ? 'text-white' : 'text-slate-900'}>3D Arrow Escape</strong>, you acknowledge that you have read and understood this Privacy Policy.
                </p>
                <p>
                  If you do not agree with this Privacy Policy, please do not use the game.
                </p>

                <div
                  className={`p-4 rounded-xl border flex items-center gap-3 text-xs sm:text-sm font-medium ${
                    darkMode ? 'bg-slate-950/60 border-slate-800 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-800'
                  }`}
                >
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Thank you for playing 3D Arrow Escape and enjoying our brain puzzle challenges!</span>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Floating Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 no-print"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}

      {/* Footer */}
      <footer
        className={`mt-16 border-t ${
          darkMode ? 'bg-slate-950 border-slate-800/80 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-bold text-xs">
              3D
            </div>
            <span>
              © {new Date().getFullYear()} <strong>3D Arrow Escape</strong>. Developed by <strong>Muhammad_Awais09</strong>.
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Effective Date: Oct 6, 2026</span>
            <span>•</span>
            <a href="mailto:trendwibemedia@gmail.com" className="hover:text-emerald-400 transition-colors">
              Support
            </a>
            <span>•</span>
            <button onClick={handlePrint} className="hover:text-emerald-400 transition-colors">
              Print
            </button>
          </div>
        </div>
      </footer>

      {/* Raw Text Modal (Easy copy for Google Play Console submission) */}
      {showRawModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm no-print">
          <div
            className={`w-full max-w-2xl max-h-[85vh] rounded-2xl border flex flex-col shadow-2xl overflow-hidden ${
              darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base">Raw Text / Plain Text</h3>
                <p className="text-xs text-slate-400">Ready to copy directly for Google Play Store Console submission</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={copyPlainText}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors"
                >
                  {showCopiedRaw ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Full Text</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setShowRawModal(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-5 overflow-y-auto font-mono text-xs leading-relaxed select-all bg-slate-950/60">
              <pre className="whitespace-pre-wrap">{plainTextDocument}</pre>
            </div>

            {/* Modal Footer */}
            <div className="p-3 border-t border-slate-800 text-right text-xs text-slate-400">
              Click anywhere inside the text or click "Copy Full Text"
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
