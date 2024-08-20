const themeStyles = document.getElementsByClassName('theme-styles');

        // CSS cho theme sáng và tối
        const lightThemeCSS = `
            body {
                background-color: #ffffe4;
                color: #000000;
            }
        `;

        const darkThemeCSS = `
            body {
                background-color: #000000;
                color: #ffffff;
            }
        `;

        const themeToggleButton = document.getElementById('theme-toggle');

        function setTheme(theme) {
            if (theme === 'dark') {
                themeStyles.textContent = darkThemeCSS;
                themeToggleButton.textContent = 'Switch to Light Theme';
                localStorage.setItem('theme', 'dark');
            } else {
                themeStyles.textContent = lightThemeCSS;
                themeToggleButton.textContent = 'Switch to Dark Theme';
                localStorage.setItem('theme', 'light');
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            const currentTheme = localStorage.getItem('theme') || 'light';
            setTheme(currentTheme);
        });

        themeToggleButton.addEventListener('click', () => {
            const currentTheme = localStorage.getItem('theme') || 'light';
            setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });