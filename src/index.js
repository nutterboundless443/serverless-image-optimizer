const AWS = require('aws-sdk');
const Sharp = require('sharp');
const S3 = new AWS.S3();

exports.handler = async (event) => {
    const bucket = event.Records[0].s3.bucket.name;
    const key = decodeURIComponent(event.Records[0].s3.object.key);

    const originalImage = await S3.getObject({ Bucket: bucket, Key: key }).promise();

    const optimizedImage = await Sharp(originalImage.Body)
        .resize(800) // 调整宽度为800px
        .toFormat('jpeg', { quality: 80 })
        .toBuffer();

    await S3.putObject({
        Bucket: bucket,
        Key: `optimized/${key}`,
        Body: optimizedImage,
        ContentType: 'image/jpeg'
    }).promise();

    return {
        statusCode: 200,
        body: JSON.stringify('图片优化成功！')
    };
};