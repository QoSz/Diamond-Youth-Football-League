import bcrypt from "bcryptjs";

async function generateHash() {
  const password = "diamondyouthfl"; // Replace with your actual password
  const hash = await bcrypt.hash(password, 10);
  console.log("Generated Hash:", hash);
}

// Execute the function
generateHash();

// Temporary test in your browser console
const hash = await bcrypt.compare("diamondyouthfl", "$2b$10$C5/XOCJypFhEYOHpNzSx9u/bB1Szyz/mVl7B5K3PO8SgqK0A4bese");
console.log(hash); // Should log 'true' 