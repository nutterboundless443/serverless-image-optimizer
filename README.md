# 无服务器图片优化工具

## 项目介绍
这是一个利用无服务器架构（如 AWS Lambda、Azure Functions 或是 Google Cloud Functions）构建的图片优化工具。通过这个工具，用户可以上传图片，系统会自动进行压缩和调整尺寸，以提高网页加载速度和用户体验。

## 功能
- 上传图片并生成优化后的版本。
- 支持多种图片格式，如 JPEG、PNG、GIF 等。
- 根据指定的尺寸参数自动调整图片大小。
- 输出优化成功与否的反馈消息。

## 技术栈
- AWS Lambda/Azure Functions/Google Cloud Functions
- S3 或其他云存储服务
- Node.js 或 Python

## 使用步骤
1. 将代码克隆到本地：
   ```bash
   git clone https://github.com/yourusername/serverless-image-optimizer.git
   ```
2. 安装依赖：
   ```bash
   npm install  # 或者使用Python的pip
   ```
3. 部署无服务器函数到相应云平台。
4. 配置云存储，以允许文件上传。
5. 访问API以上传图片。

## 贡献
欢迎你提交 PR 和 Issue，感谢你的支持！

## 许可证
MIT 许可证。