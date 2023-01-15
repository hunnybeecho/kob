export default {
    state: {
        status: "matching", // matching表示匹配界面，playing表示对战界面
        socket: null,
        opponent_username: "",
        opponent_avatar: "",
        game_map: null,
    },
    getters: {

    },
    mutations: {
        updateSocket(state, socket) {
            state.socket = socket;
        },
        updateOpponent(state, opponent) {
            state.opponent_username = opponent.username;
            state.opponent_avatar = opponent.avatar;
        },
        updateStatus(state, status) {
            state.status = status;
        },
        updateGameMap(state, game_map) {
            state.game_map = game_map;
        }
    },
    modules: {

    }
}