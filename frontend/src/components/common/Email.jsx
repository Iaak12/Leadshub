/**
 * Email Service Utility
 * Using Web3Forms for backend-less email processing.
 * To make this fully functional, replace the ACCESS_KEY placeholder
 * with a key from https://web3forms.com/ (It takes 2 seconds and it's free).
 */

export const sendEmail = async (formData) => {
  const ACCESS_KEY = "2425857a-5664-4208-931b-12473c0ff1fc";
  const targetEmail = "invalidk2002@gmail.com";

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      to: targetEmail,
      from_name: "LeadsHub Contact Form",
      ...formData,
    }),
  });

  const result = await response.json();
  return result;
};
