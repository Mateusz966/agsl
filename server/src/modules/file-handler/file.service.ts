import { Injectable, OnModuleInit } from '@nestjs/common';
import {GetObjectCommand, PutObjectCommand, S3Client} from '@aws-sdk/client-s3';
import {
  getSignedUrl,
} from "@aws-sdk/s3-request-presigner";
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

  async uploadFile(file: Express.Multer.File, filename: string) {
    const key = `${v4()}-${filename}`;
    const params = {
      Bucket: fileUploaderConfig.BUCKET_NAME,
      Body: file.buffer,
      Key: key,
    };
    await this.s3.send(new PutObjectCommand(params));
    return key;
  }

  async getPrivateFile(fileId: string) {
    const params = {
      Bucket: fileUploaderConfig.BUCKET_NAME,
      Key: encodeURIComponent(fileId),
    };
    return getSignedUrl(this.s3, new GetObjectCommand(params), { expiresIn: 3600});
  }

}
