Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("check_out_btn").Click
Browser("Advantage Shopping_2").Page("Advantage Shopping_5").WebEdit("usernameInOrderPayment").Set "Paolo"
Browser("Advantage Shopping_2").Page("Advantage Shopping_5").WebEdit("passwordInOrderPayment").SetSecure "59ee10c3a956c2710175c3f1e63a9fa66985293fc8907500083fcbde455c"
Browser("Advantage Shopping_2").Page("Advantage Shopping_5").WebEdit("passwordInOrderPayment").SetSecure "59ee10d1b1677bc6cdfcccf6705dcda5f305"
Browser("Advantage Shopping_2").Page("Advantage Shopping_5").WebButton("login_btn").Click
Browser("Advantage Shopping_2").Page("Advantage Shopping_6").WebButton("next_btn").Click
Browser("Advantage Shopping_2").Page("Advantage Shopping_6").WebButton("pay_now_btn").Click


