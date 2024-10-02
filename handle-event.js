const downloadImage = require('./download-img');
const path = require('path');
const ocrTesseract = require('./ocr-tesseract');


async function handleEvent(event) {
    if (event.message.type === 'image') {
        if(event.message.contentProvider.type === 'line') {
            const downloadpath = path.join(__dirname, 'downloaded', `${event.message.id}.jpg`);
            await downloadImage(event.message.id, downloadpath);

            const imagePath = './downloaded/' + event.message.id + '.jpg';
            ocrTesseract(imagePath);
        }
        
    }

}

module.exports = handleEvent;