package com.kob.backend.service.impl.user.account;

import com.kob.backend.mapper.UserMapper;
import com.kob.backend.pojo.User;
import com.kob.backend.service.user.account.UpdatePasswordService;
import com.kob.backend.utils.JwtUtil;
import com.kob.backend.utils.UserUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class UpdatePasswordServiceImpl implements UpdatePasswordService {

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public Map<String, String> updatePassword(String oldPassword, String newPassword, String confirmedPassword) {
        User user = UserUtil.getUser();
        boolean matches = passwordEncoder.matches(oldPassword, user.getPassword());

        Map<String, String> map = new HashMap<>();

        if (!matches) {
            map.put("error_message", "原密码错误");
            return map;
        }

        if (newPassword == null || confirmedPassword == null || newPassword.equals("") || confirmedPassword.equals("")) {
            map.put("error_message", "密码不能为空");
            return map;
        }

        if (newPassword.equals(oldPassword)) {
            map.put("error_message", "新旧密码不能相同");
            return map;
        }

        if (!newPassword.equals(confirmedPassword)) {
            map.put("error_message", "两次输入的密码不一致");
            return map;
        }

        String encodedPassword = passwordEncoder.encode(newPassword);
        userMapper.updateById(new User(
                user.getId(),
                user.getUsername(),
                encodedPassword,
                user.getAvatar(),
                user.getDescription(),
                user.getRating()
        ));

        String jwt = JwtUtil.createJWT(user.getId().toString());

        map.put("error_message", "success");
        map.put("token", jwt);
        return map;
    }
}
