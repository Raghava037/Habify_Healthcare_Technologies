export function checkPasswordStrength(password: string): number {
    const strength = {
      0: "Very Weak",
      1: "Weak",
      2: "Moderate",
      3: "Strong",
      4: "Very Strong"
    };
  
    // Check password length and complexity to determine strength
    if (password.length <= 5) {
      return 0; // Very Weak
    }
    if (password.length <= 8) {
      return 1; // Weak
    }
    if (password.match(/[a-zA-Z]+/) && password.match(/[0-9]+/)) {
      return 2; // Moderate
    }
    if (password.match(/[a-zA-Z]+/) && password.match(/[0-9]+/) && password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]+/)) {
      return 3; // Strong
    }
    return 4; // Very Strong
  }
  