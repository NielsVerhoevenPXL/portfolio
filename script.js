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
            responseElement.innerHTML = `Available commands:<br>
neofetch    - display system info<br>
cat bio.txt - show bio<br>
ls          - list files<br>
clear       - clear the terminal<br>
contact     - show contact info<br>
cowsay      - show cow with message<br>
cd activities - view activities page<br>
cd innovations - view innovations page<br>
cd selected - view selected activities`;
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
activities/
innovations/
selected/`;
        } else if (command === 'clear') {
            // Get references to initial content
            const initialNeofetchPrompt = document.getElementById('initial-neofetch-prompt');
            const initialNeofetch = document.getElementById('initial-neofetch');
            const initialBioPrompt = document.getElementById('initial-bio-prompt');
            const initialBio = document.getElementById('initial-bio');
            const commandInput = terminal.lastElementChild;
            
            // Clear all content
            terminal.innerHTML = '';
            
            // Restore initial content
            terminal.appendChild(initialNeofetchPrompt);
            terminal.appendChild(initialNeofetch);
            terminal.appendChild(initialBioPrompt);
            terminal.appendChild(initialBio);
            terminal.appendChild(commandInput);
            
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
        } else if (command === 'cd activities' || command === 'cd activities/') {
            window.scrollTo(0, 0);
            window.location.href = 'activities.html';
            return;
        } else if (command === 'cd innovations' || command === 'cd innovations/') {
            window.scrollTo(0, 0);
            window.location.href = 'innovations.html';
            return;
        } else if (command === 'cd selected' || command === 'cd selected/') {
            window.scrollTo(0, 0);
            window.location.href = 'selected-activities.html';
            return;
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