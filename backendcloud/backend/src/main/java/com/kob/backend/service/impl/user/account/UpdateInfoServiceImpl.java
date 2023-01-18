package com.kob.backend.service.impl.user.account;

import com.kob.backend.mapper.UserMapper;
import com.kob.backend.pojo.User;
import com.kob.backend.service.user.account.UpdateInfoService;
import com.kob.backend.utils.UserUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class UpdateInfoServiceImpl implements UpdateInfoService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public Map<String, String> updateInfo(Map<String, String> data) {
        User user = UserUtil.getUser();

        String username = data.get("username");
        String description = data.get("description");

        Map<String, String> map = new HashMap<>();

        if (username == null || username.equals("")) {
            map.put("error_message", "用户名不能为空");
            return map;
        }

        username = username.trim();
        if (username.length() == 0) {
            map.put("error_message", "用户名不能为空");
            return map;
        }

        if (username.length() > 16) {
            map.put("error_message", "用户名长度不能大于16");
            return map;
        }

        if (description.length() > 300) {
            map.put("error_message", "个人简介长度不能超过300");
            return map;
        }

        User new_user = new User(user.getId(), username, user.getPassword(), user.getAvatar(), description, user.getRating());

        int i = userMapper.updateById(new_user);
        if (i == 1) {
            map.put("error_message", "success");
        } else {
            map.put("error_message", "更新失败");
        }

        return map;
    }
}
