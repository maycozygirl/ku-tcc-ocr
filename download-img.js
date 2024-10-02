const util = require('util');
const fs = require('fs');
const {pipeline} = require('stream');
const line = require('@line/bot-sdk');  

const MessagingApiClient = line.messagingApi.MessagingApiBlobClient;
const config = require('./line-config');


const client = new MessagingApiClient(config);

async function downloadImage(messageid, downloadpath) {
    const stream = await client.getMessageContent(messageid);
    const pipelineAsync = util.promisify(pipeline);
    const folder_download = fs.createWriteStream(downloadpath);
    await pipelineAsync(stream, folder_download);
}

module.exports = downloadImage;