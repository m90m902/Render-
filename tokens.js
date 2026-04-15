// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1483784072571654215",
        serverId: "1468584998801244162",
        token: process.env.token1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "dnd",
        },
        selfMute: true,
    },
];
