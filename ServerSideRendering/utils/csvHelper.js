// /utils/csvHelper.js
const fs = require("fs");
const path = require("path");
const fileName = path.join(__dirname, "..", "userList.csv"); // go up one level

function getUsersFromCSV() {
    if (!fs.existsSync(fileName)) return []; // no file yet

    const data = fs.readFileSync(fileName, "utf8");
    const lines = data.trim().split("\n");
    const users = [];

    // Skip header
    for (let i = 1; i < lines.length; i++) {
        const [name, email] = lines[i].split(",");
        users.push({ name, email});
    }
    return users;
}

// Export the function
module.exports = { getUsersFromCSV };
