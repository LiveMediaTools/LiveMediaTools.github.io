---
sidebar_position: 1
---

import Command from '@theme/Command'

# Introduction for Authentication Algorithms

Xiu has provided some Authentication algorithms, including Simple Authentication, MD5 Authentication, and User-defined Authentication. Refer to the [configuration](../configurations/config-file#authentication) .

## Simple Authentication

After configuring the password, use it as a token in the push/pull stream address, for example:

```toml
[authsecret]
# used for simple authentication
password = "thisisthepassword"
```


The authenticated push/pull stream address is:

    rtmp://127.0.0.1:1935/live/test?token=thisisthepassword
    rtsp://127.0.0.1:5544/live/test?token=thisisthepassword
    http://127.0.0.1:8080/live/test.flv?token=thisisthepassword
    http://127.0.0.1:8081/live/test/test.m3u8?token=thisisthepassword
    http://127.0.0.1:8900/whip?app=live&stream=test&token=thisisthepassword
    http://127.0.0.1:8900/whep?app=live&stream=test&token=thisisthepassword



## MD5 Authentication

Firstly, configure the key:

```toml
[authsecret]
# used for md5 authentication.  
key = "md5string"
```

the authentication algorithms is as follows:
    
    token={md5({key}{stream_name})}

The push stream is as follows：

    rtmp://127.0.0.1:1935/live/test

the stream_name is test，the computed authentication string is：

    md5("testmd5string") = 3af79b11816b118e497810c9fb69ee65

The authenticated push stream address is:

    rtmp://127.0.0.1:1935/live/test?token=3af79b11816b118e497810c9fb69ee65


:::note

Online MD5 Calculation Tool：[https://www.md5hashgenerator.com/](https://www.md5hashgenerator.com/)
:::

## User-defined Authentication

Users can use the httpnotify+kickoff client method for authentication, which means informing the business side of the push/pull stream events. The business side extracts the token and relevant parameters for verifying the push/pull stream address. If the verification fails, the kickoff client is called to kick out the push/pull stream party."

About HTTP-Notify refer to [http-notify](../httpcallback/http-callback).

About Kickoff client refer to [http-api](../httpapi/http-api).
