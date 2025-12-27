// Counter application module using functional component pattern
const CounterApp = (() => {
    // State
    let count = 0;
    let history = [];
    const MAX_HISTORY = 10;
    
    // DOM Elements
    let counterDisplay;
    let historyList;
    
    // Initialize counter app
    const init = () => {
        // Get DOM elements
        counterDisplay = document.getElementById('counter-value');
        historyList = document.getElementById('history-list');
        
        // Load saved state from localStorage
        loadState();
        
        // Render initial state
        renderCounter();
        renderHistory();
        
        // Set up event listeners
        setupEventListeners();
        
        // Set up keyboard shortcuts
        setupKeyboardShortcuts();
        
        console.log('Counter app initialized');
    };
    
    // Load state from localStorage
    const loadState = () => {
        const savedCount = localStorage.getItem('counter-app-count');
        const savedHistory = localStorage.getItem('counter-app-history');
        
        if (savedCount) {
            count = parseInt(savedCount, 10);
        }
        
        if (savedHistory) {
            history = JSON.parse(savedHistory);
        }
    };
    
    // Save state to localStorage
    const saveState = () => {
        localStorage.setItem('counter-app-count', count.toString());
        localStorage.setItem('counter-app-history', JSON.stringify(history));
    };
    
    // Update counter value
    const updateCounter = (newValue) => {
        // Add current value to history before changing
        addToHistory(count);
        
        // Update count
        count = newValue;
        
        // Render updated counter
        renderCounter();
        
        // Save state
        saveState();
    };
    
    // Add value to history
    const addToHistory = (value) => {
        const historyItem = {
            value,
            timestamp: new Date().toLocaleTimeString()
        };
        
        // Add to beginning of array (newest first)
        history.unshift(historyItem);
        
        // Keep only the last MAX_HISTORY items
        if (history.length > MAX_HISTORY) {
            history.pop();
        }
        
        // Render updated history
        renderHistory();
    };
    
    // Clear history
    const clearHistory = () => {
        history = [];
        renderHistory();
        saveState();
    };
    
    // Render counter value to DOM
    const renderCounter = () => {
        counterDisplay.textContent = count;
        
        // Add visual feedback for change
        counterDisplay.classList.remove('changed');
        void counterDisplay.offsetWidth; // Trigger reflow
        counterDisplay.classList.add('changed');
        
        // Change color based on value
        updateCounterColor();
    };
    
    // Update counter color based on value
    const updateCounterColor = () => {
        // Remove previous color classes
        counterDisplay.classList.remove('positive', 'negative', 'zero');
        
        // Add appropriate class
        if (count > 0) {
            counterDisplay.classList.add('positive');
        } else if (count < 0) {
            counterDisplay.classList.add('negative');
        } else {
            counterDisplay.classList.add('zero');
        }
    };
    
    // Render history to DOM
    const renderHistory = () => {
        // Clear current history list
        historyList.innerHTML = '';
        
        if (history.length === 0) {
            historyList.innerHTML = '<div class="history-item"><span>No history yet</span></div>';
            return;
        }
        
        // Create history items
        history.forEach(item => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            
            // Determine if value is positive or negative for styling
            const valueClass = item.value > 0 ? 'positive' : item.value < 0 ? 'negative' : 'zero';
            
            historyItem.innerHTML = `
                <div>
                    <span class="history-value ${valueClass}">${item.value >= 0 ? '+' : ''}${item.value}</span>
                </div>
                <div class="history-time">${item.timestamp}</div>
            `;
            
            historyList.appendChild(historyItem);
        });
    };
    
    // Set up button event listeners
    const setupEventListeners = () => {
        // Basic counter controls
        document.getElementById('increment').addEventListener('click', () => updateCounter(count + 1));
        document.getElementById('decrement').addEventListener('click', () => updateCounter(count - 1));
        document.getElementById('reset').addEventListener('click', () => updateCounter(0));
        
        // Quick action buttons
        document.getElementById('increment-5').addEventListener('click', () => updateCounter(count + 5));
        document.getElementById('decrement-5').addEventListener('click', () => updateCounter(count - 5));
        document.getElementById('increment-10').addEventListener('click', () => updateCounter(count + 10));
        document.getElementById('decrement-10').addEventListener('click', () => updateCounter(count - 10));
        
        // History control
        document.getElementById('clear-history').addEventListener('click', clearHistory);
    };
    
    // Set up keyboard shortcuts
    const setupKeyboardShortcuts = () => {
        document.addEventListener('keydown', (e) => {
            // Prevent shortcuts when typing in input fields
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            
            switch(e.key) {
                case '+':
                case 'ArrowUp':
                    e.preventDefault();
                    updateCounter(count + 1);
                    break;
                    
                case '-':
                case 'ArrowDown':
                    e.preventDefault();
                    updateCounter(count - 1);
                    break;
                    
                case 'r':
                case 'R':
                    e.preventDefault();
                    updateCounter(0);
                    break;
                    
                case 'Escape':
                    e.preventDefault();
                    updateCounter(0);
                    break;
            }
        });
    };
    
    // Public API
    return {
        init,
        getCount: () => count,
        getHistory: () => [...history],
        increment: (value = 1) => updateCounter(count + value),
        decrement: (value = 1) => updateCounter(count - value),
        reset: () => updateCounter(0),
        clearHistory
    };
})();

// Initialize counter app when DOM is loaded
document.addEventListener('DOMContentLoaded', CounterApp.init);