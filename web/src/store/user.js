import $ from 'jquery';

export default {
    state: {
        id: "",
        username: "",
        avatar: "",
        token: "",
        description: "",
        is_login: false,
    },
    mutations: {
        updateUser(state, user) {
            state.id = user.id;
            state.username = user.username;
            state.avatar = user.avatar;
            state.description = user.description;
            state.is_login = user.is_login;
        },
        updateToken(state, token) {
            state.token = token;
        },
        logout(state) {
            state.id = "";
            state.username = "";
            state.avatar = "";
            state.description = "";
            state.token = "";
            state.is_login = false;
        },
    },
    actions: {
        login(context, data) {
            $.ajax({
                // url: "http://127.0.0.1:3000/user/account/login",
                url: "https://app4553.acapp.acwing.com.cn/api/user/account/login",
                type: "POST",
                data: {
                    username: data.username,
                    password: data.password,
                },
                success(resp) {
                    if (resp.error_message === "success") {
                        localStorage.setItem("jwt_token", resp.token);
                        context.commit("updateToken", resp.token);
                        data.success(resp);
                    } else {
                        data.error(resp);
                    }
                },
                error(resp) {
                    data.error(resp);
                }
            });
        },
        getInfo(context, data) {
            $.ajax({
                // url: "http://127.0.0.1:3000/user/account/info",
                url: "https://app4553.acapp.acwing.com.cn/api/user/account/info",
                type: "GET",
                headers: {
                    Authorization: "Bearer " + context.state.token,
                },
                success(resp) {
                    if (resp.error_message === "success") {
                        context.commit("updateUser", {
                            ...resp,
                            is_login: true,
                        });
                        data.success(resp);
                    } else {
                        data.error(resp);
                    }
                },
                error(resp) {
                    data.error(resp);
                }
            });
        },
        logout(context) {
            localStorage.removeItem("jwt_token");
            context.commit("logout");
        },
        update_password(context, data) {
            $.ajax({
                type: "POST",
                // url: "http://127.0.0.1:3000/user/account/update-password",
                url: "https://app4553.acapp.acwing.com.cn/api/user/account/update-password",
                data: {
                    oldPassword: data.old_password,
                    newPassword: data.new_password,
                    confirmedPassword: data.confirmed_password,
                },
                headers: {
                    authorization: "Bearer " + context.state.token,
                },
                success(resp) {
                    if (resp.error_message === "success") {
                        context.commit("updateToken", resp.token);
                        localStorage.setItem("jwt_token", resp.token);
                        data.success(resp);
                    } else {
                        data.error(resp);
                    }
                },
                error(resp) {
                    data.error(resp);
                },
            });
        }

    },
    modules: {
    }
}