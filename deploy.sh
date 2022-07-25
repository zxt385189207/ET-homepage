#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github pages

if [ -z "$GITHUB_TOKEN" ]; then
  msg='[deploy] manual'
  githubUrl=git@github.com:zxt385189207/ET-homepage.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://zxt385189207:${GITHUB_TOKEN}@github.com/zxt385189207/ET-homepage.git
  git config --global user.name "小弟"
  git config --global user.email "385189207@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl HEAD:gh-pages # 推送到github gh-pages分支


cd -
rm -rf docs/.vuepress/dist

