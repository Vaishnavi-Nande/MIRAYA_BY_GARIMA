import React, { useState } from 'react';

export default function AuthModal({ isOpen, onClose, onSuccess }) {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: 'garima@miraya.com',
    password: 'premium_password',
    rememberMe: true,
    agreeTerms: false
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate authentication logic
    if (isSignIn) {
      onSuccess({
        name: 'Garima Sharma',
        email: formData.email,
        initials: 'GS'
      });
    } else {
      // Sign Up simulation
      onSuccess({
        name: formData.name || 'New Creator',
        email: formData.email,
        initials: (formData.name || 'NC').split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
      });
    }
    onClose();
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // SVGs for high fidelity visual aesthetics
  const mailIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );

  const lockIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );

  const userIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );

  const eyeIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );

  const eyeOffIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );

  const closeIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );

  const checkIcon = (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="auth-checkbox-check">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  // Social Icons
  const googleIcon = (
    <svg className="auth-social-icon" viewBox="0 0 24 24">
      <path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.18 4.114-3.356 0-6.074-2.719-6.074-6.074s2.718-6.074 6.074-6.074c1.464 0 2.807.522 3.86 1.385l3.07-3.07C18.847 2.146 15.753 1 12.24 1 6.035 1 1 6.035 1 12.24s5.035 11.24 11.24 11.24c5.9 0 10.9-4.22 10.9-11.24 0-.668-.063-1.32-.177-1.955H12.24z"/>
    </svg>
  );

  const appleIcon = (
    <svg className="auth-social-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.51-.64.73-1.2 1.88-1.05 2.99 1.1.09 2.23-.55 3-1.44z"/>
    </svg>
  );

  const facebookIcon = (
    <svg className="auth-social-icon" viewBox="0 0 24 24" fill="#1877F2">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );

  return (
    <>
      {/* Backdrop */}
      <div className="auth-modal-backdrop open" onClick={onClose} />

      {/* Modal Container */}
      <div className="absolute right-0 top-full mt-2 w-full max-w-md bg-[#FAF7F2] rounded-3xl p-8 shadow-2xl z-50 auth-modal-container open" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="auth-close-btn" onClick={onClose} aria-label="Close modal">
          {closeIcon}
        </button>

        {/* Decorative Crest */}
        {/* Decorative Crest */}
        <div className="auth-crest-wrapper" style={{ marginBottom: '24px', display: 'flex', alignItems: 'center' }}>
          <div className="flex-1 flex items-center justify-end">
            <div className="h-[1px] bg-[#D4B26F] w-full max-w-[80px]"></div>
            <span className="text-[#D4B26F] text-[6px] ml-1">◆</span>
          </div>
          <img 
            src="/R.png" 
            alt="Miraya Logo" 
            className="w-16 h-16 object-contain" 
            onError={(e) => { e.target.src = '/logo R.png'; }}
          />
          <div className="flex-1 flex items-center justify-start">
            <span className="text-[#D4B26F] text-[6px] mr-1">◆</span>
            <div className="h-[1px] bg-[#D4B26F] w-full max-w-[80px]"></div>
          </div>
        </div>

        {/* Header Title */}
        <h2 className={isSignIn ? "text-[#4A1D24] font-serif text-2xl font-medium tracking-widest auth-header-title" : "auth-header-title"}>
          {isSignIn ? 'WELCOME BACK' : 'Create Account'}
        </h2>

        {/* Diamond Separator */}
        <div className="auth-diamond-divider" style={{ marginBottom: '32px' }}>
          <div className="auth-diamond-line" />
          <div className="auth-diamond-dot" />
          <div className="auth-diamond-line" />
        </div>

        {/* Auth Form */}
        <form className="auth-form" onSubmit={handleSubmit}>
          {/* Full Name (Sign Up only) */}
          {!isSignIn && (
            <div className="auth-form-group">
              <label htmlFor="auth-name" className="auth-label">Full Name</label>
              <div className="auth-input-wrapper">
                <span className="auth-input-icon">{userIcon}</span>
                <input
                  id="auth-name"
                  name="name"
                  type="text"
                  placeholder="Garima Sharma"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="auth-input"
                />
              </div>
            </div>
          )}

          {/* Email Address */}
          <div className="auth-form-group">
            <label htmlFor="auth-email" className="auth-label">Email Address</label>
            <div className="auth-input-wrapper">
              <span className="auth-input-icon">{mailIcon}</span>
              <input
                id="auth-email"
                name="email"
                type="email"
                placeholder="garima@miraya.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="auth-input"
              />
            </div>
          </div>

          {/* Password */}
          <div className="auth-form-group">
            <div className="flex justify-between items-center mb-2 w-full">
              <label htmlFor="auth-password" className="auth-label">PASSWORD</label>
              {isSignIn ? (
                <span className="text-xs text-[#b89453] cursor-pointer" onClick={() => alert("Password reset link sent to " + formData.email)}>Forgot Password?</span>
              ) : null}
            </div>
            <div className="auth-input-wrapper">
              <span className="auth-input-icon">{lockIcon}</span>
              <input
                id="auth-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••••••"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="auth-input"
              />
              <button
                type="button"
                className="auth-password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? eyeOffIcon : eyeIcon}
              </button>
            </div>
          </div>

          {/* Remember Me / Agree Terms */}
          {isSignIn ? (
            <label className="auth-checkbox-wrapper">
              <input
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="auth-checkbox-input"
              />
              <div className="auth-checkbox-box">
                {checkIcon}
              </div>
              <span className="auth-checkbox-label">Remember me</span>
            </label>
          ) : (
            <label className="auth-checkbox-wrapper">
              <input
                name="agreeTerms"
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
                required
                className="auth-checkbox-input"
              />
              <div className="auth-checkbox-box">
                {checkIcon}
              </div>
              <span className="auth-checkbox-label">I agree to the Terms & Conditions</span>
            </label>
          )}

          {/* Submit Button */}
          <button type="submit" className="auth-submit-btn">
            <span>{isSignIn ? 'Sign In' : 'Create Account'}</span>
            <span className="auth-submit-arrow">→</span>
          </button>
        </form>

        {/* Divider */}
        <div className="auth-or-divider">
          <div className="auth-or-line" />
          <span className="auth-or-text">Or Continue With</span>
          <div className="auth-or-line" />
        </div>

        {/* Social Logins */}
        <div className="grid grid-cols-3 gap-3 w-full mt-4 auth-social-row">
          <button type="button" className="auth-social-btn" style={{ width: '100%' }} onClick={() => alert("Google Sign In simulation succeeded.")}>
            {googleIcon}
            <span>Google</span>
          </button>
          <button type="button" className="auth-social-btn" style={{ width: '100%' }} onClick={() => alert("Apple Sign In simulation succeeded.")}>
            {appleIcon}
            <span>Apple</span>
          </button>
          <button type="button" className="auth-social-btn" style={{ width: '100%' }} onClick={() => alert("Facebook Sign In simulation succeeded.")}>
            {facebookIcon}
            <span>Facebook</span>
          </button>
        </div>

        {/* Toggle Sign In / Sign Up Footer */}
        <div className="auth-footer">
          {isSignIn ? (
            <>
              Don't have an account?
              <span className="auth-footer-link" onClick={() => setIsSignIn(false)}>
                CREATE ACCOUNT
              </span>
            </>
          ) : (
            <>
              Already have an account?
              <span className="auth-footer-link" onClick={() => setIsSignIn(true)}>
                SIGN IN
              </span>
            </>
          )}
        </div>

      </div>
    </>
  );
}
