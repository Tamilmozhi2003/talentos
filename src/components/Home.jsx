import { useState, useRef, useEffect } from 'react';
import './Home.css';
import campusBanner from '../assets/images/campus-banner.png';
import rocketImg from '../assets/images/rocket.png';
import gradCapImg from '../assets/images/grad-cap.png';
import {
  Landmark,
  CreditCard,
  Users,
  BarChart2,
  BarChart3,
  Bell,
  ChevronDown,
  TrendingUp,
  Zap,
  Crown,
  Rocket,
  Menu,
  X,
  User,
  Settings,
  LogOut
} from 'lucide-react';

export default function Home() {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [timeFilter, setTimeFilter] = useState('1M');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef(null);

  // Close profile dropdown when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setProfileDropdownOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setProfileDropdownOpen(false);
      }
    };

    if (profileDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [profileDropdownOpen]);

  const handleNavClick = (menu) => {
    setActiveMenu(menu);
    setMobileMenuOpen(false);
    setProfileDropdownOpen(false);
  };

  return (
    <div className="talentos-dashboard-container">
      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="sidebar-backdrop active"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close navigation"
        />
      )}

      {/* 1. LEFT SIDEBAR */}
      <aside className={`talentos-sidebar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        {/* Brand Logo - Graduation Cap + Artlysoft TalentOS */}
        <div className="sidebar-brand">
          <div className="brand-logo-badge">
            <img
              src={gradCapImg}
              alt="TalentOS Graduation Cap"
              className="brand-cap-img"
            />
          </div>
          <div className="brand-text-wrap">
            <div className="brand-company">
              <span className="brand-artly">Artly</span>
              <span className="brand-soft">soft</span>
            </div>
            <div className="brand-title">
              <span className="brand-talent">Talent</span>
              <span className="brand-os">OS</span>
            </div>
          </div>
          <button
            type="button"
            className="sidebar-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation"
          >
            <X size={20} strokeWidth={2.2} />
          </button>
        </div>

        {/* Sidebar Navigation - Pure White Bootstrap Icons */}
        <nav className="sidebar-nav">
          <div
            className={`nav-item ${activeMenu === 'Dashboard' ? 'active' : ''}`}
            onClick={() => handleNavClick('Dashboard')}
          >
            <i className="bi bi-house-door-fill nav-icon"></i>
            <span className="nav-label">Dashboard</span>
          </div>

          <div
            className={`nav-item ${activeMenu === 'Institutes' ? 'active' : ''}`}
            onClick={() => handleNavClick('Institutes')}
          >
            <i className="bi bi-bank nav-icon"></i>
            <span className="nav-label">Institutes</span>
          </div>

          <div
            className={`nav-item ${activeMenu === 'Subscription Plans' ? 'active' : ''}`}
            onClick={() => handleNavClick('Subscription Plans')}
          >
            <i className="bi bi-card-checklist nav-icon"></i>
            <span className="nav-label">Subscription Plans</span>
          </div>

          <div
            className={`nav-item ${activeMenu === 'Payments' ? 'active' : ''}`}
            onClick={() => handleNavClick('Payments')}
          >
            <i className="bi bi-credit-card-2-front nav-icon"></i>
            <span className="nav-label">Payments</span>
          </div>

          <div
            className={`nav-item ${activeMenu === 'Invoices' ? 'active' : ''}`}
            onClick={() => handleNavClick('Invoices')}
          >
            <i className="bi bi-file-earmark-text nav-icon"></i>
            <span className="nav-label">Invoices</span>
          </div>

          <div
            className={`nav-item ${activeMenu === 'Users' ? 'active' : ''}`}
            onClick={() => handleNavClick('Users')}
          >
            <i className="bi bi-people nav-icon"></i>
            <span className="nav-label">Users</span>
          </div>

          <div
            className={`nav-item ${activeMenu === 'Create Admin' ? 'active' : ''}`}
            onClick={() => handleNavClick('Create Admin')}
          >
            <i className="bi bi-person-plus nav-icon"></i>
            <span className="nav-label">Create Admin</span>
          </div>

          <div
            className={`nav-item has-dropdown ${activeMenu === 'Reports' ? 'active' : ''}`}
            onClick={() => handleNavClick('Reports')}
          >
            <i className="bi bi-bar-chart-line nav-icon"></i>
            <span className="nav-label">Reports</span>
            <i className="bi bi-chevron-down dropdown-arrow"></i>
          </div>

          <div
            className={`nav-item ${activeMenu === 'AI Analytics' ? 'active' : ''}`}
            onClick={() => handleNavClick('AI Analytics')}
          >
            <i className="bi bi-flower1 nav-icon"></i>
            <span className="nav-label">AI Analytics</span>
          </div>

          <div
            className={`nav-item has-dropdown ${activeMenu === 'Settings' ? 'active' : ''}`}
            onClick={() => handleNavClick('Settings')}
          >
            <i className="bi bi-gear nav-icon"></i>
            <span className="nav-label">Settings</span>
            <i className="bi bi-chevron-down dropdown-arrow"></i>
          </div>
        </nav>

        {/* Bottom Promo Card */}
        <div className="sidebar-promo-card">
          <div className="promo-rocket-wrap">
            <img
              src={rocketImg}
              alt="Rocket Illustration"
              className="promo-rocket-img"
            />
          </div>
          <p className="promo-heading">
            Building a Smarter
            <br />
            Education Ecosystem
          </p>
          <span className="promo-sub">with TalentOS</span>
          <button className="promo-btn">
            <span>Learn More</span>
            <i className="bi bi-arrow-right" style={{ fontSize: '11px' }}></i>
          </button>
        </div>

        {/* Sidebar Copyright */}
        <div className="sidebar-copyright">
          © 2026 TalentOS. All rights reserved.
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="talentos-main-area">
        {/* 2. TOP HEADER */}
        <header className="talentos-top-header">
          {/* Header Left: Hamburger (mobile/tablet) + Title */}
          <div className="header-left-wrap">
            <button
              type="button"
              className="mobile-hamburger-btn"
              onClick={() => {
                setMobileMenuOpen(true);
                setProfileDropdownOpen(false);
              }}
              aria-label="Open navigation menu"
            >
              <Menu size={20} strokeWidth={2.2} />
            </button>
            <div className="header-platform-title">
              <span className="platform-prefix">TalentOS</span>
              <span className="platform-slash">/</span>
              <span className="platform-name">Campus platform</span>
            </div>
          </div>

          {/* Right Header: Notification & Admin Profile */}
          <div className="header-right-wrap">
            <button
              type="button"
              className="notification-bell-btn"
              aria-label="View notifications"
            >
              <Bell className="bell-icon" size={20} strokeWidth={1.9} />
            </button>

            {/* Profile Dropdown Container */}
            <div className="admin-profile-container" ref={profileDropdownRef}>
              <div
                className={`admin-profile-pill ${profileDropdownOpen ? 'active' : ''}`}
                onClick={() => setProfileDropdownOpen((prev) => !prev)}
                role="button"
                tabIndex={0}
                aria-haspopup="true"
                aria-expanded={profileDropdownOpen}
                aria-label="User profile menu"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setProfileDropdownOpen((prev) => !prev);
                  }
                }}
              >
                <div className="admin-avatar-circle" aria-hidden="true">
                  <span>SA</span>
                </div>
                <div className="admin-info-box">
                  <div className="admin-name-row">
                    <span className="admin-name">Super Admin</span>
                    <ChevronDown
                      className={`admin-chevron ${profileDropdownOpen ? 'rotated' : ''}`}
                      size={15}
                      strokeWidth={2.2}
                    />
                  </div>
                  <span className="admin-role">Administrator</span>
                </div>
              </div>

              {/* Dropdown Menu (matching 2nd uploaded image) */}
              {profileDropdownOpen && (
                <div className="admin-profile-dropdown" role="menu" aria-label="Profile options">
                  <div className="dropdown-user-header">
                    <div className="dropdown-avatar-circle" aria-hidden="true">
                      <span>SA</span>
                    </div>
                    <div className="dropdown-user-details">
                      <span className="dropdown-user-name">SuperAdmin</span>
                      <span className="dropdown-user-email">super@pmccollege.ac.in</span>
                    </div>
                  </div>

                  <div className="dropdown-divider" />

                  <div className="dropdown-menu-list">
                    <button
                      type="button"
                      className="dropdown-menu-item"
                      role="menuitem"
                      onClick={() => {
                        setProfileDropdownOpen(false);
                      }}
                    >
                      <User className="dropdown-item-icon" size={18} strokeWidth={1.9} />
                      <span className="dropdown-item-label">My Profile</span>
                    </button>

                    <button
                      type="button"
                      className="dropdown-menu-item"
                      role="menuitem"
                      onClick={() => {
                        handleNavClick('Settings');
                        setProfileDropdownOpen(false);
                      }}
                    >
                      <Settings className="dropdown-item-icon" size={18} strokeWidth={1.9} />
                      <span className="dropdown-item-label">Settings</span>
                    </button>

                    <button
                      type="button"
                      className="dropdown-menu-item dropdown-logout-item"
                      role="menuitem"
                      onClick={() => {
                        setProfileDropdownOpen(false);
                      }}
                    >
                      <LogOut className="dropdown-item-icon" size={18} strokeWidth={1.9} />
                      <span className="dropdown-item-label">Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* 3. WELCOME SECTION */}
        <section className="welcome-banner-card">
          <div className="welcome-text-content">
            <h1 className="welcome-heading">Super Admin Dashboard</h1>
            <p className="welcome-subtitle">
              Manage your platform, monitor growth and drive educational excellence.
            </p>
          </div>

          <div className="welcome-art-container">
            <img
              src={campusBanner}
              alt="Campus & Geometric Accents"
              className="welcome-art-img"
            />
          </div>
        </section>

        {/* 4. FOUR STATISTICS CARDS */}
        <section className="stats-cards-grid">
          {/* Card 1: Total Institutes */}
          <div className="stat-card">
            <div className="stat-icon-wrap stat-icon-blue">
              <Landmark size={21} strokeWidth={2.2} />
            </div>
            <div className="stat-info">
              <span className="stat-label">Total Institutes</span>
              <h2 className="stat-value">120</h2>
              <span className="stat-growth green-text">
                <span className="growth-arrow">↑</span> +12%
              </span>
            </div>
            <div className="stat-ascending-bars bars-blue">
              <span style={{ height: '20%' }}></span>
              <span style={{ height: '36%' }}></span>
              <span style={{ height: '52%' }}></span>
              <span style={{ height: '68%' }}></span>
              <span style={{ height: '84%' }}></span>
              <span style={{ height: '100%' }}></span>
            </div>
          </div>

          {/* Card 2: Total Students */}
          <div className="stat-card">
            <div className="stat-icon-wrap stat-icon-purple">
              <svg
                viewBox="0 0 34 24"
                className="stat-svg-students"
                fill="currentColor"
              >
                {/* Center Person (Front) */}
                <circle cx="17" cy="6" r="4.3" />
                <path d="M 17 13.5 C 12.6 13.5 9 16.8 9 21 L 9 23.2 C 9 23.6 9.4 24 10 24 L 24 24 C 24.6 24 25 23.6 25 23.2 L 25 21 C 25 16.8 21.4 13.5 17 13.5 Z" />

                {/* Left Person (Back Left) */}
                <circle cx="6.5" cy="7" r="3.2" />
                <path d="M 5.8 13.5 C 3.2 13.5 1 15.6 1 18.2 L 1 21.2 C 1 21.6 1.4 22 1.8 22 L 6.8 22 C 6.9 20.4 7.5 18.5 8.6 16.8 L 9.6 15.2 C 8.6 14.1 7.3 13.5 5.8 13.5 Z" />

                {/* Right Person (Back Right) */}
                <circle cx="27.5" cy="7" r="3.2" />
                <path d="M 28.2 13.5 C 30.8 13.5 33 15.6 33 18.2 L 33 21.2 C 33 21.6 32.6 22 32.2 22 L 27.2 22 C 27.1 20.4 26.5 18.5 25.4 16.8 L 24.4 15.2 C 25.4 14.1 26.7 13.5 28.2 13.5 Z" />
              </svg>
            </div>
            <div className="stat-info">
              <span className="stat-label">Total Students</span>
              <h2 className="stat-value">45K</h2>
              <span className="stat-growth green-text">
                <span className="growth-arrow">↑</span> +18%
              </span>
            </div>
            <div className="stat-ascending-bars bars-purple">
              <span style={{ height: '20%' }}></span>
              <span style={{ height: '36%' }}></span>
              <span style={{ height: '52%' }}></span>
              <span style={{ height: '68%' }}></span>
              <span style={{ height: '84%' }}></span>
              <span style={{ height: '100%' }}></span>
            </div>
          </div>

          {/* Card 3: Total Faculty */}
          <div className="stat-card">
            <div className="stat-icon-wrap stat-icon-orange">
              <svg
                viewBox="0 0 16 16"
                className="stat-svg-faculty"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Faculty Person (Body & Head) */}
                <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1z" />
                <path d="M8 10.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                {/* Classroom Workspace / Presentation Screen Frame */}
                <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z" />
              </svg>
            </div>
            <div className="stat-info">
              <span className="stat-label">Total Faculty</span>
              <h2 className="stat-value">12.5K</h2>
              <span className="stat-growth green-text">
                <span className="growth-arrow">↑</span> +10%
              </span>
            </div>
            <div className="stat-ascending-bars bars-orange">
              <span style={{ height: '20%' }}></span>
              <span style={{ height: '36%' }}></span>
              <span style={{ height: '52%' }}></span>
              <span style={{ height: '68%' }}></span>
              <span style={{ height: '84%' }}></span>
              <span style={{ height: '100%' }}></span>
            </div>
          </div>

          {/* Card 4: Total Revenue */}
          <div className="stat-card">
            <div className="stat-icon-wrap stat-icon-green">
              <CreditCard size={21} strokeWidth={2.2} />
            </div>
            <div className="stat-info">
              <span className="stat-label">Total Revenue</span>
              <h2 className="stat-value">₹12.5L</h2>
              <span className="stat-growth green-text">
                <span className="growth-arrow">↑</span> +22%
              </span>
            </div>
            <div className="stat-ascending-bars bars-green">
              <span style={{ height: '20%' }}></span>
              <span style={{ height: '36%' }}></span>
              <span style={{ height: '52%' }}></span>
              <span style={{ height: '68%' }}></span>
              <span style={{ height: '84%' }}></span>
              <span style={{ height: '100%' }}></span>
            </div>
          </div>
        </section>

        {/* 5 & 6. PLATFORM GROWTH OVERVIEW & RECENT ACTIVITIES */}
        <section className="growth-and-activities-row">
          {/* Card 5: Platform Growth Overview */}
          <div className="growth-overview-card">
            <div className="card-header-row">
              <div className="card-title-group">
                <div className="title-icon-blue">
                  <TrendingUp size={16} strokeWidth={2.5} />
                </div>
                <h3 className="card-title">Platform Growth Overview</h3>
              </div>

              <div className="time-filter-pills">
                {['1M', '3M', '6M', '1Y'].map((filter) => (
                  <button
                    key={filter}
                    className={`filter-btn ${timeFilter === filter ? 'active' : ''}`}
                    onClick={() => setTimeFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Chart Legend */}
            <div className="chart-legend-row">
              <div className="legend-item">
                <span className="legend-dot dot-blue"></span>
                <span className="legend-text">Institutes</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot dot-orange"></span>
                <span className="legend-text">Students</span>
              </div>
            </div>

            {/* Area Chart SVG */}
            <div className="growth-chart-wrap">
              <svg viewBox="0 0 570 162" className="growth-chart-svg" preserveAspectRatio="none">
                <defs>
                  {/* Blue Area Gradient */}
                  <linearGradient id="institutesAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2864F5" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#2864F5" stopOpacity="0.0" />
                  </linearGradient>

                  {/* Orange Area Gradient */}
                  <linearGradient id="studentsAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F97316" stopOpacity="0.16" />
                    <stop offset="100%" stopColor="#F97316" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Horizontal Grid lines */}
                <line x1="34" y1="20" x2="555" y2="20" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="34" y1="50" x2="555" y2="50" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="34" y1="80" x2="555" y2="80" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="34" y1="110" x2="555" y2="110" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="34" y1="140" x2="555" y2="140" stroke="#F1F5F9" strokeWidth="1" />

                {/* Y-Axis Labels */}
                <text x="28" y="23" className="axis-label" textAnchor="end">40K</text>
                <text x="28" y="53" className="axis-label" textAnchor="end">30K</text>
                <text x="28" y="83" className="axis-label" textAnchor="end">20K</text>
                <text x="28" y="113" className="axis-label" textAnchor="end">10K</text>
                <text x="28" y="143" className="axis-label" textAnchor="end">0</text>

                {/* X-Axis Labels */}
                <text x="50" y="155" className="axis-label" textAnchor="middle">Oct 1</text>
                <text x="147" y="155" className="axis-label" textAnchor="middle">Oct 7</text>
                <text x="244" y="155" className="axis-label" textAnchor="middle">Oct 14</text>
                <text x="341" y="155" className="axis-label" textAnchor="middle">Oct 21</text>
                <text x="438" y="155" className="axis-label" textAnchor="middle">Oct 28</text>
                <text x="535" y="155" className="axis-label" textAnchor="middle">Oct 31</text>

                {/* INSTITUTES AREA & LINE (Blue) */}
                <path
                  d="M 50.0,99.5 C 58.1,98.0 82.3,93.7 98.5,90.5 C 114.7,87.3 130.8,82.1 147.0,80.6 C 163.2,79.0 179.3,83.4 195.5,81.2 C 211.7,79.0 227.8,68.9 244.0,67.4 C 260.2,66.0 276.3,74.5 292.5,72.5 C 308.7,70.5 324.8,57.8 341.0,55.4 C 357.2,53.1 373.3,59.7 389.5,58.4 C 405.7,57.1 421.8,49.4 438.0,47.6 C 454.2,45.8 470.3,51.2 486.5,47.6 C 502.7,44.0 526.9,29.6 535.0,26.0 L 535.0,140 L 50.0,140 Z"
                  fill="url(#institutesAreaGrad)"
                />
                <path
                  d="M 50.0,99.5 C 58.1,98.0 82.3,93.7 98.5,90.5 C 114.7,87.3 130.8,82.1 147.0,80.6 C 163.2,79.0 179.3,83.4 195.5,81.2 C 211.7,79.0 227.8,68.9 244.0,67.4 C 260.2,66.0 276.3,74.5 292.5,72.5 C 308.7,70.5 324.8,57.8 341.0,55.4 C 357.2,53.1 373.3,59.7 389.5,58.4 C 405.7,57.1 421.8,49.4 438.0,47.6 C 454.2,45.8 470.3,51.2 486.5,47.6 C 502.7,44.0 526.9,29.6 535.0,26.0"
                  fill="none"
                  stroke="#2864F5"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* Institutes Points */}
                <circle cx="50.0" cy="99.5" r="3.5" fill="#2864F5" stroke="#FFFFFF" strokeWidth="1.5" />
                <circle cx="98.5" cy="90.5" r="3.5" fill="#2864F5" stroke="#FFFFFF" strokeWidth="1.5" />
                <circle cx="147.0" cy="80.6" r="3.5" fill="#2864F5" stroke="#FFFFFF" strokeWidth="1.5" />
                <circle cx="195.5" cy="81.2" r="3.5" fill="#2864F5" stroke="#FFFFFF" strokeWidth="1.5" />
                <circle cx="244.0" cy="67.4" r="3.5" fill="#2864F5" stroke="#FFFFFF" strokeWidth="1.5" />
                <circle cx="292.5" cy="72.5" r="3.5" fill="#2864F5" stroke="#FFFFFF" strokeWidth="1.5" />
                <circle cx="341.0" cy="55.4" r="3.5" fill="#2864F5" stroke="#FFFFFF" strokeWidth="1.5" />
                <circle cx="389.5" cy="58.4" r="3.5" fill="#2864F5" stroke="#FFFFFF" strokeWidth="1.5" />
                <circle cx="438.0" cy="47.6" r="3.5" fill="#2864F5" stroke="#FFFFFF" strokeWidth="1.5" />
                <circle cx="486.5" cy="47.6" r="3.5" fill="#2864F5" stroke="#FFFFFF" strokeWidth="1.5" />

                {/* Institutes Endpoint Label Badge: 38K */}
                <rect x="520" y="16" width="32" height="18" rx="9" fill="#2864F5" />
                <text x="536" y="29" fill="#FFFFFF" fontSize="9.5" fontWeight="700" textAnchor="middle">
                  38K
                </text>

                {/* STUDENTS AREA & LINE (Orange) */}
                <path
                  d="M 50.0,125.0 C 58.1,123.6 82.3,119.2 98.5,116.6 C 114.7,114.0 130.8,110.6 147.0,109.4 C 163.2,108.2 179.3,111.1 195.5,109.4 C 211.7,107.8 227.8,100.7 244.0,99.5 C 260.2,98.3 276.3,103.8 292.5,102.5 C 308.7,101.2 324.8,93.2 341.0,92.0 C 357.2,90.8 373.3,96.7 389.5,95.6 C 405.7,94.5 421.8,87.2 438.0,85.4 C 454.2,83.6 470.3,86.4 486.5,84.5 C 502.7,82.6 526.9,75.8 535.0,74.0 L 535.0,140 L 50.0,140 Z"
                  fill="url(#studentsAreaGrad)"
                />
                <path
                  d="M 50.0,125.0 C 58.1,123.6 82.3,119.2 98.5,116.6 C 114.7,114.0 130.8,110.6 147.0,109.4 C 163.2,108.2 179.3,111.1 195.5,109.4 C 211.7,107.8 227.8,100.7 244.0,99.5 C 260.2,98.3 276.3,103.8 292.5,102.5 C 308.7,101.2 324.8,93.2 341.0,92.0 C 357.2,90.8 373.3,96.7 389.5,95.6 C 405.7,94.5 421.8,87.2 438.0,85.4 C 454.2,83.6 470.3,86.4 486.5,84.5 C 502.7,82.6 526.9,75.8 535.0,74.0"
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* Students Points */}
                <circle cx="50.0" cy="125.0" r="3.5" fill="#F97316" stroke="#FFFFFF" strokeWidth="1.5" />
                <circle cx="98.5" cy="116.6" r="3.5" fill="#F97316" stroke="#FFFFFF" strokeWidth="1.5" />
                <circle cx="147.0" cy="109.4" r="3.5" fill="#F97316" stroke="#FFFFFF" strokeWidth="1.5" />
                <circle cx="195.5" cy="109.4" r="3.5" fill="#F97316" stroke="#FFFFFF" strokeWidth="1.5" />
                <circle cx="244.0" cy="99.5" r="3.5" fill="#F97316" stroke="#FFFFFF" strokeWidth="1.5" />
                <circle cx="292.5" cy="102.5" r="3.5" fill="#F97316" stroke="#FFFFFF" strokeWidth="1.5" />
                <circle cx="341.0" cy="92.0" r="3.5" fill="#F97316" stroke="#FFFFFF" strokeWidth="1.5" />
                <circle cx="389.5" cy="95.6" r="3.5" fill="#F97316" stroke="#FFFFFF" strokeWidth="1.5" />
                <circle cx="438.0" cy="85.4" r="3.5" fill="#F97316" stroke="#FFFFFF" strokeWidth="1.5" />
                <circle cx="486.5" cy="84.5" r="3.5" fill="#F97316" stroke="#FFFFFF" strokeWidth="1.5" />

                {/* Students Endpoint Label Badge: 22K */}
                <rect x="520" y="64" width="32" height="18" rx="9" fill="#F97316" />
                <text x="536" y="77" fill="#FFFFFF" fontSize="9.5" fontWeight="700" textAnchor="middle">
                  22K
                </text>
              </svg>
            </div>
          </div>

          {/* Card 6: Recent Activities */}
          <div className="recent-activities-card">
            <div className="card-header-row">
              <div className="card-title-group">
                <Zap className="title-icon-yellow" size={17} strokeWidth={2.5} />
                <h3 className="card-title">Recent Activities</h3>
              </div>
              <a href="#view-all" className="card-header-link">
                View All →
              </a>
            </div>

            {/* Timeline Activities List */}
            <div className="activities-timeline">
              {/* Item 1: New Institute Registered */}
              <div className="timeline-item">
                <div className="timeline-connector">
                  <span className="timeline-dot dot-blue"></span>
                  <div className="timeline-line"></div>
                </div>
                <div className="activity-icon-wrap icon-wrap-blue">
                  <Landmark size={17} strokeWidth={2.2} />
                </div>
                <div className="activity-details">
                  <h4 className="activity-title">New Institute Registered</h4>
                  <p className="activity-meta">PMC College • 2 min ago</p>
                </div>
              </div>

              {/* Item 2: Payment Received */}
              <div className="timeline-item">
                <div className="timeline-connector">
                  <span className="timeline-dot dot-orange"></span>
                  <div className="timeline-line"></div>
                </div>
                <div className="activity-icon-wrap icon-wrap-blue">
                  <CreditCard size={17} strokeWidth={2.2} />
                </div>
                <div className="activity-details">
                  <h4 className="activity-title">Payment Received</h4>
                  <p className="activity-meta">₹150 – Invoice TOS-202610-001 • 5 min ago</p>
                </div>
              </div>

              {/* Item 3: New Student Added */}
              <div className="timeline-item">
                <div className="timeline-connector">
                  <span className="timeline-dot dot-blue"></span>
                  <div className="timeline-line"></div>
                </div>
                <div className="activity-icon-wrap icon-wrap-blue">
                  <Users size={17} strokeWidth={2.2} />
                </div>
                <div className="activity-details">
                  <h4 className="activity-title">New Student Added</h4>
                  <p className="activity-meta">Rohit Kumar – PMC College • 8 min ago</p>
                </div>
              </div>

              {/* Item 4: Subscription Renewed */}
              <div className="timeline-item">
                <div className="timeline-connector">
                  <span className="timeline-dot dot-orange"></span>
                  <div className="timeline-line timeline-line-end"></div>
                </div>
                <div className="activity-icon-wrap icon-wrap-yellow">
                  <Crown size={17} strokeWidth={2.2} />
                </div>
                <div className="activity-details">
                  <h4 className="activity-title">Subscription Renewed</h4>
                  <p className="activity-meta">Global Institute – 1 Year Plan • 12 min ago</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7, 8, 9. BOTTOM ROW CARDS */}
        <section className="bottom-cards-grid">
          {/* 7. INSTITUTE DISTRIBUTION */}
          <div className="bottom-card institute-distribution-card">
            <h3 className="card-title">Institute Distribution</h3>
            <div className="distribution-body">
              {/* Doughnut Chart */}
              <div className="doughnut-chart-wrap">
                <svg viewBox="0 0 110 110" className="doughnut-svg">
                  <defs>
                    <linearGradient id="activePieGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#2563EB" />
                    </linearGradient>
                  </defs>
                  {/* Circumference = 2 * PI * 38 ≈ 238.76 */}
                  {/* Expired Base Track (Grey 8%): stroke #CBD5E1 */}
                  <circle
                    cx="55"
                    cy="55"
                    r="38"
                    fill="none"
                    stroke="#CBD5E1"
                    strokeWidth="12"
                  />
                  {/* Active (Blue Gradient 79% = 188.62, from 12 o'clock clockwise to ~8:30) */}
                  <circle
                    cx="55"
                    cy="55"
                    r="38"
                    fill="none"
                    stroke="url(#activePieGrad)"
                    strokeWidth="12"
                    strokeDasharray="188.62 238.76"
                    strokeDashoffset="0"
                    transform="rotate(-90 55 55)"
                  />
                  {/* Pending (Orange 13% = 31.04, from ~8:30 clockwise to ~10:15) */}
                  <circle
                    cx="55"
                    cy="55"
                    r="38"
                    fill="none"
                    stroke="#FBBF24"
                    strokeWidth="12"
                    strokeDasharray="31.04 238.76"
                    strokeDashoffset="-188.62"
                    transform="rotate(-90 55 55)"
                  />
                </svg>
                <div className="doughnut-center-content">
                  <span className="doughnut-center-number">120</span>
                  <span className="doughnut-center-label">Institutes</span>
                </div>
              </div>

              {/* Legend List */}
              <div className="distribution-legend">
                <div className="dist-legend-item">
                  <div className="legend-label-group">
                    <span className="legend-dot dot-blue"></span>
                    <span className="legend-name">Active</span>
                  </div>
                  <span className="legend-value">95 (79%)</span>
                </div>

                <div className="dist-legend-item">
                  <div className="legend-label-group">
                    <span className="legend-dot dot-orange"></span>
                    <span className="legend-name">Pending</span>
                  </div>
                  <span className="legend-value">15 (13%)</span>
                </div>

                <div className="dist-legend-item">
                  <div className="legend-label-group">
                    <span className="legend-dot dot-grey"></span>
                    <span className="legend-name">Expired</span>
                  </div>
                  <span className="legend-value">10 (8%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* 8. REVENUE OVERVIEW */}
          <div className="bottom-card revenue-overview-card">
            <div className="card-header-row">
              <div className="card-title-group">
                <BarChart3 className="title-icon-blue-plain" size={17} strokeWidth={2.4} />
                <h3 className="card-title">Revenue Overview</h3>
              </div>
              <a href="#view-details" className="card-header-link">
                View Details &rarr;
              </a>
            </div>

            <div className="revenue-chart-stage">
              {/* Metric Overlay on Top-Left */}
              <div className="revenue-metric-overlay">
                <div className="revenue-amount-group">
                  <h2 className="revenue-amount">₹12.5L</h2>
                  <span className="revenue-growth-plain">
                    <span className="growth-arrow">↑</span> +22%
                  </span>
                </div>
                <p className="revenue-subtitle">Total Revenue This Month</p>
              </div>

              {/* 6 Full-Width Monthly Bars Across Card */}
              <div className="revenue-bar-chart">
                <div className="bar-column">
                  <div className="bar-track">
                    <div className="bar-fill" style={{ height: '26%', background: '#A9B7FC' }}></div>
                  </div>
                  <span className="bar-label">Jun</span>
                </div>
                <div className="bar-column">
                  <div className="bar-track">
                    <div className="bar-fill" style={{ height: '38%', background: '#98AEFD' }}></div>
                  </div>
                  <span className="bar-label">Jul</span>
                </div>
                <div className="bar-column">
                  <div className="bar-track">
                    <div className="bar-fill" style={{ height: '52%', background: '#82A1FE' }}></div>
                  </div>
                  <span className="bar-label">Aug</span>
                </div>
                <div className="bar-column">
                  <div className="bar-track">
                    <div className="bar-fill" style={{ height: '65%', background: '#65A4FE' }}></div>
                  </div>
                  <span className="bar-label">Sep</span>
                </div>
                <div className="bar-column">
                  <div className="bar-track">
                    <div className="bar-fill" style={{ height: '78%', background: '#5394FE' }}></div>
                  </div>
                  <span className="bar-label">Oct</span>
                </div>
                <div className="bar-column">
                  <div className="bar-track">
                    <div className="bar-fill bar-highlight" style={{ height: '100%', background: '#2563EB' }}></div>
                  </div>
                  <span className="bar-label">Nov</span>
                </div>
              </div>
            </div>
          </div>

          {/* 9. QUICK ACTIONS */}
          <div className="bottom-card quick-actions-card">
            <div className="card-header-row">
              <div className="card-title-group">
                <Rocket className="title-icon-blue-plain" size={17} strokeWidth={2.2} />
                <h3 className="card-title">Quick Actions</h3>
              </div>
            </div>

            <div className="quick-actions-grid">
              {/* Action 1: Add Institute */}
              <div className="action-button-card">
                <div className="action-circle-icon icon-circle-blue">
                  <Landmark size={17} strokeWidth={2.2} />
                </div>
                <span className="action-name">Add<br />Institute</span>
              </div>

              {/* Action 2: Manage Plans */}
              <div className="action-button-card">
                <div className="action-circle-icon icon-circle-yellow">
                  <Crown size={17} strokeWidth={2.2} />
                </div>
                <span className="action-name">Manage<br />Plans</span>
              </div>

              {/* Action 3: View Payments */}
              <div className="action-button-card">
                <div className="action-circle-icon icon-circle-blue">
                  <CreditCard size={17} strokeWidth={2.2} />
                </div>
                <span className="action-name">View<br />Payments</span>
              </div>

              {/* Action 4: Generate Report */}
              <div className="action-button-card">
                <div className="action-circle-icon icon-circle-blue">
                  <BarChart2 size={17} strokeWidth={2.2} />
                </div>
                <span className="action-name">Generate<br />Report</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
