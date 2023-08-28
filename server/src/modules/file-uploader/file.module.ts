import { Module } from '@nestjs/common';
import { FileService } from '@modules/file-uploader/file.service';

@Module({
  providers: [FileService],
  exports: [FileService],
})
export class FileModule {}
