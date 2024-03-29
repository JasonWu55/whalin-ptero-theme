<?php

return [
    'email' => [
        'title' => '更新你的電子郵件',
        'updated' => '你的電子郵件地址已經更新。',
    ],
    'password' => [
        'title' => '更改你的密碼',
        'requirements' => '你的新密碼應至少為8個字符長。',
        'updated' => '你的密碼已經更新。',
    ],
    'two_factor' => [
        'button' => '配置2FA身份驗證',
        'disabled' => '你的帳戶上已禁用2FA身份驗證。在登錄時將不再需要提供代碼。',
        'enabled' => '你的帳戶上已啟用2FA身份驗證！從現在開始，登錄時將需要提供你設備生成的代碼。',
        'invalid' => '提供的代碼無效。',
        'setup' => [
            'title' => '設置雙因素身份驗證',
            'help' => '無法掃描代碼嗎？將下面的代碼輸入到你的應用程序中：',
            'field' => '輸入代碼',
        ],
        'disable' => [
            'title' => '禁用雙因素身份驗證',
            'field' => '輸入代碼',
        ],
    ],
];
