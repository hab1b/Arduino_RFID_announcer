const { app, BrowserWindow, ipcMain } = require('electron');
const fs = require('fs');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

// Ensure the path to your Arduino's serial port is correct
const portPath = 'COM8'; // Using COM8 as requested
const baudRate = 9600;   // Using 9600 as the baud rate

console.log(`Opening serial port ${portPath} at baud rate ${baudRate}`);

const port = new SerialPort({ path: portPath, baudRate: baudRate }, (err) => {
  if (err) {
    return console.error('Error opening serial port:', err.message);
  }
  console.log('Serial port opened successfully');
});

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: { 
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
  win.setMenuBarVisibility(false); // Hide the menu bar

  // Handler for fetching data from JSON file
  ipcMain.handle('request-fetch-data', async () => {
    try {
      const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
      return data;
    } catch (error) {
      console.error('Error reading JSON data:', error);
      return null;
    }
  });

  // Read data from serial port
  parser.on('data', (data) => {
    console.log('Data from serial port:', data); // Debugging statement
    win.webContents.send('serial-data', data);
  });

});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
