import { Injectable, OnModuleInit } from '@nestjs/common';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { fileUploaderConfig } from '@config/file-uploader.config';
import { v4 } from 'uuid';

@Injectable()
export class FileService implements OnModuleInit {
  private s3: S3Client;
  onModuleInit() {
    this.s3 = new S3Client({
      credentials: {
        accessKeyId: fileUploaderConfig.AWS_ACCESS_KEY_ID,
        secretAccessKey: fileUploaderConfig.AWS_SECRET_ACCESS_KEY,
      },
      region: fileUploaderConfig.AWS_REGION,
    });
  }

  async uploadFile(file: Buffer, filename: string) {
    const params = {
      Bucket: fileUploaderConfig.BUCKET_NAME,
      Body: 'file',
      Key: `${v4()}-${filename}`,
    };
    const res = this.s3.send(new PutObjectCommand(params));
    console.log('aws log', res);
  }
}