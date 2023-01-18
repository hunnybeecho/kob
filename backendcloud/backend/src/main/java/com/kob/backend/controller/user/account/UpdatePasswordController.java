package com.kob.backend.controller.user.account;

import com.kob.backend.service.user.account.UpdatePasswordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class UpdatePasswordController {

    @Autowired
    private UpdatePasswordService updatePasswordService;

    @PostMapping("/user/account/update-password")
    public Map<String, String> updatePassword(@RequestParam Map<String, String> data) {
        String oldPassword = data.get("oldPassword");
        String newPassword = data.get("newPassword");
        String confirmedPassword = data.get("confirmedPassword");

        return updatePasswordService.updatePassword(oldPassword, newPassword, confirmedPassword);
    }
}
