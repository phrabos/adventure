const planner = {
    id: 'planner',
    title: 'Financial Planner\'s Office',
    image: 'advisor.jpg',
    description: `
        You enter the financial planners office and are presented with investing strategies for the recent surge in price of GameSpot stock. What do you do?
    `,
    choices: [{
        id: 'ignore',
        description: 'Ignore the advice.',
        result: `
            They give you 10 coins just for listening to their plan. 
        `,
        greed: 0,
        coin: 10
    }, {
        id: 'short',
        description: 'Buy put-contracts to lock in a sale price for a future date',
        result: `
            Green increases by 30 and coins increase by 50.
        `,
        greed: 30,
        coin: 50
    }, {
        id: 'double',
        description: 'Double down on initial investment',
        result: `
            Your greed has increased by 50 but your coins decreased by 50.
        `,
        greed: 50,
        coin: -50
    }]
};

const reddit = {
    id: 'reddit',
    title: 'WallStreetBets Forum',
    image: 'WallStreetBets.png',
    description: `
        You log into the WallStreetBets subreddit for the latest hot takes.
    `,
    choices: [{
        id: 'theater',
        description: 'Invest in AMC now to squeeze the short positions',
        result: `
            Your investment risk pays off your coins increased by 50, but your greed also increased by 35.
        `,
        greed: 35,
        coin: 50
    }, {
        id: 'profit',
        description: 'Ignore the hype, sell your initial shares.',
        result: `
            You decide to ignore all the hype and sell what you have already invested. Your coins increase by 30.
        `,
        greed: 10,
        coin: 30
    }, {
        id: 'hold',
        description: 'Hold what you have and ride the wave.',
        result: `
            The SEC halts trading due to unusualy high trading volume causing the stock to free-fall and you lose 90 coins and greed increases by 40.
        `,
        greed: 40,
        coin: -90
    }]
};

const news = {
    id: 'news',
    title: 'Newspapers',
    image: 'news.jpg',
    description: `
    You stop by a news stand but only have enough cash to pay for one newpaper.
    `,
    choices: [{
        id: 'financial',
        description: 'Financial Times',
        result: 'You cannot interpret the charts and decide to be patient to learn more. Your greed goes down by 20.',
        greed: -20,
        coin: 0
    }, {
        id: 'journal',
        description: 'Wall Street Journal',
        result: 'You make wise decisions and coins increase by 50, but greed also increases by 10.',
        greed: 10,
        coin: 50
    }, {
        id: 'economist',
        description: 'The Economist',
        result: 'Your read the charts incorrectly and lose 40 coins on bad investments and your greed increases by 50 for making hasty decisions.',
        greed: 50,
        coin: -40
    }]
};

export const rooms = [
    planner, 
    reddit,
    news,
];