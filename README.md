
Disability/Accessibility Friendly RFID Keyfob GUI

This project is an Accessibility-friendly RFID keyfob GUI that announces the person’s name out loud via an Arduino system. It is designed to assist users with disabilities by providing audio feedback when an RFID keyfob is scanned, making it easier to identify users through voice announcements.

Features

	•	RFID Keyfob Detection: Detects RFID keyfobs using the Arduino and announces the detected person’s name.
	•	Accessibility Focus: Designed for individuals with visual impairments or other disabilities that require audible notifications.
	•	Voice Output: Uses the Arduino’s functionality to announce the person’s name upon successful RFID keyfob scan.

Components

	•	Arduino: Microcontroller used for handling the RFID reader and managing communication.
	•	RFID Reader (Wiegand): Reads RFID keyfob information and passes the data to the Arduino.
	•	GUI: A simple user interface that displays the information from the keyfob and ensures the announcement happens smoothly.

Project Structure

Disability-Accessibility-RFID-Project/
├── WiegandTest.ino      # Arduino code for reading RFID keyfobs
├── app.css              # Styles for the GUI
├── data.json            # Sample data file for testing
├── index.html           # Main HTML file for the web interface
├── index.js             # JavaScript handling the front-end logic
├── package-lock.json    # Package dependencies (auto-generated)
├── package.json         # Node.js project configuration
└── README.md            # Project documentation

Installation

1. Clone the repository:

git clone https://github.com/hab1b/mondayDotCom_client_portal.git
cd Disability-Accessibility-RFID-Project

2. Install necessary dependencies:

npm install

3. Upload the Arduino code:

	•	Open the WiegandTest.ino file in the Arduino IDE.
	•	Ensure the correct board and port are selected.
	•	Upload the code to your Arduino board.

4. Run the GUI:

npm start

The GUI will open, and you will be able to see detected RFID keyfobs in real-time.

Usage

	•	Step 1: Scan an RFID keyfob using the attached reader.
	•	Step 2: The detected person’s name will be announced out loud.
	•	Step 3: The name of the person and the status of the RFID scan will be displayed on the screen.

Customization

You can modify the data.json file to add or edit the names of the people associated with each RFID keyfob. This allows for personalized announcements.

Sample data.json:

{
  "keyfobs": [
    {
      "id": "1234567890",
      "name": "John Doe"
    },
    {
      "id": "0987654321",
      "name": "Jane Smith"
    }
  ]
}

License

This project is licensed under the MIT License - see the LICENSE file for details.
