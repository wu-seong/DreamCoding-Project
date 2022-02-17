import GameBuilder from './game.js'; 
const NewGame = new GameBuilder().
    target("carrot").
    disturb("bug").
    targetCount(10).
    disturbCount(10).
    playTime(10).
    build();