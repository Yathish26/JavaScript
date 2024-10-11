const XLSX = require('xlsx');
const fs = require('fs');

// Path to the Excel file
const filePath = './MOCK_DATA.xlsx'; // Replace this with the path to your Excel file

// Function to read and parse Excel file
function readExcel(filePath) {
    // Read the Excel file into a buffer
    const fileBuffer = fs.readFileSync(filePath);

    // Parse the buffer using the XLSX library
    const workbook = XLSX.read(fileBuffer, { type: 'buffer' });

    // Get the first sheet name
    const sheetName = workbook.SheetNames[0];

    // Get the first sheet data
    const sheetData = workbook.Sheets[sheetName];

    // Convert the sheet data to JSON format
    const jsonData = XLSX.utils.sheet_to_json(sheetData);

    // Log the parsed JSON data to the console
    console.log('Parsed Excel Data:', jsonData);
}

// Call the function with the Excel file path
readExcel(filePath);
