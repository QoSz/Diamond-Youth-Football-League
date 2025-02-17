import bcrypt from "bcryptjs";

async function verify() {
  const isValid = await bcrypt.compare(
    "diamondyouthfl", 
    process.env.ADMIN_PASSWORD_HASH!
  );
  console.log('Password validation result:', isValid);
}

verify(); 