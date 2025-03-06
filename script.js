const commandInput = document.getElementById('commandInput');
const terminal = document.querySelector('.terminal');

commandInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const command = this.value.trim().toLowerCase();
        
        // Create command element
        const cmdElement = document.createElement('div');
        cmdElement.className = 'prompt';
        cmdElement.textContent = command;
        
        // Add command to terminal
        terminal.insertBefore(cmdElement, terminal.lastElementChild);
        
        // Create response element
        const responseElement = document.createElement('div');
        responseElement.className = 'bio';
        
        // Process commands
        if (command === 'help' || command === '--help') {
            responseElement.innerHTML = `Available commands:
neofetch    - display system info
cat bio.txt - show bio
ls          - list files
clear       - clear the terminal
contact     - show contact info
cowsay      - show cow with message`;
        } else if (command === 'neofetch') {
            // Clone the neofetch display
            const neofetchClone = document.querySelector('.neofetch').cloneNode(true);
            terminal.insertBefore(neofetchClone, terminal.lastElementChild);
            this.value = '';
            return;
        } else if (command === 'cat bio.txt') {
            const bioClone = document.querySelector('.bio').cloneNode(true);
            terminal.insertBefore(bioClone, terminal.lastElementChild);
            this.value = '';
            return;
        } else if (command === 'ls') {
            responseElement.innerHTML = `bio.txt
contact.txt`;
        } else if (command === 'clear') {
            // Remove all children except the last one (command input)
            while (terminal.children.length > 1) {
                terminal.removeChild(terminal.firstChild);
            }
            this.value = '';
            return;
        } else if (command === 'contact') {
            responseElement.innerHTML = `Email: niels851@hotmail.com
GitHub: github.com/NielsVerhoevenPXL
LinkedIn: linkedin.com/in/verhoeven-niels`;
        } else if (command.startsWith('cowsay')) {
            const message = command.replace('cowsay', '').trim() || 'Moo! I love DevOps!';
            responseElement.innerHTML = `<div style="color:#00FF00;white-space:pre">
 _${'-'.repeat(message.length)}_
< ${message} >
 -${'-'.repeat(message.length)}-
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
</div>`;
        } else if (command === '') {
            return;
        } else {
            responseElement.textContent = `command not found: ${command}`;
        }
        
        // Add response to terminal
        terminal.insertBefore(responseElement, terminal.lastElementChild);
        
        // Scroll to bottom
        window.scrollTo(0, document.body.scrollHeight);
        
        // Clear input
        this.value = '';
    }
});