import React, { useState } from 'react';
import {
  Sparkles,
  Compass,
  FileCheck,
  Map,
  BookOpen,
  RotateCcw,
  LayoutDashboard,
  Menu,
  X,
  Target,
  ChevronRight,
} from 'lucide-react';
import { AppScreen, TargetJob } from '../types';

interface NavbarProps {
  currentScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
  selectedJob: TargetJob;
  completedStepsCount: number;
  totalStepsCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onNavigate,
  selectedJob,
  completedStepsCount,
  totalStepsCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: AppScreen; label: string; icon: React.ElementType }[] = [
    { id: 'home', label: 'Home', icon: Compass },
    { id: 'intake', label: 'Goal Intake', icon: Target },
    { id: 'analysis', label: 'Skill Analysis', icon: FileCheck },
    { id: 'roadmap', label: 'Learning Path', icon: Map },
    { id: 'learning', label: 'Learning / Quiz', icon: BookOpen },
    { id: 'revision', label: 'Revision', icon: RotateCcw },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  ];

  const handleNavClick = (screen: AppScreen) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
      {/* Top utility notification bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 font-semibold text-emerald-400">
              <Sparkles className="w-3 h-3" /> Prototype Demo
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="hidden sm:inline text-slate-300">
              Personalized Career Pathway Engine for Students & Job Seekers
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400">Target Role:</span>
            <span className="font-semibold text-white bg-slate-800 px-2 py-0.5 rounded text-[11px]">
              {selectedJob.title}
            </span>
            <span className="text-slate-400 hidden md:inline">
              Progress: <strong className="text-emerald-400">{completedStepsCount}/{totalStepsCount} Steps</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Tagline */}
          <div
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-sm shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-slate-900">
                  Skill<span className="text-indigo-600">Forge</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200/60 px-1.5 py-0.5 rounded">
                  AI Generator
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block leading-tight">
                Learn the skills your dream job actually needs.
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700 font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              id="header-cta-button"
              onClick={() => handleNavClick(currentScreen === 'home' ? 'intake' : 'roadmap')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition-colors"
            >
              <span>{currentScreen === 'home' ? 'Get Started' : 'My Roadmap'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-1 shadow-lg">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 py-1">
            Application Flow
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                  isActive ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {isActive && <span className="w-2 h-2 rounded-full bg-indigo-600"></span>}
              </button>
            );
          })}
        </div>
      )}

      {/* Interactive Breadcrumb Flow Tracker */}
      <div className="bg-slate-50 border-t border-slate-200/80 px-4 py-2 text-xs overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center gap-2 whitespace-nowrap text-slate-500">
          <span className="font-semibold text-slate-700">Journey:</span>
          {navItems.map((step, idx) => {
            const isCurrent = currentScreen === step.id;
            return (
              <React.Fragment key={step.id}>
                {idx > 0 && <span className="text-slate-300">→</span>}
                <button
                  onClick={() => handleNavClick(step.id)}
                  className={`hover:underline cursor-pointer transition-colors ${
                    isCurrent ? 'font-bold text-indigo-600 underline' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {step.label}
                </button>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </header>
  );
};
