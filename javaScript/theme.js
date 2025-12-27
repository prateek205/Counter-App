// Theme management module
const ThemeManager = (() => {
    // DOM Elements
    let themeSwitcher;
    
    // Initialize theme module
    const init = () => {
        themeSwitcher = document.getElementById('theme-switcher');
        
        // Load saved theme preference or default to light
        const savedTheme = localStorage.getItem('counter-app-theme') || 'light-theme';
        document.documentElement.className = savedTheme;
        
        // Set the switcher state based on saved theme
        themeSwitcher.checked = savedTheme === 'dark-theme';
        updateThemeLabel(savedTheme);
        
        // Add event listener to theme switcher
        themeSwitcher.addEventListener('change', toggleTheme);
        
        // Add keyboard shortcut for theme toggle
        document.addEventListener('keydown', handleThemeShortcut);
        
        console.log('Theme module initialized');
    };
    
    // Toggle between dark and light themes
    const toggleTheme = () => {
        const isDarkMode = themeSwitcher.checked;
        const newTheme = isDarkMode ? 'dark-theme' : 'light-theme';
        
        // Apply the new theme
        document.documentElement.className = newTheme;
        
        // Save theme preference to localStorage
        localStorage.setItem('counter-app-theme', newTheme);
        
        // Update the theme label
        updateThemeLabel(newTheme);
        
        // Dispatch custom event for theme change
        document.dispatchEvent(new CustomEvent('themeChanged', { 
            detail: { theme: newTheme } 
        }));
    };
    
    // Update the theme label text
    const updateThemeLabel = (theme) => {
        const themeLabel = document.querySelector('.theme-label');
        if (themeLabel) {
            themeLabel.textContent = theme === 'dark-theme' ? 'Dark Mode' : 'Light Mode';
        }
    };
    
    // Handle keyboard shortcut for theme toggle (D key)
    const handleThemeShortcut = (e) => {
        // Use 'D' key to toggle theme
        if (e.key === 'd' || e.key === 'D') {
            e.preventDefault();
            themeSwitcher.checked = !themeSwitcher.checked;
            toggleTheme();
        }
    };
    
    // Public API
    return {
        init,
        toggleTheme,
        getCurrentTheme: () => document.documentElement.className
    };
})();

// Initialize theme module when DOM is loaded
document.addEventListener('DOMContentLoaded', ThemeManager.init);