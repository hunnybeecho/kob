package com.kob.backend.service.impl.user.bot;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.kob.backend.mapper.BotMapper;
import com.kob.backend.pojo.Bot;
import com.kob.backend.pojo.User;
import com.kob.backend.service.user.bot.AddBotService;
import com.kob.backend.utils.UserUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class AddBotServiceImpl implements AddBotService {

    @Autowired
    private BotMapper botMapper;

    @Override
    public Map<String, String> add(Map<String, String> data) {
        User user = UserUtil.getUser();

        String title = data.get("title");
        String description = data.get("description");
        String code = data.get("code");

        Map<String, String> map = new HashMap<>();

        if (title == null || title.length() == 0) {
            map.put("error_message", "标题不能为空");
            return map;
        }

        if (title.length() > 100) {
            map.put("error_message", "标题长度不能超过100");
            return map;
        }

        if (description == null || description.length() == 0) {
            description = "这个用户很懒，什么也没留下~";
        }

        if (description.length() > 300) {
            map.put("error_message", "描述的长度不能超过300");
            return map;
        }

        if (code == null || code.length() == 0) {
            map.put("error_message", "代码不能为空");
            return map;
        }

        if (code.length() > 10000) {
            map.put("error_message", "代码长度不能超过10000");
            return map;
        }

        QueryWrapper<Bot> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_id", user.getId());
        if (botMapper.selectCount(queryWrapper) >= 10) {
            map.put("error_message", "每位用户最多只能创建10个Bot");
            return map;
        }

        Date now = new Date();
        Bot bot = new Bot(null, user.getId(), title, description, code, now, now);

        botMapper.insert(bot);
        map.put("error_message", "success");

        return map;
    }
}
