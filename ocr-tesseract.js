const Tesseract = require('tesseract.js');
const sharp = require('sharp');

async function preprocessImage(imagePath) {
    const outputImagePath = 'preprocessed_image.png';  // Path to save preprocessed image
    await sharp(imagePath)
        .negate()
        .greyscale()
        .threshold(120)     // Convert to grayscale  
        .sharpen({ sigma: 1 }) // Resize the image to width of 800px, keeping aspect ratio
        .toFile(outputImagePath);  // Save the preprocessed image

    return outputImagePath;  // Return the path of the preprocessed image
}


async function ocrTesseract(imagePath) {
    const preprocessedImagePath = await preprocessImage(imagePath);
  Tesseract.recognize(preprocessedImagePath, 'eng',
    {
        tessedit_char_whitelist: '0123456789',
    })
    .then(({ data: { text } }) => {
      console.log('Recognized Text:', text);
    })
    .catch(error => {
      console.error('Error during OCR:', error);
    });
}


module.exports = ocrTesseract;
