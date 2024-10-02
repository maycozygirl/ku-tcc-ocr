// Description: This file is used to store the configuration of the LINE Messaging API.
require('dotenv').config();

const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET
};

module.exports = config;