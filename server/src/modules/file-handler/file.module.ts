import { Module } from '@nestjs/common';
import { FileService } from '@modules/file-handler/file.service';

@Module({
  providers: [FileService],
  exports: [FileService],
})
export class FileModule {}
