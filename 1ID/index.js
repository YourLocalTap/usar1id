const keepAlive = require(`./server`);

const gateway = require('./data');
const { WebhookClient, Colors, EmbedBuilder } = require('discord.js');

const webhook = new WebhookClient({
    url: gateway[0].url,
    token: gateway[0].gateway_,
    id: gateway[0].webhook_
});

const messages = [
    '\n**ROTA** - https://imgur.com/a/qCI8SjY\n\n**The following has to be done today:**\n\n<@&698697566346412119>\n> Event\n> Daily Announcement\n\n<@&698697566346412118>\n> Discharges\n\n<@&698697566346412117>\n> BHQ Logs\n> Staff Quota Check',
    '\n**ROTA** - https://imgur.com/a/qCI8SjY\n\n**The following has to be done today:**\n\n<@&698697566346412119>\n> Spotchecks\n\n<@&698697566346412118>\n> BHQ Logs\n\n<@&698697566346412117>\n> Event\n> Daily Announcement',
    '\n**ROTA** - https://imgur.com/a/qCI8SjY\n\n**The following has to be done today:**\n\n<@&698697566346412119>\n> Discharges\n\n<@&698697566346412118>\n> Event\n> Daily Announcement\n\n<@&698697566346412117>\n> BHQ Logs',
    '\n**ROTA** - https://imgur.com/a/qCI8SjY\n\n**The following has to be done today:**\n\n<@&698697566346412119>\n> BHQ Logs\n> Update CoC\n\n<@&698697566346412118>\n> Discharges\n\n<@&698697566346412117>\n> Event\n> Daily Announcement',
    '\n**ROTA** - https://imgur.com/a/qCI8SjY\n\n**The following has to be done today:**\n\n<@&698697566346412119>\n> BHQ Logs\n> Group Cleaning\n\n<@&698697566346412118>\n> Event\n> Daily Announcement\n\n<@&698697566346412117>\n> Discharges',
    '\n**ROTA** - https://imgur.com/a/qCI8SjY\n\n**The following has to be done today:**\n\n<@&698697566346412119>\n> Discharges\n\n<@&698697566346412118>\n> BHQ Logs\n\n<@&698697566346412117>\n> Event\n> Daily Announcement',
    '\n**ROTA** - https://imgur.com/a/qCI8SjY\n\n**The following has to be done today:**\n\n<@&698697566346412119>\n> Reforms\n> Administration Work (if needed)\n\n<@&698697566346412118>\n> Discharges\n\n<@&698697566346412117>\n> BHQ Logs',
    ]

async function transmit() {
    const today = new Date().getDay();
    const previousDay = today === 0 ? 6 : today - 1; 

    const message = messages[previousDay];

    webhook.send({
        content: `<t:${Math.floor(new Date().getTime() / 1000)}:F> (<t:${Math.floor(new Date().getTime() / 1000)}:R>)\n${message}`
    })
    .then(() => console.log('Webhook transmission successfully made'))
    .catch(console.error);
}

transmit();

setInterval(transmit, 24 * 60 * 60 * 1000);

console.log('Webhook transmission successful');

keepAlive();