// Encryption function
function encrypt() {
    let inputText = document.getElementById('encryptInput').value;
    let key = document.getElementById('encryptKey').value;
  
    try {
      if (!inputText || !key) {
        throw new Error('Please enter both input text and encryption key.');
      }
  
      let encryptedText = CryptoJS.AES.encrypt(inputText, key).toString();
      document.getElementById('encryptedText').value = encryptedText;
    } catch (error) {
      console.error("Encryption error:", error.message);
      document.getElementById('encryptedText').value = error.message;
    }
  }
  
  // Decryption function
  function decrypt() {
    let inputText = document.getElementById('decryptInput').value;
    let key = document.getElementById('decryptKey').value;
  
    try {
      if (!inputText || !key) {
        throw new Error('Please enter both input text and decryption key.');
      }
  
      let decryptedText = CryptoJS.AES.decrypt(inputText, key).toString(CryptoJS.enc.Utf8);
  
      if (!decryptedText) {
        throw new Error('Decryption failed. Invalid key or text.');
      }
  
      document.getElementById('decryptedText').value = decryptedText;
    } catch (error) {
      console.error("Decryption error:", error.message);
      document.getElementById('decryptedText').value = error.message;
    }
  }
  