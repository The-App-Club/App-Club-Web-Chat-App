App Engineにデプロイする

```bash
$ time gcloud app deploy
Services to deploy:

descriptor:      [/home/gri-user/gri-wrksp/project_chat_application/server/app.yaml]
source:          [/home/gri-user/gri-wrksp/project_chat_application/server]
target project:  [something]
target service:  [default]
target version:  [20220219t170216]
target url:      [https://something.an.r.appspot.com]


Do you want to continue (Y/n)?  y

Beginning deployment of service [default]...
Building and pushing image for service [default]
Started cloud build [13877f57-8ee1-4f59-b5f0-58ee3b20022e].
To see logs in the Cloud Console: https://console.cloud.google.com/cloud-build/builds/13877f57-8ee1-4f59-b5f0-58ee3b20022e?project=564843025605
---------------------------------------------------------------------------------------------- REMOTE BUILD OUTPUT ----------------------------------------------------------------------------------------------
starting build "13877f57-8ee1-4f59-b5f0-58ee3b20022e"

FETCHSOURCE
Fetching storage object: gs://staging.something.appspot.com/asia.gcr.io/something/appengine/default.20220219t170216:latest#1645257742509360
Copying gs://staging.something.appspot.com/asia.gcr.io/something/appengine/default.20220219t170216:latest#1645257742509360...
/ [1 files][ 25.3 KiB/ 25.3 KiB]
Operation completed over 1 objects/25.3 KiB.
BUILD
Starting Step #0
Step #0: Pulling image: gcr.io/gcp-runtimes/nodejs/gen-dockerfile@sha256:770f37e7042652138c7dac203fc35ef0218002515ddd9f311db1c6c54d6816aa
Step #0: gcr.io/gcp-runtimes/nodejs/gen-dockerfile@sha256:770f37e7042652138c7dac203fc35ef0218002515ddd9f311db1c6c54d6816aa: Pulling from gcp-runtimes/nodejs/gen-dockerfile
Step #0: Digest: sha256:770f37e7042652138c7dac203fc35ef0218002515ddd9f311db1c6c54d6816aa
Step #0: Status: Downloaded newer image for gcr.io/gcp-runtimes/nodejs/gen-dockerfile@sha256:770f37e7042652138c7dac203fc35ef0218002515ddd9f311db1c6c54d6816aa
Step #0: gcr.io/gcp-runtimes/nodejs/gen-dockerfile@sha256:770f37e7042652138c7dac203fc35ef0218002515ddd9f311db1c6c54d6816aa
Step #0: Checking for Node.js.
Step #0: WARNING:  Your package.json does not specify a supported Node.js version.  Please pin your application to a major version of the Node.js runtime.  To learn more, visit https://cloud.google.com/appengine/docs/flexible/nodejs/runtime
Finished Step #0
Starting Step #1
Step #1: Already have image (with digest): gcr.io/kaniko-project/executor@sha256:f87c11770a4d3ed33436508d206c584812cd656e6ed08eda1cff5c1ee44f5870
Step #1: INFO[0000] Removing ignored files from build context: [node_modules .dockerignore Dockerfile npm-debug.log yarn-error.log .git .hg .svn app.yaml]
Step #1: INFO[0000] Downloading base image gcr.io/google-appengine/nodejs@sha256:0bdbbb23f7dc23a04b3dcef4e4206aa8c485401ef0971f612483e3c15a2f5c89
Step #1: INFO[0016] Taking snapshot of full filesystem...
Step #1: INFO[0024] Using files from context: [/workspace]
Step #1: INFO[0024] COPY . /app/
Step #1: INFO[0024] Taking snapshot of files...
Step #1: INFO[0024] RUN yarn install --production ||   ((if [ -f yarn-error.log ]; then       cat yarn-error.log;     fi) && false)
Step #1: INFO[0024] cmd: /bin/sh
Step #1: INFO[0024] args: [-c yarn install --production ||   ((if [ -f yarn-error.log ]; then       cat yarn-error.log;     fi) && false)]
Step #1: yarn install v1.22.15
Step #1: warning package.json: No license field
Step #1: warning No license field
Step #1: [1/4] Resolving packages...
Step #1: [2/4] Fetching packages...
Step #1: info fsevents@2.3.2: The platform "linux" is incompatible with this module.
Step #1: info "fsevents@2.3.2" is an optional dependency and failed compatibility check. Excluding it from installation.
Step #1: [3/4] Linking dependencies...
Step #1: [4/4] Building fresh packages...
Step #1: Done in 3.21s.
Step #1: INFO[0027] Taking snapshot of full filesystem...
Step #1: INFO[0033] CMD yarn start
Step #1: 2022/02/19 08:03:09 existing blob: sha256:149ca806ce24e424de6b95537e500a95befc6170af6f3950ad7d3300a0bd553e
Step #1: 2022/02/19 08:03:09 existing blob: sha256:0c92c0174473697eafc7a099d1f22cfdfa76db7e64785a644606ef70705ef228
Step #1: 2022/02/19 08:03:09 existing blob: sha256:e771f6819191a0d864df55bedc899feb716a26385c5e77ad2b54a118988f341a
Step #1: 2022/02/19 08:03:09 existing blob: sha256:7792ca7a7f21e17bc53f921f780e1718514a02c3d5ade1a96c6d1f4eb7123798
Step #1: 2022/02/19 08:03:09 existing blob: sha256:8ca77d5ce16632222cc29e986c56ca5fc37250470c8ce90c42d71a7f2ecf8c12
Step #1: 2022/02/19 08:03:09 existing blob: sha256:a7224540064cc87b72a29887f365ed9d2fe0118b3482c883200302550f5a6392
Step #1: 2022/02/19 08:03:09 existing blob: sha256:3c2cba919283a210665e480bcbf943eaaf4ed87a83f02e81bb286b8bdead0e75
Step #1: 2022/02/19 08:03:09 existing blob: sha256:6c5b97b864a653d10b2da9fe9e48b9bea155199471b64a28c40a809c39393b00
Step #1: 2022/02/19 08:03:09 existing blob: sha256:0a0b39797a025caf34185139ad9ee21745adaae1c2443937f671b04235b592d7
Step #1: 2022/02/19 08:03:09 existing blob: sha256:ae824242c664a9813df0a4c608f666f1340fdca63a2a018edb6627e24dfa1677
Step #1: 2022/02/19 08:03:12 pushed blob sha256:19b6396e20584fa1b19d744943b60825804a338a70e627a09e5a78ae5c8513fc
Step #1: 2022/02/19 08:03:12 pushed blob sha256:b29e65f5a391a324a0dcc5962fee3e4ed8c01876b1e2069b829922ef84ca0b9d
Step #1: 2022/02/19 08:03:13 pushed blob sha256:1f679825e59742fa71273e65e7b4d7e3a9525e47dafdabc4c1114e000d0f914e
Step #1: 2022/02/19 08:03:14 asia.gcr.io/something/appengine/default.20220219t170216:latest: digest: sha256:28fd9a5b585c8abe432e79ada926818b973a7a8772b954303f4e0067ef0aad0a size: 2220
Finished Step #1
PUSH
DONE
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Updating service [default] (this may take several minutes)...done.
Setting traffic split for service [default]...done.
Deployed service [default] to [https://something.an.r.appspot.com]

You can stream logs from the command line by running:
  $ gcloud app logs tail -s default

To view your application in the web browser run:
  $ gcloud app browse

real    5m43.864s
user    0m2.758s
sys     0m0.385s
```